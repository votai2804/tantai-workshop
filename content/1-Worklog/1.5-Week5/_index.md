---
title: "Week 5 Worklog"
date: 2026-05-18
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---
### Week 5 Objectives:
* Complete practice Lab 10, Lab 19, and Lab 20.
* Study Module 03 theory (AWS Computing Services).
* Project: Initialize AWS Lambda functions to handle business logic and configure REST resources on API Gateway.
### Tasks to be carried out this week (18/05 - 22/05/2026):
| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| Monday | Complete practice Lab 10 | 18/05/2026 | 18/05/2026 | [https://000010.awsstudygroup.com/](https://000010.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan4/lab10.png) |
| Tuesday | Practice Lab 19 | 19/05/2026 | 19/05/2026 | [https://000019.awsstudygroup.com/](https://000019.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan5/tao-CloudFormation-lab19.png) |
| Wednesday | Practice Lab 20 & Study Module 03 theory (AWS Computing Services) | 20/05/2026 | 20/05/2026 | [Lesson Link](https://www.youtube.com/watch?v=-t5h4N6vfBs&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i&index=72) <br><br> [https://000020.awsstudygroup.com/](https://000020.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan5/chay-lab20-stack.png) |
| Thursday | Work in the office in person (May 21) | 21/05/2026 | 21/05/2026 | Office Day |
| Friday | **Project (Implementation Wk 1/6):** Initialize AWS Lambda functions to handle basic business logic & configure REST resources on API Gateway | 22/05/2026 | 22/05/2026 | Project Implementation |
### Detailed Learning, Practice, and Project Tasks:
#### 1. Practice Lab 19: Set up VPC Peering
* **Objective:** Connect private and secure networks between two independent VPCs on AWS.
* **Content Summary:** Initialize a VPC Peering Connection between two VPCs, update Route Tables, and set up Network ACLs (stateless firewall) at the subnet level to strictly control traffic.
* **Skills Gained:** VPC Peering configuration, Network ACL administration, Cross-Peering DNS.
#### 2. Practice Lab 20: AWS Transit Gateway Overview
* **Objective:** Simplify connectivity between multiple VPCs via a central hub.
* **Content Summary:** Deploy AWS Transit Gateway, attach subnets from 4 different VPCs to Transit Gateway (TGW Attachment), and configure centralized routing tables to replace complex peering mesh.
* **Skills Gained:** AWS Transit Gateway administration, large-scale routing, optimizing network links.
#### 3. Study Module 03 Theory (AWS Computing Services)
* **Objective:** Understand compute services on AWS (EC2, Auto Scaling, Lambda, ECS).
* **Content Summary:** Study EC2 instance types, AMI structure, EBS volumes, and EC2 Auto Scaling auto-scaling mechanisms.
* **Skills Gained:** Compute resources management, auto-scaling infrastructure configuration.
#### 4. Project (Implementation Wk 1/6): Backend Compute & API Gateway
* **Objective:** Build REST API infrastructure to receive and process riddle generation requests from the Frontend.
* **Content Summary:** Create a REST API on Amazon API Gateway, define `/riddle` resource and POST method. Write Node.js code for the AWS Lambda function to process basic logic, and configure Lambda Integration on API Gateway.
* **Skills Gained:** Node.js Lambda programming, API Gateway REST endpoints configuration, setting up IAM Execution Roles.
### Week Achievements:
* Successfully completed 3 practice Labs (10, 19, 20) and finished studying Module 3 theory.
* Successfully set up the serverless backend foundation (Lambda + API Gateway) for the project.