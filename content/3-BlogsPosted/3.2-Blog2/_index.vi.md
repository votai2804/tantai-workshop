---
title: "Blog 2"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
---

# Kiến trúc bảo mật Serverless: Cách bảo vệ ứng dụng AI Riddle Generator trên AWS

### 1. Nội dung chính (Main Content)
Khi triển khai các ứng dụng Serverless và Generative AI cho hàng nghìn người dùng, việc thiết kế một kiến trúc bảo mật nhiều lớp (**Defense in Depth**) là cực kỳ quan trọng. Bài viết chia sẻ các giải pháp bảo mật toàn diện trên AWS cho ứng dụng **AI Riddle Generator**, giúp giải quyết triệt để các bài toán như: bảo vệ lớp biên chống tấn công từ chối dịch vụ (DDoS) và lọc spam traffic, kiểm soát truy cập và xác thực danh tính người dùng bằng mã JWT Token, áp dụng phân quyền tối thiểu (Least Privilege) cho tài nguyên đám mây, và xây dựng hệ thống giám sát cảnh báo tự động.

---

### 2. Các điểm chính cần nắm (Key Takeaways)
* **Amazon Cognito User Pools vs. Federated Identities:** Hiểu sự khác biệt giữa User Pools (kho lưu trữ danh bạ người dùng cục bộ, cấp token JWT) và Federated Identities (bộ chuyển đổi token sang IAM Role tạm thời).
* **Bảo vệ API Gateway bằng Cognito Authorizer:** Cơ chế API Gateway kiểm tra tính hợp lệ của mã JWT ID Token gửi từ client mà không cần chạy code Lambda, giảm thiểu chi phí và tăng tốc độ phản hồi.
* **Ủy quyền bằng IAM Role vs. User Pool Authorizer:** 
  * *IAM Authorization:* Phù hợp khi cần kiểm soát truy cập hạt nhân (fine-grained access control) dựa trên các chính sách IAM Role tạm thời đổi từ Federated Identities.
  * *Cognito User Pool Authorizer:* Phù hợp khi chỉ cần xác thực token JWT trực tiếp để cấp quyền truy cập mà không cần ánh xạ sang AWS credentials.
* **Nguyên tắc phân quyền tối thiểu (Least Privilege):** Mỗi dịch vụ (Lambda, S3, DynamoDB) chỉ được cấp phát đúng quyền hạn cần thiết thông qua IAM Roles và Policies để giảm thiểu vùng ảnh hưởng khi gặp sự cố (Blast Radius).

---

### 3. Hình ảnh (Images)
Dưới đây là các hình ảnh và sơ đồ minh họa cụ thể luồng xác thực và phân quyền trong hệ thống:

1. **Các nhà cung cấp định danh liên kết được hỗ trợ bởi Cognito Federated Identities (Figure 1):**
   ![Các nhà cung cấp định danh](/images/3-BlogsPosted/Blog2/image005.png)

2. **Mô tả so sánh: User Pool cấp hộ chiếu (JWT) và Identity Pool cấp thẻ lên máy bay (IAM Credentials) (Figure 2):**
   ![Phép so sánh hộ chiếu](/images/3-BlogsPosted/Blog2/image007.png)

3. **Giao diện Single Page Application (Angular V4) kiểm thử các IdP (Figure 3):**
   ![Giao diện ứng dụng Angular mẫu](/images/3-BlogsPosted/Blog2/image009.png)

4. **Sơ đồ kiến trúc bảo mật tổng thể tích hợp Cognito, API Gateway, Lambda và DynamoDB (Figure 4):**
   ![Sơ đồ kiến trúc bảo mật](/images/3-BlogsPosted/Blog2/CognitoDiagram.png)

5. **Xác thực và hiển thị thông tin hồ sơ của tài khoản Google (Figure 5):**
   ![Đăng nhập Google](/images/3-BlogsPosted/Blog2/image011.png)

6. **Trang thông tin chi tiết của tài khoản Google thành công (Figure 6):**
   ![Hồ sơ đăng nhập Google](/images/3-BlogsPosted/Blog2/image013.png)

7. **Bảng điều khiển Cognito Federated Identities lưu trữ các Identity ID được liên kết (Figure 7):**
   ![Cognito Identity ID Console](/images/3-BlogsPosted/Blog2/image015.png)

8. **Giao diện kiểm thử Test Access: Chấp nhận path /cip (Status 200) nhưng chặn truy cập /google (Status 403) (Figure 8):**
   ![Kiểm thử phân quyền](/images/3-BlogsPosted/Blog2/image017.png)

9. **Quản lý Nhóm (Groups) và gán IAM Role trong Cognito User Pools (Figure 9):**
   ![Quản lý nhóm Cognito](/images/3-BlogsPosted/Blog2/image019.png)

10. **Quyền truy cập bị từ chối đối với các API không được phân vai trò tương ứng (Figure 10):**
    ![Truy cập bị từ chối](/images/3-BlogsPosted/Blog2/image021.png)

11. **Sử dụng Cognito User Pool Authorizer trực tiếp trên API Gateway (Figure 11):**
    ![Cấu hình User Pool Authorizer](/images/3-BlogsPosted/Blog2/image023-1.png)

12. **Bảng điều khiển kiểm thử token JWT trên API Gateway Console để kiểm tra các Claims (Figure 12):**
    ![Kiểm thử Token Claims](/images/3-BlogsPosted/Blog2/image025.png)

13. **Kết quả các bản ghi tài khoản được lưu trữ an toàn trên DynamoDB (Figure 13):**
    ![Danh sách tài khoản trong DynamoDB](/images/3-BlogsPosted/Blog2/image027.png)

---

### 4. Link (References)
* **Bài viết gốc:** [Secure API Access with Amazon Cognito, Amazon API Gateway, and AWS Lambda](https://aws.amazon.com/blogs/compute/secure-api-access-with-amazon-cognito-federated-identities-amazon-cognito-user-pools-and-amazon-api-gateway/)  
* **Link bài đăng Facebook:** [AWS Study Group VN chưa duyệt](https://www.facebook.com/share/p/1ENb8bUptS/)

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