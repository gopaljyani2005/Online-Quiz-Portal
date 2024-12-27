import st from "../style/Home.module.css";
import Link from "next/link";
export default function student() {
  return (
    <main>
      <div className={st.login}>
        <Link href="teacher/sigIn" className={st.btn}>Sigin</Link>
        <Link href="teacher/logIn" className={st.btn}>Login</Link>
      </div>
    </main>
  );
}
