# 汉 Hán Ngữ 90 — Học tiếng Trung từ con số 0

Ứng dụng web cá nhân dành cho người Việt bắt đầu học tiếng Trung từ số 0, học **1 giờ mỗi ngày trong 90 ngày** để giao tiếp được những tình huống đời thường.

Chạy trực tiếp trên trình duyệt Safari của iPhone, cài được vào màn hình chính như một app thật, và **hoạt động cả khi không có mạng**.

---

## Nội dung khoá học

| Tuần | Ngày | Chủ đề |
|---|---|---|
| 1 | 1–7 | Pinyin, 4 thanh điệu, chào hỏi, số 0–10 |
| 2 | 8–14 | Gia đình, tuổi tác, câu hỏi chính phản, tự giới thiệu |
| 3 | 15–21 | Xem giờ, thứ – ngày – tháng, 在, hẹn gặp |
| 4 | 22–28 | Ăn uống, gọi món, 了, mời và từ chối |
| 5 | 29–35 | Số lớn, tiền, màu sắc, mặc cả, so sánh 比 |
| 6 | 36–42 | Phương hướng, giao thông, taxi, tàu điện, khách sạn |
| 7 | 43–49 | Nhà cửa, đồ vật, gọi điện thoại, 给, hỏi lý do |
| 8 | 50–56 | Thời tiết, sức khỏe, đi khám bệnh, cảm xúc, bổ ngữ 得 |
| 9 | 57–63 | Công việc, sở thích, 过, 还是 / 或者, học tập |
| 10 | 64–70 | Kể chuyện quá khứ, giải trí, 一边…一边, 把, bổ ngữ khả năng |
| 11 | 71–77 | Ngân hàng, khẩn cấp, bưu điện, khiếu nại, nói chuyện phiếm |
| 12 | 78–84 | Công sở, họp hành, đàm phán, xin lỗi, lễ nghi & quà tặng |
| 13 | 85–90 | 6 kịch bản tổng hợp: làm quen, nhà hàng, du lịch, kết bạn, xử lý sự cố, tốt nghiệp |

**Quy mô:** 90 bài học · **842 từ vựng** · ~90 điểm ngữ pháp · 90 hội thoại · **1082 câu mẫu** (tương đương HSK 1–2 và phần đầu HSK 3).

### Một buổi học 60 phút gồm 7 bước

| Bước | Thời lượng | Nội dung |
|---|---|---|
| 🔁 Khởi động | 5′ | Ôn các thẻ từ đến hạn |
| 🔤 Phát âm | 5′ | Chỉ ở tuần 1 — thanh điệu, thanh mẫu, vận mẫu |
| 📖 Từ vựng | 15′ | 7–14 từ mới, có phát âm chuẩn |
| 🧩 Ngữ pháp | 15′ | 1–3 điểm ngữ pháp kèm ví dụ |
| 💬 Hội thoại | 10′ | Hội thoại thực tế, nghe cả bài hoặc từng câu |
| 🎤 Luyện nói | 10′ | Đọc to, máy chấm điểm phát âm |
| ✅ Kiểm tra | 5′ | 10 câu trắc nghiệm |

---

## Tính năng

- **Lặp lại ngắt quãng (SRS)** kiểu SM-2: thẻ nhớ dễ giãn ra 2 → 7 → 25 ngày, thẻ quên quay lại ngay.
- **Phát âm chuẩn** bằng giọng tiếng Trung của hệ thống (zh-CN), chỉnh được tốc độ đọc.
- **Chấm điểm phát âm** qua micro — bạn đọc, máy nghe và so khớp với câu mẫu.
- **Luyện nghe**: phát câu tiếng Trung, chọn nghĩa đúng.
- **Kiểm tra** 3 dạng: Hán → nghĩa, nghĩa → Hán, nghe → nghĩa.
- **Từ điển** 842 từ, tìm theo chữ Hán / pinyin / tiếng Việt, đánh dấu ★ từ khó.
- **Bảng phát âm** đầy đủ: thanh điệu, thanh mẫu, vận mẫu và 6 quy tắc biến điệu.
- **Thống kê**: chuỗi ngày liên tiếp, biểu đồ 14 ngày, bản đồ tiến độ 90 ngày.
- **Chạy offline** hoàn toàn sau lần mở đầu tiên (service worker).
- **Sao lưu / khôi phục** tiến độ bằng file JSON.

---

## Cài lên iPhone

1. Mở link GitHub Pages của repo bằng **Safari** (không dùng Chrome — Chrome trên iOS không cài được app).
2. Bấm nút **Chia sẻ** (ô vuông có mũi tên) → **Thêm vào MH chính** → **Thêm**.
3. Mở app từ màn hình chính: chạy toàn màn hình, không có thanh địa chỉ.

### Bật giọng đọc tiếng Trung (làm 1 lần)

Nếu bấm 🔊 mà không nghe thấy gì:

**Cài đặt → Trợ năng → Nội dung được đọc → Giọng nói → Tiếng Trung (Phổ thông)** → tải giọng về → mở lại app.

### Cho phép micro (để chấm điểm phát âm)

Lần đầu bấm 🎤 Safari sẽ hỏi quyền — chọn **Cho phép**. Nếu lỡ từ chối: **Cài đặt → Safari → Micrô**.

---

## Đưa lên GitHub Pages

```bash
# Lần đầu: tạo repo trống trên github.com (ví dụ: han-ngu-90), rồi:
git remote add origin https://github.com/<TÊN-GITHUB>/han-ngu-90.git
git branch -M main
git push -u origin main
```

Sau đó vào **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.

Khoảng 1 phút sau app có tại:
`https://<TÊN-GITHUB>.github.io/han-ngu-90/`

Những lần cập nhật sau:

```bash
git add -A && git commit -m "cập nhật" && git push
```

---

## Chạy trên máy tính

Mở thẳng `index.html` bằng trình duyệt là chạy được. Muốn thử chế độ offline (service worker) thì cần http, ví dụ mở qua GitHub Pages hoặc bất kỳ web server tĩnh nào.

---

## Cấu trúc thư mục

```
index.html               Trang chính
manifest.webmanifest     Khai báo PWA
sw.js                    Service worker (offline)
css/style.css            Toàn bộ giao diện
js/store.js              Trạng thái, localStorage, thuật toán SRS
js/tts.js                Đọc tiếng Trung + nhận diện giọng nói + chấm điểm
js/app.js                Toàn bộ màn hình và điều hướng
js/data/lessons-01..07.js  90 bài học
js/data/pinyin.js        Bảng tra phát âm
icons/                   Icon cho màn hình chính
_test.html               Bộ kiểm thử tự động (47 test) — mở bằng trình duyệt để chạy
```

## Dữ liệu của bạn

Toàn bộ tiến độ lưu trong **localStorage của chính máy bạn**, không gửi đi đâu. Đổi máy, xoá dữ liệu Safari hoặc gỡ app là mất.

👉 Định kỳ vào **Cài đặt → Xuất dữ liệu**, sao chép đoạn JSON và lưu vào Ghi chú/iCloud. Khi cần thì **Nhập dữ liệu** để khôi phục.

---

## Cách dùng để thật sự nói được sau 3 tháng

1. **Học đúng 1 tiếng, mỗi ngày, không bỏ ngày nào.** Chuỗi ngày liên tiếp quan trọng hơn thời lượng một buổi.
2. **Đọc TO thành tiếng.** Đọc thầm gần như vô dụng với tiếng Trung vì thanh điệu nằm ở cơ miệng, không nằm ở mắt.
3. **Đừng bỏ bước ôn tập** ở đầu buổi. Học 20 từ mới mà quên 20 từ cũ là đứng yên tại chỗ.
4. **Từ ngày 60 trở đi**, tăng phần luyện nói lên 25 phút và giảm phần từ vựng mới.
5. Sau ngày 90: học tiếp HSK 3, xem phim Trung có phụ đề tiếng Trung, và tìm một người để nói chuyện 2 buổi/tuần.

加油！
