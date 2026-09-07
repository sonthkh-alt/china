/* ============ Âm thanh: đọc tiếng Trung + nhận diện giọng nói ============ */
(function () {
  const synth = window.speechSynthesis;
  let voices = [], zhVoices = [], picked = null;
  let lastError = "", everSpoke = false;

  function rank(v) {
    const l = (v.lang || "").toLowerCase().replace("_", "-");
    let r;
    if (l === "zh-cn") r = 0;
    else if (l.startsWith("zh-han") || l === "zh") r = 1;
    else if (l.startsWith("zh")) r = 2;          // zh-TW / zh-HK: phát âm khác đại lục
    else r = 9;
    // Giọng cài sẵn trên máy đáng tin hơn giọng online (mất mạng là câm)
    return r + (v.localService === false ? 4 : 0);
  }

  function loadVoices() {
    if (!synth) return;
    try { voices = synth.getVoices() || []; } catch (e) { voices = []; }
    zhVoices = voices.filter(v => (v.lang || "").toLowerCase().startsWith("zh")).sort((a, b) => rank(a) - rank(b));
    if (!picked || !zhVoices.includes(picked)) picked = zhVoices[0] || null;
  }

  if (synth) {
    loadVoices();
    // iOS/Chrome nạp danh sách giọng không đồng bộ
    if (typeof synth.addEventListener === "function") synth.addEventListener("voiceschanged", loadVoices);
    synth.onvoiceschanged = loadVoices;
    [300, 900, 2000, 4000].forEach(ms => setTimeout(loadVoices, ms));
  }

  // Chạm đầu tiên: chỉ nạp lại danh sách giọng.
  // KHÔNG phát utterance rỗng ở đây — trên iOS việc đó dễ làm kẹt hàng đợi.
  function unlock() { loadVoices(); }
  ["touchend", "click"].forEach(ev =>
    document.addEventListener(ev, unlock, { once: true, passive: true })
  );

  function makeUtterance(text, opts) {
    const u = new SpeechSynthesisUtterance(String(text).replace(/[—…·]/g, " "));
    u.lang = "zh-CN";
    if (picked) u.voice = picked;
    const st = (window.Store && Store.S && Store.S.settings) || {};
    u.rate = opts.rate || st.rate || 0.85;
    u.pitch = 1;
    u.volume = 1;
    return u;
  }

  let speaking = false;

  function speak(text, opts) {
    opts = opts || {};
    if (!synth) { lastError = "Trình duyệt không hỗ trợ đọc văn bản."; opts.onfail && opts.onfail(lastError); return false; }
    if (!text) return false;
    lastError = "";

    try {
      // Chỉ huỷ khi thật sự đang có gì đó phát — huỷ vô cớ làm Safari iOS câm.
      if (synth.speaking || synth.pending) synth.cancel();
      if (synth.paused) synth.resume();

      let started = false, tried = 0;

      const fire = () => {
        tried++;
        const u = makeUtterance(text, opts);
        u.onstart = () => { started = true; everSpoke = true; speaking = true; };
        u.onend = () => { speaking = false; opts.onend && opts.onend(); };
        u.onerror = e => {
          speaking = false;
          const err = (e && e.error) || "unknown";
          // "interrupted"/"canceled" là bình thường khi người dùng bấm câu khác
          if (err !== "interrupted" && err !== "canceled") {
            lastError = err;
            opts.onfail && opts.onfail(err);
          }
          opts.onend && opts.onend();
        };
        synth.speak(u);

        // Watchdog: iOS đôi khi nuốt lệnh đầu tiên — thử lại đúng một lần.
        setTimeout(() => {
          if (started || synth.speaking || synth.pending) return;
          if (tried < 2) { try { synth.resume(); } catch (e) {} fire(); }
          else if (!everSpoke) {
            lastError = "no-audio";
            opts.onfail && opts.onfail("no-audio");
          }
        }, 350);
      };

      fire();
      return true;
    } catch (e) {
      lastError = e.message || "error";
      opts.onfail && opts.onfail(lastError);
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

  // Cho phép người dùng chọn thủ công một giọng tiếng Trung khác
  function pickVoice(i) {
    loadVoices();
    if (zhVoices[i]) { picked = zhVoices[i]; return picked.name; }
    return null;
  }

  function stop() { try { synth && synth.cancel(); } catch (e) {} speaking = false; }
  function available() { return !!synth; }
  function hasChineseVoice() { return !!picked; }

  function status() {
    loadVoices();
    return {
      supported: !!synth,
      totalVoices: voices.length,
      zh: zhVoices.map(v => ({ name: v.name, lang: v.lang, local: v.localService })),
      picked: picked ? picked.name + " (" + picked.lang + ")" : null,
      everSpoke: everSpoke,
      lastError: lastError,
      recognition: !!(window.SpeechRecognition || window.webkitSpeechRecognition),
      secure: window.isSecureContext !== false,
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
    speak, speakSeq, stop, available, hasChineseVoice, unlock, status, pickVoice,
    recognize, recognitionSupported, score,
    get speaking() { return speaking; },
    get lastError() { return lastError; }
  };
})();
