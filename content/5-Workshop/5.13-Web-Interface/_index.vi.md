---
title: "Kiểm thử Giao diện & Báo cáo Sản phẩm"
date: 2024-01-01
weight: 13
chapter: false
pre: " <b> 5.13. </b> "
---

### Kiểm thử Giao diện Người dùng & Báo cáo Ứng dụng Web AI Riddle Generator

Sau khi hoàn tất cấu hình toàn bộ hạ tầng backend Serverless trên AWS (bao gồm DynamoDB, S3, Lambda, API Gateway, Cognito, và Amplify), bước cuối cùng là truy cập và nghiệm thu ứng dụng web frontend hoàn chỉnh. 

Ứng dụng được thiết kế theo cấu trúc **Single-Page Application (SPA)** phát triển trên nền tảng **React 19** kết hợp với công cụ đóng gói siêu tốc **Vite 8**. Giao diện áp dụng phong cách thiết kế **Glassmorphism** (giao diện kính mờ) hiện đại, hỗ trợ đầy đủ các hiệu ứng chuyển đổi mượt mà và khả năng đáp ứng (responsive layout) tốt trên mọi thiết bị.

---

### 1. Chi tiết Các Phân hệ Chức năng trên Giao diện

Ứng dụng web được chia thành các phân hệ chức năng tương ứng với các menu điều hướng chính:

> [!IMPORTANT]
> **Trạng thái triển khai các tính năng trên Giao diện:**
> *   **Tính năng hoạt động thực tế (Live AWS Backend Connection):** Phân hệ **Tạo Câu Đố (Generator Hub)** đã được kết nối trực tiếp với hạ tầng cloud AWS (API Gateway -> Lambda -> Amazon Bedrock Claude 3.5 Sonnet) để sinh câu đố thời gian thực dựa trên từ khóa do người dùng nhập.
> *   **Các tính năng giả lập (Mock / Local Simulation):** Các phân hệ **Xác thực (Cognito)**, **Thư viện cá nhân (Personal Library)**, và **Cộng đồng (Community Board)** hiện tại hoạt động bằng dữ liệu cứng (mock data) và giả lập luồng xử lý ở phía client (local) để minh họa trọn vẹn kịch bản trải nghiệm người dùng (E2E), sẵn sàng để kết nối API thực tế trong tương lai.

#### 1.1. Phân hệ Tạo Câu Đố (Generator Hub) [Hoạt động thực tế - Live]
Nơi người dùng (Giáo viên, Phụ huynh) tương tác trực tiếp với mô hình Trí tuệ nhân tạo (AI):
*   **Các bộ lọc cấu hình:** 
    *   *Độ tuổi:* Phân loại theo cấp học (Cấp 1, Cấp 2, Cấp 3) để AI tự điều chỉnh từ vựng và độ khó phù hợp với tư duy trẻ em.
    *   *Thể loại câu đố:* Hỗ trợ câu đố ghép chữ đầu từ khóa (Acrostic) hoặc câu đố tư duy logic (Lịch sử - Văn học, Khoa học - Toán học).
    *   *Chủ đề:* Địa lý, Khoa học, Lịch sử, Động vật, Thực vật...
*   **Cơ chế sinh câu đố thực tế:** Người dùng nhập một "Từ khóa" (Keyword). Khi nhấn nút tạo, hệ thống gửi payload đến API Gateway, Lambda xử lý gọi Amazon Bedrock và kết xuất câu đố thời gian thực. Trình diễn kết quả bao gồm: nội dung câu đố, các gợi ý (Hint 1, Hint 2) và Đáp án được che giấu dưới dạng collapsible (nhấp vào để hiển thị).
*   **Tính năng lưu trữ:** Nút **"Lưu Vào Thư Viện"** giúp giả lập lưu trữ câu đố trực tiếp vào bộ nhớ local (localStorage) để hiển thị trong phân hệ Thư viện cá nhân.

![Giao diện Tạo câu đố](/images/5-Workshop/5.13-Web-Interface/homepage_logged_in.png)

#### 1.2. Phân hệ Cộng Đồng (Community Board) [Giả lập - Mock Data]
Bảng tin hiển thị các câu đố mẫu được chia sẻ công khai bởi các thành viên:
*   **Sắp xếp nổi bật (Featured Sorting):** Thiết kế giao diện hiển thị các câu đố mẫu theo số lượt bình chọn (Upvotes) giảm dần để minh họa cho kiến trúc chỉ mục phụ **GSI1 (Global Secondary Index)** định hướng trong DynamoDB.
*   **Bình chọn (Upvoting):** Cơ chế giả lập cập nhật tăng/giảm lượt upvote trực tiếp trên trình duyệt bằng Local State của React, mô phỏng quy tắc mỗi tài khoản chỉ được bình chọn một lần cho mỗi câu đố.
*   **Sao chép nhanh:** Cho phép người dùng lưu nhanh bất kỳ câu đố cộng đồng mẫu nào về thư viện cá nhân giả lập.

![Giao diện Cộng đồng](/images/5-Workshop/5.13-Web-Interface/riddle_community.png)

#### 1.3. Phân hệ Thư Viện Của Tôi (Personal Library) [Giả lập - Mock Data]
Kho lưu trữ cá nhân của riêng tài khoản:
*   **Quản lý danh sách:** Lấy dữ liệu từ localStorage và danh sách cứng để hiển thị các câu đố của tài khoản. Đây là bước minh họa cho luồng truy vấn DynamoDB theo Partition Key `USER#<UserId>` và Sort Key prefix `RIDDLE#`.
*   **Xuất tài liệu (Document Export):** Nút xuất file PDF/Word liên kết với tệp mẫu in ấn. Khi người dùng click, hệ thống mô phỏng việc tải tài liệu câu đố chuẩn hóa để phục vụ cho việc in ấn giảng dạy trên lớp.

![Giao diện Thư viện cá nhân](/images/5-Workshop/5.13-Web-Interface/riddle_my_library.png)

#### 1.4. Phân hệ Xác thực Người dùng (Cognito Authentication) [Giả lập - Mock Data]
Giao diện đăng nhập và đăng ký mô phỏng:
*   **Phân chia vai trò:** Giả lập phân chia vai trò **Giáo viên (Teacher)** hoặc **Phụ huynh (Parent)** nhằm hướng tới gán các quyền IAM tương ứng trong tương lai.
*   **Giả lập đăng nhập nhanh:** Cung cấp các cấu hình tài khoản mẫu (Teacher Nguyễn Thị Mai, Parent Trần Văn Thu) để người dùng click đăng nhập nhanh mà không cần tạo tài khoản thực tế trên Cognito.

![Giao diện Đăng nhập](/images/5-Workshop/5.13-Web-Interface/homepage_logged_out.png)

---

### 2. Kịch bản Trải nghiệm và Kiểm thử Giao diện Web

Dưới đây là kịch bản chạy thử nghiệm luồng trải nghiệm người dùng (E2E User Journey) từ đầu đến cuối trên giao diện:

#### 2.1. Bước 1: Khởi động & Luồng Đăng nhập giả lập (Authentication Flow - Simulated)
1. **Truy cập trang đăng nhập:** Người dùng truy cập trang chủ và nhấn chọn nút **Đăng nhập** ở góc trên bên phải. Hệ thống chuyển sang giao diện xác thực Cognito giả lập.
   ![Đăng nhập Cognito](/images/5-Workshop/5.13-Web-Interface/test_login_page.png)
2. **Xác thực nhanh:** Sử dụng cấu hình tài khoản Giáo viên mẫu `"Cô Nguyễn Thị Mai"` để thực hiện luồng đăng nhập giả lập.
3. **Đăng nhập thành công:** Sau 1 giây, hệ thống cấp JWT Token giả lập và chuyển hướng về trang chủ. Góc phải màn hình hiển thị thông tin hồ sơ của tài khoản đang hoạt động.
   ![Đăng nhập thành công](/images/5-Workshop/5.13-Web-Interface/test_login_success.png)

#### 2.2. Bước 2: Tạo Câu Đố Với AI Thực Tế (Riddle Creation - Live API Gateway/Lambda/Bedrock)
1. **Nhập tham số cấu hình:** Tại tab **Tạo Câu Đố**, chúng tôi chọn chủ đề "Địa lý", cấp học "Cấp 1" và nhập từ khóa đáp án là `"Trái Đất"`.
   ![Nhập từ khóa](/images/5-Workshop/5.13-Web-Interface/test_create_riddle_input.png)
2. **Kích hoạt AI tạo câu đố:** Nhấn chọn nút **⚡ Tạo Câu Đố Với AI**. Hệ thống gửi yêu cầu qua API Gateway đến AWS Lambda để kích hoạt Amazon Bedrock (Claude 3.5 Sonnet) sinh câu đố thơ chữ đầu (Acrostic) thực tế.
3. **Hiển thị kết quả thực tế:** Câu đố thơ Acrostic sinh từ AI được kết xuất dưới định dạng Glassmorphism sang trọng với các gợi ý và đáp án ban đầu được ẩn kín.
   ![Kết quả tạo câu đố](/images/5-Workshop/5.13-Web-Interface/test_create_riddle_result.png)
4. **Mở gợi ý khái quát:** Nhấp chuột vào collapsible **💡 Gợi ý bước 1 (Khái quát)** để hiển thị gợi ý.
   ![Hiển thị Gợi ý 1](/images/5-Workshop/5.13-Web-Interface/test_create_riddle_hint.png)
5. **Mở đáp án cuối cùng:** Nhấp chuột vào collapsible **🏆 XEM ĐÁP ÁN CUỐI CÙNG** để hiển thị từ khóa đáp án `"Trái Đất"`.
   ![Hiển thị Đáp án](/images/5-Workshop/5.13-Web-Interface/test_create_riddle_answer.png)
6. **Lưu trữ vào Thư viện local:** Giáo viên click chọn **Lưu Vào Thư Viện**. Hệ thống lưu câu đố này xuống localStorage. Nút lưu chuyển sang trạng thái `⭐ Đã Lưu Vào Thư Viện`.
   ![Lưu câu đố thành công](/images/5-Workshop/5.13-Web-Interface/test_create_riddle_saved.png)

#### 2.3. Bước 3: Tương tác Cộng đồng giả lập (Community Interactivity - Simulated)
Chuyển sang phân hệ **Cộng Đồng** hiển thị các câu đố mẫu:
1. **Đoán đáp án:**
   * Tìm đến thẻ câu đố nổi bật về `"Bánh Chưng"`.
   * Nhập đáp án `"Bánh Chưng"` và nhấn nút **Đoán**. Giao diện phản hồi thông báo màu xanh lá: `🎉 Chính xác! Đáp án đúng là: Bánh Chưng`.
   ![Đoán đúng đáp án](/images/5-Workshop/5.13-Web-Interface/test_community_guess_correct.png)
   * Thử nhập câu trả lời sai như `"Bánh dày"` và nhấn **Đoán**. Hệ thống phản hồi cảnh báo đỏ: `❌ Chưa đúng rồi, thử lại nhé!`.
   ![Đoán sai đáp án](/images/5-Workshop/5.13-Web-Interface/test_community_guess_incorrect.png)
2. **Bình chọn câu đố (Upvoting):** Nhấn biểu tượng nút 👍 trên thẻ. Điểm upvotes tăng từ 56 lên 57 bằng cơ chế cập nhật giao diện thời gian thực (React state).
   ![Upvote thành công](/images/5-Workshop/5.13-Web-Interface/test_community_upvote.png)

#### 2.4. Bước 4: Kho Lưu trữ Cá nhân & Xuất PDF giả lập (Personal Library & PDF Export - Simulated)
1. **Truy vấn danh sách:** Chuyển sang tab **Thư Viện Của Tôi** để hiển thị danh sách câu đố lấy từ bộ nhớ local (bao gồm câu đố `"Trái Đất"` vừa lưu ở Bước 2).
   ![Thư viện câu đố cá nhân](/images/5-Workshop/5.13-Web-Interface/test_library_list.png)
2. **Xuất bản tài liệu:**
   * Nhấp chọn nút **🖨️ Xuất PDF / In câu đố** trên thẻ câu đố `"Trái Đất"`.
   * Hệ thống kích hoạt hiển thị hộp thoại xem trước bản in / PDF chuẩn hóa để giáo viên chuẩn bị bài giảng.
   ![Xuất tài liệu in ấn PDF](/images/5-Workshop/5.13-Web-Interface/test_library_export.png)
   ![Xuất tài liệu in ấn PDF](/images/5-Workshop/5.13-Web-Interface/test_library_export_PDF.png)

#### 2.5. Giao diện phụ trợ: Chế độ Tối (Dark Mode)
Ứng dụng hỗ trợ Dark Mode đầy đủ thông qua CSS Variables để giảm mỏi mắt cho giáo viên và trẻ em khi dùng vào ban đêm.
![Dark Mode](/images/5-Workshop/5.13-Web-Interface/riddle_dark_mode.png)

---

### 3. Các Tính năng Phát triển trong Tương lai (Future Development)

Mặc dù dự án đã hoàn thiện mục tiêu cốt lõi của workshop (sinh câu đố AI thực tế), các tính năng sau đây được hoạch định để phát triển liên kết cloud thật trong tương lai:

*   **Tích hợp Xác thực Cognito thực tế:** Thay thế luồng mô phỏng Cognito nội bộ bằng thư viện `@aws-amplify/auth` hoặc SDK chính thức `amazon-cognito-identity-js` nhằm quản lý phiên đăng nhập thực tế với Cognito User Pool thật, bảo mật bằng JWT Token.
*   **Liên kết API Gateway & DynamoDB thực tế cho Library & Community:** Viết thêm các Lambda function xử lý nghiệp vụ ghi cơ sở dữ liệu và truy xuất danh sách từ DynamoDB thật, sau đó liên kết API Gateway endpoint vào frontend để thay thế hoàn toàn cho localStorage hiện tại.
*   **Tải tài liệu PDF từ S3 Presigned URL thực:** Liên kết Lambda xuất tài liệu in ấn lên S3, sau đó sinh S3 Presigned URL để client tải tài liệu thực tế về máy thay vì hiển thị giao diện xem trước in ấn.
*   **Tính năng Game hóa (Gamification) cho trẻ em:** Phát triển giao diện giải đố tương tác cho học sinh, tích hợp tính năng tính điểm và bảng xếp hạng (Leaderboard) để kích thích học tập.

---


### 4. Đánh giá Tổng kết Sản phẩm

*   **Tính toàn vẹn của Kiến trúc (End-to-End Serverless):** Giao diện liên kết mượt mà với các giả lập thiết kế Single-Table Design trong DynamoDB, các luồng bảo mật của Cognito, và quản lý S3, phản ánh đúng logic nghiệp vụ được cấu hình trên AWS Cloud.
*   **Trải nghiệm Người dùng (UX/UI):** Phong cách Glassmorphism sang trọng, trực quan, dễ sử dụng cho các đối tượng giáo viên và phụ huynh. Thời gian phản hồi và chuyển đổi trang gần như tức thời nhờ cơ chế Single-Page Application.
*   **Khả năng mở rộng:** Cấu trúc mã nguồn React được mô đun hóa cao, dễ dàng mở rộng thêm các tính năng như trò chơi giải đố tương tác trực tiếp hoặc tính năng chấm điểm học sinh trong tương lai.
