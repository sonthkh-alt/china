/* Tuần 11–12 · Ngày 71–84 · Tình huống thực chiến + Công sở & thương mại */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

{
  d: 71, week: 11, theme: "Tình huống thực chiến",
  title: "Ở ngân hàng",
  goal: "Đổi tiền, mở tài khoản, rút tiền.",
  tip: "Ngân hàng Trung Quốc yêu cầu hộ chiếu cho mọi giao dịch của người nước ngoài. Luôn mang theo.",
  vocab: [
    ["换钱", "huànqián", "đổi tiền"],
    ["汇率", "huìlǜ", "tỷ giá"],
    ["美元", "měiyuán", "đô la Mỹ"],
    ["人民币", "rénmínbì", "nhân dân tệ"],
    ["取钱", "qǔqián", "rút tiền"],
    ["存钱", "cúnqián", "gửi tiền"],
    ["账户", "zhànghù", "tài khoản"],
    ["开户", "kāihù", "mở tài khoản"],
    ["银行卡", "yínhángkǎ", "thẻ ngân hàng"],
    ["密码", "mìmǎ", "mật khẩu"],
    ["填", "tián", "điền"],
    ["表", "biǎo", "biểu mẫu"],
    ["签名", "qiānmíng", "ký tên"],
    ["手续费", "shǒuxùfèi", "phí dịch vụ"]
  ],
  grammar: [
    {
      p: "我想 + động từ (nêu nhu cầu ở quầy)",
      e: "Mở đầu mọi giao dịch: 我想换钱 / 我想开户 / 我想取钱. Ngắn gọn, rõ ràng, hiệu quả.",
      ex: [
        ["我想换一些人民币。", "Wǒ xiǎng huàn yìxiē rénmínbì.", "Tôi muốn đổi một ít nhân dân tệ."],
        ["我想开一个账户。", "Wǒ xiǎng kāi yí ge zhànghù.", "Tôi muốn mở một tài khoản."]
      ]
    },
    {
      p: "请 + động từ + 一下 (chỉ dẫn)",
      e: "Nhân viên hay nói: 请填一下表 / 请签一下名 / 请等一下.",
      ex: [
        ["请填一下这张表。", "Qǐng tián yíxià zhè zhāng biǎo.", "Xin điền vào mẫu này."],
        ["请在这里签名。", "Qǐng zài zhèlǐ qiānmíng.", "Xin ký tên ở đây."]
      ]
    }
  ],
  dialogue: {
    title: "Đổi tiền",
    lines: [
      ["A", "你好，我想换钱。", "Nǐ hǎo, wǒ xiǎng huànqián.", "Chào chị, tôi muốn đổi tiền."],
      ["NV", "换多少？换什么？", "Huàn duōshao? Huàn shénme?", "Đổi bao nhiêu? Đổi gì ạ?"],
      ["A", "五百美元换人民币。今天汇率是多少？", "Wǔbǎi měiyuán huàn rénmínbì. Jīntiān huìlǜ shì duōshao?", "500 đô đổi nhân dân tệ. Tỷ giá hôm nay bao nhiêu?"],
      ["NV", "今天是七点二。请给我您的护照。", "Jīntiān shì qī diǎn èr. Qǐng gěi wǒ nín de hùzhào.", "Hôm nay là 7,2. Cho tôi xin hộ chiếu của anh."],
      ["A", "给你。有手续费吗？", "Gěi nǐ. Yǒu shǒuxùfèi ma?", "Đây ạ. Có phí dịch vụ không?"],
      ["NV", "没有。请填一下这张表，然后在这里签名。", "Méiyǒu. Qǐng tián yíxià zhè zhāng biǎo, ránhòu zài zhèlǐ qiānmíng.", "Không có. Xin điền vào mẫu này, rồi ký tên ở đây."],
      ["A", "好的，谢谢！", "Hǎo de, xièxie!", "Vâng, cảm ơn!"]
    ]
  },
  drills: [
    ["我想换钱。", "Wǒ xiǎng huànqián.", "Tôi muốn đổi tiền."],
    ["今天汇率是多少？", "Jīntiān huìlǜ shì duōshao?", "Tỷ giá hôm nay bao nhiêu?"],
    ["有手续费吗？", "Yǒu shǒuxùfèi ma?", "Có phí dịch vụ không?"],
    ["请填一下这张表。", "Qǐng tián yíxià zhè zhāng biǎo.", "Xin điền vào mẫu này."],
    ["我想取钱。", "Wǒ xiǎng qǔqián.", "Tôi muốn rút tiền."]
  ]
},

{
  d: 72, week: 11, theme: "Tình huống thực chiến",
  title: "Tình huống khẩn cấp",
  goal: "Kêu cứu, báo mất đồ, gọi cấp cứu.",
  tip: "Số khẩn cấp Trung Quốc: 110 cảnh sát, 120 cấp cứu, 119 cứu hỏa. Học thuộc 救命！(cứu tôi với) và 我需要帮助 (tôi cần giúp đỡ).",
  vocab: [
    ["救命", "jiùmìng", "cứu mạng, cứu với"],
    ["帮助", "bāngzhù", "giúp đỡ"],
    ["警察", "jǐngchá", "cảnh sát"],
    ["急救", "jíjiù", "cấp cứu"],
    ["丢了", "diū le", "mất rồi"],
    ["被偷", "bèi tōu", "bị trộm"],
    ["钱包", "qiánbāo", "ví tiền"],
    ["证件", "zhèngjiàn", "giấy tờ"],
    ["报警", "bàojǐng", "báo cảnh sát"],
    ["危险", "wēixiǎn", "nguy hiểm"],
    ["小心", "xiǎoxīn", "cẩn thận"],
    ["着火", "zháohuǒ", "cháy"],
    ["受伤", "shòushāng", "bị thương"],
    ["大使馆", "dàshǐguǎn", "đại sứ quán"]
  ],
  grammar: [
    {
      p: "被 – câu bị động",
      e: "我的钱包被偷了 = ví tôi bị trộm mất. Cấu trúc: chủ ngữ + 被 (+ người) + động từ + 了.",
      ex: [
        ["我的手机被偷了。", "Wǒ de shǒujī bèi tōu le.", "Điện thoại tôi bị trộm rồi."],
        ["他被车撞了。", "Tā bèi chē zhuàng le.", "Anh ấy bị xe đâm."]
      ]
    },
    {
      p: "Bộ câu khẩn cấp (học thuộc lòng)",
      e: "Trong tình huống nguy cấp không có thời gian nghĩ ngữ pháp. Học thuộc nguyên câu.",
      ex: [
        ["救命！", "Jiùmìng!", "Cứu với!"],
        ["请帮我叫警察！", "Qǐng bāng wǒ jiào jǐngchá!", "Làm ơn gọi cảnh sát giúp tôi!"],
        ["请叫救护车！", "Qǐng jiào jiùhùchē!", "Làm ơn gọi xe cấp cứu!"],
        ["我需要帮助。", "Wǒ xūyào bāngzhù.", "Tôi cần giúp đỡ."]
      ]
    }
  ],
  dialogue: {
    title: "Báo mất ví",
    lines: [
      ["A", "你好，我要报警。我的钱包丢了。", "Nǐ hǎo, wǒ yào bàojǐng. Wǒ de qiánbāo diū le.", "Chào anh, tôi muốn báo cảnh sát. Ví của tôi mất rồi."],
      ["CS", "在哪儿丢的？什么时候？", "Zài nǎr diū de? Shénme shíhou?", "Mất ở đâu? Khi nào?"],
      ["A", "大概一个小时以前，在地铁上。可能被偷了。", "Dàgài yí ge xiǎoshí yǐqián, zài dìtiě shàng. Kěnéng bèi tōu le.", "Khoảng một tiếng trước, trên tàu điện. Có thể bị trộm."],
      ["CS", "钱包里有什么？", "Qiánbāo lǐ yǒu shénme?", "Trong ví có gì?"],
      ["A", "有钱、银行卡和我的证件。", "Yǒu qián, yínhángkǎ hé wǒ de zhèngjiàn.", "Có tiền, thẻ ngân hàng và giấy tờ của tôi."],
      ["CS", "请填一下这张表，写上你的电话号码。", "Qǐng tián yíxià zhè zhāng biǎo, xiě shàng nǐ de diànhuà hàomǎ.", "Xin điền mẫu này, ghi số điện thoại của anh."],
      ["A", "好的。我还要去大使馆吗？", "Hǎo de. Wǒ hái yào qù dàshǐguǎn ma?", "Vâng. Tôi có cần đến đại sứ quán không?"],
      ["CS", "如果护照也丢了，你就要去。", "Rúguǒ hùzhào yě diū le, nǐ jiù yào qù.", "Nếu hộ chiếu cũng mất thì anh phải đi."]
    ]
  },
  drills: [
    ["救命！", "Jiùmìng!", "Cứu với!"],
    ["我需要帮助。", "Wǒ xūyào bāngzhù.", "Tôi cần giúp đỡ."],
    ["我的钱包被偷了。", "Wǒ de qiánbāo bèi tōu le.", "Ví tôi bị trộm rồi."],
    ["请帮我叫警察。", "Qǐng bāng wǒ jiào jǐngchá.", "Làm ơn gọi cảnh sát giúp tôi."],
    ["请叫救护车！", "Qǐng jiào jiùhùchē!", "Làm ơn gọi xe cấp cứu!"]
  ]
},

{
  d: 73, week: 11, theme: "Tình huống thực chiến",
  title: "Bưu điện & chuyển phát",
  goal: "Gửi hàng, nhận hàng, theo dõi đơn.",
  tip: "Ở Trung Quốc, 快递 (chuyển phát nhanh) là một phần đời sống. 取快递 = lấy hàng, thường ở 快递柜 (tủ hàng tự động).",
  vocab: [
    ["邮局", "yóujú", "bưu điện"],
    ["寄", "jì", "gửi"],
    ["快递", "kuàidì", "chuyển phát nhanh"],
    ["包裹", "bāoguǒ", "bưu kiện"],
    ["信", "xìn", "thư"],
    ["地址", "dìzhǐ", "địa chỉ"],
    ["收件人", "shōujiànrén", "người nhận"],
    ["寄件人", "jìjiànrén", "người gửi"],
    ["运费", "yùnfèi", "phí vận chuyển"],
    ["几天", "jǐ tiān", "mấy ngày"],
    ["到", "dào", "đến nơi"],
    ["取", "qǔ", "lấy, nhận"],
    ["单号", "dānhào", "mã đơn hàng"]
  ],
  grammar: [
    {
      p: "寄到 + nơi nhận",
      e: "我要寄到越南 = tôi muốn gửi về Việt Nam. 到 chỉ đích đến.",
      ex: [
        ["我要寄一个包裹到越南。", "Wǒ yào jì yí ge bāoguǒ dào Yuènán.", "Tôi muốn gửi một bưu kiện về Việt Nam."]
      ]
    },
    {
      p: "要几天？ – mất mấy ngày",
      e: "Câu hỏi thời gian giao hàng. Trả lời: 三到五天 (3 đến 5 ngày).",
      ex: [
        ["寄到越南要几天？", "Jì dào Yuènán yào jǐ tiān?", "Gửi về Việt Nam mất mấy ngày?"],
        ["大概一个星期。", "Dàgài yí ge xīngqī.", "Khoảng một tuần."]
      ]
    }
  ],
  dialogue: {
    title: "Gửi bưu kiện",
    lines: [
      ["A", "你好，我要寄一个包裹到越南。", "Nǐ hǎo, wǒ yào jì yí ge bāoguǒ dào Yuènán.", "Chào chị, tôi muốn gửi một bưu kiện về Việt Nam."],
      ["NV", "里面是什么？", "Lǐmiàn shì shénme?", "Bên trong là gì ạ?"],
      ["A", "是书和一些茶。", "Shì shū hé yìxiē chá.", "Là sách và một ít trà."],
      ["NV", "请填写收件人的地址和电话。", "Qǐng tiánxiě shōujiànrén de dìzhǐ hé diànhuà.", "Xin điền địa chỉ và số điện thoại người nhận."],
      ["A", "好。运费多少钱？要几天？", "Hǎo. Yùnfèi duōshao qián? Yào jǐ tiān?", "Vâng. Phí vận chuyển bao nhiêu? Mất mấy ngày?"],
      ["NV", "一百八十块，大概七天到。", "Yìbǎi bāshí kuài, dàgài qī tiān dào.", "180 tệ, khoảng 7 ngày là đến."],
      ["A", "好的。可以查单号吗？", "Hǎo de. Kěyǐ chá dānhào ma?", "Được ạ. Tra mã đơn được không?"],
      ["NV", "可以，这是您的单号。", "Kěyǐ, zhè shì nín de dānhào.", "Được, đây là mã đơn của anh."]
    ]
  },
  drills: [
    ["我要寄一个包裹。", "Wǒ yào jì yí ge bāoguǒ.", "Tôi muốn gửi một bưu kiện."],
    ["寄到越南要几天？", "Jì dào Yuènán yào jǐ tiān?", "Gửi về Việt Nam mất mấy ngày?"],
    ["运费多少钱？", "Yùnfèi duōshao qián?", "Phí vận chuyển bao nhiêu?"],
    ["我来取快递。", "Wǒ lái qǔ kuàidì.", "Tôi đến lấy hàng."],
    ["这是我的单号。", "Zhè shì wǒ de dānhào.", "Đây là mã đơn của tôi."]
  ]
},

{
  d: 74, week: 11, theme: "Tình huống thực chiến",
  title: "Khiếu nại & đổi trả",
  goal: "Phàn nàn lịch sự, yêu cầu đổi/trả hàng.",
  tip: "Khiếu nại kiểu Á Đông: nêu vấn đề trước, KHÔNG trách móc người đối diện, rồi đề xuất giải pháp. Giọng bình tĩnh hiệu quả hơn giận dữ.",
  vocab: [
    ["问题", "wèntí", "vấn đề"],
    ["坏了", "huài le", "hỏng rồi"],
    ["不对", "bú duì", "không đúng"],
    ["错", "cuò", "sai"],
    ["退货", "tuìhuò", "trả hàng"],
    ["换货", "huànhuò", "đổi hàng"],
    ["退钱", "tuìqián", "hoàn tiền"],
    ["发票", "fāpiào", "hóa đơn"],
    ["保修", "bǎoxiū", "bảo hành"],
    ["修", "xiū", "sửa"],
    ["解决", "jiějué", "giải quyết"],
    ["满意", "mǎnyì", "hài lòng"],
    ["投诉", "tóusù", "khiếu nại"]
  ],
  grammar: [
    {
      p: "…有问题 – có vấn đề",
      e: "Cách nêu sự cố trung tính, không đổ lỗi: 这个手机有问题.",
      ex: [
        ["这个有问题。", "Zhè ge yǒu wèntí.", "Cái này có vấn đề."],
        ["空调坏了。", "Kōngtiáo huài le.", "Điều hòa hỏng rồi."]
      ]
    },
    {
      p: "能不能…？ – đề xuất mềm",
      e: "能不能帮我换一个？ nghe lịch sự hơn 我要换.",
      ex: [
        ["能不能帮我换一个？", "Néng bu néng bāng wǒ huàn yí ge?", "Có thể đổi cho tôi cái khác không?"],
        ["可以退钱吗？", "Kěyǐ tuìqián ma?", "Có thể hoàn tiền không?"]
      ]
    }
  ],
  dialogue: {
    title: "Đổi hàng lỗi",
    lines: [
      ["A", "你好，我昨天买的这个有问题。", "Nǐ hǎo, wǒ zuótiān mǎi de zhè ge yǒu wèntí.", "Chào chị, cái này tôi mua hôm qua có vấn đề."],
      ["NV", "什么问题？", "Shénme wèntí?", "Vấn đề gì ạ?"],
      ["A", "回家以后发现它坏了，不能用。", "Huí jiā yǐhòu fāxiàn tā huài le, bù néng yòng.", "Về nhà mới phát hiện nó hỏng, không dùng được."],
      ["NV", "有发票吗？", "Yǒu fāpiào ma?", "Có hóa đơn không ạ?"],
      ["A", "有，在这儿。能不能帮我换一个？", "Yǒu, zài zhèr. Néng bu néng bāng wǒ huàn yí ge?", "Có, đây ạ. Có thể đổi cho tôi cái khác không?"],
      ["NV", "可以。对不起，给您添麻烦了。", "Kěyǐ. Duìbuqǐ, gěi nín tiān máfan le.", "Được ạ. Xin lỗi đã làm phiền anh."],
      ["A", "没关系，谢谢你解决问题。", "Méi guānxi, xièxie nǐ jiějué wèntí.", "Không sao, cảm ơn chị đã giải quyết."]
    ]
  },
  drills: [
    ["这个有问题。", "Zhè ge yǒu wèntí.", "Cái này có vấn đề."],
    ["它坏了，不能用。", "Tā huài le, bù néng yòng.", "Nó hỏng rồi, không dùng được."],
    ["能不能帮我换一个？", "Néng bu néng bāng wǒ huàn yí ge?", "Đổi cho tôi cái khác được không?"],
    ["可以退钱吗？", "Kěyǐ tuìqián ma?", "Có thể hoàn tiền không?"],
    ["这是发票。", "Zhè shì fāpiào.", "Đây là hóa đơn."]
  ]
},

{
  d: 75, week: 11, theme: "Tình huống thực chiến",
  title: "Cắt tóc & dịch vụ",
  goal: "Yêu cầu dịch vụ theo ý mình.",
  tip: "Với dịch vụ, hãy học cách nói mức độ: 短一点儿 (ngắn hơn chút), 别太短 (đừng quá ngắn). Nói rõ trước khi họ bắt đầu.",
  vocab: [
    ["理发", "lǐfà", "cắt tóc"],
    ["剪", "jiǎn", "cắt"],
    ["洗", "xǐ", "gội, rửa"],
    ["头发", "tóufa", "tóc"],
    ["短", "duǎn", "ngắn"],
    ["长", "cháng", "dài"],
    ["洗衣服", "xǐ yīfu", "giặt quần áo"],
    ["干洗", "gānxǐ", "giặt khô"],
    ["修理", "xiūlǐ", "sửa chữa"],
    ["服务", "fúwù", "dịch vụ"],
    ["预约", "yùyuē", "đặt lịch hẹn"],
    ["差不多", "chàbuduō", "gần được rồi"],
    ["就这样", "jiù zhèyàng", "vậy là được"]
  ],
  grammar: [
    {
      p: "别太… – đừng quá…",
      e: "别太短 (đừng quá ngắn), 别太辣 (đừng quá cay), 别太贵 (đừng quá đắt).",
      ex: [
        ["别太短，谢谢。", "Bié tài duǎn, xièxie.", "Đừng quá ngắn, cảm ơn."],
        ["剪短一点儿就好。", "Jiǎn duǎn yìdiǎnr jiù hǎo.", "Cắt ngắn chút là được."]
      ]
    },
    {
      p: "就这样 / 差不多了 – dừng ở đây",
      e: "Câu chốt khi hài lòng: 就这样，谢谢！",
      ex: [
        ["差不多了，就这样吧。", "Chàbuduō le, jiù zhèyàng ba.", "Gần được rồi, vậy là được."]
      ]
    }
  ],
  dialogue: {
    title: "Ở tiệm cắt tóc",
    lines: [
      ["NV", "您好，要剪头发吗？", "Nín hǎo, yào jiǎn tóufa ma?", "Chào anh, cắt tóc ạ?"],
      ["A", "对，先洗一下，然后剪短一点儿。", "Duì, xiān xǐ yíxià, ránhòu jiǎn duǎn yìdiǎnr.", "Đúng, gội trước, rồi cắt ngắn chút."],
      ["NV", "要多短？", "Yào duō duǎn?", "Ngắn cỡ nào ạ?"],
      ["A", "别太短，两三厘米就行。", "Bié tài duǎn, liǎng sān límǐ jiù xíng.", "Đừng quá ngắn, hai ba phân là được."],
      ["NV", "旁边呢？", "Pángbiān ne?", "Hai bên thì sao?"],
      ["A", "旁边短一点儿，上面留长一些。", "Pángbiān duǎn yìdiǎnr, shàngmiàn liú cháng yìxiē.", "Hai bên ngắn hơn chút, phía trên để dài hơn."],
      ["NV", "这样可以吗？", "Zhèyàng kěyǐ ma?", "Thế này được chưa ạ?"],
      ["A", "差不多了，就这样，谢谢！多少钱？", "Chàbuduō le, jiù zhèyàng, xièxie! Duōshao qián?", "Gần được rồi, vậy là được, cảm ơn! Bao nhiêu tiền?"]
    ]
  },
  drills: [
    ["我要剪头发。", "Wǒ yào jiǎn tóufa.", "Tôi muốn cắt tóc."],
    ["剪短一点儿。", "Jiǎn duǎn yìdiǎnr.", "Cắt ngắn chút."],
    ["别太短。", "Bié tài duǎn.", "Đừng quá ngắn."],
    ["就这样，谢谢！", "Jiù zhèyàng, xièxie!", "Vậy là được, cảm ơn!"],
    ["我要预约。", "Wǒ yào yùyuē.", "Tôi muốn đặt lịch."]
  ]
},

{
  d: 76, week: 11, theme: "Tình huống thực chiến",
  title: "Small talk – nói chuyện phiếm",
  goal: "Duy trì cuộc trò chuyện xã giao 2–3 phút.",
  tip: "Bí quyết small talk: hỏi lại sau khi trả lời (你呢？), và nêu nhận xét thay vì chỉ trả lời cụt ngủn.",
  vocab: [
    ["聊天", "liáotiān", "trò chuyện"],
    ["其实", "qíshí", "thực ra"],
    ["真的吗", "zhēn de ma", "thật à"],
    ["是吗", "shì ma", "vậy à"],
    ["原来", "yuánlái", "hóa ra"],
    ["当然", "dāngrán", "đương nhiên"],
    ["比如", "bǐrú", "ví dụ như"],
    ["特别", "tèbié", "đặc biệt"],
    ["有点儿", "yǒudiǎnr", "hơi"],
    ["还行", "hái xíng", "cũng tạm"],
    ["不错", "búcuò", "khá tốt"],
    ["我也是", "wǒ yě shì", "tôi cũng vậy"]
  ],
  grammar: [
    {
      p: "Bộ từ đệm giữ nhịp hội thoại",
      e: "真的吗？/ 是吗？/ 原来这样！/ 我也是！ — dùng chúng để tỏ ra đang lắng nghe. Người bản xứ dùng liên tục.",
      ex: [
        ["真的吗？太有意思了！", "Zhēn de ma? Tài yǒu yìsi le!", "Thật à? Thú vị quá!"],
        ["原来这样，我明白了。", "Yuánlái zhèyàng, wǒ míngbai le.", "Hóa ra là vậy, tôi hiểu rồi."]
      ]
    },
    {
      p: "其实… – thực ra thì",
      e: "Dùng để bổ sung thông tin bất ngờ, làm câu chuyện có chiều sâu.",
      ex: [
        ["其实我也不太喜欢。", "Qíshí wǒ yě bú tài xǐhuan.", "Thực ra tôi cũng không thích lắm."]
      ]
    }
  ],
  dialogue: {
    title: "Nói chuyện phiếm ở quán cà phê",
    lines: [
      ["A", "今天天气真好！", "Jīntiān tiānqì zhēn hǎo!", "Hôm nay thời tiết đẹp thật!"],
      ["B", "是啊，特别舒服。你常来这儿吗？", "Shì a, tèbié shūfu. Nǐ cháng lái zhèr ma?", "Đúng vậy, dễ chịu lắm. Bạn hay đến đây không?"],
      ["A", "还行，一个星期两三次。这儿的咖啡不错。", "Hái xíng, yí ge xīngqī liǎng sān cì. Zhèr de kāfēi búcuò.", "Cũng tạm, tuần hai ba lần. Cà phê ở đây khá ngon."],
      ["B", "真的吗？我第一次来。", "Zhēn de ma? Wǒ dì-yī cì lái.", "Thật à? Tôi mới đến lần đầu."],
      ["A", "那你一定要试试他们的中国茶。", "Nà nǐ yídìng yào shìshi tāmen de Zhōngguó chá.", "Vậy bạn nhất định phải thử trà Trung Quốc của họ."],
      ["B", "好啊。其实我很喜欢喝茶，比咖啡更喜欢。", "Hǎo a. Qíshí wǒ hěn xǐhuan hē chá, bǐ kāfēi gèng xǐhuan.", "Được thôi. Thực ra tôi rất thích uống trà, thích hơn cà phê."],
      ["A", "我也是！我们一样。", "Wǒ yě shì! Wǒmen yíyàng.", "Tôi cũng vậy! Chúng ta giống nhau."],
      ["B", "哈哈，太巧了！", "Hāha, tài qiǎo le!", "Haha, trùng hợp quá!"]
    ]
  },
  drills: [
    ["今天天气真好！", "Jīntiān tiānqì zhēn hǎo!", "Hôm nay thời tiết đẹp thật!"],
    ["真的吗？", "Zhēn de ma?", "Thật à?"],
    ["原来这样。", "Yuánlái zhèyàng.", "Hóa ra là vậy."],
    ["我也是！", "Wǒ yě shì!", "Tôi cũng vậy!"],
    ["其实我很喜欢。", "Qíshí wǒ hěn xǐhuan.", "Thực ra tôi rất thích."]
  ]
},

{
  d: 77, week: 11, theme: "Tình huống thực chiến",
  title: "TỔNG ÔN TUẦN 11",
  goal: "Xử lý 3 tình huống bất ngờ liên tiếp không cần chuẩn bị.",
  tip: "Bài tập khó: tự bấm giờ 60 giây cho mỗi tình huống (mất ví / hàng lỗi / hỏi đường khi lạc), nói ngay không chuẩn bị.",
  review: [71, 72, 73, 74, 75, 76],
  vocab: [
    ["麻烦", "máfan", "phiền, rắc rối"],
    ["顺便", "shùnbiàn", "tiện thể"],
    ["尽快", "jǐnkuài", "càng sớm càng tốt"],
    ["办法", "bànfǎ", "cách, biện pháp"],
    ["没办法", "méi bànfǎ", "không còn cách nào"]
  ],
  grammar: [
    {
      p: "麻烦你… – phiền bạn…",
      e: "Cách mở lời nhờ vả lịch sự nhất: 麻烦你帮我一下.",
      ex: [
        ["麻烦你帮我一下。", "Máfan nǐ bāng wǒ yíxià.", "Phiền bạn giúp tôi một chút."],
        ["麻烦你，请尽快处理。", "Máfan nǐ, qǐng jǐnkuài chǔlǐ.", "Phiền bạn xử lý sớm giúp."]
      ]
    }
  ],
  dialogue: {
    title: "Ngày xui xẻo (kịch bản tổng hợp)",
    lines: [
      ["A", "麻烦你，我迷路了。请问，火车站怎么走？", "Máfan nǐ, wǒ mílù le. Qǐngwèn, huǒchēzhàn zěnme zǒu?", "Phiền bạn, tôi lạc đường. Xin hỏi ga tàu đi thế nào?"],
      ["B", "一直走，第二个路口往左拐，走十分钟就到。", "Yìzhí zǒu, dì-èr ge lùkǒu wǎng zuǒ guǎi, zǒu shí fēnzhōng jiù dào.", "Đi thẳng, ngã rẽ thứ hai rẽ trái, đi 10 phút là tới."],
      ["A", "谢谢！啊，我的手机不见了！", "Xièxie! À, wǒ de shǒujī bú jiàn le!", "Cảm ơn! A, điện thoại tôi biến mất rồi!"],
      ["B", "别着急，你找一下包里。", "Bié zháojí, nǐ zhǎo yíxià bāo lǐ.", "Đừng vội, tìm trong túi xem."],
      ["A", "找不到。可能在出租车上丢了。", "Zhǎo bu dào. Kěnéng zài chūzūchē shàng diū le.", "Không tìm thấy. Có lẽ để quên trên taxi."],
      ["B", "你应该马上报警，还要给出租车公司打电话。", "Nǐ yīnggāi mǎshàng bàojǐng, hái yào gěi chūzūchē gōngsī dǎ diànhuà.", "Bạn nên báo cảnh sát ngay, còn phải gọi cho hãng taxi."],
      ["A", "我不知道号码，能借你的手机用一下吗？", "Wǒ bù zhīdào hàomǎ, néng jiè nǐ de shǒujī yòng yíxià ma?", "Tôi không biết số, cho tôi mượn điện thoại được không?"],
      ["B", "当然可以，给你。", "Dāngrán kěyǐ, gěi nǐ.", "Đương nhiên được, đây."],
      ["A", "太感谢你了！你真是好人。", "Tài gǎnxiè nǐ le! Nǐ zhēn shì hǎo rén.", "Cảm ơn bạn nhiều lắm! Bạn tốt quá."],
      ["B", "不客气，希望你尽快找到。", "Bú kèqi, xīwàng nǐ jǐnkuài zhǎodào.", "Không có gì, mong bạn sớm tìm được."]
    ]
  },
  drills: [
    ["麻烦你帮我一下。", "Máfan nǐ bāng wǒ yíxià.", "Phiền bạn giúp tôi chút."],
    ["我迷路了。", "Wǒ mílù le.", "Tôi lạc đường rồi."],
    ["我的手机不见了。", "Wǒ de shǒujī bú jiàn le.", "Điện thoại tôi biến mất rồi."],
    ["能借你的手机用一下吗？", "Néng jiè nǐ de shǒujī yòng yíxià ma?", "Cho tôi mượn điện thoại chút được không?"],
    ["太感谢你了！", "Tài gǎnxiè nǐ le!", "Cảm ơn bạn nhiều lắm!"]
  ]
},

{
  d: 78, week: 12, theme: "Công sở & thương mại",
  title: "Chào hỏi trong công việc",
  goal: "Giao tiếp lịch sự chuẩn mực nơi công sở.",
  tip: "Trong công việc dùng 您 thay 你, gọi chức danh thay tên: 王经理 (Giám đốc Vương), 李老师 (Thầy Lý).",
  vocab: [
    ["您", "nín", "ngài, ông/bà (kính ngữ)"],
    ["总经理", "zǒngjīnglǐ", "tổng giám đốc"],
    ["名片", "míngpiàn", "danh thiếp"],
    ["合作", "hézuò", "hợp tác"],
    ["介绍", "jièshào", "giới thiệu"],
    ["久仰", "jiǔyǎng", "ngưỡng mộ đã lâu"],
    ["辛苦了", "xīnkǔ le", "vất vả rồi"],
    ["麻烦您", "máfan nín", "phiền ngài"],
    ["拜访", "bàifǎng", "thăm viếng"],
    ["接待", "jiēdài", "tiếp đón"],
    ["安排", "ānpái", "sắp xếp"],
    ["讨论", "tǎolùn", "thảo luận"]
  ],
  grammar: [
    {
      p: "Trật tự chức danh: Họ + chức vụ",
      e: "王经理 chứ không phải 经理王. Đây là cách gọi trang trọng chuẩn.",
      ex: [
        ["王经理，您好！", "Wáng jīnglǐ, nín hǎo!", "Chào giám đốc Vương!"],
        ["这是我们的李总经理。", "Zhè shì wǒmen de Lǐ zǒngjīnglǐ.", "Đây là tổng giám đốc Lý của chúng tôi."]
      ]
    },
    {
      p: "我来介绍一下 – để tôi giới thiệu",
      e: "Mẫu câu bắt buộc khi giới thiệu hai bên với nhau.",
      ex: [
        ["我来介绍一下，这是我们的经理。", "Wǒ lái jièshào yíxià, zhè shì wǒmen de jīnglǐ.", "Để tôi giới thiệu, đây là giám đốc của chúng tôi."]
      ]
    }
  ],
  dialogue: {
    title: "Gặp đối tác",
    lines: [
      ["A", "王经理，您好！很高兴见到您。", "Wáng jīnglǐ, nín hǎo! Hěn gāoxìng jiàndào nín.", "Chào giám đốc Vương! Rất vui được gặp ngài."],
      ["B", "您好！久仰久仰。这是我的名片。", "Nín hǎo! Jiǔyǎng jiǔyǎng. Zhè shì wǒ de míngpiàn.", "Chào anh! Ngưỡng mộ đã lâu. Đây là danh thiếp của tôi."],
      ["A", "谢谢，这是我的。我来介绍一下，这是我们的销售经理。", "Xièxie, zhè shì wǒ de. Wǒ lái jièshào yíxià, zhè shì wǒmen de xiāoshòu jīnglǐ.", "Cảm ơn, đây là của tôi. Để tôi giới thiệu, đây là giám đốc kinh doanh của chúng tôi."],
      ["B", "您好！欢迎来我们公司。路上辛苦了。", "Nín hǎo! Huānyíng lái wǒmen gōngsī. Lùshang xīnkǔ le.", "Chào anh! Hoan nghênh đến công ty chúng tôi. Đi đường vất vả rồi."],
      ["A", "不辛苦，谢谢您的接待。", "Bù xīnkǔ, xièxie nín de jiēdài.", "Không vất vả, cảm ơn ngài đã tiếp đón."],
      ["B", "我们先喝杯茶，然后开始讨论合作，好吗？", "Wǒmen xiān hē bēi chá, ránhòu kāishǐ tǎolùn hézuò, hǎo ma?", "Chúng ta uống chén trà trước, rồi bắt đầu bàn hợp tác nhé?"],
      ["A", "好的，麻烦您了。", "Hǎo de, máfan nín le.", "Vâng, phiền ngài."]
    ]
  },
  drills: [
    ["王经理，您好！", "Wáng jīnglǐ, nín hǎo!", "Chào giám đốc Vương!"],
    ["这是我的名片。", "Zhè shì wǒ de míngpiàn.", "Đây là danh thiếp của tôi."],
    ["我来介绍一下。", "Wǒ lái jièshào yíxià.", "Để tôi giới thiệu."],
    ["很高兴见到您。", "Hěn gāoxìng jiàndào nín.", "Rất vui được gặp ngài."],
    ["辛苦了！", "Xīnkǔ le!", "Vất vả rồi!"]
  ]
},

{
  d: 79, week: 12, theme: "Công sở & thương mại",
  title: "Họp & báo cáo",
  goal: "Phát biểu ý kiến trong cuộc họp.",
  tip: "Ba câu vàng trong họp: 我同意 (tôi đồng ý), 我有个问题 (tôi có câu hỏi), 我觉得… (tôi cho rằng…).",
  vocab: [
    ["会议", "huìyì", "cuộc họp"],
    ["报告", "bàogào", "báo cáo"],
    ["同意", "tóngyì", "đồng ý"],
    ["反对", "fǎnduì", "phản đối"],
    ["建议", "jiànyì", "đề xuất"],
    ["意见", "yìjiàn", "ý kiến"],
    ["计划", "jìhuà", "kế hoạch"],
    ["目标", "mùbiāo", "mục tiêu"],
    ["完成", "wánchéng", "hoàn thành"],
    ["进度", "jìndù", "tiến độ"],
    ["截止日期", "jiézhǐ rìqī", "hạn chót, deadline"],
    ["负责人", "fùzérén", "người phụ trách"],
    ["讨论", "tǎolùn", "thảo luận"],
    ["决定", "juédìng", "quyết định"]
  ],
  grammar: [
    {
      p: "Bộ câu phát biểu",
      e: "我同意 / 我不太同意 / 我有不同的意见 / 我可以说几句吗？",
      ex: [
        ["我同意您的意见。", "Wǒ tóngyì nín de yìjiàn.", "Tôi đồng ý với ý kiến của ngài."],
        ["我有一个建议。", "Wǒ yǒu yí ge jiànyì.", "Tôi có một đề xuất."]
      ]
    },
    {
      p: "…之前 / …之后 – trước/sau khi",
      e: "开会之前 (trước khi họp), 下班之后 (sau khi tan làm). Cụm này đứng đầu câu.",
      ex: [
        ["开会之前请看一下报告。", "Kāihuì zhīqián qǐng kàn yíxià bàogào.", "Trước khi họp xin xem qua báo cáo."],
        ["下班之后我们讨论。", "Xiàbān zhīhòu wǒmen tǎolùn.", "Sau khi tan làm chúng ta thảo luận."]
      ]
    }
  ],
  dialogue: {
    title: "Trong cuộc họp",
    lines: [
      ["A", "今天我们讨论下个月的计划。", "Jīntiān wǒmen tǎolùn xià ge yuè de jìhuà.", "Hôm nay chúng ta bàn kế hoạch tháng sau."],
      ["B", "我可以说几句吗？", "Wǒ kěyǐ shuō jǐ jù ma?", "Tôi có thể nói vài câu không?"],
      ["A", "当然，请说。", "Dāngrán, qǐng shuō.", "Đương nhiên, mời anh nói."],
      ["B", "我觉得这个目标有点儿高，时间太短了。", "Wǒ juéde zhè ge mùbiāo yǒudiǎnr gāo, shíjiān tài duǎn le.", "Tôi thấy mục tiêu này hơi cao, thời gian quá ngắn."],
      ["A", "您有什么建议？", "Nín yǒu shénme jiànyì?", "Anh có đề xuất gì?"],
      ["B", "我建议把时间改成两个月。", "Wǒ jiànyì bǎ shíjiān gǎi chéng liǎng ge yuè.", "Tôi đề nghị đổi thời gian thành hai tháng."],
      ["A", "好，我同意。大家有别的意见吗？", "Hǎo, wǒ tóngyì. Dàjiā yǒu biéde yìjiàn ma?", "Được, tôi đồng ý. Mọi người có ý kiến khác không?"],
      ["B", "没有了，就这样决定吧。", "Méiyǒu le, jiù zhèyàng juédìng ba.", "Không có, cứ quyết như vậy đi."]
    ]
  },
  drills: [
    ["我可以说几句吗？", "Wǒ kěyǐ shuō jǐ jù ma?", "Tôi nói vài câu được không?"],
    ["我同意您的意见。", "Wǒ tóngyì nín de yìjiàn.", "Tôi đồng ý ý kiến của ngài."],
    ["我有一个建议。", "Wǒ yǒu yí ge jiànyì.", "Tôi có một đề xuất."],
    ["开会之前请看报告。", "Kāihuì zhīqián qǐng kàn bàogào.", "Trước khi họp xin xem báo cáo."],
    ["就这样决定吧。", "Jiù zhèyàng juédìng ba.", "Cứ quyết như vậy đi."]
  ]
},

{
  d: 80, week: 12, theme: "Công sở & thương mại",
  title: "Email & tin nhắn công việc",
  goal: "Viết và đọc tin nhắn công việc ngắn.",
  tip: "Tin nhắn WeChat công việc thường ngắn gọn. Mở đầu bằng 您好 + tên, kết bằng 谢谢 hoặc 辛苦了.",
  vocab: [
    ["发", "fā", "gửi (tin, mail)"],
    ["收到", "shōudào", "nhận được"],
    ["回复", "huífù", "trả lời, phản hồi"],
    ["附件", "fùjiàn", "tệp đính kèm"],
    ["文件", "wénjiàn", "tài liệu"],
    ["确认", "quèrèn", "xác nhận"],
    ["通知", "tōngzhī", "thông báo"],
    ["请假", "qǐngjià", "xin nghỉ phép"],
    ["出差", "chūchāi", "công tác"],
    ["下周", "xià zhōu", "tuần sau"],
    ["尽快", "jǐnkuài", "sớm nhất có thể"],
    ["方便的话", "fāngbiàn dehuà", "nếu tiện"]
  ],
  grammar: [
    {
      p: "Khung tin nhắn công việc",
      e: "1) 您好，我是… 2) 关于…（về việc gì) 3) 请…（yêu cầu) 4) 谢谢！",
      ex: [
        ["王经理您好，我是越南公司的阿山。", "Wáng jīnglǐ nín hǎo, wǒ shì Yuènán gōngsī de Ā Shān.", "Chào giám đốc Vương, tôi là A Sơn của công ty Việt Nam."],
        ["请您确认一下，谢谢！", "Qǐng nín quèrèn yíxià, xièxie!", "Xin ngài xác nhận giúp, cảm ơn!"]
      ]
    },
    {
      p: "关于… – về việc…",
      e: "Mở đầu chủ đề: 关于下周的会议 (về cuộc họp tuần sau).",
      ex: [
        ["关于下周的会议，我有一个问题。", "Guānyú xià zhōu de huìyì, wǒ yǒu yí ge wèntí.", "Về cuộc họp tuần sau, tôi có một câu hỏi."]
      ]
    }
  ],
  dialogue: {
    title: "Trao đổi qua WeChat",
    lines: [
      ["A", "王经理您好，我是阿山。", "Wáng jīnglǐ nín hǎo, wǒ shì Ā Shān.", "Chào giám đốc Vương, tôi là A Sơn."],
      ["B", "你好，有什么事吗？", "Nǐ hǎo, yǒu shénme shì ma?", "Chào anh, có việc gì không?"],
      ["A", "关于下周的会议，我已经把文件发给您了，请查收。", "Guānyú xià zhōu de huìyì, wǒ yǐjīng bǎ wénjiàn fā gěi nín le, qǐng cháshōu.", "Về cuộc họp tuần sau, tôi đã gửi tài liệu cho ngài rồi, xin kiểm tra."],
      ["B", "收到了，谢谢。会议时间确认了吗？", "Shōudào le, xièxie. Huìyì shíjiān quèrèn le ma?", "Nhận được rồi, cảm ơn. Thời gian họp xác nhận chưa?"],
      ["A", "下周三上午十点，方便吗？", "Xià zhōu sān shàngwǔ shí diǎn, fāngbiàn ma?", "Sáng thứ Tư tuần sau 10 giờ, tiện không ạ?"],
      ["B", "那天我要出差。改成星期四可以吗？", "Nà tiān wǒ yào chūchāi. Gǎi chéng xīngqīsì kěyǐ ma?", "Hôm đó tôi đi công tác. Đổi sang thứ Năm được không?"],
      ["A", "没问题，我马上通知大家。", "Méi wèntí, wǒ mǎshàng tōngzhī dàjiā.", "Không vấn đề, tôi thông báo mọi người ngay."],
      ["B", "好，辛苦了！", "Hǎo, xīnkǔ le!", "Được, vất vả rồi!"]
    ]
  },
  drills: [
    ["我已经发给您了。", "Wǒ yǐjīng fā gěi nín le.", "Tôi đã gửi cho ngài rồi."],
    ["请查收。", "Qǐng cháshōu.", "Xin kiểm tra."],
    ["收到了，谢谢。", "Shōudào le, xièxie.", "Nhận được rồi, cảm ơn."],
    ["关于下周的会议…", "Guānyú xià zhōu de huìyì…", "Về cuộc họp tuần sau…"],
    ["我要请假。", "Wǒ yào qǐngjià.", "Tôi muốn xin nghỉ phép."]
  ]
},

{
  d: 81, week: 12, theme: "Công sở & thương mại",
  title: "Đàm phán giá & đơn hàng",
  goal: "Thương lượng giá, số lượng, thời gian giao.",
  tip: "Trong đàm phán, câu 我们再商量一下 (chúng ta bàn thêm) giúp bạn có thời gian mà không phải từ chối thẳng.",
  vocab: [
    ["价格", "jiàgé", "giá cả"],
    ["数量", "shùliàng", "số lượng"],
    ["订单", "dìngdān", "đơn hàng"],
    ["质量", "zhìliàng", "chất lượng"],
    ["样品", "yàngpǐn", "hàng mẫu"],
    ["交货", "jiāohuò", "giao hàng"],
    ["付款", "fùkuǎn", "thanh toán"],
    ["优惠", "yōuhuì", "ưu đãi"],
    ["商量", "shāngliang", "bàn bạc"],
    ["合同", "hétong", "hợp đồng"],
    ["签", "qiān", "ký"],
    ["条件", "tiáojiàn", "điều kiện"],
    ["降价", "jiàngjià", "giảm giá"],
    ["批发", "pīfā", "bán sỉ"]
  ],
  grammar: [
    {
      p: "如果…就… – nếu… thì… (điều kiện đàm phán)",
      e: "如果我们买得多，价格可以便宜吗？ — công thức mặc cả chuyên nghiệp.",
      ex: [
        ["如果我们订一千个，价格可以优惠吗？", "Rúguǒ wǒmen dìng yìqiān ge, jiàgé kěyǐ yōuhuì ma?", "Nếu chúng tôi đặt 1000 cái, giá có ưu đãi không?"]
      ]
    },
    {
      p: "…的话，我们可以…",
      e: "Đưa ra nhượng bộ có điều kiện.",
      ex: [
        ["数量多的话，我们可以降百分之五。", "Shùliàng duō dehuà, wǒmen kěyǐ jiàng bǎi fēn zhī wǔ.", "Nếu số lượng nhiều, chúng tôi có thể giảm 5%."]
      ]
    }
  ],
  dialogue: {
    title: "Đàm phán đơn hàng",
    lines: [
      ["A", "我们对你们的产品很感兴趣。价格怎么样？", "Wǒmen duì nǐmen de chǎnpǐn hěn gǎn xìngqù. Jiàgé zěnmeyàng?", "Chúng tôi rất quan tâm đến sản phẩm của các anh. Giá thế nào?"],
      ["B", "一个二十块，质量非常好。", "Yí ge èrshí kuài, zhìliàng fēicháng hǎo.", "20 tệ một cái, chất lượng rất tốt."],
      ["A", "如果我们订一千个，可以优惠吗？", "Rúguǒ wǒmen dìng yìqiān ge, kěyǐ yōuhuì ma?", "Nếu chúng tôi đặt 1000 cái, có ưu đãi không?"],
      ["B", "数量多的话，可以给您十八块。", "Shùliàng duō dehuà, kěyǐ gěi nín shíbā kuài.", "Nếu số lượng nhiều, có thể để anh 18 tệ."],
      ["A", "十五块怎么样？我们是长期合作。", "Shíwǔ kuài zěnmeyàng? Wǒmen shì chángqī hézuò.", "15 tệ thế nào? Chúng ta hợp tác lâu dài mà."],
      ["B", "十五太低了。十七块，这是最好的价格。", "Shíwǔ tài dī le. Shíqī kuài, zhè shì zuì hǎo de jiàgé.", "15 thấp quá. 17 tệ, đây là giá tốt nhất."],
      ["A", "好，我们再商量一下。交货要多长时间？", "Hǎo, wǒmen zài shāngliang yíxià. Jiāohuò yào duō cháng shíjiān?", "Được, chúng tôi bàn thêm. Giao hàng mất bao lâu?"],
      ["B", "签合同以后三个星期。", "Qiān hétong yǐhòu sān ge xīngqī.", "Sau khi ký hợp đồng ba tuần."]
    ]
  },
  drills: [
    ["价格怎么样？", "Jiàgé zěnmeyàng?", "Giá thế nào?"],
    ["可以优惠吗？", "Kěyǐ yōuhuì ma?", "Có ưu đãi không?"],
    ["我们再商量一下。", "Wǒmen zài shāngliang yíxià.", "Chúng ta bàn thêm chút."],
    ["交货要多长时间？", "Jiāohuò yào duō cháng shíjiān?", "Giao hàng mất bao lâu?"],
    ["我们可以签合同了。", "Wǒmen kěyǐ qiān hétong le.", "Chúng ta có thể ký hợp đồng rồi."]
  ]
},

{
  d: 82, week: 12, theme: "Công sở & thương mại",
  title: "Xin lỗi & giữ thể diện",
  goal: "Nhận lỗi và sửa sai đúng cách trong công việc.",
  tip: "Văn hóa 面子 (thể diện): đừng chỉ trích ai trước mặt người khác. Nói riêng, dùng 'chúng ta' thay vì 'bạn'.",
  vocab: [
    ["抱歉", "bàoqiàn", "xin lỗi (trang trọng)"],
    ["我的错", "wǒ de cuò", "lỗi của tôi"],
    ["误会", "wùhuì", "hiểu lầm"],
    ["解释", "jiěshì", "giải thích"],
    ["原谅", "yuánliàng", "tha thứ"],
    ["改进", "gǎijìn", "cải thiện"],
    ["注意", "zhùyì", "chú ý"],
    ["下次", "xiàcì", "lần sau"],
    ["保证", "bǎozhèng", "đảm bảo"],
    ["面子", "miànzi", "thể diện"],
    ["理解", "lǐjiě", "hiểu, thông cảm"],
    ["责任", "zérèn", "trách nhiệm"]
  ],
  grammar: [
    {
      p: "Khung xin lỗi 3 bước",
      e: "1) 非常抱歉 2) 这是我的错/是我们的责任 3) 我保证下次不会了 — dùng nguyên khung này trong công việc.",
      ex: [
        ["非常抱歉，这是我的错。", "Fēicháng bàoqiàn, zhè shì wǒ de cuò.", "Vô cùng xin lỗi, đây là lỗi của tôi."],
        ["我保证下次不会了。", "Wǒ bǎozhèng xiàcì bú huì le.", "Tôi đảm bảo lần sau sẽ không như vậy."]
      ]
    },
    {
      p: "可能有点误会 – có lẽ có chút hiểu lầm",
      e: "Cách nói giữ thể diện cho cả hai bên khi có bất đồng.",
      ex: [
        ["我想我们可能有点儿误会。", "Wǒ xiǎng wǒmen kěnéng yǒudiǎnr wùhuì.", "Tôi nghĩ chúng ta có lẽ hơi hiểu lầm."]
      ]
    }
  ],
  dialogue: {
    title: "Xử lý sai sót",
    lines: [
      ["A", "小阮，这个报告的数字不对。", "Xiǎo Ruǎn, zhè ge bàogào de shùzì bú duì.", "Tiểu Nguyễn, con số trong báo cáo này không đúng."],
      ["B", "非常抱歉，是我的错。我马上改。", "Fēicháng bàoqiàn, shì wǒ de cuò. Wǒ mǎshàng gǎi.", "Vô cùng xin lỗi, là lỗi của tôi. Tôi sửa ngay."],
      ["A", "没关系，谁都会犯错。什么时候能给我？", "Méi guānxi, shéi dōu huì fàncuò. Shénme shíhou néng gěi wǒ?", "Không sao, ai cũng có lúc sai. Khi nào đưa tôi được?"],
      ["B", "今天下午五点以前。", "Jīntiān xiàwǔ wǔ diǎn yǐqián.", "Trước 5 giờ chiều nay."],
      ["A", "好。下次请再检查一遍。", "Hǎo. Xiàcì qǐng zài jiǎnchá yí biàn.", "Được. Lần sau nhớ kiểm tra lại một lần."],
      ["B", "我明白了，我保证下次不会了。谢谢您的理解。", "Wǒ míngbai le, wǒ bǎozhèng xiàcì bú huì le. Xièxie nín de lǐjiě.", "Tôi hiểu rồi, tôi đảm bảo lần sau không thế nữa. Cảm ơn ngài đã thông cảm."]
    ]
  },
  drills: [
    ["非常抱歉。", "Fēicháng bàoqiàn.", "Vô cùng xin lỗi."],
    ["是我的错，我马上改。", "Shì wǒ de cuò, wǒ mǎshàng gǎi.", "Là lỗi của tôi, tôi sửa ngay."],
    ["可能有点儿误会。", "Kěnéng yǒudiǎnr wùhuì.", "Có lẽ hơi hiểu lầm."],
    ["我保证下次不会了。", "Wǒ bǎozhèng xiàcì bú huì le.", "Tôi đảm bảo lần sau không thế."],
    ["谢谢您的理解。", "Xièxie nín de lǐjiě.", "Cảm ơn ngài đã thông cảm."]
  ]
},

{
  d: 83, week: 12, theme: "Công sở & thương mại",
  title: "Lễ nghi & quà tặng",
  goal: "Ứng xử trong tiệc, chúc rượu, tặng quà.",
  tip: "Trên bàn tiệc: 干杯 (cạn ly) là lời chúc phổ biến nhất. Nếu không uống rượu, nói 我以茶代酒 (tôi lấy trà thay rượu) — hoàn toàn được chấp nhận.",
  vocab: [
    ["干杯", "gānbēi", "cạn ly"],
    ["敬酒", "jìngjiǔ", "mời rượu"],
    ["以茶代酒", "yǐ chá dài jiǔ", "lấy trà thay rượu"],
    ["祝", "zhù", "chúc"],
    ["健康", "jiànkāng", "sức khỏe"],
    ["顺利", "shùnlì", "thuận lợi"],
    ["发财", "fācái", "phát tài"],
    ["礼物", "lǐwù", "quà"],
    ["收下", "shōuxià", "nhận lấy"],
    ["客气", "kèqi", "khách sáo"],
    ["春节", "Chūnjié", "Tết Nguyên đán"],
    ["中秋节", "Zhōngqiūjié", "Tết Trung thu"],
    ["新年快乐", "xīnnián kuàilè", "chúc mừng năm mới"],
    ["恭喜", "gōngxǐ", "chúc mừng"]
  ],
  grammar: [
    {
      p: "祝 + đối tượng + điều chúc (bộ câu chúc)",
      e: "祝您身体健康！祝您工作顺利！祝您生意兴隆！— học thuộc để dùng trong mọi dịp.",
      ex: [
        ["祝您身体健康，工作顺利！", "Zhù nín shēntǐ jiànkāng, gōngzuò shùnlì!", "Chúc ngài sức khỏe dồi dào, công việc thuận lợi!"],
        ["恭喜发财！", "Gōngxǐ fācái!", "Chúc phát tài!"]
      ]
    },
    {
      p: "Nghi thức tặng quà",
      e: "Người tặng: 一点儿小意思，请收下 (chút quà mọn, xin nhận cho). Người nhận: 您太客气了 (ngài khách sáo quá).",
      ex: [
        ["一点儿小意思，请收下。", "Yìdiǎnr xiǎo yìsi, qǐng shōuxià.", "Chút quà mọn, xin nhận cho."],
        ["您太客气了，谢谢！", "Nín tài kèqi le, xièxie!", "Ngài khách sáo quá, cảm ơn!"]
      ]
    }
  ],
  dialogue: {
    title: "Bữa tiệc công việc",
    lines: [
      ["A", "王经理，这是我们从越南带来的茶，一点儿小意思。", "Wáng jīnglǐ, zhè shì wǒmen cóng Yuènán dài lái de chá, yìdiǎnr xiǎo yìsi.", "Giám đốc Vương, đây là trà chúng tôi mang từ Việt Nam sang, chút quà mọn."],
      ["B", "您太客气了！谢谢，我很喜欢。", "Nín tài kèqi le! Xièxie, wǒ hěn xǐhuan.", "Anh khách sáo quá! Cảm ơn, tôi rất thích."],
      ["A", "希望我们合作顺利。", "Xīwàng wǒmen hézuò shùnlì.", "Mong hợp tác của chúng ta thuận lợi."],
      ["B", "来，我敬您一杯！干杯！", "Lái, wǒ jìng nín yì bēi! Gānbēi!", "Nào, tôi mời anh một ly! Cạn ly!"],
      ["A", "对不起，我不能喝酒，我以茶代酒，可以吗？", "Duìbuqǐ, wǒ bù néng hē jiǔ, wǒ yǐ chá dài jiǔ, kěyǐ ma?", "Xin lỗi, tôi không uống được rượu, tôi lấy trà thay rượu được không?"],
      ["B", "当然可以！心意最重要。", "Dāngrán kěyǐ! Xīnyì zuì zhòngyào.", "Đương nhiên được! Tấm lòng là quan trọng nhất."],
      ["A", "祝您身体健康，生意兴隆！", "Zhù nín shēntǐ jiànkāng, shēngyi xīnglóng!", "Chúc ngài sức khỏe dồi dào, làm ăn phát đạt!"],
      ["B", "谢谢！也祝您一切顺利！", "Xièxie! Yě zhù nín yíqiè shùnlì!", "Cảm ơn! Cũng chúc anh mọi việc thuận lợi!"]
    ]
  },
  drills: [
    ["干杯！", "Gānbēi!", "Cạn ly!"],
    ["我以茶代酒。", "Wǒ yǐ chá dài jiǔ.", "Tôi lấy trà thay rượu."],
    ["一点儿小意思，请收下。", "Yìdiǎnr xiǎo yìsi, qǐng shōuxià.", "Chút quà mọn, xin nhận cho."],
    ["您太客气了！", "Nín tài kèqi le!", "Ngài khách sáo quá!"],
    ["祝您身体健康！", "Zhù nín shēntǐ jiànkāng!", "Chúc ngài sức khỏe!"]
  ]
},

{
  d: 84, week: 12, theme: "Công sở & thương mại",
  title: "TỔNG ÔN TUẦN 12",
  goal: "Chạy trọn một buổi làm việc với đối tác Trung Quốc.",
  tip: "Bạn đã đi được 93% chặng đường. Tuần cuối sẽ không có từ mới — chỉ luyện nói cho trôi chảy.",
  review: [78, 79, 80, 81, 82, 83],
  vocab: [
    ["顺利", "shùnlì", "thuận lợi"],
    ["期待", "qīdài", "mong đợi"],
    ["保持联系", "bǎochí liánxì", "giữ liên lạc"],
    ["一路平安", "yílù píng'ān", "thượng lộ bình an"],
    ["下次见", "xiàcì jiàn", "hẹn gặp lần sau"]
  ],
  grammar: [
    {
      p: "Bộ câu kết thúc cuộc gặp",
      e: "今天谢谢您 / 期待下次合作 / 我们保持联系 / 一路平安！",
      ex: [
        ["期待跟您下次合作。", "Qīdài gēn nín xiàcì hézuò.", "Mong được hợp tác với ngài lần sau."]
      ]
    }
  ],
  dialogue: {
    title: "Một ngày làm việc với đối tác",
    lines: [
      ["A", "王经理，早上好！路上辛苦了。", "Wáng jīnglǐ, zǎoshang hǎo! Lùshang xīnkǔ le.", "Giám đốc Vương, chào buổi sáng! Đi đường vất vả rồi."],
      ["B", "早上好！这里的天气很不错。", "Zǎoshang hǎo! Zhèlǐ de tiānqì hěn búcuò.", "Chào buổi sáng! Thời tiết ở đây khá đẹp."],
      ["A", "我们先喝杯茶，十点开始开会，好吗？", "Wǒmen xiān hē bēi chá, shí diǎn kāishǐ kāihuì, hǎo ma?", "Chúng ta uống chén trà trước, 10 giờ bắt đầu họp nhé?"],
      ["B", "好的。关于价格，我们今天可以决定吗？", "Hǎo de. Guānyú jiàgé, wǒmen jīntiān kěyǐ juédìng ma?", "Được. Về giá cả, hôm nay chúng ta quyết được không?"],
      ["A", "可以。如果订一千个，我们给您十七块一个。", "Kěyǐ. Rúguǒ dìng yìqiān ge, wǒmen gěi nín shíqī kuài yí ge.", "Được. Nếu đặt 1000 cái, chúng tôi để ngài 17 tệ một cái."],
      ["B", "我同意。交货要多长时间？", "Wǒ tóngyì. Jiāohuò yào duō cháng shíjiān?", "Tôi đồng ý. Giao hàng mất bao lâu?"],
      ["A", "签合同以后三个星期。有问题我马上通知您。", "Qiān hétong yǐhòu sān ge xīngqī. Yǒu wèntí wǒ mǎshàng tōngzhī nín.", "Sau khi ký hợp đồng ba tuần. Có vấn đề tôi báo ngài ngay."],
      ["B", "太好了。晚上我请您吃饭。", "Tài hǎo le. Wǎnshang wǒ qǐng nín chīfàn.", "Tuyệt quá. Tối nay tôi mời ngài ăn cơm."],
      ["A", "您太客气了！那我们晚上见。", "Nín tài kèqi le! Nà wǒmen wǎnshang jiàn.", "Ngài khách sáo quá! Vậy tối gặp."],
      ["B", "期待跟您长期合作。保持联系！", "Qīdài gēn nín chángqī hézuò. Bǎochí liánxì!", "Mong hợp tác lâu dài với ngài. Giữ liên lạc nhé!"]
    ]
  },
  drills: [
    ["路上辛苦了。", "Lùshang xīnkǔ le.", "Đi đường vất vả rồi."],
    ["关于价格，我们可以商量。", "Guānyú jiàgé, wǒmen kěyǐ shāngliang.", "Về giá cả, chúng ta có thể bàn."],
    ["我同意。", "Wǒ tóngyì.", "Tôi đồng ý."],
    ["期待跟您合作。", "Qīdài gēn nín hézuò.", "Mong được hợp tác với ngài."],
    ["保持联系！", "Bǎochí liánxì!", "Giữ liên lạc nhé!"]
  ]
}

);
