---
title: "Giới thiệu"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 5.1. </b> "
---

# Giới thiệu

#### Tổng quan Kiến trúc Hệ thống
Dự án **AI Riddle Generator** (Hệ thống tạo câu đố tư duy) được thiết kế serverless hoàn toàn, khả năng mở rộng cao, tối ưu chi phí và bảo mật tuyệt đối. Kiến trúc hệ thống bao gồm các tầng logic chính sau:

1. **Tầng Biên & Giao diện (Edge & Presentation)**: AWS Amplify lưu trữ tài nguyên tĩnh của giao diện web (React/Vue). Tên miền được phân giải và định tuyến bởi Amazon Route 53 đến Amazon CloudFront. Tường lửa AWS WAF đứng trước CloudFront để bảo vệ ứng dụng khỏi các cuộc tấn công web và prompt injection.
2. **Xác thực & API Gateway**: AWS Cognito quản lý đăng ký, đăng nhập của người dùng. Amazon API Gateway tiếp nhận và định tuyến các yêu cầu HTTPS từ frontend đến backend xử lý.
3. **Logic Serverless & Trục AI**: AWS Lambda xử lý các logic nghiệp vụ backend và gọi sang Amazon Bedrock (mô hình Anthropic Claude 3.5 Sonnet) để tạo các câu đố tư duy.
4. **Lưu trữ & Dữ liệu**: Amazon DynamoDB lưu trữ tài khoản người dùng và lịch sử câu đố, trong khi Amazon S3 quản lý các tệp xuất bản in ấn (PDF/Word).

Luồng dữ liệu bắt đầu khi trình duyệt yêu cầu tải trang web. Route 53 phân giải tên miền, CloudFront tải giao diện từ Amplify và Cognito thực hiện xác thực người dùng. Khi người dùng yêu cầu tạo câu đố, giao diện gửi request qua API Gateway đến Lambda. Lambda gọi sang Bedrock để sinh nội dung bằng AI, lưu lịch sử vào DynamoDB và tải file xuất bản lên S3 trước khi trả kết quả về giao diện.

#### Tổng quan bài Lab
Trong bài workshop này, bạn sẽ tập trung thực hành phần triển khai **Tầng Biên, Giao diện và kết nối API Gateway**:
- **Đẩy giao diện web lên AWS Amplify** để thiết lập quy trình tự động deploy CI/CD từ GitHub.
- **Kích hoạt Amazon CloudFront và AWS WAF** để tăng tốc phân phối nội dung toàn cầu và bảo vệ trang web.
- **Định tuyến tên miền qua Route 53** để kết nối tên miền riêng đến CloudFront.
- **Thiết lập API REST trên API Gateway** để tích hợp giao diện với các hàm Lambda xử lý ở backend và cấu hình CORS.
