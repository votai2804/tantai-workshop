---
title : "Dọn dẹp tài nguyên"
date : 2024-01-01
weight : 6
chapter : false
pre : " <b> 5.6. </b> "
---

# Dọn dẹp tài nguyên

Chúc mừng bạn đã hoàn thành bài workshop này! 

Trong bài lab này, bạn đã học được cách triển khai một ứng dụng frontend bảo mật và kết nối nó tới backend serverless:
- Sử dụng AWS Amplify để host tệp tĩnh tự động từ GitHub.
- Sử dụng Amazon CloudFront và AWS WAF để cache tài nguyên toàn cầu và bảo mật biên mạng.
- Sử dụng Route 53 để định tuyến tên miền riêng sang CloudFront.
- Sử dụng API Gateway để tạo các endpoint REST, cấu hình CORS và liên kết Lambda function.

#### Dọn dẹp tài nguyên
Để tránh phát sinh chi phí ngoài ý muốn trên tài khoản AWS của bạn, hãy tiến hành dọn dẹp các tài nguyên đã tạo:

1. **Xóa bản ghi DNS Route 53**:
   - Truy cập giao diện quản trị Route 53 Hosted zones.
   - Chọn hosted zone của bạn và xóa bản ghi `A` Alias trỏ sang CloudFront distribution.

2. **Xóa CloudFront Distribution**:
   - Truy cập giao diện quản trị CloudFront.
   - Chọn distribution đã tạo, nhấn **Disable** và chờ cho trạng thái chuyển sang disabled.
   - Chọn lại distribution đó và nhấn **Delete**.

3. **Xóa ứng dụng AWS Amplify**:
   - Truy cập giao diện AWS Amplify.
   - Chọn app của bạn, bấm vào menu **Actions** ở góc trên cùng bên phải và chọn **Delete app**.

4. **Xóa API Gateway REST API**:
   - Truy cập giao diện API Gateway.
   - Chọn API `AI-Riddle-API`, bấm chọn **Actions** (hoặc nút bên cạnh tên API) và chọn **Delete**.