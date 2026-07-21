---
title: "Blog 3"
date: 2026-07-09
weight: 3
chapter: false
pre: " <b> 3.3. </b> "
---

# How One Organization Cut AWS Costs by 39% in 12 Weeks

### 1. Main Content
This post explores a real-world case study of a SaaS company's Platform Engineering team with a monthly AWS spend of approximately $35,000 USD (processing 150 TB of data). Anticipating a 10x growth phase that would scale costs to $350,000 USD/month, the team adopted a staged cloud optimization strategy over 12 weeks to minimize deployment risks, successfully cutting **39% off their monthly AWS bill** (saving $13,700 USD/month).

---

### 2. Key Takeaways
* **S3 Tiering & EBS Upgrades:** Migrated EBS volumes from gp2 to gp3 (saving 20% on volume costs) and enabled S3 Intelligent-Tiering to automatically transition rarely-accessed files to cheaper storage tiers.
* **NAT Gateway & VPC Endpoint:** Configured a VPC Gateway Endpoint for S3 to route S3 traffic internally within the AWS network, eliminating high NAT Gateway data transfer charges.
* **Load Balancer Consolidation (NLB to ALB):** Consolidated over 150 Network Load Balancers (NLBs) allocated per-service into 5 Application Load Balancers (ALBs) using Route 53 Weighted Routing.
* **Karpenter & AWS Graviton ARM Migration:** Replaced the legacy Cluster Autoscaler with Karpenter and migrated applications to ARM-based AWS Graviton instances, saving an additional 20% on compute costs.

---

### 3. Images
Below are the data charts and optimization results captured during the 12-week cost reduction campaign:

1. **Analyzing expensive NAT Gateway data transfer traffic:**
   ![NAT Gateway Traffic Analysis](/images/3-BlogsPosted/Blog3/1.png)

2. **Configuring internal VPC Gateway Endpoint routing for S3:**
   ![VPC Endpoint for S3](/images/3-BlogsPosted/Blog3/2.png)

3. **Consolidating 150 legacy NLBs into 5 ALBs:**
   ![Load Balancer Consolidation](/images/3-BlogsPosted/Blog3/3.png)

4. **Dynamic scaling execution using Karpenter and Graviton Nodes:**
   ![Karpenter Node Auto-scaling](/images/3-BlogsPosted/Blog3/4.png)

5. **Final 39% AWS monthly bill savings dashboard:**
   ![Cost Optimization Results](/images/3-BlogsPosted/Blog3/5.png)

---

### 4. Links
* **Original Article:** [How one organization cut AWS costs by 39% in 12 weeks](https://aws.amazon.com/vi/blogs/aws-cloud-financial-management/how-one-organization-cut-aws-costs-by-39-in-12-weeks/)  
* **Facebook Post Link:** [AWS Study Group VN](https://www.facebook.com/groups/660548818043427/user/100015108252190)

---

### 5. Guides
The 12-week cost optimization project was executed in three primary phases:
1. **Phase 1: Infrastructure Foundations (Weeks 1 - 4):**
   * *Actions:* Performed live migrations from gp2 to gp3 EBS volumes and enabled S3 Intelligent-Tiering. Created a VPC Gateway Endpoint for S3. Utilized the AWS Load Balancer Controller to consolidate 150 legacy NLBs into 5 ALBs.
2. **Phase 2: Compute Right-Sizing (Weeks 4 - 8):**
   * *Actions:* Analyzed usage via AWS Compute Optimizer to detect memory-bound instances and migrated workloads to RAM-optimized r6a.2xlarge instances, halving vCPU counts while retaining RAM capacities.
3. **Phase 3: Karpenter & Graviton Next-Gen Architecture (Weeks 8 - 12):**
   * *Actions:* Deployed Karpenter to optimize Kubernetes node scheduling. Built multi-architecture container images and migrated workloads onto Graviton ARM-based nodes (r6g.2xlarge).
4. **Permanent Cost Governance:**
   * Integrated cost efficiency reviews into recurring Sprint Planning sessions.
   * Defined Service Control Policies (SCPs) to deny the creation of legacy gp2 volumes and limit instances to approved families and Regions.
