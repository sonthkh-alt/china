/* ============ Store: trạng thái + localStorage + SRS ============ */
(function () {
  const KEY = "hanyu90.v1";

  const DEFAULTS = {
    version: 1,
    startDate: null,          // "YYYY-MM-DD"
    currentDay: 1,            // ngày đang học (1..90)
    completed: {},            // { "12": {date:"2026-01-02", minutes:62} }
    srs: {},                  // { "你好": {ef,iv,due,reps,lapses,seen} }
    daily: {},                // { "2026-01-02": {min:60, cards:40, xp:120} }
    starred: {},              // { "你好": 1 }
    streak: { count: 0, last: null, best: 0 },
    settings: {
      rate: 0.85,
      showPinyin: true,
      showHanzi: true,
      theme: "auto",
      dailyGoal: 60,          // phút
      newPerDay: 0            // 0 = theo bài học
    }
  };

  function today() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function daysBetween(a, b) {
    return Math.round((new Date(b + "T00:00:00") - new Date(a + "T00:00:00")) / 86400000);
  }
  function addDays(dateStr, n) {
    const d = new Date(dateStr + "T00:00:00");
    d.setDate(d.getDate() + n);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  let S = null;

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      S = raw ? JSON.parse(raw) : null;
    } catch (e) { S = null; }
    if (!S || typeof S !== "object") S = JSON.parse(JSON.stringify(DEFAULTS));
    // merge khoá thiếu (nâng cấp phiên bản)
    for (const k in DEFAULTS) if (!(k in S)) S[k] = JSON.parse(JSON.stringify(DEFAULTS[k]));
    for (const k in DEFAULTS.settings) if (!(k in S.settings)) S.settings[k] = DEFAULTS.settings[k];
    if (!S.startDate) S.startDate = today();
    return S;
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); }
    catch (e) { console.warn("Không lưu được:", e); }
  }

  /* ---------- từ vựng gộp toàn khoá ---------- */
  let ALL = null;
  function allVocab() {
    if (ALL) return ALL;
    const seen = new Map();
    (window.LESSONS || []).forEach(L => {
      (L.vocab || []).forEach(v => {
        if (!seen.has(v[0])) seen.set(v[0], { hz: v[0], py: v[1], vi: v[2], day: L.d, theme: L.theme });
      });
    });
    ALL = Array.from(seen.values());
    return ALL;
  }
  function lesson(d) {
    return (window.LESSONS || []).find(L => L.d === d) || null;
  }
  function vocabUpTo(d) {
    return allVocab().filter(v => v.day <= d);
  }
  function sentencesUpTo(d) {
    const out = [];
    (window.LESSONS || []).forEach(L => {
      if (L.d > d) return;
      (L.drills || []).forEach(x => out.push({ z: x[0], p: x[1], v: x[2], day: L.d }));
      if (L.dialogue) (L.dialogue.lines || []).forEach(x => out.push({ z: x[1], p: x[2], v: x[3], day: L.d }));
    });
    return out;
  }

  /* ---------- SRS (SM-2 rút gọn) ---------- */
  // grade: 0 = quên, 1 = khó, 2 = được, 3 = dễ
  function grade(hz, g) {
    const t = today();
    let c = S.srs[hz];
    if (!c) c = S.srs[hz] = { ef: 2.5, iv: 0, due: t, reps: 0, lapses: 0, seen: 0 };
    c.seen++;
    if (g === 0) {
      c.lapses++; c.reps = 0; c.iv = 0;
      c.ef = Math.max(1.3, c.ef - 0.25);
      c.due = t;                       // ôn lại ngay trong phiên
    } else {
      const q = [0, 3, 4, 5][g];
      c.ef = Math.max(1.3, c.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
      c.reps++;
      if (c.reps === 1) c.iv = g === 1 ? 1 : (g === 3 ? 2 : 1);
      else if (c.reps === 2) c.iv = g === 1 ? 3 : (g === 3 ? 7 : 5);
      else c.iv = Math.max(1, Math.round(c.iv * c.ef * (g === 1 ? 0.6 : g === 3 ? 1.25 : 1)));
      if (c.iv > 180) c.iv = 180;
      c.due = addDays(t, c.iv);
    }
    save();
    return c;
  }

  function dueCards(limit) {
    const t = today();
    const pool = vocabUpTo(S.currentDay);
    const out = [];
    pool.forEach(v => {
      const c = S.srs[v.hz];
      if (c && c.due <= t) out.push(Object.assign({}, v, { _c: c, _new: false }));
    });
    out.sort((a, b) => (a._c.due < b._c.due ? -1 : 1));
    return limit ? out.slice(0, limit) : out;
  }

  function newCards(limit) {
    const pool = vocabUpTo(S.currentDay);
    const out = pool.filter(v => !S.srs[v.hz]).map(v => Object.assign({}, v, { _new: true }));
    return limit ? out.slice(0, limit) : out;
  }

  function srsStats() {
    const t = today();
    const pool = vocabUpTo(S.currentDay);
    let learned = 0, mature = 0, due = 0;
    pool.forEach(v => {
      const c = S.srs[v.hz];
      if (!c) return;
      learned++;
      if (c.iv >= 21) mature++;
      if (c.due <= t) due++;
    });
    return { total: allVocab().length, unlocked: pool.length, learned, mature, due, fresh: pool.length - learned };
  }

  /* ---------- tiến độ ---------- */
  function markDone(day, minutes) {
    const t = today();
    S.completed[day] = { date: t, minutes: Math.round(minutes || 0) };
    if (day >= S.currentDay && S.currentDay < 90) S.currentDay = day + 1;
    bumpStreak();
    save();
  }
  function bumpStreak() {
    const t = today();
    const st = S.streak;
    if (st.last === t) return;
    if (st.last && daysBetween(st.last, t) === 1) st.count++;
    else st.count = 1;
    st.last = t;
    if (st.count > st.best) st.best = st.count;
  }
  function logTime(min) {
    const t = today();
    const d = S.daily[t] || (S.daily[t] = { min: 0, cards: 0, xp: 0 });
    d.min += min; save();
  }
  function logCard(xp) {
    const t = today();
    const d = S.daily[t] || (S.daily[t] = { min: 0, cards: 0, xp: 0 });
    d.cards++; d.xp += (xp || 5); save();
  }
  function totalMinutes() {
    let m = 0; for (const k in S.daily) m += S.daily[k].min || 0; return Math.round(m);
  }
  function doneCount() { return Object.keys(S.completed).length; }

  function star(hz) {
    if (S.starred[hz]) delete S.starred[hz]; else S.starred[hz] = 1;
    save();
    return !!S.starred[hz];
  }

  function exportJSON() { return JSON.stringify(S, null, 2); }
  function importJSON(txt) {
    const o = JSON.parse(txt);
    if (!o || typeof o !== "object") throw new Error("Dữ liệu không hợp lệ");
    S = o; load(); save(); return true;
  }
  function reset() { S = JSON.parse(JSON.stringify(DEFAULTS)); S.startDate = today(); save(); }

  window.Store = {
    get S() { return S; },
    load, save, today, addDays, daysBetween,
    allVocab, vocabUpTo, sentencesUpTo, lesson,
    grade, dueCards, newCards, srsStats,
    markDone, logTime, logCard, totalMinutes, doneCount, star,
    exportJSON, importJSON, reset
  };
})();
