---
title: "Workshop"
date: 2024-01-01
weight: 5
chapter: false
pre: " <b> 5. </b> "
---

# Frontend Web Hosting & API Gateway Connection

#### Overview
In this workshop, you will learn how to deploy a modern serverless frontend application on AWS, configure global content delivery with advanced security, and integrate the frontend with a serverless REST API backend.

You will work with the following key AWS services:
- **AWS Amplify**: For hosting the static frontend web application directly integrated with a GitHub repository for CI/CD.
- **Amazon CloudFront**: Acting as a Content Delivery Network (CDN) to cache content at edge locations worldwide, lowering latency.
- **AWS WAF (Web Application Firewall)**: Shielding the application at the edge from common web vulnerabilities and prompt injections.
- **Amazon Route 53**: To manage DNS and route traffic seamlessly to the CloudFront distribution.
- **Amazon API Gateway**: To expose REST endpoints, enable CORS, and integrate with backend AWS Lambda functions.

#### Content

1. [Workshop Overview](5.1-Workshop-overview/)
2. [Prerequisites](5.2-Prerequiste/)
3. [Deploy Frontend on AWS Amplify](5.3-Amplify/)
4. [Enable CloudFront, WAF & Route 53](5.4-CloudFront/)
5. [Connect Frontend with API Gateway](5.5-APIGateway/)
6. [Cleanup Resources](5.6-Cleanup/)