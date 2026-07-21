---
title: "Kiểm thử Giao diện & Báo cáo Sản phẩm"
date: 2024-01-01
weight: 13
chapter: false
pre: " <b> 5.13. </b> "
---

### Kiểm thử Giao diện Người dùng & Báo cáo Ứng dụng Web AI Riddle Generator

Sau khi hoàn tất cấu hình hạ tầng backend Serverless trên AWS, bước cuối cùng là truy cập và nghiệm thu ứng dụng web frontend hoàn chỉnh. 

Ứng dụng được thiết kế theo cấu trúc **Single-Page Application (SPA)** phát triển trên nền tảng **React 19** kết hợp với công cụ đóng gói **Vite 8**. Giao diện áp dụng phong cách thiết kế **Glassmorphism** (kính mờ) hiện đại, hỗ trợ hiệu ứng chuyển đổi mượt màng và giao diện tương thích tốt trên mọi thiết bị.

> [!IMPORTANT]
> **Hiện trạng tích hợp hệ thống:**
> *   **Chức năng hoạt động thực tế (Real Integration):** Phân hệ **Tạo Câu Đố (Generator)** là tính năng duy nhất hoạt động thực tế, tích hợp trực tiếp qua API Gateway để gọi AWS Lambda và Amazon Bedrock LLM sinh câu đố theo từ khóa.
> *   **Chức năng phát triển trong tương lai (Future Development):** Các phân hệ **Đăng nhập (Cognito)**, **Cộng đồng (Community)**, và **Thư viện cá nhân (Library)** hiện tại được phát triển dưới dạng giao diện dữ liệu cứng (Mock Data / LocalStorage) để mô phỏng luồng trải nghiệm người dùng mẫu và cấu hình DynamoDB Single-Table Design trên giao diện. Các phân hệ này sẽ được tích hợp với dịch vụ AWS tương ứng trong tương lai.

---

### 1. Kịch bản Kiểm thử Thực tế & Các Phân hệ Giao diện Web (Chi tiết từng bước)

Dưới đây là kịch bản chạy thử nghiệm thực tế liên tục từ đầu đến cuối (End-to-End User Journey) của ứng dụng web, kết hợp giới thiệu các phân hệ chức năng tương ứng trực tiếp dưới từng bước giao diện:

#### 1.1. Phân hệ Xác thực Người dùng (Cognito Authentication) - *Phát triển trong tương lai*
*   **Mô tả chức năng:** Cổng đăng nhập và đăng ký tích hợp hệ thống bảo mật để gán vai trò Giáo viên (Teacher) hoặc Phụ huynh (Parent) nhằm gán các quyền IAM (Identity and Access Management) tương thích.
*   **Trạng thái tích hợp:** Tính năng này hiện tại được hoạch định phát triển trong tương lai. Giao diện hiện tại cung cấp các cấu hình tài khoản mẫu (Teacher Nguyễn Thị Mai, Parent Trần Văn Thu) để thuận tiện cho việc kiểm thử giao diện phân quyền ngay trên trình duyệt.
*   **Hình ảnh kiểm thử giao diện đăng nhập:**
    ![Đăng nhập Cognito](/images/5-Workshop/5.13-Web-Interface/test_login_page.png)
*   **Hình ảnh kiểm thử đăng nhập thành công:**
    Góc phải màn hình hiển thị thông tin hồ sơ của tài khoản đang hoạt động sau khi đăng nhập:
    ![Đăng nhập thành công](/images/5-Workshop/5.13-Web-Interface/test_login_success.png)

#### 1.2. Phân hệ Tạo Câu Đố (Generator Hub) - *Tích hợp thực tế*
*   **Mô tả chức năng:** Nơi người dùng (Giáo viên, Phụ huynh) tương tác trực tiếp với mô hình Trí tuệ nhân tạo (AI). Người dùng có thể cấu hình độ tuổi (Cấp 1, Cấp 2, Cấp 3), thể loại (Acrostic, Lịch sử - Văn học, Khoa học - Toán học), chủ đề và nhập "Từ khóa" đáp án.
*   **Trạng thái tích hợp:** Chức năng hoạt động thực tế, tích hợp trực tiếp qua API Gateway để gọi AWS Lambda và Amazon Bedrock LLM sinh câu đố theo từ khóa. Kết quả trả về gồm bài thơ đố, các gợi ý (khái quát/chi tiết) và đáp án ẩn dưới dạng collapsible. Nút "Lưu Vào Thư Viện" cho phép lưu cục bộ câu đố này vào LocalStorage của trình duyệt (giả lập thao tác lưu vào DynamoDB Table).
*   **Hình ảnh kiểm thử cấu hình đầu vào:**
    Nhập từ khóa `"Trái Đất"`, chọn chủ đề Địa lý, nhóm tuổi Cấp 1:
    ![Nhập từ khóa](/images/5-Workshop/5.13-Web-Interface/test_create_riddle_input.png)
*   **Hình ảnh kiểm thử kết quả tạo câu đố:**
    Hệ thống hiển thị câu đố thơ Acrostic sinh từ AI dưới định dạng Glassmorphism sang trọng với các gợi ý và đáp án ban đầu được ẩn kín:
    ![Kết quả tạo câu đố](/images/5-Workshop/5.13-Web-Interface/test_create_riddle_result.png)
*   **Hình ảnh kiểm thử gợi ý khái quát:**
    Khi nhấp chuột vào collapsible **💡 Gợi ý bước 1 (Khái quát)** để mở rộng khung nội dung gợi ý:
    ![Hiển thị Gợi ý 1](/images/5-Workshop/5.13-Web-Interface/test_create_riddle_hint.png)
*   **Hình ảnh kiểm thử đáp án cuối cùng:**
    Khi nhấp chuột vào collapsible **🏆 XEM ĐÁP ÁN CUỐI CÙNG** để hiển thị chính xác từ khóa đáp án:
    ![Hiển thị Đáp án](/images/5-Workshop/5.13-Web-Interface/test_create_riddle_answer.png)
*   **Hình ảnh kiểm thử lưu trữ câu đố:**
    Giáo viên click chọn **Lưu Vào Thư Viện**, dữ liệu được lưu xuống LocalStorage, nút lưu chuyển sang trạng thái đã lưu: `⭐ Đã Lưu Vào Thư Viện`.
    ![Lưu câu đố thành công](/images/5-Workshop/5.13-Web-Interface/test_create_riddle_saved.png)

#### 1.3. Phân hệ Cộng Đồng (Community Board) - *Phát triển trong tương lai*
*   **Mô tả chức năng:** Bảng tin hiển thị các câu đố được chia sẻ công khai bởi các thành viên, sắp xếp theo số lượt bình chọn (Upvotes) giảm dần thông qua DynamoDB GSI1. Hỗ trợ học sinh giải đố tương tác trực tiếp và người dùng bình chọn (upvote) câu đố hay.
*   **Trạng thái tích hợp:** Hoạch định phát triển trong tương lai. Giao diện hiện tại dùng dữ liệu cứng (mock data) để mô phỏng tương tác giải đố và bình chọn (upvote) trên bộ nhớ cục bộ.
*   **Hình ảnh kiểm thử giải đố chính xác:**
    Nhập đáp án đúng `"Bánh Chưng"` và bấm **Đoán**:
    ![Đoán đúng đáp án](/images/5-Workshop/5.13-Web-Interface/test_community_guess_correct.png)
*   **Hình ảnh kiểm thử giải đố chưa chính xác:**
    Nhập đáp án sai `"Bánh dày"` và bấm **Đoán**:
    ![Đoán sai đáp án](/images/5-Workshop/5.13-Web-Interface/test_community_guess_incorrect.png)
*   **Hình ảnh kiểm thử bình chọn câu đố (Upvoting):**
    Bấm biểu tượng 👍 ở góc trên thẻ câu đố Bánh Chưng. Điểm upvotes tăng từ 56 lên 57 ở bộ nhớ cục bộ:
    ![Upvote thành công](/images/5-Workshop/5.13-Web-Interface/test_community_upvote.png)

#### 1.4. Phân hệ Thư Viện Của Tôi (Personal Library) - *Phát triển trong tương lai*
*   **Mô tả chức năng:** Kho lưu trữ cá nhân hiển thị danh sách câu đố của tài khoản đang đăng nhập (query theo Partition Key và Sort Key `RIDDLE#`). Cho phép người dùng xuất tài liệu in ấn PDF/Word qua S3 Presigned URL.
*   **Trạng thái tích hợp:** Hoạch định phát triển trong tương lai. Giao diện hiện tại hiển thị danh sách các câu đố lưu trong LocalStorage và mô phỏng nút in ấn.
*   **Hình ảnh kiểm thử danh sách thư viện:**
    Hiển thị danh sách câu đố đã lưu cục bộ (bao gồm câu đố `"Trái Đất"` vừa tạo):
    ![Thư viện câu đố cá nhân](/images/5-Workshop/5.13-Web-Interface/test_library_list.png)
*   **Hình ảnh kiểm thử xuất bản in ấn PDF:**
    Nhấn nút **🖨️ Xuất PDF / In câu đố** trên thẻ câu đố `"Trái Đất"` để mở hộp thoại in tài liệu / preview PDF chuẩn hóa phục vụ việc giảng dạy trực tiếp:
    ![Xuất tài liệu in ấn PDF](/images/5-Workshop/5.13-Web-Interface/test_library_export.png)
    ![Xem trước bản in PDF](/images/5-Workshop/5.13-Web-Interface/test_library_export_PDF.png)

#### 1.5. Giao diện phụ trợ: Chế độ Tối (Dark Mode)
*   Ứng dụng hỗ trợ Dark Mode đầy đủ thông qua CSS Variables để giảm mỏi mắt khi dùng vào ban đêm:
    ![Dark Mode View](/images/5-Workshop/5.13-Web-Interface/riddle_dark_mode.png)

---

### 2. Kế hoạch Phát triển trong Tương lai (Future Development)

Để chuyển đổi ứng dụng từ mô hình thử nghiệm giao diện (Prototype) sang sản phẩm thương mại hoàn chỉnh chạy thực tế trên Cloud, các nhiệm vụ tích hợp cần triển khai bao gồm:

*   **Tích hợp Xác thực AWS Cognito thực tế:** Thay thế luồng giả lập bằng việc kết nối SDK chính thức của AWS Cognito (`@aws-amplify/auth` hoặc `amazon-cognito-identity-js`) để thực hiện đăng nhập và đăng ký thật, quản lý các token JWT xác thực trong cookies hoặc localStorage.
*   **Kết nối API Gateway cho Cộng đồng và Thư viện:** Chuyển đổi cơ chế lưu trữ cục bộ (Mock LocalStorage) sang các cuộc gọi API HTTP thông qua cấu hình `.env` (`REACT_APP_API_URL`). Toàn bộ hành động Lưu câu đố, Đọc thư viện cá nhân, Lấy danh sách cộng đồng, và Upvote sẽ được đồng bộ trực tiếp lên DynamoDB Table thông qua các API endpoint tương ứng.
*   **Hiện thực hóa luồng xuất file S3 Presigned URL thật:** Tích hợp hàm Lambda backend xuất file PDF/Word kết nối với S3 bucket thực tế để sinh và trả về Presigned URL có thời hạn cho phép tải xuống tài liệu thật, thay vì giao diện in ấn mô phỏng hiện tại.
*   **Tính năng Game hóa (Gamification) tương tác:** Thiết kế bảng xếp hạng (Leaderboard) thời gian thực và chế độ giải đố tính giờ cho trẻ em.
*   **Dashboard Phân tích cho Giáo viên (Analytics Dashboard):** Cấu hình AWS QuickSight hoặc xây dựng Dashboard biểu đồ ngay trên frontend hiển thị thống kê độ tuổi học sinh truy cập, chủ đề câu đố được tạo nhiều nhất và tỷ lệ giải đố thành công.

---

### 3. Đánh giá Tổng kết Sản phẩm

*   **Tính toàn vẹn của Kiến trúc (End-to-End Serverless):** Giao diện liên kết mượt mà với các giả lập thiết kế Single-Table Design trong DynamoDB, các luồng bảo mật của Cognito, và quản lý S3, phản ánh đúng logic nghiệp vụ được cấu hình trên AWS Cloud.
*   **Trải nghiệm Người dùng (UX/UI):** Phong cách Glassmorphism sang trọng, trực quan, dễ sử dụng cho các đối tượng giáo viên và phụ huynh. Thời gian phản hồi và chuyển đổi trang gần như tức thời nhờ cơ chế Single-Page Application.
*   **Khả năng mở rộng:** Cấu trúc mã nguồn React được mô đun hóa cao, dễ dàng mở rộng thêm các tính năng như trò chơi giải đố tương tác trực tiếp hoặc tính năng chấm điểm học sinh trong tương lai.
