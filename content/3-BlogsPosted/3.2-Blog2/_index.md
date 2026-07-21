---
title: "Blog 2"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
---

# Serverless Security Architecture: How to Protect the AI Riddle Generator on AWS

### 1. Main Content
When deploying a Serverless application combined with Generative AI for a large user base, implementing a multi-layered security model (**Defense in Depth**) is a mandatory requirement. Without robust security controls, the infrastructure risks exposing itself to Distributed Denial of Service (DDoS) attacks, API abuse causing inflated LLM cost charges (such as Bedrock calls), or private storage data breaches.

This post introduces the end-to-end security architecture configured on AWS for the **AI Riddle Generator** application, spanning edge networking (CDN), API authentication gateways, backend access isolation, and active monitoring.

---

### 2. Key Takeaways
* **Edge & Presentation Protection:** Utilizing CloudFront CDN for static asset distribution with HTTPS encryption to prevent intercept attacks, integrated with AWS WAF to block SQL Injection, XSS, and enforce API Rate Limiting.
* **Authentication Gateways:** Amazon Cognito handles user directory management and issues JWT authentication tokens. API Gateway acts as the gateway authorizer, validating Cognito JWT signatures before forwarding requests to the compute layer.
* **IAM Least Privilege Principle:** Utilizing AWS IAM to restrict Lambda execution permissions, ensuring functions can only invoke the target Bedrock model and write to the designated DynamoDB table.
* **Active Monitoring & Notifications:** Centralizing application logs and metrics via Amazon CloudWatch. If unexpected access levels or execution errors occur, CloudWatch Alarms trigger instant alerts via Amazon SNS to administrators.

---

### 3. Images
Below is the comprehensive multi-layered security architecture diagram and the authentication flow applied to the AI Riddle Generator on AWS:

1. **Comprehensive Security Architecture Diagram:**
   ![Comprehensive Security Architecture Diagram](/images/5-Workshop/5.1-Workshop-overview/1.png)

2. **Cognito & API Gateway Authentication Flow:**
   ![Cognito Authentication Flow](/images/3-BlogsPosted/Blog2/CognitoDiagram.png)

---

### 4. Links
* **Original Article:** [Secure API Access with Amazon Cognito, Amazon API Gateway, and AWS Lambda](https://aws.amazon.com/blogs/compute/secure-api-access-with-amazon-cognito-federated-identities-amazon-cognito-user-pools-and-amazon-api-gateway/)  
* **Facebook Post Link:** 

---

### 5. Guides
The specific technical configurations deployed across the layers include:
1. **Edge Infrastructure:**
   * *Traffic Encryption:* CloudFront enforces HTTPS redirects for all client-to-CDN traffic.
   * *Rate Limiting:* AWS WAF rules restrict requests (e.g., maximum 100 requests per minute per IP address) to block malicious bulk API script executions.
2. **API & Access Authentication:**
   * *User Directory:* Cognito User Pools manage Teacher and Parent account records securely.
   * *API Gateways:* API Gateway is configured with a Cognito Authorizer that checks JWT validity and expiration timestamps before triggering the Lambda target.
3. **Compute & Storage Isolation:**
   * *IAM Policies:* The `generateRiddle` Lambda execution role is restricted to calling `bedrock:InvokeModel` and writing items to the target DynamoDB tables.
   * *Private Buckets:* The S3 storage bucket is configured with "Block Public Access". File downloads are secured via short-lived, encrypted S3 Presigned URLs.
4. **Active Auditing & Operations:**
   * CloudWatch Metric Filters parse logs for key strings (such as `AccessDenied` or `401/403` status codes).
   * Alarms link to Amazon SNS topics, instantly routing notification payloads to operational emails when thresholds are breached.
