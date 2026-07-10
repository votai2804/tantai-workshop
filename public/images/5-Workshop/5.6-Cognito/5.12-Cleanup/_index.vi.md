---
title: "Dọn dẹp tài nguyên"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 5.12. </b> "
---


### Dọn dẹp Tài nguyên trên AWS Cloud để tránh phát sinh chi phí

Sau khi hoàn thành chuỗi bài thực hành xây dựng ứng dụng **AI Riddle Generator**, bạn nên tiến hành dọn dẹp các tài nguyên đã cấu hình trên tài khoản AWS của mình. Việc này giúp tránh các chi phí phát sinh không mong muốn từ việc duy trì các dịch vụ chạy ngầm.

Dưới đây là các bước dọn dẹp tài nguyên chi tiết theo đúng giao diện quản trị:

---

### Bước 1: Dọn dẹp Amazon Route 53
1. Truy cập **Route 53 Console** và chọn mục **Hosted zones** ở menu bên trái để xem danh sách tên miền đang quản lý.

   ![Route 53 Hosted Zones](/images/5-Workshop/5.12-Clienup/Route53-HostedZones.png)

2. Chọn hosted zone tương ứng và bấm **Delete zone**. Lưu ý: Bạn cần xóa các bản ghi DNS tùy chỉnh (như CNAME, A Record liên kết với ứng dụng web) trước khi hệ thống cho phép xóa Hosted Zone chính thức.

   ![Delete Hosted Zones](/images/5-Workshop/5.12-Clienup/Route53-DeleteHostedZones.png)

---

### Bước 2: Dọn dẹp AWS Amplify App
1. Truy cập **AWS Amplify Console**, bạn sẽ thấy danh sách các ứng dụng frontend đang chạy trên tài khoản.

   ![AWS Amplify Dashboard](/images/5-Workshop/5.12-Clienup/AWS-Amplify.png)

2. Bấm chọn ứng dụng frontend của bạn, tại thanh điều hướng bên trái chọn **App settings** -> **General** (hoặc nhấn trực tiếp vào cài đặt ứng dụng).

   ![AWS Amplify App details](/images/5-Workshop/5.12-Clienup/AWS-Amplify-App.png)

3. Kéo xuống cuối trang Cấu hình chung (General settings), tìm mục nguy hiểm và nhấn nút **Delete app** màu đỏ.

   ![AWS Amplify App Settings Delete](/images/5-Workshop/5.12-Clienup/AWS-Amplify-Appsetting-delete.png)

4. Một hộp thoại xác nhận sẽ xuất hiện, nhập dòng chữ `delete` vào ô trống để xác nhận xóa vĩnh viễn toàn bộ ứng dụng và các bản build.

---

### Bước 3: Dọn dẹp CloudFront Distributions
1. Truy cập **CloudFront Console**, tại danh sách **Distributions**, chọn CDN Distribution bạn đã thiết lập để tăng tốc tải trang hoặc bảo mật tầng biên.
2. Bấm **Disable** để vô hiệu hóa phân phối trước, sau khi trạng thái chuyển sang disabled, bấm **Delete** để xóa hoàn toàn.

   ![CloudFront Distributions](/images/5-Workshop/5.12-Clienup/CloudFront-Distributions.png)

---

### Bước 4: Dọn dẹp Amazon API Gateway
1. Truy cập **API Gateway Console** để quản lý danh sách các cổng kết nối API.

   ![API Gateway APIs](/images/5-Workshop/5.12-Clienup/APIGateway-APIs.png)

2. Chọn API `AI-Riddle-API`, nhấn vào tùy chọn của API hoặc vào màn hình chi tiết Resources và bấm **Delete** để gỡ bỏ toàn bộ endpoint kết nối frontend-backend.

   ![Delete API Gateway Resources](/images/5-Workshop/5.12-Clienup/APIGateway-APIs-Resources.png)

---

### Bước 5: Dọn dẹp Amazon Cognito User Pool
1. Truy cập **Cognito Console** và chọn **User pools** để xem các nhóm người dùng đã đăng ký.

   ![Cognito Pools](/images/5-Workshop/5.12-Clienup/Cognito.png)

2. Chọn User Pool đã thiết lập làm Authorizer cho API Gateway, kiểm tra kỹ thông tin và nhấn nút **Delete** để xóa toàn bộ cơ sở dữ liệu định danh của người dùng.

   ![Delete Cognito User Pool](/images/5-Workshop/5.12-Clienup/Cognito-Userpool.png)

---

### Bước 6: Dọn dẹp AWS Lambda Functions
1. Truy cập **AWS Lambda Console** -> mục **Functions**.
2. Chọn hàm Lambda xử lý nghiệp vụ chính `Create-Riddle`, nhấp vào danh mục **Actions** và chọn **Delete** để kết thúc vòng đời chạy ứng dụng serverless compute.

   ![Delete Lambda function](/images/5-Workshop/5.12-Clienup/Lambda-Delete.png)

---

### Bước 7: Dọn dẹp các tài nguyên khác (S3, DynamoDB, CloudWatch, SNS, IAM)
Để đảm bảo tài khoản sạch sẽ hoàn toàn và không phát sinh bất kỳ khoản phí phụ nào, hãy thực hiện thêm các bước dọn dẹp thủ công sau:
1. **Amazon DynamoDB**: Truy cập **DynamoDB Console** -> **Tables** -> Chọn bảng `AiRiddleGenerator_Core` và nhấn **Delete table**.
2. **Amazon S3**: Truy cập **S3 Console** -> Chọn bucket lưu trữ `ai-riddle-storage`, bấm **Empty** để xóa sạch các tệp tài liệu và tệp tin đã tạo bên trong, sau đó bấm **Delete** để xóa bucket vĩnh viễn.
3. **CloudWatch Dashboard & Alarms**: Truy cập **CloudWatch Console**, xóa Dashboard giám sát lỗi đã thiết lập và xóa các Alarm (ví dụ cảnh báo lỗi Lambda vượt ngưỡng) trong mục **Alarms** -> **All alarms**.
4. **Amazon SNS**: Truy cập **SNS Console** -> **Topics** -> Chọn topic nhận cảnh báo và nhấn **Delete**.
5. **AWS IAM**: Truy cập **IAM Console** -> **Roles** để xóa các execution roles đã tạo cho Lambda và các custom policies liên quan.
