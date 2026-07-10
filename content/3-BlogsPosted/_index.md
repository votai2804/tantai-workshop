---
title: "Blogs Posted"
date: 2024-01-01
weight: 3
chapter: false
pre: " <b> 3. </b> "
---

Below is the list of technical blog posts published on the **AWS Study Group** community:

### 1. [Blog 1 - Why Epic Games Developed Lore and How AWS Helps Optimize Binary Assets Storage](3.1-Blog1/)
This blog post analyzes **Lore**—an open-source version control system built by Epic Games tailored specifically for large binary assets in game development. It explains how Lore fragments files to allow reuse instead of saving full duplicates, and outlines the deployment architecture on AWS utilizing Amazon S3, DynamoDB, EC2, and ECS. It clarifies why this architecture optimizes storage costs, accelerates sync times, and manages branching effectively.

### 2. [Blog 2 - Serverless Security Architecture: How to Protect the AI Riddle Generator on AWS](3.2-Blog2/)
This blog post shares a multi-layered security model (**Defense in Depth**) designed for Serverless applications combining Generative AI (specifically the AI Riddle Generator application). The contents detail blocking DDoS & Prompt Injection attacks at the edge using CloudFront and AWS WAF, implementing secure JWT validation via AWS Cognito and API Gateway Authorizers, applying the Principle of Least Privilege for IAM roles, and setting up automated observability using CloudWatch and SNS.

### 3. [Blog 3 - How an Organization Slashed AWS Costs by 39% in 12 Weeks](3.3-Blog3/)
This blog post details a real-world cost optimization case study for a SaaS company. It highlights how they tackled 5 primary cost bottlenecks: upgrading legacy compute resources, routing S3 traffic via VPC Endpoints instead of expensive NAT Gateways, consolidating Load Balancers (NLB), setting up S3 Lifecycle tiering policies, and dynamically sizing resources using Auto Scaling.
