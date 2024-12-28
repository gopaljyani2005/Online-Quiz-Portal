import db from "@/lib/data";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const data = await request.json();
        const QuizID = data.QuizID;
        const studentID = data.studentID;
        const Start =  data.Start;
        const query = `INSERT INTO submissiontable (QuizID,studentID,Start) VALUES (?, ?, ?)`;
        const [response] = await db.promise().execute(query,[QuizID,studentID,Start]);
        console.log("here is ",response);
        return NextResponse.json({SubmissionID:response.insertId},{status:200});
    } catch (error) {
        if(error.code === 'ER_DUP_ENTRY'){
            return NextResponse.json({message:"Duplicate entry"},{status:409})
        }
        else{
            return NextResponse.json({message:"internal server error! Please try again"},{status:500});
        }
    }
}