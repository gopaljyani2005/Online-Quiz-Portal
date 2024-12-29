import student from "@/app/student/page";
import db from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(request) {
  // get quiz id
  const QuizID = request.url.split("/").at(-1);
  
  // get quiz title from quiz table
  const query = `SELECT QuizTitle FROM quiztable WHERE QuizID = ?`;
  const [titleresponse] = await db.promise().execute(query,[QuizID]);
  const QuizTitle = titleresponse[0].QuizTitle;
  
  // get the all students that attempting the quiz
  const query1 = `SELECT studentID FROM submissiontable WHERE QuizID = ?`;
  const [students] = await db.promise().execute(query1, [QuizID]);
  const studentIDs = students.map((student) => student.studentID);

  // get all students details
  const studentDetails = [];
  for (let i = 0; i < studentIDs.length; i++) {
    let studentID = studentIDs[i];
    // get detail of student name and emai
    const query2 = `SELECT Username,Email from studenttable WHERE studentID = ?`;
    const [studentrow] = await db.promise().execute(query2,[studentID]);
    const query3 = `
    SELECT * 
    FROM 
      (SELECT * FROM responsetable WHERE QuizID = ? AND studentID = ?) AS response
    INNER JOIN 
      (SELECT * FROM questiontable WHERE QuizID = ?) AS question
    ON response.QuestionID = question.QuestionID;
    `;
    
    const [result] = await db.promise().execute(query3, [QuizID, studentID, QuizID]);
    let totalMarks = 0;
    for (let j = 0; j < result.length; j++) {
      if (result[j].CorrectOption === result[j].ResponseOption) {
        totalMarks += result[j].Marks;
      }
    }
    studentDetails.push({
      studentID: studentID,
      studentUsername:studentrow[0].Username,
      studentEmail:studentrow[0].Email,
      QuizTitle:QuizTitle,
      totalMarks: totalMarks,
    });

    // Marks that student copies is cheaked;
    const Start = 0;
    const query4 = `UPDATE submissiontable SET Start = ? , TotalMarks = ? WHERE studentID = ? AND QuizID =  ?`;
    const [cheakresponse] = await db.promise().execute(query4,[Start,totalMarks,studentID,QuizID]); 

  }
  return NextResponse.json(studentDetails, { status: 200 });
}





