"use client";
import { useEffect, useState } from "react";
import styles from "../../app/style/questiontable.module.css";
export default function GetQuestionPaper({ QuizID }) {
  const [questionPaper, setquestionPaper] = useState("");

  useEffect(() => {
    async function getquestionPaper() {
      const response = await fetch(`/api/question/${QuizID}`);
      if (!response.ok) {
        console.log("find error");
      }
      setquestionPaper(await response.json());
    }
    getquestionPaper();
  }, []);

  if (!questionPaper) {
    return <p>Loading Question Paper...''</p>;
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Question Paper</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>QuestionID</th>
            <th>QuizID</th>
            <th>Question</th>
            <th>OptionA</th>
            <th>OptionB</th>
            <th>OptionC</th>
            <th>OptionD</th>
            <th>CorrectOption</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {questionPaper.map((question, index) => (
            <tr key={index}>
              <td>{question.QuestionID}</td>
              <td>{question.QuizID}</td>
              <td>{question.Question}</td>
              <td>{question.OptionA}</td>
              <td>{question.OptionB}</td>
              <td>{question.OptionC}</td>
              <td>{question.OptionD}</td>
              <td>{question.CorrectOption}</td>
              <td>{question.Marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
