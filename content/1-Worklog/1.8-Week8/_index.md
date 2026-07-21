---
title: "Week 8 Worklog"
date: 2026-06-08
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---
### Week 8 Objectives:
* Finalize detailed development direction for the AI Riddle Generator project.
* Study Module 5 theory and complete practice Lab 25, Lab 57, and Lab 18.
* Participate in the Offline AWS Technology Event on June 13.
* Project: Integrate S3 storage and write logic to generate S3 Presigned URLs for printed files.
### Tasks to be carried out this week (08/06 - 13/06/2026):
| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| Monday | **Project:** Finalize detailed development direction for the "AI Riddle Generator" project | 08/06/2026 | 08/06/2026 | Idea Definition |
| Tuesday | Practice Lab 25 & Study Module 5 theory (AWS Storage Services) | 09/06/2026 | 09/06/2026 | [Lesson Link](https://www.youtube.com/watch?v=tsobAlSg19g&list=PLahN4TLWtox2a3vElknwzU_urND8hLn1i&index=150) <br><br> [https://000025.awsstudygroup.com/](https://000025.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan8/lab25-stack.png) |
| Wednesday | Practice Lab 57 | 10/06/2026 | 10/06/2026 | [https://000057.awsstudygroup.com/](https://000057.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan8/lab57.png) |
| Thursday | Practice Lab 18 | 11/06/2026 | 11/06/2026 | [https://000018.awsstudygroup.com/](https://000018.awsstudygroup.com/) <br><br> ![Lab Screenshot](/images/worklog/Tuan8/lab18-config.png) |
| Friday | **Project (Implementation Wk 4/6):** Integrate S3 - Create bucket to store printed documents (PDF/Word), write logic to generate Presigned URL from Lambda for secure file download | 12/06/2026 | 12/06/2026 | Project Implementation |
| Saturday | Participate in the Event (June 13) | 13/06/2026 | 13/06/2026 | Event |
### Detailed Learning, Practice, and Project Tasks:
#### 1. Practice Lab 25: Deploy FSx on Windows
* **Objective:** Establish shared file storage systems for Windows server infrastructures.
* **Content Summary:** Create Amazon FSx for Windows File Server using SMB, integrate Active Directory for access control, and configure AZ data replication.
* **Skills Gained:** Amazon FSx administration, Active Directory integration, Windows storage optimization.
#### 2. Practice Lab 18: Getting Started with AWS Security Hub
* **Objective:** Configure centralized security management systems on AWS.
* **Content Summary:** Enable Security Hub to aggregate findings from GuardDuty, Inspector, and Macie, and perform automated compliance checks.
* **Skills Gained:** Cloud security compliance, AWS Security Hub utilization.
#### 3. Participate in the Event on June 13
* **Objective:** Learn system design thinking and workplace communication skills.
* **Content Summary:** Study Cache-aside architecture, Defense at the Edge principles, transitioning from a Problem Solver to a System Thinker, and DevOps communication.
* **Skills Gained:** System Thinking, Edge Security, DevOps communication.
#### 4. Project (Implementation Wk 4/6): Integrate S3 & Presigned URL
* **Objective:** Support exporting riddles into documents (PDF/Word) for children and secure downloads.
* **Content Summary:** Create private S3 Buckets. Wrote Lambda backend logic to save riddle texts as printable documents to S3 and generate temporary download links (S3 Presigned URLs) valid for 5 minutes.
* **Skills Gained:** S3 security configuration, Presigned URL generation programming, object lifecycle management.
### Week Achievements:
* Successfully finalized detailed project requirements and completed all practice labs.
* Successfully implemented PDF/Word document exports saved on S3 via secure S3 Presigned URLs.
* Participated in the offline event and gained insights into System Thinking.