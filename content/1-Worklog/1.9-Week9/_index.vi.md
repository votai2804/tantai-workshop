---
title: "Worklog Tuần 9"
date: 2026-06-15
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Mục tiêu tuần 9:
* Hoàn thành các bài thực hành Lab 27, Lab 33 và Lab 44.
* Tham gia sự kiện công nghệ AWS ngày 20/06.
* Dự án: Triển khai host giao diện React trên AWS Amplify.

### Các công việc triển khai (15/06 - 20/06/2026):

| Thứ | Công việc | Ngày bắt đầu | Ngày kết thúc | Ghi chú |
| --- | --- | --- | --- | --- |
| 2 | Thực hành  Lab 27 | 15/06/2026 | 15/06/2026 | [https://000027.awsstudygroup.com/](https://000027.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan9/lab27.png) |
| 3 | Thực hành Lab 33 | 16/06/2026 | 16/06/2026 | [https://000033.awsstudygroup.com/](https://000033.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan9/lab33.png) |
| 4 | Thực hành Lab 44 | 17/06/2026 | 17/06/2026 | [https://000044.awsstudygroup.com/](https://000044.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan9/lab44.png) |
| 5 | **Dự án:** Thiết lập cấu trúc dự án & tìm hiểu chi tiết về tích hợp Amazon Bedrock AI | 18/06/2026 | 18/06/2026 | Project setup & Bedrock research |
| 6 | **Dự án (Triển khai Tuần 5/6):** Frontend Hosting - Liên kết Amplify với kho lưu trữ GitHub chứa giao diện React, thiết lập biến môi trường kết nối API | 19/06/2026 | 19/06/2026 | Triển khai dự án (Implementation) |
| 7 | Tham gia sự kiện công nghệ AWS (ngày 20/6) | 20/06/2026 | 20/06/2026 | Event |


### Chi tiết nội dung học tập, thực hành và dự án:

#### 1. Thực hành Lab 27: Quản lý tài nguyên bằng Tag và Resource Groups
* **Mục tiêu:** Tổ chức, phân loại và quản trị tài nguyên AWS một cách quy mô.
* **Tóm tắt nội dung:** Gán các siêu dữ liệu (Metadata) dưới dạng Tag (Key-Value) cho EC2, volumes và tạo Resource Groups dựa trên các Tag để quản lý hàng loạt.
* **Kỹ năng đạt được:** Quản trị tài nguyên AWS, thiết kế Tagging Strategy.

#### 2. Thực hành Lab 33: Mã hóa dữ liệu lưu trữ với AWS KMS
* **Mục tiêu:** Bảo vệ dữ liệu lưu trữ trên đám mây bằng cơ chế mã hóa.
* **Tóm tắt nội dung:** Tạo khóa mật mã (KMS Key), cấu hình S3 Bucket mã hóa dữ liệu mặc định, lưu log truy vết qua AWS CloudTrail và truy vấn log bằng Amazon Athena.
* **Kỹ năng đạt được:** Quản lý khóa (AWS KMS), thiết lập bảo mật dữ liệu mặc định, phân tích log CloudTrail.

#### 3. Thực hành Lab 44: IAM Role & Condition
* **Mục tiêu:** Thắt chặt quyền hạn của người dùng bằng các điều kiện truy cập.
* **Tóm tắt nội dung:** Tạo IAM User/Group cho EC2 và RDS Admin. Khởi tạo IAM Role kèm điều kiện (Condition) chỉ cho phép Assume Role khi kết nối từ địa chỉ IP doanh nghiệp cố định.
* **Kỹ năng đạt được:** Thiết lập chính sách IAM nâng cao (IAM Condition), cơ chế Assume Role.

#### 4. Tham gia sự kiện AWS ngày 20/06
* **Mục tiêu:** Ôn tập kiến thức đám mây và rèn luyện kỹ năng ra quyết định dưới áp lực.
* **Tóm tắt nội dung:** Tham gia cuộc thi công nghệ tìm hiểu các tình huống thực tế của AWS, học cách quản trị rủi ro qua quyết định sử dụng "ngôi sao may mắn" và chiến thuật làm việc nhóm.
* **Kỹ năng đạt được:** Luyện thi chứng chỉ AWS, làm việc nhóm dưới áp lực, quản trị rủi ro.

#### 5. Dự án (Triển khai Tuần 5/6): Frontend Hosting trên AWS Amplify
* **Mục tiêu:** Đưa giao diện ứng dụng web của phụ huynh/giáo viên lên môi trường internet.
* **Tóm tắt nội dung:** Liên kết dự án React/Vite từ GitHub lên AWS Amplify. Cấu hình tự động biên dịch và triển khai (CI/CD Pipeline) mỗi khi có thay đổi code mới trên nhánh `main`, thiết lập các biến môi trường kết nối API.
* **Kỹ năng đạt được:** Triển khai AWS Amplify Hosting, cấu hình GitHub CI/CD, quản trị biến môi trường frontend.


### Kết quả đạt được:
* Hoàn thành tốt các bài Lab thực hành quản lý tài nguyên và bảo mật dữ liệu.
* Deploy giao diện web tĩnh của dự án thành công trên AWS Amplify tích hợp GitHub CI/CD.
* Tham gia sự kiện và củng cố kiến thức thi chứng chỉ AWS.
