import { verifyToken } from "@/utils/token/token";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request){
    try {
        const arr = request.url.split("/");
        const tokenname = arr[arr.length-1];
        const cookie = await cookies();
        const token = cookie.get(tokenname);
        const userdata = await verifyToken(token.value);
        return NextResponse.json(userdata.payload,{status:200});
    } catch (error) {
        alert("error to find data from token");
        return NextResponse.json({error:"token not found"},{status:404});
    }
}