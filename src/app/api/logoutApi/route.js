import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request){
    try {
        const tokenname = (await request.json()).tokenname;
        const response = NextResponse.json({message:"successfully logged out"},{status:200});
        response.cookies.delete(tokenname);
        return response;
    } catch (error) {
        return NextResponse.json({message:"internal server error"},{status:500});
    }
}