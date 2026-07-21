---
title: "Blog 3"
date: 2026-07-09
weight: 3
chapter: false
pre: " <b> 3.3. </b> "
---

# Cách một tổ chức cắt giảm 39% chi phí AWS trong 12 tuần

### 1. Nội dung chính (Main Content)
Bài viết chia sẻ một case study thực tế về đội ngũ Platform Engineering của một công ty SaaS với mức chi phí AWS hàng tháng khoảng 35.000 USD (xử lý 150 TB dữ liệu). Để chuẩn bị cho đợt tăng trưởng 10x mà không làm chi phí phình to lên mức 350.000 USD/tháng (gần 4,2 triệu USD/năm), đội ngũ đã áp dụng chiến dịch tối ưu hóa chi phí đám mây theo từng giai đoạn (Phase) trong vòng 12 tuần để giảm thiểu rủi ro và cắt giảm thành công **39% hóa đơn AWS hàng tháng** (tiết kiệm 13.700 USD/tháng).

---

### 2. Các điểm chính cần nắm (Key Takeaways)
* **Quy trình nỗ lực so với tác động (Effort vs. Impact):** Xây dựng bảng điểm để xếp hạng các hạng mục cải tiến. Những thay đổi có độ phức tạp thấp, rủi ro thấp nhưng tác động lớn sẽ được ưu tiên triển khai trước để lấy ngân sách tài trợ cho các phase sau.
* **Tách biệt giao tiếp nội bộ qua VPC Endpoint:** Chuyển hướng lưu lượng S3 đi qua Gateway Endpoint nội bộ thay vì NAT Gateway tốn kém, giảm đáng kể phí truyền tải dữ liệu (Data Transfer).
* **Gom cụm cân bằng tải (Consolidation):** Hợp nhất hơn 150 Network Load Balancer (NLB) chạy riêng lẻ cho từng service về 5 Application Load Balancer (ALB) dựa trên ranh giới domain, giảm thiểu phí duy trì cố định hàng giờ.
* **Quy hoạch tài nguyên tính toán thông minh:** Nâng cấp từ EBS gp2 lên gp3 không gây downtime; chuyển đổi EC2 sang dòng chip AMD (r6a.2xlarge) để tối ưu hóa Memory-bound; sử dụng Karpenter để auto-scaling node và chuyển đổi sang chip ARM Graviton2 (r6g.2xlarge).

---

### 3. Hình ảnh (Images)
Dưới đây là các sơ đồ và biểu đồ thực tế từ bài viết gốc mô tả quá trình tối ưu hóa:

1. **Bảng đánh giá thứ tự ưu tiên dựa trên Nỗ lực và Tác động (Figure 1):**
   ![Bảng đánh giá Effort vs Impact](/images/3-BlogsPosted/Blog3/1.png)

2. **Biểu đồ phân bổ chi phí ban đầu theo danh mục dịch vụ (Figure 2):**
   ![Phân bổ chi phí ban đầu](/images/3-BlogsPosted/Blog3/2.png)

3. **Kế hoạch triển khai chia làm 3 giai đoạn tối ưu hóa (Figure 3):**
   ![Kế hoạch 3 giai đoạn](/images/3-BlogsPosted/Blog3/3.png)

4. **Kiến trúc trước khi tối ưu - Mỗi dịch vụ dùng riêng một NLB (Figure 4):**
   ![Kiến trúc trước tối ưu](/images/3-BlogsPosted/Blog3/4.png)

5. **Kiến trúc sau khi tối ưu - Gom cụm về 5 ALB theo Domain (Figure 5):**
   ![Kiến trúc sau tối ưu](/images/3-BlogsPosted/Blog3/5.png)

6. **Biểu đồ kết quả chi phí tiết kiệm được qua từng giai đoạn (Figure 6):**
   ![Kết quả chi phí tiết kiệm](/images/3-BlogsPosted/Blog3/6.png)

---

### 4. Link (References)
* **Bài viết gốc:** [How one organization cut AWS costs by 39% in 12 weeks](https://aws.amazon.com/vi/blogs/aws-cloud-financial-management/how-one-organization-cut-aws-costs-by-39-in-12-weeks/?content_source=fb&fb_content_id=Q9-wBQFW206aJU5vuo2CKD0obi06M-KIiAdM-zCAU_SURad5dGSS7XLwpBlxbO1QSg&channel_type=fb)  
* **Link bài đăng Facebook:** [AWS Study Group VN](https://www.facebook.com/groups/660548818043427/user/100015108252190)

---

### 5. Hướng dẫn (Guides)
Chiến dịch tối ưu hóa 12 tuần được thực thi qua 3 giai đoạn chính:
1. **Giai đoạn 1: Tối ưu nền tảng (Tuần 1 - 4):**
   * *Hành động:* Di chuyển online các ổ đĩa từ gp2 lên gp3, bật S3 Intelligent-Tiering. Tạo VPC Gateway Endpoint cho S3 để giảm tải NAT Gateway. Sử dụng AWS Load Balancer Controller để gom 150 NLB thừa vào 5 ALB.
2. **Giai đoạn 2: Tối ưu năng lực tính toán (Tuần 4 - 8):**
   * *Hành động:* Sử dụng AWS Compute Optimizer để phát hiện các instance bị nghẽn bộ nhớ (Memory-bound) và chuyển đổi sang dòng tối ưu hóa RAM r6a.2xlarge giúp giảm nửa số vCPU mà giữ nguyên RAM.
3. **Giai đoạn 3: Karpenter và Graviton Next-Gen (Tuần 8 - 12):**
   * *Hành động:* Cài đặt Karpenter để tối ưu hóa việc phân bổ node trong Kubernetes. Build container chạy đa kiến trúc (Multi-architecture) và chuyển đổi node sang dòng chip ARM Graviton (r6g.2xlarge).
4. **Thiết lập cơ chế quản trị (Governance):**
   * Thêm quy trình review chi phí vào Sprint Planning định kỳ.
   * Sử dụng Service Control Policies (SCPs) để ngăn chặn tạo mới tài nguyên thế hệ cũ (gp2) hoặc ngoài khu vực chỉ định.
