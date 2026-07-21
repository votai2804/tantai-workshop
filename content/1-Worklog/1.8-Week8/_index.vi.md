---
title: "Worklog Tuần 8"
date: 2026-06-08
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Mục tiêu tuần 8:
* Chốt định hướng phát triển chi tiết dự án AI Riddle Generator.
* Học lý thuyết Module 5 và hoàn thành các bài thực hành Lab 25, Lab 57 và Lab 18.
* Tham gia Event công nghệ AWS Offline ngày 13/06.
* Dự án: Tích hợp S3 lưu trữ tệp in ấn và viết logic sinh S3 Presigned URL.

### Các công việc triển khai (08/06 - 13/06/2026):

| Thứ | Công việc | Ngày bắt đầu | Ngày kết thúc | Ghi chú |
| --- | --- | --- | --- | --- |
| 2 | **Dự án:** Chốt định hướng phát triển chi tiết cho dự án "AI Riddle Generator" | 08/06/2026 | 08/06/2026 | Idea definition |
| 3 | Thực hành Lab 25 & Học lý thuyết Module 5 (AWS Storage Services) | 09/06/2026 | 09/06/2026 | [Lesson Link](https://www.youtube.com/watch?v=tsobAlSg19g&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i&index=150) <br><br> [https://000025.awsstudygroup.com/](https://000025.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan8/lab25-stack.png) |
| 4 | Thực hành Lab 57 | 10/06/2026 | 10/06/2026 | [https://000057.awsstudygroup.com/](https://000057.awsstudygroup.com/) |
| 5 | Thực hành Lab 18 | 11/06/2026 | 11/06/2026 | [https://000018.awsstudygroup.com/](https://000018.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan8/lab18-config.png) |
| 6 | **Dự án (Triển khai Tuần 4/6):** Tích hợp S3 - Tạo bucket lưu trữ tệp in ấn (PDF/Word), viết logic sinh Presigned URL từ Lambda để tải file an toàn | 12/06/2026 | 12/06/2026 | Triển khai dự án (Implementation) |
| 7 | Tham gia Event  (ngày 13/6) | 13/06/2026 | 13/06/2026 | Event |


### Chi tiết nội dung học tập, thực hành và dự án:

#### 1. Thực hành Lab 25: Triển khai FSx trên Windows
* **Mục tiêu:** Thiết lập hệ thống tệp lưu trữ dùng chung cho hạ tầng máy chủ Windows.
* **Tóm tắt nội dung:** Tạo Amazon FSx for Windows File Server sử dụng giao thức SMB, tích hợp Active Directory kiểm soát truy cập và cấu hình nhân bản dữ liệu (Data Replication) giữa các Availability Zones.
* **Kỹ năng đạt được:** Quản trị Amazon FSx, cấu hình Active Directory, tối ưu hóa lưu trữ Windows.

#### 2. Thực hành Lab 18: Bắt đầu với AWS Security Hub
* **Mục tiêu:** Cấu hình hệ thống quản trị bảo mật tập trung trên AWS.
* **Tóm tắt nội dung:** Kích hoạt Security Hub để tổng hợp phát hiện bảo mật từ Amazon GuardDuty, Inspector, Macie và thực hiện đánh giá tuân thủ tự động.
* **Kỹ năng đạt được:** Quản lý an toàn thông tin đám mây, sử dụng AWS Security Hub.

#### 3. Tham gia Event ngày 13/06
* **Mục tiêu:** Học hỏi tư duy thiết kế hệ thống và kỹ năng giao tiếp công sở.
* **Tóm tắt nội dung:** Tìm hiểu kiến trúc Cache-aside, nguyên lý Defense at the Edge bảo vệ biên, sự chuyển dịch từ Problem Solver sang System Thinker và kỹ năng giao tiếp trong DevOps.
* **Kỹ năng đạt được:** Tư duy hệ thống (System Thinking), bảo mật biên (Edge Security), giao tiếp DevOps.

#### 4. Dự án (Triển khai Tuần 4/6): Tích hợp S3 & Presigned URL
* **Mục tiêu:** Hỗ trợ tính năng xuất câu đố ra tài liệu (PDF/Word) cho trẻ em và tải về an toàn.
* **Tóm tắt nội dung:** Tạo S3 Bucket bảo mật riêng tư (Private). Viết logic trong Lambda để chuyển đổi câu đố thành dạng văn bản in ấn lưu lên S3, đồng thời sinh đường dẫn tải xuống tạm thời (S3 Presigned URL) giới hạn hiệu lực trong 5 phút để bảo mật file.
* **Kỹ năng đạt được:** Cấu hình bảo mật S3, lập trình tạo Presigned URL, quản lý vòng đời đối tượng.


### Kết quả đạt được:
* Chốt thành công hướng đi chi tiết dự án và hoàn thành xuất sắc các bài Lab.
* Triển khai thành công tính năng xuất tệp PDF/Word lưu trên S3 qua cơ chế S3 Presigned URL bảo mật cao.
* Tham gia Event offline học hỏi thêm nhiều kiến thức về tư duy hệ thống (System Thinking).
