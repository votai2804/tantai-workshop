---
title: "Week 6 Worklog"
date: 2026-05-25
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---
### Week 6 Objectives:
* Study Module 3 theory and work in the office.
* Complete practice Lab 13, Lab 24, and Lab 57.
* Project: Integrate generative AI (Amazon Bedrock) to connect Claude 3.5 Sonnet for riddle generation.
### Tasks to be carried out this week (25/05 - 30/05/2026):
| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| Monday | Work in the office in person (May 25 & 26) & Study Module 3 theory | 25/05/2026 | 26/05/2026 | [Lesson Link](https://www.youtube.com/watch?v=-t5h4N6vfBs&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i&index=72) |
| Wednesday | Practice Lab 13 | 27/05/2026 | 27/05/2026 | [https://000013.awsstudygroup.com/](https://000013.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan6/lab13-S3.png) |
| Thursday | Practice Lab 24 | 28/05/2026 | 28/05/2026 | [https://000024.awsstudygroup.com/](https://000024.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan6/lab24.png) |
| Friday | Practice Lab 57 | 29/05/2026 | 29/05/2026 | [https://000057.awsstudygroup.com/](https://000057.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan6/lab57.png) |
| Saturday | **Project (Implementation Wk 2/6):** Integrate AI Inference - Write API connecting Amazon Bedrock to invoke Claude 3.5 Sonnet model to generate riddles from prompt | 30/05/2026 | 30/05/2026 | Project Implementation |
### Detailed Learning, Practice, and Project Tasks:
#### 1. Practice Lab 13: Deploy AWS Backup
* **Objective:** Automate data backup and restore to protect corporate assets.
* **Content Summary:** Create AWS Backup Plans to backup EBS Volumes periodically, test data restore from backups, and configure AWS SNS for email notifications.
* **Skills Gained:** Backup management (AWS Backup), AWS SNS alert configuration, data protection.
#### 2. Practice Lab 24: Deploy File Storage Gateway
* **Objective:** Connect AWS cloud storage with on-premises systems using file sharing protocols.
* **Content Summary:** Create AWS Storage Gateway (File Gateway mode), configure File Share to S3 Bucket, and mount this SMB drive to on-premises servers.
* **Skills Gained:** AWS Storage Gateway administration, SMB File Share configuration, Hybrid Storage integration.
#### 3. Practice Lab 57: Getting Started with Amazon S3
* **Objective:** Perform Object Storage and understand differences between S3 Static Web and Amplify.
* **Content Summary:** Create S3 Bucket, manage objects, and set up bucket policy permissions. Learn why Amplify Hosting is recommended for better security and default HTTPS/CDN.
* **Skills Gained:** Amazon S3 administration, object access control configuration.
#### 4. Project (Implementation Wk 2/6): Integrate AI Inference
* **Objective:** Use Generative AI to automatically generate smart riddles from keywords.
* **Content Summary:** Write Lambda code to invoke Amazon Bedrock API, packing detailed Prompts (including System Prompt shaping the role of childhood education expert) to Anthropic Claude 3.5 Sonnet model to generate clean JSON riddles or acrostic poems.
* **Skills Gained:** Amazon Bedrock API integration, Context Engineering, processing JSON in Node.js.
### Week Achievements:
* Successfully completed practice Labs 13, 24, and 57.
* Successfully integrated Amazon Bedrock to invoke AI model for riddle generation via Lambda.