---
title : "Enable CloudFront, WAF & Route 53"
date : 2024-01-01 
weight : 9 
chapter : false
pre : " <b> 5.9. </b> "
---


#### Architecting the Edge Tier
Adding Amazon CloudFront in front of AWS Amplify provides several benefits:
- **Caching & Latency Reduction**: CloudFront caches the static frontend files at edge locations worldwide, reducing latency.
- **Security Shielding**: Enabling AWS WAF (Web Application Firewall) directly on CloudFront filters out malicious requests, DDoS attempts, and AI Prompt Injections before they reach Amplify.
- **Origin Type "Other"**: Because AWS Amplify hosts the web files on its own domain, CloudFront treats it as a custom web origin (non-native S3 bucket), which falls under the **Other** category.
- **Route 53 Alias**: Mapping DNS records via Route 53 Alias allows free, zero-latency resolution directly mapping your apex domain to the CloudFront distribution.

---

### Step-by-Step Configuration

#### Part A: CloudFront & WAF setup

1. Go to the **Amazon CloudFront** console and click **Create distribution**.

   ![create-distribution](/images/5-Workshop/5.9-CloudFront/create-distributions.png)

2. Under the distribution settings, give the distribution a name.

   ![distribution-name](/images/5-Workshop/5.9-CloudFront/distributions-name.png)

3. For the **Origin type**, select **Other**. Paste the Amplify web hosting URL (e.g., `main.d1w4ziet0548q.amplifyapp.com`) into the **Custom origin** domain input.

   ![origin-type](/images/5-Workshop/5.9-CloudFront/origin-type-chon-other.png)

4. Scroll down to Web Application Firewall (WAF). Keep the default selection: **Enable security protection** to activate WAF with pre-configured managed rules.

   ![enable-waf](/images/5-Workshop/5.9-CloudFront/mac-dinh-de-kich-hoat-waf.png)

5. Review the settings, click next, and click **Create distribution**.

   ![review-distribution](/images/5-Workshop/5.9-CloudFront/review-and-create.png)

6. Once the distribution status is *Enabled*, copy the generated **Distribution domain name** (e.g., `d38upky9nltxkn.cloudfront.net`).

   ![distribution-created](/images/5-Workshop/5.9-CloudFront/thanh-cong-cloudfront.png)

---

#### Part B: Route 53 DNS mapping

1. Go to **Route 53** and select **Hosted zones**.

   ![hosted-zones](/images/5-Workshop/5.9-CloudFront/hosted-zones.png)

2. Choose your target hosted zone and click **Create record**.

   ![create-record](/images/5-Workshop/5.9-CloudFront/create-hosted-zone.png)

3. Set up the DNS record:
   - Toggle **Alias** to **Yes**.
   - Under **Route traffic to**, choose **Alias to CloudFront distribution**.
   - Paste or select the CloudFront distribution domain name you copied earlier.
   - Click **Create records**.

   ![route53-record](/images/5-Workshop/5.9-CloudFront/xong-route-53.png)

Your frontend is now secure, globally cached, and accessible via your custom domain!
