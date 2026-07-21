---
title: "Week 10 Worklog"
date: 2026-06-22
weight: 10
chapter: false
pre: " <b> 1.10. </b> "
---
### Week 10 Objectives:
* Study Module 6 theory (AWS Architecting Course Conclusion)
* Complete practice Lab 28, Lab 30, and Lab 48.
* Project: Implement Route 53 routing, CloudFront CDN, WAF edge security, and Cognito user login auth.
### Tasks to be carried out this week (22/06 - 27/06/2026):
| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| Monday | Study Module 6 theory (AWS Architecting Course Conclusion) | 22/06/2026 | 22/06/2026 | [Lesson Link](https://www.youtube.com/watch?v=mQWnLwVvTjo&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i&index=180) |
| Tuesday | Practice Lab 28 | 23/06/2026 | 23/06/2026 | [https://000028.awsstudygroup.com/](https://000028.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan10/lab28.png) |
| Wednesday | Practice Lab 30 | 24/06/2026 | 24/06/2026 | [https://000030.awsstudygroup.com/](https://000030.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan10/lab30.png) |
| Thursday | Practice Lab 48 | 25/06/2026 | 25/06/2026 | [https://000048.awsstudygroup.com/](https://000048.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan10/lab48.png) |
| Friday | **Project (Implementation Wk 6/6):** Routing & Security - Configure CloudFront distribution, integrate WAF for edge protection, and map domain with Route 53 | 26/06/2026 | 26/06/2026 | Project Implementation |
| Saturday | **Project (Implementation Wk 6/6):** Cognito Auth - Initialize Cognito User Pool for SPA and configure API Gateway Authorizer to secure API methods | 27/06/2026 | 27/06/2026 | Project Implementation |
### Detailed Learning, Practice, and Project Tasks:
#### 1. Practice Lab 28: Manage EC2 Access with Resource Tags and IAM
* **Objective:** Enforce dynamic permissions based on resource tagging metadata.
* **Content Summary:** Wrote IAM policies allowing administrators to manage only those EC2 instances matching specific tags.
* **Skills Gained:** Attribute-Based Access Control (ABAC), advanced IAM policies.
#### 2. Practice Lab 30: Limit User Permissions with IAM Permission Boundaries
* **Objective:** Set maximum permission boundaries to prevent privilege escalation.
* **Content Summary:** Configured IAM Permission Boundaries for service admins to restrict actual privileges even when assigned broader admin groups.
* **Skills Gained:** IAM security administration, Permission Boundaries setup, privilege escalation prevention.
#### 3. Practice Lab 48: Grant Resource Access via IAM Roles
* **Objective:** Avoid hardcoding sensitive credentials (Access Keys) inside applications.
* **Content Summary:** Configured EC2 Instance Profiles, mapping IAM Roles to virtual servers so applications automatically request temporary credentials to access AWS S3.
* **Skills Gained:** Instance Profile configuration, secure EC2-to-S3 setup, credential security.
#### 4. Study Module 6 Theory (Course Conclusion)
* **Objective:** Master optimized security architectures and high-scale systems design.
* **Content Summary:** Studied Aurora, RDS databases, ElastiCache in-memory databases, Redshift data warehouses, and optimal cloud architectures.
* **Skills Gained:** Optimal cloud architecture design, AWS database optimization.
#### 5. Project (Implementation Wk 6/6): Routing, Security & Cognito Auth
* **Objective:** Launch the application publicly with the highest levels of security.
* **Content Summary:** Initialized CloudFront CDN for global page caching, attached AWS WAF firewall at the edge to block attacks (DDoS, SQL Injection) and Prompt Injection. Registered a Route 53 domain, and created Cognito User Pools with JWT validation on API Gateway.
* **Skills Gained:** CloudFront & WAF edge security configuration, Route 53 domain management, Cognito authentication & JWT validation setup.
### Week Achievements:
* Completed the entire AWS Architecting course and all practice labs.
* Implemented edge security via CloudFront & WAF, mapped Route 53 domain, and secured REST API with Cognito.