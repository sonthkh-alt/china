/* Tuần 5–6 · Ngày 29–42 · Mua sắm, tiền bạc + Địa điểm, phương hướng, giao thông */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

{
  d: 29, week: 5, theme: "Mua sắm",
  title: "Số lớn & tiền tệ",
  goal: "Đếm đến hàng vạn; hỏi giá.",
  tip: "Tiếng Trung có đơn vị 万 (vạn = 10.000) mà tiếng Anh không có — giống hệt tiếng Việt. 100.000 = 十万 (mười vạn).",
  vocab: [
    ["百", "bǎi", "trăm"],
    ["千", "qiān", "nghìn"],
    ["万", "wàn", "vạn (10.000)"],
    ["钱", "qián", "tiền"],
    ["块", "kuài", "đồng (khẩu ngữ)"],
    ["元", "yuán", "nguyên (viết)"],
    ["毛", "máo", "hào (0,1 tệ)"],
    ["多少钱", "duōshao qián", "bao nhiêu tiền"],
    ["贵", "guì", "đắt"],
    ["便宜", "piányi", "rẻ"]
  ],
  grammar: [
    {
      p: "Đọc số lớn",
      e: "125 = 一百二十五. 1000 = 一千. 10.000 = 一万. Số 0 ở giữa phải đọc 零: 105 = 一百零五.",
      ex: [
        ["三百五十块", "sānbǎi wǔshí kuài", "350 tệ"],
        ["一千零八", "yìqiān líng bā", "1008"]
      ]
    },
    {
      p: "…多少钱？ – hỏi giá",
      e: "Cấu trúc: [Chỉ định + lượng từ + danh từ] + 多少钱？",
      ex: [
        ["这个多少钱？", "Zhè ge duōshao qián?", "Cái này bao nhiêu tiền?"],
        ["一斤苹果多少钱？", "Yì jīn píngguǒ duōshao qián?", "Một cân táo bao nhiêu tiền?"]
      ]
    }
  ],
  dialogue: {
    title: "Hỏi giá ở chợ",
    lines: [
      ["A", "老板，这个多少钱？", "Lǎobǎn, zhè ge duōshao qián?", "Ông chủ ơi, cái này bao nhiêu?"],
      ["B", "三十五块。", "Sānshíwǔ kuài.", "35 tệ."],
      ["A", "有点儿贵。", "Yǒudiǎnr guì.", "Hơi đắt."],
      ["B", "这个很好，不贵。", "Zhè ge hěn hǎo, bú guì.", "Cái này tốt lắm, không đắt đâu."],
      ["A", "那个呢？便宜吗？", "Nà ge ne? Piányi ma?", "Còn cái kia? Rẻ không?"],
      ["B", "那个二十块。", "Nà ge èrshí kuài.", "Cái kia 20 tệ."]
    ]
  },
  drills: [
    ["这个多少钱？", "Zhè ge duōshao qián?", "Cái này bao nhiêu tiền?"],
    ["三十五块。", "Sānshíwǔ kuài.", "35 tệ."],
    ["太贵了！", "Tài guì le!", "Đắt quá!"],
    ["有便宜一点儿的吗？", "Yǒu piányi yìdiǎnr de ma?", "Có cái nào rẻ hơn không?"],
    ["一共多少钱？", "Yígòng duōshao qián?", "Tổng cộng bao nhiêu?"]
  ]
},

{
  d: 30, week: 5, theme: "Mua sắm",
  title: "Màu sắc & quần áo",
  goal: "Mô tả món đồ theo màu, chọn size.",
  tip: "Màu sắc thường thêm 色 khi làm danh từ: 红色 (màu đỏ). Khi làm định ngữ thì thêm 的: 红色的衣服.",
  vocab: [
    ["颜色", "yánsè", "màu sắc"],
    ["红色", "hóngsè", "màu đỏ"],
    ["白色", "báisè", "màu trắng"],
    ["黑色", "hēisè", "màu đen"],
    ["蓝色", "lánsè", "màu xanh dương"],
    ["绿色", "lǜsè", "màu xanh lá"],
    ["黄色", "huángsè", "màu vàng"],
    ["衣服", "yīfu", "quần áo"],
    ["裤子", "kùzi", "quần"],
    ["鞋", "xié", "giày"],
    ["件", "jiàn", "(lượng từ áo, việc)"],
    ["条", "tiáo", "(lượng từ quần, cá, đường)"],
    ["双", "shuāng", "đôi"],
    ["号", "hào", "cỡ, size"]
  ],
  grammar: [
    {
      p: "Định ngữ + 的 + Danh từ",
      e: "Mọi thứ mô tả danh từ đều đứng TRƯỚC nó, nối bằng 的: 红色的衣服 = áo màu đỏ (đỏ + của + áo). Ngược hoàn toàn tiếng Việt.",
      ex: [
        ["我要红色的。", "Wǒ yào hóngsè de.", "Tôi muốn cái màu đỏ."],
        ["这件白色的衣服很好看。", "Zhè jiàn báisè de yīfu hěn hǎokàn.", "Cái áo trắng này rất đẹp."]
      ]
    },
    {
      p: "Lượng từ chuyên dụng",
      e: "件 cho áo, 条 cho quần/váy/cá, 双 cho giày/tất. Dùng đúng nghe rất bản xứ.",
      ex: [
        ["一件衣服", "yí jiàn yīfu", "một cái áo"],
        ["两条裤子", "liǎng tiáo kùzi", "hai cái quần"],
        ["一双鞋", "yì shuāng xié", "một đôi giày"]
      ]
    }
  ],
  dialogue: {
    title: "Mua áo",
    lines: [
      ["NV", "您好，您要什么？", "Nín hǎo, nín yào shénme?", "Chào anh, anh cần gì ạ?"],
      ["A", "我想买一件衣服。", "Wǒ xiǎng mǎi yí jiàn yīfu.", "Tôi muốn mua một cái áo."],
      ["NV", "您喜欢什么颜色？", "Nín xǐhuan shénme yánsè?", "Anh thích màu gì?"],
      ["A", "我喜欢蓝色的。有大号吗？", "Wǒ xǐhuan lánsè de. Yǒu dà hào ma?", "Tôi thích màu xanh. Có cỡ lớn không?"],
      ["NV", "有，您试试吧。", "Yǒu, nín shìshi ba.", "Có, anh thử xem."],
      ["A", "很好，我要这件。", "Hěn hǎo, wǒ yào zhè jiàn.", "Rất tốt, tôi lấy cái này."]
    ]
  },
  drills: [
    ["我想买一件衣服。", "Wǒ xiǎng mǎi yí jiàn yīfu.", "Tôi muốn mua một cái áo."],
    ["你喜欢什么颜色？", "Nǐ xǐhuan shénme yánsè?", "Bạn thích màu gì?"],
    ["我要红色的。", "Wǒ yào hóngsè de.", "Tôi muốn cái màu đỏ."],
    ["有大号吗？", "Yǒu dà hào ma?", "Có cỡ lớn không?"],
    ["我要这双鞋。", "Wǒ yào zhè shuāng xié.", "Tôi lấy đôi giày này."]
  ]
},

{
  d: 31, week: 5, theme: "Mua sắm",
  title: "Mặc cả & thanh toán",
  goal: "Trả giá và thanh toán trôi chảy.",
  tip: "Ở chợ Trung Quốc, mặc cả là chuyện bình thường: bắt đầu bằng 50–60% giá hỏi. Câu thần chú: 便宜一点儿吧！",
  vocab: [
    ["便宜一点儿", "piányi yìdiǎnr", "rẻ hơn chút"],
    ["打折", "dǎzhé", "giảm giá"],
    ["付", "fù", "trả (tiền)"],
    ["找钱", "zhǎo qián", "thối tiền"],
    ["微信", "Wēixìn", "WeChat"],
    ["支付宝", "Zhīfùbǎo", "Alipay"],
    ["扫码", "sǎo mǎ", "quét mã"],
    ["刷卡", "shuākǎ", "quẹt thẻ"],
    ["收据", "shōujù", "hóa đơn"],
    ["行不行", "xíng bu xíng", "được không"]
  ],
  grammar: [
    {
      p: "Tính từ + 一点儿 = hơn một chút",
      e: "So sánh không cần đối tượng: 便宜一点儿 (rẻ hơn chút), 快一点儿 (nhanh hơn chút). Cực kỳ hay dùng.",
      ex: [
        ["便宜一点儿吧！", "Piányi yìdiǎnr ba!", "Rẻ hơn chút đi!"],
        ["大一点儿的有吗？", "Dà yìdiǎnr de yǒu ma?", "Có cái to hơn chút không?"]
      ]
    },
    {
      p: "…行不行？ – được không?",
      e: "Cách chốt deal khi mặc cả. Ngắn, hiệu quả.",
      ex: [
        ["八十块，行不行？", "Bāshí kuài, xíng bu xíng?", "80 tệ, được không?"],
        ["行！", "Xíng!", "Được!"]
      ]
    }
  ],
  dialogue: {
    title: "Mặc cả ở chợ",
    lines: [
      ["A", "这个多少钱？", "Zhè ge duōshao qián?", "Cái này bao nhiêu?"],
      ["B", "一百二十块。", "Yìbǎi èrshí kuài.", "120 tệ."],
      ["A", "太贵了！便宜一点儿吧。", "Tài guì le! Piányi yìdiǎnr ba.", "Đắt quá! Rẻ hơn chút đi."],
      ["B", "一百块，怎么样？", "Yìbǎi kuài, zěnmeyàng?", "100 tệ, thế nào?"],
      ["A", "八十块，行不行？", "Bāshí kuài, xíng bu xíng?", "80 tệ, được không?"],
      ["B", "好吧，九十块，不能再便宜了。", "Hǎo ba, jiǔshí kuài, bù néng zài piányi le.", "Thôi được, 90 tệ, không rẻ hơn được nữa."],
      ["A", "行，我扫码付钱。", "Xíng, wǒ sǎo mǎ fù qián.", "Được, tôi quét mã trả tiền."]
    ]
  },
  drills: [
    ["太贵了！", "Tài guì le!", "Đắt quá!"],
    ["便宜一点儿吧。", "Piányi yìdiǎnr ba.", "Rẻ hơn chút đi."],
    ["八十块，行不行？", "Bāshí kuài, xíng bu xíng?", "80 tệ, được không?"],
    ["我可以刷卡吗？", "Wǒ kěyǐ shuākǎ ma?", "Tôi quẹt thẻ được không?"],
    ["我用微信付。", "Wǒ yòng Wēixìn fù.", "Tôi trả bằng WeChat."]
  ]
},

{
  d: 32, week: 5, theme: "Mua sắm",
  title: "这 / 那 và lượng từ chỉ định",
  goal: "Chỉ chính xác món đồ muốn nói.",
  tip: "这个 / 那个 là hai từ bạn sẽ dùng nhiều nhất khi mua sắm mà không biết tên đồ vật. Chỉ tay + 这个多少钱？ là đủ sống.",
  vocab: [
    ["这个", "zhè ge", "cái này"],
    ["那个", "nà ge", "cái kia"],
    ["哪个", "nǎ ge", "cái nào"],
    ["些", "xiē", "vài, một số"],
    ["这些", "zhèxiē", "những cái này"],
    ["那些", "nàxiē", "những cái kia"],
    ["东西", "dōngxi", "đồ vật, đồ đạc"],
    ["试", "shì", "thử"],
    ["看看", "kànkan", "xem thử"],
    ["别的", "biéde", "cái khác"]
  ],
  grammar: [
    {
      p: "Lặp động từ = làm thử, nhẹ nhàng",
      e: "看看 = xem thử một chút. 试试 = thử xem. Lặp động từ làm câu nghe mềm, thân thiện hơn nhiều.",
      ex: [
        ["我看看。", "Wǒ kànkan.", "Tôi xem chút."],
        ["你试试吧。", "Nǐ shìshi ba.", "Bạn thử xem."]
      ]
    },
    {
      p: "这 + lượng từ + danh từ",
      e: "Không nói 这衣服 mà nói 这件衣服. Lượng từ là bắt buộc giữa từ chỉ định và danh từ.",
      ex: [
        ["这件衣服", "zhè jiàn yīfu", "cái áo này"],
        ["那个人", "nà ge rén", "người kia"]
      ]
    }
  ],
  dialogue: {
    title: "Chọn đồ",
    lines: [
      ["NV", "您要哪个？", "Nín yào nǎ ge?", "Anh muốn cái nào?"],
      ["A", "我看看这个。这个是什么？", "Wǒ kànkan zhè ge. Zhè ge shì shénme?", "Tôi xem cái này chút. Cái này là gì?"],
      ["NV", "这是中国茶，很有名。", "Zhè shì Zhōngguó chá, hěn yǒumíng.", "Đây là trà Trung Quốc, rất nổi tiếng."],
      ["A", "我可以试试吗？", "Wǒ kěyǐ shìshi ma?", "Tôi thử được không?"],
      ["NV", "当然可以。", "Dāngrán kěyǐ.", "Đương nhiên được."],
      ["A", "很好喝！我要这些。", "Hěn hǎohē! Wǒ yào zhèxiē.", "Ngon quá! Tôi lấy những cái này."]
    ]
  },
  drills: [
    ["这个是什么？", "Zhè ge shì shénme?", "Cái này là gì?"],
    ["我看看。", "Wǒ kànkan.", "Tôi xem chút."],
    ["我可以试试吗？", "Wǒ kěyǐ shìshi ma?", "Tôi thử được không?"],
    ["你要哪个？", "Nǐ yào nǎ ge?", "Bạn muốn cái nào?"],
    ["有别的吗？", "Yǒu biéde ma?", "Có cái khác không?"]
  ]
},

{
  d: 33, week: 5, theme: "Mua sắm",
  title: "Siêu thị & đồ dùng hàng ngày",
  goal: "Mua đồ ở siêu thị, hỏi vị trí hàng hóa.",
  tip: "在哪儿？ dùng hỏi vị trí đồ vật lẫn địa điểm. Đây là câu hỏi bạn sẽ dùng mỗi ngày ở nước ngoài.",
  vocab: [
    ["超市", "chāoshì", "siêu thị"],
    ["商店", "shāngdiàn", "cửa hàng"],
    ["市场", "shìchǎng", "chợ"],
    ["面包", "miànbāo", "bánh mì"],
    ["水", "shuǐ", "nước"],
    ["苹果", "píngguǒ", "táo"],
    ["香蕉", "xiāngjiāo", "chuối"],
    ["盐", "yán", "muối"],
    ["糖", "táng", "đường"],
    ["纸", "zhǐ", "giấy"],
    ["斤", "jīn", "cân (500g)"],
    ["袋", "dài", "túi"]
  ],
  grammar: [
    {
      p: "…在哪儿？ – hỏi vị trí",
      e: "Danh từ + 在哪儿？ Trả lời: 在 + vị trí.",
      ex: [
        ["水果在哪儿？", "Shuǐguǒ zài nǎr?", "Trái cây ở đâu?"],
        ["在那边。", "Zài nàbiān.", "Ở đằng kia."]
      ]
    },
    {
      p: "Số + đơn vị đo",
      e: "斤 là đơn vị phổ biến nhất ở chợ Trung Quốc (500g). 一斤苹果 = nửa cân táo theo cách hiểu quốc tế.",
      ex: [
        ["两斤苹果", "liǎng jīn píngguǒ", "hai cân (1kg) táo"],
        ["一瓶水", "yì píng shuǐ", "một chai nước"]
      ]
    }
  ],
  dialogue: {
    title: "Trong siêu thị",
    lines: [
      ["A", "请问，水果在哪儿？", "Qǐngwèn, shuǐguǒ zài nǎr?", "Xin hỏi, trái cây ở đâu?"],
      ["NV", "在那边，二楼。", "Zài nàbiān, èr lóu.", "Ở đằng kia, tầng hai."],
      ["A", "谢谢。苹果多少钱一斤？", "Xièxie. Píngguǒ duōshao qián yì jīn?", "Cảm ơn. Táo bao nhiêu một cân?"],
      ["NV", "八块一斤。", "Bā kuài yì jīn.", "8 tệ một cân."],
      ["A", "我要两斤，还要一瓶水。", "Wǒ yào liǎng jīn, hái yào yì píng shuǐ.", "Tôi lấy hai cân, còn cần một chai nước."],
      ["NV", "好的，一共十八块。", "Hǎo de, yígòng shíbā kuài.", "Vâng, tổng cộng 18 tệ."]
    ]
  },
  drills: [
    ["请问，水果在哪儿？", "Qǐngwèn, shuǐguǒ zài nǎr?", "Xin hỏi, trái cây ở đâu?"],
    ["苹果多少钱一斤？", "Píngguǒ duōshao qián yì jīn?", "Táo bao nhiêu một cân?"],
    ["我要两斤。", "Wǒ yào liǎng jīn.", "Tôi lấy hai cân."],
    ["还要一瓶水。", "Hái yào yì píng shuǐ.", "Còn cần một chai nước."],
    ["超市在哪儿？", "Chāoshì zài nǎr?", "Siêu thị ở đâu?"]
  ]
},

{
  d: 34, week: 5, theme: "Mua sắm",
  title: "So sánh với 比",
  goal: "So sánh hai vật, hai người.",
  tip: "Công thức: A 比 B + tính từ. TUYỆT ĐỐI không thêm 很: nói 这个比那个贵, không nói 这个比那个很贵.",
  vocab: [
    ["比", "bǐ", "so với, hơn"],
    ["一样", "yíyàng", "giống nhau"],
    ["跟", "gēn", "với, cùng"],
    ["更", "gèng", "càng, hơn nữa"],
    ["最", "zuì", "nhất"],
    ["新", "xīn", "mới"],
    ["旧", "jiù", "cũ"],
    ["长", "cháng", "dài"],
    ["短", "duǎn", "ngắn"],
    ["好用", "hǎoyòng", "dễ dùng, tiện"]
  ],
  grammar: [
    {
      p: "A 比 B + tính từ",
      e: "这个比那个贵 = cái này đắt hơn cái kia. Muốn nói rõ mức chênh: A 比 B + tính từ + số lượng: 贵十块 (đắt hơn 10 tệ).",
      ex: [
        ["这个比那个贵。", "Zhè ge bǐ nà ge guì.", "Cái này đắt hơn cái kia."],
        ["他比我高。", "Tā bǐ wǒ gāo.", "Anh ấy cao hơn tôi."]
      ]
    },
    {
      p: "A 跟 B 一样 + tính từ",
      e: "Diễn tả bằng nhau. Phủ định: A 跟 B 不一样.",
      ex: [
        ["这个跟那个一样贵。", "Zhè ge gēn nà ge yíyàng guì.", "Cái này đắt bằng cái kia."],
        ["我跟他不一样。", "Wǒ gēn tā bù yíyàng.", "Tôi và anh ấy không giống nhau."]
      ]
    },
    {
      p: "最 + tính từ = nhất",
      e: "最好 (tốt nhất), 最贵 (đắt nhất), 最喜欢 (thích nhất).",
      ex: [
        ["我最喜欢这个。", "Wǒ zuì xǐhuan zhè ge.", "Tôi thích cái này nhất."]
      ]
    }
  ],
  dialogue: {
    title: "Chọn điện thoại",
    lines: [
      ["A", "这两个手机，哪个好？", "Zhè liǎng ge shǒujī, nǎ ge hǎo?", "Hai cái điện thoại này, cái nào tốt?"],
      ["NV", "这个比那个新，也更好用。", "Zhè ge bǐ nà ge xīn, yě gèng hǎoyòng.", "Cái này mới hơn cái kia, cũng dễ dùng hơn."],
      ["A", "但是这个比那个贵吗？", "Dànshì zhè ge bǐ nà ge guì ma?", "Nhưng cái này đắt hơn cái kia à?"],
      ["NV", "贵五百块。", "Guì wǔbǎi kuài.", "Đắt hơn 500 tệ."],
      ["A", "我最喜欢这个，我要了。", "Wǒ zuì xǐhuan zhè ge, wǒ yào le.", "Tôi thích cái này nhất, tôi lấy nó."]
    ]
  },
  drills: [
    ["这个比那个贵。", "Zhè ge bǐ nà ge guì.", "Cái này đắt hơn cái kia."],
    ["他比我高。", "Tā bǐ wǒ gāo.", "Anh ấy cao hơn tôi."],
    ["这个跟那个一样。", "Zhè ge gēn nà ge yíyàng.", "Cái này giống cái kia."],
    ["我最喜欢红色的。", "Wǒ zuì xǐhuan hóngsè de.", "Tôi thích cái màu đỏ nhất."],
    ["哪个更好？", "Nǎ ge gèng hǎo?", "Cái nào tốt hơn?"]
  ]
},

{
  d: 35, week: 5, theme: "Mua sắm",
  title: "TỔNG ÔN TUẦN 5",
  goal: "Hoàn thành trọn vẹn một lần đi mua sắm.",
  tip: "Hãy tự đóng vai: bạn vào cửa hàng, hỏi giá, chê đắt, mặc cả, chọn màu, thanh toán. Nói to toàn bộ 6 lượt.",
  review: [29, 30, 31, 32, 33, 34],
  vocab: [
    ["老板", "lǎobǎn", "ông chủ, bà chủ"],
    ["帮我", "bāng wǒ", "giúp tôi"],
    ["包起来", "bāo qǐlái", "gói lại"],
    ["退", "tuì", "trả lại, hoàn"],
    ["换", "huàn", "đổi"]
  ],
  grammar: [
    {
      p: "Ôn 4 câu mua sắm cốt lõi",
      e: "1) 这个多少钱？ 2) 太贵了，便宜一点儿吧 3) 有别的颜色吗？ 4) 我要这个",
      ex: [
        ["我可以换吗？", "Wǒ kěyǐ huàn ma?", "Tôi đổi được không?"]
      ]
    }
  ],
  dialogue: {
    title: "Đi mua giày (kịch bản đầy đủ)",
    lines: [
      ["A", "你好，我想买一双鞋。", "Nǐ hǎo, wǒ xiǎng mǎi yì shuāng xié.", "Chào chị, tôi muốn mua một đôi giày."],
      ["NV", "您要什么颜色的？", "Nín yào shénme yánsè de?", "Anh muốn màu gì ạ?"],
      ["A", "有黑色的吗？我要四十二号。", "Yǒu hēisè de ma? Wǒ yào sìshí'èr hào.", "Có màu đen không? Tôi cỡ 42."],
      ["NV", "有，您试试。", "Yǒu, nín shìshi.", "Có, anh thử xem."],
      ["A", "这双比那双好。多少钱？", "Zhè shuāng bǐ nà shuāng hǎo. Duōshao qián?", "Đôi này tốt hơn đôi kia. Bao nhiêu tiền?"],
      ["NV", "三百八十块。", "Sānbǎi bāshí kuài.", "380 tệ."],
      ["A", "有点儿贵，便宜一点儿吧。", "Yǒudiǎnr guì, piányi yìdiǎnr ba.", "Hơi đắt, rẻ hơn chút đi."],
      ["NV", "三百五，最便宜了。", "Sānbǎi wǔ, zuì piányi le.", "350, rẻ nhất rồi đấy."],
      ["A", "好，我要了。可以扫码吗？", "Hǎo, wǒ yào le. Kěyǐ sǎo mǎ ma?", "Được, tôi lấy. Quét mã được không?"],
      ["NV", "可以，谢谢您！", "Kěyǐ, xièxie nín!", "Được ạ, cảm ơn anh!"]
    ]
  },
  drills: [
    ["我想买一双鞋。", "Wǒ xiǎng mǎi yì shuāng xié.", "Tôi muốn mua một đôi giày."],
    ["有黑色的吗？", "Yǒu hēisè de ma?", "Có màu đen không?"],
    ["这双比那双好。", "Zhè shuāng bǐ nà shuāng hǎo.", "Đôi này tốt hơn đôi kia."],
    ["便宜一点儿吧。", "Piányi yìdiǎnr ba.", "Rẻ hơn chút đi."],
    ["可以扫码吗？", "Kěyǐ sǎo mǎ ma?", "Quét mã được không?"]
  ]
},

{
  d: 36, week: 6, theme: "Đi lại & phương hướng",
  title: "Địa điểm trong thành phố",
  goal: "Gọi tên 12 địa điểm; hỏi đường đến đó.",
  tip: "怎么走？ = đi thế nào? Đây là câu hỏi đường chuẩn nhất, dùng được ở mọi nơi.",
  vocab: [
    ["银行", "yínháng", "ngân hàng"],
    ["医院", "yīyuàn", "bệnh viện"],
    ["车站", "chēzhàn", "bến xe"],
    ["机场", "jīchǎng", "sân bay"],
    ["酒店", "jiǔdiàn", "khách sạn"],
    ["饭馆", "fànguǎn", "quán ăn"],
    ["公园", "gōngyuán", "công viên"],
    ["洗手间", "xǐshǒujiān", "nhà vệ sinh"],
    ["地铁站", "dìtiězhàn", "ga tàu điện ngầm"],
    ["路", "lù", "đường"],
    ["怎么走", "zěnme zǒu", "đi thế nào"],
    ["远", "yuǎn", "xa"],
    ["近", "jìn", "gần"]
  ],
  grammar: [
    {
      p: "…怎么走？ – hỏi đường",
      e: "Địa điểm + 怎么走？ Đây là câu quan trọng nhất khi đi du lịch.",
      ex: [
        ["请问，地铁站怎么走？", "Qǐngwèn, dìtiězhàn zěnme zǒu?", "Xin hỏi, ga tàu điện đi thế nào?"],
        ["洗手间在哪儿？", "Xǐshǒujiān zài nǎr?", "Nhà vệ sinh ở đâu?"]
      ]
    },
    {
      p: "离 – khoảng cách từ… đến…",
      e: "A 离 B 远/近. 我家离公司很近 = nhà tôi gần công ty.",
      ex: [
        ["这儿离机场远吗？", "Zhèr lí jīchǎng yuǎn ma?", "Chỗ này có xa sân bay không?"],
        ["很近，不远。", "Hěn jìn, bù yuǎn.", "Rất gần, không xa."]
      ]
    }
  ],
  dialogue: {
    title: "Hỏi đường",
    lines: [
      ["A", "请问，银行在哪儿？", "Qǐngwèn, yínháng zài nǎr?", "Xin hỏi, ngân hàng ở đâu?"],
      ["B", "就在前面。", "Jiù zài qiánmiàn.", "Ngay phía trước."],
      ["A", "离这儿远吗？", "Lí zhèr yuǎn ma?", "Có xa đây không?"],
      ["B", "不远，走五分钟就到了。", "Bù yuǎn, zǒu wǔ fēnzhōng jiù dào le.", "Không xa, đi bộ 5 phút là tới."],
      ["A", "谢谢您！", "Xièxie nín!", "Cảm ơn anh!"],
      ["B", "不客气。", "Bú kèqi.", "Không có gì."]
    ]
  },
  drills: [
    ["请问，洗手间在哪儿？", "Qǐngwèn, xǐshǒujiān zài nǎr?", "Xin hỏi, nhà vệ sinh ở đâu?"],
    ["地铁站怎么走？", "Dìtiězhàn zěnme zǒu?", "Ga tàu điện đi thế nào?"],
    ["离这儿远吗？", "Lí zhèr yuǎn ma?", "Có xa đây không?"],
    ["不远，很近。", "Bù yuǎn, hěn jìn.", "Không xa, rất gần."],
    ["走五分钟就到了。", "Zǒu wǔ fēnzhōng jiù dào le.", "Đi 5 phút là tới."]
  ]
},

{
  d: 37, week: 6, theme: "Đi lại & phương hướng",
  title: "Từ chỉ phương vị",
  goal: "Chỉ đường bằng trái – phải – thẳng – rẽ.",
  tip: "Từ phương vị luôn có hậu tố 边/面: 前面, 后边, 左边. Đặt SAU danh từ: 银行前面 = phía trước ngân hàng.",
  vocab: [
    ["上边", "shàngbian", "phía trên"],
    ["下边", "xiàbian", "phía dưới"],
    ["前面", "qiánmiàn", "phía trước"],
    ["后面", "hòumiàn", "phía sau"],
    ["左边", "zuǒbian", "bên trái"],
    ["右边", "yòubian", "bên phải"],
    ["里面", "lǐmiàn", "bên trong"],
    ["外面", "wàimiàn", "bên ngoài"],
    ["旁边", "pángbiān", "bên cạnh"],
    ["中间", "zhōngjiān", "ở giữa"],
    ["对面", "duìmiàn", "đối diện"],
    ["拐", "guǎi", "rẽ, quẹo"],
    ["一直", "yìzhí", "thẳng, liên tục"]
  ],
  grammar: [
    {
      p: "Danh từ + từ phương vị",
      e: "Trật tự ngược tiếng Việt: 学校旁边 = bên cạnh trường (trường + bên cạnh).",
      ex: [
        ["银行在医院旁边。", "Yínháng zài yīyuàn pángbiān.", "Ngân hàng ở cạnh bệnh viện."],
        ["书在桌子上边。", "Shū zài zhuōzi shàngbian.", "Sách ở trên bàn."]
      ]
    },
    {
      p: "Chỉ đường: 一直走…往…拐",
      e: "一直走 (đi thẳng) + 往左/右拐 (rẽ trái/phải). 往 = hướng về.",
      ex: [
        ["一直走，然后往右拐。", "Yìzhí zǒu, ránhòu wǎng yòu guǎi.", "Đi thẳng, sau đó rẽ phải."],
        ["在第二个路口往左拐。", "Zài dì-èr ge lùkǒu wǎng zuǒ guǎi.", "Ở ngã rẽ thứ hai rẽ trái."]
      ]
    }
  ],
  dialogue: {
    title: "Chỉ đường chi tiết",
    lines: [
      ["A", "请问，医院怎么走？", "Qǐngwèn, yīyuàn zěnme zǒu?", "Xin hỏi, bệnh viện đi thế nào?"],
      ["B", "你一直走，到路口往左拐。", "Nǐ yìzhí zǒu, dào lùkǒu wǎng zuǒ guǎi.", "Bạn đi thẳng, đến ngã tư rẽ trái."],
      ["A", "然后呢？", "Ránhòu ne?", "Sau đó thì sao?"],
      ["B", "医院就在银行对面。", "Yīyuàn jiù zài yínháng duìmiàn.", "Bệnh viện ở ngay đối diện ngân hàng."],
      ["A", "在超市旁边吗？", "Zài chāoshì pángbiān ma?", "Có phải cạnh siêu thị không?"],
      ["B", "对，就在超市旁边。", "Duì, jiù zài chāoshì pángbiān.", "Đúng, ngay cạnh siêu thị."]
    ]
  },
  drills: [
    ["一直走。", "Yìzhí zǒu.", "Đi thẳng."],
    ["往左拐。", "Wǎng zuǒ guǎi.", "Rẽ trái."],
    ["往右拐。", "Wǎng yòu guǎi.", "Rẽ phải."],
    ["银行在医院旁边。", "Yínháng zài yīyuàn pángbiān.", "Ngân hàng cạnh bệnh viện."],
    ["就在对面。", "Jiù zài duìmiàn.", "Ngay đối diện."]
  ]
},

{
  d: 38, week: 6, theme: "Đi lại & phương hướng",
  title: "Phương tiện giao thông · 坐 / 骑 / 开",
  goal: "Nói đi bằng phương tiện gì.",
  tip: "坐 dùng cho phương tiện ngồi (xe buýt, tàu, máy bay). 骑 cho phương tiện cưỡi (xe đạp, xe máy). 开 là tự lái.",
  vocab: [
    ["坐", "zuò", "ngồi, đi (xe)"],
    ["骑", "qí", "cưỡi, đi (xe đạp/máy)"],
    ["开车", "kāichē", "lái xe"],
    ["公共汽车", "gōnggòng qìchē", "xe buýt"],
    ["公交车", "gōngjiāochē", "xe buýt (khẩu ngữ)"],
    ["地铁", "dìtiě", "tàu điện ngầm"],
    ["出租车", "chūzūchē", "taxi"],
    ["火车", "huǒchē", "tàu hỏa"],
    ["飞机", "fēijī", "máy bay"],
    ["自行车", "zìxíngchē", "xe đạp"],
    ["摩托车", "mótuōchē", "xe máy"],
    ["走路", "zǒulù", "đi bộ"],
    ["怎么", "zěnme", "thế nào, làm sao"]
  ],
  grammar: [
    {
      p: "坐 + phương tiện + 去 + nơi đến",
      e: "Trật tự: chủ ngữ + phương tiện + động từ đi. 我坐地铁去公司 = tôi đi tàu điện đến công ty.",
      ex: [
        ["我坐地铁去公司。", "Wǒ zuò dìtiě qù gōngsī.", "Tôi đi tàu điện đến công ty."],
        ["他骑自行车去学校。", "Tā qí zìxíngchē qù xuéxiào.", "Anh ấy đạp xe đến trường."]
      ]
    },
    {
      p: "怎么去？ – đi bằng cách nào",
      e: "Khác với 怎么走 (đường đi thế nào), 怎么去 hỏi về phương tiện.",
      ex: [
        ["你怎么去机场？", "Nǐ zěnme qù jīchǎng?", "Bạn đến sân bay bằng gì?"],
        ["我打车去。", "Wǒ dǎchē qù.", "Tôi bắt taxi đi."]
      ]
    }
  ],
  dialogue: {
    title: "Đi sân bay bằng gì?",
    lines: [
      ["A", "明天你怎么去机场？", "Míngtiān nǐ zěnme qù jīchǎng?", "Mai bạn đến sân bay bằng gì?"],
      ["B", "我坐地铁去，比较快。", "Wǒ zuò dìtiě qù, bǐjiào kuài.", "Tôi đi tàu điện, khá nhanh."],
      ["A", "要多长时间？", "Yào duō cháng shíjiān?", "Mất bao lâu?"],
      ["B", "大概一个小时。", "Dàgài yí ge xiǎoshí.", "Khoảng một tiếng."],
      ["A", "我开车送你，好吗？", "Wǒ kāichē sòng nǐ, hǎo ma?", "Tôi lái xe đưa bạn đi nhé?"],
      ["B", "太谢谢你了！", "Tài xièxie nǐ le!", "Cảm ơn bạn nhiều lắm!"]
    ]
  },
  drills: [
    ["你怎么去？", "Nǐ zěnme qù?", "Bạn đi bằng gì?"],
    ["我坐地铁去。", "Wǒ zuò dìtiě qù.", "Tôi đi tàu điện."],
    ["我骑自行车。", "Wǒ qí zìxíngchē.", "Tôi đi xe đạp."],
    ["要多长时间？", "Yào duō cháng shíjiān?", "Mất bao lâu?"],
    ["大概半个小时。", "Dàgài bàn ge xiǎoshí.", "Khoảng nửa tiếng."]
  ]
},

{
  d: 39, week: 6, theme: "Đi lại & phương hướng",
  title: "Đi taxi",
  goal: "Hoàn thành một chuyến taxi từ lên xe đến trả tiền.",
  tip: "Câu quan trọng nhất: 请到…（địa điểm）。 Kèm theo địa chỉ viết sẵn trong điện thoại là an toàn tuyệt đối.",
  vocab: [
    ["师傅", "shīfu", "bác tài (cách gọi lịch sự)"],
    ["请到", "qǐng dào", "làm ơn đến"],
    ["停", "tíng", "dừng"],
    ["这里", "zhèlǐ", "chỗ này"],
    ["快点儿", "kuài diǎnr", "nhanh lên chút"],
    ["赶时间", "gǎn shíjiān", "gấp, vội"],
    ["打车", "dǎchē", "bắt taxi"],
    ["下车", "xiàchē", "xuống xe"],
    ["上车", "shàngchē", "lên xe"],
    ["地址", "dìzhǐ", "địa chỉ"],
    ["路上", "lùshang", "trên đường"],
    ["堵车", "dǔchē", "tắc đường"]
  ],
  grammar: [
    {
      p: "请 + động từ = lời đề nghị lịch sự",
      e: "请到… (làm ơn đến…), 请停这里 (làm ơn dừng ở đây), 请等一下 (làm ơn đợi chút).",
      ex: [
        ["请到火车站。", "Qǐng dào huǒchēzhàn.", "Làm ơn đến ga tàu."],
        ["请在这里停。", "Qǐng zài zhèlǐ tíng.", "Làm ơn dừng ở đây."]
      ]
    },
    {
      p: "要 + số + 时间 = mất bao lâu",
      e: "要 ở đây nghĩa 'cần, mất'. 要多长时间？ = mất bao lâu?",
      ex: [
        ["到那儿要多长时间？", "Dào nàr yào duō cháng shíjiān?", "Đến đó mất bao lâu?"],
        ["要二十分钟。", "Yào èrshí fēnzhōng.", "Mất 20 phút."]
      ]
    }
  ],
  dialogue: {
    title: "Trên taxi",
    lines: [
      ["A", "师傅，请到北京饭店。", "Shīfu, qǐng dào Běijīng Fàndiàn.", "Bác tài, làm ơn đến khách sạn Bắc Kinh."],
      ["B", "好的。这是地址吗？", "Hǎo de. Zhè shì dìzhǐ ma?", "Được. Đây là địa chỉ à?"],
      ["A", "对。到那儿要多长时间？", "Duì. Dào nàr yào duō cháng shíjiān?", "Đúng. Đến đó mất bao lâu?"],
      ["B", "大概二十分钟，路上有点儿堵车。", "Dàgài èrshí fēnzhōng, lùshang yǒudiǎnr dǔchē.", "Khoảng 20 phút, trên đường hơi tắc."],
      ["A", "我有点儿赶时间，可以快一点儿吗？", "Wǒ yǒudiǎnr gǎn shíjiān, kěyǐ kuài yìdiǎnr ma?", "Tôi hơi vội, nhanh chút được không?"],
      ["B", "好，到了。一共三十五块。", "Hǎo, dào le. Yígòng sānshíwǔ kuài.", "Được, đến rồi. Tổng cộng 35 tệ."],
      ["A", "请在这里停，谢谢！", "Qǐng zài zhèlǐ tíng, xièxie!", "Làm ơn dừng ở đây, cảm ơn!"]
    ]
  },
  drills: [
    ["师傅，请到机场。", "Shīfu, qǐng dào jīchǎng.", "Bác tài, làm ơn đến sân bay."],
    ["这是地址。", "Zhè shì dìzhǐ.", "Đây là địa chỉ."],
    ["要多长时间？", "Yào duō cháng shíjiān?", "Mất bao lâu?"],
    ["请在这里停。", "Qǐng zài zhèlǐ tíng.", "Làm ơn dừng ở đây."],
    ["我赶时间，快一点儿。", "Wǒ gǎn shíjiān, kuài yìdiǎnr.", "Tôi vội, nhanh chút."]
  ]
},

{
  d: 40, week: 6, theme: "Đi lại & phương hướng",
  title: "Mua vé & tàu điện",
  goal: "Mua vé, hỏi hướng tàu, đổi tuyến.",
  tip: "号线 = tuyến số mấy. 换乘 = chuyển tuyến. Metro Trung Quốc có tiếng Anh nhưng nhân viên thì thường không.",
  vocab: [
    ["票", "piào", "vé"],
    ["买票", "mǎi piào", "mua vé"],
    ["号线", "hào xiàn", "tuyến số…"],
    ["换乘", "huànchéng", "chuyển tuyến"],
    ["方向", "fāngxiàng", "hướng"],
    ["站", "zhàn", "trạm, ga"],
    ["第", "dì", "(tiền tố số thứ tự)"],
    ["下一站", "xià yí zhàn", "ga tiếp theo"],
    ["出口", "chūkǒu", "lối ra"],
    ["入口", "rùkǒu", "lối vào"],
    ["单程", "dānchéng", "một chiều"],
    ["往返", "wǎngfǎn", "khứ hồi"]
  ],
  grammar: [
    {
      p: "第 + số + lượng từ = thứ mấy",
      e: "第一站 (ga thứ nhất), 第三个路口 (ngã rẽ thứ ba). 第 luôn cần lượng từ theo sau.",
      ex: [
        ["下车是第三站。", "Xiàchē shì dì-sān zhàn.", "Xuống xe là ga thứ ba."],
        ["我住在第二层。", "Wǒ zhù zài dì-èr céng.", "Tôi ở tầng hai."]
      ]
    },
    {
      p: "在…换乘 – chuyển tuyến ở đâu",
      e: "Cấu trúc: 在 + tên ga + 换 + số tuyến + 号线.",
      ex: [
        ["在这站换二号线。", "Zài zhè zhàn huàn èr hào xiàn.", "Ở ga này đổi tuyến 2."]
      ]
    }
  ],
  dialogue: {
    title: "Ở ga tàu điện",
    lines: [
      ["A", "请问，去天安门坐几号线？", "Qǐngwèn, qù Tiān'ānmén zuò jǐ hào xiàn?", "Xin hỏi, đến Thiên An Môn đi tuyến mấy?"],
      ["B", "坐一号线，往东方向。", "Zuò yī hào xiàn, wǎng dōng fāngxiàng.", "Đi tuyến 1, hướng đông."],
      ["A", "要换乘吗？", "Yào huànchéng ma?", "Có phải đổi tuyến không?"],
      ["B", "不用，第四站就到。", "Bú yòng, dì-sì zhàn jiù dào.", "Không cần, ga thứ tư là đến."],
      ["A", "票多少钱？", "Piào duōshao qián?", "Vé bao nhiêu tiền?"],
      ["B", "三块，在那边买票。", "Sān kuài, zài nàbiān mǎi piào.", "3 tệ, mua vé ở đằng kia."],
      ["A", "谢谢！出口在哪儿？", "Xièxie! Chūkǒu zài nǎr?", "Cảm ơn! Lối ra ở đâu?"]
    ]
  },
  drills: [
    ["去机场坐几号线？", "Qù jīchǎng zuò jǐ hào xiàn?", "Đến sân bay đi tuyến mấy?"],
    ["要换乘吗？", "Yào huànchéng ma?", "Có phải đổi tuyến không?"],
    ["第三站下车。", "Dì-sān zhàn xiàchē.", "Ga thứ ba xuống xe."],
    ["我买一张票。", "Wǒ mǎi yì zhāng piào.", "Tôi mua một vé."],
    ["出口在哪儿？", "Chūkǒu zài nǎr?", "Lối ra ở đâu?"]
  ]
},

{
  d: 41, week: 6, theme: "Đi lại & phương hướng",
  title: "Khách sạn & nhận phòng",
  goal: "Đặt phòng, nhận phòng, hỏi tiện nghi.",
  tip: "Ở Trung Quốc, nhận phòng phải xuất trình hộ chiếu: 护照 hùzhào. Không có nó thì không nhận phòng được.",
  vocab: [
    ["房间", "fángjiān", "phòng"],
    ["单人间", "dānrénjiān", "phòng đơn"],
    ["双人间", "shuāngrénjiān", "phòng đôi"],
    ["订", "dìng", "đặt (phòng, vé)"],
    ["入住", "rùzhù", "nhận phòng"],
    ["退房", "tuìfáng", "trả phòng"],
    ["护照", "hùzhào", "hộ chiếu"],
    ["晚", "wǎn", "đêm (đơn vị ở)"],
    ["空调", "kōngtiáo", "điều hòa"],
    ["网", "wǎng", "mạng, wifi"],
    ["密码", "mìmǎ", "mật khẩu"],
    ["早饭", "zǎofàn", "bữa sáng"],
    ["包括", "bāokuò", "bao gồm"]
  ],
  grammar: [
    {
      p: "…包括…吗？ – có bao gồm không",
      e: "Câu hỏi tiện dụng khi thuê phòng, mua tour.",
      ex: [
        ["包括早饭吗？", "Bāokuò zǎofàn ma?", "Có bao gồm bữa sáng không?"],
        ["价格包括早饭。", "Jiàgé bāokuò zǎofàn.", "Giá đã bao gồm bữa sáng."]
      ]
    },
    {
      p: "住 + thời lượng",
      e: "我住三晚 = tôi ở ba đêm. Thời lượng đứng sau động từ.",
      ex: [
        ["我要住两晚。", "Wǒ yào zhù liǎng wǎn.", "Tôi muốn ở hai đêm."]
      ]
    }
  ],
  dialogue: {
    title: "Nhận phòng khách sạn",
    lines: [
      ["NV", "您好，欢迎光临！", "Nín hǎo, huānyíng guānglín!", "Xin chào, hoan nghênh quý khách!"],
      ["A", "你好，我订了一个房间。", "Nǐ hǎo, wǒ dìng le yí ge fángjiān.", "Chào chị, tôi đã đặt một phòng."],
      ["NV", "请给我您的护照。", "Qǐng gěi wǒ nín de hùzhào.", "Cho tôi xin hộ chiếu của anh."],
      ["A", "给你。我要住三晚。", "Gěi nǐ. Wǒ yào zhù sān wǎn.", "Đây ạ. Tôi ở ba đêm."],
      ["NV", "好的，您的房间是八零五。", "Hǎo de, nín de fángjiān shì bā líng wǔ.", "Vâng, phòng của anh là 805."],
      ["A", "包括早饭吗？wifi密码是多少？", "Bāokuò zǎofàn ma? Wifi mìmǎ shì duōshao?", "Có bao gồm bữa sáng không? Mật khẩu wifi là gì?"],
      ["NV", "包括，早饭在二楼。密码在房卡上。", "Bāokuò, zǎofàn zài èr lóu. Mìmǎ zài fángkǎ shàng.", "Có, bữa sáng ở tầng 2. Mật khẩu trên thẻ phòng."]
    ]
  },
  drills: [
    ["我订了一个房间。", "Wǒ dìng le yí ge fángjiān.", "Tôi đã đặt một phòng."],
    ["我要住两晚。", "Wǒ yào zhù liǎng wǎn.", "Tôi ở hai đêm."],
    ["这是我的护照。", "Zhè shì wǒ de hùzhào.", "Đây là hộ chiếu của tôi."],
    ["包括早饭吗？", "Bāokuò zǎofàn ma?", "Có bao gồm bữa sáng không?"],
    ["wifi密码是多少？", "Wifi mìmǎ shì duōshao?", "Mật khẩu wifi là gì?"]
  ]
},

{
  d: 42, week: 6, theme: "Đi lại & phương hướng",
  title: "TỔNG ÔN TUẦN 6 · Kịch bản du lịch",
  goal: "Đi từ sân bay về khách sạn hoàn toàn bằng tiếng Trung.",
  tip: "Đây là bộ kỹ năng 'sống sót du lịch'. Nếu nói được kịch bản này, bạn đã tự đi Trung Quốc một mình được.",
  review: [36, 37, 38, 39, 40, 41],
  vocab: [
    ["行李", "xíngli", "hành lý"],
    ["帮忙", "bāngmáng", "giúp đỡ"],
    ["迷路", "mílù", "lạc đường"],
    ["附近", "fùjìn", "gần đây, lân cận"],
    ["推荐", "tuījiàn", "giới thiệu, gợi ý"]
  ],
  grammar: [
    {
      p: "附近有…吗？ – gần đây có… không",
      e: "Câu vàng khi ở nơi lạ: 附近有饭馆吗？ 附近有超市吗？",
      ex: [
        ["附近有好吃的饭馆吗？", "Fùjìn yǒu hǎochī de fànguǎn ma?", "Gần đây có quán ăn ngon không?"]
      ]
    }
  ],
  dialogue: {
    title: "Từ sân bay về khách sạn",
    lines: [
      ["A", "请问，出租车站在哪儿？", "Qǐngwèn, chūzūchē zhàn zài nǎr?", "Xin hỏi, bến taxi ở đâu?"],
      ["B", "一直走，然后往右拐，就在外面。", "Yìzhí zǒu, ránhòu wǎng yòu guǎi, jiù zài wàimiàn.", "Đi thẳng, rồi rẽ phải, ngay bên ngoài."],
      ["A", "谢谢！（上车）师傅，请到这个地址。", "Xièxie! (Shàngchē) Shīfu, qǐng dào zhè ge dìzhǐ.", "Cảm ơn! (Lên xe) Bác tài, làm ơn đến địa chỉ này."],
      ["C", "好的，行李我帮你放。要四十分钟。", "Hǎo de, xíngli wǒ bāng nǐ fàng. Yào sìshí fēnzhōng.", "Được, hành lý tôi giúp anh để. Mất 40 phút."],
      ["A", "好。（到酒店）你好，我订了房间。", "Hǎo. (Dào jiǔdiàn) Nǐ hǎo, wǒ dìng le fángjiān.", "Được. (Đến khách sạn) Chào chị, tôi đã đặt phòng."],
      ["D", "请给我护照。您住几晚？", "Qǐng gěi wǒ hùzhào. Nín zhù jǐ wǎn?", "Cho xin hộ chiếu. Anh ở mấy đêm?"],
      ["A", "三晚。请问，附近有好吃的饭馆吗？", "Sān wǎn. Qǐngwèn, fùjìn yǒu hǎochī de fànguǎn ma?", "Ba đêm. Xin hỏi, gần đây có quán ăn ngon không?"],
      ["D", "有，酒店对面就有一家，很好吃。", "Yǒu, jiǔdiàn duìmiàn jiù yǒu yì jiā, hěn hǎochī.", "Có, đối diện khách sạn có một quán, rất ngon."],
      ["A", "太好了，谢谢您！", "Tài hǎo le, xièxie nín!", "Tuyệt quá, cảm ơn chị!"]
    ]
  },
  drills: [
    ["出租车站在哪儿？", "Chūzūchē zhàn zài nǎr?", "Bến taxi ở đâu?"],
    ["请到这个地址。", "Qǐng dào zhè ge dìzhǐ.", "Làm ơn đến địa chỉ này."],
    ["我订了房间。", "Wǒ dìng le fángjiān.", "Tôi đã đặt phòng."],
    ["附近有饭馆吗？", "Fùjìn yǒu fànguǎn ma?", "Gần đây có quán ăn không?"],
    ["我迷路了，请帮我。", "Wǒ mílù le, qǐng bāng wǒ.", "Tôi lạc đường rồi, làm ơn giúp tôi."]
  ]
}

);
