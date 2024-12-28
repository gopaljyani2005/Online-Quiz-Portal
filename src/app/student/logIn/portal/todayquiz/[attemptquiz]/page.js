"use client";
import { useRouter } from "next/navigation";
import styles from "../../../../../style/answersheet.module.css";
import styles1 from "../../../../../style/quizinstruction.module.css";
import { useState } from "react";

export default function start({ params }) {
  const router = useRouter();
  const [section1, setsection1] = useState(true);
  const [section2, setsection2] = useState(false);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [paperkey, setpaperkey] = useState("");
  const [QuizQuestionPaper, setQuizQuestionPaper] = useState("");
  const [Answer, setAnswer] = useState("");
  const [studentID, setstudentID] = useState("");
  const [QuizID, setQuizID] = useState("");
  const [SubmissionID,setSubmissionID] = useState("");
  async function startquiz() {
    // get quiz id that is attempting to be started.
    const quizid = await (await params).attemptquiz;
    setQuizID(quizid);

    // get student which student is currently attempting to be started.
    const response = await fetch(`/api/cookiedata/studenttoken`, {
      method: "GET",
      credentials: "same-origin",
    });
    let result = await response.json();
    setstudentID(result.studentID);
    // Mark quiz is started 
    const submissiondata = {
      QuizID:quizid,
      studentID:result.studentID,
      Start:1,
    }
    console.log(submissiondata);
    const submissionResponse = await fetch(`/api/quizSubmission`,{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(submissiondata),
    });
    if(submissionResponse.status === 409){
      alert("This quiz has already been submitted");
      router.push('/student/logIn/portal/todayquiz');
    }
    else if(submissionResponse.status === 500){
      alert("Internal Server Error.Please try again!");
      router.push('/student/logIn/portal/todayquiz');
    }
    else{
      const subid = (await submissionResponse.json()).SubmissionID;
      setSubmissionID(subid);
      let QuizPaper = await fetch(`/api/getQuizByID/${quizid}`);
      QuizPaper = await QuizPaper.json();
      setQuizQuestionPaper(QuizPaper);
      setpaperkey(Object.keys(QuizPaper));
      setsection1(false);
      setsection2(true);
    }
  }
  async function handleNext(QuestionID) {
    const responsedata  ={
      QuizID:QuizID,
      studentID:studentID,
      SubmissionID:SubmissionID,
      QuestionID:QuestionID,
      ResponseOption:Answer,
    }
    const questionResponse = await fetch(`/api/submitResponse`,{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(responsedata),
    });
    if(questionResponse.status === 200){
      alert("question is successfully submitted");
    }
    else{
      alert("question is not submitted please ask you teacher");
    }
    if(currentIndex < paperkey.length-1){
      setcurrentIndex(currentIndex + 1);
      setAnswer("");
    }
    else{
      alert("successfully submitted your quiz");
      router.push('/student/logIn/portal/todayquiz');
    }
  }
  return (
    <main>
      <div className={styles1.quizContainer}>
      {section1 && (
        <div className={styles1.instructionsContainer}>
          <h1 className={styles1.instructionsTitle}>Start Quiz</h1>
          <ul className={styles1.instructionList}>
            <li><strong>Do not reload the page</strong> during the quiz to prevent losing your progress.</li>
            <li><strong>No negative marking</strong> for wrong answers.</li>
            <li><strong>Please attempt all questions</strong>, even if you're unsure.</li>
            <li><strong>Total number of questions:</strong> 20</li>
          </ul>
          <button className={styles1.startButton} onClick={startquiz}>Start</button>
        </div>
      )}

      {!section1 && (
        <div className={styles1.quizContent}>
          <h2>Welcome to the Quiz!</h2>
          {/* Add your quiz questions here */}
        </div>
      )}
    </div>
      {section2 && (
        <div className={styles.container}>
          <div key={paperkey[currentIndex]}>
            <h1 className={styles.question}>
              {QuizQuestionPaper[paperkey[currentIndex]].Question}
            </h1>
            <h6 className={styles.marks}>
              Marks - {QuizQuestionPaper[paperkey[currentIndex]].Marks}
            </h6>
            <ul className={styles.options}>
              <li>
                <span>
                  (A) {QuizQuestionPaper[paperkey[currentIndex]].OptionA}
                </span>
              </li>
              <li>
                <span>
                  (B) {QuizQuestionPaper[paperkey[currentIndex]].OptionB}
                </span>
              </li>
              <li>
                <span>
                  (C) {QuizQuestionPaper[paperkey[currentIndex]].OptionC}
                </span>
              </li>
              <li>
                <span>
                  (D) {QuizQuestionPaper[paperkey[currentIndex]].OptionD}
                </span>
              </li>
            </ul>
            <div className={styles.inputContainer}>
              <label htmlFor="Answer">Answer</label>
              <input
                type="text"
                id="Answer"
                name="Answer"
                placeholder="Answer"
                value={Answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>
            <button
              className={styles.button}
              onClick={() =>
                handleNext(QuizQuestionPaper[paperkey[currentIndex]].QuestionID)
              }
            >
              Next
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
