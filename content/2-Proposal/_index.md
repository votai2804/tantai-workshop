---
title: "Proposal"
date: 2024-01-01
weight: 2
chapter: false
pre: " <b> 2. </b> "
---

# AI Riddle Generator - Project Proposal

---

## 1. Project Overview

**Project Name**: AI Riddle Generator Application  
**Duration**: 12 weeks (April 17 - July 10, 2026)  
**Intern**: Vo Tan Tai  
**University**: HCMC University of Technology (HUTECH)

### What is This Project?

An AI-driven application designed to automatically generate intellectual riddles, acrostic poems, and natural Vietnamese riddles with hints for kids. The entire system is built on Amazon Web Services (AWS) using a cost-efficient Serverless architecture (requiring zero server management).

---

## 2. Problem Statement

### Current Challenges
- Creating educational content, riddles, and poems for children requires significant time and creative effort.
- Traditional web applications struggle to dynamically personalize content (keywords, age groups, genres) in real-time.
- Standard VM-based infrastructure often faces performance bottlenecks during traffic spikes and incurs high idle maintenance costs.
- Higher vulnerability to AI prompt injection attacks and malicious edge traffic (DDoS).

### Solution
Build a cloud-native serverless solution combined with Generative AI:
- Utilize a Large Language Model (LLM) to fully automate the process of converting input keywords into custom riddles and poems.
- Leverage serverless architecture to automatically scale computational capacity in response to real-time user traffic while minimizing cost.
- Deploy multi-layered edge security configurations to intercept prompt injection attempts and malicious requests.

---

## 3. Project Objectives

### Primary Objectives
1. **Integrate Generative AI (AI Inference)**: Establish connection with Amazon Bedrock and invoke the Anthropic Claude 3.5 Sonnet model to generate clean JSON-formatted outputs.
2. **Build Serverless Infrastructure**: Implement AWS Lambda as the core logic orchestrator, integrating with Amazon API Gateway and DynamoDB.
3. **Manage Identity & Authorization**: Utilize AWS Cognito User Pools to manage parent/teacher user accounts and secure endpoints using JWT Tokens.
4. **Optimize Deployment & Front-End Security**: Host the React application on AWS Amplify, accelerate content delivery via CloudFront, and protect the system with AWS WAF.
5. **Observability & Logging**: Configure CloudWatch Logs to collect function metrics and setup SNS to notify administrators of system exceptions.

---

## 4. Solution Architecture

### AWS Services Used (Key Services)

| Service | Purpose | Why Choose |
|---------|---------|-----------|
| **Amazon Bedrock** | AI Inference Pipeline | Directly invokes Anthropic Claude 3.5 Sonnet to generate structured riddle data. |
| **AWS Lambda** | Business logic layer (Serverless Compute) | Runs independently, scales automatically, packages prompts, and communicates with AI/DB. |
| **API Gateway & Cognito** | Authentication & API management | Validates JWT Tokens and safely routes API requests from the frontend app to Lambda functions. |
| **DynamoDB & S3** | Data Persistence & Storage | DynamoDB stores user history/upvotes with sub-millisecond latency; S3 stores and exports PDF/Word files via secure Presigned URLs. |
| **CloudFront, WAF, Amplify** | Edge Hosting & Presentation | Amplify hosts source code, CloudFront accelerates static asset loading, and WAF blocks DDoS & Prompt Injections. |

---

## 5. Project Timeline

### Phase 1: Infrastructure & Security Setup (Week 1-3) ✅
- Domain registration and Amazon Route 53 configuration.
- Deploy front-end code to AWS Amplify and distribute via Amazon CloudFront.
- Configure AWS WAF rules and establish AWS Cognito User Pools.

### Phase 2: Backend Development & AI Integration (Week 4-8) ✅
- Build REST APIs on Amazon API Gateway.
- Develop core application logic inside AWS Lambda functions.
- Integrate Amazon Bedrock (Claude 3.5 Sonnet) for prompt execution and riddle generation.

### Phase 3: Storage, Observability & Finalization (Week 9-12) ✅
- Setup Amazon DynamoDB for history logs and voting counts.
- Configure Amazon S3 to store and generate time-limited Presigned URLs for PDF/Word exports.
- Implement system monitoring with IAM roles, CloudWatch metrics, and Amazon SNS alerts.
- Final test runs and documentation writing.

---

## 6. Success Criteria

✅ **Functional Requirements**
- **AI-driven Riddle Generation (AI Inference)**: Automate the generation of customized intellectual riddles, acrostic poems, and Vietnamese riddles based on user keywords and parameters (genre, age group, difficulty) using Anthropic Claude 3.5 Sonnet via Amazon Bedrock.
- **Authentication & Authorization**: Implement secure sign-up/login flows with Cognito User Pools and encrypt all API Gateway REST endpoints using Cognito Authorizers.
- **History Retention (Data Persistence)**: Auto-save generation logs, favorite states (upvotes), keyword inputs, and outputs for individual user accounts in DynamoDB.
- **Document Export (Storage & Export)**: Export riddles into print-ready documents (PDF/Word) stored in S3, served to authenticated users via secure, time-limited S3 Presigned URLs.
- **Serverless API Gateway**: Coordinate all data flows and business operations through AWS Lambda and Amazon API Gateway.
- **Edge Deployment & Custom Domain**: Host frontend assets on AWS Amplify via GitHub CI/CD, optimize global response times with CloudFront, and route via Route 53.
- **Monitoring & Alerting (Observability)**: Setup CloudWatch Alarms to track Lambda invocation error rates, automatically triggering Amazon SNS email notifications to administrators upon failure.

✅ **Documentation**
- **Bilingual Support (Vietnamese/English)**: Ensure all setup guides, code documentation, and reports are fully available in both Vietnamese and English.
- **Step-by-Step Workshop Guides**: Author a comprehensive 12-chapter workshop series walking users through environment setup, resource provisioning, Lambda coding, API security, and cleanup.
- **Architecture Diagrams**: Include visual, clear system architecture diagrams highlighting the flow of data across edge hosting, serverless compute, and database storage layers.

✅ **Cost Estimation**
- **Zero-Idle Serverless Architecture**: Incur $0 USD maintenance fees when there is no incoming traffic to the application.
- **Maximized AWS Free Tier Usage**:
  - AWS Lambda: 1 million free invocations per month.
  - Amazon DynamoDB: 25 GB of free NoSQL storage.
  - Amazon S3: 5 GB of free object storage in the first year.
  - Amazon API Gateway: 1 million free HTTP API calls per month.
  - AWS Amplify: 1,000 free build minutes per month.
- **Pay-As-You-Go Bedrock AI Pricing**: Incur token-based charges only for active requests. Average cost is extremely low (approx. $0.03 USD per 100 generated riddles).
- **Total Estimated Cost**: < $1 USD/month for lab/workshop activities, and < $5 USD/month for low-traffic prototype production environments.

---

**Status**: ✅ Approved for Implementation