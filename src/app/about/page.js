import styles from "../style/about.module.css";

export default function About() {
  return (
    <main className={styles.mainclass}>
      <header className={styles.header}>
        <h1>About Quiz Management System</h1>
      </header>
      <div className={styles.container}>
        <section className={styles.intro}>
          <h2>Welcome to Our Platform</h2>
          <p>
            The Quiz Management System is designed to simplify the process of creating, managing,
            and evaluating quizzes for both administrators and students. Our mission is to provide a
            seamless and secure platform for online assessments.
          </p>
        </section>

        <section className={styles.features}>
          <h2>Key Features</h2>
          <ul>
            <li>Comprehensive quiz creation tools for administrators.</li>
            <li>Secure and user-friendly environment for students.</li>
            <li>Real-time performance tracking and feedback mechanisms.</li>
            <li>Authentication and protection against multiple login attempts.</li>
          </ul>
        </section>

        <section className={styles.mission}>
          <h2>Our Mission</h2>
          <p>
            To revolutionize the online quiz experience by offering a reliable and efficient
            platform that meets the needs of modern education systems.
          </p>
        </section>

        <section className={styles.contact}>
          <h2>Contact Us</h2>
          <p>If you have any questions or feedback, feel free to reach out:</p>
          <ul>
            <li>Email: support@quizmanagement.com</li>
            <li>Phone: +1 123-456-7890</li>
            <li>Address: 123 Learning Way, Knowledge City, Eduland</li>
          </ul>
        </section>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Quiz Management System. All rights reserved.</p>
      </footer>
    </main>
  );
}
