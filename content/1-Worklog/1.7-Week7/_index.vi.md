---
title: "Worklog Tuần 7"
date: 2026-06-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

### Mục tiêu tuần 7:
* Học lý thuyết Module 4 (AWS Database Services).
* Hoàn thành các bài thực hành Lab 13 - Module 4, Lab 14 và Lab 24.
* Dự án: Tích hợp DynamoDB lưu trữ lịch sử tạo câu đố của người dùng.

### Các công việc triển khai (01/06 - 05/06/2026):

| Thứ | Công việc | Ngày bắt đầu | Ngày kết thúc | Ghi chú |
| --- | --- | --- | --- | --- |
| 2 | Học lý thuyết Module 4  | 01/06/2026 | 01/06/2026 | [Lesson Link](https://www.youtube.com/watch?v=hsCfP0IxoaM&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i&index=103) |
| 3 | Thực hành Lab 13 - Module 4 | 02/06/2026 | 02/06/2026 | [https://000013.awsstudygroup.com/](https://000013.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan7/lab13-S3.png) |
| 4 | Thực hành Lab 14 | 03/06/2026 | 03/06/2026 | [https://000014.awsstudygroup.com/](https://000014.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan7/lab14-bucket.png) |
| 5 | Thực hành Lab 24 | 04/06/2026 | 04/06/2026 | [https://000024.awsstudygroup.com/](https://000024.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan7/lab24.png) |
| 6 | **Dự án (Triển khai Tuần 3/6):** Tích hợp DynamoDB - Thiết lập bảng, định cấu hình khóa, viết logic lưu trữ lịch sử tạo câu đố xuống DB qua Lambda | 05/06/2026 | 05/06/2026 | Triển khai dự án (Implementation) |


### Chi tiết nội dung học tập, thực hành và dự án:

#### 1. Học Module 4 & Lab 13 (AWS Database Services)
* **Mục tiêu:** Hiểu các loại dịch vụ cơ sở dữ liệu trên AWS (RDS, Aurora, DynamoDB).
* **Tóm tắt nội dung:** Nghiên cứu kiến trúc RDS cho CSDL quan hệ và DynamoDB cho CSDL NoSQL có độ trễ cực thấp.
* **Kỹ năng đạt được:** Lựa chọn giải pháp cơ sở dữ liệu phù hợp, hiểu biết kiến trúc DB.

#### 2. Thực hành Lab 14: VM Import/Export
* **Mục tiêu:** Chuyển di máy ảo từ môi trường on-premises lên đám mây AWS.
* **Tóm tắt nội dung:** Sử dụng AWS CLI để thực hiện import file máy ảo (.ova, .vmdk) từ on-premises lưu vào S3 bucket và chuyển đổi thành EC2 AMI.
* **Kỹ năng đạt được:** Quản trị AWS CLI, di chuyển hạ tầng (Migration), quản lý S3 bucket.

#### 3. Dự án (Triển khai Tuần 3/6): Tích hợp DynamoDB
* **Mục tiêu:** Lưu trữ lịch sử tạo câu đố và tương tác người dùng phục vụ tính năng mở rộng.
* **Tóm tắt nội dung:** Thiết kế cấu trúc bảng NoSQL trong DynamoDB với Partition Key là `username` và Sort Key là `timestamp`. Viết logic Node.js trong Lambda để ghi dữ liệu câu đố và lượt upvote xuống cơ sở dữ liệu mỗi khi sinh câu đố thành công.
* **Kỹ năng đạt được:** Thiết kế CSDL NoSQL, thao tác DynamoDB CRUD từ Lambda, thiết lập IAM Policies cho DynamoDB.


### Kết quả đạt được:
* Học xong lý thuyết Module 4 và hoàn thành các bài Lab thực hành.
* Tích hợp thành công DynamoDB, viết logic lưu trữ lịch sử sinh câu đố xuống CSDL thông qua Lambda.
