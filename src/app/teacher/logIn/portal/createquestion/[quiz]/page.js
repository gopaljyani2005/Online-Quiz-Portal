"use client";

import Createquestion from "@/components/createquestion/page";
import GetQuestionPaper from "@/components/questionpaper/page";
import { useEffect, useState } from "react";
export default function quiz({params}){
    const [QuizID ,setQuizID] = useState("");
    
    useEffect(()=>{
        async function getid(){
            const id = await (await params).quiz;
            setQuizID(id);
        }
        getid();
    },[])
    if (!QuizID) {
        return <p>Loading...</p>;
      }
    
    return (
        <main>  
            <GetQuestionPaper QuizID={QuizID}/>
            <Createquestion QuizID={QuizID}/>
        </main>
    )
}