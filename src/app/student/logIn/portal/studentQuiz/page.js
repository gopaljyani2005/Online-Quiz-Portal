"use client";
import Link from "next/link";
import styles from "../../../../style/allquiz.module.css";
import { useEffect, useState } from "react";


export default function quiz() {
  const [quiz, setquiz] = useState("");

  useEffect(()=>{
    async function getQuiz() {
        const response = await fetch(`/api/cookiedata/studenttoken`, {
          method: "GET",
          credentials: "same-origin",
        });
        let result = await response.json();
        const studentID = result.studentID;
        let quizResponse = await fetch(`/api/studentAllQuizes/${studentID}`);
        if (quizResponse.status === 200) {
          let quizdata = await quizResponse.json();
          setquiz(quizdata);
        } else {
          alert(
            "Internal server error to get quiz of given teacher please try again"
          );
        }
      }
      getQuiz();
  },[]);
  if (!quiz) {
    return <p>Loading...</p>;
  }
  return (
    <main className={styles.main}>
      <h1>Attempt Quiz</h1>
      <div className={styles.linkContainer}>
          {Object.keys(quiz).map((key) => (
            <Link href={`/student/logIn/portal/studentQuiz/${quiz[key].QuizID}`} key={key}>{quiz[key].QuizTitle}</Link>
          ))}
        </div>
    </main>
  );
}
