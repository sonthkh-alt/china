/* Tuần 7–8 · Ngày 43–56 · Nhà cửa & đồ vật + Thời tiết & sức khỏe */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

{
  d: 43, week: 7, theme: "Nhà cửa & đồ vật",
  title: "Các phòng trong nhà",
  goal: "Mô tả nhà mình có những phòng gì.",
  tip: "Đơn vị đếm phòng: 房子 là căn nhà, 房间 là phòng, 层/楼 là tầng. 我住在五楼 = tôi ở tầng 5.",
  vocab: [
    ["房子", "fángzi", "căn nhà"],
    ["客厅", "kètīng", "phòng khách"],
    ["卧室", "wòshì", "phòng ngủ"],
    ["厨房", "chúfáng", "nhà bếp"],
    ["卫生间", "wèishēngjiān", "nhà vệ sinh"],
    ["阳台", "yángtái", "ban công"],
    ["楼", "lóu", "tầng, tòa nhà"],
    ["层", "céng", "tầng (lượng từ)"],
    ["住", "zhù", "ở, sống"],
    ["租", "zū", "thuê"],
    ["大", "dà", "to, lớn"],
    ["小", "xiǎo", "nhỏ"]
  ],
  grammar: [
    {
      p: "住在 + địa điểm",
      e: "Cấu trúc cố định: 我住在河内 (tôi sống ở Hà Nội). 在 ở đây bắt buộc phải có.",
      ex: [
        ["我住在河内。", "Wǒ zhù zài Hénèi.", "Tôi sống ở Hà Nội."],
        ["他住在五楼。", "Tā zhù zài wǔ lóu.", "Anh ấy ở tầng 5."]
      ]
    },
    {
      p: "有 – tồn tại/sở hữu",
      e: "Địa điểm + 有 + vật: 我家有三个房间 (nhà tôi có ba phòng).",
      ex: [
        ["我家有两个卧室。", "Wǒ jiā yǒu liǎng ge wòshì.", "Nhà tôi có hai phòng ngủ."],
        ["客厅里有一个电视。", "Kètīng lǐ yǒu yí ge diànshì.", "Trong phòng khách có một cái tivi."]
      ]
    }
  ],
  dialogue: {
    title: "Nhà bạn thế nào?",
    lines: [
      ["A", "你住在哪儿？", "Nǐ zhù zài nǎr?", "Bạn sống ở đâu?"],
      ["B", "我住在河内，在市中心。", "Wǒ zhù zài Hénèi, zài shì zhōngxīn.", "Tôi sống ở Hà Nội, ở trung tâm thành phố."],
      ["A", "你的房子大吗？", "Nǐ de fángzi dà ma?", "Nhà bạn có to không?"],
      ["B", "不太大。有两个卧室、一个客厅和一个厨房。", "Bú tài dà. Yǒu liǎng ge wòshì, yí ge kètīng hé yí ge chúfáng.", "Không to lắm. Có hai phòng ngủ, một phòng khách và một bếp."],
      ["A", "你租的还是买的？", "Nǐ zū de háishi mǎi de?", "Bạn thuê hay mua?"],
      ["B", "我租的，一个月三百万越南盾。", "Wǒ zū de, yí ge yuè sānbǎi wàn Yuènán dùn.", "Tôi thuê, một tháng 3 triệu đồng."]
    ]
  },
  drills: [
    ["你住在哪儿？", "Nǐ zhù zài nǎr?", "Bạn sống ở đâu?"],
    ["我住在河内。", "Wǒ zhù zài Hénèi.", "Tôi sống ở Hà Nội."],
    ["我家有三个房间。", "Wǒ jiā yǒu sān ge fángjiān.", "Nhà tôi có ba phòng."],
    ["我住在五楼。", "Wǒ zhù zài wǔ lóu.", "Tôi ở tầng 5."],
    ["房子不太大。", "Fángzi bú tài dà.", "Nhà không to lắm."]
  ]
},

{
  d: 44, week: 7, theme: "Nhà cửa & đồ vật",
  title: "Đồ vật trong nhà",
  goal: "Gọi tên đồ vật thường dùng.",
  tip: "Nhóm từ này học nhanh nhất bằng cách dán nhãn: viết chữ Hán lên giấy note dán vào đồ vật thật trong nhà bạn.",
  vocab: [
    ["桌子", "zhuōzi", "cái bàn"],
    ["椅子", "yǐzi", "cái ghế"],
    ["床", "chuáng", "giường"],
    ["门", "mén", "cửa"],
    ["窗户", "chuānghu", "cửa sổ"],
    ["电视", "diànshì", "tivi"],
    ["电脑", "diànnǎo", "máy tính"],
    ["手机", "shǒujī", "điện thoại"],
    ["灯", "dēng", "đèn"],
    ["钥匙", "yàoshi", "chìa khóa"],
    ["包", "bāo", "túi, cặp"],
    ["杯子", "bēizi", "cái cốc"],
    ["张", "zhāng", "(lượng từ mặt phẳng: bàn, giấy, vé)"],
    ["把", "bǎ", "(lượng từ có tay cầm: ghế, dao, ô)"]
  ],
  grammar: [
    {
      p: "Lượng từ theo hình dạng",
      e: "张 cho vật mặt phẳng (桌子, 纸, 票, 床). 把 cho vật có tay cầm (椅子, 伞, 刀). 台 cho máy móc (电脑, 电视).",
      ex: [
        ["一张桌子", "yì zhāng zhuōzi", "một cái bàn"],
        ["两把椅子", "liǎng bǎ yǐzi", "hai cái ghế"],
        ["一台电脑", "yì tái diànnǎo", "một cái máy tính"]
      ]
    },
    {
      p: "在 + vật + 上/里 = trên/trong",
      e: "桌子上 = trên bàn, 包里 = trong túi. Hậu tố 上/里 rất hay bị người mới quên.",
      ex: [
        ["钥匙在桌子上。", "Yàoshi zài zhuōzi shàng.", "Chìa khóa ở trên bàn."],
        ["手机在包里。", "Shǒujī zài bāo lǐ.", "Điện thoại ở trong túi."]
      ]
    }
  ],
  dialogue: {
    title: "Chìa khóa đâu rồi?",
    lines: [
      ["A", "我的钥匙在哪儿？", "Wǒ de yàoshi zài nǎr?", "Chìa khóa của tôi đâu rồi?"],
      ["B", "在桌子上吗？", "Zài zhuōzi shàng ma?", "Ở trên bàn không?"],
      ["A", "没有，桌子上只有手机和杯子。", "Méiyǒu, zhuōzi shàng zhǐ yǒu shǒujī hé bēizi.", "Không, trên bàn chỉ có điện thoại và cốc."],
      ["B", "看看你的包里。", "Kànkan nǐ de bāo lǐ.", "Xem trong túi bạn xem."],
      ["A", "啊，找到了！在包里。", "À, zhǎodào le! Zài bāo lǐ.", "A, tìm thấy rồi! Ở trong túi."],
      ["B", "太好了。", "Tài hǎo le.", "Tốt quá."]
    ]
  },
  drills: [
    ["钥匙在桌子上。", "Yàoshi zài zhuōzi shàng.", "Chìa khóa trên bàn."],
    ["手机在包里。", "Shǒujī zài bāo lǐ.", "Điện thoại trong túi."],
    ["我的电脑在哪儿？", "Wǒ de diànnǎo zài nǎr?", "Máy tính tôi đâu?"],
    ["房间里有一张床。", "Fángjiān lǐ yǒu yì zhāng chuáng.", "Trong phòng có một cái giường."],
    ["请关门。", "Qǐng guān mén.", "Làm ơn đóng cửa."]
  ]
},

{
  d: 45, week: 7, theme: "Nhà cửa & đồ vật",
  title: "在 vs 有 vs 是 – ba câu tồn tại",
  goal: "Phân biệt và dùng đúng ba mẫu câu chỉ vị trí.",
  tip: "Quy tắc vàng: 在 khi bạn nói về vật ĐÃ BIẾT ở đâu. 有 khi giới thiệu vật MỚI. 是 khi khẳng định vật duy nhất tại đó.",
  vocab: [
    ["里边", "lǐbian", "bên trong"],
    ["上边", "shàngbian", "bên trên"],
    ["下边", "xiàbian", "bên dưới"],
    ["附近", "fùjìn", "gần đó"],
    ["东西", "dōngxi", "đồ đạc"],
    ["放", "fàng", "đặt, để"],
    ["找到", "zhǎodào", "tìm được"],
    ["丢", "diū", "mất, đánh rơi"],
    ["干净", "gānjìng", "sạch sẽ"],
    ["乱", "luàn", "lộn xộn"]
  ],
  grammar: [
    {
      p: "Vật + 在 + Nơi chốn",
      e: "Chủ ngữ là vật xác định. 书在桌子上 = quyển sách (đã biết) ở trên bàn.",
      ex: [
        ["我的书在床上。", "Wǒ de shū zài chuáng shàng.", "Sách của tôi ở trên giường."]
      ]
    },
    {
      p: "Nơi chốn + 有 + Vật",
      e: "Giới thiệu vật chưa xác định. 桌子上有一本书 = trên bàn có một quyển sách.",
      ex: [
        ["桌子上有一本书。", "Zhuōzi shàng yǒu yì běn shū.", "Trên bàn có một quyển sách."]
      ]
    },
    {
      p: "Nơi chốn + 是 + Vật",
      e: "Nhấn mạnh chính là cái đó, thường là duy nhất. 我家旁边是超市 = cạnh nhà tôi chính là siêu thị.",
      ex: [
        ["我家旁边是银行。", "Wǒ jiā pángbiān shì yínháng.", "Cạnh nhà tôi là ngân hàng."]
      ]
    }
  ],
  dialogue: {
    title: "Dọn phòng",
    lines: [
      ["A", "你的房间太乱了！", "Nǐ de fángjiān tài luàn le!", "Phòng bạn bừa quá!"],
      ["B", "对不起，我马上收拾。", "Duìbuqǐ, wǒ mǎshàng shōushi.", "Xin lỗi, tôi dọn ngay."],
      ["A", "桌子上有什么？", "Zhuōzi shàng yǒu shénme?", "Trên bàn có gì?"],
      ["B", "有电脑、书和杯子。", "Yǒu diànnǎo, shū hé bēizi.", "Có máy tính, sách và cốc."],
      ["A", "你的衣服在哪儿？", "Nǐ de yīfu zài nǎr?", "Quần áo bạn ở đâu?"],
      ["B", "在床上。我现在放好。", "Zài chuáng shàng. Wǒ xiànzài fàng hǎo.", "Ở trên giường. Tôi cất ngay đây."],
      ["A", "现在干净多了！", "Xiànzài gānjìng duō le!", "Giờ sạch hơn nhiều rồi!"]
    ]
  },
  drills: [
    ["我的书在床上。", "Wǒ de shū zài chuáng shàng.", "Sách tôi ở trên giường."],
    ["桌子上有一本书。", "Zhuōzi shàng yǒu yì běn shū.", "Trên bàn có một quyển sách."],
    ["我家旁边是超市。", "Wǒ jiā pángbiān shì chāoshì.", "Cạnh nhà tôi là siêu thị."],
    ["房间里有什么？", "Fángjiān lǐ yǒu shénme?", "Trong phòng có gì?"],
    ["我的钥匙丢了。", "Wǒ de yàoshi diū le.", "Chìa khóa tôi mất rồi."]
  ]
},

{
  d: 46, week: 7, theme: "Nhà cửa & đồ vật",
  title: "Gọi điện thoại",
  goal: "Thực hiện một cuộc gọi hoàn chỉnh.",
  tip: "喂 (wéi) khi nghe máy đọc thanh 2, không phải thanh 4. Đây là quy ước riêng của điện thoại.",
  vocab: [
    ["喂", "wéi", "alô"],
    ["打电话", "dǎ diànhuà", "gọi điện"],
    ["接", "jiē", "nghe máy, đón"],
    ["请等一下", "qǐng děng yíxià", "xin đợi một chút"],
    ["不在", "bú zài", "không có ở đây"],
    ["留言", "liúyán", "để lại lời nhắn"],
    ["回电话", "huí diànhuà", "gọi lại"],
    ["号码", "hàomǎ", "số"],
    ["占线", "zhànxiàn", "máy bận"],
    ["听不清", "tīng bu qīng", "nghe không rõ"],
    ["信号", "xìnhào", "tín hiệu, sóng"],
    ["微信", "Wēixìn", "WeChat"]
  ],
  grammar: [
    {
      p: "请问，…在吗？ – xin hỏi có ở đó không",
      e: "Mẫu câu gọi điện tìm người: 请问，李经理在吗？",
      ex: [
        ["请问，王老师在吗？", "Qǐngwèn, Wáng lǎoshī zài ma?", "Xin hỏi, thầy Vương có đó không?"],
        ["他不在，您留言吗？", "Tā bú zài, nín liúyán ma?", "Anh ấy không có ở đây, anh nhắn gì không?"]
      ]
    },
    {
      p: "一下 – làm nhẹ động từ",
      e: "等一下 (đợi chút), 看一下 (xem chút), 帮我一下 (giúp tôi chút). Thêm 一下 làm câu lịch sự hơn nhiều.",
      ex: [
        ["请等一下。", "Qǐng děng yíxià.", "Xin đợi một chút."],
        ["我看一下。", "Wǒ kàn yíxià.", "Tôi xem một chút."]
      ]
    }
  ],
  dialogue: {
    title: "Cuộc gọi công việc",
    lines: [
      ["A", "喂，你好！请问，李经理在吗？", "Wéi, nǐ hǎo! Qǐngwèn, Lǐ jīnglǐ zài ma?", "Alô, xin chào! Xin hỏi, giám đốc Lý có đó không?"],
      ["B", "他现在不在，您是哪位？", "Tā xiànzài bú zài, nín shì nǎ wèi?", "Anh ấy không có ở đây, anh là ai ạ?"],
      ["A", "我姓阮，是他的朋友。", "Wǒ xìng Ruǎn, shì tā de péngyou.", "Tôi họ Nguyễn, là bạn anh ấy."],
      ["B", "您要留言吗？", "Nín yào liúyán ma?", "Anh muốn để lại lời nhắn không?"],
      ["A", "请他给我回个电话，我的号码是 0912345678。", "Qǐng tā gěi wǒ huí ge diànhuà, wǒ de hàomǎ shì líng jiǔ yāo èr sān sì wǔ liù qī bā.", "Nhờ anh ấy gọi lại cho tôi, số của tôi là 0912345678."],
      ["B", "好的，我告诉他。", "Hǎo de, wǒ gàosu tā.", "Vâng, tôi sẽ báo anh ấy."],
      ["A", "谢谢，再见！", "Xièxie, zàijiàn!", "Cảm ơn, tạm biệt!"]
    ]
  },
  drills: [
    ["喂，你好！", "Wéi, nǐ hǎo!", "Alô, xin chào!"],
    ["请问，李经理在吗？", "Qǐngwèn, Lǐ jīnglǐ zài ma?", "Xin hỏi, giám đốc Lý có đó không?"],
    ["请等一下。", "Qǐng děng yíxià.", "Xin đợi một chút."],
    ["我听不清，信号不好。", "Wǒ tīng bu qīng, xìnhào bù hǎo.", "Tôi nghe không rõ, sóng kém."],
    ["请他给我回电话。", "Qǐng tā gěi wǒ huí diànhuà.", "Nhờ anh ấy gọi lại cho tôi."]
  ]
},

{
  d: 47, week: 7, theme: "Nhà cửa & đồ vật",
  title: "给 – cho, dành cho ai",
  goal: "Diễn đạt hành động hướng đến người khác.",
  tip: "给 vừa là động từ (cho) vừa là giới từ (cho ai đó). 给我打电话 = gọi điện cho tôi.",
  vocab: [
    ["给", "gěi", "cho, đưa"],
    ["送", "sòng", "tặng, đưa đi"],
    ["借", "jiè", "mượn, cho mượn"],
    ["还", "huán", "trả lại"],
    ["告诉", "gàosu", "nói cho biết"],
    ["问", "wèn", "hỏi"],
    ["教", "jiāo", "dạy"],
    ["礼物", "lǐwù", "quà"],
    ["东西", "dōngxi", "đồ, thứ"],
    ["帮助", "bāngzhù", "giúp đỡ"]
  ],
  grammar: [
    {
      p: "给 + người + động từ",
      e: "给 làm giới từ, đứng trước động từ chính: 我给你打电话 = tôi gọi điện cho bạn.",
      ex: [
        ["我给你打电话。", "Wǒ gěi nǐ dǎ diànhuà.", "Tôi gọi điện cho bạn."],
        ["他给我买了礼物。", "Tā gěi wǒ mǎi le lǐwù.", "Anh ấy mua quà cho tôi."]
      ]
    },
    {
      p: "Động từ hai tân ngữ",
      e: "给/送/教/告诉 nhận hai tân ngữ: người trước, vật sau. 他给我一本书.",
      ex: [
        ["他送我一个礼物。", "Tā sòng wǒ yí ge lǐwù.", "Anh ấy tặng tôi một món quà."],
        ["老师教我们中文。", "Lǎoshī jiāo wǒmen Zhōngwén.", "Thầy dạy chúng tôi tiếng Trung."]
      ]
    }
  ],
  dialogue: {
    title: "Mượn đồ",
    lines: [
      ["A", "你能借我一本中文书吗？", "Nǐ néng jiè wǒ yì běn Zhōngwén shū ma?", "Bạn cho tôi mượn một quyển sách tiếng Trung được không?"],
      ["B", "当然可以，我明天给你。", "Dāngrán kěyǐ, wǒ míngtiān gěi nǐ.", "Đương nhiên được, mai tôi đưa bạn."],
      ["A", "谢谢！我下个星期还你。", "Xièxie! Wǒ xià ge xīngqī huán nǐ.", "Cảm ơn! Tuần sau tôi trả bạn."],
      ["B", "不着急。你为什么学中文？", "Bù zháojí. Nǐ wèishénme xué Zhōngwén?", "Không vội. Sao bạn học tiếng Trung?"],
      ["A", "因为工作需要。你可以教我吗？", "Yīnwèi gōngzuò xūyào. Nǐ kěyǐ jiāo wǒ ma?", "Vì công việc cần. Bạn dạy tôi được không?"],
      ["B", "好啊！我教你，你教我越南语。", "Hǎo a! Wǒ jiāo nǐ, nǐ jiāo wǒ Yuènányǔ.", "Được thôi! Tôi dạy bạn, bạn dạy tôi tiếng Việt."]
    ]
  },
  drills: [
    ["我给你打电话。", "Wǒ gěi nǐ dǎ diànhuà.", "Tôi gọi điện cho bạn."],
    ["请给我一杯水。", "Qǐng gěi wǒ yì bēi shuǐ.", "Cho tôi một cốc nước."],
    ["你能借我吗？", "Nǐ néng jiè wǒ ma?", "Bạn cho tôi mượn được không?"],
    ["他送我一个礼物。", "Tā sòng wǒ yí ge lǐwù.", "Anh ấy tặng tôi một món quà."],
    ["请告诉我。", "Qǐng gàosu wǒ.", "Xin nói cho tôi biết."]
  ]
},

{
  d: 48, week: 7, theme: "Nhà cửa & đồ vật",
  title: "为什么 / 因为 – hỏi và trả lời lý do",
  goal: "Hỏi nguyên nhân, giải thích lý do.",
  tip: "Sau 3 tuần bạn đã trả lời được câu hỏi. Giờ hãy tập ĐẶT câu hỏi — người biết hỏi mới điều khiển được cuộc trò chuyện.",
  vocab: [
    ["为什么", "wèishénme", "tại sao"],
    ["因为", "yīnwèi", "bởi vì"],
    ["所以", "suǒyǐ", "cho nên"],
    ["但是", "dànshì", "nhưng"],
    ["可是", "kěshì", "nhưng mà"],
    ["虽然", "suīrán", "tuy rằng"],
    ["需要", "xūyào", "cần"],
    ["重要", "zhòngyào", "quan trọng"],
    ["有意思", "yǒu yìsi", "thú vị"],
    ["难", "nán", "khó"],
    ["容易", "róngyì", "dễ"]
  ],
  grammar: [
    {
      p: "为什么…？ – hỏi lý do",
      e: "为什么 đứng sau chủ ngữ, trước động từ: 你为什么学中文？",
      ex: [
        ["你为什么学中文？", "Nǐ wèishénme xué Zhōngwén?", "Sao bạn học tiếng Trung?"],
        ["因为我很喜欢中国文化。", "Yīnwèi wǒ hěn xǐhuan Zhōngguó wénhuà.", "Vì tôi rất thích văn hóa Trung Quốc."]
      ]
    },
    {
      p: "虽然…但是… – tuy… nhưng…",
      e: "Cũng dùng cả hai vế như 因为…所以….",
      ex: [
        ["虽然中文很难，但是很有意思。", "Suīrán Zhōngwén hěn nán, dànshì hěn yǒu yìsi.", "Tuy tiếng Trung khó nhưng rất thú vị."]
      ]
    }
  ],
  dialogue: {
    title: "Vì sao học tiếng Trung?",
    lines: [
      ["A", "你为什么学中文？", "Nǐ wèishénme xué Zhōngwén?", "Sao bạn học tiếng Trung?"],
      ["B", "因为我的工作需要，我们公司有很多中国客户。", "Yīnwèi wǒ de gōngzuò xūyào, wǒmen gōngsī yǒu hěn duō Zhōngguó kèhù.", "Vì công việc cần, công ty tôi có nhiều khách hàng Trung Quốc."],
      ["A", "你觉得中文难吗？", "Nǐ juéde Zhōngwén nán ma?", "Bạn thấy tiếng Trung khó không?"],
      ["B", "虽然汉字很难，但是语法不太难。", "Suīrán Hànzì hěn nán, dànshì yǔfǎ bú tài nán.", "Tuy chữ Hán khó nhưng ngữ pháp không khó lắm."],
      ["A", "对，语法跟越南语很像。", "Duì, yǔfǎ gēn Yuènányǔ hěn xiàng.", "Đúng, ngữ pháp rất giống tiếng Việt."],
      ["B", "所以我们学得比较快。", "Suǒyǐ wǒmen xué de bǐjiào kuài.", "Cho nên chúng ta học khá nhanh."]
    ]
  },
  drills: [
    ["你为什么学中文？", "Nǐ wèishénme xué Zhōngwén?", "Sao bạn học tiếng Trung?"],
    ["因为工作需要。", "Yīnwèi gōngzuò xūyào.", "Vì công việc cần."],
    ["虽然很难，但是很有意思。", "Suīrán hěn nán, dànshì hěn yǒu yìsi.", "Tuy khó nhưng rất thú vị."],
    ["这很重要。", "Zhè hěn zhòngyào.", "Cái này rất quan trọng."],
    ["中文不太容易。", "Zhōngwén bú tài róngyì.", "Tiếng Trung không dễ lắm."]
  ]
},

{
  d: 49, week: 7, theme: "Nhà cửa & đồ vật",
  title: "TỔNG ÔN TUẦN 7",
  goal: "Mô tả nhà mình và gọi điện mời bạn đến chơi.",
  tip: "Bài tập: quay video 90 giây giới thiệu căn nhà bạn bằng tiếng Trung. Đây là bài luyện nói hiệu quả nhất giai đoạn này.",
  review: [43, 44, 45, 46, 47, 48],
  vocab: [
    ["欢迎", "huānyíng", "hoan nghênh, chào mừng"],
    ["请进", "qǐng jìn", "mời vào"],
    ["坐", "zuò", "ngồi"],
    ["随便", "suíbiàn", "tùy ý, tự nhiên"],
    ["客人", "kèrén", "khách"]
  ],
  grammar: [
    {
      p: "Bộ câu tiếp khách",
      e: "欢迎欢迎！请进！请坐！喝点儿什么？— bốn câu này là chuẩn mực khi đón khách ở Trung Quốc.",
      ex: [
        ["欢迎欢迎，请进！", "Huānyíng huānyíng, qǐng jìn!", "Hoan nghênh, mời vào!"],
        ["请坐，别客气。", "Qǐng zuò, bié kèqi.", "Mời ngồi, đừng khách sáo."]
      ]
    }
  ],
  dialogue: {
    title: "Mời bạn đến nhà",
    lines: [
      ["A", "喂，明天你有空吗？来我家吃饭吧！", "Wéi, míngtiān nǐ yǒu kòng ma? Lái wǒ jiā chīfàn ba!", "Alô, mai bạn rảnh không? Đến nhà tôi ăn cơm nhé!"],
      ["B", "好啊！你家在哪儿？", "Hǎo a! Nǐ jiā zài nǎr?", "Được! Nhà bạn ở đâu?"],
      ["A", "在学校后面，第三栋楼，五零二。", "Zài xuéxiào hòumiàn, dì-sān dòng lóu, wǔ líng èr.", "Ở sau trường, tòa thứ ba, phòng 502."],
      ["B", "几点去？", "Jǐ diǎn qù?", "Mấy giờ đến?"],
      ["A", "晚上六点半，怎么样？", "Wǎnshang liù diǎn bàn, zěnmeyàng?", "6 rưỡi tối, thế nào?"],
      ["B", "没问题，明天见！（第二天）你好！", "Méi wèntí, míngtiān jiàn! (Dì-èr tiān) Nǐ hǎo!", "Không vấn đề, mai gặp! (Hôm sau) Chào bạn!"],
      ["A", "欢迎欢迎，请进！请坐。", "Huānyíng huānyíng, qǐng jìn! Qǐng zuò.", "Hoan nghênh, mời vào! Mời ngồi."],
      ["B", "你家很干净，也很大！", "Nǐ jiā hěn gānjìng, yě hěn dà!", "Nhà bạn rất sạch, cũng rất rộng!"],
      ["A", "哪里哪里。喝点儿什么？茶还是水？", "Nǎlǐ nǎlǐ. Hē diǎnr shénme? Chá háishi shuǐ?", "Đâu có đâu. Uống gì? Trà hay nước?"],
      ["B", "茶，谢谢！", "Chá, xièxie!", "Trà, cảm ơn!"]
    ]
  },
  drills: [
    ["明天你有空吗？", "Míngtiān nǐ yǒu kòng ma?", "Mai bạn rảnh không?"],
    ["来我家吃饭吧！", "Lái wǒ jiā chīfàn ba!", "Đến nhà tôi ăn cơm nhé!"],
    ["欢迎，请进！", "Huānyíng, qǐng jìn!", "Hoan nghênh, mời vào!"],
    ["请坐，别客气。", "Qǐng zuò, bié kèqi.", "Mời ngồi, đừng khách sáo."],
    ["喝点儿什么？", "Hē diǎnr shénme?", "Uống gì không?"]
  ]
},

{
  d: 50, week: 8, theme: "Thời tiết & sức khỏe",
  title: "Thời tiết & bốn mùa",
  goal: "Nói về thời tiết hôm nay và các mùa.",
  tip: "Thời tiết là chủ đề small talk an toàn nhất trong mọi ngôn ngữ. Học kỹ 5 câu này để mở đầu mọi cuộc trò chuyện.",
  vocab: [
    ["天气", "tiānqì", "thời tiết"],
    ["热", "rè", "nóng"],
    ["冷", "lěng", "lạnh"],
    ["暖和", "nuǎnhuo", "ấm áp"],
    ["凉快", "liángkuai", "mát mẻ"],
    ["下雨", "xià yǔ", "mưa"],
    ["下雪", "xià xuě", "tuyết rơi"],
    ["晴天", "qíngtiān", "trời nắng"],
    ["阴天", "yīntiān", "trời âm u"],
    ["风", "fēng", "gió"],
    ["春天", "chūntiān", "mùa xuân"],
    ["夏天", "xiàtiān", "mùa hè"],
    ["秋天", "qiūtiān", "mùa thu"],
    ["冬天", "dōngtiān", "mùa đông"],
    ["度", "dù", "độ (nhiệt độ)"]
  ],
  grammar: [
    {
      p: "今天天气怎么样？",
      e: "Câu hỏi thời tiết chuẩn. Trả lời: 今天很热/很冷/下雨.",
      ex: [
        ["今天天气怎么样？", "Jīntiān tiānqì zěnmeyàng?", "Hôm nay thời tiết thế nào?"],
        ["今天很热，三十五度。", "Jīntiān hěn rè, sānshíwǔ dù.", "Hôm nay rất nóng, 35 độ."]
      ]
    },
    {
      p: "…了 báo thay đổi thời tiết",
      e: "下雨了 = trời đổ mưa rồi (vừa bắt đầu). 天冷了 = trời lạnh rồi (đã chuyển lạnh).",
      ex: [
        ["下雨了，带伞吧。", "Xià yǔ le, dài sǎn ba.", "Trời mưa rồi, mang ô đi."],
        ["天冷了，多穿点儿。", "Tiān lěng le, duō chuān diǎnr.", "Trời lạnh rồi, mặc thêm chút."]
      ]
    }
  ],
  dialogue: {
    title: "Trời hôm nay thế nào?",
    lines: [
      ["A", "今天天气怎么样？", "Jīntiān tiānqì zěnmeyàng?", "Hôm nay thời tiết thế nào?"],
      ["B", "很热，有三十六度。", "Hěn rè, yǒu sānshíliù dù.", "Rất nóng, 36 độ."],
      ["A", "河内的夏天真热！", "Hénèi de xiàtiān zhēn rè!", "Mùa hè Hà Nội nóng thật!"],
      ["B", "对，但是秋天很凉快，很舒服。", "Duì, dànshì qiūtiān hěn liángkuai, hěn shūfu.", "Đúng, nhưng mùa thu rất mát, rất dễ chịu."],
      ["A", "明天呢？", "Míngtiān ne?", "Mai thì sao?"],
      ["B", "明天下雨，别忘了带伞。", "Míngtiān xià yǔ, bié wàng le dài sǎn.", "Mai mưa, đừng quên mang ô."]
    ]
  },
  drills: [
    ["今天天气怎么样？", "Jīntiān tiānqì zěnmeyàng?", "Hôm nay thời tiết thế nào?"],
    ["今天很热。", "Jīntiān hěn rè.", "Hôm nay rất nóng."],
    ["下雨了。", "Xià yǔ le.", "Trời mưa rồi."],
    ["我喜欢秋天。", "Wǒ xǐhuan qiūtiān.", "Tôi thích mùa thu."],
    ["明天会下雨吗？", "Míngtiān huì xià yǔ ma?", "Mai có mưa không?"]
  ]
},

{
  d: 51, week: 8, theme: "Thời tiết & sức khỏe",
  title: "会 – dự đoán tương lai",
  goal: "Nói về việc sẽ xảy ra.",
  tip: "会 có hai nghĩa: 'biết làm' (kỹ năng) và 'sẽ' (khả năng xảy ra). Ngữ cảnh quyết định nghĩa nào.",
  vocab: [
    ["会", "huì", "sẽ, biết"],
    ["可能", "kěnéng", "có thể, có lẽ"],
    ["一定", "yídìng", "nhất định"],
    ["也许", "yěxǔ", "có lẽ"],
    ["以后", "yǐhòu", "sau này"],
    ["以前", "yǐqián", "trước đây"],
    ["将来", "jiānglái", "tương lai"],
    ["打算", "dǎsuàn", "dự định"],
    ["计划", "jìhuà", "kế hoạch"],
    ["希望", "xīwàng", "hy vọng"]
  ],
  grammar: [
    {
      p: "会 + động từ = sẽ (dự đoán)",
      e: "明天会下雨 = mai sẽ mưa. Thường đi với 可能, 一定.",
      ex: [
        ["明天可能会下雨。", "Míngtiān kěnéng huì xià yǔ.", "Mai có thể sẽ mưa."],
        ["他一定会来。", "Tā yídìng huì lái.", "Anh ấy nhất định sẽ đến."]
      ]
    },
    {
      p: "打算 + động từ = dự định",
      e: "Diễn tả kế hoạch cá nhân, chắc chắn hơn 会.",
      ex: [
        ["我打算去中国。", "Wǒ dǎsuàn qù Zhōngguó.", "Tôi dự định đi Trung Quốc."],
        ["你以后打算做什么？", "Nǐ yǐhòu dǎsuàn zuò shénme?", "Sau này bạn dự định làm gì?"]
      ]
    }
  ],
  dialogue: {
    title: "Kế hoạch tương lai",
    lines: [
      ["A", "你以后打算做什么？", "Nǐ yǐhòu dǎsuàn zuò shénme?", "Sau này bạn dự định làm gì?"],
      ["B", "我打算去中国工作。", "Wǒ dǎsuàn qù Zhōngguó gōngzuò.", "Tôi dự định sang Trung Quốc làm việc."],
      ["A", "什么时候去？", "Shénme shíhou qù?", "Khi nào đi?"],
      ["B", "可能明年。我希望我的中文会更好。", "Kěnéng míngnián. Wǒ xīwàng wǒ de Zhōngwén huì gèng hǎo.", "Có thể sang năm. Tôi hy vọng tiếng Trung của tôi sẽ tốt hơn."],
      ["A", "一定会的！你很努力。", "Yídìng huì de! Nǐ hěn nǔlì.", "Nhất định sẽ được! Bạn rất chăm chỉ."],
      ["B", "谢谢你！", "Xièxie nǐ!", "Cảm ơn bạn!"]
    ]
  },
  drills: [
    ["明天会下雨。", "Míngtiān huì xià yǔ.", "Mai sẽ mưa."],
    ["我打算去中国。", "Wǒ dǎsuàn qù Zhōngguó.", "Tôi dự định đi Trung Quốc."],
    ["他一定会来。", "Tā yídìng huì lái.", "Anh ấy nhất định sẽ đến."],
    ["可能有点儿难。", "Kěnéng yǒudiǎnr nán.", "Có thể hơi khó."],
    ["我希望…", "Wǒ xīwàng…", "Tôi hy vọng…"]
  ]
},

{
  d: 52, week: 8, theme: "Thời tiết & sức khỏe",
  title: "Bộ phận cơ thể & triệu chứng",
  goal: "Nói mình bị đau ở đâu.",
  tip: "Cấu trúc kêu đau: [bộ phận] + 疼. 头疼 (đau đầu), 肚子疼 (đau bụng). Cực đơn giản và dùng ngay được.",
  vocab: [
    ["头", "tóu", "đầu"],
    ["眼睛", "yǎnjing", "mắt"],
    ["耳朵", "ěrduo", "tai"],
    ["鼻子", "bízi", "mũi"],
    ["嘴", "zuǐ", "miệng"],
    ["手", "shǒu", "tay"],
    ["脚", "jiǎo", "chân"],
    ["肚子", "dùzi", "bụng"],
    ["疼", "téng", "đau"],
    ["生病", "shēngbìng", "bị bệnh"],
    ["发烧", "fāshāo", "sốt"],
    ["咳嗽", "késou", "ho"],
    ["感冒", "gǎnmào", "cảm cúm"],
    ["舒服", "shūfu", "dễ chịu, khỏe"]
  ],
  grammar: [
    {
      p: "Bộ phận + 疼",
      e: "Không cần động từ 'bị': 我头疼 = tôi đau đầu (tôi + đầu + đau).",
      ex: [
        ["我头疼。", "Wǒ tóu téng.", "Tôi đau đầu."],
        ["我肚子有点儿疼。", "Wǒ dùzi yǒudiǎnr téng.", "Tôi hơi đau bụng."]
      ]
    },
    {
      p: "不舒服 – cách nói 'không khỏe' vạn năng",
      e: "Khi không biết chính xác bệnh gì, nói 我不舒服 là đủ để bác sĩ hiểu.",
      ex: [
        ["我不舒服。", "Wǒ bù shūfu.", "Tôi không khỏe."],
        ["我可能感冒了。", "Wǒ kěnéng gǎnmào le.", "Có lẽ tôi bị cảm rồi."]
      ]
    }
  ],
  dialogue: {
    title: "Hôm nay không khỏe",
    lines: [
      ["A", "你怎么了？看起来不太好。", "Nǐ zěnme le? Kàn qǐlái bú tài hǎo.", "Bạn sao thế? Trông không được khỏe."],
      ["B", "我不舒服，头疼，还有点儿发烧。", "Wǒ bù shūfu, tóu téng, hái yǒudiǎnr fāshāo.", "Tôi không khỏe, đau đầu, còn hơi sốt."],
      ["A", "你感冒了吗？", "Nǐ gǎnmào le ma?", "Bạn bị cảm à?"],
      ["B", "可能是。昨天下雨，我没带伞。", "Kěnéng shì. Zuótiān xià yǔ, wǒ méi dài sǎn.", "Có lẽ vậy. Hôm qua mưa, tôi không mang ô."],
      ["A", "你应该去看医生。", "Nǐ yīnggāi qù kàn yīshēng.", "Bạn nên đi khám bác sĩ."],
      ["B", "好，我下午去。", "Hǎo, wǒ xiàwǔ qù.", "Được, chiều tôi đi."]
    ]
  },
  drills: [
    ["我头疼。", "Wǒ tóu téng.", "Tôi đau đầu."],
    ["我不舒服。", "Wǒ bù shūfu.", "Tôi không khỏe."],
    ["我可能感冒了。", "Wǒ kěnéng gǎnmào le.", "Có lẽ tôi bị cảm."],
    ["你怎么了？", "Nǐ zěnme le?", "Bạn sao thế?"],
    ["我肚子疼。", "Wǒ dùzi téng.", "Tôi đau bụng."]
  ]
},

{
  d: 53, week: 8, theme: "Thời tiết & sức khỏe",
  title: "Đi khám bệnh · 应该 / 要",
  goal: "Đến bệnh viện, mô tả bệnh, nhận đơn thuốc.",
  tip: "应该 = nên (lời khuyên). 要 = phải/muốn. 得 děi = phải (bắt buộc, khẩu ngữ). Ba mức độ khác nhau.",
  vocab: [
    ["应该", "yīnggāi", "nên"],
    ["得", "děi", "phải (khẩu ngữ)"],
    ["必须", "bìxū", "bắt buộc phải"],
    ["药", "yào", "thuốc"],
    ["吃药", "chī yào", "uống thuốc"],
    ["休息", "xiūxi", "nghỉ ngơi"],
    ["多喝水", "duō hē shuǐ", "uống nhiều nước"],
    ["严重", "yánzhòng", "nghiêm trọng"],
    ["好起来", "hǎo qǐlái", "khỏe lại"],
    ["挂号", "guàhào", "lấy số khám"],
    ["药店", "yàodiàn", "hiệu thuốc"],
    ["次", "cì", "lần"]
  ],
  grammar: [
    {
      p: "应该 + động từ = nên làm gì",
      e: "Phủ định: 不应该 (không nên). Dùng để khuyên người khác.",
      ex: [
        ["你应该多休息。", "Nǐ yīnggāi duō xiūxi.", "Bạn nên nghỉ ngơi nhiều."],
        ["你不应该喝酒。", "Nǐ bù yīnggāi hē jiǔ.", "Bạn không nên uống rượu."]
      ]
    },
    {
      p: "一天 + số + 次 = mấy lần một ngày",
      e: "Cấu trúc chỉ tần suất: 一天三次 (ngày ba lần), 一个星期两次 (tuần hai lần).",
      ex: [
        ["一天吃三次药。", "Yì tiān chī sān cì yào.", "Ngày uống thuốc ba lần."],
        ["一次两片。", "Yí cì liǎng piàn.", "Mỗi lần hai viên."]
      ]
    }
  ],
  dialogue: {
    title: "Ở phòng khám",
    lines: [
      ["BS", "你哪儿不舒服？", "Nǐ nǎr bù shūfu?", "Anh không khỏe chỗ nào?"],
      ["A", "我头疼、发烧，还咳嗽。", "Wǒ tóu téng, fāshāo, hái késou.", "Tôi đau đầu, sốt, còn ho nữa."],
      ["BS", "几天了？", "Jǐ tiān le?", "Mấy ngày rồi?"],
      ["A", "两天了。严重吗？", "Liǎng tiān le. Yánzhòng ma?", "Hai ngày rồi. Có nghiêm trọng không?"],
      ["BS", "不严重，是感冒。你应该多休息，多喝水。", "Bù yánzhòng, shì gǎnmào. Nǐ yīnggāi duō xiūxi, duō hē shuǐ.", "Không nghiêm trọng, là cảm. Anh nên nghỉ nhiều, uống nhiều nước."],
      ["A", "要吃药吗？", "Yào chī yào ma?", "Có phải uống thuốc không?"],
      ["BS", "要，一天三次，一次两片。", "Yào, yì tiān sān cì, yí cì liǎng piàn.", "Có, ngày ba lần, mỗi lần hai viên."],
      ["A", "好的，谢谢医生！", "Hǎo de, xièxie yīshēng!", "Vâng, cảm ơn bác sĩ!"]
    ]
  },
  drills: [
    ["你哪儿不舒服？", "Nǐ nǎr bù shūfu?", "Bạn không khỏe chỗ nào?"],
    ["你应该多休息。", "Nǐ yīnggāi duō xiūxi.", "Bạn nên nghỉ nhiều."],
    ["一天吃三次。", "Yì tiān chī sān cì.", "Ngày uống ba lần."],
    ["严重吗？", "Yánzhòng ma?", "Có nghiêm trọng không?"],
    ["我要去药店。", "Wǒ yào qù yàodiàn.", "Tôi phải đi hiệu thuốc."]
  ]
},

{
  d: 54, week: 8, theme: "Thời tiết & sức khỏe",
  title: "Trạng thái cảm xúc",
  goal: "Diễn đạt cảm xúc của mình và hỏi thăm người khác.",
  tip: "Người Trung Quốc ít nói thẳng cảm xúc tiêu cực với người lạ. Với bạn bè thì rất thoải mái.",
  vocab: [
    ["高兴", "gāoxìng", "vui"],
    ["快乐", "kuàilè", "vui vẻ, hạnh phúc"],
    ["难过", "nánguò", "buồn"],
    ["生气", "shēngqì", "tức giận"],
    ["担心", "dānxīn", "lo lắng"],
    ["紧张", "jǐnzhāng", "căng thẳng"],
    ["害怕", "hàipà", "sợ"],
    ["累", "lèi", "mệt"],
    ["无聊", "wúliáo", "chán"],
    ["放心", "fàngxīn", "yên tâm"],
    ["别", "bié", "đừng"],
    ["怎么了", "zěnme le", "sao thế"]
  ],
  grammar: [
    {
      p: "别 + động từ = đừng",
      e: "别担心 (đừng lo), 别生气 (đừng giận), 别紧张 (đừng căng thẳng). Câu an ủi cơ bản.",
      ex: [
        ["别担心，没问题的。", "Bié dānxīn, méi wèntí de.", "Đừng lo, không vấn đề gì đâu."],
        ["别生气，我错了。", "Bié shēngqì, wǒ cuò le.", "Đừng giận, tôi sai rồi."]
      ]
    },
    {
      p: "你怎么了？ – bạn sao thế?",
      e: "Khác với 你怎么样？(bạn thế nào). 怎么了 hỏi khi thấy ai đó có vấn đề.",
      ex: [
        ["你怎么了？", "Nǐ zěnme le?", "Bạn sao thế?"],
        ["没事儿。", "Méi shìr.", "Không có gì."]
      ]
    }
  ],
  dialogue: {
    title: "An ủi bạn",
    lines: [
      ["A", "你怎么了？看起来很难过。", "Nǐ zěnme le? Kàn qǐlái hěn nánguò.", "Bạn sao thế? Trông buồn quá."],
      ["B", "我明天有考试，很紧张。", "Wǒ míngtiān yǒu kǎoshì, hěn jǐnzhāng.", "Mai tôi có bài thi, căng thẳng lắm."],
      ["A", "别紧张，你准备得很好。", "Bié jǐnzhāng, nǐ zhǔnbèi de hěn hǎo.", "Đừng căng thẳng, bạn chuẩn bị rất tốt mà."],
      ["B", "可是我还是有点儿担心。", "Kěshì wǒ háishi yǒudiǎnr dānxīn.", "Nhưng tôi vẫn hơi lo."],
      ["A", "放心吧，你一定没问题！", "Fàngxīn ba, nǐ yídìng méi wèntí!", "Yên tâm đi, bạn chắc chắn không sao!"],
      ["B", "谢谢你，我现在好多了。", "Xièxie nǐ, wǒ xiànzài hǎo duō le.", "Cảm ơn bạn, giờ tôi thấy đỡ nhiều rồi."]
    ]
  },
  drills: [
    ["你怎么了？", "Nǐ zěnme le?", "Bạn sao thế?"],
    ["我很高兴。", "Wǒ hěn gāoxìng.", "Tôi rất vui."],
    ["别担心。", "Bié dānxīn.", "Đừng lo."],
    ["我有点儿紧张。", "Wǒ yǒudiǎnr jǐnzhāng.", "Tôi hơi căng thẳng."],
    ["放心吧！", "Fàngxīn ba!", "Yên tâm đi!"]
  ]
},

{
  d: 55, week: 8, theme: "Thời tiết & sức khỏe",
  title: "得 – bổ ngữ trình độ",
  goal: "Đánh giá ai đó làm việc gì tốt/kém thế nào.",
  tip: "Cấu trúc 得 rất hay dùng để khen: 你说得很好！(Bạn nói hay lắm!). Nhớ đọc 得 là 'de', không phải 'dé'.",
  vocab: [
    ["得", "de", "(trợ từ bổ ngữ trình độ)"],
    ["说得", "shuō de", "nói (thế nào)"],
    ["写", "xiě", "viết"],
    ["读", "dú", "đọc"],
    ["跑", "pǎo", "chạy"],
    ["唱歌", "chànggē", "hát"],
    ["跳舞", "tiàowǔ", "nhảy múa"],
    ["清楚", "qīngchu", "rõ ràng"],
    ["流利", "liúlì", "trôi chảy"],
    ["努力", "nǔlì", "chăm chỉ, nỗ lực"],
    ["进步", "jìnbù", "tiến bộ"]
  ],
  grammar: [
    {
      p: "Động từ + 得 + tính từ",
      e: "他跑得很快 = anh ấy chạy rất nhanh. Không nói 他很快跑.",
      ex: [
        ["你说得很好！", "Nǐ shuō de hěn hǎo!", "Bạn nói rất hay!"],
        ["他跑得很快。", "Tā pǎo de hěn kuài.", "Anh ấy chạy rất nhanh."]
      ]
    },
    {
      p: "Có tân ngữ thì lặp động từ",
      e: "他说中文说得很好 (lặp 说) hoặc 他中文说得很好. Không nói 他说中文得很好.",
      ex: [
        ["他说中文说得很流利。", "Tā shuō Zhōngwén shuō de hěn liúlì.", "Anh ấy nói tiếng Trung rất trôi chảy."],
        ["我写汉字写得不好。", "Wǒ xiě Hànzì xiě de bù hǎo.", "Tôi viết chữ Hán không đẹp."]
      ]
    },
    {
      p: "Câu hỏi: …得怎么样？",
      e: "你说得怎么样？ = bạn nói thế nào?",
      ex: [
        ["他唱得怎么样？", "Tā chàng de zěnmeyàng?", "Anh ấy hát thế nào?"]
      ]
    }
  ],
  dialogue: {
    title: "Khen tiếng Trung",
    lines: [
      ["A", "你的中文说得真好！", "Nǐ de Zhōngwén shuō de zhēn hǎo!", "Tiếng Trung bạn nói hay thật!"],
      ["B", "哪里哪里，还差得远呢。", "Nǎlǐ nǎlǐ, hái chà de yuǎn ne.", "Đâu có đâu, còn kém xa lắm."],
      ["A", "你学了多长时间？", "Nǐ xué le duō cháng shíjiān?", "Bạn học bao lâu rồi?"],
      ["B", "两个月。我每天学一个小时。", "Liǎng ge yuè. Wǒ měitiān xué yí ge xiǎoshí.", "Hai tháng. Mỗi ngày tôi học một tiếng."],
      ["A", "你很努力，进步得很快。", "Nǐ hěn nǔlì, jìnbù de hěn kuài.", "Bạn rất chăm chỉ, tiến bộ rất nhanh."],
      ["B", "谢谢！但是我写汉字写得不好。", "Xièxie! Dànshì wǒ xiě Hànzì xiě de bù hǎo.", "Cảm ơn! Nhưng tôi viết chữ Hán không đẹp."],
      ["A", "慢慢来，别着急。", "Mànman lái, bié zháojí.", "Từ từ thôi, đừng vội."]
    ]
  },
  drills: [
    ["你说得很好！", "Nǐ shuō de hěn hǎo!", "Bạn nói rất hay!"],
    ["他跑得很快。", "Tā pǎo de hěn kuài.", "Anh ấy chạy rất nhanh."],
    ["我写得不好。", "Wǒ xiě de bù hǎo.", "Tôi viết không đẹp."],
    ["你学得怎么样？", "Nǐ xué de zěnmeyàng?", "Bạn học thế nào?"],
    ["进步得很快。", "Jìnbù de hěn kuài.", "Tiến bộ rất nhanh."]
  ]
},

{
  d: 56, week: 8, theme: "Thời tiết & sức khỏe",
  title: "TỔNG ÔN THÁNG 2 · Mốc 60 ngày",
  goal: "Duy trì hội thoại 3 phút về sức khỏe, thời tiết, kế hoạch.",
  tip: "MỐC 2 THÁNG. Bạn đã có ~450 từ. Từ giờ trọng tâm chuyển từ HỌC MỚI sang NÓI TRÔI CHẢY. Hãy tăng thời gian luyện nói lên 25 phút mỗi buổi.",
  review: [50, 51, 52, 53, 54, 55],
  vocab: [
    ["最近", "zuìjìn", "gần đây"],
    ["身体", "shēntǐ", "sức khỏe"],
    ["注意", "zhùyì", "chú ý, để ý"],
    ["保重", "bǎozhòng", "giữ gìn sức khỏe"],
    ["慢慢来", "mànman lái", "từ từ thôi"]
  ],
  grammar: [
    {
      p: "Ôn 5 khung câu tháng 2",
      e: "1) …怎么样？ 2) 你应该… 3) 别… 4) 我打算… 5) …得很好",
      ex: [
        ["你身体怎么样？你应该多休息，别太累。", "Nǐ shēntǐ zěnmeyàng? Nǐ yīnggāi duō xiūxi, bié tài lèi.", "Sức khỏe bạn thế nào? Bạn nên nghỉ nhiều, đừng quá mệt."]
      ]
    }
  ],
  dialogue: {
    title: "Hỏi thăm bạn ốm (kịch bản tổng hợp)",
    lines: [
      ["A", "喂，你今天怎么没来上班？", "Wéi, nǐ jīntiān zěnme méi lái shàngbān?", "Alô, sao hôm nay bạn không đi làm?"],
      ["B", "我生病了，头疼、发烧。", "Wǒ shēngbìng le, tóu téng, fāshāo.", "Tôi ốm rồi, đau đầu, sốt."],
      ["A", "严重吗？去看医生了吗？", "Yánzhòng ma? Qù kàn yīshēng le ma?", "Có nặng không? Đi khám chưa?"],
      ["B", "去了，医生说是感冒，不严重。", "Qù le, yīshēng shuō shì gǎnmào, bù yánzhòng.", "Đi rồi, bác sĩ nói là cảm, không nặng."],
      ["A", "你应该多休息，多喝水。", "Nǐ yīnggāi duō xiūxi, duō hē shuǐ.", "Bạn nên nghỉ nhiều, uống nhiều nước."],
      ["B", "谢谢，我在家休息。最近天气不好。", "Xièxie, wǒ zài jiā xiūxi. Zuìjìn tiānqì bù hǎo.", "Cảm ơn, tôi nghỉ ở nhà. Dạo này thời tiết không tốt."],
      ["A", "对，天冷了，你要注意身体。", "Duì, tiān lěng le, nǐ yào zhùyì shēntǐ.", "Đúng, trời lạnh rồi, bạn phải chú ý sức khỏe."],
      ["B", "好的。明天我可能会好一点儿。", "Hǎo de. Míngtiān wǒ kěnéng huì hǎo yìdiǎnr.", "Vâng. Mai chắc tôi sẽ đỡ hơn."],
      ["A", "别着急，慢慢来。保重！", "Bié zháojí, mànman lái. Bǎozhòng!", "Đừng vội, từ từ thôi. Giữ gìn sức khỏe nhé!"],
      ["B", "谢谢你，再见！", "Xièxie nǐ, zàijiàn!", "Cảm ơn bạn, tạm biệt!"]
    ]
  },
  drills: [
    ["你今天怎么没来？", "Nǐ jīntiān zěnme méi lái?", "Sao hôm nay bạn không đến?"],
    ["我生病了。", "Wǒ shēngbìng le.", "Tôi ốm rồi."],
    ["你要注意身体。", "Nǐ yào zhùyì shēntǐ.", "Bạn phải chú ý sức khỏe."],
    ["别着急，慢慢来。", "Bié zháojí, mànman lái.", "Đừng vội, từ từ thôi."],
    ["保重！", "Bǎozhòng!", "Giữ gìn sức khỏe!"]
  ]
}

);
