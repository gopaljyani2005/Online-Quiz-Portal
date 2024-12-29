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
        router.push(`/student/logIn/portal/studentQuiz/${QuizID}/responseSheet`);
    }

    return (
        <main className={styles.admin}>
            <div className={styles.btn}>
            <h1>Quiz DashBoard</h1>
            <button onClick={createquestion}>Cheak Response</button>
            </div>
            </main>
    )
}