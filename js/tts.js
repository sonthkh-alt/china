/* ============ Âm thanh: đọc tiếng Trung + nhận diện giọng nói ============ */
(function () {
  const synth = window.speechSynthesis;
  let voices = [], picked = null, unlocked = false;

  function loadVoices() {
    if (!synth) return;
    voices = synth.getVoices() || [];
    // Ưu tiên giọng Trung đại lục
    const rank = v => {
      const l = (v.lang || "").toLowerCase().replace("_", "-");
      if (l === "zh-cn") return 0;
      if (l.startsWith("zh-han") || l === "zh") return 1;
      if (l.startsWith("zh")) return 2;
      return 9;
    };
    const zh = voices.filter(v => (v.lang || "").toLowerCase().startsWith("zh")).sort((a, b) => rank(a) - rank(b));
    picked = zh[0] || null;
  }
  if (synth) {
    loadVoices();
    synth.onvoiceschanged = loadVoices;
    // iOS đôi khi trả về danh sách rỗng ở lần gọi đầu
    setTimeout(loadVoices, 400);
    setTimeout(loadVoices, 1500);
  }

  // iOS chỉ cho phát âm sau một thao tác chạm của người dùng
  function unlock() {
    if (unlocked || !synth) return;
    try {
      const u = new SpeechSynthesisUtterance(" ");
      u.volume = 0; u.lang = "zh-CN";
      synth.speak(u);
      unlocked = true;
      loadVoices();
    } catch (e) { /* bỏ qua */ }
  }
  ["touchend", "click"].forEach(ev =>
    document.addEventListener(ev, unlock, { once: true, passive: true })
  );

  let speaking = false;
  function speak(text, opts) {
    if (!synth || !text) return false;
    opts = opts || {};
    try {
      synth.cancel();                       // tránh nghẽn hàng đợi trên iOS
      if (synth.paused) synth.resume();
      const u = new SpeechSynthesisUtterance(String(text).replace(/[—…]/g, " "));
      u.lang = "zh-CN";
      if (picked) u.voice = picked;
      const st = (window.Store && Store.S && Store.S.settings) || {};
      u.rate = opts.rate || st.rate || 0.85;
      u.pitch = 1;
      u.volume = 1;
      u.onstart = () => { speaking = true; };
      u.onend = () => { speaking = false; opts.onend && opts.onend(); };
      u.onerror = () => { speaking = false; opts.onend && opts.onend(); };
      synth.speak(u);
      return true;
    } catch (e) { return false; }
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

  function stop() { try { synth && synth.cancel(); } catch (e) {} speaking = false; }
  function available() { return !!synth; }
  function hasChineseVoice() { return !!picked; }

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
    // LCS trên ký tự Hán
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

  window.TTS = { speak, speakSeq, stop, available, hasChineseVoice, unlock, recognize, recognitionSupported, score, get speaking() { return speaking; } };
})();
