/* Tuần 3–4 · Ngày 15–28 · Thời gian, ngày tháng + Ăn uống, gọi món */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

{
  d: 15, week: 3, theme: "Thời gian & lịch",
  title: "Xem giờ",
  goal: "Hỏi giờ và nói giờ chính xác.",
  tip: "点 = giờ, 分 = phút. 2 giờ là 两点 (dùng 两 chứ không dùng 二).",
  vocab: [
    ["点", "diǎn", "giờ"],
    ["分", "fēn", "phút"],
    ["半", "bàn", "rưỡi, nửa"],
    ["刻", "kè", "khắc (15 phút)"],
    ["差", "chà", "thiếu, kém"],
    ["现在", "xiànzài", "bây giờ"],
    ["时间", "shíjiān", "thời gian"],
    ["几点", "jǐ diǎn", "mấy giờ"],
    ["起床", "qǐchuáng", "ngủ dậy"],
    ["睡觉", "shuìjiào", "đi ngủ"]
  ],
  grammar: [
    {
      p: "Cách nói giờ",
      e: "8:00 → 八点; 8:15 → 八点十五分 hoặc 八点一刻; 8:30 → 八点半; 7:55 → 差五分八点 (thiếu 5 phút tới 8 giờ).",
      ex: [
        ["现在几点？", "Xiànzài jǐ diǎn?", "Bây giờ mấy giờ?"],
        ["现在两点半。", "Xiànzài liǎng diǎn bàn.", "Bây giờ 2 giờ rưỡi."]
      ]
    },
    {
      p: "Thời gian đứng TRƯỚC động từ",
      e: "Đây là quy tắc sắt: 我七点起床 (Tôi 7 giờ dậy). KHÔNG nói 我起床七点.",
      ex: [
        ["我六点半起床。", "Wǒ liù diǎn bàn qǐchuáng.", "Tôi dậy lúc 6 rưỡi."],
        ["他十一点睡觉。", "Tā shíyī diǎn shuìjiào.", "Anh ấy ngủ lúc 11 giờ."]
      ]
    }
  ],
  dialogue: {
    title: "Mấy giờ rồi?",
    lines: [
      ["A", "请问，现在几点？", "Qǐngwèn, xiànzài jǐ diǎn?", "Xin hỏi, bây giờ mấy giờ?"],
      ["B", "现在八点一刻。", "Xiànzài bā diǎn yí kè.", "Bây giờ 8 giờ 15."],
      ["A", "你几点上班？", "Nǐ jǐ diǎn shàngbān?", "Bạn mấy giờ đi làm?"],
      ["B", "我八点半上班。你呢？", "Wǒ bā diǎn bàn shàngbān. Nǐ ne?", "Tôi 8 rưỡi đi làm. Còn bạn?"],
      ["A", "我九点。我还有时间。", "Wǒ jiǔ diǎn. Wǒ hái yǒu shíjiān.", "Tôi 9 giờ. Tôi vẫn còn thời gian."]
    ]
  },
  drills: [
    ["现在几点？", "Xiànzài jǐ diǎn?", "Bây giờ mấy giờ?"],
    ["现在三点半。", "Xiànzài sān diǎn bàn.", "Bây giờ 3 rưỡi."],
    ["我六点起床。", "Wǒ liù diǎn qǐchuáng.", "Tôi dậy lúc 6 giờ."],
    ["我十一点睡觉。", "Wǒ shíyī diǎn shuìjiào.", "Tôi ngủ lúc 11 giờ."],
    ["差十分七点。", "Chà shí fēn qī diǎn.", "7 giờ kém 10."]
  ]
},

{
  d: 16, week: 3, theme: "Thời gian & lịch",
  title: "Thứ trong tuần",
  goal: "Nói thứ mấy, hỏi lịch hẹn theo ngày.",
  tip: "星期 + số = thứ. Thứ Hai là 星期一, chủ nhật đặc biệt: 星期天 hoặc 星期日. Cực kỳ dễ nhớ.",
  vocab: [
    ["星期", "xīngqī", "tuần lễ"],
    ["星期一", "xīngqīyī", "thứ Hai"],
    ["星期二", "xīngqī'èr", "thứ Ba"],
    ["星期三", "xīngqīsān", "thứ Tư"],
    ["星期四", "xīngqīsì", "thứ Năm"],
    ["星期五", "xīngqīwǔ", "thứ Sáu"],
    ["星期六", "xīngqīliù", "thứ Bảy"],
    ["星期天", "xīngqītiān", "chủ nhật"],
    ["周末", "zhōumò", "cuối tuần"],
    ["上班", "shàngbān", "đi làm"],
    ["休息", "xiūxi", "nghỉ ngơi"]
  ],
  grammar: [
    {
      p: "Câu không cần động từ với ngày tháng",
      e: "今天星期几？ – 今天星期一。 Không dùng 是 trong câu khẳng định. Nhưng phủ định thì BẮT BUỘC có 不是: 今天不是星期一。",
      ex: [
        ["今天星期几？", "Jīntiān xīngqī jǐ?", "Hôm nay thứ mấy?"],
        ["今天星期三。", "Jīntiān xīngqīsān.", "Hôm nay thứ Tư."]
      ]
    }
  ],
  dialogue: {
    title: "Cuối tuần làm gì?",
    lines: [
      ["A", "今天星期几？", "Jīntiān xīngqī jǐ?", "Hôm nay thứ mấy?"],
      ["B", "今天星期五。", "Jīntiān xīngqīwǔ.", "Hôm nay thứ Sáu."],
      ["A", "太好了！明天是周末。", "Tài hǎo le! Míngtiān shì zhōumò.", "Tuyệt quá! Mai là cuối tuần."],
      ["B", "你星期六做什么？", "Nǐ xīngqīliù zuò shénme?", "Thứ Bảy bạn làm gì?"],
      ["A", "我在家休息。你呢？", "Wǒ zài jiā xiūxi. Nǐ ne?", "Tôi ở nhà nghỉ. Còn bạn?"],
      ["B", "我要去看朋友。", "Wǒ yào qù kàn péngyou.", "Tôi sẽ đi thăm bạn."]
    ]
  },
  drills: [
    ["今天星期几？", "Jīntiān xīngqī jǐ?", "Hôm nay thứ mấy?"],
    ["今天星期二。", "Jīntiān xīngqī'èr.", "Hôm nay thứ Ba."],
    ["星期六我休息。", "Xīngqīliù wǒ xiūxi.", "Thứ Bảy tôi nghỉ."],
    ["周末你做什么？", "Zhōumò nǐ zuò shénme?", "Cuối tuần bạn làm gì?"],
    ["我星期一上班。", "Wǒ xīngqīyī shàngbān.", "Thứ Hai tôi đi làm."]
  ]
},

{
  d: 17, week: 3, theme: "Thời gian & lịch",
  title: "Ngày tháng năm · Sinh nhật",
  goal: "Nói ngày tháng, hỏi sinh nhật.",
  tip: "Trật tự ngày tháng tiếng Trung đi từ LỚN đến NHỎ: năm – tháng – ngày. Ngược hoàn toàn với tiếng Việt.",
  vocab: [
    ["年", "nián", "năm"],
    ["月", "yuè", "tháng"],
    ["号", "hào", "ngày (nói)"],
    ["日", "rì", "ngày (viết)"],
    ["昨天", "zuótiān", "hôm qua"],
    ["后天", "hòutiān", "ngày kia"],
    ["前天", "qiántiān", "hôm kia"],
    ["生日快乐", "shēngrì kuàilè", "chúc mừng sinh nhật"],
    ["快乐", "kuàilè", "vui vẻ"],
    ["祝", "zhù", "chúc"]
  ],
  grammar: [
    {
      p: "Trật tự lớn → nhỏ",
      e: "2025年3月8日 = ngày 8 tháng 3 năm 2025. Năm đọc từng chữ số: 二零二五年 (èr líng èr wǔ nián).",
      ex: [
        ["今天几月几号？", "Jīntiān jǐ yuè jǐ hào?", "Hôm nay ngày mấy tháng mấy?"],
        ["今天三月八号。", "Jīntiān sān yuè bā hào.", "Hôm nay mùng 8 tháng 3."]
      ]
    },
    {
      p: "祝你… – câu chúc",
      e: "祝 + người + điều chúc. Đây là khung câu chúc vạn năng.",
      ex: [
        ["祝你生日快乐！", "Zhù nǐ shēngrì kuàilè!", "Chúc bạn sinh nhật vui vẻ!"],
        ["祝你身体健康！", "Zhù nǐ shēntǐ jiànkāng!", "Chúc bạn sức khỏe dồi dào!"]
      ]
    }
  ],
  dialogue: {
    title: "Sinh nhật bạn ngày nào?",
    lines: [
      ["A", "你的生日是几月几号？", "Nǐ de shēngrì shì jǐ yuè jǐ hào?", "Sinh nhật bạn ngày mấy tháng mấy?"],
      ["B", "我的生日是九月十五号。", "Wǒ de shēngrì shì jiǔ yuè shíwǔ hào.", "Sinh nhật tôi là 15 tháng 9."],
      ["A", "那是后天！", "Nà shì hòutiān!", "Vậy là ngày kia!"],
      ["B", "对啊！", "Duì a!", "Đúng vậy!"],
      ["A", "祝你生日快乐！", "Zhù nǐ shēngrì kuàilè!", "Chúc bạn sinh nhật vui vẻ!"],
      ["B", "谢谢你！", "Xièxie nǐ!", "Cảm ơn bạn!"]
    ]
  },
  drills: [
    ["今天几月几号？", "Jīntiān jǐ yuè jǐ hào?", "Hôm nay ngày mấy tháng mấy?"],
    ["今天五月二十号。", "Jīntiān wǔ yuè èrshí hào.", "Hôm nay 20 tháng 5."],
    ["我的生日是三月八号。", "Wǒ de shēngrì shì sān yuè bā hào.", "Sinh nhật tôi 8 tháng 3."],
    ["祝你生日快乐！", "Zhù nǐ shēngrì kuàilè!", "Chúc sinh nhật vui vẻ!"],
    ["昨天是星期天。", "Zuótiān shì xīngqītiān.", "Hôm qua là chủ nhật."]
  ]
},

{
  d: 18, week: 3, theme: "Thời gian & lịch",
  title: "在 – đang làm & ở đâu",
  goal: "Diễn tả hành động đang diễn ra và vị trí.",
  tip: "在 có 2 vai trò: đứng trước động từ = 'đang'; đứng trước địa điểm = 'ở'. Hai vai trò này rất hay đi cùng nhau trong một câu.",
  vocab: [
    ["在", "zài", "ở, đang"],
    ["家", "jiā", "nhà"],
    ["公司", "gōngsī", "công ty"],
    ["学校", "xuéxiào", "trường học"],
    ["办公室", "bàngōngshì", "văn phòng"],
    ["哪儿", "nǎr", "ở đâu"],
    ["这儿", "zhèr", "ở đây"],
    ["那儿", "nàr", "ở kia"],
    ["正在", "zhèngzài", "đang (nhấn mạnh)"],
    ["等", "děng", "đợi"]
  ],
  grammar: [
    {
      p: "在 + địa điểm + động từ",
      e: "Trạng ngữ nơi chốn đứng TRƯỚC động từ, ngược tiếng Việt: 我在家吃饭 = 'Tôi ở nhà ăn cơm' (Tôi ăn cơm ở nhà).",
      ex: [
        ["我在公司工作。", "Wǒ zài gōngsī gōngzuò.", "Tôi làm việc ở công ty."],
        ["他在学校学习。", "Tā zài xuéxiào xuéxí.", "Anh ấy học ở trường."]
      ]
    },
    {
      p: "在 + động từ = đang",
      e: "Muốn nhấn mạnh có thể dùng 正在 hoặc thêm 呢 cuối câu.",
      ex: [
        ["我在吃饭。", "Wǒ zài chīfàn.", "Tôi đang ăn cơm."],
        ["他正在打电话呢。", "Tā zhèngzài dǎ diànhuà ne.", "Anh ấy đang gọi điện."]
      ]
    }
  ],
  dialogue: {
    title: "Bạn đang ở đâu?",
    lines: [
      ["A", "喂，你在哪儿？", "Wéi, nǐ zài nǎr?", "Alô, bạn đang ở đâu?"],
      ["B", "我在公司，我在开会。", "Wǒ zài gōngsī, wǒ zài kāihuì.", "Tôi ở công ty, đang họp."],
      ["A", "你几点回家？", "Nǐ jǐ diǎn huí jiā?", "Mấy giờ bạn về nhà?"],
      ["B", "六点半。你在家等我吧。", "Liù diǎn bàn. Nǐ zài jiā děng wǒ ba.", "6 rưỡi. Bạn đợi tôi ở nhà nhé."],
      ["A", "好的，晚上见。", "Hǎo de, wǎnshang jiàn.", "Được, tối gặp."]
    ]
  },
  drills: [
    ["你在哪儿？", "Nǐ zài nǎr?", "Bạn ở đâu?"],
    ["我在家。", "Wǒ zài jiā.", "Tôi ở nhà."],
    ["我在公司工作。", "Wǒ zài gōngsī gōngzuò.", "Tôi làm việc ở công ty."],
    ["他在吃饭。", "Tā zài chīfàn.", "Anh ấy đang ăn cơm."],
    ["请在这儿等我。", "Qǐng zài zhèr děng wǒ.", "Xin đợi tôi ở đây."]
  ]
},

{
  d: 19, week: 3, theme: "Thời gian & lịch",
  title: "Một ngày của tôi",
  goal: "Kể lại lịch trình một ngày bằng 6–8 câu liên tiếp.",
  tip: "Đây là bài nói đầu tiên có độ dài thật. Hãy dùng khung: 我七点起床，然后…，接着…，晚上…",
  vocab: [
    ["然后", "ránhòu", "sau đó"],
    ["先", "xiān", "trước tiên"],
    ["再", "zài", "rồi, lại"],
    ["下班", "xiàbān", "tan làm"],
    ["回家", "huí jiā", "về nhà"],
    ["洗澡", "xǐzǎo", "tắm"],
    ["刷牙", "shuāyá", "đánh răng"],
    ["每天", "měitiān", "mỗi ngày"],
    ["上课", "shàngkè", "lên lớp, học"],
    ["锻炼", "duànliàn", "tập thể dục"]
  ],
  grammar: [
    {
      p: "先…然后… – trước… sau đó…",
      e: "Khung nối câu quan trọng nhất khi kể chuyện. 先 đứng trước động từ 1, 然后 mở đầu vế 2.",
      ex: [
        ["我先吃饭，然后看书。", "Wǒ xiān chīfàn, ránhòu kàn shū.", "Tôi ăn cơm trước, sau đó đọc sách."]
      ]
    },
    {
      p: "每天 + thời gian + động từ",
      e: "每天 đứng đầu câu hoặc sau chủ ngữ, luôn trước động từ.",
      ex: [
        ["我每天六点起床。", "Wǒ měitiān liù diǎn qǐchuáng.", "Mỗi ngày tôi dậy lúc 6 giờ."]
      ]
    }
  ],
  dialogue: {
    title: "Một ngày của tôi (bài nói mẫu)",
    lines: [
      ["Tôi", "我每天六点半起床。", "Wǒ měitiān liù diǎn bàn qǐchuáng.", "Mỗi ngày tôi dậy lúc 6 rưỡi."],
      ["Tôi", "先刷牙、洗澡，然后吃早饭。", "Xiān shuāyá, xǐzǎo, ránhòu chī zǎofàn.", "Đầu tiên đánh răng, tắm, sau đó ăn sáng."],
      ["Tôi", "我八点去公司上班。", "Wǒ bā diǎn qù gōngsī shàngbān.", "8 giờ tôi đến công ty làm việc."],
      ["Tôi", "中午十二点吃午饭。", "Zhōngwǔ shí'èr diǎn chī wǔfàn.", "12 giờ trưa ăn trưa."],
      ["Tôi", "下午六点下班回家。", "Xiàwǔ liù diǎn xiàbān huí jiā.", "6 giờ chiều tan làm về nhà."],
      ["Tôi", "晚上我学习中文，十一点睡觉。", "Wǎnshang wǒ xuéxí Zhōngwén, shíyī diǎn shuìjiào.", "Tối tôi học tiếng Trung, 11 giờ đi ngủ."]
    ]
  },
  drills: [
    ["我每天六点起床。", "Wǒ měitiān liù diǎn qǐchuáng.", "Mỗi ngày tôi dậy lúc 6 giờ."],
    ["先吃饭，然后工作。", "Xiān chīfàn, ránhòu gōngzuò.", "Ăn cơm trước, sau đó làm việc."],
    ["我六点下班。", "Wǒ liù diǎn xiàbān.", "Tôi tan làm lúc 6 giờ."],
    ["晚上我学习中文。", "Wǎnshang wǒ xuéxí Zhōngwén.", "Buổi tối tôi học tiếng Trung."],
    ["我每天锻炼。", "Wǒ měitiān duànliàn.", "Mỗi ngày tôi tập thể dục."]
  ]
},

{
  d: 20, week: 3, theme: "Thời gian & lịch",
  title: "Từ chỉ thời lượng · 多长时间",
  goal: "Nói làm việc gì đó trong bao lâu.",
  tip: "Phân biệt: 两点 = lúc 2 giờ (thời điểm), 两个小时 = 2 tiếng đồng hồ (thời lượng). Thời lượng đứng SAU động từ.",
  vocab: [
    ["小时", "xiǎoshí", "tiếng đồng hồ"],
    ["分钟", "fēnzhōng", "phút (thời lượng)"],
    ["天", "tiān", "ngày"],
    ["多长时间", "duō cháng shíjiān", "bao lâu"],
    ["每", "měi", "mỗi"],
    ["常常", "chángcháng", "thường xuyên"],
    ["有时候", "yǒu shíhou", "thỉnh thoảng"],
    ["从", "cóng", "từ"],
    ["到", "dào", "đến"],
    ["开始", "kāishǐ", "bắt đầu"]
  ],
  grammar: [
    {
      p: "Động từ + thời lượng",
      e: "Thời lượng đứng SAU động từ: 我学一个小时 (tôi học một tiếng). Nếu có tân ngữ thì lặp động từ hoặc chèn 的.",
      ex: [
        ["我每天学一个小时中文。", "Wǒ měitiān xué yí ge xiǎoshí Zhōngwén.", "Mỗi ngày tôi học tiếng Trung một tiếng."],
        ["你学了多长时间？", "Nǐ xué le duō cháng shíjiān?", "Bạn học bao lâu rồi?"]
      ]
    },
    {
      p: "从…到… – từ… đến…",
      e: "Dùng cho cả thời gian lẫn địa điểm.",
      ex: [
        ["从八点到十二点", "cóng bā diǎn dào shí'èr diǎn", "từ 8 giờ đến 12 giờ"],
        ["从家到公司", "cóng jiā dào gōngsī", "từ nhà đến công ty"]
      ]
    }
  ],
  dialogue: {
    title: "Học tiếng Trung bao lâu rồi?",
    lines: [
      ["A", "你学中文学了多长时间？", "Nǐ xué Zhōngwén xué le duō cháng shíjiān?", "Bạn học tiếng Trung bao lâu rồi?"],
      ["B", "三个星期。我每天学一个小时。", "Sān ge xīngqī. Wǒ měitiān xué yí ge xiǎoshí.", "Ba tuần. Mỗi ngày tôi học một tiếng."],
      ["A", "你什么时候学？", "Nǐ shénme shíhou xué?", "Bạn học lúc nào?"],
      ["B", "晚上，从八点到九点。", "Wǎnshang, cóng bā diǎn dào jiǔ diǎn.", "Buổi tối, từ 8 giờ đến 9 giờ."],
      ["A", "你很努力！", "Nǐ hěn nǔlì!", "Bạn chăm chỉ thật!"]
    ]
  },
  drills: [
    ["你学了多长时间？", "Nǐ xué le duō cháng shíjiān?", "Bạn học bao lâu rồi?"],
    ["我每天学一个小时。", "Wǒ měitiān xué yí ge xiǎoshí.", "Mỗi ngày tôi học một tiếng."],
    ["从八点到九点。", "Cóng bā diǎn dào jiǔ diǎn.", "Từ 8 giờ đến 9 giờ."],
    ["我常常看中国电影。", "Wǒ chángcháng kàn Zhōngguó diànyǐng.", "Tôi thường xem phim Trung Quốc."],
    ["有时候我很忙。", "Yǒu shíhou wǒ hěn máng.", "Thỉnh thoảng tôi rất bận."]
  ]
},

{
  d: 21, week: 3, theme: "Thời gian & lịch",
  title: "TỔNG ÔN TUẦN 3",
  goal: "Sắp xếp lịch hẹn hoàn chỉnh: ngày – giờ – địa điểm.",
  tip: "Trật tự vàng của câu tiếng Trung: AI + KHI NÀO + Ở ĐÂU + LÀM GÌ. Nhớ đúng thứ tự này là bạn nói đúng 80% câu.",
  review: [15, 16, 17, 18, 19, 20],
  vocab: [
    ["什么时候", "shénme shíhou", "khi nào"],
    ["约", "yuē", "hẹn"],
    ["方便", "fāngbiàn", "tiện, thuận tiện"],
    ["行", "xíng", "được, ok"],
    ["没问题", "méi wèntí", "không vấn đề gì"],
    ["一起", "yìqǐ", "cùng nhau"]
  ],
  grammar: [
    {
      p: "Trật tự trạng ngữ: Thời gian trước Địa điểm",
      e: "我明天在公司见你 = Tôi + mai + ở công ty + gặp bạn. Không được đảo thành 我在公司明天见你.",
      ex: [
        ["我们明天在咖啡店见面吧。", "Wǒmen míngtiān zài kāfēidiàn jiànmiàn ba.", "Mai chúng ta gặp ở quán cà phê nhé."]
      ]
    }
  ],
  dialogue: {
    title: "Hẹn gặp",
    lines: [
      ["A", "你什么时候有时间？", "Nǐ shénme shíhou yǒu shíjiān?", "Khi nào bạn rảnh?"],
      ["B", "星期六下午。你呢？", "Xīngqīliù xiàwǔ. Nǐ ne?", "Chiều thứ Bảy. Còn bạn?"],
      ["A", "我也可以。三点方便吗？", "Wǒ yě kěyǐ. Sān diǎn fāngbiàn ma?", "Tôi cũng được. 3 giờ tiện không?"],
      ["B", "没问题。在哪儿见？", "Méi wèntí. Zài nǎr jiàn?", "Không vấn đề gì. Gặp ở đâu?"],
      ["A", "我们在学校前面的咖啡店见面吧。", "Wǒmen zài xuéxiào qiánmiàn de kāfēidiàn jiànmiàn ba.", "Gặp ở quán cà phê trước trường nhé."],
      ["B", "行，星期六三点见！", "Xíng, xīngqīliù sān diǎn jiàn!", "Được, 3 giờ thứ Bảy gặp!"]
    ]
  },
  drills: [
    ["你什么时候有时间？", "Nǐ shénme shíhou yǒu shíjiān?", "Khi nào bạn rảnh?"],
    ["星期六下午三点方便吗？", "Xīngqīliù xiàwǔ sān diǎn fāngbiàn ma?", "3 giờ chiều thứ Bảy tiện không?"],
    ["我们在咖啡店见。", "Wǒmen zài kāfēidiàn jiàn.", "Chúng ta gặp ở quán cà phê."],
    ["没问题！", "Méi wèntí!", "Không vấn đề gì!"],
    ["我们一起去吧。", "Wǒmen yìqǐ qù ba.", "Chúng ta cùng đi nhé."]
  ]
},

{
  d: 22, week: 4, theme: "Ăn uống",
  title: "Món ăn & đồ uống cơ bản",
  goal: "Gọi tên 12 món ăn – đồ uống thông dụng.",
  tip: "Người Trung Quốc chào nhau bằng câu 你吃了吗？(Ăn cơm chưa?) — tương đương 'Khỏe không?'. Đừng hiểu là họ muốn mời bạn ăn.",
  vocab: [
    ["米饭", "mǐfàn", "cơm"],
    ["面条", "miàntiáo", "mì"],
    ["包子", "bāozi", "bánh bao"],
    ["饺子", "jiǎozi", "sủi cảo"],
    ["鸡蛋", "jīdàn", "trứng gà"],
    ["牛肉", "niúròu", "thịt bò"],
    ["鸡肉", "jīròu", "thịt gà"],
    ["鱼", "yú", "cá"],
    ["蔬菜", "shūcài", "rau"],
    ["水果", "shuǐguǒ", "trái cây"],
    ["茶", "chá", "trà"],
    ["咖啡", "kāfēi", "cà phê"],
    ["啤酒", "píjiǔ", "bia"],
    ["牛奶", "niúnǎi", "sữa"]
  ],
  grammar: [
    {
      p: "想 + động từ = muốn làm gì",
      e: "想 là động từ năng nguyện, đứng trước động từ chính. Phủ định: 不想.",
      ex: [
        ["我想吃饺子。", "Wǒ xiǎng chī jiǎozi.", "Tôi muốn ăn sủi cảo."],
        ["我不想喝咖啡。", "Wǒ bù xiǎng hē kāfēi.", "Tôi không muốn uống cà phê."]
      ]
    },
    {
      p: "喜欢 + danh từ / động từ",
      e: "喜欢 dùng được cả với danh từ lẫn cả cụm động từ.",
      ex: [
        ["我喜欢中国菜。", "Wǒ xǐhuan Zhōngguó cài.", "Tôi thích món Trung Quốc."],
        ["我喜欢喝茶。", "Wǒ xǐhuan hē chá.", "Tôi thích uống trà."]
      ]
    }
  ],
  dialogue: {
    title: "Ăn gì bây giờ?",
    lines: [
      ["A", "你想吃什么？", "Nǐ xiǎng chī shénme?", "Bạn muốn ăn gì?"],
      ["B", "我想吃面条。你呢？", "Wǒ xiǎng chī miàntiáo. Nǐ ne?", "Tôi muốn ăn mì. Còn bạn?"],
      ["A", "我想吃饺子和米饭。", "Wǒ xiǎng chī jiǎozi hé mǐfàn.", "Tôi muốn ăn sủi cảo và cơm."],
      ["B", "你喝什么？", "Nǐ hē shénme?", "Bạn uống gì?"],
      ["A", "一杯茶，谢谢。", "Yì bēi chá, xièxie.", "Một cốc trà, cảm ơn."]
    ]
  },
  drills: [
    ["你想吃什么？", "Nǐ xiǎng chī shénme?", "Bạn muốn ăn gì?"],
    ["我想吃面条。", "Wǒ xiǎng chī miàntiáo.", "Tôi muốn ăn mì."],
    ["我喜欢喝茶。", "Wǒ xǐhuan hē chá.", "Tôi thích uống trà."],
    ["我不想喝咖啡。", "Wǒ bù xiǎng hē kāfēi.", "Tôi không muốn uống cà phê."],
    ["你吃了吗？", "Nǐ chī le ma?", "Bạn ăn chưa?"]
  ]
},

{
  d: 23, week: 4, theme: "Ăn uống",
  title: "Lượng từ đồ ăn · Gọi món trong nhà hàng",
  goal: "Gọi món đúng lượng từ, gọi phục vụ.",
  tip: "Lượng từ đi với đồ ăn: 碗 (bát), 杯 (cốc), 盘 (đĩa), 瓶 (chai), 个 (cái). Dùng sai không sai ngữ pháp chết người nhưng nghe rất 'Tây'.",
  vocab: [
    ["碗", "wǎn", "bát (lượng từ)"],
    ["杯", "bēi", "cốc, ly"],
    ["盘", "pán", "đĩa"],
    ["瓶", "píng", "chai"],
    ["份", "fèn", "phần, suất"],
    ["服务员", "fúwùyuán", "nhân viên phục vụ"],
    ["菜单", "càidān", "thực đơn"],
    ["点菜", "diǎncài", "gọi món"],
    ["买单", "mǎidān", "thanh toán"],
    ["还要", "hái yào", "còn muốn, còn cần"],
    ["别的", "biéde", "khác, cái khác"]
  ],
  grammar: [
    {
      p: "来 + số lượng = 'cho tôi…'",
      e: "Trong nhà hàng, 来 dùng thay 要 nghe rất tự nhiên: 来一碗面 = cho một bát mì.",
      ex: [
        ["来一碗牛肉面。", "Lái yì wǎn niúròu miàn.", "Cho một bát mì bò."],
        ["再来两瓶啤酒。", "Zài lái liǎng píng píjiǔ.", "Cho thêm hai chai bia."]
      ]
    },
    {
      p: "还要别的吗？",
      e: "Câu phục vụ luôn hỏi. Trả lời: 不要了，谢谢 (không cần nữa, cảm ơn).",
      ex: [
        ["还要别的吗？", "Hái yào biéde ma?", "Còn cần gì nữa không?"],
        ["不要了，谢谢。", "Bú yào le, xièxie.", "Không cần nữa, cảm ơn."]
      ]
    }
  ],
  dialogue: {
    title: "Trong nhà hàng",
    lines: [
      ["Khách", "服务员，点菜！", "Fúwùyuán, diǎncài!", "Phục vụ ơi, gọi món!"],
      ["NV", "好的，您要什么？", "Hǎo de, nín yào shénme?", "Vâng, anh dùng gì ạ?"],
      ["Khách", "来一碗牛肉面，一盘饺子。", "Lái yì wǎn niúròu miàn, yì pán jiǎozi.", "Cho một bát mì bò, một đĩa sủi cảo."],
      ["NV", "喝点儿什么？", "Hē diǎnr shénme?", "Uống gì ạ?"],
      ["Khách", "一瓶啤酒。还要别的吗…不用了。", "Yì píng píjiǔ. Hái yào biéde ma… bú yòng le.", "Một chai bia. Thế thôi ạ."],
      ["NV", "好的，请稍等。", "Hǎo de, qǐng shāo děng.", "Vâng, xin đợi một lát."]
    ]
  },
  drills: [
    ["服务员，点菜！", "Fúwùyuán, diǎncài!", "Phục vụ ơi, gọi món!"],
    ["来一碗面。", "Lái yì wǎn miàn.", "Cho một bát mì."],
    ["一杯咖啡，谢谢。", "Yì bēi kāfēi, xièxie.", "Một ly cà phê, cảm ơn."],
    ["还要别的吗？", "Hái yào biéde ma?", "Còn cần gì nữa không?"],
    ["买单！", "Mǎidān!", "Tính tiền!"]
  ]
},

{
  d: 24, week: 4, theme: "Ăn uống",
  title: "Vị và khẩu vị · 一点儿 / 太…了",
  goal: "Nói về vị món ăn và yêu cầu điều chỉnh khẩu vị.",
  tip: "Câu sống còn khi ăn ở Trung Quốc: 不要辣 (đừng cay) hoặc 少放辣 (bỏ ít ớt thôi). Đồ Tứ Xuyên cay hơn bạn tưởng nhiều.",
  vocab: [
    ["辣", "là", "cay"],
    ["甜", "tián", "ngọt"],
    ["咸", "xián", "mặn"],
    ["酸", "suān", "chua"],
    ["苦", "kǔ", "đắng"],
    ["好吃", "hǎochī", "ngon (đồ ăn)"],
    ["好喝", "hǎohē", "ngon (đồ uống)"],
    ["味道", "wèidào", "mùi vị"],
    ["放", "fàng", "bỏ vào, đặt"],
    ["少", "shǎo", "ít"],
    ["多", "duō", "nhiều"],
    ["饿", "è", "đói"],
    ["渴", "kě", "khát"],
    ["饱", "bǎo", "no"]
  ],
  grammar: [
    {
      p: "好 + động từ = tính từ đánh giá",
      e: "好 ghép với động từ giác quan tạo tính từ: 好吃 (ngon), 好喝 (ngon-uống), 好看 (đẹp), 好听 (hay-nghe). Rất dễ mở rộng.",
      ex: [
        ["这个菜很好吃。", "Zhè ge cài hěn hǎochī.", "Món này rất ngon."],
        ["这首歌很好听。", "Zhè shǒu gē hěn hǎotīng.", "Bài hát này rất hay."]
      ]
    },
    {
      p: "别 / 不要 + động từ = đừng",
      e: "Câu mệnh lệnh phủ định. 别放辣 = đừng cho ớt.",
      ex: [
        ["别放辣，谢谢。", "Bié fàng là, xièxie.", "Đừng cho ớt, cảm ơn."],
        ["少放一点儿盐。", "Shǎo fàng yìdiǎnr yán.", "Cho ít muối thôi."]
      ]
    }
  ],
  dialogue: {
    title: "Không ăn được cay",
    lines: [
      ["NV", "这个菜有点儿辣，可以吗？", "Zhè ge cài yǒudiǎnr là, kěyǐ ma?", "Món này hơi cay, được không ạ?"],
      ["Khách", "我不能吃辣，别放辣，好吗？", "Wǒ bù néng chī là, bié fàng là, hǎo ma?", "Tôi không ăn được cay, đừng cho ớt nhé?"],
      ["NV", "没问题。", "Méi wèntí.", "Không vấn đề gì."],
      ["Khách", "（吃完）这个菜真好吃！", "(Chī wán) Zhè ge cài zhēn hǎochī!", "(Ăn xong) Món này ngon thật!"],
      ["NV", "您吃饱了吗？", "Nín chī bǎo le ma?", "Anh ăn no chưa ạ?"],
      ["Khách", "饱了，买单吧。", "Bǎo le, mǎidān ba.", "No rồi, tính tiền nhé."]
    ]
  },
  drills: [
    ["这个菜很好吃。", "Zhè ge cài hěn hǎochī.", "Món này rất ngon."],
    ["别放辣，谢谢。", "Bié fàng là, xièxie.", "Đừng cho ớt, cảm ơn."],
    ["我饿了。", "Wǒ è le.", "Tôi đói rồi."],
    ["我渴了，想喝水。", "Wǒ kě le, xiǎng hē shuǐ.", "Tôi khát, muốn uống nước."],
    ["我吃饱了。", "Wǒ chī bǎo le.", "Tôi ăn no rồi."]
  ]
},

{
  d: 25, week: 4, theme: "Ăn uống",
  title: "能 / 可以 – khả năng và xin phép",
  goal: "Xin phép, hỏi được phép hay không.",
  tip: "会 = biết vì đã học. 能 = có thể vì đủ điều kiện/sức khỏe. 可以 = được phép. Ba từ này người mới rất hay lẫn.",
  vocab: [
    ["能", "néng", "có thể"],
    ["可以", "kěyǐ", "được, có thể (cho phép)"],
    ["帮", "bāng", "giúp"],
    ["帮忙", "bāngmáng", "giúp đỡ"],
    ["再说一遍", "zài shuō yí biàn", "nói lại một lần"],
    ["慢", "màn", "chậm"],
    ["快", "kuài", "nhanh"],
    ["懂", "dǒng", "hiểu"],
    ["明白", "míngbai", "hiểu rõ"],
    ["问题", "wèntí", "vấn đề, câu hỏi"]
  ],
  grammar: [
    {
      p: "可以…吗？ – xin phép lịch sự",
      e: "Mẫu câu sống còn: 我可以…吗？ Trả lời: 可以 / 不可以.",
      ex: [
        ["我可以坐这儿吗？", "Wǒ kěyǐ zuò zhèr ma?", "Tôi ngồi đây được không?"],
        ["可以，请坐。", "Kěyǐ, qǐng zuò.", "Được, mời ngồi."]
      ]
    },
    {
      p: "BỘ 4 CÂU CỨU CÁNH khi không hiểu",
      e: "Học thuộc 4 câu này ngay hôm nay. Chúng giúp bạn sống sót trong mọi hội thoại thật.",
      ex: [
        ["请再说一遍。", "Qǐng zài shuō yí biàn.", "Xin nói lại một lần."],
        ["请说慢一点儿。", "Qǐng shuō màn yìdiǎnr.", "Xin nói chậm một chút."],
        ["我听不懂。", "Wǒ tīng bu dǒng.", "Tôi nghe không hiểu."],
        ["这个用中文怎么说？", "Zhè ge yòng Zhōngwén zěnme shuō?", "Cái này tiếng Trung nói thế nào?"]
      ]
    }
  ],
  dialogue: {
    title: "Nhờ giúp đỡ",
    lines: [
      ["A", "对不起，我听不懂。请再说一遍。", "Duìbuqǐ, wǒ tīng bu dǒng. Qǐng zài shuō yí biàn.", "Xin lỗi, tôi nghe không hiểu. Xin nói lại."],
      ["B", "好，我说慢一点儿。你能帮我一下吗？", "Hǎo, wǒ shuō màn yìdiǎnr. Nǐ néng bāng wǒ yíxià ma?", "Được, tôi nói chậm hơn. Bạn giúp tôi một chút được không?"],
      ["A", "可以，没问题。", "Kěyǐ, méi wèntí.", "Được, không vấn đề gì."],
      ["B", "这个用中文怎么说？", "Zhè ge yòng Zhōngwén zěnme shuō?", "Cái này tiếng Trung nói thế nào?"],
      ["A", "这个叫“菜单”。", "Zhè ge jiào 'càidān'.", "Cái này gọi là 'thực đơn'."],
      ["B", "明白了，谢谢！", "Míngbai le, xièxie!", "Hiểu rồi, cảm ơn!"]
    ]
  },
  drills: [
    ["请再说一遍。", "Qǐng zài shuō yí biàn.", "Xin nói lại một lần."],
    ["请说慢一点儿。", "Qǐng shuō màn yìdiǎnr.", "Xin nói chậm một chút."],
    ["我听不懂。", "Wǒ tīng bu dǒng.", "Tôi nghe không hiểu."],
    ["我可以坐这儿吗？", "Wǒ kěyǐ zuò zhèr ma?", "Tôi ngồi đây được không?"],
    ["你能帮我吗？", "Nǐ néng bāng wǒ ma?", "Bạn giúp tôi được không?"]
  ]
},

{
  d: 26, week: 4, theme: "Ăn uống",
  title: "了 – trợ từ hoàn thành (phần 1)",
  goal: "Nói việc đã xảy ra bằng 了.",
  tip: "了 KHÔNG phải thì quá khứ. Nó báo hiệu 'hành động đã hoàn thành' hoặc 'tình hình đã thay đổi'. Đây là điểm ngữ pháp khó nhất HSK1-2, hãy đi từ từ.",
  vocab: [
    ["了", "le", "(trợ từ hoàn thành/thay đổi)"],
    ["已经", "yǐjīng", "đã, đã rồi"],
    ["还没", "hái méi", "vẫn chưa"],
    ["买", "mǎi", "mua"],
    ["卖", "mài", "bán"],
    ["到", "dào", "đến, tới"],
    ["回", "huí", "về"],
    ["找", "zhǎo", "tìm"],
    ["给", "gěi", "cho, đưa"],
    ["拿", "ná", "cầm, lấy"]
  ],
  grammar: [
    {
      p: "Động từ + 了 = đã làm xong",
      e: "我吃了 = tôi ăn rồi. Phủ định dùng 没(有) và BỎ 了: 我没吃 (tôi chưa ăn). Không bao giờ nói 我没吃了.",
      ex: [
        ["我吃了饭。", "Wǒ chī le fàn.", "Tôi ăn cơm rồi."],
        ["我没吃饭。", "Wǒ méi chīfàn.", "Tôi chưa ăn cơm."]
      ]
    },
    {
      p: "了 cuối câu = tình hình đã thay đổi",
      e: "下雨了 = trời (bắt đầu) mưa rồi. 我饿了 = tôi (giờ đã) đói rồi.",
      ex: [
        ["我饿了。", "Wǒ è le.", "Tôi đói rồi."],
        ["他来了。", "Tā lái le.", "Anh ấy đến rồi."]
      ]
    },
    {
      p: "已经…了 và 还没…",
      e: "已经 nhấn mạnh 'đã'; 还没 = 'vẫn chưa'.",
      ex: [
        ["我已经买了。", "Wǒ yǐjīng mǎi le.", "Tôi đã mua rồi."],
        ["我还没买。", "Wǒ hái méi mǎi.", "Tôi vẫn chưa mua."]
      ]
    }
  ],
  dialogue: {
    title: "Ăn chưa?",
    lines: [
      ["A", "你吃饭了吗？", "Nǐ chīfàn le ma?", "Bạn ăn cơm chưa?"],
      ["B", "已经吃了。你呢？", "Yǐjīng chī le. Nǐ ne?", "Ăn rồi. Còn bạn?"],
      ["A", "我还没吃，我很饿。", "Wǒ hái méi chī, wǒ hěn è.", "Tôi chưa ăn, tôi đói lắm."],
      ["B", "我买了两个包子，给你。", "Wǒ mǎi le liǎng ge bāozi, gěi nǐ.", "Tôi mua hai cái bánh bao, cho bạn."],
      ["A", "太好了，谢谢你！", "Tài hǎo le, xièxie nǐ!", "Tuyệt quá, cảm ơn bạn!"]
    ]
  },
  drills: [
    ["我吃了。", "Wǒ chī le.", "Tôi ăn rồi."],
    ["我还没吃。", "Wǒ hái méi chī.", "Tôi chưa ăn."],
    ["他已经来了。", "Tā yǐjīng lái le.", "Anh ấy đã đến rồi."],
    ["我买了两个包子。", "Wǒ mǎi le liǎng ge bāozi.", "Tôi mua hai cái bánh bao."],
    ["下雨了。", "Xià yǔ le.", "Trời mưa rồi."]
  ]
},

{
  d: 27, week: 4, theme: "Ăn uống",
  title: "Mời và từ chối lịch sự",
  goal: "Mời ai đó ăn/uống; nhận lời hoặc từ chối khéo.",
  tip: "Ở Trung Quốc, người mời thường trả tiền cả bàn. 我请客 = tôi mời (tôi trả). Từ chối 1–2 lần rồi mới nhận là phép lịch sự thông thường.",
  vocab: [
    ["请客", "qǐngkè", "mời (đãi khách)"],
    ["吧", "ba", "(trợ từ đề nghị: …nhé)"],
    ["当然", "dāngrán", "đương nhiên"],
    ["下次", "xiàcì", "lần sau"],
    ["改天", "gǎitiān", "hôm khác"],
    ["恐怕", "kǒngpà", "e rằng"],
    ["有事", "yǒu shì", "có việc bận"],
    ["一定", "yídìng", "nhất định"],
    ["AA制", "AA zhì", "chia đôi tiền"]
  ],
  grammar: [
    {
      p: "…吧 – đề nghị nhẹ nhàng",
      e: "吧 làm câu mềm đi, thành lời rủ rê thay vì mệnh lệnh. 我们走 (đi thôi – ra lệnh) vs 我们走吧 (mình đi nhé).",
      ex: [
        ["我们一起去吃饭吧！", "Wǒmen yìqǐ qù chīfàn ba!", "Chúng ta cùng đi ăn nhé!"],
        ["你喝茶吧。", "Nǐ hē chá ba.", "Bạn uống trà đi."]
      ]
    },
    {
      p: "Khung từ chối lịch sự",
      e: "Công thức 3 bước: cảm ơn + lý do + hẹn dịp khác. Đây là cách nói an toàn trong mọi văn hóa Á Đông.",
      ex: [
        ["谢谢，但是我今天有事。", "Xièxie, dànshì wǒ jīntiān yǒu shì.", "Cảm ơn, nhưng hôm nay tôi có việc."],
        ["改天吧，下次我请你。", "Gǎitiān ba, xiàcì wǒ qǐng nǐ.", "Hôm khác nhé, lần sau tôi mời bạn."]
      ]
    }
  ],
  dialogue: {
    title: "Lời mời ăn tối",
    lines: [
      ["A", "晚上我们一起去吃饭吧，我请客！", "Wǎnshang wǒmen yìqǐ qù chīfàn ba, wǒ qǐngkè!", "Tối nay đi ăn cùng nhau nhé, tôi mời!"],
      ["B", "谢谢！但是今天我有事，恐怕不行。", "Xièxie! Dànshì jīntiān wǒ yǒu shì, kǒngpà bù xíng.", "Cảm ơn! Nhưng hôm nay tôi có việc, e là không được."],
      ["A", "没关系，改天吧。", "Méi guānxi, gǎitiān ba.", "Không sao, hôm khác vậy."],
      ["B", "好，下次我请你，一定！", "Hǎo, xiàcì wǒ qǐng nǐ, yídìng!", "Được, lần sau tôi mời bạn, nhất định!"],
      ["A", "那说定了！", "Nà shuō dìng le!", "Vậy hẹn nhé!"]
    ]
  },
  drills: [
    ["我们一起去吃饭吧！", "Wǒmen yìqǐ qù chīfàn ba!", "Chúng ta cùng đi ăn nhé!"],
    ["我请客。", "Wǒ qǐngkè.", "Tôi mời."],
    ["今天我有事。", "Jīntiān wǒ yǒu shì.", "Hôm nay tôi có việc."],
    ["改天吧。", "Gǎitiān ba.", "Hôm khác nhé."],
    ["下次我请你。", "Xiàcì wǒ qǐng nǐ.", "Lần sau tôi mời bạn."]
  ]
},

{
  d: 28, week: 4, theme: "Ăn uống",
  title: "TỔNG ÔN THÁNG 1 · Kiểm tra mốc 30 ngày",
  goal: "Chạy trọn vẹn một cuộc gặp: chào – giới thiệu – rủ ăn – gọi món – tính tiền.",
  tip: "MỐC 1 THÁNG. Bạn đã có ~280 từ và 30 mẫu câu. Hôm nay hãy đóng vai cả hai nhân vật trong hội thoại dưới đây, nói to, không nhìn chữ.",
  review: [22, 23, 24, 25, 26, 27],
  vocab: [
    ["没关系", "méi guānxi", "không sao"],
    ["一共", "yígòng", "tổng cộng"],
    ["块", "kuài", "đồng (tiền, khẩu ngữ)"],
    ["现金", "xiànjīn", "tiền mặt"],
    ["手机支付", "shǒujī zhīfù", "thanh toán bằng điện thoại"]
  ],
  grammar: [
    {
      p: "Ôn 5 khung câu cốt lõi tháng 1",
      e: "1) 我叫… 2) 我是…人 3) 我有… 4) 我想… 5) 我在…",
      ex: [
        ["我叫阿山，我是越南人。", "Wǒ jiào Ā Shān, wǒ shì Yuènánrén.", "Tôi tên A Sơn, tôi là người Việt Nam."],
        ["我想吃饭，我在公司。", "Wǒ xiǎng chīfàn, wǒ zài gōngsī.", "Tôi muốn ăn cơm, tôi đang ở công ty."]
      ]
    }
  ],
  dialogue: {
    title: "Kịch bản tổng hợp: Gặp bạn và đi ăn",
    lines: [
      ["A", "你好！好久不见，你最近怎么样？", "Nǐ hǎo! Hǎojiǔ bú jiàn, nǐ zuìjìn zěnmeyàng?", "Chào bạn! Lâu rồi không gặp, dạo này sao rồi?"],
      ["B", "我很好，就是工作有点儿忙。你呢？", "Wǒ hěn hǎo, jiùshì gōngzuò yǒudiǎnr máng. Nǐ ne?", "Tôi khỏe, chỉ là công việc hơi bận. Còn bạn?"],
      ["A", "我也一样。你吃饭了吗？", "Wǒ yě yíyàng. Nǐ chīfàn le ma?", "Tôi cũng vậy. Bạn ăn cơm chưa?"],
      ["B", "还没有。", "Hái méiyǒu.", "Chưa."],
      ["A", "那我们一起去吃吧，我请客。", "Nà wǒmen yìqǐ qù chī ba, wǒ qǐngkè.", "Vậy mình đi ăn cùng nhau nhé, tôi mời."],
      ["B", "太好了！我想吃面条。", "Tài hǎo le! Wǒ xiǎng chī miàntiáo.", "Tuyệt! Tôi muốn ăn mì."],
      ["A", "服务员，来两碗牛肉面，两杯茶。", "Fúwùyuán, lái liǎng wǎn niúròu miàn, liǎng bēi chá.", "Phục vụ ơi, cho hai bát mì bò, hai cốc trà."],
      ["NV", "好的，请稍等。", "Hǎo de, qǐng shāo děng.", "Vâng, xin đợi một lát."],
      ["A", "服务员，买单！一共多少钱？", "Fúwùyuán, mǎidān! Yígòng duōshao qián?", "Phục vụ ơi, tính tiền! Tổng cộng bao nhiêu?"],
      ["NV", "一共五十块。", "Yígòng wǔshí kuài.", "Tổng cộng 50 tệ."]
    ]
  },
  drills: [
    ["好久不见！", "Hǎojiǔ bú jiàn!", "Lâu rồi không gặp!"],
    ["你最近怎么样？", "Nǐ zuìjìn zěnmeyàng?", "Dạo này bạn thế nào?"],
    ["我们一起去吃吧。", "Wǒmen yìqǐ qù chī ba.", "Chúng ta đi ăn cùng nhé."],
    ["一共多少钱？", "Yígòng duōshao qián?", "Tổng cộng bao nhiêu tiền?"],
    ["买单，谢谢！", "Mǎidān, xièxie!", "Tính tiền, cảm ơn!"]
  ]
}

);
