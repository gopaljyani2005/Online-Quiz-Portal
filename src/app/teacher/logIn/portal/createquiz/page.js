"use client";
import { useState } from "react";
import styles from "../../../../style/Form.module.css"
import { verifyToken } from "@/utils/token/token";
import { useRouter } from "next/navigation";
export default function createquiz(){
    const router = useRouter();
    const [QuizTitle,setQuizTitle] = useState("");
    const [Domains,setDomains] = useState("");
    const [Marks , setMarks] = useState("");
    const [StartTime, setStartTime] = useState("");
    const [EndTime,setEndTime] = useState("");
    
    async function createquiz(e){
        e.preventDefault();
        const response = await fetch(`/api/cookiedata/teachertoken`, {
            method: "GET",
            credentials: "same-origin",
          });
          let result = await response.json();
          const TeacherID = result.TeacherID;
          const data = {
            TeacherID:TeacherID,
            QuizTitle:QuizTitle,
            Domains:Domains,
            Marks:Marks,
            StartTime:StartTime,
            EndTime:EndTime
          }

          const resp = await fetch(`/api/addquiz`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(data)
          })
          if(resp.ok){
            alert("Quiz is created successfully!");
            router.push('/teacher/logIn/portal');
          }
          else{
            alert("faild to create quiz");
            setDomains("");
            setMarks("");
            setQuizTitle("");
          }

    }

    return (
        <main className={styles.page}>
            <h1>Create New Quiz</h1>
            <form className={styles.form} onSubmit={createquiz}>
                <label htmlFor="QuizTitle">QuizTitle</label>
                <input
                    type="text"
                    id="Quiztitle"
                    name="Quiztitle"
                    placeholder="Quiztitle"
                    required
                    value={QuizTitle}
                    onChange={(e) =>setQuizTitle(e.target.value)}
                />

                <label htmlFor="Domains">Domains</label>
                <input
                    type="text"
                    id="Domains"
                    name="Domains"
                    placeholder="search"
                    required
                    value={Domains}
                    onChange={(e) => setDomains(e.target.value)}
                />

                <label htmlFor="Marks">Total Marks</label>
                <input
                    type="number"
                    id="Marks"
                    name="Marks"
                    placeholder="Marks"
                    required
                    value={Marks}
                    onChange={(e) => setMarks(e.target.value)}
                />

                <label htmlFor="StartTime">StartTime</label>
                <input
                    type="datetime-local"
                    id="StartTime"
                    name="StartTime"
                    placeholder="StartTime"
                    required
                    value={StartTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />

                <label htmlFor="EndTime">EndTime</label>
                <input
                    type="datetime-local"
                    id="EndTime"
                    name="EndTime"
                    placeholder="EndTime"
                    required
                    value={EndTime}
                    onChange={(e) => setEndTime(e.target.value)}
                />
                <button type="submit">Create</button>
            </form>
        </main>
    )
}