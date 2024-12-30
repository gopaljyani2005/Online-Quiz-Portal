"use client";
import student from "@/app/student/page";
import AnswerSheet from "@/components/answerSheet/page";
import { useEffect, useState } from "react";
export default function quiz({params}){
    const[QuizID , setQuizID] = useState("");
    const [studentID,setstudentID] = useState("");
    
    useEffect(()=>{
        async function getsheet(){
            const q_id = await (await params).quiz;
            const response1 = await fetch(`/api/cookiedata/studenttoken`, {
                method: "GET",
                credentials: "same-origin",
              });
              let result = await response1.json();
              const s_id = result.studentID;
              setQuizID(q_id);
              setstudentID(s_id);
        }
        getsheet();
    },[])
    if (!QuizID && !studentID) {
        return <p>Loading...</p>;
      }
    
    return (
        <main> 
            <AnswerSheet QuizID={QuizID} studentID={studentID}/>
        </main>
    )
}