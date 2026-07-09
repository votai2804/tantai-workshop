---
title : "Introduction"
date : 2024-01-01 
weight : 1 
chapter : false
pre : " <b> 5.1. </b> "
---

# Introduction

#### System Architecture Overview
The **AI Riddle Generator** application is designed to be fully serverless, highly scalable, cost-optimized, and secure. The system architecture is divided into the following key tiers:

1. **Edge & Presentation Tier**: AWS Amplify hosts the static web files (compiled React/Vue app). Traffic is routed via Amazon Route 53 to Amazon CloudFront. AWS WAF (Web Application Firewall) sits in front of CloudFront to protect the application from web attacks and prompt injections.
2. **Authentication & API Gateway**: AWS Cognito manages user registration and logins. Amazon API Gateway handles routing of HTTPS requests from the frontend to backend logic.
3. **Compute & AI Pipeline**: AWS Lambda executes the serverless backend logic, interacting with Amazon Bedrock (Anthropic Claude 3.5 Sonnet) to generate riddles.
4. **Data Persistence**: Amazon DynamoDB stores user accounts and riddle history, while Amazon S3 hosts printable exports (PDF/Word documents).

The flow of data starts when the user requests the website. Route 53 resolves the domain name, CloudFront serves the cached frontend, and Cognito authenticates the user. When the user requests a riddle, the frontend sends a signed request via API Gateway to Lambda. Lambda queries Amazon Bedrock for AI generation, stores the history in DynamoDB, and uploads printable versions to S3 before returning the response.

#### Workshop Overview
In this workshop, you will focus on implementing the **Edge, Presentation, and API Gateway connectivity** of the system:
- **Deploying the Frontend to AWS Amplify** to set up a CI/CD pipeline from a Git repository.
- **Activating Amazon CloudFront & AWS WAF** to globally distribute content and shield the app.
- **Mapping Custom DNS in Route 53** to route traffic to CloudFront.
- **Configuring REST API Gateway** to integrate frontend with serverless backend Lambdas and configuring CORS.