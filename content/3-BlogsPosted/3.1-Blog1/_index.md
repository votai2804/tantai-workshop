---
title: "Blog 1"
date: 2026-07-08
weight: 1
chapter: false
pre: " <b> 3.1. </b> "
---

# Why Epic Games Developed Lore and How AWS Helps Optimize Binary Assets Storage

Hi everyone in the AWS Study Group VN community. I want to share this article with you.

If you have ever developed games with thousands of textures, models, animations, or engine binaries, you probably know that traditional version control systems like Git are not well-suited for binary assets. Every time a few hundred MB file is edited, the system stores almost the entire file as a new version, even if only a tiny part changed. Over time, storage size grows exponentially, leading to massive storage costs.

To solve this problem, Epic Games developed **Lore** – an open-source version control system designed specifically for binary assets. Meanwhile, AWS introduced a reference architecture to deploy Lore on the cloud.

In this article, we will explore:
* How does Lore work differently from traditional version control?
* What does the deployment architecture on AWS look like?
* Why does this model help optimize storage costs?

---

## 1. How does Lore work differently?

Instead of saving the entire file after every modification, Lore splits each binary file into multiple fragments (chunks) and identifies them using a cryptographic hash. This means:
* Only fragments containing modified data are stored.
* Existing fragments are reused.
* A fragment that appears in multiple files or projects only needs to be stored once.

As a result, the growth rate of storage size is significantly reduced as the project develops.

---

## 2. Why does Lore help save costs?

AWS highlights three prominent benefits:
* **Reduced storage capacity**: Only modified data is stored instead of full files.
* **Nearly free branching**: A new branch simply references existing fragments, generating zero new data if assets do not change.
* **Cross-project data sharing**: Duplicated fragments are only stored once, optimizing resources across the entire studio.

---

## 3. Lore Architecture on AWS

AWS deploys Lore using several familiar services, each playing a dedicated role to ensure performance and scalability:

* **Amazon EC2 (Edge Pods)**: Receives connections from clients and caches fragments on NVMe drives to accelerate access times.
* **Amazon ECS (Write Tier)**: Handles deduplication and writes new data.
* **Amazon S3**: Safely stores unique fragments for long-term retention.
* **Amazon DynamoDB**: Manages metadata, locks, and branch information with sub-millisecond latency.
* **AWS Cloud Map**: Helps Edge Pods automatically discover the Write Tier using internal DNS.

This architecture enables the system to scale easily while reducing load on the primary data storage layer.

---

## 4. When should you use Lore?

The Lore system is particularly suitable for:
* Game studios with multiple artists and developers collaborating.
* Projects containing a large volume of binary assets.
* Enterprises developing multiple game titles concurrently.
* Teams looking to optimize storage costs and sync data quickly on AWS.

---

## Conclusion

Lore brings a new approach to binary asset management by breaking down data into reusable fragments instead of saving full files after every modification.

Combined with **Amazon EC2, Amazon ECS, Amazon S3, Amazon DynamoDB**, and **AWS Cloud Map**, this architecture helps:
1. Significantly reduce storage costs.
2. Accelerate asset synchronization.
3. Enable efficient branching.
4. Share data across multiple projects.
5. Scale easily as the studio grows.

For game studios working with large binary assets, this is a highly recommended approach to building a modern version control system on AWS.

> **Original Article:** [How Lore rethinks binary asset storage on AWS](https://aws.amazon.com/blogs/gametech/how-lore-rethinks-binary-asset-storage-on-aws/)  
> **Facebook Post Link:** [AWS Study Group](https://web.facebook.com/groups/660548818043427/user/100029043690648)  
> **Tags:** #AWS #AWSForGames #EpicGames #Lore #AmazonS3 #AmazonDynamoDB #AmazonEC2 #AmazonECS #CloudArchitecture #GameDevelopment #VersionControl #BinaryAssets #StorageOptimization
