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
  function funct2(){
    console.log("inside the function 2");
  }
  function createquestion(){
    router.push(`/teacher/logIn/portal/createquestion`);
  }
  function funct4(){
    console.log("inside the function 4");
  }
  
  
  return (
    <main className={styles.adminpage}>
                <div className={styles.btn}>
                <button onClick={createquiz}>Create New Quiz</button>
                <button onClick={funct2}>update</button>
                <button onClick={createquestion}>Create New Question</button>
                <button onClick={funct4}>delete</button>
            </div>
                
            
        </main>
  );
}
