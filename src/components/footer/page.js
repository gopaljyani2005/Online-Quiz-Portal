
import styles from "../../app/style/footer.module.css";
import Link from "next/link";
export default function Footer(){
    return (
        <footer className={styles.footer}>
            <p>&copy; 2024 QuizMaster. All rights reserved.</p>
            <div>
                <a href="/about">Privacy Policy</a>
                <a href="/about">Terms of Service</a>
                <a href="/about">FAQ</a>
            </div>
    </footer>
    )
}