---
title : "Configure Amazon Cognito as Authorizer"
date : 2024-01-01 
weight : 6 
chapter : false
pre : " <b> 5.6. </b> "
---

# Configure Amazon Cognito as Authorizer

#### Securing API Endpoints with Amazon Cognito
To protect the backend API resources of the **AI Riddle Generator** from unauthorized access, we will integrate **Amazon Cognito** identity service. By defining a Cognito User Pool as an Authorizer on API Gateway, only authenticated users who submit a valid JWT Token can successfully trigger the backend business processes.

---

### Step-by-Step Configuration

#### Part A: Initialize Cognito User Pool

1. Search for **Amazon Cognito** in the AWS Console, click **User pools** in the left menu, and click **Create user pool**.

   ![create-userpool](/images/5-Workshop/5.6-Cognito/create-cognito.png)

2. Configure application client details:
   - **Application type**: Choose **Single-Page Application (SPA)**.
   - **App client name**: Enter a client identifier.
   - Select sign-in method: **Email**.

   ![select-spa](/images/5-Workshop/5.6-Cognito/chon-spa-and-name.png)

3. Configure signup options and attributes:
   - Check **Enable self-registration** to allow users to sign up themselves.
   - Under required attributes, check the **name** attribute.
   - Click next and finalize creating the User Pool.

   ![configure-options](/images/5-Workshop/5.6-Cognito/configure-option.png)

4. Cognito User Pool created successfully. Copy the generated **User Pool ID** and **Client ID** to configure inside your frontend application code (React/Vue).

   ![cognito-created](/images/5-Workshop/5.6-Cognito/thanh-cong-cognito.png)

---

#### Part B: Set up Authorizer on API Gateway

1. Return to the **API Gateway** dashboard and select the `AI-Riddle-API`. Click **Authorizers** in the left menu, and click **Create authorizer**.

   ![create-authorizer](/images/5-Workshop/5.6-Cognito/Create-authorizes.png)

2. Configure Authorizer parameters:
   - **Authorizer name**: Enter a name (e.g. `Cognito-Auth`).
   - **Type**: Select **Cognito**.
   - **Cognito user pool**: Choose the region and select the user pool created in Part A.
   - **Token source**: Enter `Authorization` (this represents the client request HTTP header containing the JWT token).
   - Click **Create authorizer**.

   ![authorizer-details](/images/5-Workshop/5.6-Cognito/chi-tiet-aut.png)

3. Authorizer created successfully.

   ![authorizer-created](/images/5-Workshop/5.6-Cognito/thanh-cong-auth-api.png)

---

#### Part C: Enable Cognito Auth on API Methods

1. Click **Resources** in the left menu. Select the method you wish to secure (e.g. `POST` under `/Create-Riddle`). In the method dashboard, click **Method request** and select **Edit**.

   ![select-method-auth](/images/5-Workshop/5.6-Cognito/chon-auth-cho-api.png)

2. Under the **Authorization** drop-down, change the value from `NONE` to your Cognito authorizer name (e.g., `Cognito-Auth`), and click **Save**.

   ![save-method-auth](/images/5-Workshop/5.6-Cognito/cai-cognito-vao-api.png)

3. Cognito authorization is now successfully linked to the method request.

   ![auth-linked](/images/5-Workshop/5.6-Cognito/thanh-cong-gan-auth-vao-lenh-api.png)

4. Click **Deploy API** and choose your stage `dev` to apply the updates.

Your API Gateway endpoints now require a valid HTTP header `Authorization` containing the Cognito User Pool ID token!
