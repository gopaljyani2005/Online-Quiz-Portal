import db from "@/lib/data";
import { generateToken } from "@/utils/token/token";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const data = await request.json();
        const Username = data.Username;
        const Password = data.Password;
        const query = `SELECT * FROM teacherTable WHERE Username=? AND Password=?`;
        const [result] =  await db.promise().execute(query,[Username,Password]);
        if(result.length === 0){
            return NextResponse.json({message:"User is not found! Please enter correct username and password"},{status:404});
        }
        else{
            const userdata = result[0];
            const token = generateToken(userdata);
            const response = NextResponse.json({message:"successfully login"},{status:200});
            response.cookies.set("teachertoken",token, {
            path: "/", 
            httpOnly: true, 
            secure: process.env.NODE_ENV === "production",
            expires:new Date(Date.now() + 60*60*1000),
           });
           return response;
        }
    } catch (error) {
        return NextResponse.json({message:"internal server error"},{status:500});
    }
}