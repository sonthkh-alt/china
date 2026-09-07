/* Tuần 1–2 · Ngày 1–14 · Nền tảng phát âm + chào hỏi + giới thiệu bản thân */
window.LESSONS = window.LESSONS || [];
window.LESSONS.push(

{
  d: 1, week: 1, theme: "Phát âm & chào hỏi",
  title: "4 thanh điệu và câu chào đầu tiên",
  goal: "Nghe – đọc đúng 4 thanh điệu; chào hỏi và cảm ơn.",
  tip: "Thanh điệu là linh hồn tiếng Trung. Cùng âm 'ma' nhưng 5 cách đọc cho 5 nghĩa khác nhau. Hãy đọc TO thành tiếng, đừng đọc thầm.",
  pinyin: {
    title: "4 thanh điệu (声调 shēngdiào)",
    rows: [
      ["mā", "Thanh 1 – cao và ngang, kéo dài đều như hát nốt cao", "妈 mẹ"],
      ["má", "Thanh 2 – đi lên, như khi bạn hỏi 'Hả?'", "麻 cây gai"],
      ["mǎ", "Thanh 3 – xuống rồi lên, giống dấu hỏi tiếng Việt kéo dài", "马 con ngựa"],
      ["mà", "Thanh 4 – rơi mạnh xuống, dứt khoát như quát 'Đi!'", "骂 mắng"],
      ["ma", "Thanh nhẹ – đọc nhanh, nhẹ, không nhấn", "吗 (trợ từ hỏi)"]
    ]
  },
  vocab: [
    ["你", "nǐ", "bạn, anh, chị (ngôi 2 số ít)"],
    ["好", "hǎo", "tốt, khỏe"],
    ["你好", "nǐ hǎo", "xin chào"],
    ["我", "wǒ", "tôi"],
    ["谢谢", "xièxie", "cảm ơn"],
    ["不", "bù", "không"],
    ["不客气", "bú kèqi", "không có gì, đừng khách sáo"],
    ["再见", "zàijiàn", "tạm biệt"],
    ["请", "qǐng", "mời, xin mời"],
    ["对不起", "duìbuqǐ", "xin lỗi"]
  ],
  grammar: [
    {
      p: "你好 – lời chào vạn năng",
      e: "你好 dùng được mọi lúc, với mọi người. Muốn lịch sự hơn thì dùng 您好 (nín hǎo) với người lớn tuổi/cấp trên.",
      ex: [
        ["你好！", "Nǐ hǎo!", "Xin chào!"],
        ["您好！", "Nín hǎo!", "Chào ngài/bác ạ!"]
      ]
    },
    {
      p: "Quy tắc biến điệu của 不 bù",
      e: "不 vốn là thanh 4. Khi đứng trước một chữ thanh 4 khác, nó đổi thành thanh 2: bú. Ví dụ 不客气 đọc là bú kèqi, không phải bù kèqi.",
      ex: [
        ["不好", "bù hǎo", "không tốt (giữ thanh 4 vì 好 là thanh 3)"],
        ["不是", "bú shì", "không phải (đổi thanh 2 vì 是 là thanh 4)"]
      ]
    }
  ],
  dialogue: {
    title: "Gặp nhau lần đầu",
    lines: [
      ["A", "你好！", "Nǐ hǎo!", "Xin chào!"],
      ["B", "你好！", "Nǐ hǎo!", "Xin chào!"],
      ["A", "谢谢你。", "Xièxie nǐ.", "Cảm ơn bạn."],
      ["B", "不客气。", "Bú kèqi.", "Không có gì."],
      ["A", "再见！", "Zàijiàn!", "Tạm biệt!"],
      ["B", "再见！", "Zàijiàn!", "Tạm biệt!"]
    ]
  },
  drills: [
    ["你好！", "Nǐ hǎo!", "Xin chào!"],
    ["谢谢！", "Xièxie!", "Cảm ơn!"],
    ["对不起。", "Duìbuqǐ.", "Xin lỗi."],
    ["不客气。", "Bú kèqi.", "Không có gì."],
    ["再见！", "Zàijiàn!", "Tạm biệt!"]
  ]
},

{
  d: 2, week: 1, theme: "Phát âm & chào hỏi",
  title: "Thanh mẫu b p m f d t n l · Hỏi tên",
  goal: "Phát âm 8 phụ âm đầu cơ bản; hỏi và trả lời tên.",
  tip: "b/p, d/t trong tiếng Trung khác tiếng Việt: b đọc gần như 'p' Việt (không bật hơi), p đọc bật hơi mạnh như thổi nến.",
  pinyin: {
    title: "Thanh mẫu (phụ âm đầu) nhóm 1",
    rows: [
      ["b p m f", "Âm môi. b = p Việt không bật hơi; p = bật hơi mạnh", "bà bǐ · pà pí · mā mù · fā fù"],
      ["d t n l", "Âm đầu lưỡi. d = t Việt; t = bật hơi mạnh", "dà dì · tā tù · nǐ nà · lā lù"],
      ["a o e i u ü", "6 nguyên âm gốc. ü = 'uy' môi tròn, giữ nguyên khẩu hình", "bā · bō · dé · lì · nǔ · lǜ"]
    ]
  },
  vocab: [
    ["叫", "jiào", "gọi là, tên là"],
    ["什么", "shénme", "gì, cái gì"],
    ["名字", "míngzi", "tên"],
    ["他", "tā", "anh ấy, ông ấy"],
    ["她", "tā", "cô ấy, chị ấy"],
    ["们", "men", "(hậu tố số nhiều cho người)"],
    ["我们", "wǒmen", "chúng tôi, chúng ta"],
    ["是", "shì", "là"],
    ["吗", "ma", "(trợ từ tạo câu hỏi Có/Không)"],
    ["很", "hěn", "rất"]
  ],
  grammar: [
    {
      p: "你叫什么名字？ – Hỏi tên",
      e: "Cấu trúc: Chủ ngữ + 叫 + 什么名字？ Trả lời: 我叫 + tên. Tiếng Trung KHÔNG cần động từ 'to be' ở đây.",
      ex: [
        ["你叫什么名字？", "Nǐ jiào shénme míngzi?", "Bạn tên là gì?"],
        ["我叫阿山。", "Wǒ jiào Ā Shān.", "Tôi tên là A Sơn."]
      ]
    },
    {
      p: "吗 – biến câu kể thành câu hỏi",
      e: "Thêm 吗 vào cuối câu khẳng định là thành câu hỏi Có/Không. Không đảo trật tự từ như tiếng Anh.",
      ex: [
        ["你好吗？", "Nǐ hǎo ma?", "Bạn khỏe không?"],
        ["我很好。", "Wǒ hěn hǎo.", "Tôi rất khỏe."]
      ]
    }
  ],
  dialogue: {
    title: "Hỏi tên nhau",
    lines: [
      ["A", "你好！你叫什么名字？", "Nǐ hǎo! Nǐ jiào shénme míngzi?", "Chào bạn! Bạn tên gì?"],
      ["B", "我叫李明。你呢？", "Wǒ jiào Lǐ Míng. Nǐ ne?", "Mình tên Lý Minh. Còn bạn?"],
      ["A", "我叫阿山。你好吗？", "Wǒ jiào Ā Shān. Nǐ hǎo ma?", "Mình tên A Sơn. Bạn khỏe không?"],
      ["B", "我很好，谢谢！", "Wǒ hěn hǎo, xièxie!", "Mình rất khỏe, cảm ơn!"]
    ]
  },
  drills: [
    ["你叫什么名字？", "Nǐ jiào shénme míngzi?", "Bạn tên là gì?"],
    ["我叫阿山。", "Wǒ jiào Ā Shān.", "Tôi tên A Sơn."],
    ["他叫什么名字？", "Tā jiào shénme míngzi?", "Anh ấy tên gì?"],
    ["你好吗？", "Nǐ hǎo ma?", "Bạn khỏe không?"],
    ["我很好。", "Wǒ hěn hǎo.", "Tôi rất khỏe."]
  ]
},

{
  d: 3, week: 1, theme: "Phát âm & chào hỏi",
  title: "Thanh mẫu g k h j q x · Câu 是 và câu phủ định",
  goal: "Phân biệt j/q/x; nói 'Tôi là…' và phủ định bằng 不.",
  tip: "j q x luôn đi với i hoặc ü. Khi viết ju/qu/xu thì thực chất là jü/qü/xü — hai chấm được bỏ đi.",
  pinyin: {
    title: "Thanh mẫu nhóm 2",
    rows: [
      ["g k h", "Âm gốc lưỡi. g = c/k Việt không bật hơi; k bật hơi; h ma sát mạnh hơn h Việt", "gē gǔ · kě kǔ · hē hǔ"],
      ["j q x", "Âm mặt lưỡi, môi dẹt, chỉ ghép với i / ü", "jī jí · qī qù · xī xǔ"],
      ["Quy tắc bỏ 2 chấm", "ü sau j q x y viết thành u nhưng vẫn đọc là ü", "ju = jü · qu = qü · xu = xü · yu = yü"]
    ]
  },
  vocab: [
    ["中国", "Zhōngguó", "Trung Quốc"],
    ["越南", "Yuènán", "Việt Nam"],
    ["人", "rén", "người"],
    ["中国人", "Zhōngguórén", "người Trung Quốc"],
    ["越南人", "Yuènánrén", "người Việt Nam"],
    ["也", "yě", "cũng"],
    ["呢", "ne", "(trợ từ hỏi lại: còn… thì sao?)"],
    ["哪", "nǎ", "nào"],
    ["国", "guó", "nước, quốc gia"],
    ["哪国人", "nǎ guó rén", "người nước nào"]
  ],
  grammar: [
    {
      p: "A 是 B – câu đồng nhất",
      e: "是 nối hai danh từ: 'A là B'. Phủ định đặt 不 TRƯỚC 是: 不是.",
      ex: [
        ["我是越南人。", "Wǒ shì Yuènánrén.", "Tôi là người Việt Nam."],
        ["他不是中国人。", "Tā bú shì Zhōngguórén.", "Anh ấy không phải người Trung Quốc."]
      ]
    },
    {
      p: "也 – 'cũng', luôn đứng trước động từ",
      e: "也 đặt sau chủ ngữ, trước động từ/tính từ. Không bao giờ đặt cuối câu như 'too' tiếng Anh.",
      ex: [
        ["我也是越南人。", "Wǒ yě shì Yuènánrén.", "Tôi cũng là người Việt Nam."],
        ["她也很好。", "Tā yě hěn hǎo.", "Cô ấy cũng rất khỏe."]
      ]
    }
  ],
  dialogue: {
    title: "Bạn là người nước nào?",
    lines: [
      ["A", "你是哪国人？", "Nǐ shì nǎ guó rén?", "Bạn là người nước nào?"],
      ["B", "我是越南人。你呢？", "Wǒ shì Yuènánrén. Nǐ ne?", "Tôi là người Việt Nam. Còn bạn?"],
      ["A", "我是中国人。", "Wǒ shì Zhōngguórén.", "Tôi là người Trung Quốc."],
      ["B", "他也是中国人吗？", "Tā yě shì Zhōngguórén ma?", "Anh ấy cũng là người Trung Quốc à?"],
      ["A", "不，他不是中国人。", "Bù, tā bú shì Zhōngguórén.", "Không, anh ấy không phải người Trung Quốc."]
    ]
  },
  drills: [
    ["我是越南人。", "Wǒ shì Yuènánrén.", "Tôi là người Việt Nam."],
    ["你是哪国人？", "Nǐ shì nǎ guó rén?", "Bạn là người nước nào?"],
    ["他不是中国人。", "Tā bú shì Zhōngguórén.", "Anh ấy không phải người Trung Quốc."],
    ["我也是学生。", "Wǒ yě shì xuésheng.", "Tôi cũng là học sinh."],
    ["她呢？", "Tā ne?", "Còn cô ấy thì sao?"]
  ]
},

{
  d: 4, week: 1, theme: "Phát âm & chào hỏi",
  title: "Thanh mẫu zh ch sh r z c s · Nghề nghiệp",
  goal: "Phân biệt cặp âm khó nhất: zh/z, ch/c, sh/s; nói về nghề nghiệp.",
  tip: "zh ch sh r: cong lưỡi lên vòm miệng. z c s: đầu lưỡi chạm chân răng, lưỡi phẳng. Đây là điểm khó nhất với người Việt — luyện mỗi ngày 3 phút.",
  pinyin: {
    title: "Âm cong lưỡi vs âm đầu lưỡi",
    rows: [
      ["zh ch sh r", "Cong lưỡi (翘舌音). r gần như 'r' tiếng Anh nhưng cong hơn", "zhī chī shī rì · zhè chē shé rè"],
      ["z c s", "Đầu lưỡi phẳng (平舌音)", "zì cì sì · zǎo cǎo sān"],
      ["So sánh cặp đôi", "Đọc từng cặp thật chậm, cảm nhận vị trí lưỡi", "zì–zhì · cì–chì · sì–shì"]
    ]
  },
  vocab: [
    ["老师", "lǎoshī", "giáo viên"],
    ["学生", "xuésheng", "học sinh, sinh viên"],
    ["医生", "yīshēng", "bác sĩ"],
    ["工人", "gōngrén", "công nhân"],
    ["经理", "jīnglǐ", "giám đốc, quản lý"],
    ["朋友", "péngyou", "bạn bè"],
    ["的", "de", "(trợ từ sở hữu: của)"],
    ["谁", "shéi", "ai"],
    ["这", "zhè", "này, đây"],
    ["那", "nà", "kia, đó"]
  ],
  grammar: [
    {
      p: "的 – trợ từ sở hữu 'của'",
      e: "Trật tự ngược tiếng Việt: 我的书 = sách của tôi (tôi + 的 + sách). Với người thân/quan hệ gần có thể lược bỏ 的: 我妈妈.",
      ex: [
        ["我的名字", "wǒ de míngzi", "tên của tôi"],
        ["他是我的朋友。", "Tā shì wǒ de péngyou.", "Anh ấy là bạn của tôi."]
      ]
    },
    {
      p: "谁 – hỏi 'ai' (đọc shéi, cũng viết shuí)",
      e: "Từ để hỏi đứng đúng ngay vị trí của câu trả lời, không đảo lên đầu câu.",
      ex: [
        ["他是谁？", "Tā shì shéi?", "Anh ấy là ai?"],
        ["这是谁的书？", "Zhè shì shéi de shū?", "Đây là sách của ai?"]
      ]
    }
  ],
  dialogue: {
    title: "Giới thiệu bạn bè",
    lines: [
      ["A", "他是谁？", "Tā shì shéi?", "Anh ấy là ai?"],
      ["B", "他是我的朋友，他叫王强。", "Tā shì wǒ de péngyou, tā jiào Wáng Qiáng.", "Anh ấy là bạn tôi, tên Vương Cường."],
      ["A", "他是老师吗？", "Tā shì lǎoshī ma?", "Anh ấy là giáo viên à?"],
      ["B", "不是，他是医生。", "Bú shì, tā shì yīshēng.", "Không, anh ấy là bác sĩ."],
      ["A", "你呢？你是学生吗？", "Nǐ ne? Nǐ shì xuésheng ma?", "Còn bạn? Bạn là sinh viên à?"],
      ["B", "对，我是学生。", "Duì, wǒ shì xuésheng.", "Đúng, tôi là sinh viên."]
    ]
  },
  drills: [
    ["他是谁？", "Tā shì shéi?", "Anh ấy là ai?"],
    ["他是我的朋友。", "Tā shì wǒ de péngyou.", "Anh ấy là bạn của tôi."],
    ["我是学生。", "Wǒ shì xuésheng.", "Tôi là sinh viên."],
    ["这是我的名字。", "Zhè shì wǒ de míngzi.", "Đây là tên của tôi."],
    ["她是老师吗？", "Tā shì lǎoshī ma?", "Cô ấy là giáo viên à?"]
  ]
},

{
  d: 5, week: 1, theme: "Phát âm & chào hỏi",
  title: "Vận mẫu kép & âm mũi · Số đếm 0–10",
  goal: "Đọc đúng ai ei ao ou an en ang eng; đếm từ 0 đến 10.",
  tip: "an/ang, en/eng: n là đóng đầu lưỡi (như 'an' Việt), ng là mở cuống họng (như 'ang' Việt). Người Việt có lợi thế lớn ở đây.",
  pinyin: {
    title: "Vận mẫu kép và vận mẫu mũi",
    rows: [
      ["ai ei ao ou", "Nguyên âm đôi, âm đầu đọc rõ và dài hơn", "hǎi · měi · hǎo · dōu"],
      ["an en in un ün", "Kết thúc bằng -n, đầu lưỡi chạm lợi", "sān · hěn · xīn · lún · yūn"],
      ["ang eng ing ong", "Kết thúc bằng -ng, âm mũi mở", "máng · lěng · míng · zhōng"]
    ]
  },
  vocab: [
    ["零", "líng", "số 0"],
    ["一", "yī", "một"],
    ["二", "èr", "hai"],
    ["三", "sān", "ba"],
    ["四", "sì", "bốn"],
    ["五", "wǔ", "năm"],
    ["六", "liù", "sáu"],
    ["七", "qī", "bảy"],
    ["八", "bā", "tám"],
    ["九", "jiǔ", "chín"],
    ["十", "shí", "mười"],
    ["号码", "hàomǎ", "số (điện thoại, phòng…)"]
  ],
  grammar: [
    {
      p: "Đọc số điện thoại",
      e: "Đọc từng chữ số một. Riêng số 1 trong dãy số đọc là yāo thay vì yī để tránh nhầm với 七 qī.",
      ex: [
        ["我的号码是 138…", "Wǒ de hàomǎ shì yāo sān bā…", "Số của tôi là 138…"],
        ["零九一二…", "líng jiǔ yāo èr…", "0912…"]
      ]
    },
    {
      p: "Biến điệu của 一 yī",
      e: "一 đứng một mình hoặc cuối câu đọc yī. Trước thanh 4 đọc yí (一个 yí ge). Trước thanh 1,2,3 đọc yì (一天 yì tiān).",
      ex: [
        ["一个人", "yí ge rén", "một người"],
        ["一天", "yì tiān", "một ngày"]
      ]
    }
  ],
  dialogue: {
    title: "Xin số điện thoại",
    lines: [
      ["A", "你的电话号码是多少？", "Nǐ de diànhuà hàomǎ shì duōshao?", "Số điện thoại của bạn là bao nhiêu?"],
      ["B", "我的号码是 零九八 七六五 四三二。", "Wǒ de hàomǎ shì líng jiǔ bā qī liù wǔ sì sān èr.", "Số của tôi là 098 765 432."],
      ["A", "谢谢！", "Xièxie!", "Cảm ơn!"],
      ["B", "不客气。", "Bú kèqi.", "Không có gì."]
    ]
  },
  drills: [
    ["一二三四五", "yī èr sān sì wǔ", "1 2 3 4 5"],
    ["六七八九十", "liù qī bā jiǔ shí", "6 7 8 9 10"],
    ["你的号码是多少？", "Nǐ de hàomǎ shì duōshao?", "Số của bạn là bao nhiêu?"],
    ["我的号码是零九一…", "Wǒ de hàomǎ shì líng jiǔ yāo…", "Số của tôi là 091…"],
    ["三个人", "sān ge rén", "ba người"]
  ]
},

{
  d: 6, week: 1, theme: "Phát âm & chào hỏi",
  title: "Thanh 3 biến điệu & khinh thanh · Chào theo buổi",
  goal: "Đọc đúng chuỗi hai thanh 3 liền nhau; chào theo thời điểm trong ngày.",
  tip: "Hai thanh 3 đi liền nhau: chữ đầu đọc thành thanh 2. 你好 viết nǐ hǎo nhưng đọc ní hǎo. Đây là quy tắc bắt buộc, không phải tùy chọn.",
  pinyin: {
    title: "Biến điệu thanh 3 (三声变调)",
    rows: [
      ["3 + 3 → 2 + 3", "Chữ đầu chuyển thành thanh 2", "你好 nǐ hǎo → ní hǎo · 很好 hěn hǎo → hén hǎo"],
      ["3 + 1/2/4 → nửa thanh 3", "Chỉ đọc phần đi xuống, không cần lên lại", "老师 lǎoshī · 起来 qǐlái · 可是 kěshì"],
      ["Khinh thanh (轻声)", "Âm tiết thứ hai đọc nhẹ, ngắn, không thanh điệu", "妈妈 māma · 谢谢 xièxie · 名字 míngzi"]
    ]
  },
  vocab: [
    ["早上", "zǎoshang", "buổi sáng sớm"],
    ["上午", "shàngwǔ", "buổi sáng"],
    ["中午", "zhōngwǔ", "buổi trưa"],
    ["下午", "xiàwǔ", "buổi chiều"],
    ["晚上", "wǎnshang", "buổi tối"],
    ["早上好", "zǎoshang hǎo", "chào buổi sáng"],
    ["晚安", "wǎn'ān", "chúc ngủ ngon"],
    ["明天", "míngtiān", "ngày mai"],
    ["今天", "jīntiān", "hôm nay"],
    ["见", "jiàn", "gặp"]
  ],
  grammar: [
    {
      p: "明天见 – hẹn gặp lại",
      e: "Cấu trúc: [thời gian] + 见 = 'gặp lại vào lúc đó'. Rất thông dụng khi chia tay.",
      ex: [
        ["明天见！", "Míngtiān jiàn!", "Mai gặp lại!"],
        ["下午见！", "Xiàwǔ jiàn!", "Chiều gặp lại!"]
      ]
    },
    {
      p: "Thời gian đứng ĐẦU câu",
      e: "Khác tiếng Việt, trạng ngữ thời gian trong tiếng Trung đứng trước động từ, thường ở đầu câu hoặc ngay sau chủ ngữ.",
      ex: [
        ["今天我很忙。", "Jīntiān wǒ hěn máng.", "Hôm nay tôi rất bận."],
        ["我明天见你。", "Wǒ míngtiān jiàn nǐ.", "Mai tôi gặp bạn."]
      ]
    }
  ],
  dialogue: {
    title: "Chào buổi sáng ở công ty",
    lines: [
      ["A", "早上好！", "Zǎoshang hǎo!", "Chào buổi sáng!"],
      ["B", "早上好！今天好吗？", "Zǎoshang hǎo! Jīntiān hǎo ma?", "Chào buổi sáng! Hôm nay ổn chứ?"],
      ["A", "很好，谢谢。", "Hěn hǎo, xièxie.", "Rất tốt, cảm ơn."],
      ["B", "好，下午见！", "Hǎo, xiàwǔ jiàn!", "Được, chiều gặp lại!"],
      ["A", "下午见！", "Xiàwǔ jiàn!", "Chiều gặp lại!"]
    ]
  },
  drills: [
    ["早上好！", "Zǎoshang hǎo!", "Chào buổi sáng!"],
    ["晚上好！", "Wǎnshang hǎo!", "Chào buổi tối!"],
    ["晚安。", "Wǎn'ān.", "Chúc ngủ ngon."],
    ["明天见！", "Míngtiān jiàn!", "Mai gặp lại!"],
    ["今天我很好。", "Jīntiān wǒ hěn hǎo.", "Hôm nay tôi rất khỏe."]
  ]
},

{
  d: 7, week: 1, theme: "Phát âm & chào hỏi",
  title: "TỔNG ÔN TUẦN 1",
  goal: "Ghép toàn bộ kiến thức tuần 1 thành hội thoại làm quen hoàn chỉnh.",
  tip: "Hôm nay không học từ mới nhiều. Hãy dành 30 phút nói to lại toàn bộ hội thoại 6 ngày qua, không nhìn chữ Hán.",
  review: [1, 2, 3, 4, 5, 6],
  vocab: [
    ["对", "duì", "đúng"],
    ["认识", "rènshi", "quen biết, làm quen"],
    ["高兴", "gāoxìng", "vui, vui mừng"],
    ["很高兴认识你", "hěn gāoxìng rènshi nǐ", "rất vui được làm quen với bạn"],
    ["请问", "qǐngwèn", "xin hỏi"],
    ["贵姓", "guìxìng", "quý danh (hỏi họ lịch sự)"],
    ["姓", "xìng", "họ, mang họ"]
  ],
  grammar: [
    {
      p: "您贵姓？ – hỏi họ một cách lịch sự",
      e: "Trả lời: 我姓 + họ. Không trả lời bằng 我贵姓… Đây là mẫu câu bắt buộc trong môi trường công sở.",
      ex: [
        ["请问，您贵姓？", "Qǐngwèn, nín guìxìng?", "Xin hỏi, ngài họ gì ạ?"],
        ["我姓阮，叫阮文山。", "Wǒ xìng Ruǎn, jiào Ruǎn Wén Shān.", "Tôi họ Nguyễn, tên Nguyễn Văn Sơn."]
      ]
    }
  ],
  dialogue: {
    title: "Làm quen đầy đủ",
    lines: [
      ["A", "你好！请问，您贵姓？", "Nǐ hǎo! Qǐngwèn, nín guìxìng?", "Xin chào! Xin hỏi anh họ gì ạ?"],
      ["B", "我姓阮，我叫阮文山。你呢？", "Wǒ xìng Ruǎn, wǒ jiào Ruǎn Wén Shān. Nǐ ne?", "Tôi họ Nguyễn, tên Nguyễn Văn Sơn. Còn bạn?"],
      ["A", "我叫李美。你是哪国人？", "Wǒ jiào Lǐ Měi. Nǐ shì nǎ guó rén?", "Tôi tên Lý Mỹ. Anh là người nước nào?"],
      ["B", "我是越南人，我是学生。", "Wǒ shì Yuènánrén, wǒ shì xuésheng.", "Tôi là người Việt Nam, tôi là sinh viên."],
      ["A", "很高兴认识你！", "Hěn gāoxìng rènshi nǐ!", "Rất vui được làm quen với anh!"],
      ["B", "我也很高兴认识你。明天见！", "Wǒ yě hěn gāoxìng rènshi nǐ. Míngtiān jiàn!", "Tôi cũng rất vui được làm quen. Mai gặp lại!"]
    ]
  },
  drills: [
    ["请问，您贵姓？", "Qǐngwèn, nín guìxìng?", "Xin hỏi, anh/chị họ gì?"],
    ["我姓阮。", "Wǒ xìng Ruǎn.", "Tôi họ Nguyễn."],
    ["很高兴认识你！", "Hěn gāoxìng rènshi nǐ!", "Rất vui được làm quen với bạn!"],
    ["我是越南人，是学生。", "Wǒ shì Yuènánrén, shì xuésheng.", "Tôi là người Việt, là sinh viên."],
    ["对，我也是。", "Duì, wǒ yě shì.", "Đúng, tôi cũng vậy."]
  ]
},

{
  d: 8, week: 2, theme: "Gia đình & con người",
  title: "Thành viên gia đình",
  goal: "Gọi tên các thành viên trong gia đình; nói về gia đình mình.",
  tip: "Từ chỉ người thân thường lặp âm và mang khinh thanh: 妈妈 māma, 爸爸 bàba, 哥哥 gēge. Âm thứ hai đọc nhẹ và ngắn.",
  vocab: [
    ["家", "jiā", "nhà, gia đình"],
    ["爸爸", "bàba", "bố"],
    ["妈妈", "māma", "mẹ"],
    ["哥哥", "gēge", "anh trai"],
    ["姐姐", "jiějie", "chị gái"],
    ["弟弟", "dìdi", "em trai"],
    ["妹妹", "mèimei", "em gái"],
    ["儿子", "érzi", "con trai"],
    ["女儿", "nǚ'ér", "con gái"],
    ["爱人", "àiren", "vợ/chồng"]
  ],
  grammar: [
    {
      p: "Lược bỏ 的 với người thân",
      e: "Khi nói về người thân hoặc nơi làm việc, thường bỏ 的: 我妈妈 (mẹ tôi), 我家 (nhà tôi) — tự nhiên hơn 我的妈妈.",
      ex: [
        ["我妈妈是老师。", "Wǒ māma shì lǎoshī.", "Mẹ tôi là giáo viên."],
        ["这是我家。", "Zhè shì wǒ jiā.", "Đây là nhà tôi."]
      ]
    },
    {
      p: "Trật tự cơ bản: Chủ – Vị – Tân",
      e: "Tiếng Trung có trật tự SVO giống tiếng Việt. Đây là lợi thế lớn: bạn chỉ cần thay từ, không cần đảo câu.",
      ex: [
        ["我爱我的家。", "Wǒ ài wǒ de jiā.", "Tôi yêu gia đình tôi."],
        ["他有一个妹妹。", "Tā yǒu yí ge mèimei.", "Anh ấy có một em gái."]
      ]
    }
  ],
  dialogue: {
    title: "Ảnh gia đình",
    lines: [
      ["A", "这是你的家人吗？", "Zhè shì nǐ de jiārén ma?", "Đây là người nhà bạn à?"],
      ["B", "对，这是我爸爸，那是我妈妈。", "Duì, zhè shì wǒ bàba, nà shì wǒ māma.", "Đúng, đây là bố tôi, kia là mẹ tôi."],
      ["A", "她是谁？", "Tā shì shéi?", "Cô ấy là ai?"],
      ["B", "她是我姐姐，她是医生。", "Tā shì wǒ jiějie, tā shì yīshēng.", "Chị gái tôi, chị ấy là bác sĩ."],
      ["A", "你家很好！", "Nǐ jiā hěn hǎo!", "Gia đình bạn thật tuyệt!"]
    ]
  },
  drills: [
    ["这是我爸爸。", "Zhè shì wǒ bàba.", "Đây là bố tôi."],
    ["我妈妈是老师。", "Wǒ māma shì lǎoshī.", "Mẹ tôi là giáo viên."],
    ["那是我姐姐。", "Nà shì wǒ jiějie.", "Kia là chị gái tôi."],
    ["我有一个弟弟。", "Wǒ yǒu yí ge dìdi.", "Tôi có một em trai."],
    ["这是我家。", "Zhè shì wǒ jiā.", "Đây là nhà tôi."]
  ]
},

{
  d: 9, week: 2, theme: "Gia đình & con người",
  title: "Động từ 有 và lượng từ 个 · Đếm người",
  goal: "Nói 'có / không có'; dùng lượng từ khi đếm.",
  tip: "Phủ định của 有 là 没有, KHÔNG BAO GIỜ là 不有. Đây là ngoại lệ duy nhất bạn phải nhớ.",
  vocab: [
    ["有", "yǒu", "có"],
    ["没有", "méiyǒu", "không có"],
    ["几", "jǐ", "mấy (hỏi số nhỏ dưới 10)"],
    ["个", "ge", "cái, người (lượng từ vạn năng)"],
    ["口", "kǒu", "(lượng từ đếm nhân khẩu)"],
    ["两", "liǎng", "hai (dùng khi đếm)"],
    ["和", "hé", "và"],
    ["都", "dōu", "đều, tất cả"],
    ["家人", "jiārén", "người nhà"],
    ["多少", "duōshao", "bao nhiêu (số lớn)"]
  ],
  grammar: [
    {
      p: "Số + Lượng từ + Danh từ",
      e: "Tiếng Trung BẮT BUỘC có lượng từ giữa số và danh từ: 三个人 (ba người), không nói 三人. 个 dùng được cho hầu hết mọi thứ khi bạn chưa biết lượng từ chính xác.",
      ex: [
        ["我有两个哥哥。", "Wǒ yǒu liǎng ge gēge.", "Tôi có hai anh trai."],
        ["他没有妹妹。", "Tā méiyǒu mèimei.", "Anh ấy không có em gái."]
      ]
    },
    {
      p: "二 èr và 两 liǎng",
      e: "二 dùng để đếm số, đọc số, số thứ tự. 两 dùng khi đứng trước lượng từ. 'Hai người' là 两个人, không phải 二个人.",
      ex: [
        ["两个人", "liǎng ge rén", "hai người"],
        ["第二", "dì-èr", "thứ hai"]
      ]
    },
    {
      p: "你家有几口人？",
      e: "Mẫu câu chuẩn hỏi số nhân khẩu. Trả lời: 我家有 X 口人.",
      ex: [
        ["你家有几口人？", "Nǐ jiā yǒu jǐ kǒu rén?", "Nhà bạn có mấy người?"],
        ["我家有四口人。", "Wǒ jiā yǒu sì kǒu rén.", "Nhà tôi có bốn người."]
      ]
    }
  ],
  dialogue: {
    title: "Nhà bạn có mấy người?",
    lines: [
      ["A", "你家有几口人？", "Nǐ jiā yǒu jǐ kǒu rén?", "Nhà bạn có mấy người?"],
      ["B", "我家有五口人：爸爸、妈妈、两个姐姐和我。", "Wǒ jiā yǒu wǔ kǒu rén: bàba, māma, liǎng ge jiějie hé wǒ.", "Nhà tôi có năm người: bố, mẹ, hai chị gái và tôi."],
      ["A", "你有弟弟吗？", "Nǐ yǒu dìdi ma?", "Bạn có em trai không?"],
      ["B", "没有，我没有弟弟。", "Méiyǒu, wǒ méiyǒu dìdi.", "Không, tôi không có em trai."],
      ["A", "你的姐姐都是学生吗？", "Nǐ de jiějie dōu shì xuésheng ma?", "Các chị bạn đều là sinh viên à?"],
      ["B", "对，她们都是学生。", "Duì, tāmen dōu shì xuésheng.", "Đúng, các chị ấy đều là sinh viên."]
    ]
  },
  drills: [
    ["你家有几口人？", "Nǐ jiā yǒu jǐ kǒu rén?", "Nhà bạn có mấy người?"],
    ["我家有四口人。", "Wǒ jiā yǒu sì kǒu rén.", "Nhà tôi có bốn người."],
    ["我有两个姐姐。", "Wǒ yǒu liǎng ge jiějie.", "Tôi có hai chị gái."],
    ["我没有哥哥。", "Wǒ méiyǒu gēge.", "Tôi không có anh trai."],
    ["我们都是学生。", "Wǒmen dōu shì xuésheng.", "Chúng tôi đều là sinh viên."]
  ]
},

{
  d: 10, week: 2, theme: "Gia đình & con người",
  title: "Số đếm 11–99 · Hỏi tuổi",
  goal: "Đếm đến 99; hỏi và nói tuổi đúng cách với từng đối tượng.",
  tip: "Số tiếng Trung cực logic: 11 = 十一 (mười một), 20 = 二十 (hai mười), 35 = 三十五 (ba mười lăm). Giống hệt cách nghĩ tiếng Việt.",
  vocab: [
    ["岁", "suì", "tuổi"],
    ["多大", "duō dà", "bao nhiêu tuổi (người lớn)"],
    ["年", "nián", "năm"],
    ["百", "bǎi", "trăm"],
    ["今年", "jīnnián", "năm nay"],
    ["小", "xiǎo", "nhỏ"],
    ["大", "dà", "lớn"],
    ["孩子", "háizi", "trẻ con, đứa trẻ"],
    ["属", "shǔ", "cầm tinh, tuổi con giáp"],
    ["生日", "shēngrì", "sinh nhật"]
  ],
  grammar: [
    {
      p: "Ba cách hỏi tuổi",
      e: "你几岁？ hỏi trẻ em dưới 10. 你多大？ hỏi người cùng trang lứa. 您多大年纪？(nín duō dà niánjì) hỏi người cao tuổi một cách kính trọng.",
      ex: [
        ["你今年多大？", "Nǐ jīnnián duō dà?", "Năm nay bạn bao nhiêu tuổi?"],
        ["我今年二十五岁。", "Wǒ jīnnián èrshíwǔ suì.", "Năm nay tôi 25 tuổi."]
      ]
    },
    {
      p: "Câu không cần 是 với tuổi",
      e: "Nói tuổi không dùng 是: nói 我二十五岁 chứ không nói 我是二十五岁.",
      ex: [
        ["他十岁。", "Tā shí suì.", "Nó 10 tuổi."],
        ["我妹妹八岁。", "Wǒ mèimei bā suì.", "Em gái tôi 8 tuổi."]
      ]
    }
  ],
  dialogue: {
    title: "Bao nhiêu tuổi rồi?",
    lines: [
      ["A", "你今年多大？", "Nǐ jīnnián duō dà?", "Năm nay bạn bao nhiêu tuổi?"],
      ["B", "我今年二十八岁。你呢？", "Wǒ jīnnián èrshíbā suì. Nǐ ne?", "Năm nay tôi 28. Còn bạn?"],
      ["A", "我三十岁。你有孩子吗？", "Wǒ sānshí suì. Nǐ yǒu háizi ma?", "Tôi 30. Bạn có con chưa?"],
      ["B", "有，一个儿子，他五岁。", "Yǒu, yí ge érzi, tā wǔ suì.", "Có, một con trai, cháu 5 tuổi."],
      ["A", "真可爱！", "Zhēn kě'ài!", "Đáng yêu quá!"]
    ]
  },
  drills: [
    ["十一、二十、三十五", "shíyī, èrshí, sānshíwǔ", "11, 20, 35"],
    ["你今年多大？", "Nǐ jīnnián duō dà?", "Năm nay bạn bao nhiêu tuổi?"],
    ["我今年三十岁。", "Wǒ jīnnián sānshí suì.", "Năm nay tôi 30 tuổi."],
    ["我儿子五岁。", "Wǒ érzi wǔ suì.", "Con trai tôi 5 tuổi."],
    ["你几岁？", "Nǐ jǐ suì?", "Cháu mấy tuổi?"]
  ]
},

{
  d: 11, week: 2, theme: "Gia đình & con người",
  title: "Tính từ và mức độ · Miêu tả người",
  goal: "Miêu tả người bằng tính từ; hiểu vì sao phải có 很.",
  tip: "Trong câu tính từ, tiếng Trung KHÔNG dùng 是. Nói 我很忙, không nói 我是忙. 很 ở đây thường chỉ là chỗ đệm, không thực sự nghĩa 'rất'.",
  vocab: [
    ["忙", "máng", "bận"],
    ["累", "lèi", "mệt"],
    ["高", "gāo", "cao"],
    ["漂亮", "piàoliang", "xinh đẹp"],
    ["帅", "shuài", "đẹp trai"],
    ["好看", "hǎokàn", "đẹp, dễ nhìn"],
    ["太", "tài", "quá, rất"],
    ["非常", "fēicháng", "vô cùng"],
    ["有点儿", "yǒudiǎnr", "hơi (mang nghĩa tiêu cực)"],
    ["可爱", "kě'ài", "dễ thương"]
  ],
  grammar: [
    {
      p: "Chủ ngữ + 很 + Tính từ",
      e: "Câu vị ngữ tính từ không cần 是. 很 gần như bắt buộc; nếu bỏ đi câu mang nghĩa so sánh: 我忙 nghe như 'tôi bận (còn người khác thì không)'.",
      ex: [
        ["我很忙。", "Wǒ hěn máng.", "Tôi bận."],
        ["她很漂亮。", "Tā hěn piàoliang.", "Cô ấy rất xinh."]
      ]
    },
    {
      p: "太…了 và 有点儿",
      e: "太 + tính từ + 了 = 'quá…' (khen hoặc chê). 有点儿 + tính từ = 'hơi…' và luôn mang sắc thái không hài lòng.",
      ex: [
        ["太好了！", "Tài hǎo le!", "Tuyệt quá!"],
        ["我有点儿累。", "Wǒ yǒudiǎnr lèi.", "Tôi hơi mệt."]
      ]
    }
  ],
  dialogue: {
    title: "Dạo này thế nào?",
    lines: [
      ["A", "你最近忙吗？", "Nǐ zuìjìn máng ma?", "Dạo này bạn có bận không?"],
      ["B", "很忙，我有点儿累。", "Hěn máng, wǒ yǒudiǎnr lèi.", "Bận lắm, tôi hơi mệt."],
      ["A", "你哥哥呢？", "Nǐ gēge ne?", "Anh trai bạn thì sao?"],
      ["B", "他不忙，他非常好。", "Tā bù máng, tā fēicháng hǎo.", "Anh ấy không bận, anh ấy rất ổn."],
      ["A", "太好了！", "Tài hǎo le!", "Tốt quá!"]
    ]
  },
  drills: [
    ["我很忙。", "Wǒ hěn máng.", "Tôi bận."],
    ["我有点儿累。", "Wǒ yǒudiǎnr lèi.", "Tôi hơi mệt."],
    ["她很漂亮。", "Tā hěn piàoliang.", "Cô ấy rất xinh."],
    ["太好了！", "Tài hǎo le!", "Tuyệt quá!"],
    ["他不忙。", "Tā bù máng.", "Anh ấy không bận."]
  ]
},

{
  d: 12, week: 2, theme: "Gia đình & con người",
  title: "Câu hỏi chính phản A-不-A",
  goal: "Đặt câu hỏi không dùng 吗 — cách hỏi tự nhiên nhất của người bản xứ.",
  tip: "Người Trung Quốc dùng dạng A-不-A nhiều hơn 吗 trong hội thoại đời thường. 你忙不忙？ nghe tự nhiên hơn 你忙吗？",
  vocab: [
    ["喜欢", "xǐhuan", "thích"],
    ["想", "xiǎng", "muốn, nhớ"],
    ["要", "yào", "muốn, cần"],
    ["知道", "zhīdào", "biết"],
    ["觉得", "juéde", "cảm thấy, cho rằng"],
    ["还", "hái", "còn, vẫn"],
    ["最近", "zuìjìn", "dạo này, gần đây"],
    ["工作", "gōngzuò", "công việc, làm việc"],
    ["身体", "shēntǐ", "sức khỏe, cơ thể"],
    ["怎么样", "zěnmeyàng", "thế nào"]
  ],
  grammar: [
    {
      p: "Câu hỏi chính phản: A 不 A",
      e: "Lặp lại động từ/tính từ với 不 ở giữa. Với từ hai âm tiết chỉ cần lặp âm đầu: 喜不喜欢. Câu này KHÔNG dùng chung với 吗.",
      ex: [
        ["你忙不忙？", "Nǐ máng bu máng?", "Bạn có bận không?"],
        ["你喜不喜欢中国菜？", "Nǐ xǐ bu xǐhuan Zhōngguó cài?", "Bạn có thích món Trung không?"]
      ]
    },
    {
      p: "有没有 – dạng chính phản của 有",
      e: "有没有 = 'có… không'. Rất hay dùng khi hỏi sở hữu.",
      ex: [
        ["你有没有时间？", "Nǐ yǒu méiyǒu shíjiān?", "Bạn có thời gian không?"],
        ["他有没有孩子？", "Tā yǒu méiyǒu háizi?", "Anh ấy có con không?"]
      ]
    },
    {
      p: "…怎么样？ – hỏi ý kiến/tình hình",
      e: "Đặt sau danh từ để hỏi 'X thế nào?'. Cũng dùng để đề nghị.",
      ex: [
        ["你最近怎么样？", "Nǐ zuìjìn zěnmeyàng?", "Dạo này bạn thế nào?"],
        ["明天怎么样？", "Míngtiān zěnmeyàng?", "Mai thì sao?"]
      ]
    }
  ],
  dialogue: {
    title: "Hỏi thăm bạn cũ",
    lines: [
      ["A", "好久不见！你最近怎么样？", "Hǎojiǔ bú jiàn! Nǐ zuìjìn zěnmeyàng?", "Lâu rồi không gặp! Dạo này bạn sao rồi?"],
      ["B", "还好。工作忙不忙？", "Hái hǎo. Gōngzuò máng bu máng?", "Cũng ổn. Công việc bạn có bận không?"],
      ["A", "很忙，但是我很喜欢。", "Hěn máng, dànshì wǒ hěn xǐhuan.", "Bận lắm, nhưng tôi rất thích."],
      ["B", "你身体好不好？", "Nǐ shēntǐ hǎo bu hǎo?", "Sức khỏe bạn tốt không?"],
      ["A", "很好，谢谢！你有没有时间喝咖啡？", "Hěn hǎo, xièxie! Nǐ yǒu méiyǒu shíjiān hē kāfēi?", "Rất tốt, cảm ơn! Bạn có thời gian uống cà phê không?"],
      ["B", "有，明天怎么样？", "Yǒu, míngtiān zěnmeyàng?", "Có, mai thì sao?"]
    ]
  },
  drills: [
    ["你忙不忙？", "Nǐ máng bu máng?", "Bạn có bận không?"],
    ["你有没有时间？", "Nǐ yǒu méiyǒu shíjiān?", "Bạn có thời gian không?"],
    ["你最近怎么样？", "Nǐ zuìjìn zěnmeyàng?", "Dạo này bạn thế nào?"],
    ["你喜不喜欢？", "Nǐ xǐ bu xǐhuan?", "Bạn có thích không?"],
    ["我觉得很好。", "Wǒ juéde hěn hǎo.", "Tôi thấy rất tốt."]
  ]
},

{
  d: 13, week: 2, theme: "Gia đình & con người",
  title: "Động từ thường ngày · Câu có tân ngữ",
  goal: "Dùng 10 động từ cốt lõi trong câu hoàn chỉnh.",
  tip: "Học động từ luôn đi kèm tân ngữ quen thuộc: 喝水 uống nước, 吃饭 ăn cơm, 看书 đọc sách. Não nhớ cụm dễ hơn nhớ từ đơn.",
  vocab: [
    ["吃", "chī", "ăn"],
    ["喝", "hē", "uống"],
    ["看", "kàn", "xem, nhìn, đọc"],
    ["听", "tīng", "nghe"],
    ["说", "shuō", "nói"],
    ["学习", "xuéxí", "học tập"],
    ["去", "qù", "đi"],
    ["来", "lái", "đến"],
    ["做", "zuò", "làm"],
    ["饭", "fàn", "cơm, bữa ăn"],
    ["水", "shuǐ", "nước"],
    ["书", "shū", "sách"]
  ],
  grammar: [
    {
      p: "Cụm động – tân cố định",
      e: "Nhiều động từ tiếng Trung cần tân ngữ mặc định. 吃饭 = 'ăn cơm' nhưng nghĩa rộng là 'ăn (bữa)'. 说话 = 'nói chuyện'.",
      ex: [
        ["我们去吃饭吧。", "Wǒmen qù chīfàn ba.", "Chúng ta đi ăn cơm đi."],
        ["他在看书。", "Tā zài kàn shū.", "Anh ấy đang đọc sách."]
      ]
    },
    {
      p: "Chuỗi động từ: 去 + động từ",
      e: "Hai động từ nối tiếp nhau, không cần 'để' hay 'and': 我去买东西 = tôi đi mua đồ.",
      ex: [
        ["我去吃饭。", "Wǒ qù chīfàn.", "Tôi đi ăn cơm."],
        ["你来做什么？", "Nǐ lái zuò shénme?", "Bạn đến làm gì?"]
      ]
    }
  ],
  dialogue: {
    title: "Rủ đi ăn",
    lines: [
      ["A", "你吃饭了吗？", "Nǐ chīfàn le ma?", "Bạn ăn cơm chưa?"],
      ["B", "还没有。你呢？", "Hái méiyǒu. Nǐ ne?", "Chưa. Còn bạn?"],
      ["A", "我也没吃。我们去吃饭吧！", "Wǒ yě méi chī. Wǒmen qù chīfàn ba!", "Tôi cũng chưa ăn. Chúng ta đi ăn đi!"],
      ["B", "好！你想吃什么？", "Hǎo! Nǐ xiǎng chī shénme?", "Được! Bạn muốn ăn gì?"],
      ["A", "我想吃中国菜。", "Wǒ xiǎng chī Zhōngguó cài.", "Tôi muốn ăn món Trung Quốc."],
      ["B", "好，我们走吧。", "Hǎo, wǒmen zǒu ba.", "Được, đi thôi."]
    ]
  },
  drills: [
    ["你吃饭了吗？", "Nǐ chīfàn le ma?", "Bạn ăn cơm chưa?"],
    ["我想喝水。", "Wǒ xiǎng hē shuǐ.", "Tôi muốn uống nước."],
    ["他在看书。", "Tā zài kàn shū.", "Anh ấy đang đọc sách."],
    ["我们去吃饭吧。", "Wǒmen qù chīfàn ba.", "Chúng ta đi ăn cơm đi."],
    ["我学习中文。", "Wǒ xuéxí Zhōngwén.", "Tôi học tiếng Trung."]
  ]
},

{
  d: 14, week: 2, theme: "Gia đình & con người",
  title: "TỔNG ÔN TUẦN 2 · Hội thoại làm quen mở rộng",
  goal: "Tự giới thiệu 5 câu liền mạch về bản thân và gia đình.",
  tip: "Mốc quan trọng: hôm nay bạn phải nói được 1 phút về bản thân mà không nhìn giấy. Hãy tự quay video và nghe lại.",
  review: [8, 9, 10, 11, 12, 13],
  vocab: [
    ["中文", "Zhōngwén", "tiếng Trung"],
    ["越南语", "Yuènányǔ", "tiếng Việt"],
    ["英语", "Yīngyǔ", "tiếng Anh"],
    ["会", "huì", "biết (kỹ năng), sẽ"],
    ["一点儿", "yìdiǎnr", "một chút"],
    ["现在", "xiànzài", "bây giờ"],
    ["因为", "yīnwèi", "bởi vì"],
    ["所以", "suǒyǐ", "cho nên"]
  ],
  grammar: [
    {
      p: "会 – biết một kỹ năng đã học",
      e: "会 dùng cho kỹ năng học được: nói ngoại ngữ, lái xe, bơi. Phủ định: 不会.",
      ex: [
        ["我会说一点儿中文。", "Wǒ huì shuō yìdiǎnr Zhōngwén.", "Tôi biết nói một chút tiếng Trung."],
        ["他不会说英语。", "Tā bú huì shuō Yīngyǔ.", "Anh ấy không biết nói tiếng Anh."]
      ]
    },
    {
      p: "因为…所以… – vì… nên…",
      e: "Khác tiếng Anh, tiếng Trung dùng CẢ HAI vế. Rất giống tiếng Việt 'vì… cho nên…'.",
      ex: [
        ["因为我喜欢中国，所以我学中文。", "Yīnwèi wǒ xǐhuan Zhōngguó, suǒyǐ wǒ xué Zhōngwén.", "Vì tôi thích Trung Quốc nên tôi học tiếng Trung."]
      ]
    }
  ],
  dialogue: {
    title: "Bài tự giới thiệu mẫu (học thuộc!)",
    lines: [
      ["Tôi", "大家好！我姓阮，我叫阮文山。", "Dàjiā hǎo! Wǒ xìng Ruǎn, wǒ jiào Ruǎn Wén Shān.", "Chào mọi người! Tôi họ Nguyễn, tên Nguyễn Văn Sơn."],
      ["Tôi", "我是越南人，今年三十岁。", "Wǒ shì Yuènánrén, jīnnián sānshí suì.", "Tôi là người Việt Nam, năm nay 30 tuổi."],
      ["Tôi", "我家有四口人：爸爸、妈妈、一个妹妹和我。", "Wǒ jiā yǒu sì kǒu rén: bàba, māma, yí ge mèimei hé wǒ.", "Nhà tôi có bốn người: bố, mẹ, một em gái và tôi."],
      ["Tôi", "我现在会说一点儿中文。", "Wǒ xiànzài huì shuō yìdiǎnr Zhōngwén.", "Bây giờ tôi biết nói một chút tiếng Trung."],
      ["Tôi", "因为我喜欢中国，所以我学习中文。", "Yīnwèi wǒ xǐhuan Zhōngguó, suǒyǐ wǒ xuéxí Zhōngwén.", "Vì tôi thích Trung Quốc nên tôi học tiếng Trung."],
      ["Tôi", "很高兴认识大家，谢谢！", "Hěn gāoxìng rènshi dàjiā, xièxie!", "Rất vui được làm quen với mọi người, cảm ơn!"]
    ]
  },
  drills: [
    ["我会说一点儿中文。", "Wǒ huì shuō yìdiǎnr Zhōngwén.", "Tôi biết nói một chút tiếng Trung."],
    ["我是越南人，今年三十岁。", "Wǒ shì Yuènánrén, jīnnián sānshí suì.", "Tôi là người Việt, năm nay 30 tuổi."],
    ["我家有四口人。", "Wǒ jiā yǒu sì kǒu rén.", "Nhà tôi có bốn người."],
    ["因为我喜欢，所以我学。", "Yīnwèi wǒ xǐhuan, suǒyǐ wǒ xué.", "Vì tôi thích nên tôi học."],
    ["很高兴认识大家！", "Hěn gāoxìng rènshi dàjiā!", "Rất vui được làm quen mọi người!"]
  ]
}

);
