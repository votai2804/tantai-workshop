---
title: "Blog 2"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
---

# Kiến trúc bảo mật Serverless: Cách bảo vệ ứng dụng AI Riddle Generator trên AWS

### 1. Nội dung chính (Main Content)
Khi triển khai ứng dụng Serverless kết hợp Generative AI phục vụ cho lượng lớn người dùng, bảo mật nhiều lớp (**Defense in Depth**) là yêu cầu bắt buộc. Nếu không có cơ chế phòng thủ tốt, hệ thống có thể đối mặt với các nguy cơ như tấn công từ chối dịch vụ (DDoS), lạm dụng API gây tốn chi phí gọi mô hình AI (như Bedrock), hoặc rò rỉ dữ liệu lưu trữ. 

Bài viết này giới thiệu cách thiết lập lá chắn bảo mật toàn diện trên AWS cho ứng dụng **AI Riddle Generator** từ biên mạng (Edge CDN) cho tới cơ sở dữ liệu backend và hệ thống cảnh báo tự động.

---

### 2. Các điểm chính cần nắm (Key Takeaways)
* **Bảo vệ vòng ngoài:** Sử dụng CloudFront CDN phân phối nội dung tĩnh kết hợp HTTPS để chống nghe lén, đồng thời tích hợp AWS WAF để lọc traffic, chặn SQL Injection, XSS và giới hạn tần suất request (Rate Limiting).
* **Xác thực cổng API:** Amazon Cognito quản lý định danh người dùng và cấp mã JWT Token. API Gateway đóng vai trò làm Authorizer kiểm tra JWT Token trước khi chuyển tiếp yêu cầu đến backend xử lý.
* **Nguyên tắc quyền hạn tối thiểu:** Sử dụng AWS IAM để giới hạn tối đa quyền của Lambda (chỉ được phép tương tác với Bedrock, ghi dữ liệu vào DynamoDB chỉ định và lưu trữ tệp trên S3 riêng tư).
* **Giám sát & Cảnh báo thời gian thực:** Logs hoạt động được CloudWatch thu thập. Khi phát hiện lỗi hoặc tần suất bất thường, CloudWatch Alarm kích hoạt gửi cảnh báo ngay lập tức qua Amazon SNS tới Email/Slack.

---

### 3. Hình ảnh (Images)
Dưới đây là sơ đồ kiến trúc bảo mật nhiều lớp và luồng xác thực được áp dụng cho ứng dụng AI Riddle Generator trên AWS:

1. **Sơ đồ kiến trúc bảo mật toàn diện:**
   ![Sơ đồ kiến trúc bảo mật toàn diện](/images/5-Workshop/5.1-Workshop-overview/1.png)

2. **Luồng xác thực tích hợp Cognito và API Gateway:**
   ![Luồng xác thực Cognito](/images/3-BlogsPosted/Blog2/CognitoDiagram.png)

---

### 4. Link (References)
* **Bài viết gốc:** [Secure API Access with Amazon Cognito, Amazon API Gateway, and AWS Lambda](https://aws.amazon.com/blogs/compute/secure-api-access-with-amazon-cognito-federated-identities-amazon-cognito-user-pools-and-amazon-api-gateway/)  
* **Link bài đăng Facebook:** 

---

### 5. Hướng dẫn (Guides)
Các giải pháp kỹ thuật cụ thể được cấu hình cho từng tầng bảo mật bao gồm:
1. **Lớp biên (Edge Layer):**
   * *Mã hóa:* CloudFront bắt buộc giao tiếp HTTPS giữa client và CDN.
   * *Tường lửa:* AWS WAF thiết lập Rate Limit (ví dụ: giới hạn tối đa 100 request/phút trên mỗi IP) để ngăn chặn spam API sinh câu đố.
2. **Lớp xác thực (Auth Layer):**
   * *Quản lý phiên:* Cognito User Pool lưu trữ thông tin tài khoản Giáo viên/Phụ huynh.
   * *Cửa ngõ API:* API Gateway tích hợp Cognito Authorizer để giải mã và xác minh chữ ký số của mã ID Token trước khi kích hoạt hàm Lambda.
3. **Lớp tính toán & Dữ liệu (Compute & Storage Layer):**
   * *IAM Role:* Hàm `generateRiddle` được gán policy chỉ cho phép gọi dịch vụ Bedrock (`bedrock:InvokeModel`) và ghi dữ liệu DynamoDB (`dynamodb:PutItem`).
   * *S3 Presigned URLs:* S3 bucket được cấu hình chặn hoàn toàn truy cập public (`Block Public Access`). Tệp PDF/Word xuất bản chỉ có thể truy cập qua đường link presigned tạm thời có hiệu lực ngắn hạn.
4. **Lớp giám sát (Monitoring Layer):**
   * CloudWatch thiết lập các bộ lọc Filter Patterns trên Logs (ví dụ: đếm tần suất lỗi `AccessDenied` hoặc `HTTP 401/403`).
   * Cấu hình CloudWatch Metric Filter kích hoạt Alarm gửi tin nhắn qua SNS Topic tới email vận hành khi vượt quá ngưỡng cấu hình.