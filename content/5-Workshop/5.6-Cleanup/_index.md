---
title : "Clean up"
date : 2024-01-01
weight : 6
chapter : false
pre : " <b> 5.6. </b> "
---

# Clean up

Congratulations on completing this workshop! 

In this workshop, you learned how to deploy a secure frontend application and connect it to a serverless backend:
- By using AWS Amplify, you hosted the static files directly from GitHub.
- By using Amazon CloudFront and AWS WAF, you globally cached content and enabled edge security protection.
- By using Route 53, you mapped DNS records to the CloudFront distribution.
- By using API Gateway, you created REST endpoints, configured CORS, and integrated Lambda functions.

#### Cleanup Resources
To avoid ongoing charges on your AWS account, clean up the resources created during this lab:

1. **Delete Route 53 DNS Records**:
   - Go to Route 53 Hosted zones.
   - Select your hosted zone and delete the `A` Alias record pointing to your CloudFront distribution.

2. **Delete CloudFront Distribution**:
   - Go to the CloudFront console.
   - Select your distribution, click **Disable**, and wait for the status to change.
   - Once disabled, select it and click **Delete**.

3. **Delete AWS Amplify App**:
   - Go to the AWS Amplify console.
   - Select your app, click on **Actions** in the top-right corner, and choose **Delete app**.

4. **Delete API Gateway REST API**:
   - Go to the API Gateway console.
   - Select the `AI-Riddle-API`, click on **Actions** (or next to the API name), and choose **Delete**.