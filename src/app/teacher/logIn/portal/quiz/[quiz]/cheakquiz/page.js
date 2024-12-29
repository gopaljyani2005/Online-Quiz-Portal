"use client";

import styles from "../../../../../../style/adminpage.module.css";
import MarksList from "@/components/markslist/page";
import { useState } from "react";

export default function quiz({params}){
    const [results,setresults] = useState("");
    const[section ,setsection] = useState(false);
    async function cheakquiz(){
        const QuizID = await (await params).quiz;
        const response = await fetch(`/api/cheakQuiz/${QuizID}`);
        const  result = await response.json();
        setresults(result);
        setsection(true);
    }
    async function sendemail(){
        const response = await fetch(`/api/sendEmail`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(results)
        })
    }
    return (
        <main className={styles.admin}>
            <div className={styles.btn}>
            <h1>Quiz Portal</h1>
            <button onClick={cheakquiz}>cheak quiz</button>
            <button onClick={sendemail}>sendEmail</button>
            </div>
            {
                section &&(
                    <MarksList result = {results}/>
                )
            }
        </main>
    )
}