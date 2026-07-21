---
title: "Worklog Tuần 4"
date: 2026-05-11
weight: 4
chapter: false
pre: " <b> 1.4. </b> "
---

### Mục tiêu tuần 4:
* Hoàn thành bài thực hành Lab 03 và Lab 10.
* Dự án: Thiết kế sơ đồ kiến trúc hệ thống tổng thể cho ứng dụng AI Riddle Generator.

### Các công việc triển khai (12/05 - 14/05/2026):

| Thứ | Công việc | Ngày bắt đầu | Ngày kết thúc | Ghi chú |
| --- | --- | --- | --- | --- |
| 3 | Hoàn thành bài thực hành Lab 03 | 12/05/2026 | 12/05/2026 | [https://000003.awsstudygroup.com/](https://000003.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan3/tao-EC2-lab03.png) |
| 4 | Thực hành bổ trợ: Đang hoàn thiện Lab 10 | 13/05/2026 | 13/05/2026 | [https://000010.awsstudygroup.com/](https://000010.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan4/lab10.png) |
| 5 | **Dự án (Thiết kế cấu trúc):** Thiết kế sơ đồ kiến trúc ứng dụng (Amplify, API Gateway, Lambda, Bedrock, DynamoDB, S3) | 14/05/2026 | 14/05/2026 | Thiết kế cấu trúc (Project Architecture) |


### Chi tiết nội dung học tập, thực hành và dự án:

#### 1. Thực hành Lab 10: Hybrid DNS với Route 53 Resolver
* **Mục tiêu:** Xây dựng hệ thống DNS lai (Hybrid DNS) tích hợp on-premise với AWS Route 53.
* **Tóm tắt nội dung:** Cấu hình Route 53 Resolver với Outbound Endpoints (gửi truy vấn từ Route 53 sang on-premise), Inbound Endpoints (nhận truy vấn từ on-premise) và các Resolver Rules để định tuyến tên miền cụ thể.
* **Kỹ năng đạt được:** Cấu hình Hybrid DNS, quản trị Route 53 Resolver, định tuyến mạng.

#### 2. Dự án (Thiết kế cấu trúc): Sơ đồ kiến trúc ứng dụng
* **Mục tiêu:** Thiết kế cấu trúc mạng và dữ liệu bảo mật, chịu tải tốt cho dự án.
* **Tóm tắt nội dung:** Dựa trên bản đề xuất dự án (Proposal), thiết kế luồng dữ liệu kết nối React Frontend host trên AWS Amplify, gọi API REST qua API Gateway, xử lý tính toán serverless với Lambda kết nối Amazon Bedrock (Claude 3.5 Sonnet), và lưu trữ lịch sử qua DynamoDB & S3.
* **Kỹ năng đạt được:** Vẽ sơ đồ kiến trúc, mô hình hóa bảo mật dữ liệu, tích hợp dịch vụ Serverless.


### Kết quả đạt được:
* Hoàn thành xuất sắc Lab 03 và Lab 10.
* Phác thảo xong sơ đồ kiến trúc hệ thống của dự án AI Riddle Generator kết hợp dịch vụ AWS.
