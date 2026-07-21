---
title: "Week 6 Worklog"
date: 2026-05-25
weight: 6
chapter: false
pre: " <b> 1.6. </b> "
---

### Week 6 Objectives:
* Study Module 3 theory and work in the office.
* Complete practice labs Lab 13, Lab 24, and Lab 57.
* Project: Integrate Generative AI (Amazon Bedrock) invoking Claude 3.5 Sonnet to generate riddles.

### Tasks to be carried out this week (25/05 - 30/05/2026):

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| Monday | Work in the office in person (May 25 and May 26) & Study Module 3 theory | 25/05/2026 | 26/05/2026 | [Lesson Link](https://www.youtube.com/watch?v=-t5h4N6vfBs&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i&index=72) |
| Wednesday | Practice Lab 13 | 27/05/2026 | 27/05/2026 | [https://000013.awsstudygroup.com/](https://000013.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan6/lab13-S3.png) |
| Thursday | Practice Lab 24 | 28/05/2026 | 28/05/2026 | [https://000024.awsstudygroup.com/](https://000024.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan6/lab24.png) |
| Friday | Practice Lab 57 | 29/05/2026 | 29/05/2026 | [https://000057.awsstudygroup.com/](https://000057.awsstudygroup.com/) |
| Saturday | **Project (Implementation Wk 2/6):** Integrate Generative AI (AI Inference) - Write API connecting Amazon Bedrock to invoke Claude 3.5 Sonnet model to generate riddles from prompt | 30/05/2026 | 30/05/2026 | Project Implementation |


### Detailed Learning, Practice, and Project Tasks:

#### 1. Practice Lab 13: Deploy AWS Backup
* **Objective:** Automate data backup and restore processes to protect enterprise assets.
* **Content Summary:** Created a Backup Plan to back up EBS Volumes periodically, tested data recovery, and configured AWS SNS to send status notifications via email.
* **Skills Gained:** Backup management (AWS Backup), AWS SNS alert configuration, data protection.

#### 2. Practice Lab 24: Deploy File Storage Gateway
* **Objective:** Connect AWS cloud storage with on-premises systems using file sharing protocols.
* **Content Summary:** Created an AWS Storage Gateway (File Gateway type), configured File Shares connecting to an S3 Bucket, and mounted this SMB drive on an on-premises server.
* **Skills Gained:** AWS Storage Gateway management, SMB File Share configuration, Hybrid Storage integration.

#### 3. Practice Lab 57: Getting Started with Amazon S3
* **Objective:** Store objects (Object Storage) and understand differences between S3 static hosting and Amplify.
* **Content Summary:** Created an S3 bucket, managed objects, and set up bucket policy permissions. Studied recommendations to use Amplify Hosting for better security and default HTTPS/CDN.
* **Skills Gained:** Amazon S3 administration, object access permission configuration.

#### 4. Project (Implementation Wk 2/6): AI Inference Integration
* **Objective:** Leverage Generative AI to automatically create smart riddles from input keywords.
* **Content Summary:** Wrote Lambda code calling Amazon Bedrock API, sending structured system prompts (acting as a childhood education expert) to the Anthropic Claude 3.5 Sonnet model to generate kid-friendly riddles and acrostic poems in clean JSON format.
* **Skills Gained:** Amazon Bedrock API integration, Context Engineering, Node.js JSON parsing.


### Week Achievements:
* Successfully completed practice Labs 13, 24, and 57.
* Successfully integrated Amazon Bedrock to invoke AI models to generate riddles via Lambda.
