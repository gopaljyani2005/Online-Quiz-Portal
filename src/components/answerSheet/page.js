"use client";
import { useEffect, useState } from "react";
import styles from "../../app/style/questiontable.module.css";

export default function AnswerSheet({QuizID,studentID}){
    const [answersheet, setanswersheet] = useState("");

  useEffect(() => {
    async function getquestionanswersheet() {
      const response = await fetch(`/api/getAnswerSheet?QuizID=${QuizID}&studentID=${studentID}`);
      if (!response.ok) {
        console.log("find error");
      }
      const sheet = await response.json()
      setanswersheet(sheet);
    }
    getquestionanswersheet();
  }, []);

  if (!answersheet) {
    return <p>Loading Question Paper...''</p>;
  }

    return (
        <main className={styles.main}>
      <h1 className={styles.heading}>Answer Sheet</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Question</th>
            <th>OptionA</th>
            <th>OptionB</th>
            <th>OptionC</th>
            <th>OptionD</th>
            <th>CorrectOption</th>
            <th>ResponseOption</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {answersheet.map((question, index) => (
            <tr key={index}>
              <td>{question.Question}</td>
              <td>{question.OptionA}</td>
              <td>{question.OptionB}</td>
              <td>{question.OptionC}</td>
              <td>{question.OptionD}</td>
              <td>{question.CorrectOption}</td>
              <td>{question.ResponseOption}</td>
              <td>{question.Marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
    )
}