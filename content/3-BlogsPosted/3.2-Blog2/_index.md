---
title: "Blog 2"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
---

# Serverless Security Architecture: How to Protect the AI Riddle Generator on AWS

### 1. Main Content
When deploying Serverless and Generative AI applications to a large user base, designing a multi-layered security model (**Defense in Depth**) is critical. This post shares comprehensive security solutions on AWS for the **AI Riddle Generator** application, addressing challenges such as: protecting the edge layer against DDoS and rate-limiting spam requests, controlling access and validating user identities via JWT Tokens, enforcing least privilege permissions for cloud resources, and building automated real-time security monitoring and alerts.

---

### 2. Key Takeaways
* **Amazon Cognito User Pools vs. Federated Identities:** Understand the difference between User Pools (local user directory manager, issues JWTs) and Federated Identities (token-to-IAM role exchanger providing temporary AWS credentials).
* **Securing API Gateway with Cognito Authorizer:** API Gateway validates JWT ID Tokens directly without executing Lambda compute resources, optimizing cost and response latency.
* **Authorization via IAM Roles vs. User Pool Authorizers:**
  * *IAM Authorization:* Best when fine-grained access control is required using IAM policies tied to credentials generated from Federated Identities.
  * *Cognito User Pool Authorizer:* Best when only JWT verification is needed to grant API access, without requiring AWS STS credentials.
* **Least Privilege Principle:** Each Serverless component (Lambda, S3, DynamoDB) is granted only the minimum required permissions via specific IAM roles and policies to reduce the blast radius in case of a breach.

---

### 3. Images
Below are the architectural diagrams and validation flows from the original article illustrating user access control:

1. **Identity Providers supported by Cognito Federated Identities (Figure 1):**
   ![Supported IdPs](/images/3-BlogsPosted/Blog2/image005.png)

2. **Analogy: User Pools issue passports (JWTs) and Identity Pools issue boarding passes (IAM Credentials) (Figure 2):**
   ![Passport Boarding Pass Analogy](/images/3-BlogsPosted/Blog2/image007.png)

3. **Angular V4 Single Page Application interface for testing IdPs (Figure 3):**
   ![Angular Application UI](/images/3-BlogsPosted/Blog2/image009.png)

4. **Comprehensive security architecture diagram integrating Cognito, API Gateway, Lambda, and DynamoDB (Figure 4):**
   ![Security Architecture Diagram](/images/3-BlogsPosted/Blog2/CognitoDiagram.png)

5. **User details retrieved after Google authentication (Figure 5):**
   ![Google Sign In](/images/3-BlogsPosted/Blog2/image011.png)

6. **Google user profile information dashboard (Figure 6):**
   ![Google Profile Dashboard](/images/3-BlogsPosted/Blog2/image013.png)

7. **Cognito Federated Identities Console tracking unique Identity IDs (Figure 7):**
   ![Cognito Identity Console](/images/3-BlogsPosted/Blog2/image015.png)

8. **Test Access card: Request allowed for /cip (Status 200) but denied for /google (Status 403) (Figure 8):**
   ![Access Control Test](/images/3-BlogsPosted/Blog2/image017.png)

9. **Group Management and IAM Role mapping in Cognito User Pools (Figure 9):**
   ![Cognito User Pool Groups](/images/3-BlogsPosted/Blog2/image019.png)

10. **Access Denied response for API paths not mapped to user roles (Figure 10):**
    ![Access Denied API Response](/images/3-BlogsPosted/Blog2/image021.png)

11. **Configuring Cognito User Pool Authorizer directly on API Gateway (Figure 11):**
    ![Cognito User Pool Authorizer Setup](/images/3-BlogsPosted/Blog2/image023-1.png)

12. **Testing JWT Token Claims inside the API Gateway Console (Figure 12):**
    ![Testing Token Claims](/images/3-BlogsPosted/Blog2/image025.png)

13. **User profiles successfully persisted to DynamoDB via API calls (Figure 13):**
    ![DynamoDB User Records](/images/3-BlogsPosted/Blog2/image027.png)

---

### 4. Links
* **Original Article:** [Secure API Access with Amazon Cognito, Amazon API Gateway, and AWS Lambda](https://aws.amazon.com/blogs/compute/secure-api-access-with-amazon-cognito-federated-identities-amazon-cognito-user-pools-and-amazon-api-gateway/)  
* **Facebook Post Link:** [AWS Study Group VN Not yet approved](https://www.facebook.com/share/p/1ENb8bUptS/)

---

### 5. Guides
The technical implementations deployed across the security layers include:
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
