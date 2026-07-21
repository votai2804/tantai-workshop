---
title: "Blog 1"
date: 2026-07-08
weight: 1
chapter: false
pre: " <b> 3.1. </b> "
---

# Vì sao Epic Games phát triển Lore và cách AWS giúp tối ưu lưu trữ binary assets

### 1. Nội dung chính (Main Content)
Hệ thống quản lý phiên bản truyền thống (như Git) không được tối ưu cho các tệp nhị phân lớn (binary assets) như texture, 3D model, animation hoặc engine binaries trong phát triển game. Mỗi lần chỉnh sửa, Git thường phải lưu lại toàn bộ tệp mới, gây lãng phí dung lượng và chi phí lưu trữ.

Để giải quyết vấn đề này, Epic Games đã phát triển **Lore** – một hệ thống version control mã nguồn mở dành riêng cho binary assets. Lore hoạt động bằng cách chia nhỏ các tệp lớn thành các mảnh (fragments/chunks) được định danh bằng cryptographic hash để tái sử dụng tối đa và loại bỏ dữ liệu trùng lặp (deduplication).

---

### 2. Các điểm chính cần nắm (Key Takeaways)
* **Chia nhỏ dữ liệu (Fragmentation):** Tệp nhị phân được chia thành các fragment nhỏ. Chỉ những fragment có dữ liệu thay đổi mới cần được lưu trữ mới, các phần không đổi sẽ được tái sử dụng.
* **Tạo nhánh (Branching) tối ưu:** Việc tạo nhánh mới diễn ra gần như tức thời và không làm tăng chi phí lưu trữ vì nó chỉ tạo tham chiếu (references) đến các fragment sẵn có.
* **Deduplication chéo dự án:** Các fragment trùng lặp giữa nhiều file hoặc thậm chí giữa các dự án game khác nhau chỉ cần được lưu trữ duy nhất một lần.
* **Kiến trúc Serverless & Cache:** Hệ thống sử dụng EC2 Edge Pods để cache fragment gần client, kết hợp ECS và S3 để xử lý và lưu trữ lâu dài.

---

### 3. Hình ảnh (Images)
Dưới đây là sơ đồ kiến trúc hệ thống Lore được triển khai trên nền tảng đám mây AWS:

![Kiến trúc Lore trên AWS](/images/3-BlogsPosted/Blog1/blog1.png)

---

### 4. Link (References)
* **Bài viết gốc:** [How Lore rethinks binary asset storage on AWS](https://aws.amazon.com/blogs/gametech/how-lore-rethinks-binary-asset-storage-on-aws/)  
* **Link bài đăng Facebook:** [AWS Study Group VN](https://web.facebook.com/groups/660548818043427/user/100029043690648)  

---

### 5. Hướng dẫn (Guides)
Kiến trúc Lore trên AWS được xây dựng từ các thành phần chính sau:
1. **Amazon EC2 (Edge Pods):** Đóng vai trò làm cổng giao tiếp với client, thực hiện cache fragment trên ổ cứng NVMe để tăng tốc độ truy xuất của lập trình viên và họa sĩ thiết kế.
2. **Amazon ECS (Write Tier):** Nhận fragment mới tải lên, thực hiện quy trình deduplication và điều phối việc ghi dữ liệu.
3. **Amazon S3 (Storage Tier):** Nơi lưu trữ lâu dài và an toàn cho tất cả các fragment duy nhất (unique fragments).
4. **Amazon DynamoDB (Metadata & Locking):** Quản lý thông tin branch, lịch sử commit, mapping giữa tệp và các fragment, và xử lý cơ chế locking với độ trễ cực thấp.
5. **AWS Cloud Map:** Cung cấp dịch vụ service discovery giúp các Edge Pods tự động phát hiện và kết nối với Write Tier thông qua DNS nội bộ.