---
title: "Worklog Tuần 10"
date: 2026-06-22
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---

### Mục tiêu tuần 10:
* Học lý thuyết Module 6 (AWS Architecting Course Conclusion).
* Hoàn thành các bài thực hành Lab 28, Lab 30 và Lab 48.
* Dự án: Triển khai định tuyến Route 53, CDN CloudFront, bảo mật biên WAF và xác thực đăng nhập Cognito.

### Các công việc triển khai (22/06 - 27/06/2026):

| Thứ | Công việc | Ngày bắt đầu | Ngày kết thúc | Ghi chú |
| --- | --- | --- | --- | --- |
| 2 | Học lý thuyết Module 6 (AWS Architecting Course Conclusion) | 22/06/2026 | 22/06/2026 | [Lesson Link](https://www.youtube.com/watch?v=mQWnLwVvTjo&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i&index=180) |
| 3 | Thực hành Lab 28 | 23/06/2026 | 23/06/2026 | [https://000028.awsstudygroup.com/](https://000028.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan10/lab28.png) |
| 4 | Thực hành Lab 30 | 24/06/2026 | 24/06/2026 | [https://000030.awsstudygroup.com/](https://000030.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan10/lab30.png) |
| 5 | Thực hành Lab 48 | 25/06/2026 | 25/06/2026 | [https://000048.awsstudygroup.com/](https://000048.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan10/lab48.png) |
| 6 | **Dự án (Triển khai Tuần 6/6):** Định tuyến & bảo mật - Cấu hình CloudFront phân phối nội dung, tích hợp WAF chặn mã độc ở biên, Route 53 trỏ tên miền | 26/06/2026 | 26/06/2026 | Triển khai dự án (Implementation) |
| 7 | **Dự án (Triển khai Tuần 6/6):** Cognito Auth - Khởi tạo Cognito User Pool cho SPA và cấu hình Authorizer trên API Gateway bảo mật phương thức API | 27/06/2026 | 27/06/2026 | Triển khai dự án (Implementation) |


### Chi tiết nội dung học tập, thực hành và dự án:

#### 1. Thực hành Lab 28: Quản lý truy cập EC2 bằng Resource Tag và IAM
* **Mục tiêu:** Áp dụng phân quyền động dựa trên nhãn tài nguyên.
* **Tóm tắt nội dung:** Viết chính sách IAM Policy cho phép người dùng quản trị EC2 chỉ được chỉnh sửa hoặc tạo các instance có gắn thẻ Tag cụ thể tương ứng với môi trường làm việc.
* **Kỹ năng đạt được:** Attribute-Based Access Control (ABAC), quản lý chính sách IAM nâng cao.

#### 2. Thực hành Lab 30: Giới hạn quyền người dùng bằng IAM Permission Boundary
* **Mục tiêu:** Thiết lập trần quyền lực tối đa để ngăn chặn leo thang đặc quyền.
* **Tóm tắt nội dung:** Cấu hình Permission Boundary gán cho Admin dịch vụ để giới hạn quyền hạn thực tế (Effective Permission) ngay cả khi họ được đính kèm các Group Admin có quyền cao hơn.
* **Kỹ năng đạt được:** Quản trị bảo mật IAM, thiết lập Permission Boundaries, ngăn chặn privilege escalation.

#### 3. Thực hành Lab 48: Cấp quyền truy cập tài nguyên bằng IAM Role
* **Mục tiêu:** Tránh việc lưu trữ thông tin nhạy cảm (Access Keys) trực tiếp trong ứng dụng.
* **Tóm tắt nội dung:** Cấu hình EC2 Instance Profile, gán IAM Role trực tiếp cho máy chủ máy ảo để ứng dụng tự lấy thông tin xác thực tạm thời truy cập AWS S3.
* **Kỹ năng đạt được:** Cấu hình Instance Profiles, thiết lập bảo mật EC2-to-S3, quản lý Credential an toàn.

#### 4. Học lý thuyết Module 6 (Course Conclusion)
* **Mục tiêu:** Nắm vững kiến trúc tối ưu bảo mật và thiết kế hệ thống lớn.
* **Tóm tắt nội dung:** Học về các CSDL Aurora, RDS, dịch vụ bộ nhớ đệm ElastiCache, kho dữ liệu Redshift và các kiến trúc đám mây tối ưu.
* **Kỹ năng đạt được:** Thiết kế kiến trúc đám mây tối ưu, tối ưu hóa CSDL trên AWS.

#### 5. Dự án (Triển khai Tuần 6/6): Định tuyến, Bảo mật & Cognito Auth
* **Mục tiêu:** Đưa ứng dụng vào hoạt động thực tế với mức độ bảo mật cao nhất.
* **Tóm tắt nội dung:** Khởi tạo CloudFront CDN tăng tốc tải trang toàn cầu, đính kèm tường lửa AWS WAF ngăn chặn tấn công mạng (DDoS, SQL Injection) và Prompt Injection ở biên. Đăng ký tên miền Route 53. Khởi tạo Cognito User Pool cho người dùng và thiết lập Cognito Authorizer bảo mật REST API trên API Gateway.
* **Kỹ năng đạt được:** Cấu hình CloudFront & WAF bảo mật biên, quản trị tên miền Route 53, thiết lập Cognito Authentication & JWT token validation.


### Kết quả đạt được:
* Học xong toàn bộ khóa học AWS Architecting và hoàn thành xuất sắc các bài thực hành.
* Ứng dụng hoàn thiện cơ chế bảo mật biên qua CloudFront & WAF, ánh xạ tên miền Route 53 và bảo mật API qua Cognito.
