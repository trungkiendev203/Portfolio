# Product Requirements Document (PRD): Portfolio chuẩn Apple

## 1. Tầm nhìn & Mục tiêu (Vision & Objective)
Xây dựng một trang web Portfolio cá nhân mang đậm ngôn ngữ thiết kế của Apple: **"Nhường sân khấu cho sản phẩm"** (Photography-first, UI recedes). 
Trang web sẽ không giống một CV khô khan, mà đóng vai trò như một phòng trưng bày (gallery) cao cấp. Mỗi dự án cá nhân của bạn sẽ được đối xử và trình bày như một sản phẩm công nghệ "flagship", tập trung vào khoảng trắng rộng rãi, chữ typography sắc nét và các chi tiết vi mô (micro-interactions) tinh tế.

## 2. Đối tượng mục tiêu (Target Audience)
- Nhà tuyển dụng (Recruiters), Quản lý kỹ thuật (Engineering Managers), và Khách hàng tiềm năng.
- **Mục tiêu cốt lõi:** Gây ấn tượng mạnh về tính thẩm mỹ, sự chỉn chu và tư duy UI/UX xuất sắc ngay từ 5 giây đầu tiên truy cập.

## 3. Tech Stack
- **Framework:** Vite + React (TypeScript).
- **Styling:** Vanilla CSS kết hợp CSS Variables để xây dựng Design Tokens theo đúng chuẩn hệ thống thiết kế. Không dùng TailwindCSS để kiểm soát chính xác từng pixel và mã màu.
- **Typography:** Font **Inter** (Google Fonts). Sẽ cấu hình ép `letter-spacing` để mô phỏng hiệu ứng "Apple tight" cho tiêu đề.

## 4. Hệ thống Thiết kế (Design System & UI Rules)
Áp dụng nghiêm ngặt các quy tắc:
- **Màu sắc (Colors):**
  - **Nền (Canvas):** Trắng tinh (`#ffffff`), Parchment - Trắng ngà (`#f5f5f7`), Đen gạch (`#272729`).
  - **Hành động (Action):** Chỉ 1 màu xanh duy nhất - Action Blue (`#0066cc`).
  - **Chữ (Text):** Đen mực (`#1d1d1f`) cho nền sáng, Trắng (`#ffffff`) cho nền tối. Không dùng pure black cho chữ.
- **Typography:**
  - Tiêu đề (Headlines): Font Inter 600, letter-spacing âm (`-0.02em` đến `-0.04em`).
  - Nội dung (Body): Font Inter 400, size 17px, line-height 1.47 (tạo nhịp điệu đọc thong thả).
- **Components:**
  - **Buttons:** Dạng viên thuốc (Pill `border-radius: 9999px`) cho nút chính. Khi click có hiệu ứng `transform: scale(0.95)`.
  - **Cards:** Viền siêu mỏng hairline (`#e0e0e0`), bo góc `18px`, không đổ bóng.
- **Chiều sâu (Elevation):** Chỉ dùng **ĐÚNG MỘT** loại shadow (`rgba(0, 0, 0, 0.22) 3px 5px 30px`) và chỉ áp dụng cho hình ảnh mockup thiết bị của dự án. Không đổ bóng cho UI.

## 5. Cấu trúc Trang (Layout & Sections)
Trang web sẽ là một Single Page mượt mà với các phần:

### 5.1. Global Navigation
- Dải đen (`#000000`) mỏng 44px dính trên cùng. Chứa chữ cực nhỏ (12px), liên kết tới các phần trong trang.

### 5.2. Hero Section (product-tile-light)
- Nền trắng tinh. Padding dọc siêu lớn (80px).
- Tiêu đề "Hello" hoặc "I'm [Tên]". Bên dưới là 2 nút bấm: 1 Primary Blue Pill (Xem Dự án), 1 Ghost Pill (Tải CV).
- Trung tâm là một hình ảnh thiết bị cực đẹp (hoặc chân dung) có hiệu ứng đổ bóng chuẩn Apple.

### 5.3. Featured Projects (Alternating full-bleed tiles)
Hiển thị xen kẽ các khối màu không có đường viền:
- **Dự án 1 (Nền đen `#272729`):** Tiêu đề chữ trắng, nút link màu xanh (`#2997ff`), hình mockup dự án tràn viền.
- **Dự án 2 (Nền Parchment `#f5f5f7`):** Tiêu đề chữ đen (`#1d1d1f`), nút link màu xanh (`#0066cc`), hình mockup bóng bẩy.

### 5.4. Skills & Gear (store-utility-card)
- Lưới các thẻ bo tròn góc 18px, nền trắng viền mỏng. 
- Giống như khu vực bán phụ kiện của Apple: Mỗi thẻ chứa 1 icon công nghệ (React, TS, Node...) được xếp gọn gàng, rộng rãi.

### 5.5. Footer
- Nền Parchment, chữ xám mờ. Chứa các cột link nhỏ, dày đặc (2.41 line-height) cho Github, LinkedIn, Mail.
