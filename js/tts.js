/* ============ Âm thanh: đọc tiếng Trung + nhận diện giọng nói ============
   Ba lớp phát âm, tự động chuyển tiếp khi lớp trước hỏng:
     1. Giọng tiếng Trung cài trên máy  (offline, tốt nhất)
     2. Giọng bất kỳ + lang zh-CN       (khi chưa nạp xong danh sách giọng)
     3. Phát qua mạng (Google TTS)      (khi máy hoàn toàn không có giọng Trung)
   ====================================================================== */
(function () {
  const synth = window.speechSynthesis;

  let voices = [], zhVoices = [], picked = null;
  let voicesReady = false;          // đã thực sự nhận được danh sách giọng chưa
  let current = null;               // GIỮ tham chiếu utterance: Chrome/Safari hay
                                    // thu gom rác giữa chừng làm câm nửa câu
  let lastError = "", everSpoke = false, lastEngine = "";
  const listeners = [];

  function rank(v) {
    const l = (v.lang || "").toLowerCase().replace("_", "-");
    let r;
    if (l === "zh-cn") r = 0;
    else if (l.startsWith("zh-han") || l === "zh") r = 1;
    else if (l.startsWith("zh")) r = 2;            // zh-TW / zh-HK: phát âm khác đại lục
    else r = 9;
    return r + (v.localService === false ? 4 : 0); // giọng offline đáng tin hơn giọng online
  }

  function loadVoices() {
    if (!synth) return;
    try { voices = synth.getVoices() || []; } catch (e) { voices = []; }
    if (voices.length) voicesReady = true;
    zhVoices = voices.filter(v => (v.lang || "").toLowerCase().startsWith("zh")).sort((a, b) => rank(a) - rank(b));
    if (!picked || zhVoices.indexOf(picked) === -1) picked = zhVoices[0] || null;
  }

  function notify() { listeners.slice().forEach(f => { try { f(); } catch (e) {} }); }
  function onVoices(cb) { listeners.push(cb); }

  if (synth) {
    loadVoices();
    const reload = () => { const had = !!picked; loadVoices(); if (!had && picked) notify(); };
    if (typeof synth.addEventListener === "function") synth.addEventListener("voiceschanged", reload);
    synth.onvoiceschanged = reload;
    // iOS và Chrome nạp danh sách giọng không đồng bộ, đôi khi rất muộn
    [200, 600, 1200, 2500, 5000].forEach(ms => setTimeout(reload, ms));
  }

  /* ---------- mở khoá âm thanh trong lần chạm đầu tiên ---------- */
  let audioEl = null, audioUnlocked = false, silentURL = null;

  function makeSilentWav() {
    const sr = 8000, n = 400;
    const buf = new ArrayBuffer(44 + n * 2), v = new DataView(buf);
    const put = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
    put(0, "RIFF"); v.setUint32(4, 36 + n * 2, true); put(8, "WAVE");
    put(12, "fmt "); v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
    v.setUint32(24, sr, true); v.setUint32(28, sr * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true);
    put(36, "data"); v.setUint32(40, n * 2, true);
    return URL.createObjectURL(new Blob([buf], { type: "audio/wav" }));
  }

  function ensureAudioEl() {
    if (audioEl) return audioEl;
    audioEl = new Audio();
    audioEl.preload = "auto";
    audioEl.crossOrigin = null;
    return audioEl;
  }

  // Chạm đầu tiên: nạp lại giọng + "mở khoá" thẻ audio để sau này phát được
  // ngoài thao tác người dùng (iOS chặn phát tự động nếu chưa từng mở khoá).
  function unlock() {
    loadVoices();
    try {
      const a = ensureAudioEl();
      if (!audioUnlocked) {
        if (!silentURL) silentURL = makeSilentWav();
        a.src = silentURL;
        const p = a.play();
        if (p && p.then) p.then(() => { audioUnlocked = true; a.pause(); }).catch(() => {});
        else { audioUnlocked = true; a.pause(); }
      }
    } catch (e) { /* bỏ qua */ }
  }
  ["touchend", "click"].forEach(ev =>
    document.addEventListener(ev, unlock, { once: true, passive: true })
  );

  /* ---------- cấu hình ---------- */
  function cfg() { return (window.Store && Store.S && Store.S.settings) || {}; }
  function netAllowed() { return cfg().netAudio !== false; }
  function source() { return cfg().audioSource || "auto"; }   // auto | device | net

  /* ---------- lớp 3: phát qua mạng ---------- */
  function netURL(text) {
    return "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=zh-CN&q=" + encodeURIComponent(text);
  }

  function playNet(text, opts) {
    opts = opts || {};
    if (!netAllowed()) { fail("net-off", opts); return false; }
    if (navigator.onLine === false) { fail("offline", opts); return false; }
    if (String(text).length > 180) { fail("too-long", opts); return false; }
    try {
      const a = ensureAudioEl();
      a.onended = null; a.onerror = null;
      a.src = netURL(text);
      a.playbackRate = Math.max(0.5, Math.min(1.2, cfg().rate || 0.85));
      a.onended = () => { speaking = false; opts.onend && opts.onend(); };
      a.onerror = () => { speaking = false; fail("net-error", opts); opts.onend && opts.onend(); };
      const p = a.play();
      if (p && p.catch) p.catch(err => {
        speaking = false;
        fail(err && err.name === "NotAllowedError" ? "blocked" : "net-error", opts);
      });
      speaking = true; everSpoke = true; lastEngine = "net";
      return true;
    } catch (e) { fail("net-error", opts); return false; }
  }

  function fail(code, opts) {
    lastError = code;
    opts && opts.onfail && opts.onfail(code);
  }

  /* ---------- lớp 1 & 2: giọng của máy ---------- */
  let speaking = false;

  function makeUtterance(text, opts) {
    const u = new SpeechSynthesisUtterance(String(text).replace(/[—…·]/g, " "));
    if (picked) { u.voice = picked; u.lang = picked.lang || "zh-CN"; }
    else u.lang = "zh-CN";
    u.rate = opts.rate || cfg().rate || 0.85;
    u.pitch = 1;
    u.volume = 1;
    return u;
  }

  function speak(text, opts) {
    opts = opts || {};
    if (!text) return false;
    lastError = "";

    const src = source();
    if (src === "net") return playNet(text, opts);
    if (!synth) return playNet(text, opts);          // trình duyệt không hỗ trợ đọc

    // Không có giọng tiếng Trung nào VÀ danh sách đã nạp xong → đi thẳng qua mạng
    if (voicesReady && !picked && src === "auto") return playNet(text, opts);

    try {
      if (synth.speaking || synth.pending) synth.cancel();   // chỉ huỷ khi thật sự cần
      if (synth.paused) synth.resume();

      let started = false, tried = 0, done = false, t1 = null, t2 = null;
      const clear = () => { clearTimeout(t1); clearTimeout(t2); };

      const fire = () => {
        tried++;
        const u = makeUtterance(text, opts);
        current = u;                                   // chặn thu gom rác
        u.onstart = () => { started = true; everSpoke = true; speaking = true; lastEngine = "device"; clear(); };
        u.onend = () => {
          speaking = false; current = null;
          if (done) return; done = true; clear();
          opts.onend && opts.onend();
        };
        u.onerror = e => {
          speaking = false; current = null;
          const err = (e && e.error) || "unknown";
          if (err === "interrupted" || err === "canceled") return;   // người dùng bấm câu khác
          clear();
          if (!done && src === "auto" && netAllowed()) { done = true; playNet(text, opts); return; }
          if (!done) { done = true; fail(err, opts); opts.onend && opts.onend(); }
        };
        synth.speak(u);
      };

      fire();

      // Watchdog 1: iOS/Chrome đôi khi nuốt lệnh đầu tiên → thử lại một lần
      t1 = setTimeout(() => {
        if (started || done || synth.speaking || synth.pending) return;
        if (tried < 2) { try { synth.resume(); } catch (e) {} fire(); }
      }, 400);

      // Watchdog 2: vẫn không ra tiếng → chuyển sang phát qua mạng
      t2 = setTimeout(() => {
        if (started || done || synth.speaking) return;
        done = true;
        try { synth.cancel(); } catch (e) {}
        if (src === "auto" && netAllowed()) playNet(text, opts);
        else fail("no-audio", opts);
      }, 1400);

      return true;
    } catch (e) {
      if (src === "auto" && netAllowed()) return playNet(text, opts);
      fail(e.message || "error", opts);
      return false;
    }
  }

  function speakSeq(list, gap, done) {
    let i = 0;
    const next = () => {
      if (i >= list.length) { done && done(); return; }
      const item = list[i++];
      speak(item, { onend: () => setTimeout(next, gap == null ? 550 : gap) });
    };
    next();
  }

  function stop() {
    try { synth && synth.cancel(); } catch (e) {}
    try { if (audioEl) { audioEl.pause(); audioEl.onended = null; audioEl.onerror = null; } } catch (e) {}
    current = null; speaking = false;
  }

  function pickVoice(i) {
    loadVoices();
    if (zhVoices[i]) { picked = zhVoices[i]; return picked.name; }
    return null;
  }

  function available() { return !!synth || netAllowed(); }
  function hasChineseVoice() { return !!picked; }
  function ready() { return voicesReady; }

  function status() {
    loadVoices();
    return {
      supported: !!synth,
      voicesReady: voicesReady,
      totalVoices: voices.length,
      zh: zhVoices.map(v => ({ name: v.name, lang: v.lang, local: v.localService !== false })),
      picked: picked ? picked.name + " (" + picked.lang + ")" : null,
      everSpoke: everSpoke,
      lastEngine: lastEngine,
      lastError: lastError,
      netAllowed: netAllowed(),
      online: navigator.onLine !== false,
      audioUnlocked: audioUnlocked,
      recognition: !!(window.SpeechRecognition || window.webkitSpeechRecognition),
      protocol: location.protocol
    };
  }

  /* ---------- nhận diện giọng nói ---------- */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  function recognize(cb) {
    if (!SR) { cb({ error: "unsupported" }); return null; }
    let r;
    try { r = new SR(); } catch (e) { cb({ error: "unsupported" }); return null; }
    r.lang = "zh-CN";
    r.interimResults = false;
    r.maxAlternatives = 3;
    r.continuous = false;
    r.onresult = e => {
      const alts = [];
      for (let i = 0; i < e.results[0].length; i++) alts.push(e.results[0][i].transcript);
      cb({ text: alts[0] || "", alts: alts });
    };
    r.onerror = e => cb({ error: e.error || "error" });
    r.onend = () => cb({ end: true });
    try { r.start(); } catch (e) { cb({ error: "start" }); }
    return r;
  }
  function recognitionSupported() { return !!SR; }

  /* ---------- chấm điểm phát âm ---------- */
  function clean(s) {
    return String(s || "").replace(/[\s，。！？、,.!?;:；：""''（）()\-—…·]/g, "");
  }
  function score(said, target) {
    const a = clean(said), b = clean(target);
    if (!a || !b) return 0;
    const m = a.length, n = b.length;
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= m; i++) {
      let prev = 0;
      for (let j = 1; j <= n; j++) {
        const tmp = dp[j];
        dp[j] = a[i - 1] === b[j - 1] ? prev + 1 : Math.max(dp[j], dp[j - 1]);
        prev = tmp;
      }
    }
    return Math.round((dp[n] * 2 / (m + n)) * 100);
  }

  window.TTS = {
    speak, speakSeq, stop, available, hasChineseVoice, ready, unlock, status,
    pickVoice, playNet, onVoices,
    recognize, recognitionSupported, score,
    get speaking() { return speaking; },
    get lastError() { return lastError; }
  };
})();
