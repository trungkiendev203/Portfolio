# Hướng dẫn Chuẩn bị Nội dung (Content Strategy) cho Portfolio Apple-Style

Trong thiết kế mang phong cách Apple, giao diện rất tối giản, do đó **chữ viết (copywriting) và hình ảnh đóng vai trò quyết định 100% sự thành bại của trang web**. Nếu viết quá dài hoặc quá sáo rỗng, thiết kế sẽ mất đi sự sang trọng. 

Dưới đây là tài liệu liệt kê chính xác những nội dung bạn cần chuẩn bị (điền vào chỗ trống) để mình có thể ghép vào code.

---

## 1. Global Navigation (Thanh điều hướng)
*Cần ngắn gọn nhất có thể. Khuyên dùng tiếng Anh để giữ được typography đẹp nhất.*
- **Logo Text:** Tên gọi hoặc nghệ danh của bạn (VD: `Kiên Đ.` hoặc `Kien.`)
- **Menu Links:** 3-4 mục (VD: `Work`, `About`, `Skills`, `Contact`)

---

## 2. Hero Section (Phần Giới thiệu Mở đầu)
*Đây là "cú đấm" đầu tiên khi user vào web. Cần sự tự tin, dứt khoát.*

- **Headline (Tiêu đề chính):** Cực kỳ ngắn. 1 đến 3 từ mỗi dòng.
  - *Gợi ý:* "Hello. I'm Kien.", "Frontend Engineer.", "Thiết kế. Lập trình."
- **Tagline (Dòng mô tả phụ):** Đúng 1 câu duy nhất.
  - *Gợi ý:* "Xây dựng trải nghiệm web tốc độ cao và giao diện pixel-perfect."
- **Primary CTA (Nút chính):** "Xem dự án" hoặc "View Work"
- **Secondary CTA (Nút phụ):** "Tải CV" hoặc "Download Resume"
- **Hình ảnh (Hero Image):** 
  - Một bức ảnh chân dung nhìn thật chuyên nghiệp, HOẶC 
  - Một bức ảnh chụp góc làm việc nghệ thuật, HOẶC
  - Một file 3D render logo/tên của bạn. 
  - *(Yêu cầu: Hình ảnh trong suốt PNG hoặc nền xám nhạt, chất lượng cực cao).*

---

## 3. Featured Projects (Các Dự án Nổi bật)
*Bạn chỉ nên chọn 2-3 dự án TỐT NHẤT. Apple không bao giờ khoe 10 sản phẩm cùng lúc. Mỗi dự án là một "flagship".*

### Dự án 1 (Flagship - Khuyên dùng nền Đen)
- **Tên Dự án:** Ngắn gọn, có tính thương hiệu (VD: `ProDash`, `E-Com Redesign` thay vì `Đồ án môn web`).
- **Tagline:** 1 câu chốt hạ tính năng "ăn tiền" nhất. (VD: "Phân tích dữ liệu phức tạp chỉ trong một cú nhấp chuột.")
- **Nút bấm:** "Xem Case Study" hoặc "View Project"
- **Hình ảnh Mockup:** Bắt buộc phải có. Ví dụ: Ảnh chụp màn hình web của bạn được lồng vào khung hình Macbook hoặc iMac. Ảnh phải rất to, sắc nét.

### Dự án 2 (Khuyên dùng nền Trắng/Parchment)
- **Tên Dự án:** [Tên dự án của bạn]
- **Tagline:** [1 câu mô tả]
- **Hình ảnh Mockup:** Nên là ảnh lồng vào khung điện thoại iPhone (nếu là web mobile-responsive) để tạo sự đa dạng so với dự án 1.

---

## 4. Skills & Gear (Kỹ năng)
*Đừng viết một danh sách dấu chấm (bullet points) nhàm chán. Hãy phân nhóm chúng thành các Thẻ (Cards).*

Chuẩn bị 3-4 nhóm kỹ năng:
- **Nhóm 1:** 
  - *Icon/Emoji:* ⚛️
  - *Tên nhóm:* React Ecosystem
  - *Mô tả ngắn:* Next.js, Vite, TypeScript, Tailwind CSS.
- **Nhóm 2:** 
  - *Icon/Emoji:* 🎨
  - *Tên nhóm:* UI/UX & Design
  - *Mô tả ngắn:* Chuyển đổi thiết kế Figma thành code Pixel-perfect, Animation.
- **Nhóm 3:**
  - *Icon/Emoji:* ⚙️
  - *Tên nhóm:* Backend & Tools
  - *Mô tả ngắn:* Node.js, Git, CI/CD, RESTful APIs.

---

## 5. Contact & Footer (Chân trang)
- **Thông điệp chốt:** "Bạn có một dự án thú vị? Hãy trò chuyện."
- **Nút bấm Liên hệ:** Trỏ thẳng vào mail (mailto:...) hoặc link Zalo/Telegram.
- **Danh sách Links (Footer columns):**
  - Cột Connect: LinkedIn, GitHub, Dribbble (nếu có).
  - Cột Contact: Email của bạn, Số điện thoại.

---

## 📝 Việc bạn cần làm bây giờ:
1. Lập một file text nháp (hoặc gõ luôn vào khung chat này) các nội dung tương ứng theo form trên.
2. Chọn lọc sẵn 2-3 hình ảnh đẹp nhất của dự án (khuyên dùng dạng mockup Macbook/iPhone). 

Khi bạn cung cấp xong nội dung, mình sẽ lắp ngay vào `App.tsx` và bạn sẽ thấy trang web "thay da đổi thịt" lập tức!
