import db from "@/lib/data";
import { NextResponse } from "next/server";


export async function POST(request){
    const data = await request.json();
        
    try {
        const TeacherID = data.TeacherID;
        const QuizTitle = data.QuizTitle;
        const Domains = [data.Domains];
        const Marks = data.Marks;
        const query = `INSERT INTO quiztable(TeacherID,QuizTitle,Domains,Marks) VALUES (?, ?, ?, ?)`; 
        const [result] = await db.promise().execute(query,[TeacherID,QuizTitle,Domains,Marks]);
        console.log(result);
        return NextResponse.json({message:"successfully created quiz"},{status:200});
    } catch (error) {
        return NextResponse.json({message:"error "},{status:500});
    }
}