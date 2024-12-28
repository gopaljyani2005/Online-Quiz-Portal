import db from "@/lib/data";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const data = await request.json();
        const QuizID = data.QuizID;
        const QuestionID = data.QuestionID;
        const studentID = data.studentID;
        const SubmissionID = data.SubmissionID;
        const ResponseOption =  data.ResponseOption;
        const query = `INSERT INTO responsetable (QuizID,QuestionID,studentID,SubmissionID,ResponseOption) VALUES (?, ?, ?, ?, ?)`;
        const [response] = await db.promise().execute(query,[QuizID,QuestionID,studentID,SubmissionID,ResponseOption]);
        return NextResponse.json({message:"Response successfully"},{status:200});
    } catch (error) {
        return NextResponse.json({message:"internal server error! Please try again"},{status:500});
    }
}