---
title: "Week 7 Worklog"
date: 2026-06-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

### Week 7 Objectives:
* Study Module 4 theory (AWS Database Services).
* Complete practice labs Lab 13 - Module 4, Lab 14, and Lab 24.
* Project: Integrate DynamoDB to store user riddle generation history.

### Tasks to be carried out this week (01/06 - 05/06/2026):

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| Monday | Study Module 4 theory (AWS Database Services) | 01/06/2026 | 01/06/2026 | AWS Academy |
| Tuesday | Practice Lab 13 - Module 4 | 02/06/2026 | 02/06/2026 | [Lesson Link](https://www.youtube.com/watch?v=hsCfP0IxoaM&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i&index=103) <br><br> [https://000013.awsstudygroup.com/](https://000013.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan7/lab13-S3.png) |
| Wednesday | Practice Lab 14 | 03/06/2026 | 03/06/2026 | [https://000014.awsstudygroup.com/](https://000014.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan7/lab14-bucket.png) |
| Thursday | Practice Lab 24 | 04/06/2026 | 04/06/2026 | [https://000024.awsstudygroup.com/](https://000024.awsstudygroup.com/) |
| Friday | **Project (Implementation Wk 3/6):** Integrate DynamoDB - Set up table, configure keys, write logic to store riddle history in DB via Lambda | 05/06/2026 | 05/06/2026 | Project Implementation |


### Detailed Learning, Practice, and Project Tasks:

#### 1. Study Module 4 & Lab 13 (AWS Database Services)
* **Objective:** Understand AWS database options (RDS, Aurora, DynamoDB).
* **Content Summary:** Studied RDS architecture for relational databases and DynamoDB NoSQL database for ultra-low latency.
* **Skills Gained:** Database selection strategy, DB architecture knowledge.

#### 2. Practice Lab 14: VM Import/Export
* **Objective:** Migrate virtual machines from on-premises environments to AWS.
* **Content Summary:** Used AWS CLI to import VM files (.ova, .vmdk) from on-premises to S3 buckets and convert them to EC2 AMIs.
* **Skills Gained:** AWS CLI administration, infrastructure migration, S3 bucket management.

#### 3. Project (Implementation Wk 3/6): DynamoDB Integration
* **Objective:** Store user history and riddle interactions for future features.
* **Content Summary:** Designed NoSQL DynamoDB table structures with Partition Key `username` and Sort Key `timestamp`. Wrote Node.js backend logic to record generated riddles and upvotes into the database.
* **Skills Gained:** NoSQL schema design, DynamoDB CRUD operations from Lambda, IAM policy creation for DynamoDB.


### Week Achievements:
* Completed Module 4 theory and all practice labs.
* Successfully integrated DynamoDB, writing storage logic to persist riddle history via Lambda.
