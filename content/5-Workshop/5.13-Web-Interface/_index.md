---
title: "Web Interface Testing & Product Report"
date: 2024-01-01
weight: 13
chapter: false
pre: " <b> 5.13. </b> "
---

### Web Interface Testing & Product Report for AI Riddle Generator

After completing the configuration of the entire backend Serverless infrastructure on AWS (including DynamoDB, S3, Lambda, API Gateway, Cognito, and Amplify), the final step is to access and evaluate the complete frontend web application.

The web application is designed as a **Single-Page Application (SPA)** built on **React 19** and compiled using the ultra-fast build tool **Vite 8**. The user interface implements a modern **Glassmorphism** styling theme, with fluid transition animations and a fully responsive layout optimized across devices.

---

### 1. Functional Subsystems of the Web Interface

The web application's dashboard is split into core functional modules mapped to the main navigation menu items:

> [!IMPORTANT]
> **Implementation Status on the Interface:**
> *   **Live Feature (Live AWS Backend Connection):** The **Create Riddle Module (Generator Hub)** is fully connected to the live AWS backend (API Gateway -> Lambda -> Amazon Bedrock Claude 3.5 Sonnet) to generate riddles in real-time based on the user's keywords.
> *   **Simulated Features (Mock / Local Client-side Simulation):** The **Cognito Authentication**, **Personal Library**, and **Community Board** modules currently operate using mock data and local state logic to demonstrate the complete End-to-End (E2E) user journey, prepared for future direct integration with actual cloud APIs.

#### 1.1. Create Riddle Module (Generator Hub) [Live Backend Connection]
Where users (Teachers, Parents) interact directly with the Generative Artificial Intelligence (AI) model:
*   **Configuration Filters:**
    *   *Age Group:* Classified by education level (Cấp 1, Cấp 2, Cấp 3) to allow the LLM to adjust vocabulary complexity and riddle difficulty suitable for children's cognitive abilities.
    *   *Riddle Genre:* Supports keyword letter-matching (Acrostic) or logical thinking riddles (History-Literature, Science-Mathematics).
    *   *Topic:* Geography, Science, History, Animals, Plants, etc.
*   **Live Riddle Generation Flow:** The user inputs a "Keyword". Clicking the generate button sends the payload to API Gateway, which triggers Lambda and Bedrock to render the riddle body, hints (Hint 1, Hint 2), and the Answer hidden under collapsible tabs.
*   **Storage Integration:** The **"Save to Library"** button simulates saving the riddle by writing it to local storage (`localStorage`) so that it displays in the Personal Library module.

![Create Riddle Interface](/images/5-Workshop/5.13-Web-Interface/homepage_logged_in.png)

#### 1.2. Community Board Module [Simulated - Mock Data]
A public feed displaying sample riddles shared by all active members:
*   **Featured Sorting:** Simulates sorting public riddles by vote count in descending order to demonstrate the planned **GSI1 (Global Secondary Index)** query architecture in DynamoDB.
*   **Upvoting System:** A simulated mechanism updates vote counts in real-time in the browser using React local state, simulating the business rule that limits upvoting to once per user.
*   **Quick Copy:** Allows users to easily copy public community riddles into their local simulated libraries.

![Community Board Interface](/images/5-Workshop/5.13-Web-Interface/riddle_community.png)

#### 1.3. Personal Library Module (My Library) [Simulated - Mock Data]
A private storage vault dedicated to the currently logged-in account:
*   **Query Listing:** Retrieves data from localStorage and static lists to render the user's saved riddles, illustrating the planned DynamoDB query patterns utilizing Partition Key `USER#<UserId>` and Sort Key prefix `RIDDLE#`.
*   **Document Exports:** The print button invokes a mock print preview of the formatted riddle worksheet, ready for classroom printing and physical distribution.

![Personal Library Interface](/images/5-Workshop/5.13-Web-Interface/riddle_my_library.png)

#### 1.4. Cognito Authentication Module [Simulated - Mock Data]
User registry, login, and access control portal:
*   **Role Selection:** Simulates assigning **Teacher** or **Parent** roles to demonstrate how IAM policies will be mapped in the future.
*   **Quick Login Simulator:** Provides quick login buttons for mock profiles (Teacher Nguyễn Thị Mai, Parent Trần Văn Thu) so users can test permission-dependent UI layouts instantly.

![Cognito Login Interface](/images/5-Workshop/5.13-Web-Interface/homepage_logged_out.png)

---

### 2. Live Application Testing Scenarios (Step-by-Step E2E User Journey)

Below is the chronological, step-by-step user journey executed on the live frontend application during verification:

#### 2.1. Step 1: Startup & Authentication Flow (AWS Cognito - Simulated)
1. **Access Login Interface:** The user navigates to the landing page and clicks the **Đăng nhập** (Login) button in the upper-right corner. The system redirects to the mock Cognito login gateway.
   ![Cognito Login Page](/images/5-Workshop/5.13-Web-Interface/test_login_page.png)
2. **Quick Login Authentication:** We selected the mock teacher account profile `"Cô Nguyễn Thị Mai"` for rapid verification.
3. **Login Redirection:** Upon validation (1s delay), the client receives the simulated JWT session token, redirects back to the generator page, and dynamically renders the profile badge in the header.
   ![Login Success](/images/5-Workshop/5.13-Web-Interface/test_login_success.png)

#### 2.2. Step 2: GenAI Riddle Generation (AI Riddle Creation - Live API Gateway/Lambda/Bedrock)
1. **Configure Parameters:** On the **Create Riddle** tab, we selected the topic "Geography", target age group "Cấp 1" (Elementary), and input the answer keyword `"Trái Đất"` (Earth).
   ![Keyword Input](/images/5-Workshop/5.13-Web-Interface/test_create_riddle_input.png)
2. **Invoke GenAI Action:** Clicked **⚡ Tạo Câu Đố Với AI**. The request propagates through API Gateway to the AWS Lambda backend to trigger Amazon Bedrock (Claude 3.5 Sonnet).
3. **Render Initial Output:** The generated Acrostic riddle is displayed in a glassmorphic card with hints and the answer collapsed by default.
   ![Riddle Generated](/images/5-Workshop/5.13-Web-Interface/test_create_riddle_result.png)
4. **Reveal General Clue:** Clicking the **💡 Gợi ý bước 1 (Khái quát)** tab reveals the first general hint.
   ![Hint 1 Revealed](/images/5-Workshop/5.13-Web-Interface/test_create_riddle_hint.png)
5. **Reveal Final Answer:** Clicking **🏆 XEM ĐÁP ÁN CUỐI CÙNG** expands the answer badge to reveal the target keyword `"Trái Đất"`.
   ![Answer Uncovered](/images/5-Workshop/5.13-Web-Interface/test_create_riddle_answer.png)
6. **Save to local Library:** Clicking **Lưu Vào Thư Viện** writes the riddle record to localStorage. The button state updates to `⭐ Đã Lưu Vào Thư Viện`.
   ![Riddle Saved](/images/5-Workshop/5.13-Web-Interface/test_create_riddle_saved.png)

#### 2.3. Step 3: Community Interactivity & Solving (Community Tab - Simulated)
Navigating to the **Community** feed containing public riddle contributions:
1. **Correct Solving Guess:**
   * Locate the featured riddle card for `"Bánh Chưng"`.
   * Input the answer guess `"Bánh Chưng"` in the solver text field and click **Đoán** (Guess).
   * The UI displays a green success confirmation block: `🎉 Chính xác! Đáp án đúng là: Bánh Chưng`.
   ![Guess Correct](/images/5-Workshop/5.13-Web-Interface/test_community_guess_correct.png)
   * Input an incorrect value such as `"Bánh dày"` in a card's guess box and click **Đoán**.
   * The UI displays a red warning label: `❌ Chưa đúng rồi, thử lại nhé!`.
   ![Guess Incorrect](/images/5-Workshop/5.13-Web-Interface/test_community_guess_incorrect.png)
2. **Cast Upvotes:** Click the 👍 (Upvote) button on the Bánh Chưng card. The upvotes count increases from 56 to 57 using real-time local React state updates.
   ![Upvote Successful](/images/5-Workshop/5.13-Web-Interface/test_community_upvote.png)

#### 2.4. Step 4: Library Listing & PDF Export (Personal Library & PDF - Simulated)
1. **Query Personal List:** Navigating to **Thư Viện Của Tôi** fetches riddles saved in local storage, including the newly saved `"Trái Đất"` riddle.
   ![Personal Riddle Library](/images/5-Workshop/5.13-Web-Interface/test_library_list.png)
2. **S3 Document Distribution:**
   * Click **🖨️ Xuất PDF / In câu đố** on the `"Trái Đất"` riddle card.
   * The system triggers a formatted print-preview dialog so teachers can print or save the worksheet layout.
   ![PDF Export Preview](/images/5-Workshop/5.13-Web-Interface/test_library_export.png)
   ![PDF Export Preview](/images/5-Workshop/5.13-Web-Interface/test_library_export_PDF.png)

#### 2.5. Dark Theme Presentation
The application supports a custom Dark Mode styling utilizing CSS custom variables to minimize eye strain.
![Dark Mode View](/images/5-Workshop/5.13-Web-Interface/riddle_dark_mode.png)

---

### 3. Future Development

While the project completes the core requirements of this Workshop (live GenAI riddle generation), the following roadmap features are planned for future development to connect actual cloud databases:

*   **Production Cognito Authentication:** Replace the simulated login flow with the `@aws-amplify/auth` library or the official `amazon-cognito-identity-js` SDK to handle authentic Cognito User Pool sessions and JWT validation.
*   **Live API Gateway & DynamoDB Integration for Library & Community:** Write backend Lambda functions handling database writes and list retrievals from a live DynamoDB table, replacing the client localStorage engine with real API Gateway calls.
*   **Live S3 Document Export:** Integrate an S3 Lambda export function generating and storing PDF files on S3, providing short-lived S3 Presigned URLs for client downloads.
*   **Student Gamification:** Develop an interactive solver dashboard for children, integrating a score system, countdown timers, and live leaderboards to make educational riddle solving highly engaging.

---

### 4. Concluding Product Evaluation

*   **Architectural Consistency (End-to-End Serverless):** The frontend interfaces smoothly with simulated Single-Table Design queries in DynamoDB, Cognito security claims, and S3 assets, mirroring the cloud configuration logic accurately.
*   **UX/UI Quality:** The Glassmorphism design is clean, interactive, and tailored to educators and parents. Navigation transitions are near-instantaneous due to the SPA setup.
*   **Scalability:** The React codebase is modularly organized, making it easy to add features like interactive puzzle games or student gradebooks in the future.
