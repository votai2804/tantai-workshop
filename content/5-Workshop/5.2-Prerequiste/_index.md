---
title : "Prerequiste"
date : 2024-01-01 
weight : 2 
chapter : false
pre : " <b> 5.2. </b> "
---

# Prerequisites

Before starting this workshop, make sure you have prepared the following components:

#### 1. AWS Account
- An active AWS Account.
- An IAM User or Role with sufficient permissions to manage AWS Amplify, Amazon CloudFront, AWS WAF, Amazon Route 53, and Amazon API Gateway.

#### 2. Source Code & GitHub Account
- A GitHub account.
- The frontend codebase (React, Vue, or Angular) pushed to a private or public GitHub repository. This repository will be connected to AWS Amplify for continuous hosting.

#### 3. Domain Name
- A registered domain name (e.g. `yourdomain.com`).
- The domain can be managed via Amazon Route 53 (using a Public Hosted Zone) or an external DNS registrar.

#### 4. Backend Services
- Backend API services (such as AWS Lambda functions) already deployed and working.
- Note down the AWS Region where your Lambda functions are deployed.