---
title: "Các bài blogs đã đăng"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 3. </b> "
---

Dưới đây là danh sách các bài blog kỹ thuật đã được biên soạn và đăng tải trên cộng đồng **AWS Study Group**:

### 1. [Blog 1 - Vì sao Epic Games phát triển Lore và cách AWS giúp tối ưu lưu trữ binary assets](3.1-Blog1/)
Bài viết phân tích giải pháp **Lore** do Epic Games phát triển – một hệ thống version control mã nguồn mở thiết kế dành riêng cho các tệp nhị phân lớn (binary assets) trong game. Nội dung giới thiệu cách Lore chia nhỏ file thành các mảnh dữ liệu (fragments) để tái sử dụng và tránh trùng lặp dữ liệu, đồng thời trình bày kiến trúc triển khai trên AWS tích hợp Amazon S3, DynamoDB, EC2 và ECS giúp các studio game tối ưu hóa chi phí lưu trữ, tăng tốc độ đồng bộ và quản lý phân nhánh (branching) hiệu quả.

### 2. [Blog 2 - Kiến trúc bảo mật Serverless: Cách bảo vệ ứng dụng AI Riddle Generator trên AWS](3.2-Blog2/)
Bài viết chia sẻ mô hình bảo mật nhiều lớp (**Defense in Depth**) thiết kế riêng cho các ứng dụng Serverless kết hợp Generative AI (ứng dụng tạo câu đố AI Riddle Generator). Nội dung chi tiết bao gồm việc chặn đứng các cuộc tấn công DDoS & Prompt Injection tại biên bằng CloudFront và AWS WAF, xác thực an toàn bằng JWT thông qua AWS Cognito và API Gateway Authorizer, áp dụng nguyên tắc phân quyền tối thiểu (Least Privilege) cho IAM roles, và giám sát vận hành qua CloudWatch & SNS.

### 3. [Blog 3 - Cách một tổ chức cắt giảm 39% chi phí AWS trong 12 tuần](3.3-Blog3/)
Bài viết phân tích case study thực tế về chiến dịch tối ưu hóa chi phí đám mây của một tổ chức SaaS. Bài viết tập trung giải quyết 5 "nút thắt" gây lãng phí ngân sách lớn: nâng cấp tài nguyên thế hệ cũ sang dòng mới (EC2 m6g/gp3), định tuyến traffic S3 qua VPC Endpoints thay vì NAT Gateways tốn kém, hợp nhất Load Balancers (NLB), tự động phân tầng lưu trữ S3 Lifecycle và áp dụng cơ chế tự động co giãn tài nguyên linh hoạt (Auto Scaling/Right-sizing).