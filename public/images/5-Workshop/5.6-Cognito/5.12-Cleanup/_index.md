---
title: "Decommissioning Resources"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 5.12. </b> "
---


### Decommissioning & Cleaning Up Cloud Resources

Upon completing this hands-on workshop series, you should clean up all provisioned cloud resources in your AWS account. This prevents any unexpected charges from active background services.

Follow the detailed decommissioning steps below according to the administration console:

---

### Step 1: Clean Up Amazon Route 53
1. Navigate to the **Route 53 Console** and click **Hosted zones** in the left menu to view your managed domain list.

   ![Route 53 Hosted Zones](/images/5-Workshop/5.12-Clienup/Route53-HostedZones.png)

2. Select the hosted zone and click **Delete zone**. Note: You must delete all custom DNS records (such as CNAME or A records mapping to the web application) first before the console permits the zone deletion.

   ![Delete Hosted Zones](/images/5-Workshop/5.12-Clienup/Route53-DeleteHostedZones.png)

---

### Step 2: Remove AWS Amplify App
1. Navigate to the **AWS Amplify Console** to view all active frontend applications on your account.

   ![AWS Amplify Dashboard](/images/5-Workshop/5.12-Clienup/AWS-Amplify.png)

2. Click on your frontend application, and in the left sidebar navigation, select **App settings** -> **General** (or click on the app settings configuration directly).

   ![AWS Amplify App details](/images/5-Workshop/5.12-Clienup/AWS-Amplify-App.png)

3. Scroll to the bottom of the General settings page, locate the critical actions section, and click the red **Delete app** button.

   ![AWS Amplify App Settings Delete](/images/5-Workshop/5.12-Clienup/AWS-Amplify-Appsetting-delete.png)

4. A confirmation dialog will appear. Type `delete` in the text field to confirm permanent removal of the app and all associated build files.

---

### Step 3: Delete CloudFront Distributions
1. Navigate to the **CloudFront Console**, and in the **Distributions** list view, select the CDN distribution you set up for edge acceleration or firewall protection.
2. Click **Disable** to deactivate the distribution first. Once the status shows disabled, select it and click **Delete**.

   ![CloudFront Distributions](/images/5-Workshop/5.12-Clienup/CloudFront-Distributions.png)

---

### Step 4: Delete Amazon API Gateway
1. Open the **API Gateway Console** to manage your list of endpoints.

   ![API Gateway APIs](/images/5-Workshop/5.12-Clienup/APIGateway-APIs.png)

2. Select the API `AI-Riddle-API`, click on its options or navigate to the detailed Resources screen, and click **Delete** to clean up the backend-frontend gateway.

   ![Delete API Gateway Resources](/images/5-Workshop/5.12-Clienup/APIGateway-APIs-Resources.png)

---

### Step 5: Delete Amazon Cognito User Pool
1. Navigate to the **Cognito Console** and click **User pools** to check your user identities lists.

   ![Cognito Pools](/images/5-Workshop/5.12-Clienup/Cognito.png)

2. Select the User Pool configured as the API Gateway Authorizer, verify the pool details, and click **Delete** to purge the identity database.

   ![Delete Cognito User Pool](/images/5-Workshop/5.12-Clienup/Cognito-Userpool.png)

---

### Step 6: Delete AWS Lambda Functions
1. Open the **AWS Lambda Console** and select **Functions**.
2. Select the primary business logic Lambda function `Create-Riddle`, open the **Actions** menu, and select **Delete** to decommission the serverless compute resource.

   ![Delete Lambda function](/images/5-Workshop/5.12-Clienup/Lambda-Delete.png)

---

### Step 7: Clean Up Other Resources (S3, DynamoDB, CloudWatch, SNS, IAM)
To ensure your AWS account is fully clean and does not incur any residual costs, complete the following manual steps:
1. **Amazon DynamoDB**: Open the **DynamoDB Console** -> **Tables** -> Select the `AiRiddleGenerator_Core` table and click **Delete table**.
2. **Amazon S3**: Open the **S3 Console** -> Select the `ai-riddle-storage` bucket, click **Empty** to clear all exports and static contents, then click **Delete** to remove the bucket permanently.
3. **CloudWatch Dashboard & Alarms**: Access the **CloudWatch Console**, delete the custom monitoring Dashboard you created, and delete any Lambda error alarms in the **Alarms** -> **All alarms** section.
4. **Amazon SNS**: Open the **SNS Console** -> **Topics** -> Select the alert topic and click **Delete**.
5. **AWS IAM**: Open the **IAM Console** -> **Roles** to delete the Lambda execution roles and any associated custom policies.

