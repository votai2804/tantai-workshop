---
title: "Blog 3"
date: 2026-07-09
weight: 3
chapter: false
pre: " <b> 3.3. </b> "
---

# How an Organization Slashed AWS Costs by 39% in 12 Weeks

**Background:** A Platform Engineering team of a SaaS company processed 150 TB of data, with a monthly AWS spend of approximately $35,000 USD. They were preparing for a 10x growth phase. Without optimization, their monthly AWS bill could have escalated to $350,000 USD (nearly $4.2 million USD per year).

Their objective was to execute sequential cost optimization strategies across three phases, utilizing the savings from earlier phases to fund subsequent initiatives.

## 5 Primary Cost Bottlenecks (The Cost Challenge)

Following an assessment, they identified five main cost bottlenecks:
1. Using legacy resource classes (EC2 m5 instances and EBS gp2 volumes), missing out on the price-performance benefits of modern instance families.
2. Routing S3 traffic through expensive NAT Gateways, leading to $2,400 USD/month in unnecessary data transfer fees.
3. Deploying over 150 Network Load Balancers (NLB), incurring high static maintainance charges.
4. Keeping 100% of data on S3 Standard, with no storage tiering for infrequently accessed data.
5. Sizing compute infrastructure (Right-sizing) based on peak utilization instead of employing Auto Scaling, resulting in 30-50% idle compute waste.

## Prioritization Methodology: Effort vs. Impact

Instead of tackling everything at once, the team used the AWS Cost Optimization Hub to score tasks based on three criteria: effort, cost impact, and risk. Tasks with low risk that did not require application code modifications were prioritized first.

---

## The 3-Phase Optimization Strategy

### Phase 1: Infrastructure Optimization (Weeks 1 - 4)
This phase focused on Storage, Networking, and Load Balancing, delivering immediate "Quick Wins."
* **Storage (EBS & S3):** Guided by AWS Compute Optimizer recommendations, they migrated over 200 volumes from gp2 to gp3 online with zero downtime. They activated S3 Intelligent-Tiering to automatically move objects > 128KB to cheaper tiers, yielding immediate savings of $1,200 USD/month.
* **Networking:** Using AWS Cost and Usage Reports (CUR) and VPC Flow Logs, the team found that 60% of NAT Gateway traffic was directed to S3. They configured a VPC Gateway Endpoint for S3, routing traffic internally through the private AWS network and eliminating $2,400 USD/month in NAT Gateway fees.
* **Load Balancer Consolidation:** The legacy architecture automatically provisioned an NLB for each Kubernetes (EKS) service (over 150 NLBs were active). The team consolidated these into 5 Application Load Balancers (ALBs) grouped by domain (API, Web, Internal, Async, Admin). Using AWS Load Balancer Controller and Route 53 Weighted Routing, they transitioned traffic seamlessly from the old NLBs to the new ALBs (10% -> 50% -> 100%) without dropping a single request. Terminating the 150 redundant NLBs saved an additional $3,400 USD/month.

**Phase 1 Outcome:** Saved ~$8,400 USD/month (a 24% reduction in the total bill).

### Phase 2: Compute Right-Sizing (Weeks 4 - 8)
AWS Compute Optimizer indicated that many general-purpose instances (m5.4xlarge) were memory-bound (utilizing only 45% CPU while consuming 85% RAM), resulting in redundant CPU capacity.

**Action:** They migrated workloads to memory-optimized AMD-powered instances (r6a.2xlarge). This kept the RAM constant at 64 GiB but cut the vCPU count in half, dropping compute costs. By updating Launch Templates and EC2 Auto Scaling groups, they executed safe A/B testing and rollbacks.

### Phase 3: Advanced Optimization & Next-Gen Architecture (Weeks 8 - 12)
* **Karpenter Implementation:** Replaced the legacy Cluster Autoscaler with Karpenter to automate EKS node provisioning more dynamically.
* **ARM Architecture Migration (AWS Graviton):** The team built multi-architecture container images supporting both x86 and arm64. They utilized Karpenter's Disruption Controller to drain old x86 nodes (r6i.2xlarge) and replace them with Graviton2 nodes (r6g.2xlarge), yielding an additional 20% compute savings for supported workloads.

---

## Results & Governance

1. **Achieved Savings:** After 12 weeks, the organization reduced its AWS monthly spend by 39% (saving $13,700 USD/month). Scaled to their projected 10x growth, this optimization avoids roughly $1.64 million USD/year in projected costs.
2. **Sustained Governance:** To ensure cost control remained permanent, the team:
   * Integrated cost reviews into regular Sprint Planning sessions.
   * Established Service Control Policies (SCPs) via AWS Organizations to:
     * Deny the creation of legacy gp2 volumes (enforcing gp3 usage).
     * Restrict resource provisioning to approved instance families and approved AWS Regions.

> **Source:** [How one organization cut AWS costs by 39% in 12 weeks](https://aws.amazon.com/vi/blogs/aws-cloud-financial-management/how-one-organization-cut-aws-costs-by-39-in-12-weeks/)
