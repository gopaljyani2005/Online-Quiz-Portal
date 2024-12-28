import db from "@/lib/data";
import { NextResponse } from "next/server";

export async function GET(request){
    try {
        const QuizID = (request.url.split("/")).at(-1);
        const query = `SELECT * FROM questiontable WHERE QuizID=?`;
        const [result] = await db.promise().execute(query,[QuizID]);
        return NextResponse.json(result,{status:200});
    } catch (error) {
        return NextResponse.json({message:"not found"},{status:404});
    }
}