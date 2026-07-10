---
title : "Kích hoạt CloudFront, WAF & Route 53"
date : 2024-01-01 
weight : 9 
chapter : false
pre : " <b> 5.9. </b> "
---



#### Thiết kế Tầng biên mạng (Edge Tier)
Việc bổ sung Amazon CloudFront đứng trước AWS Amplify mang lại nhiều lợi ích quan trọng về mặt kiến trúc:
- **Tối ưu hóa bộ nhớ đệm & Giảm độ trễ**: CloudFront sẽ phân phối và lưu trữ các tệp tĩnh ở các vị trí biên (edge locations) toàn cầu, giúp giảm thiểu độ trễ truy cập trang web cho người dùng.
- **Tấm khiên bảo mật**: Việc kích hoạt trực tiếp AWS WAF (Web Application Firewall) trên CloudFront giúp lọc các yêu cầu nguy hại, ngăn chặn các cuộc tấn công DDoS và tiêm nhiễm câu lệnh (AI Prompt Injection) ngay từ rìa mạng trước khi chạm tới Amplify.
- **Origin Type là "Other"**: Do AWS Amplify lưu trữ mã nguồn trên tên miền quản lý riêng của nó, CloudFront sẽ coi đây là một nguồn web tùy chỉnh (custom web origin) chứ không phải tài nguyên S3 hay EC2 gốc, do đó chúng ta chọn danh mục **Other**.
- **Route 53 Alias**: Ánh xạ bản ghi DNS thông qua Route 53 Alias giúp phân giải tên miền nhanh chóng, hoàn toàn miễn phí và không có độ trễ trung gian từ tên miền riêng của bạn sang CloudFront.

---

### Các bước cấu hình chi tiết

#### Phần A: Thiết lập CloudFront & WAF

1. Truy cập bảng quản trị **Amazon CloudFront**, chọn mục **Distributions** và nhấn **Create distribution**.

   ![create-distribution](/images/5-Workshop/5.9-CloudFront/create-distributions.png)

2. Đặt tên gợi nhớ cho Distributions tại ô tên.

   ![distribution-name](/images/5-Workshop/5.9-CloudFront/distributions-name.png)

3. Tại mục **Origin type**, chọn **Other**. Gạt đường dẫn web sau khi deploy của Amplify (ví dụ: `main.d1w4ziet0548q.amplifyapp.com`, lưu ý loại bỏ `https://`) vào ô **Custom origin**.

   ![origin-type](/images/5-Workshop/5.9-CloudFront/origin-type-chon-other.png)

4. Kéo xuống mục Web Application Firewall (WAF). Giữ nguyên tùy chọn mặc định: **Enable security protection** để kích hoạt WAF cùng bộ quy tắc bảo mật tự động của AWS.

   ![enable-waf](/images/5-Workshop/5.9-CloudFront/mac-dinh-de-kich-hoat-waf.png)

5. Xem lại các thiết lập, nhấn Next và hoàn tất bằng cách bấm **Create distribution**.

   ![review-distribution](/images/5-Workshop/5.9-CloudFront/review-and-create.png)

6. Sau khi trạng thái chuyển sang *Enabled*, hãy sao chép lại **Distribution domain name** được sinh ra (ví dụ: `d38upky9nltxkn.cloudfront.net`).

   ![distribution-created](/images/5-Workshop/5.9-CloudFront/thanh-cong-cloudfront.png)

---

#### Phần B: Ánh xạ DNS trên Route 53

1. Truy cập **Route 53** và chọn **Hosted zones**.

   ![hosted-zones](/images/5-Workshop/5.9-CloudFront/hosted-zones.png)

2. Chọn vùng hosted zone tương ứng với tên miền của bạn rồi bấm **Create record**.

   ![create-record](/images/5-Workshop/5.9-CloudFront/create-hosted-zone.png)

3. Thiết lập thông tin bản ghi:
   - Gạt nút **Alias** sang trạng thái **Yes** (Bật).
   - Tại mục **Route traffic to**, chọn **Alias to CloudFront distribution**.
   - Gắn địa chỉ tên miền CloudFront bạn vừa copy ở bước trước vào ô tìm kiếm.
   - Nhấn **Create records** để xác nhận lưu.

   ![route53-record](/images/5-Workshop/5.9-CloudFront/xong-route-53.png)

Giao diện ứng dụng của bạn giờ đây đã được bảo mật, lưu trữ cache toàn cầu và có thể truy cập an toàn qua tên miền riêng!
