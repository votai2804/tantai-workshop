---
title: "Blog 3"
date: 2026-07-09
weight: 3
chapter: false
pre: " <b> 3.3. </b> "
---

# Cách một tổ chức cắt giảm 39% chi phí AWS trong 12 tuần

### 1. Nội dung chính (Main Content)
Bài viết chia sẻ một case study thực tế về đội ngũ Platform Engineering của một công ty SaaS với mức chi phí AWS hàng tháng khoảng 35.000 USD (xử lý 150 TB dữ liệu). Để chuẩn bị cho đợt tăng trưởng 10x mà không làm chi phí phình to lên mức 350.000 USD/tháng, đội ngũ đã áp dụng chiến dịch tối ưu hóa chi phí đám mây theo từng giai đoạn (Phase) trong vòng 12 tuần để giảm thiểu rủi ro và cắt giảm thành công **39% hóa đơn AWS hàng tháng** (tiết kiệm 13.700 USD/tháng).

---

### 2. Các điểm chính cần nắm (Key Takeaways)
* **Phân tầng lưu trữ S3 & Nâng cấp EBS:** Chuyển đổi từ EBS gp2 sang gp3 (giảm 20% chi phí volume) và kích hoạt S3 Intelligent-Tiering để tự động chuyển dữ liệu ít truy cập xuống các tier lưu trữ rẻ hơn.
* **NAT Gateway & VPC Endpoint:** Cấu hình VPC Gateway Endpoint cho S3 giúp định tuyến lưu lượng gọi S3 chạy ngầm trong mạng nội bộ AWS, cắt giảm chi phí truyền dữ liệu (Data Transfer) qua NAT Gateway.
* **Hợp nhất Load Balancers (NLB to ALB):** Quy hoạch và gộp hơn 150 Network Load Balancers (NLB) chạy riêng lẻ cho từng service vào 5 Application Load Balancers (ALB) dùng Route 53 Weighted Routing.
* **Tự động co giãn với Karpenter & CPU Graviton ARM:** Thay thế Cluster Autoscaler bằng Karpenter và chuyển đổi các ứng dụng sang kiến trúc ARM (AWS Graviton) để tiết kiệm thêm 20% chi phí tính toán.

---

### 3. Hình ảnh (Images)
Dưới đây là các biểu đồ phân tích và kết quả đạt được trong quá trình thực hiện tối ưu hóa chi phí:

1. **Phân tích lưu lượng NAT Gateway tốn kém:**
   ![Lưu lượng NAT Gateway](/images/3-BlogsPosted/Blog3/1.png)

2. **Cấu hình VPC Endpoint cho S3 định tuyến nội bộ:**
   ![VPC Endpoint cho S3](/images/3-BlogsPosted/Blog3/2.png)

3. **Bản đồ gom cụm Load Balancers (Consolidation):**
   ![Gom cụm Load Balancer](/images/3-BlogsPosted/Blog3/3.png)

4. **Quá trình scaling linh hoạt của Karpenter và Graviton Node:**
   ![Karpenter Node Auto-scaling](/images/3-BlogsPosted/Blog3/4.png)

5. **Biểu đồ kết quả hóa đơn giảm 39% sau 12 tuần:**
   ![Kết quả tối ưu hóa chi phí](/images/3-BlogsPosted/Blog3/5.png)

---

### 4. Link (References)
* **Bài viết gốc:** [How one organization cut AWS costs by 39% in 12 weeks](https://aws.amazon.com/vi/blogs/aws-cloud-financial-management/how-one-organization-cut-aws-costs-by-39-in-12-weeks/?content_source=fb&fb_content_id=Q9-wBQFW206aJU5vuo2CKD0obi06M-KIiAdM-zCAU_SURad5dGSS7XLwpBlxbO1QSg&channel_type=fb)  
* **Link bài đăng Facebook:** [AWS Study Group VN](https://www.facebook.com/groups/660548818043427/user/100015108252190)

---

### 5. Hướng dẫn (Guides)
Chiến dịch tối ưu hóa 12 tuần được thực thi qua 3 giai đoạn chính:
1. **Giai đoạn 1: Tối ưu nền tảng (Tuần 1 - 4):**
   * *Hành động:* Di chuyển online các ổ đĩa từ gp2 lên gp3, bật S3 Intelligent-Tiering. Tạo VPC Gateway Endpoint cho S3. Sử dụng AWS Load Balancer Controller để gom 150 NLB thừa vào 5 ALB.
2. **Giai đoạn 2: Tối ưu năng lực tính toán (Tuần 4 - 8):**
   * *Hành động:* Sử dụng AWS Compute Optimizer để phát hiện các instance bị nghẽn bộ nhớ (Memory-bound) và chuyển đổi sang dòng tối ưu hóa RAM r6a.2xlarge giúp giảm nửa số vCPU mà giữ nguyên RAM.
3. **Giai đoạn 3: Karpenter và Graviton Next-Gen (Tuần 8 - 12):**
   * *Hành động:* Cài đặt Karpenter để tối ưu hóa việc phân bổ node trong Kubernetes. Build container chạy đa kiến trúc (Multi-architecture) và chuyển đổi node sang dòng chip ARM Graviton (r6g.2xlarge).
4. **Thiết lập cơ chế quản trị (Governance):**
   * Thêm quy trình review chi phí vào Sprint Planning định kỳ.
   * Sử dụng Service Control Policies (SCPs) để ngăn chặn tạo mới tài nguyên thế hệ cũ (gp2) hoặc ngoài khu vực chỉ định.
