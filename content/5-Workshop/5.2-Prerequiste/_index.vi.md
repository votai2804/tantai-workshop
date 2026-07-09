---
title: "Các bước chuẩn bị"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 5.2. </b> "
---

# Các bước chuẩn bị

Trước khi bắt đầu bài workshop này, hãy đảm bảo rằng bạn đã chuẩn bị sẵn sàng các thành phần sau:

#### 1. Tài khoản AWS
- Một tài khoản AWS đang hoạt động.
- Một tài khoản IAM User hoặc Role có đủ quyền quản trị đối với các dịch vụ AWS Amplify, Amazon CloudFront, AWS WAF, Amazon Route 53 và Amazon API Gateway.

#### 2. Mã nguồn & Tài khoản GitHub
- Một tài khoản GitHub cá nhân.
- Mã nguồn của phần giao diện (React.js, Vue.js hoặc Angular) đã được đẩy lên kho lưu trữ (repository) GitHub ở chế độ công khai hoặc riêng tư. Kho lưu trữ này sẽ được kết nối để triển khai trên AWS Amplify.

#### 3. Tên miền riêng (Domain Name)
- Một tên miền đã đăng ký (ví dụ: `yourdomain.com`).
- Tên miền này có thể được quản lý thông qua Amazon Route 53 (sử dụng Public Hosted Zone) hoặc các nhà đăng ký DNS bên ngoài khác.

#### 4. Dịch vụ Backend
- Các dịch vụ xử lý API ở phía backend (chẳng hạn như các hàm AWS Lambda) đã được triển khai và hoạt động ổn định.
- Ghi lại Khu vực (Region) của AWS mà các hàm Lambda này đang hoạt động.