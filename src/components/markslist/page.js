"use client";
import { useRouter } from "next/navigation";
import styles from "../../app/style/questiontable.module.css";
import Link from "next/link";
export default function MarksList(result) {
    const router = useRouter();
  const results = result.result;
  return (
    <main>
      <h1>Marks List Of Quiz {results[0].QuizTitle}</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>studentID</th>
            <th>studentname</th>
            <th>totlamarks</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.studentUsername}</td>
                <td>{item.studentEmail}</td>
                <td>{item.totalMarks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link href="/teacher/logIn/portal">Dashboard</Link>
    </main>
  );
}
