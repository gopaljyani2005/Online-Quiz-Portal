import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');

export async function POST(request) {
    // details regarding the sending email
    const username = process.env.USER_EMAIL;
    const password = process.env.EMAIL_PASSWORD;
    const myEmail = process.env.EMAIL;

    // sending email data
    const formData = await request.json();

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",  
        port: 465,             
        secure: true,   
        auth: {
            user: username,
            pass: password
        },
        tls: {
            rejectUnauthorized: true
        }
    });
        
    try {
        for(let i=0;i<formData.length;i++){
        const QuizTitle = formData[i].QuizTitle;
        const studentUsername = formData[i].studentUsername;
        const totalMarks = formData[i].totalMarks;
        const Email = formData[i].studentEmail;
        console.log(Email);
        const mail = await transporter.sendMail({
            from: username,           
            to: Email,              
            replyTo: Email,    
            subject: `${QuizTitle} Marks`,
            html: `
<html>
  <body>
    <div class="email-container">
      <h1>Quiz Marks Notification</h1>
      <p>Dear ${studentUsername},</p>
      <p>We are pleased to share your marks for the recently conducted quiz. Below are the details:</p>

      <div class="details">
        <p><strong>Quiz Title:</strong> ${QuizTitle}</p>
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
      </div>

      <p>If you have any questions regarding your marks, feel free to reach out to us.</p>

      <div class="footer">
        <p>Best regards,</p>
        <p>Your Academic Team</p>
      </div>
    </div>
  </body>
</html>
    `
        });
    }

        return NextResponse.json({sendotp:"1234"},{status:200});
    }
    catch (error) {
        console.error(error);
        return NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, { status: 500 });
    }
}
