/* ============ Hán Ngữ 90 · ứng dụng chính ============ */
window.APP_BUILD = "1.2 (âm thanh 3 lớp)";
(function () {
  const $ = s => document.querySelector(s);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const App = {
    view: "home",
    lessonDay: null,
    step: 0,
    say: [],          // danh sách câu cho nút loa (tránh lỗi escape)
    fc: null,         // trạng thái flashcard
    quiz: null,
    listen: null,
    speak: null,
    dictQ: "",
    dictFilter: "all",
    timer: { t0: null, acc: 0, id: null }
  };
  window.App = App;

  /* ---------- tiện ích ---------- */
  function toast(msg, ms) {
    const old = $(".toast"); if (old) old.remove();
    const d = document.createElement("div");
    d.className = "toast"; d.textContent = msg;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), ms || 1900);
  }
  function sayBtn(text) {
    App.say.push(text);
    return `<button class="spk" data-say="${App.say.length - 1}" aria-label="Nghe">🔊</button>`;
  }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

  // Phát âm: luôn THỬ trước, chỉ báo lỗi khi mọi lớp dự phòng đều hỏng.
  // (Không chặn theo hasChineseVoice: trên iPhone danh sách giọng nạp rất muộn,
  //  chặn sớm sẽ báo lỗi oan ngay lần bấm đầu tiên.)
  let audioWarned = false;
  const FAIL_MSG = {
    "net-off": "Máy không có giọng tiếng Trung và bạn đã tắt phát âm qua mạng.",
    "offline": "Máy không có giọng tiếng Trung, mà hiện đang không có mạng.",
    "blocked": "Trình duyệt chặn phát âm thanh tự động.",
    "net-error": "Không tải được âm thanh qua mạng.",
    "too-long": "Câu quá dài để phát qua mạng.",
    "no-audio": "Đã gọi phát âm nhưng không có tiếng nào phát ra."
  };
  function speakSafe(text) {
    TTS.speak(text, {
      onfail: code => {
        if (audioWarned) { toast("Vẫn không nghe được — mở Cài đặt → Chẩn đoán âm thanh", 2600); return; }
        audioWarned = true;
        openAudioHelp(FAIL_MSG[code] || ("Không phát được âm thanh (" + code + ")."));
      }
    });
  }

  // ok = có giọng trên máy · net = phải nhờ mạng · bad = không cách nào phát được
  function audioHealth() {
    const s = TTS.status();
    if (s.picked) return "ok";
    if (!s.voicesReady && s.supported) return "ok";        // chưa nạp xong, đừng vội kết luận
    if (s.netAllowed && s.online) return "net";
    return "bad";
  }
  function pct(a, b) { return b ? Math.round(a / b * 100) : 0; }
  function fmtMin(m) { m = Math.round(m); return m < 60 ? m + " phút" : Math.floor(m / 60) + "h" + String(m % 60).padStart(2, "0"); }

  /* ---------- đồng hồ phiên học ---------- */
  function timerStart() {
    if (App.timer.id) return;
    App.timer.t0 = Date.now();
    App.timer.id = setInterval(() => {
      const e = $("#sessTime");
      if (e) e.textContent = fmtMin(timerMinutes());
    }, 15000);
  }
  function timerMinutes() {
    return App.timer.acc + (App.timer.t0 ? (Date.now() - App.timer.t0) / 60000 : 0);
  }
  function timerStop() {
    if (App.timer.t0) { App.timer.acc += (Date.now() - App.timer.t0) / 60000; App.timer.t0 = null; }
    if (App.timer.id) { clearInterval(App.timer.id); App.timer.id = null; }
  }
  function timerReset() { timerStop(); App.timer.acc = 0; }

  /* ---------- điều hướng ---------- */
  function go(view, opts) {
    if (App.view === "lesson" && view !== "lesson") {
      const m = timerMinutes();
      if (m > 0.5) Store.logTime(m);
      timerReset();
    }
    TTS.stop();
    App.view = view;
    Object.assign(App, opts || {});
    window.scrollTo(0, 0);
    render();
  }
  window.go = go;

  /* =========================================================
     CÁC MÀN HÌNH
     ========================================================= */

  /* ---------- Trang chủ ---------- */
  function vHome() {
    const S = Store.S;
    const d = S.currentDay;
    const L = Store.lesson(d);
    const st = Store.srsStats();
    const done = Store.doneCount();
    const t = Store.today();
    const todayDone = Object.values(S.completed).some(c => c.date === t);
    const dayStats = S.daily[t] || { min: 0, cards: 0 };
    const goal = S.settings.dailyGoal;

    let h = `<div class="wrap view">
      <div class="topbar">
        <div>
          <h1>Hán Ngữ 90</h1>
          <div class="sub">Ngày ${d} / 90 · Tuần ${L ? L.week : "-"} · ${esc(L ? L.theme : "")}</div>
        </div>
        <button class="icon-btn" data-act="go" data-view="stats">📊</button>
      </div>

      <div class="card hero">
        <div class="day">Bài học hôm nay</div>
        <div class="big">${esc(L ? L.title : "Hoàn thành!")}</div>
        <div class="goal">${esc(L ? L.goal : "Bạn đã đi hết 90 ngày. Chúc mừng!")}</div>
        <div class="bar"><i style="width:${pct(done, 90)}%"></i></div>
        <div class="row between" style="margin-top:8px;font-size:12px;opacity:.9">
          <span>${done}/90 ngày đã xong</span><span>${pct(done, 90)}%</span>
        </div>
      </div>

      <div class="btn-row" style="margin-bottom:14px">
        <button class="btn primary" data-act="startLesson">${todayDone ? "Học tiếp bài hôm nay" : "▶︎ Bắt đầu buổi học (60 phút)"}</button>
      </div>

      <div class="card">
        <div class="stat-row">
          <div><div class="n" style="color:var(--accent)">${S.streak.count}</div><div class="l">Ngày liên tiếp</div></div>
          <div><div class="n" style="color:var(--gold)">${st.learned}</div><div class="l">Từ đã học</div></div>
          <div><div class="n" style="color:var(--jade)">${st.mature}</div><div class="l">Đã thuộc</div></div>
          <div><div class="n" style="color:var(--blue)">${Math.round(dayStats.min)}′</div><div class="l">Hôm nay</div></div>
        </div>
        <div class="bar dark" style="margin-top:14px"><i style="width:${Math.min(100, pct(dayStats.min, goal))}%"></i></div>
        <div class="tiny" style="margin-top:6px">Mục tiêu hôm nay: ${Math.round(dayStats.min)}/${goal} phút</div>
      </div>`;

    const ah = audioHealth();
    if (ah !== "ok") {
      h += `<div class="card" style="border-color:${ah === "bad" ? "rgba(224,69,75,.45)" : "rgba(232,179,60,.4)"}">
        <div class="row between">
          <div style="flex:1;min-width:0"><h3 style="margin:0;color:${ah === "bad" ? "var(--accent)" : "var(--gold)"}">🔈 ${ah === "bad" ? "Chưa nghe được phát âm" : "Đang phát âm qua mạng"}</h3>
          <div class="muted">${ah === "bad" ? "Máy chưa có giọng tiếng Trung" : "Máy chưa có giọng tiếng Trung — cài thêm để dùng offline"}</div></div>
          <button class="btn sm ${ah === "bad" ? "primary" : ""}" data-act="audioHelp">${ah === "bad" ? "Sửa ngay" : "Xem"}</button>
        </div></div>`;
    }

    if (st.due > 0) {
      h += `<div class="card" style="border-color:rgba(232,179,60,.4)">
        <div class="row between">
          <div><h3 style="margin:0">🔁 Ôn tập đến hạn</h3><div class="muted">${st.due} thẻ cần ôn lại hôm nay</div></div>
          <button class="btn sm gold" data-act="go" data-view="review">Ôn ngay</button>
        </div></div>`;
    }

    h += `<div class="grid2" style="margin-bottom:14px">
        <button class="btn" data-act="go" data-view="quiz">📝 Kiểm tra</button>
        <button class="btn" data-act="go" data-view="listen">🎧 Luyện nghe</button>
        <button class="btn" data-act="go" data-view="speak">🎤 Luyện nói</button>
        <button class="btn" data-act="go" data-view="pinyin">🔤 Phát âm</button>
      </div>`;

    if (L) {
      h += `<div class="card">
        <h3>Nội dung hôm nay</h3>
        <div class="row" style="flex-wrap:wrap;gap:6px">
          <span class="badge">${(L.vocab || []).length} từ mới</span>
          <span class="badge">${(L.grammar || []).length} điểm ngữ pháp</span>
          <span class="badge">${L.dialogue ? (L.dialogue.lines || []).length : 0} câu hội thoại</span>
          ${L.pinyin ? '<span class="badge">Phát âm</span>' : ""}
        </div>
        <div class="tip" style="margin:12px 0 0"><b>Mẹo hôm nay</b><p>${esc(L.tip || "")}</p></div>
      </div>`;
    }

    h += `<button class="btn ghost" data-act="go" data-view="lessons" style="margin-bottom:14px">📚 Xem toàn bộ 90 ngày</button>`;
    h += `</div>`;
    return h;
  }

  /* ---------- Danh sách 90 ngày ---------- */
  function vLessons() {
    const S = Store.S;
    let h = `<div class="wrap view">
      <div class="topbar"><div><h1>Lộ trình 90 ngày</h1><div class="sub">Chạm để mở bất kỳ bài nào</div></div>
      <button class="icon-btn" data-act="go" data-view="home">✕</button></div>`;

    let week = 0;
    (window.LESSONS || []).forEach(L => {
      if (L.week !== week) {
        week = L.week;
        h += `<div class="tiny" style="margin:16px 0 8px;letter-spacing:.08em;text-transform:uppercase">Tuần ${week} · ${esc(L.theme)}</div>`;
      }
      const done = !!S.completed[L.d];
      const cur = L.d === S.currentDay;
      h += `<button class="opt" data-act="openLesson" data-day="${L.d}" style="${cur ? "border-color:var(--accent)" : ""}">
        <span class="k" style="${done ? "background:rgba(47,191,143,.25);color:var(--jade)" : cur ? "background:var(--accent);color:#fff" : ""}">${done ? "✓" : L.d}</span>
        <span style="flex:1;min-width:0">
          <span style="display:block;font-size:14.5px;font-weight:600">${esc(L.title)}</span>
          <span style="display:block;font-size:12px;color:var(--tx-2);margin-top:2px">${(L.vocab || []).length} từ · ${esc(L.goal.slice(0, 46))}${L.goal.length > 46 ? "…" : ""}</span>
        </span></button>`;
    });
    return h + `</div>`;
  }

  /* ---------- Bài học theo bước ---------- */
  function steps(L) {
    const s = [{ k: "warm", n: "Khởi động", m: 5, ic: "🔁" }];
    if (L.pinyin) s.push({ k: "pron", n: "Phát âm", m: 5, ic: "🔤" });
    s.push({ k: "vocab", n: "Từ vựng", m: 15, ic: "📖" });
    if ((L.grammar || []).length) s.push({ k: "gram", n: "Ngữ pháp", m: 15, ic: "🧩" });
    if (L.dialogue) s.push({ k: "dlg", n: "Hội thoại", m: 10, ic: "💬" });
    s.push({ k: "say", n: "Luyện nói", m: 10, ic: "🎤" });
    s.push({ k: "test", n: "Kiểm tra", m: 5, ic: "✅" });
    return s;
  }

  function vLesson() {
    const d = App.lessonDay || Store.S.currentDay;
    const L = Store.lesson(d);
    if (!L) return `<div class="wrap view"><div class="empty"><div class="ic">🎉</div>Bạn đã hoàn thành cả 90 ngày!<div class="spacer"></div><button class="btn" data-act="go" data-view="home">Về trang chủ</button></div></div>`;
    const ST = steps(L);
    if (App.step >= ST.length) App.step = ST.length - 1;
    const cur = ST[App.step];
    timerStart();

    let h = `<div class="wrap view">
      <div class="topbar">
        <div><h1>Ngày ${L.d} · ${esc(cur.n)}</h1>
        <div class="sub">${esc(L.title)} · gợi ý ${cur.m} phút</div></div>
        <button class="icon-btn" data-act="exitLesson">✕</button>
      </div>
      <div class="steps">${ST.map((s, i) => `<i class="${i < App.step ? "done" : i === App.step ? "now" : ""}"></i>`).join("")}</div>
      <div class="row between" style="margin-bottom:12px">
        <span class="chip">${cur.ic} Bước ${App.step + 1}/${ST.length}</span>
        <span class="chip">⏱ <span id="sessTime">${fmtMin(timerMinutes())}</span></span>
      </div>`;

    h += stepBody(L, cur.k);

    h += `<div class="btn-row" style="margin:18px 0 6px">
      ${App.step > 0 ? '<button class="btn ghost" data-act="stepPrev">← Trước</button>' : ""}
      ${App.step < ST.length - 1
        ? '<button class="btn primary" data-act="stepNext">Tiếp theo →</button>'
        : '<button class="btn jade" data-act="finishLesson">✓ Hoàn thành buổi học</button>'}
    </div></div>`;
    return h;
  }

  function stepBody(L, k) {
    if (k === "warm") return bodyWarm(L);
    if (k === "pron") return bodyPron(L);
    if (k === "vocab") return bodyVocab(L);
    if (k === "gram") return bodyGram(L);
    if (k === "dlg") return bodyDlg(L);
    if (k === "say") return bodySay(L);
    if (k === "test") return bodyTest(L);
    return "";
  }

  function bodyWarm(L) {
    const st = Store.srsStats();
    let h = `<div class="tip"><b>Khởi động 5 phút</b><p>Ôn lại các thẻ đến hạn trước khi học từ mới. Não cần "làm nóng" bằng cái đã biết trước khi nạp cái mới.</p></div>`;
    h += `<div class="card"><div class="row between">
      <div><div style="font-size:26px;font-weight:700">${st.due}</div><div class="muted">thẻ đến hạn ôn</div></div>
      <button class="btn sm ${st.due ? "gold" : ""}" data-act="go" data-view="review" ${st.due ? "" : "disabled"}>Ôn ngay</button>
    </div></div>`;
    if (L.review && L.review.length) {
      h += `<div class="card"><h3>Bài này ôn lại kiến thức ngày</h3><div class="row" style="flex-wrap:wrap;gap:6px">
        ${L.review.map(d => `<button class="badge" data-act="openLesson" data-day="${d}">Ngày ${d}</button>`).join("")}
      </div></div>`;
    }
    h += `<div class="card"><h3>Mục tiêu hôm nay</h3><p class="muted" style="margin:0">${esc(L.goal)}</p></div>`;
    return h;
  }

  function bodyPron(L) {
    const p = L.pinyin;
    let h = `<div class="card"><h3>${esc(p.title)}</h3>`;
    p.rows.forEach(r => {
      const cjk = (String(r[2]).match(/[一-鿿]+/g) || []).join("");
      h += `<div class="v-item">
        <div class="txt"><div class="hz" style="font-family:inherit;font-size:18px;color:var(--gold)">${esc(r[0])}</div>
        <div class="m">${esc(r[1])}</div>
        <div class="p" style="color:var(--tx-3);margin-top:2px">${esc(r[2])}</div></div>
        ${sayBtn(cjk || r[0])}
      </div>`;
    });
    h += `</div><div class="tip"><b>Cách luyện</b><p>Nghe 1 lần → đọc to theo 3 lần → thu âm bằng bước "Luyện nói" và so sánh. Mỗi âm khó luyện 30 giây là đủ.</p></div>`;
    h += `<button class="btn" data-act="go" data-view="pinyin">Mở bảng phát âm đầy đủ</button>`;
    return h;
  }

  function bodyVocab(L) {
    let h = `<div class="tip"><b>Cách học 15 phút</b><p>Chạm 🔊 nghe từng từ, đọc to theo. Sau đó che phần nghĩa, tự kiểm tra. Cuối cùng bấm "Học thẻ từ mới" để đưa vào bộ nhớ dài hạn.</p></div>`;
    h += `<div class="card"><h3>Từ mới (${(L.vocab || []).length})</h3>`;
    (L.vocab || []).forEach(v => {
      const on = Store.S.starred[v[0]] ? " on" : "";
      h += `<div class="v-item">
        <button class="star${on}" data-act="star" data-hz="${esc(v[0])}">${on ? "★" : "☆"}</button>
        <div class="txt"><div class="hz han">${esc(v[0])}</div><div class="p">${esc(v[1])}</div><div class="m">${esc(v[2])}</div></div>
        ${sayBtn(v[0])}
      </div>`;
    });
    h += `</div>`;
    h += `<div class="btn-row"><button class="btn gold" data-act="learnNew" data-day="${L.d}">🃏 Học thẻ từ mới hôm nay</button></div>`;
    return h;
  }

  function bodyGram(L) {
    let h = "";
    (L.grammar || []).forEach(g => {
      h += `<div class="card"><div class="gram">
        <h4 class="han">${esc(g.p)}</h4>
        <p>${esc(g.e)}</p>`;
      (g.ex || []).forEach(e => {
        h += `<div class="ex"><div class="row between"><div style="flex:1;min-width:0">
          <div class="z">${esc(e[0])}</div><div class="p">${esc(e[1])}</div><div class="v">${esc(e[2])}</div>
        </div>${sayBtn(e[0])}</div></div>`;
      });
      h += `</div></div>`;
    });
    return h;
  }

  function bodyDlg(L) {
    const D = L.dialogue;
    const speakers = [...new Set(D.lines.map(l => l[0]))];
    let h = `<div class="card"><div class="row between" style="margin-bottom:12px">
        <h3 style="margin:0">${esc(D.title)}</h3>
        <button class="btn sm" data-act="playDlg">▶︎ Nghe cả bài</button>
      </div><div class="dlg">`;
    D.lines.forEach((l, i) => {
      const right = speakers.indexOf(l[0]) > 0;
      h += `<div class="line ${right ? "right" : ""}">
        <div class="avatar">${esc(String(l[0]).slice(0, 2))}</div>
        <div class="bubble" data-act="say" data-say="${App.say.length}">
          <div class="z">${esc(l[1])}</div><div class="p">${esc(l[2])}</div><div class="v">${esc(l[3])}</div>
        </div></div>`;
      App.say.push(l[1]);
    });
    h += `</div></div>
      <div class="tip"><b>Kỹ thuật shadowing</b><p>Nghe 1 câu → tạm dừng → nhắc lại NGAY, bắt chước cả ngữ điệu. Lặp 3 lượt cả bài. Đây là cách nhanh nhất để nói tự nhiên.</p></div>`;
    return h;
  }

  function bodySay(L) {
    const items = (L.drills || []).slice();
    if (!items.length) return `<div class="empty">Bài này không có câu luyện nói.</div>`;
    let h = `<div class="tip"><b>Luyện nói 10 phút</b><p>Đọc to từng câu 3 lần. Nếu máy hỗ trợ, bấm 🎤 để chấm điểm phát âm.</p></div>`;
    h += `<div class="card"><h3>Câu mẫu</h3>`;
    items.forEach(s => {
      h += `<div class="v-item">
        <div class="txt"><div class="hz han" style="font-size:19px">${esc(s[0])}</div><div class="p">${esc(s[1])}</div><div class="m">${esc(s[2])}</div></div>
        ${sayBtn(s[0])}
      </div>`;
    });
    h += `</div><button class="btn jade" data-act="speakDay" data-day="${L.d}">🎤 Vào chế độ luyện nói chấm điểm</button>`;
    return h;
  }

  function bodyTest(L) {
    return `<div class="tip"><b>Kiểm tra nhanh 5 phút</b><p>10 câu hỏi từ nội dung hôm nay. Đạt 8/10 trở lên là bạn đã nắm bài.</p></div>
      <button class="btn primary" data-act="quizDay" data-day="${L.d}">📝 Làm bài kiểm tra ngày ${L.d}</button>
      <div class="spacer"></div>
      <div class="card"><h3>Sau buổi học</h3><p class="muted" style="margin:0">Bấm "Hoàn thành buổi học" để lưu tiến độ, cộng chuỗi ngày và mở khoá bài tiếp theo.</p></div>`;
  }

  /* ---------- Ôn tập / Flashcard ---------- */
  function startReview(mode, day) {
    let cards = [];
    if (mode === "new" && day) {
      const L = Store.lesson(day);
      cards = (L.vocab || []).map(v => ({ hz: v[0], py: v[1], vi: v[2], day: day, _new: !Store.S.srs[v[0]] }));
    } else if (mode === "starred") {
      cards = Store.allVocab().filter(v => Store.S.starred[v.hz]);
    } else {
      cards = Store.dueCards().concat(Store.newCards(12));
    }
    if (!cards.length) { toast("Không có thẻ nào cần ôn 👍"); return; }
    App.fc = { q: shuffle(cards), i: 0, show: false, done: 0, again: [] };
    go("review");
  }

  function vReview() {
    if (!App.fc) {
      const st = Store.srsStats();
      return `<div class="wrap view">
        <div class="topbar"><div><h1>Ôn tập</h1><div class="sub">Lặp lại ngắt quãng · nhớ lâu</div></div>
        <button class="icon-btn" data-act="go" data-view="home">✕</button></div>
        <div class="card"><div class="stat-row">
          <div><div class="n" style="color:var(--gold)">${st.due}</div><div class="l">Đến hạn</div></div>
          <div><div class="n" style="color:var(--blue)">${st.fresh}</div><div class="l">Chưa học</div></div>
          <div><div class="n" style="color:var(--jade)">${st.mature}</div><div class="l">Đã thuộc</div></div>
          <div><div class="n">${st.unlocked}</div><div class="l">Mở khoá</div></div>
        </div></div>
        <button class="btn primary" data-act="rev" data-mode="due">🔁 Ôn thẻ đến hạn (${st.due + Math.min(12, st.fresh)})</button>
        <div class="spacer"></div>
        <button class="btn" data-act="rev" data-mode="starred">★ Ôn từ đã đánh dấu</button>
        <div class="spacer"></div>
        <div class="tip"><b>Nguyên tắc</b><p>Thẻ bạn nhớ dễ sẽ giãn dần ra (1 → 3 → 7 → 15 ngày…). Thẻ quên sẽ quay lại ngay. Chỉ cần ôn mỗi ngày, phần còn lại để thuật toán lo.</p></div>
      </div>`;
    }

    const F = App.fc;
    if (F.i >= F.q.length) {
      if (F.again.length) { F.q = shuffle(F.again); F.again = []; F.i = 0; F.show = false; }
      else {
        const n = F.done;
        App.fc = null;
        return `<div class="wrap view"><div class="empty"><div class="ic">🎉</div>
          <div style="font-size:19px;color:var(--tx);font-weight:600">Xong ${n} thẻ!</div>
          <p class="muted">Quay lại đúng lịch để nhớ lâu nhất.</p>
          <div class="spacer"></div>
          <button class="btn primary" data-act="go" data-view="home">Về trang chủ</button></div></div>`;
      }
    }

    const c = F.q[F.i];
    const S = Store.S.settings;
    return `<div class="wrap view">
      <div class="topbar"><div><h1>Ôn tập</h1><div class="sub">${F.i + 1} / ${F.q.length}${c._new ? " · thẻ mới" : ""}</div></div>
      <button class="icon-btn" data-act="quitFc">✕</button></div>
      <div class="bar dark" style="margin-bottom:14px"><i style="width:${pct(F.i, F.q.length)}%"></i></div>

      <div class="fc" data-act="flip">
        <div class="front han">${esc(S.showHanzi ? c.hz : c.py)}</div>
        ${F.show ? `<div class="back">
            <div class="p">${esc(c.py)}</div>
            <div class="v">${esc(c.vi)}</div>
            <div class="tiny" style="margin-top:10px">Ngày ${c.day}</div>
          </div>` : `<div class="hint">Chạm để xem đáp án</div>`}
      </div>

      <div class="btn-row" style="margin-bottom:12px">
        <button class="btn sm" data-act="say" data-say="${(App.say.push(c.hz), App.say.length - 1)}">🔊 Nghe</button>
        <button class="btn sm" data-act="star" data-hz="${esc(c.hz)}">${Store.S.starred[c.hz] ? "★ Bỏ đánh dấu" : "☆ Đánh dấu"}</button>
      </div>

      ${F.show ? `<div class="grade">
        <button class="g0" data-act="grade" data-g="0">Quên<br><span class="tiny">lại ngay</span></button>
        <button class="g1" data-act="grade" data-g="1">Khó<br><span class="tiny">~1 ngày</span></button>
        <button class="g2" data-act="grade" data-g="2">Được<br><span class="tiny">giãn ra</span></button>
        <button class="g3" data-act="grade" data-g="3">Dễ<br><span class="tiny">giãn xa</span></button>
      </div>` : `<button class="btn primary" data-act="flip">Xem đáp án</button>`}
    </div>`;
  }

  /* ---------- Kiểm tra ---------- */
  function buildQuiz(day, n) {
    const pool = day ? Store.lesson(day).vocab.map(v => ({ hz: v[0], py: v[1], vi: v[2] })) : Store.vocabUpTo(Store.S.currentDay);
    const all = Store.vocabUpTo(Store.S.currentDay);
    if (pool.length < 4) return null;
    const items = shuffle(pool).slice(0, n || 10);
    return items.map((it, idx) => {
      const type = idx % 3;                        // 0: Hán→nghĩa, 1: nghĩa→Hán, 2: nghe→nghĩa
      const wrong = shuffle(all.filter(x => x.hz !== it.hz)).slice(0, 3);
      const opts = shuffle([it].concat(wrong));
      return { type, it, opts, ans: opts.indexOf(it) };
    });
  }

  function vQuiz() {
    if (!App.quiz) {
      return `<div class="wrap view">
        <div class="topbar"><div><h1>Kiểm tra</h1><div class="sub">Trắc nghiệm 4 đáp án</div></div>
        <button class="icon-btn" data-act="go" data-view="home">✕</button></div>
        <button class="btn primary" data-act="quizStart" data-n="10">📝 10 câu (toàn bộ đã học)</button>
        <div class="spacer"></div>
        <button class="btn" data-act="quizStart" data-n="20">📝 20 câu · thử thách</button>
        <div class="spacer"></div>
        <button class="btn ghost" data-act="quizDay" data-day="${Store.S.currentDay}">Chỉ kiểm tra ngày ${Store.S.currentDay}</button>
        <div class="spacer"></div>
        <div class="tip"><b>Mẹo</b><p>Làm sai không sao — mỗi câu sai sẽ được đưa trở lại bộ thẻ ôn tập để bạn gặp lại sớm hơn.</p></div>
      </div>`;
    }
    const Q = App.quiz;
    if (Q.i >= Q.list.length) {
      const p = pct(Q.right, Q.list.length);
      const msg = p >= 90 ? "Xuất sắc!" : p >= 70 ? "Tốt lắm!" : p >= 50 ? "Cần ôn thêm." : "Hãy ôn lại bài nhé.";
      const wrongList = Q.wrong;
      App.quiz = null;
      return `<div class="wrap view"><div class="topbar"><h1>Kết quả</h1></div>
        <div class="card center"><div class="score" style="color:${p >= 70 ? "var(--jade)" : p >= 50 ? "var(--gold)" : "var(--bad)"}">${Q.right}/${Q.list.length}</div>
        <div class="muted" style="margin-top:6px">${msg} (${p}%)</div></div>
        ${wrongList.length ? `<div class="card"><h3>Câu sai cần ôn</h3>${wrongList.map(w => `<div class="v-item"><div class="txt"><div class="hz han">${esc(w.hz)}</div><div class="p">${esc(w.py)}</div><div class="m">${esc(w.vi)}</div></div>${sayBtn(w.hz)}</div>`).join("")}</div>` : ""}
        <button class="btn primary" data-act="go" data-view="home">Về trang chủ</button>
        <div class="spacer"></div>
        <button class="btn ghost" data-act="go" data-view="quiz">Làm bài khác</button></div>`;
    }
    const q = Q.list[Q.i];
    const prompt = q.type === 1 ? esc(q.it.vi) : esc(q.it.hz);
    const sub = q.type === 0 ? "Từ này nghĩa là gì?" : q.type === 1 ? "Chọn chữ Hán đúng" : "Nghe và chọn nghĩa đúng";
    let h = `<div class="wrap view">
      <div class="topbar"><div><h1>Câu ${Q.i + 1}/${Q.list.length}</h1><div class="sub">Đúng: ${Q.right}</div></div>
      <button class="icon-btn" data-act="quitQuiz">✕</button></div>
      <div class="bar dark" style="margin-bottom:6px"><i style="width:${pct(Q.i, Q.list.length)}%"></i></div>`;

    if (q.type === 2) {
      h += `<div class="center" style="padding:22px 0 6px">
        <button class="mic" data-act="say" data-say="${(App.say.push(q.it.hz), App.say.length - 1)}" style="width:70px;height:70px;font-size:26px">🔊</button>
        <div class="q-sub" style="margin-top:12px">${sub}</div></div>`;
    } else {
      h += `<div class="q-prompt ${q.type === 1 ? "" : "han"}">${prompt}</div><div class="q-sub">${sub}</div>`;
    }

    q.opts.forEach((o, i) => {
      const label = q.type === 1 ? `<span class="han" style="font-size:20px">${esc(o.hz)}</span>` : esc(o.vi);
      const cls = Q.picked == null ? "" : (i === q.ans ? " right" : (i === Q.picked ? " wrong" : ""));
      h += `<button class="opt${cls}" data-act="pick" data-i="${i}"><span class="k">${"ABCD"[i]}</span>${label}</button>`;
    });

    if (Q.picked != null) {
      h += `<div class="card tight" style="margin-top:6px"><div class="row between">
        <div><div class="han" style="font-size:20px">${esc(q.it.hz)}</div><div class="p" style="color:var(--gold);font-size:13px">${esc(q.it.py)}</div></div>
        ${sayBtn(q.it.hz)}</div></div>
        <button class="btn primary" data-act="qNext">Câu tiếp →</button>`;
    }
    return h + `</div>`;
  }

  /* ---------- Luyện nghe ---------- */
  function vListen() {
    if (!App.listen) {
      return `<div class="wrap view">
        <div class="topbar"><div><h1>Luyện nghe</h1><div class="sub">Nghe câu · chọn nghĩa đúng</div></div>
        <button class="icon-btn" data-act="go" data-view="home">✕</button></div>
        <button class="btn primary" data-act="listenStart" data-n="10">🎧 Bắt đầu (10 câu)</button>
        <div class="spacer"></div>
        <div class="tip"><b>Cách luyện hiệu quả</b><p>Nghe lần đầu KHÔNG nhìn đáp án. Nếu không rõ, nghe lại tối đa 2 lần rồi mới chọn. Đừng đoán quá sớm.</p></div>
      </div>`;
    }
    const Lz = App.listen;
    if (Lz.i >= Lz.list.length) {
      const p = pct(Lz.right, Lz.list.length);
      App.listen = null;
      return `<div class="wrap view"><div class="topbar"><h1>Kết quả nghe</h1></div>
        <div class="card center"><div class="score" style="color:${p >= 70 ? "var(--jade)" : "var(--gold)"}">${Lz.right}/${Lz.list.length}</div>
        <div class="muted">${p}% chính xác</div></div>
        <button class="btn primary" data-act="go" data-view="listen">Luyện tiếp</button>
        <div class="spacer"></div><button class="btn ghost" data-act="go" data-view="home">Về trang chủ</button></div>`;
    }
    const q = Lz.list[Lz.i];
    let h = `<div class="wrap view">
      <div class="topbar"><div><h1>Nghe ${Lz.i + 1}/${Lz.list.length}</h1><div class="sub">Đúng: ${Lz.right}</div></div>
      <button class="icon-btn" data-act="quitListen">✕</button></div>
      <div class="center" style="padding:20px 0">
        <button class="mic" data-act="say" data-say="${(App.say.push(q.it.z), App.say.length - 1)}">🔊</button>
        <div class="muted" style="margin-top:10px">Chạm để nghe lại</div>
      </div>`;
    q.opts.forEach((o, i) => {
      const cls = Lz.picked == null ? "" : (i === q.ans ? " right" : (i === Lz.picked ? " wrong" : ""));
      h += `<button class="opt${cls}" data-act="lPick" data-i="${i}"><span class="k">${"ABCD"[i]}</span>${esc(o.v)}</button>`;
    });
    if (Lz.picked != null) {
      h += `<div class="card tight"><div class="han" style="font-size:19px">${esc(q.it.z)}</div>
        <div class="p" style="color:var(--gold);font-size:13px">${esc(q.it.p)}</div>
        <div class="m" style="color:var(--tx-2);font-size:13px">${esc(q.it.v)}</div></div>
        <button class="btn primary" data-act="lNext">Câu tiếp →</button>`;
    }
    return h + `</div>`;
  }

  /* ---------- Luyện nói ---------- */
  function vSpeak() {
    if (!App.speak) {
      const sup = TTS.recognitionSupported();
      return `<div class="wrap view">
        <div class="topbar"><div><h1>Luyện nói</h1><div class="sub">Đọc to · máy chấm điểm</div></div>
        <button class="icon-btn" data-act="go" data-view="home">✕</button></div>
        ${sup ? "" : `<div class="tip"><b>Thiết bị chưa hỗ trợ chấm điểm</b><p>Trình duyệt này không có nhận diện giọng nói. Bạn vẫn luyện được theo cách nghe – nhắc lại (shadowing). Trên iPhone hãy dùng Safari và bật Cài đặt → Safari → Micro.</p></div>`}
        <button class="btn primary" data-act="speakStart" data-day="0">🎤 Luyện câu ngẫu nhiên (10 câu)</button>
        <div class="spacer"></div>
        <button class="btn" data-act="speakStart" data-day="${Store.S.currentDay}">🎤 Luyện câu ngày ${Store.S.currentDay}</button>
        <div class="spacer"></div>
        <div class="tip"><b>Chuẩn phát âm</b><p>Đọc CHẬM và TO. Thanh điệu quan trọng hơn tốc độ. Điểm 70+ là đã rõ ràng, 85+ là rất tốt.</p></div>
      </div>`;
    }
    const P = App.speak;
    if (P.i >= P.list.length) {
      const avg = Math.round(P.scores.reduce((a, b) => a + b, 0) / (P.scores.length || 1));
      App.speak = null;
      return `<div class="wrap view"><div class="topbar"><h1>Kết quả luyện nói</h1></div>
        <div class="card center"><div class="score" style="color:${avg >= 80 ? "var(--jade)" : avg >= 60 ? "var(--gold)" : "var(--bad)"}">${avg}</div>
        <div class="muted">điểm trung bình</div></div>
        <button class="btn primary" data-act="go" data-view="speak">Luyện tiếp</button>
        <div class="spacer"></div><button class="btn ghost" data-act="go" data-view="home">Về trang chủ</button></div>`;
    }
    const s = P.list[P.i];
    return `<div class="wrap view">
      <div class="topbar"><div><h1>Nói ${P.i + 1}/${P.list.length}</h1><div class="sub">Đọc to câu bên dưới</div></div>
      <button class="icon-btn" data-act="quitSpeak">✕</button></div>
      <div class="card center">
        <div class="han hz-l">${esc(s.z)}</div>
        <div class="py">${esc(s.p)}</div>
        <div class="vi">${esc(s.v)}</div>
        <div class="spacer"></div>
        <button class="btn sm" data-act="say" data-say="${(App.say.push(s.z), App.say.length - 1)}">🔊 Nghe mẫu</button>
      </div>
      <div class="center">
        <button class="mic ${P.rec ? "rec" : ""}" data-act="mic">${P.rec ? "■" : "🎤"}</button>
        <div class="muted">${P.rec ? "Đang nghe… hãy đọc câu trên" : "Chạm để bắt đầu nói"}</div>
      </div>
      <div class="spacer"></div>
      ${P.heard != null ? `<div class="card">
        <div class="tiny">Máy nghe được:</div>
        <div class="heard han">${esc(P.heard || "(không rõ)")}</div>
        <div class="score" style="margin-top:12px;color:${P.score >= 80 ? "var(--jade)" : P.score >= 60 ? "var(--gold)" : "var(--bad)"}">${P.score}</div>
        <div class="muted center">${P.score >= 85 ? "Rất tốt! Phát âm rõ ràng." : P.score >= 60 ? "Khá ổn — chú ý thanh điệu." : "Hãy đọc chậm và to hơn."}</div>
      </div>
      <button class="btn primary" data-act="sNext">Câu tiếp →</button>` : `<button class="btn ghost" data-act="sNext">Bỏ qua câu này →</button>`}
    </div>`;
  }

  /* ---------- Chẩn đoán âm thanh ---------- */
  function openAudioHelp(reason) {
    document.querySelector(".sheet")?.remove();
    const s = TTS.status();
    const source0 = Store.S.settings.audioSource || "auto";
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    const row = (k, v, color) => `<div class="row between" style="padding:4px 0"><span class="muted">${k}</span><b class="tiny"${color ? ` style="color:${color}"` : ""}>${v}</b></div>`;
    let diag = `<div class="card tight" style="margin-bottom:12px">
      ${row("Trình duyệt hỗ trợ đọc", s.supported ? "có" : "KHÔNG", s.supported ? "var(--jade)" : "var(--bad)")}
      ${row("Đã nạp xong danh sách giọng", s.voicesReady ? "rồi" : "chưa", s.voicesReady ? "var(--jade)" : "var(--gold)")}
      ${row("Tổng số giọng", s.totalVoices, s.totalVoices ? "var(--jade)" : "var(--bad)")}
      ${row("Giọng tiếng Trung", s.zh.length ? s.zh.length + " giọng" : "KHÔNG CÓ", s.zh.length ? "var(--jade)" : "var(--bad)")}
      ${row("Đang dùng", esc(s.picked || "—"))}
      ${row("Phát qua mạng dự phòng", s.netAllowed ? (s.online ? "bật · có mạng" : "bật · KHÔNG có mạng") : "đã tắt", s.netAllowed && s.online ? "var(--jade)" : "var(--gold)")}
      ${row("Đã mở khoá âm thanh", s.audioUnlocked ? "rồi" : "chưa", s.audioUnlocked ? "var(--jade)" : "var(--gold)")}
      ${row("Đã từng phát được tiếng", s.everSpoke ? "rồi (" + esc(s.lastEngine === "net" ? "qua mạng" : "giọng máy") + ")" : "chưa", s.everSpoke ? "var(--jade)" : "var(--gold)")}
      ${s.lastError ? row("Lỗi gần nhất", esc(s.lastError), "var(--gold)") : ""}
    </div>`;

    if (s.zh.length) {
      diag += `<div class="card tight" style="margin-bottom:12px"><div class="tiny" style="margin-bottom:6px">Chọn giọng để thử:</div>
        ${s.zh.map((v, i) => `<button class="opt" style="padding:10px;margin-bottom:6px" data-act="tryVoice" data-i="${i}">
          <span class="k">${i + 1}</span><span style="flex:1"><b>${esc(v.name)}</b><br><span class="tiny">${esc(v.lang)}${v.local ? " · trên máy" : " · cần mạng"}</span></span>🔊</button>`).join("")}
      </div>`;
    }

    let fix;
    if (!s.supported && s.netAllowed) {
      fix = `<p>Trình duyệt không đọc được văn bản, nhưng app đã tự chuyển sang <b>phát qua mạng</b> — bạn vẫn nghe được khi có internet.</p>
             <p>Muốn nghe cả khi offline, hãy dùng <b>Safari</b> (iPhone) hoặc <b>Chrome/Edge</b> (máy tính) và cài giọng tiếng Trung.</p>`;
    } else if (!s.supported) {
      fix = `<p>Hãy dùng <b>Safari</b> (iPhone) hoặc <b>Chrome/Edge</b> (máy tính). Trình duyệt trong ứng dụng Facebook/Zalo thường không hỗ trợ.</p>`;
    } else if (!s.zh.length) {
      fix = (s.netAllowed && s.online
        ? `<p><b>App đang phát qua mạng nên bạn vẫn nghe được.</b> Cài thêm giọng vào máy để nghe cả khi offline và phát nhanh hơn:</p>`
        : "") + (iOS
        ? `<p><b>Nguyên nhân: iPhone chưa cài giọng tiếng Trung.</b></p>
           <p>Vào <b>Cài đặt → Trợ năng → Nội dung được đọc → Giọng nói → Tiếng Trung → Phổ thông (Trung Quốc đại lục)</b> rồi tải một giọng về (ví dụ Tingting / Lili).</p>
           <p>Tải xong hãy <b>đóng hẳn Safari</b> (vuốt lên xoá khỏi đa nhiệm) và mở lại app.</p>`
        : `<p><b>Nguyên nhân: máy tính chưa có gói giọng nói tiếng Trung.</b></p>
           <p>Windows: <b>Cài đặt → Thời gian & ngôn ngữ → Ngôn ngữ → Thêm ngôn ngữ → 中文 (简体，中国)</b>, khi cài nhớ tick <b>Text-to-speech</b>. Sau đó khởi động lại trình duyệt.</p>
           <p>Hoặc mở app trên iPhone — ở đó chỉ cần tải giọng trong phần Trợ năng.</p>`);
    } else {
      fix = iOS
        ? `<p>Máy đã có giọng tiếng Trung, nên nhiều khả năng là <b>đường ra âm thanh</b>:</p>
           <p>1. Gạt <b>công tắc chuông/im lặng</b> bên hông iPhone sang chế độ có chuông — Safari đọc văn bản qua kênh chuông, bật im lặng là không nghe thấy gì.<br>
           2. Bấm <b>tăng âm lượng</b> trong lúc đang phát (âm lượng chuông và âm lượng media là hai mức riêng).<br>
           3. Kiểm tra tai nghe / loa Bluetooth có đang kết nối không.<br>
           4. Tắt <b>Chế độ nguồn điện thấp</b> nếu đang bật.</p>
           <p><b>Cách chắc ăn nhất:</b> chuyển sang phát qua mạng bằng nút màu vàng bên dưới. Âm thanh khi đó đi qua kênh media nên <b>không bị công tắc im lặng chặn</b>.</p>`
        : `<p>Đã có giọng tiếng Trung. Kiểm tra âm lượng hệ thống, và xem tab này có bị <b>tắt tiếng</b> không (chuột phải vào tab → Bật tiếng trang web).</p>
           <p>Hoặc chuyển sang phát qua mạng bằng nút màu vàng bên dưới.</p>`;
    }

    const box = document.createElement("div");
    box.className = "sheet";
    box.innerHTML = `<div class="inner">
      <h3>🔈 Chẩn đoán âm thanh</h3>
      ${reason ? `<div class="tip" style="margin-bottom:12px"><b>Vấn đề</b><p>${esc(reason)}</p></div>` : ""}
      ${diag}
      <div class="card tight" style="margin-bottom:12px"><b style="font-size:13px;color:var(--gold)">Cách khắc phục</b>
        <div class="muted" style="font-size:13.5px;line-height:1.6">${fix}</div></div>
      <button class="btn primary" data-act="tryVoice" data-i="0">🔊 Thử giọng của máy</button>
      <div class="spacer"></div>
      <button class="btn gold" data-act="tryNet">🌐 Thử phát qua mạng</button>
      <div class="spacer"></div>
      ${s.picked && source0 !== "net" ? `<button class="btn" data-act="forceNet">🔁 Luôn dùng phát qua mạng</button><div class="spacer"></div>` : ""}
      ${source0 === "net" ? `<button class="btn" data-act="forceDevice">🔁 Quay lại giọng của máy</button><div class="spacer"></div>` : ""}
      <button class="btn ghost" data-act="closeSheet">Đóng</button>
    </div>`;
    document.body.appendChild(box);
  }

  /* ---------- Từ điển ---------- */
  function dictList() {
    const q = App.dictQ.trim().toLowerCase();
    let list = Store.vocabUpTo(Store.S.currentDay);
    if (App.dictFilter === "starred") list = Store.allVocab().filter(v => Store.S.starred[v.hz]);
    if (App.dictFilter === "all") list = Store.allVocab();
    if (q) list = list.filter(v => v.hz.includes(q) || v.py.toLowerCase().includes(q) || v.vi.toLowerCase().includes(q));
    return list;
  }

  function dictListHTML() {
    const list = dictList();
    if (!list.length) return `<div class="empty"><div class="ic">🔍</div>Không tìm thấy từ nào.</div>`;
    let h = `<div class="tiny" style="margin-bottom:8px">${list.length} từ</div><div class="card">`;
    list.slice(0, 400).forEach(v => {
      const on = Store.S.starred[v.hz] ? " on" : "";
      h += `<div class="v-item">
        <button class="star${on}" data-act="star" data-hz="${esc(v.hz)}">${on ? "★" : "☆"}</button>
        <div class="txt"><div class="hz han">${esc(v.hz)}</div><div class="p">${esc(v.py)}</div><div class="m">${esc(v.vi)} <span class="tiny">· ngày ${v.day}</span></div></div>
        ${sayBtn(v.hz)}</div>`;
    });
    h += `</div>`;
    if (list.length > 400) h += `<div class="tiny center">Hiển thị 400 từ đầu · hãy dùng ô tìm kiếm</div>`;
    return h;
  }

  function vDict() {
    return `<div class="wrap view">
      <div class="topbar"><div><h1>Từ điển</h1><div class="sub">Tổng ${Store.allVocab().length} từ trong 90 ngày</div></div></div>
      <input class="search" id="dictSearch" placeholder="Tìm chữ Hán, pinyin hoặc tiếng Việt…" value="${esc(App.dictQ)}" autocomplete="off" autocapitalize="off" spellcheck="false">
      <div class="row" style="gap:6px;margin:12px 0 14px;overflow-x:auto">
        <button class="chip ${App.dictFilter === "learned" ? "on" : ""}" data-act="dictF" data-f="learned">Đã mở khoá</button>
        <button class="chip ${App.dictFilter === "all" ? "on" : ""}" data-act="dictF" data-f="all">Toàn bộ 90 ngày</button>
        <button class="chip ${App.dictFilter === "starred" ? "on" : ""}" data-act="dictF" data-f="starred">★ Đánh dấu</button>
      </div>
      <div id="dictList">${dictListHTML()}</div></div>`;
  }

  /* ---------- Bảng phát âm ---------- */
  function vPinyin() {
    const P = window.PINYIN;
    let h = `<div class="wrap view">
      <div class="topbar"><div><h1>Phát âm</h1><div class="sub">Thanh điệu · thanh mẫu · vận mẫu</div></div>
      <button class="icon-btn" data-act="go" data-view="home">✕</button></div>

      <div class="card"><h3>4 thanh điệu + thanh nhẹ</h3>`;
    P.tones.forEach(t => {
      h += `<div class="v-item"><div class="txt">
        <div class="hz" style="font-family:inherit;color:var(--gold);font-size:22px">${esc(t.mark)} <span style="font-size:13px;color:var(--tx-2)">${esc(t.name)}</span></div>
        <div class="m">${esc(t.desc)}</div>
        <div class="tiny" style="margin-top:2px">${esc(t.vi)}</div></div>
        ${sayBtn(t.ex.split(" ")[1] || "妈")}</div>`;
    });
    h += `</div>`;

    h += `<div class="card"><h3>Thanh mẫu (phụ âm đầu)</h3>`;
    P.initials.forEach(g => {
      h += `<div class="tiny" style="margin:10px 0 4px;letter-spacing:.06em;text-transform:uppercase">${esc(g.g)}</div>`;
      g.items.forEach(it => {
        const hz = (it[2].split(" ")[1]) || "";
        h += `<div class="v-item"><div class="txt">
          <div class="hz" style="font-family:inherit;font-size:19px;color:var(--gold)">${esc(it[0])}</div>
          <div class="m">${esc(it[1])} · <span class="han">${esc(it[2])}</span></div></div>
          ${sayBtn(hz || it[0])}</div>`;
      });
    });
    h += `</div>`;

    h += `<div class="card"><h3>Vận mẫu (vần)</h3>`;
    P.finals.forEach(g => {
      h += `<div class="tiny" style="margin:10px 0 6px;letter-spacing:.06em;text-transform:uppercase">${esc(g.g)}</div>
        <div class="row" style="flex-wrap:wrap;gap:6px">${g.items.map(x => `<span class="badge" style="color:var(--gold)">${esc(x)}</span>`).join("")}</div>`;
    });
    h += `</div>`;

    h += `<div class="card"><h3>6 quy tắc bắt buộc nhớ</h3>`;
    P.rules.forEach(r => { h += `<div class="gram" style="margin-bottom:12px"><h4>${esc(r.t)}</h4><p style="margin:0">${esc(r.d)}</p></div>`; });
    h += `</div></div>`;
    return h;
  }

  /* ---------- Thống kê ---------- */
  function vStats() {
    const S = Store.S;
    const st = Store.srsStats();
    const done = Store.doneCount();
    const days = [];
    for (let i = 13; i >= 0; i--) days.push(Store.addDays(Store.today(), -i));
    const max = Math.max(30, ...days.map(d => (S.daily[d] || {}).min || 0));

    let h = `<div class="wrap view">
      <div class="topbar"><div><h1>Thống kê</h1><div class="sub">Bắt đầu ${esc(S.startDate)}</div></div>
      <button class="icon-btn" data-act="go" data-view="home">✕</button></div>

      <div class="card"><div class="stat-row">
        <div><div class="n" style="color:var(--accent)">${S.streak.count}</div><div class="l">Chuỗi hiện tại</div></div>
        <div><div class="n" style="color:var(--gold)">${S.streak.best}</div><div class="l">Kỷ lục</div></div>
        <div><div class="n" style="color:var(--jade)">${done}</div><div class="l">Ngày xong</div></div>
        <div><div class="n" style="color:var(--blue)">${Math.round(Store.totalMinutes() / 60)}h</div><div class="l">Tổng giờ</div></div>
      </div></div>

      <div class="card"><h3>14 ngày gần nhất (phút học)</h3>
        <div class="row" style="align-items:flex-end;gap:4px;height:96px">
          ${days.map(d => {
            const m = (S.daily[d] || {}).min || 0;
            const hgt = Math.max(3, Math.round(m / max * 88));
            return `<div style="flex:1;text-align:center">
              <div style="height:${hgt}px;background:${m >= S.settings.dailyGoal ? "var(--jade)" : m > 0 ? "var(--gold)" : "var(--card-2)"};border-radius:4px"></div>
              <div class="tiny" style="margin-top:4px;font-size:9px">${d.slice(8)}</div></div>`;
          }).join("")}
        </div></div>

      <div class="card"><h3>Từ vựng</h3>
        <div class="row between"><span class="muted">Đã học</span><b>${st.learned} / ${st.total}</b></div>
        <div class="bar dark" style="margin:8px 0 14px"><i style="width:${pct(st.learned, st.total)}%"></i></div>
        <div class="row between"><span class="muted">Đã thuộc lâu dài (≥21 ngày)</span><b style="color:var(--jade)">${st.mature}</b></div>
        <div class="bar dark" style="margin-top:8px"><i style="width:${pct(st.mature, st.total)}%;background:var(--jade)"></i></div>
      </div>

      <div class="card"><h3>Bản đồ 90 ngày</h3><div class="day-grid">`;
    for (let i = 1; i <= 90; i++) {
      const cls = S.completed[i] ? "done" : (i === S.currentDay ? "now" : "");
      h += `<button class="day-cell ${cls}" data-act="openLesson" data-day="${i}">${i}</button>`;
    }
    h += `</div></div></div>`;
    return h;
  }

  /* ---------- Cài đặt ---------- */
  function vSettings() {
    const S = Store.S;
    const s = S.settings;
    return `<div class="wrap view">
      <div class="topbar"><div><h1>Cài đặt</h1><div class="sub">Hán Ngữ 90 · bản ${esc(window.APP_BUILD || "?")}</div></div></div>

      <div class="card"><h3>Học tập</h3>
        <div class="row between" style="padding:10px 0;border-bottom:1px solid var(--line)">
          <div><div>Mục tiêu mỗi ngày</div><div class="tiny">phút</div></div>
          <select class="sel" data-act="setGoal">
            ${[30, 45, 60, 90, 120].map(v => `<option value="${v}" ${s.dailyGoal === v ? "selected" : ""}>${v} phút</option>`).join("")}
          </select>
        </div>
        <div class="row between" style="padding:10px 0;border-bottom:1px solid var(--line)">
          <div><div>Tốc độ đọc</div><div class="tiny">chậm hơn giúp nghe rõ thanh điệu</div></div>
          <select class="sel" data-act="setRate">
            ${[[0.6, "Rất chậm"], [0.75, "Chậm"], [0.85, "Vừa"], [1, "Bình thường"], [1.15, "Nhanh"]].map(v => `<option value="${v[0]}" ${s.rate == v[0] ? "selected" : ""}>${v[1]}</option>`).join("")}
          </select>
        </div>
        <div class="row between" style="padding:10px 0;border-bottom:1px solid var(--line)">
          <div><div>Mặt trước thẻ là chữ Hán</div><div class="tiny">tắt để hiện pinyin trước</div></div>
          <button class="toggle ${s.showHanzi ? "on" : ""}" data-act="tg" data-k="showHanzi"><i></i></button>
        </div>
        <div class="row between" style="padding:10px 0">
          <div><div>Giao diện</div><div class="tiny">sáng / tối</div></div>
          <select class="sel" data-act="setTheme">
            ${[["auto", "Theo hệ thống"], ["dark", "Tối"], ["light", "Sáng"]].map(v => `<option value="${v[0]}" ${s.theme === v[0] ? "selected" : ""}>${v[1]}</option>`).join("")}
          </select>
        </div>
      </div>

      <div class="card"><h3>Tiến độ</h3>
        <div class="row between" style="padding:10px 0;border-bottom:1px solid var(--line)">
          <div><div>Ngày hiện tại</div><div class="tiny">đổi nếu bạn muốn nhảy bài</div></div>
          <select class="sel" data-act="setDay">
            ${Array.from({ length: 90 }, (_, i) => i + 1).map(v => `<option value="${v}" ${S.currentDay === v ? "selected" : ""}>Ngày ${v}</option>`).join("")}
          </select>
        </div>
        <div class="list-link" data-act="export"><span>💾 Xuất dữ liệu (sao lưu)</span><span class="tiny">JSON</span></div>
        <div class="list-link" data-act="import"><span>📥 Nhập dữ liệu</span><span class="tiny">dán JSON</span></div>
        <div class="list-link" data-act="reset"><span style="color:var(--bad)">🗑 Xoá toàn bộ tiến độ</span></div>
      </div>

      <div class="card"><h3>Âm thanh</h3>
        <div class="muted" style="margin-bottom:12px">
          Giọng đọc: ${TTS.hasChineseVoice() ? "<b style='color:var(--jade)'>sẵn sàng (zh-CN)</b>" : "<b style='color:var(--bad)'>chưa có giọng tiếng Trung</b>"}<br>
          Nhận diện giọng nói: ${TTS.recognitionSupported() ? "<b style='color:var(--jade)'>có</b>" : "<b style='color:var(--gold)'>không hỗ trợ</b>"}
        </div>
        <div class="row between" style="padding:10px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)">
          <div><div>Nguồn phát âm</div><div class="tiny">tự động = ưu tiên giọng máy</div></div>
          <select class="sel" data-act="setAudioSrc">
            ${[["auto", "Tự động"], ["device", "Giọng trên máy"], ["net", "Qua mạng"]].map(v => `<option value="${v[0]}" ${s.audioSource === v[0] ? "selected" : ""}>${v[1]}</option>`).join("")}
          </select>
        </div>
        <div class="row between" style="padding:10px 0">
          <div><div>Dự phòng qua mạng</div><div class="tiny">dùng khi máy thiếu giọng tiếng Trung</div></div>
          <button class="toggle ${s.netAudio !== false ? "on" : ""}" data-act="tg" data-k="netAudio"><i></i></button>
        </div>
        <button class="btn" data-act="tryVoice" data-i="0">🔊 Thử giọng đọc</button>
        <div class="spacer"></div>
        <button class="btn ghost" data-act="audioHelp">🩺 Chẩn đoán âm thanh</button>
        <div class="tiny" style="margin-top:10px">Khi phát qua mạng, chỉ đoạn chữ Hán cần đọc được gửi tới dịch vụ đọc của Google. Tắt tuỳ chọn trên nếu bạn không muốn điều đó.</div>
      </div>

      <div class="card"><h3>Về ứng dụng</h3>
        <p class="muted" style="margin:0 0 8px">Lộ trình 90 ngày × 60 phút, khoảng 700 từ vựng, 90 điểm ngữ pháp và 90 hội thoại — đủ để giao tiếp đời thường (tương đương HSK 1–2+).</p>
        <p class="tiny" style="margin:0">Toàn bộ dữ liệu học được lưu ngay trên máy bạn (localStorage). Nhớ xuất file sao lưu định kỳ.</p>
      </div>
    </div>`;
  }

  /* =========================================================
     RENDER + SỰ KIỆN
     ========================================================= */
  const NAV = [
    { k: "home", ic: "🏠", n: "Trang chủ" },
    { k: "lesson", ic: "📖", n: "Bài học" },
    { k: "review", ic: "🔁", n: "Ôn tập" },
    { k: "dict", ic: "🔍", n: "Từ điển" },
    { k: "settings", ic: "⚙️", n: "Cài đặt" }
  ];

  function render() {
    App.say = [];
    let h = "";
    switch (App.view) {
      case "home": h = vHome(); break;
      case "lessons": h = vLessons(); break;
      case "lesson": h = vLesson(); break;
      case "review": h = vReview(); break;
      case "quiz": h = vQuiz(); break;
      case "listen": h = vListen(); break;
      case "speak": h = vSpeak(); break;
      case "dict": h = vDict(); break;
      case "pinyin": h = vPinyin(); break;
      case "stats": h = vStats(); break;
      case "settings": h = vSettings(); break;
      default: h = vHome();
    }
    $("#app").innerHTML = h;
    $("#nav").innerHTML = NAV.map(n =>
      `<button data-act="nav" data-view="${n.k}" class="${App.view === n.k || (n.k === "home" && ["lessons", "stats", "pinyin"].includes(App.view)) ? "on" : ""}">
        <span class="ic">${n.ic}</span>${n.n}</button>`).join("");

    const ds = $("#dictSearch");
    if (ds) {
      // chỉ cập nhật danh sách, không render lại cả trang → không mất bàn phím trên iOS
      ds.addEventListener("input", e => {
        App.dictQ = e.target.value;
        clearTimeout(ds._t);
        ds._t = setTimeout(() => { const box = $("#dictList"); if (box) box.innerHTML = dictListHTML(); }, 200);
      });
    }
  }
  window.render = render;

  /* ---------- xử lý chạm ---------- */
  document.addEventListener("click", e => {
    const t = e.target.closest("[data-act]");
    if (!t) return;
    const a = t.dataset.act;
    TTS.unlock();

    switch (a) {
      case "go": go(t.dataset.view); break;
      case "nav": {
        const v = t.dataset.view;
        if (v === "lesson") { App.lessonDay = Store.S.currentDay; App.step = 0; }
        if (v === "review" && App.fc) { go("review"); break; }
        go(v);
        break;
      }
      case "say": speakSafe(App.say[+t.dataset.say]); break;

      case "startLesson":
        App.lessonDay = Store.S.currentDay; App.step = 0; timerReset(); go("lesson"); break;
      case "openLesson":
        App.lessonDay = +t.dataset.day; App.step = 0; timerReset(); go("lesson"); break;
      case "exitLesson": go("home"); break;
      case "stepNext": App.step++; TTS.stop(); window.scrollTo(0, 0); render(); break;
      case "stepPrev": App.step--; TTS.stop(); window.scrollTo(0, 0); render(); break;

      case "finishLesson": {
        const m = timerMinutes();
        Store.logTime(m);
        Store.markDone(App.lessonDay, m);
        timerReset();
        toast(`✓ Xong ngày ${App.lessonDay} · ${fmtMin(m)}`, 2400);
        go("home");
        break;
      }

      case "playDlg": {
        const L = Store.lesson(App.lessonDay || Store.S.currentDay);
        if (L && L.dialogue) { toast("Đang phát hội thoại…"); TTS.speakSeq(L.dialogue.lines.map(x => x[1]), 700); }
        break;
      }

      case "star": {
        const on = Store.star(t.dataset.hz);
        t.classList.toggle("on", on);
        t.textContent = t.classList.contains("btn") ? (on ? "★ Bỏ đánh dấu" : "☆ Đánh dấu") : (on ? "★" : "☆");
        break;
      }

      /* --- flashcard --- */
      case "rev": startReview(t.dataset.mode); break;
      case "learnNew": startReview("new", +t.dataset.day); break;
      case "flip": if (App.fc) { App.fc.show = true; render(); TTS.speak(App.fc.q[App.fc.i].hz); } break;
      case "quitFc": App.fc = null; go("home"); break;
      case "grade": {
        const F = App.fc, g = +t.dataset.g, c = F.q[F.i];
        Store.grade(c.hz, g);
        Store.logCard(g === 0 ? 2 : 5);
        if (g === 0) F.again.push(c); else F.done++;
        F.i++; F.show = false;
        render();
        break;
      }

      /* --- quiz --- */
      case "quizStart": {
        const list = buildQuiz(null, +t.dataset.n);
        if (!list) { toast("Chưa đủ từ vựng"); break; }
        App.quiz = { list, i: 0, right: 0, picked: null, wrong: [] };
        go("quiz");
        break;
      }
      case "quizDay": {
        const list = buildQuiz(+t.dataset.day, 10);
        if (!list) { toast("Bài này ít từ quá"); break; }
        App.quiz = { list, i: 0, right: 0, picked: null, wrong: [] };
        go("quiz");
        break;
      }
      case "pick": {
        const Q = App.quiz; if (Q.picked != null) break;
        const q = Q.list[Q.i], i = +t.dataset.i;
        Q.picked = i;
        if (i === q.ans) { Q.right++; Store.logCard(5); }
        else { Q.wrong.push({ hz: q.it.hz, py: q.it.py, vi: q.it.vi }); Store.grade(q.it.hz, 0); }
        render();
        TTS.speak(q.it.hz);
        break;
      }
      case "qNext": App.quiz.i++; App.quiz.picked = null; render(); break;
      case "quitQuiz": App.quiz = null; go("home"); break;

      /* --- nghe --- */
      case "listenStart": {
        const pool = Store.sentencesUpTo(Store.S.currentDay);
        if (pool.length < 6) { toast("Chưa đủ dữ liệu"); break; }
        const items = shuffle(pool).slice(0, +t.dataset.n || 10);
        const list = items.map(it => {
          const wrong = shuffle(pool.filter(x => x.v !== it.v)).slice(0, 3);
          const opts = shuffle([it].concat(wrong));
          return { it, opts, ans: opts.indexOf(it) };
        });
        App.listen = { list, i: 0, right: 0, picked: null };
        go("listen");
        setTimeout(() => TTS.speak(list[0].it.z), 350);
        break;
      }
      case "lPick": {
        const Lz = App.listen; if (Lz.picked != null) break;
        Lz.picked = +t.dataset.i;
        if (Lz.picked === Lz.list[Lz.i].ans) { Lz.right++; Store.logCard(5); }
        render();
        break;
      }
      case "lNext": {
        App.listen.i++; App.listen.picked = null; render();
        const Lz = App.listen;
        if (Lz && Lz.i < Lz.list.length) setTimeout(() => TTS.speak(Lz.list[Lz.i].it.z), 300);
        break;
      }
      case "quitListen": App.listen = null; go("home"); break;

      /* --- nói --- */
      case "speakStart": {
        const day = +t.dataset.day;
        let pool = day ? (Store.lesson(day)?.drills || []).map(x => ({ z: x[0], p: x[1], v: x[2] })) : Store.sentencesUpTo(Store.S.currentDay);
        if (!pool.length) { toast("Chưa có câu luyện"); break; }
        App.speak = { list: shuffle(pool).slice(0, 10), i: 0, scores: [], heard: null, score: 0, rec: false, r: null };
        go("speak");
        break;
      }
      case "speakDay": {
        const pool = (Store.lesson(+t.dataset.day)?.drills || []).map(x => ({ z: x[0], p: x[1], v: x[2] }));
        App.speak = { list: pool, i: 0, scores: [], heard: null, score: 0, rec: false, r: null };
        go("speak");
        break;
      }
      case "mic": {
        const P = App.speak;
        if (P.rec) { try { P.r && P.r.stop(); } catch (e) {} P.rec = false; render(); break; }
        if (!TTS.recognitionSupported()) { toast("Thiết bị không hỗ trợ nhận diện giọng nói"); break; }
        TTS.stop();
        P.heard = null; P.rec = true; render();
        P.r = TTS.recognize(res => {
          if (res.error) {
            P.rec = false;
            toast(res.error === "not-allowed" ? "Hãy cho phép quyền micro" : "Không nghe được, thử lại");
            render(); return;
          }
          if (res.end) { if (P.rec) { P.rec = false; render(); } return; }
          P.rec = false;
          P.heard = res.text;
          const target = P.list[P.i].z;
          P.score = Math.max(...(res.alts || [res.text]).map(x => TTS.score(x, target)));
          P.scores.push(P.score);
          Store.logCard(P.score >= 70 ? 6 : 3);
          render();
        });
        break;
      }
      case "sNext": {
        const P = App.speak;
        if (P.heard == null) P.scores.push(0);
        P.i++; P.heard = null; P.score = 0; P.rec = false;
        render();
        break;
      }
      case "quitSpeak": { try { App.speak?.r?.stop(); } catch (e) {} App.speak = null; go("home"); break; }

      /* --- từ điển --- */
      case "dictF": App.dictFilter = t.dataset.f; render(); break;

      /* --- cài đặt --- */
      case "tg": {
        const k = t.dataset.k;
        Store.S.settings[k] = !Store.S.settings[k];
        Store.save(); render();
        break;
      }
      case "export": {
        const txt = Store.exportJSON();
        const box = document.createElement("div");
        box.className = "sheet";
        box.innerHTML = `<div class="inner"><h3>Sao lưu dữ liệu</h3>
          <p class="muted">Chọn toàn bộ và sao chép, lưu vào Ghi chú hoặc iCloud.</p>
          <textarea class="search" style="height:220px;font-size:11px;font-family:monospace">${esc(txt)}</textarea>
          <div class="spacer"></div>
          <button class="btn primary" data-act="copyExp">Sao chép</button>
          <div class="spacer"></div><button class="btn ghost" data-act="closeSheet">Đóng</button></div>`;
        document.body.appendChild(box);
        break;
      }
      case "copyExp": {
        const ta = document.querySelector(".sheet textarea");
        ta.select(); ta.setSelectionRange(0, 999999);
        try { document.execCommand("copy"); toast("Đã sao chép ✓"); } catch (e) { toast("Hãy chọn và sao chép thủ công"); }
        break;
      }
      case "import": {
        const box = document.createElement("div");
        box.className = "sheet";
        box.innerHTML = `<div class="inner"><h3>Nhập dữ liệu</h3>
          <p class="muted">Dán nội dung JSON đã sao lưu. Dữ liệu hiện tại sẽ bị thay thế.</p>
          <textarea class="search" id="impBox" style="height:200px;font-size:11px;font-family:monospace" placeholder='{"version":1,...}'></textarea>
          <div class="spacer"></div>
          <button class="btn primary" data-act="doImport">Nhập</button>
          <div class="spacer"></div><button class="btn ghost" data-act="closeSheet">Huỷ</button></div>`;
        document.body.appendChild(box);
        break;
      }
      case "doImport": {
        try {
          Store.importJSON($("#impBox").value);
          document.querySelector(".sheet").remove();
          applyTheme(); toast("Đã nhập dữ liệu ✓"); go("home");
        } catch (err) { toast("JSON không hợp lệ"); }
        break;
      }
      case "closeSheet": document.querySelector(".sheet")?.remove(); break;
      case "audioHelp": openAudioHelp(""); break;
      case "forceNet": {
        Store.S.settings.audioSource = "net";
        Store.S.settings.netAudio = true;
        Store.save(); audioWarned = false;
        toast("Đã chuyển sang phát qua mạng", 2200);
        openAudioHelp("");
        speakSafe("你好，我在学中文。");
        break;
      }
      case "forceDevice": {
        Store.S.settings.audioSource = "auto";
        Store.save(); audioWarned = false;
        toast("Đã quay lại giọng của máy", 2200);
        openAudioHelp("");
        speakSafe("你好");
        break;
      }
      case "tryNet": {
        const label = t.innerHTML;
        t.innerHTML = "⏳ đang tải…";
        TTS.playNet("你好，我在学中文。", {
          onend: () => { t.innerHTML = label; },
          onfail: err => { t.innerHTML = label; toast(FAIL_MSG[err] || ("Lỗi: " + err), 3000); }
        });
        break;
      }
      case "tryVoice": {
        const name = TTS.pickVoice(+t.dataset.i);
        if (!name) { toast("Máy chưa có giọng tiếng Trung nào"); break; }
        const label = t.innerHTML;
        t.innerHTML = "⏳ đang phát…";
        TTS.speak("你好，我在学中文。", {
          onend: () => { t.innerHTML = label; },
          onfail: err => {
            t.innerHTML = label;
            toast(err === "no-audio" ? "Gọi được nhưng không ra tiếng → xem mục Khắc phục" : "Lỗi: " + err, 3000);
          }
        });
        break;
      }
      case "reset": {
        if (confirm("Xoá toàn bộ tiến độ học và bắt đầu lại từ ngày 1?")) {
          Store.reset(); applyTheme(); toast("Đã xoá dữ liệu"); go("home");
        }
        break;
      }
    }
  });

  document.addEventListener("change", e => {
    const t = e.target.closest("[data-act]");
    if (!t) return;
    const a = t.dataset.act, v = t.value;
    if (a === "setGoal") { Store.S.settings.dailyGoal = +v; Store.save(); toast("Đã lưu"); }
    if (a === "setRate") { Store.S.settings.rate = +v; Store.save(); TTS.speak("你好"); }
    if (a === "setTheme") { Store.S.settings.theme = v; Store.save(); applyTheme(); }
    if (a === "setAudioSrc") { Store.S.settings.audioSource = v; Store.save(); audioWarned = false; speakSafe("你好"); }
    if (a === "setDay") { Store.S.currentDay = +v; Store.save(); toast("Đã chuyển sang ngày " + v); render(); }
  });

  function applyTheme() {
    const th = Store.S.settings.theme;
    if (th === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", th);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { TTS.stop(); if (App.view === "lesson") timerStop(); }
    else if (App.view === "lesson") timerStart();
  });

  /* ---------- khởi động ---------- */
  function boot() {
    Store.load();
    applyTheme();
    if (!window.LESSONS || !window.LESSONS.length) {
      $("#app").innerHTML = `<div class="wrap"><div class="empty"><div class="ic">⚠️</div>Không tải được dữ liệu bài học.</div></div>`;
      return;
    }
    window.LESSONS.sort((a, b) => a.d - b.d);
    App.lessonDay = Store.S.currentDay;
    render();
    // Danh sách giọng nạp muộn (rất hay gặp trên iPhone) → vẽ lại để bỏ cảnh báo sai
    TTS.onVoices(() => { if (["home", "settings"].includes(App.view) && !document.querySelector(".sheet")) render(); });
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
