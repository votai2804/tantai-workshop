---
title: "Worklog Tuần 6"
date: 2026-05-25
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Mục tiêu tuần 6:
* Học lý thuyết Module 3 và làm việc tại văn phòng.
* Hoàn thành các bài thực hành Lab 13, Lab 24 và Lab 57.
* Dự án: Tích hợp trí tuệ nhân tạo (Amazon Bedrock) kết nối Claude 3.5 Sonnet sinh câu đố.

### Các công việc triển khai (25/05 - 30/05/2026):

| Thứ | Công việc | Ngày bắt đầu | Ngày kết thúc | Ghi chú |
| --- | --- | --- | --- | --- |
| 2 | Lên văn phòng làm việc trực tiếp (ngày 25/5 và 26/5) & Học lý thuyết Module 3 | 25/05/2026 | 26/05/2026 | [Lesson Link](https://www.youtube.com/watch?v=-t5h4N6vfBs&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i&index=72) |
| 4 | Thực hành Lab 13 | 27/05/2026 | 27/05/2026 | [https://000013.awsstudygroup.com/](https://000013.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan6/lab13-S3.png) |
| 5 | Thực hành Lab 24 | 28/05/2026 | 28/05/2026 | [https://000024.awsstudygroup.com/](https://000024.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan6/lab24.png) |
| 6 | Thực hành Lab 57 | 29/05/2026 | 29/05/2026 | [https://000057.awsstudygroup.com/](https://000057.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan6/lab57.png) |
| 7 | **Dự án (Triển khai Tuần 2/6):** Tích hợp trí tuệ nhân tạo (AI Inference) - Viết API kết nối Amazon Bedrock gọi mô hình Claude 3.5 Sonnet sinh câu đố từ prompt | 30/05/2026 | 30/05/2026 | Triển khai dự án (Implementation) |


### Chi tiết nội dung học tập, thực hành và dự án:

#### 1. Thực hành Lab 13: Triển khai AWS Backup
* **Mục tiêu:** Tự động hóa sao lưu và khôi phục dữ liệu để bảo vệ tài sản doanh nghiệp.
* **Tóm tắt nội dung:** Tạo Backup Plan để sao lưu EBS Volumes định kỳ, kiểm thử khôi phục dữ liệu từ bản sao lưu và cấu hình AWS SNS gửi thông báo trạng thái qua email.
* **Kỹ năng đạt được:** Quản lý sao lưu (AWS Backup), cấu hình cảnh báo AWS SNS, bảo vệ dữ liệu.

#### 2. Thực hành Lab 24: Triển khai File Storage Gateway
* **Mục tiêu:** Kết nối lưu trữ đám mây AWS với hệ thống on-premises bằng giao thức chia sẻ file.
* **Tóm tắt nội dung:** Tạo AWS Storage Gateway (dạng File Gateway), cấu hình File Share kết nối tới S3 Bucket và gắn kết (mount) ổ đĩa SMB này vào máy chủ on-premises.
* **Kỹ năng đạt được:** Quản trị AWS Storage Gateway, cấu hình SMB File Share, tích hợp Hybrid Storage.

#### 3. Thực hành Lab 57: Khởi đầu với Amazon S3
* **Mục tiêu:** Lưu trữ đối tượng (Object Storage) và phân biệt S3 Static Web với Amplify.
* **Tóm tắt nội dung:** Tạo S3 bucket, quản lý object, thiết lập phân quyền bucket policy. Tìm hiểu khuyến nghị sử dụng Amplify Hosting để bảo mật tốt hơn và có HTTPS/CDN mặc định.
* **Kỹ năng đạt được:** Quản trị Amazon S3, cấu hình phân quyền truy cập đối tượng.

#### 4. Dự án (Triển khai Tuần 2/6): Tích hợp AI Inference
* **Mục tiêu:** Sử dụng Generative AI để tự động tạo câu đố thông minh từ từ khóa.
* **Tóm tắt nội dung:** Viết mã nguồn Lambda gọi API Amazon Bedrock, đóng gói các Prompt chi tiết (gồm System Prompt định hình vai trò Chuyên gia giáo dục trẻ em) gửi tới mô hình Anthropic Claude 3.5 Sonnet để sinh câu đố, thơ giấu đầu dạng JSON sạch.
* **Kỹ năng đạt được:** Tích hợp Amazon Bedrock API, kỹ thuật Context Engineering, xử lý dữ liệu JSON trong Node.js.


### Kết quả đạt được:
* Hoàn thành xuất sắc các bài thực hành Lab 13, 24, 57.
* Tích hợp thành công Amazon Bedrock gọi mô hình AI sinh câu đố qua Lambda.
