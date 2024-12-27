import db from "@/lib/data";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  const Username = data.Username;
  const Password = data.Password;
  const Email = data.Email;
  const Department = data.Department;
  try {
    const query =
      "INSERT INTO studenttable (Username, Password, Email,Department) VALUES (?, ?, ?, ?)";
    const [result] = await db.promise().execute(query, [Username, Password, Email,Department]);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    if (error.errno === 1062) {
      const username_duplicate = error.message.includes(
        Username ? Username : Password
      );
      if (username_duplicate) {
        return NextResponse.json(
          { message: "Username already exists" },
          { status: 500 }
        );
      } else {
        return NextResponse.json(
          { message: "Email already exists" },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { message: "Internal Server Error! Please trye again" },
        { status: 500 }
      );
    }
  }
}
