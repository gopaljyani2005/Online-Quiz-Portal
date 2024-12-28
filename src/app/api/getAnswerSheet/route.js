import db from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(request) {
    // get data from url 
  const { searchParams } = new URL(request.url);
  const QuizID = searchParams.get("QuizID");
  const studentID = searchParams.get("studentID");

//   cheak for a student that quiz is attempting or not
  const cheaksubmissionquery = `SELECT * FROM submissiontable WHERE QuizID = ? AND studentID = ?`;
  const [cheakresult] = await db.promise().execute(cheaksubmissionquery, [QuizID, studentID]);

//   return response based on attemping quiz and proof response based on quiz status
  if (cheakresult.length === 0) {
    const query = `SELECT * FROM questiontable WHERE QuizID=?`;
    const [questionpaper] = await db.promise().execute(query, [QuizID]);
    return NextResponse.json(questionpaper, { status: 404 });
  } else if (cheakresult.length && cheakresult[0].Start == 1) {
    const query = `SELECT * FROM questiontable WHERE QuizID=?`;
    const [questionpaper] = await db.promise().execute(query, [QuizID]);
    return NextResponse.json(questionpaper, { status: 201 });
  } else {
    const query3 = `
    SELECT * 
    FROM 
      (SELECT * FROM responsetable WHERE QuizID = ? AND studentID = ?) AS response
    INNER JOIN 
      (SELECT * FROM questiontable WHERE QuizID = ?) AS question
    ON response.QuestionID = question.QuestionID;
    `;

    const [result] = await db.promise().execute(query3, [QuizID, studentID, QuizID]);
    return NextResponse.json(result, { status: 200 });
  }
}
