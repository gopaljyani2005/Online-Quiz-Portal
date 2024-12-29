"use client";
import Link from "next/link";
import styles from "../../../style/adminpage.module.css";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react"; 
export default function studentPortal() {
  const router = useRouter();
  function createquiz(){
    router.push(`/student/logIn/portal/todayquiz`);
  }
  function quiz(){
    router.push(`/student/logIn/portal/studentQuiz`);
  }
  
  
  return (
    <main className={styles.adminpage}>
                <div className={styles.btn}>
                <button onClick={createquiz}>Today Quiz</button>
                <button onClick={quiz}>Quizes</button>
            </div>
                
            
        </main>
  );
}
