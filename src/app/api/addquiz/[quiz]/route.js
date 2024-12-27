import db from "@/lib/data";
import { NextResponse } from "next/server";

// return all the quiz of required teachers
export async function GET(request){
    try {
        const TeacherID = (request.url.split("/")).at(-1);
        const query = `SELECT * FROM quiztable WHERE TeacherID = ?`;
        const [result] = await db.promise().execute(query,[TeacherID]);
        return NextResponse.json(result,{status:200});
    } catch (error) {
        return NextResponse.json({message:"failed to get data"},{status:500});
    }
}