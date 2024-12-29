"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../../../../../style/adminpage.module.css";


export default function quiz({params}){
    const router = useRouter();
    const [QuizID,setQuizID] = useState("");
    useEffect(()=>{
        const getquizID =async()=>{
            const id =await (await params).quiz;
            console.log(id);
            setQuizID(id);    
        }
        getquizID();
    },[]);
    if(!QuizID){
        return <p>Loading.....</p>
    }

    async function createquestion(){
        router.push(`/teacher/logIn/portal/quiz/${QuizID}/createquestion`);
    }

    async function cheakquiz(){
        router.push(`/teacher/logIn/portal/quiz/${QuizID}/cheakquiz`);
    }

    return (
        <main className={styles.admin}>
            <div className={styles.btn}>
            <h1>Quiz DashBoard</h1>
            <button onClick={createquestion}>create queston</button>
            <button onClick={cheakquiz}>cheak</button>
            </div>
            </main>
    )
}