---
title: "Bản đề xuất"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

# AI Riddle Generator - Đề Xuất Dự Án

---

## 1. Tổng quan Dự án

**Tên Dự án**: Ứng dụng AI Riddle Generator 
**Thời lượng**: 12 tuần (17/04 - 10/07/2026)  
**Thực tập sinh**: Võ Tấn Tài 
**Trường**: Đại học Công Nghệ TP.HCM (HUTECH)

### Dự án là gì?

Một hệ thống ứng dụng AI để tự động tạo câu đố tư duy, thơ giấu đầu (Acrostic) hoặc câu đố tiếng Việt mượt mà kèm gợi ý cho trẻ em. Hệ thống được xây dựng hoàn toàn trên nền tảng điện toán đám mây Amazon Web Services (AWS) với định hướng Serverless (không quản lý máy chủ).

---

## 2. Vấn đề Cần Giải Quyết

### Thách Thức Hiện Tại
- Việc sáng tạo nội dung giáo dục, câu đố và thơ ca cho trẻ em đòi hỏi nhiều thời gian và công sức.
- Các ứng dụng truyền thống gặp khó khăn trong việc cá nhân hóa nội dung (từ khóa, độ tuổi, thể loại) một cách nhanh chóng.
- Hệ thống thông thường dễ gặp tình trạng quá tải khi lượng truy cập tăng đột biến, chi phí vận hành máy chủ tĩnh cao.
- Rủi ro về bảo mật hệ thống AI (Prompt Injection) và các cuộc tấn công mạng (DDoS).

### Giải Pháp
Xây dựng giải pháp serverless kết hợp Generative AI:
- Sử dụng mô hình ngôn ngữ lớn (LLM) để tự động hóa hoàn toàn quá trình chuyển đổi từ khóa thành thơ/câu đố.
- TKiến trúc Serverless giúp hệ thống tự động mở rộng theo lượng người dùng truy cập thực tế và tối ưu hóa chi phí.
- Triển khai các lớp bảo mật đa tầng từ ngoài vào trong để ngăn chặn mã độc và tấn công mạng.

---

## 3. Mục Tiêu Dự Án

### Mục Tiêu Chính
1. **Tích hợp Trí tuệ Nhân tạo (AI Inference)**: Kết nối thành công với Amazon Bedrock và sử dụng mô hình Anthropic Claude 3.5 Sonnet để tạo nội dung.
2. **Xây dựng hạ tầng Serverless**: Ứng dụng AWS Lambda làm trung tâm điều phối logic, kết hợp cùng API Gateway và DynamoDB.
3. **Quản lý Định danh & Phân quyền**: Áp dụng AWS Cognito để quản lý quyền truy cập của Phụ huynh và Giáo viên thông qua JWT Token.
4. **Tối ưu Giao diện & Bảo mậtt**: Lưu trữ web tĩnh trên AWS Amplify, phân phối qua CloudFront và bảo vệ bằng AWS WAF.
5. **Giám sát & Vận hành**: Triển khai CloudWatch để thu thập mã log và SNS để gửi cảnh báo khẩn cấp cho Admin.

---

## 4. Kiến trúc Giải Pháp

### Dịch Vụ AWS (3 Dịch Vụ Chính)

| Dịch Vụ | Mục Đích | Lý Do Chọn |
|---------|----------|----------|
| **Amazon Bedrock** | Trục xử lý Trí tuệ nhân tạo (AI Inference Pipeline) | Kết nối trực tiếp mô hình Claude 3.5 Sonnet để tạo câu đố, sinh JSON sạch. |
| **AWS Lambda** | Tầng xử lý logic (Serverless Compute) | Hoạt động độc lập, tự động mở rộng, đóng gói Prompt và tương tác với AI/Database. |
| **API Gateway & Cognito** | Tầng định danh & cửa ngõ API (Authentication & API) | Xác thực JWT Token, định tuyến an toàn luồng request từ giao diện lên Backend. |
| **DynamoDB & S3** | Tầng lưu trữ & dữ liệu (Data Persistence & Storage) | DynamoDB lưu lịch sử/upvote tốc độ mili-giây; S3 lưu trữ và xuất file PDF/Word an toàn qua Presigned URL. |
| **CloudFront, WAF, Amplify** | Tầng biên & giao diện (Edge & Presentation) | Amplify lưu mã nguồn, CloudFront tăng tốc tải trang, WAF chặn DDoS và Prompt Injection. |
---

## 5. Timeline Dự Án

### Giai Đoạn 1: Setup Hạ Tầng & Bảo Mật (Tuần 1-3) ✅
- Đăng ký tên miền và cấu hình Amazon Route 53.
- Triển khai source code giao diện lên AWS Amplify và phân phối qua Amazon CloudFront.
- Thiết lập tường lửa AWS WAF và hệ thống định danh AWS Cognito.

### Giai Đoạn 2: Phát Triển Backend & Tích Hợp AI (Tuần 4-8) ✅
- Xây dựng cổng Amazon API Gateway để nhận request.
- Lập trình hàm AWS Lambda để xử lý logic.
- Tích hợp Amazon Bedrock (mô hình Claude 3.5 Sonnet) để xử lý Prompt sinh câu đố.

### Giai Đoạn 3: Lưu Trữ, Giám Sát & Hoàn Thiện (Tuần 9-12) ✅
- Cấu hình Amazon DynamoDB để lưu trữ lịch sử tạo câu đố.
- Thiết lập Amazon S3 để xuất và cấp quyền tải file tài liệu in ấn (PDF/Word) qua Presigned URL.
- Triển khai hệ thống giám sát với IAM, CloudWatch và Amazon SNS để gửi email báo lỗi khẩn cấp.
- Viết tài liệu và kiểm thử toàn hệ thống.

---

## 6. Tiêu Chí Thành Công

✅ **Chức năng**
- 

✅ **Tài liệu**
- Song ngữ (Việt/Anh)
- Hướng dẫn chi tiết
- Sơ đồ kiến trúc

✅ **Chi phí**
- 

---

**Trạng thái**: ✅ Phê Duyệt Triển Khai