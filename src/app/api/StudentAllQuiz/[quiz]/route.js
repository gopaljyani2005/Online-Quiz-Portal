import db from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request) {
  try {
    const studentID = request.url.split("/").at(-1);
    const query1 = 'SELECT * FROM studenttable WHERE studentID = ?';
    const [studentdetail] = await db.promise().execute(query1,[studentID]);
    const domain = studentdetail[0].Department;
    
  //   here is calculation of present time according to indian clock
    const currentTimeUTC = new Date(); // Current time in UTC
    const offset = 5.5 * 60 * 60 * 1000; // Offset for IST (5 hours 30 minutes)
    const currentTime = new Date(currentTimeUTC.getTime() + offset);
  
    const query = `SELECT * FROM quiztable WHERE JSON_CONTAINS(Domains, JSON_ARRAY(?))`;
    const [result] = await db.promise().execute(query, [domain]);
    return NextResponse.json(result,{ status: 200 });
  } catch (error) {
    return NextResponse.json([],{status:404});
  }
}
