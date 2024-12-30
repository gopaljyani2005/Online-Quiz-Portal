import db from "@/lib/data";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const data = await request.json();
  if (data.update === "student") {
    try {
      const Username = data.Username;
      const Password = data.Password;
      const query = `UPDATE studenttable SET Password = ? WHERE Username = ?`;
      const [result] = await db.promise().execute(query, [Password, Username]);
      return NextResponse.json(
        { message: "successfully updated password" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: "Error in  update password" },
        { status: 500 }
      );
    }
  } else {
    try {
      const Username = data.Username;
      const Password = data.Password;
      const query = `UPDATE teachertable SET Password = ? WHERE Username = ?`;
      const [result] = await db.promise().execute(query, [Password, Username]);
      return NextResponse.json(
        { message: "successfully updated password" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: "Error in  update password" },
        { status: 500 }
      );
    }
  }
}
