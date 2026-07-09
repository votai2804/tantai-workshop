---
title: "Workshop"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 5. </b> "
---

# Đẩy giao diện lên Hosting và liên kết giao diện với API

#### Tổng quan
Trong bài workshop này, bạn sẽ học cách triển khai một ứng dụng giao diện (frontend) serverless hiện đại trên AWS, cấu hình phân phối nội dung toàn cầu kết hợp bảo mật nâng cao, và tích hợp giao diện này với một hệ thống API REST serverless ở phía backend.

Bạn sẽ làm việc trực tiếp với các dịch vụ AWS quan trọng sau:
- **AWS Amplify**: Dịch vụ lưu trữ (hosting) giao diện web tĩnh, tích hợp trực tiếp với kho lưu trữ GitHub để tự động triển khai CI/CD.
- **Amazon CloudFront**: Đóng vai trò là Mạng lưới phân phối nội dung (CDN) giúp bộ đệm (cache) tài nguyên ở các vị trí biên toàn cầu, giảm thiểu độ trễ cho người dùng.
- **AWS WAF (Web Application Firewall)**: Tường lửa ứng dụng web giúp bảo vệ hệ thống ngay tại các điểm biên trước các lỗ hổng web phổ biến và các cuộc tấn công tiêm nhiễm câu lệnh (prompt injection).
- **Amazon Route 53**: Dịch vụ quản lý DNS hỗ trợ điều phối tên miền và định tuyến lưu lượng truy cập mượt mà đến CloudFront.
- **Amazon API Gateway**: Cửa ngõ API giúp quản lý các endpoints REST, kích hoạt CORS và liên kết cuộc gọi API với các hàm backend AWS Lambda.

#### Nội dung

1. [Tổng quan về workshop](5.1-Workshop-overview/)
2. [Các bước chuẩn bị](5.2-Prerequiste/)
3. [Đẩy giao diện lên AWS Amplify](5.3-Amplify/)
4. [Kích hoạt CloudFront, WAF & Route 53](5.4-CloudFront/)
5. [Khởi tạo API Gateway và liên kết](5.5-APIGateway/)
6. [Dọn dẹp tài nguyên](5.6-Cleanup/)