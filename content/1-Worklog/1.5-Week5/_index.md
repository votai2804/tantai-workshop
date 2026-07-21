---
title: "Week 5 Worklog"
date: 2026-05-18
weight: 5
chapter: false
pre: " <b> 1.5. </b> "
---

### Week 5 Objectives:
* Complete practice labs Lab 10, Lab 19, and Lab 20.
* Study Module 03 theory (AWS Computing Services).
* Project: Initialize AWS Lambda functions for business logic and configure REST resources on API Gateway.

### Tasks to be carried out this week (18/05 - 22/05/2026):

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| Monday | Complete practice Lab 10 | 18/05/2026 | 18/05/2026 | [https://000010.awsstudygroup.com/](https://000010.awsstudygroup.com/) |
| Tuesday | Practice Lab 19 | 19/05/2026 | 19/05/2026 | [https://000019.awsstudygroup.com/](https://000019.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan5/tao-CloudFormation-lab19.png) |
| Wednesday | Practice Lab 20 & Study Module 03 theory (AWS Computing Services) | 20/05/2026 | 20/05/2026 | [Lesson Link](https://www.youtube.com/watch?v=-t5h4N6vfBs&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i&index=72) <br><br> [https://000020.awsstudygroup.com/](https://000020.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan5/chay-lab20-stack.png) |
| Thursday | Work in the office in person (May 21) | 21/05/2026 | 21/05/2026 | Office Day |
| Friday | **Project (Implementation Wk 1/6):** Initialize AWS Lambda functions to handle basic business logic & configure REST resources on API Gateway | 22/05/2026 | 22/05/2026 | Project Implementation |


### Detailed Learning, Practice, and Project Tasks:

#### 1. Practice Lab 19: Set up VPC Peering
* **Objective:** Establish a secure and private network connection between two independent VPCs on AWS.
* **Content Summary:** Created a VPC Peering Connection, updated Route Tables for both sides, and set up Subnet-level Network ACLs (stateless firewalls) to control network traffic.
* **Skills Gained:** VPC Peering configuration, Network ACL administration, Cross-Peering DNS.

#### 2. Practice Lab 20: Overview of AWS Transit Gateway
* **Objective:** Simplify connections between multiple VPCs using a centralized hub.
* **Content Summary:** Deployed AWS Transit Gateway, attached subnets from 4 different VPCs (TGW Attachment), and configured centralized routing tables to replace complex mesh VPC Peering.
* **Skills Gained:** AWS Transit Gateway management, large-scale network routing, network interconnectivity optimization.

#### 3. Study Module 03 (AWS Computing Services)
* **Objective:** Understand various compute options on AWS (EC2, Auto Scaling, Lambda, ECS).
* **Content Summary:** Researched EC2 instance types, AMI structures, EBS volumes, and EC2 Auto Scaling scaling mechanisms.
* **Skills Gained:** Compute resource management, configuring auto-scaling infrastructure.

#### 4. Project (Implementation Wk 1/6): Backend Compute & API Gateway
* **Objective:** Build a REST API infrastructure to receive and handle riddle generation requests from the frontend.
* **Content Summary:** Created a REST API on Amazon API Gateway, defining the `/riddle` resource and POST method. Wrote Node.js source code for an AWS Lambda function handling basic logic and configured Lambda Integration on API Gateway.
* **Skills Gained:** Node.js Lambda development, API Gateway REST endpoint configuration, IAM execution role setup.


### Week Achievements:
* Successfully completed 3 practice Labs (10, 19, 20) and studied Module 3 theory.
* Established the serverless backend foundation (Lambda + API Gateway) for the project.
