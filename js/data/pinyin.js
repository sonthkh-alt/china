/* Bảng pinyin tra cứu - dùng cho tab "Phát âm" */
window.PINYIN = {
  tones: [
    { mark: "ā", name: "Thanh 1 (阴平)", desc: "Cao, ngang, đều. Giữ nguyên cao độ như hát một nốt.", ex: "mā 妈 (mẹ)", vi: "Không có dấu tương đương trong tiếng Việt — gần như đọc cao và kéo dài." },
    { mark: "á", name: "Thanh 2 (阳平)", desc: "Đi lên từ giữa tới cao, như khi hỏi lại 'Hả?'", ex: "má 麻 (cây gai)", vi: "Gần giống dấu SẮC tiếng Việt nhưng kéo dài hơn." },
    { mark: "ǎ", name: "Thanh 3 (上声)", desc: "Xuống thấp rồi mới lên. Trong câu thường chỉ đọc phần xuống.", ex: "mǎ 马 (ngựa)", vi: "Gần giống dấu HỎI tiếng Việt." },
    { mark: "à", name: "Thanh 4 (去声)", desc: "Rơi mạnh từ cao xuống thấp, dứt khoát.", ex: "mà 骂 (mắng)", vi: "Gần giống dấu NẶNG nhưng có độ rơi rõ." },
    { mark: "a", name: "Thanh nhẹ (轻声)", desc: "Ngắn, nhẹ, không nhấn. Luôn đi sau một âm tiết khác.", ex: "ma 吗 (trợ từ hỏi)", vi: "Đọc lướt qua." }
  ],
  initials: [
    { g: "Âm môi", items: [["b", "p Việt, không bật hơi", "bā 八"], ["p", "p bật hơi mạnh", "pà 怕"], ["m", "m Việt", "mā 妈"], ["f", "ph Việt", "fàn 饭"]] },
    { g: "Âm đầu lưỡi", items: [["d", "t Việt, không bật hơi", "dà 大"], ["t", "th Việt, bật hơi", "tā 他"], ["n", "n Việt", "nǐ 你"], ["l", "l Việt", "lái 来"]] },
    { g: "Âm gốc lưỡi", items: [["g", "c/k Việt, không bật hơi", "gāo 高"], ["k", "kh Việt, bật hơi", "kàn 看"], ["h", "h nặng hơn h Việt", "hǎo 好"]] },
    { g: "Âm mặt lưỡi (chỉ + i/ü)", items: [["j", "ch Việt nhẹ, môi dẹt", "jiā 家"], ["q", "ch bật hơi mạnh", "qù 去"], ["x", "x Việt, môi dẹt", "xiè 谢"]] },
    { g: "Âm cong lưỡi", items: [["zh", "tr Việt, lưỡi cong lên", "zhè 这"], ["ch", "tr bật hơi", "chī 吃"], ["sh", "s Việt uốn lưỡi", "shì 是"], ["r", "r Anh, uốn lưỡi", "rén 人"]] },
    { g: "Âm đầu lưỡi phẳng", items: [["z", "d + z, lưỡi phẳng", "zài 在"], ["c", "ts bật hơi", "cài 菜"], ["s", "x Việt, lưỡi phẳng", "sān 三"]] }
  ],
  finals: [
    { g: "Nguyên âm đơn", items: ["a", "o", "e", "i", "u", "ü"] },
    { g: "Nguyên âm đôi", items: ["ai", "ei", "ao", "ou", "ia", "ie", "ua", "uo", "üe"] },
    { g: "Kết thúc -n", items: ["an", "en", "in", "un", "ün", "ian", "uan", "üan", "uen"] },
    { g: "Kết thúc -ng", items: ["ang", "eng", "ing", "ong", "iang", "iong", "uang", "ueng"] },
    { g: "Đặc biệt", items: ["er", "i (sau zh/ch/sh/r)", "i (sau z/c/s)"] }
  ],
  rules: [
    { t: "Biến điệu thanh 3", d: "Hai thanh 3 liền nhau → chữ đầu đọc thành thanh 2. 你好 nǐ hǎo đọc là ní hǎo." },
    { t: "Biến điệu 不 bù", d: "不 đứng trước thanh 4 → đọc bú. 不是 bú shì, 不去 bú qù." },
    { t: "Biến điệu 一 yī", d: "Trước thanh 4 → yí (一个 yí ge). Trước thanh 1/2/3 → yì (一天 yì tiān). Đứng một mình → yī." },
    { t: "Bỏ hai chấm của ü", d: "Sau j, q, x, y thì ü viết thành u nhưng vẫn đọc ü: ju = jü, qu = qü, xu = xü, yu = yü." },
    { t: "Vị trí dấu thanh", d: "Ưu tiên: a > o > e > i > u > ü. Nếu có iu hoặc ui thì đánh dấu lên chữ cuối: liù, duì." },
    { t: "Âm i sau z/c/s và zh/ch/sh/r", d: "Không đọc là 'i' mà là âm kéo dài của phụ âm: zi, ci, si, zhi, chi, shi, ri." }
  ]
};
