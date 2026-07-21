---
title: "Week 7 Worklog"
date: 2026-06-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---
### Week 7 Objectives:
* Study Module 4 theory (AWS Database Services).
* Complete practice Lab 13 - Module 4, Lab 14, and Lab 24.
* Project: Integrate DynamoDB to store user's riddle generation history.
### Tasks to be carried out this week (01/06 - 05/06/2026):
| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| Monday | Study Module 4 theory | 01/06/2026 | 01/06/2026 | [Lesson Link](https://www.youtube.com/watch?v=hsCfP0IxoaM&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i&index=103) |
| Tuesday | Practice Lab 13 - Module 4 | 02/06/2026 | 02/06/2026 | [https://000013.awsstudygroup.com/](https://000013.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan7/lab13-S3.png) |
| Wednesday | Practice Lab 14 | 03/06/2026 | 03/06/2026 | [https://000014.awsstudygroup.com/](https://000014.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan7/lab14-bucket.png) |
| Thursday | Practice Lab 24 | 04/06/2026 | 04/06/2026 | [https://000024.awsstudygroup.com/](https://000024.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan7/lab24.png) |
| Friday | **Project (Implementation Wk 3/6):** Integrate DynamoDB - Design table schema, configure keys, and write Lambda backend logic to save riddle generation history to DynamoDB | 05/06/2026 | 05/06/2026 | Project Implementation |
### Detailed Learning, Practice, and Project Tasks:
#### 1. Study Module 04 & Lab 13 (AWS Database Services)
* **Objective:** Understand database service models on AWS (RDS, Aurora, DynamoDB).
* **Content Summary:** Study RDS architecture for relational databases and DynamoDB for ultra-low latency NoSQL databases.
* **Skills Gained:** Choosing appropriate database solutions, understanding database architecture.
#### 2. Practice Lab 14: VM Import/Export
* **Objective:** Migrate virtual machines from on-premises environment to AWS cloud.
* **Content Summary:** Use AWS CLI to import VM files (.ova, .vmdk) from on-premises to S3 buckets and convert them into EC2 AMIs.
* **Skills Gained:** AWS CLI administration, infrastructure migration, S3 bucket management.
#### 3. Project (Implementation Wk 3/6): Integrate DynamoDB
* **Objective:** Store riddle generation history and user interactions to support future scalable features.
* **Content Summary:** Design NoSQL table schema in DynamoDB with Partition Key `username` and Sort Key `timestamp`. Write Node.js code in Lambda to write riddle details and upvote counts to the DB upon successful generation.
* **Skills Gained:** NoSQL DB design, DynamoDB CRUD operations from Lambda, IAM Policies configuration for DynamoDB.
### Week Achievements:
* Completed Module 4 theory and finished all practice Labs.
* Successfully integrated DynamoDB and wrote logic to save riddle generation history to DB via Lambda.