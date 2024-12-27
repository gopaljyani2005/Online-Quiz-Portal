"use client";
import { useState } from "react";
import styles from "../../app/style/Form.module.css"
import { useRouter } from "next/navigation";

export default function Createquestion({QuizID}){
    const router = useRouter();
    const [Question,setQuestion] = useState("");
    const [OptionA,setOptionA] = useState("");
    const [OptionB,setOptionB] = useState("");
    const [OptionC,setOptionC] = useState("");
    const [OptionD,setOptionD] = useState("");
    const [CorrectOption,setCorrectOption] = useState("");
    const [Marks,setMarks] = useState("");
    async function addquestion(e){
        e.preventDefault();
        const data = {
            QuizID:QuizID,
            Question:Question,
            OptionA:OptionA,
            OptionB:OptionB,
            OptionC:OptionC,
            OptionD:OptionD,
            CorrectOption:CorrectOption,
            Marks:Marks,
        }
        const response = await fetch(`/api/question`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(data),
        })
        if(response.ok){
            alert("Question is add successfully");
        }
        else{
            alert("Please try again");
        }
        window.location.reload();    
    }
    return (
        <main className={styles.page}>
            <h1>Add Question</h1>
            <form className={styles.form} onSubmit={addquestion}>
                <label htmlFor="Question">Question</label>
                <input
                    type="text"
                    id="Question"
                    name="Question"
                    placeholder="Question"
                    required
                    value={Question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <label htmlFor="OptionA">OptionA</label>
                <input
                    type="text"
                    id="OptionA"
                    name="OptionA"
                    placeholder="OptionA"
                    required
                    value={OptionA}
                    onChange={(e) => setOptionA(e.target.value)}
                />
                <label htmlFor="OptionB">OptionB</label>
                <input
                    type="text"
                    id="OptionB"
                    name="OptionB"
                    placeholder="OptionB"
                    required
                    value={OptionB}
                    onChange={(e) => setOptionB(e.target.value)}
                />
                <label htmlFor="OptionC">OptionC</label>
                <input
                    type="text"
                    id="OptionC"
                    name="OptionC"
                    placeholder="OptionC"
                    required
                    value={OptionC}
                    onChange={(e) => setOptionC(e.target.value)}
                />
                <label htmlFor="OptionD">OptionD</label>
                <input
                    type="text"
                    id="OptionD"
                    name="OptionD"
                    placeholder="OptionD"
                    required
                    value={OptionD}
                    onChange={(e) => setOptionD(e.target.value)}
                />
                <label htmlFor="CorrectOption">CorrectOption</label>
                <input
                    type="text"
                    id="CorrectOption"
                    name="CorrectOption"
                    placeholder="CorrectOption"
                    required
                    value={CorrectOption}
                    onChange={(e) => setCorrectOption(e.target.value)}
                />
                <label htmlFor="Marks">Marks</label>
                <input
                    type="text"
                    id="Marks"
                    name="Marks"
                    placeholder="Marks"
                    required
                    value={Marks}
                    onChange={(e) => setMarks(e.target.value)}
                />
                <button type="submit">Create</button>
            </form>
        </main>
    )
}