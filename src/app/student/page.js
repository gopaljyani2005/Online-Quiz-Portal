import st from "../style/Home.module.css";
import Link from "next/link";
export default function student() {
  return (
    <main>
      <div className={st.login}>
        <Link href="student/sigIn" className={st.btn}>Sigin</Link>
        <Link href="student/logIn" className={st.btn}>Login</Link>
      </div>
    </main>
  );
}
