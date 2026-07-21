---
title: "Worklog Tuần 5"
date: 2026-05-18
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

### Mục tiêu tuần 5:
* Hoàn thành bài thực hành Lab 10, Lab 19 và Lab 20.
* Học lý thuyết Module 03 (AWS Computing Services).
* Dự án: Khởi tạo các hàm AWS Lambda xử lý logic nghiệp vụ và định cấu hình các tài nguyên REST trên API Gateway.

### Các công việc triển khai (18/05 - 22/05/2026):

| Thứ | Công việc | Ngày bắt đầu | Ngày kết thúc | Ghi chú |
| --- | --- | --- | --- | --- |
| 2 | Hoàn thành bài thực hành Lab 10 | 18/05/2026 | 18/05/2026 | [https://000010.awsstudygroup.com/](https://000010.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan4/lab10.png) |
| 3 | Thực hành Lab 19 | 19/05/2026 | 19/05/2026 | [https://000019.awsstudygroup.com/](https://000019.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan5/tao-CloudFormation-lab19.png) |
| 4 | Thực hành Lab 20 & Học lý thuyết Module 03 (AWS Computing Services) | 20/05/2026 | 20/05/2026 | [Lesson Link](https://www.youtube.com/watch?v=-t5h4N6vfBs&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i&index=72) <br><br> [https://000020.awsstudygroup.com/](https://000020.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan5/chay-lab20-stack.png) |
| 5 | Lên văn phòng làm việc trực tiếp (ngày 21/5) | 21/05/2026 | 21/05/2026 | Office Day |
| 6 | **Dự án (Triển khai Tuần 1/6):** Khởi tạo các hàm AWS Lambda xử lý logic nghiệp vụ cơ bản & định cấu hình các tài nguyên REST trên API Gateway | 22/05/2026 | 22/05/2026 | Triển khai dự án (Implementation) |


### Chi tiết nội dung học tập, thực hành và dự án:

#### 1. Thực hành Lab 19: Thiết lập VPC Peering
* **Mục tiêu:** Kết nối mạng riêng tư và an toàn giữa hai VPC độc lập trên AWS.
* **Tóm tắt nội dung:** Khởi tạo VPC Peering Connection giữa hai VPC, cập nhật Route Tables của mỗi bên và thiết lập Network ACL (stateless firewall) ở cấp độ Subnet để kiểm soát traffic chặt chẽ.
* **Kỹ năng đạt được:** Cấu hình VPC Peering, quản trị Network ACL, Cross-Peering DNS.

#### 2. Thực hành Lab 20: Tổng quan về AWS Transit Gateway
* **Mục tiêu:** Đơn giản hóa mạng lưới kết nối nhiều VPC thông qua một hub trung tâm.
* **Tóm tắt nội dung:** Triển khai AWS Transit Gateway, gán các subnet từ 4 VPC khác nhau vào Transit Gateway (TGW Attachment) và cấu hình bảng định tuyến tập trung thay thế cho VPC Peering chéo phức tạp.
* **Kỹ năng đạt được:** Quản trị AWS Transit Gateway, định tuyến mạng quy mô lớn, tối ưu hóa liên kết mạng.

#### 3. Học lý thuyết Module 03 (AWS Computing Services)
* **Mục tiêu:** Hiểu các loại hình tính toán trên AWS (EC2, Auto Scaling, Lambda, ECS).
* **Tóm tắt nội dung:** Nghiên cứu các loại EC2 instance types, cấu trúc AMI, ổ đĩa EBS và cơ chế tự động co giãn EC2 Auto Scaling.
* **Kỹ năng đạt được:** Quản lý tài nguyên compute, cấu hình hạ tầng co giãn tự động.

#### 4. Dự án (Triển khai Tuần 1/6): Backend Compute & API Gateway
* **Mục tiêu:** Xây dựng hạ tầng REST API để nhận và xử lý request tạo câu đố từ Frontend.
* **Tóm tắt nội dung:** Khởi tạo REST API trên Amazon API Gateway, định nghĩa các resource `/riddle` và phương thức POST. Viết mã nguồn Node.js cho hàm AWS Lambda xử lý logic cơ bản và cấu hình Lambda Integration trên API Gateway.
* **Kỹ năng đạt được:** Lập trình Node.js Lambda, cấu hình API Gateway REST endpoints, thiết lập IAM Execution Roles.


### Kết quả đạt được:
* Hoàn thành xuất sắc 3 bài Lab (10, 19, 20) và học xong lý thuyết Module 3.
* Thiết lập thành công nền tảng tính năng backend serverless (Lambda + API Gateway) cho dự án.
