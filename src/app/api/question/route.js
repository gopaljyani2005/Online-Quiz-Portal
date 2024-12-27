import db from "@/lib/data";
import { NextResponse } from "next/server";


export async function POST(request){
    try {
        const data = await request.json();
        const QuizID = data.QuizID;
        const Question = data.Question;
        const OptionA = data.OptionA;
        const OptionB = data.OptionB;
        const OptionC = data.OptionC;
        const OptionD = data.OptionD;
        const CorrectOption = data.CorrectOption;
        const Marks = data.Marks;
        const query = `INSERT INTO questiontable (QuizID,Question,OptionA,OptionB,OptionC,OptionD,CorrectOption,Marks) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        const [result] = await db.promise().execute(query,[QuizID,Question,OptionA,OptionB,OptionC,OptionD,CorrectOption,Marks]);
        console.log(result);
        return NextResponse.json({message:"Question is Created successfully"},{status:200});
    } catch (error) {
        return NextResponse.json({message:"error"},{status:500});
    }
}