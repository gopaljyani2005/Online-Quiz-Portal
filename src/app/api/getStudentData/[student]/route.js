import db from "@/lib/data";
import { NextResponse } from "next/server";

export async function  GET(request){
    try {
        let Username = request.url.split("/").at(-1);
        Username = decodeURIComponent(Username);
        console.log(Username);
        const query = `SELECT * FROM studenttable WHERE Username = ?`;
        const [data] = await db.promise().execute(query,[Username]);
        return NextResponse.json(data[0],{status:200});
    } catch (error) {
        return NextResponse.json({message:"Incorrect Username"},{status:404});
    }
    
}