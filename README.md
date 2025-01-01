<div align="center">
  <h2> 🌟 Online Quiz Portal  🌟</h2>
</div>

## A Web-Based **Online Quiz Portal** for **Teachers** and **Students**

<p align="center">
  <img src="https://github.com/gopaljyani2005/Online-Quiz-Portal/blob/main/public/image/quiz_portal.png" alt="project-image" style="border: 2px solid #0078D7; border-radius: 10px;">
</p>

---


# 🌟 Website Features

## 🛠️ Admin Features  
Admins have the following functionalities to manage quizzes:  
- ✏️ **Create new quizzes** by setting titles, timing, and student domain restrictions.  
- 🧩 **Add questions** to quizzes and organize them efficiently.  
- 🔍 **Review quizzes**, check student responses, and assign marks.  
- 📧 **Send email notifications** to students about quiz details and their marks.  
- 🔄 **Update or delete quizzes** as needed.  



## 🎓 Student Features  
Students can:  
- 🔑 **Log in** to the system to view and attempt quizzes assigned to them.  
- 📝 **Submit responses** securely for evaluation.  
- 📜 **Access the answer sheet** and question paper after submission.  
- ⭐ **View their marks** once the teacher checks their quiz.  



## 🔒 Security Features  
Ensuring the integrity and fairness of quizzes:  
- ✅ **Authentication** required for both admin and student login.  
- 🎯 **One-time quiz attempts** from a single device only.  
- 🚫 **Protected quizzes** to prevent multiple logins or unauthorized access.  

---

### 💻 **Tech Stack**

- 🌐 **Frontend**: HTML, CSS, JavaScript, Next.js,
- ⚙️ **Backend**: Next.js, SQL ,MySQL
- 🚀 **Deployment**: Vercel, AWS

---





### ⚡ **Installation**

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/gopaljyani2005/Online-Quiz-Portal.git
    cd Online-Quiz-Portal
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
    Create a `.env.local` file:
    ```bash
    DB_HOST=localhost
    DB_USER = root
    DB_PASSWORD=xxxxxxxx
    DB_NAME=dbname
    
    JWT_SECRET_KEY=XXXXXXXX
    
    USER_EMAIL=123@gmail.com
    EMAIL_PASSWORD=app password
    ```

4. **Run the Project Locally**:
    ```bash
    npm run dev
    ```

---

### 📂 **Routes to Implement**

| **METHOD** | **ROUTE**                  | **FUNCTIONALITY**                               | **ACCESS**               |
|------------|-------------------------------|----------------------------------------------|--------------------------|
| POST       | `/api/teacherSigin/`          | Create a new account of teacher              | Teacher            |
| POST       | `/api/studentSigin/`          | Create a new account of student              | Student            |
| POST       | `/api/teacherLogin/`          | Create a new account of teacher              | Teacher            |
| POST       | `/api/studentLogin/`          | Create a new account of student              | Student            |
| POST       | `/api/addquiz/`               | create a new quiz                            | Teacher            |
| POST       | `/api/question/`              | create a new question inside quiz            | Teacher            |
| GET        | `/api/cookiedata/`            | Get cookie data from backend                 | Teacher and Studnet|         
| GET        | `/api/quizSubmission/`        | cheak submission of quiz                     | Student            |      
| POST       | `/api/submitResponse/`        | submit today quiz response                   | Student            |   
| POST       | `/api/submitResponse/`        | submit today quiz response                   | Student            |   
| GET        | `/api/cheakQuiz/[quiz]`       |  cheak quiz and get all student marks        | Teacher            |   
| GET        | `/api/cheakQuiz/[quiz]`       |  cheak quiz and get all student marks        | Teacher            |   
| POST       | `/api/sendEmail/`             |  After checking quiz send marks by mail      | Teacher            |   
| GET        | `/api/getAnswerSheet/`        |  After checking quiz get response sheet      | Student            |   
| POST       | `/api/logoutApi/`             |  Loggout User and Teacher both               | Teacher and Student|   
| DELETE     | `/api/addquiz[quiz]/`         |  Delete Quiz Data                            | Teacher            |   
| PUT        | `/api/passwordUpdate/`        |  Update password api                         | Teacher and student|   
| POST       | `/api/sendOtp/`               |  Otp verification api                        | Teacher and student|   




---

<div align="center">
  <h2>MYSQL DATABASE</h2>
  <img src="https://github.com/gopaljyani2005/Online-Quiz-Portal/blob/main/public/image/erd.png" 
       alt="Admin Login Screenshot" 
       width="1000" 
       height="500" 
       style="border: 2px solid #32CD32; border-radius: 10px;">
</div>


---



###  🤝Contribution
1. **Fork the Repository**  
   Click the "Fork" button at the top right of this repository to create a copy in your GitHub account.

2. **Clone Fork**  
   ```bash
   https://github.com/gopaljyani2005/Online-Quiz-Portal.git
   ```
 3. **Create a Branch**  
   Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```   
 4. **Make Changes**  
   Implement your feature, fix the bug, or improve the documentation. Once you're done, stage and commit your changes:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

5. **Push Your Changes**
```bash
git push origin feature-name
```

 ----  

### 📧 **Contact Information**

If you have any questions or need further assistance, feel free to reach out:

- **Email**: [jyanigopalaram@gmail.com](mailto:jyanigopalaram@gmail.com)
- **LinkedIn**: [Gopala Ram Jyani](https://www.linkedin.com/in/gopala-ram-jyani-1734b4274/)
- **GitHub**: [Gopaljyani2005](https://github.com/gopaljyani2005/)

---

