import db from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(request) {
  // get quiz id
  const QuizID = request.url.split("/").at(-1);

  // get the all students that attempting the quiz
  const query1 = `SELECT studentID FROM submissiontable WHERE QuizID = ?`;
  const [students] = await db.promise().execute(query1, [QuizID]);
  const studentIDs = students.map((student) => student.studentID);

  // get all students details
  const studentDetails = [];
  for (let i = 0; i < studentIDs.length; i++) {
    let studentID = studentIDs[i];
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
      totalMarks: totalMarks,
    });
  }
  return NextResponse.json(studentDetails, { status: 200 });
}
