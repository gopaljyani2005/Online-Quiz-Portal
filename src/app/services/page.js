import styles from "../style/service.module.css";
export default function services(){
    return (
        <main className={styles.main}>
  <header className={styles.header}>
    <h1>Online Quiz Portal</h1>
  </header>
  <div className={styles.container}>
    <div className={styles.feature}>
      <h2>Admin Features</h2>
      <p>Admins have the following functionalities to manage quizzes:</p>
      <ul>
        <li>Create new quizzes by setting titles, timing, and student domain restrictions.</li>
        <li>Add questions to quizzes and organize them efficiently.</li>
        <li>Review quizzes, check student responses, and assign marks.</li>
        <li>Send email notifications to students about quiz details and their marks.</li>
        <li>Update or delete quizzes as needed.</li>
      </ul>
    </div>
    <div className={styles.feature}>
      <h2>Student Features</h2>
      <p>Students can:</p>
      <ul>
        <li>Log in to the system to view and attempt quizzes assigned to them.</li>
        <li>Submit their responses securely for evaluation.</li>
        <li>Access the answer sheet and question paper after submission.</li>
        <li>View their marks once the teacher checks their quiz.</li>
      </ul>
    </div>
    <div className={styles.feature}>
      <h2>Security Features</h2>
      <p>Ensuring the integrity and fairness of quizzes:</p>
      <ul>
        <li>Authentication required for both admin and student login.</li>
        <li>Quizzes can only be attempted once and from a single device.</li>
        <li>Protected quizzes prevent multiple logins or unauthorized access.</li>
      </ul>
    </div>
  </div>
        </main>
    )
}