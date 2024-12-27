import Image from "next/image";
import styles from "./page.module.css";
import st from "./style/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className={st.login}>
        <Link href="/teacher" className={st.btn}>Teacher Portal</Link>
        <Link href="/student" className={st.btn}>Student Portal</Link>
      </div>
    </main>
  );
}
