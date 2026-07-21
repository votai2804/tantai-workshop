---
title: "Blog 1"
date: 2026-07-08
weight: 1
chapter: false
pre: " <b> 3.1. </b> "
---

# Why Epic Games Developed Lore and How AWS Optimizes Binary Asset Storage

### 1. Main Content
Traditional version control systems (like Git) are not optimized for large binary assets (such as textures, 3D models, animations, or engine binaries) in game development. Every time an asset is modified, Git often saves the entire new file version, resulting in wasted storage space and high infrastructure costs.

To solve this challenge, Epic Games developed **Lore** – an open-source version control system specifically designed for binary assets. Lore splits large files into smaller fragments (chunks) identified by cryptographic hashes, maximizing reuse and enabling efficient data deduplication.

---

### 2. Key Takeaways
* **Data Fragmentation:** Binary files are broken into smaller chunks. Only chunks containing modified data are stored as new versions, while unmodified parts are completely reused.
* **Cost-effective Branching:** Branch creation is near-instantaneous and consumes negligible storage because branches simply reference existing fragments instead of duplicating files.
* **Cross-Project Deduplication:** Identical fragments across different files or even distinct game projects are only stored once, optimizing storage at the studio scale.
* **Serverless Cache & Storage:** Utilizes EC2 Edge Pods to cache fragments near clients, combined with ECS and S3 for processing and persistent storage.

---

### 3. Images
Here is the architecture diagram of the Lore system deployed on AWS:

![Lore Architecture on AWS](/images/3-BlogsPosted/Blog1/blog1.png)

---

### 4. Links
* **Original Article:** [How Lore rethinks binary asset storage on AWS](https://aws.amazon.com/blogs/gametech/how-lore-rethinks-binary-asset-storage-on-aws/)  
* **Facebook Post Link:** [AWS Study Group VN](https://web.facebook.com/groups/660548818043427/user/100029043690648)  

---

### 5. Guides
The Lore architecture on AWS consists of the following core components:
1. **Amazon EC2 (Edge Pods):** Acts as the entry point for clients, caching fragments locally on NVMe drives to accelerate data retrieval for developers and artists.
2. **Amazon ECS (Write Tier):** Receives newly uploaded fragments, handles the deduplication pipeline, and coordinates persistent writes.
3. **Amazon S3 (Storage Tier):** Provides highly durable, secure, and cost-effective long-term storage for unique fragments.
4. **Amazon DynamoDB (Metadata & Locking):** Manages branch information, commit history, mapping references between files and fragments, and locking mechanisms with single-digit millisecond latency.
5. **AWS Cloud Map:** Enables dynamic service discovery, allowing Edge Pods to automatically find and connect to the Write Tier using internal DNS names.
