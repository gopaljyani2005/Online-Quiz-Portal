"use client";
import Link from "next/link";
import styles from "../../../style/adminpage.module.css";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react"; 
export default function teacherPortal() {
  const router = useRouter();
  function createquiz(){
    router.push(`/teacher/logIn/portal/createquiz`);
  }
  function funct4(){
    router.push(`/teacher/logIn/portal/quiz`);
  }

  function deleteQuiz(){
    router.push(`/teacher/logIn/portal/deletequiz`);
  }
  
  
  return (
    <main className={styles.adminpage}>
                <div className={styles.btn}>
                <button onClick={createquiz}>Create New Quiz</button>
                <button onClick={funct4}>Quizes</button>
                <button onClick={deleteQuiz}>Delete Quiz</button>
            </div>
                
            
        </main>
  );
}
