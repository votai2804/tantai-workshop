---
title: "Blog 3"
date: 2026-07-09
weight: 3
chapter: false
pre: " <b> 3.3. </b> "
---

# How One Organization Cut AWS Costs by 39% in 12 Weeks

### 1. Main Content
This post explores a real-world case study of a SaaS company's Platform Engineering team with a monthly AWS spend of approximately $35,000 USD (processing 150 TB of data). Anticipating a 10x growth phase that would scale costs to $350,000 USD/month (nearly $4.2 million USD/year), the team adopted a staged cloud optimization strategy over 12 weeks to minimize deployment risks, successfully cutting **39% off their monthly AWS bill** (saving $13,700 USD/month).

---

### 2. Key Takeaways
* **Effort vs. Impact Prioritization Framework:** Building a custom scoring table to rank optimization projects. Low-effort, low-risk, high-impact tasks are prioritized to generate quick wins and fund later phases.
* **Internal Routing via VPC Gateway Endpoints:** Rerouting S3 traffic internally within the AWS private network instead of NAT Gateways, completely eliminating expensive data transfer charges.
* **Load Balancer Consolidation:** Grouping and consolidating over 150 legacy Network Load Balancers (NLBs) allocated per-service into 5 Application Load Balancers (ALBs) organized by domain boundaries.
* **Elastic Infrastructure Right-Sizing:** Migrating EBS gp2 volumes online to gp3, right-sizing memory-bound instances to r6a.2xlarge AMD instances, deploying Karpenter for dynamic node provisioning, and shifting node pools to ARM-based Graviton2.

---

### 3. Images
Below are the data charts and architecture diagrams from the original article illustrating the optimization workflow:

1. **Effort-versus-impact scoring that sequenced the seven optimizations by phase (Figure 1):**
   ![Effort vs Impact Scoring](/images/3-BlogsPosted/Blog3/1.png)

2. **Baseline monthly cost distribution across service categories (Figure 2):**
   ![Baseline Monthly Cost Distribution](/images/3-BlogsPosted/Blog3/2.png)

3. **Three-phase plan ordered by risk and effort level (Figure 3):**
   ![Three Phase Optimization Plan](/images/3-BlogsPosted/Blog3/3.png)

4. **Before-state: Route 53 DNS routes to a dedicated NLB per HTTP service (Figure 4):**
   ![Before state NLB architecture](/images/3-BlogsPosted/Blog3/4.png)

5. **After-state: Route 53 DNS routes to five domain-grouped ALBs (Figure 5):**
   ![After state ALB architecture](/images/3-BlogsPosted/Blog3/5.png)

6. **Monthly savings delivered across the three implementation phases (Figure 6):**
   ![Monthly Savings Dashboard](/images/3-BlogsPosted/Blog3/6.png)

---

### 4. Links
* **Original Article:** [How one organization cut AWS costs by 39% in 12 weeks](https://aws.amazon.com/vi/blogs/aws-cloud-financial-management/how-one-organization-cut-aws-costs-by-39-in-12-weeks/)  
* **Facebook Post Link:** [AWS Study Group VN](https://www.facebook.com/groups/660548818043427/user/100015108252190)

---

### 5. Guides
The 12-week cost optimization project was executed in three primary phases:
1. **Phase 1: Infrastructure Foundations (Weeks 1 - 4):**
   * *Actions:* Migrated gp2 EBS volumes online to gp3, enabled S3 Intelligent-Tiering. Created a VPC Gateway Endpoint for S3. Utilized the AWS Load Balancer Controller to consolidate 150 legacy NLBs into 5 ALBs.
2. **Phase 2: Compute Right-Sizing (Weeks 4 - 8):**
   * *Actions:* Analyzed usage via AWS Compute Optimizer to detect memory-bound instances and migrated workloads to RAM-optimized r6a.2xlarge instances, halving vCPU counts while retaining RAM capacities.
3. **Phase 3: Karpenter & Graviton Next-Gen Architecture (Weeks 8 - 12):**
   * *Actions:* Deployed Karpenter to optimize Kubernetes node scheduling. Built multi-architecture container images and migrated workloads onto Graviton ARM-based nodes (r6g.2xlarge).
4. **Permanent Cost Governance:**
   * Integrated cost efficiency reviews into recurring Sprint Planning sessions.
   * Defined Service Control Policies (SCPs) to deny the creation of legacy gp2 volumes and limit instances to approved families and Regions.
