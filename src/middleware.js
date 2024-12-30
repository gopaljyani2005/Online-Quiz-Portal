import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export default async function middleware(request){
  const url = request.nextUrl;
  const path = url.pathname;
  if(!path.startsWith('/student/logIn/forgotpassword/') && path.startsWith('/student/logIn/')){
    const cookie = await cookies();
    const studenttoken = cookie.get('studenttoken');
    if(!studenttoken){
      return NextResponse.redirect(new URL('/student/logIn', request.url));
    }
  }

  if(!path.startsWith('/teacher/logIn/forgotpassword/') && path.startsWith('/teacher/logIn/')){
    const cookie = await cookies();
    const teachertoken = cookie.get('teachertoken');
    if(!teachertoken){
      return NextResponse.redirect(new URL('/teacher/logIn', request.url));
    }
  }
}