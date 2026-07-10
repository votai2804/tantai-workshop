---
title: "Blog 2"
date: 2026-07-09
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
---

# Serverless Security Architecture: How to Protect the AI Riddle Generator on AWS

Hi everyone in the AWS Study Group VN community.

If you are developing a Serverless application integrated with Generative AI—such as our team's intellectual riddle generation system for kids (AI Riddle Generator)—the challenge is not just making the AI run smoothly or writing accurate prompts. A much larger challenge that developers often overlook in the early stages is: How do you secure this architecture comprehensively?

When your application scales to thousands of parents and teachers, the lack of access controls, failure to mitigate Denial of Service (DDoS) attempts, or loose permission policies between services can lead to data leaks, system resource exhaustion, or skyrocketing API costs from calls to the AI model (like Amazon Bedrock).

To solve this problem fundamentally, implementing a multi-layered security model (**Defense in Depth**) on AWS is mandatory. In this article, we will explore:
* How the outer security layer (Edge & Presentation) blocks threats.
* How to manage user identity and protect backend APIs.
* The Principle of Least Privilege between Serverless services.
* Automated logging and alerts when security events occur.

---

## 1. Edge Security: Blocking Threats at the Gate

As soon as a user (Parent, Teacher) interacts with the application via a domain resolved by Amazon Route 53, the system activates the outer defense layers:

* **AWS Amplify & Amazon CloudFront**: The static React/Vue frontend is distributed via a CDN. CloudFront automatically supports transit data encryption via HTTPS (SSL/TLS enabled by default), preventing Man-in-the-Middle (MitM) attacks or data tampering.
* **AWS WAF (Web Application Firewall)**: Configured directly at CloudFront or API Gateway, this shield filters traffic, blocks malicious IPs, prevents common attacks like SQL Injection and Cross-Site Scripting (XSS), and sets Rate Limiting rules to combat request spam.

---

## 2. User Authentication and Backend API Protection

When users log in or send requests to generate riddles, the Authentication & API tier controls access:
* **Amazon Cognito**: Handles identity management (User Pool). After a successful login, Cognito issues a valid JWT Token (JSON Web Token).
* **Amazon API Gateway**: Acts as the gatekeeper for the Backend system. API Gateway does not route requests directly to Lambda. Instead, it coordinates with Cognito to validate the token. If the token is fake or expired, the request is instantly blocked, protecting the Serverless compute tier from unauthorized access.

---

## 3. The Principle of Least Privilege with AWS IAM

The core of Serverless security lies in isolating the permissions of services in the Serverless Compute and Data Storage tiers:

* **AWS IAM (Identity and Access Management)**: Instead of granting full administrative rights, each Lambda function is assigned an IAM Role with minimal permissions required to execute its task (Least Privilege).
* **Secure Integration Mechanisms**:
  * The `generateRiddle` function only has permissions to send prompts to Amazon Bedrock and write data to the specific `Riddles` table in Amazon DynamoDB. It has no authority to delete records or modify other services.
  * The document export function only has permissions to write files to a specific S3 bucket (`ai-riddle-storage`) and generate short-lived S3 Presigned URLs (valid for a few minutes) to return to the frontend. Thus, S3 files remain Private and are never exposed to the public internet.

---

## 4. Active Security Observability with CloudWatch & SNS

A security system is incomplete without logging and rapid response capabilities:

* **Amazon CloudWatch**: All activity logs, application errors (such as Access Denied exceptions or abnormal Bedrock API call volumes) are pushed to CloudWatch for centralized monitoring.
* **Amazon SNS (Simple Notification Service)**: When CloudWatch detects metrics exceeding safe thresholds (e.g., a sudden surge in 4XX errors indicative of API scanning), it triggers an Alarm. Through Amazon SNS, an email or Slack alert is sent immediately to the operations team for swift remediation.

---

## Conclusion

Securing an AI-powered Serverless application like AI Riddle Generator is not as simple as setting a database password. It requires tight coordination across a chain of encryption, firewalls, centralized authentication, and smart authorization:
* **AWS WAF & CloudFront**: Filter traffic and prevent DDoS at the edge.
* **Amazon Cognito & API Gateway**: Ensure only authenticated users can invoke APIs.
* **AWS IAM**: Minimize the blast radius through the Principle of Least Privilege.
* **CloudWatch & SNS**: Provide comprehensive visibility to detect and respond to incidents in real-time.

Designing a robust security architecture from day one ensures stable operations, protects costly AI resources, and creates a solid foundation for building secure cloud products.

---
**References:** [Secure API Access with Amazon Cognito, Amazon API Gateway, and AWS Lambda](https://aws.amazon.com/blogs/compute/secure-api-access-with-amazon-cognito-federated-identities-amazon-cognito-user-pools-and-amazon-api-gateway/)
