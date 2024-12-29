"use client";
import { useState } from "react";
import styles from "../../style/Form.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function sigIn() {
  const router = useRouter();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Department, setDepartment] = useState("");

  async function siginfunct(e) {
    e.preventDefault();
    const data = {
      Username: Username,
      Password: Password,
      Email: Email,
      Department: Department,
    };
    const response = await fetch(`/api/studentSigin`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      router.push("/student/logIn");
    } else {
      const message = (await response.json()).message;
      alert(message);
      setUsername("");
      setPassword("");
      setEmail("");
      setDepartment("");
    }
  }

  const departments = [
    "Computer Science and Engineering",
    "Computing mathematics",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil and Infrastructure Engineering",
    "Chemical Engineering",
    "Meterial Engineering",
    "Bio Science and Bio Engineering",
    "B.S. Physics",
    "B.S. Chemistry"
  ];
  return (
    <main className={styles.page}>
      <h1>Teacher Sigin Page</h1>
      <form className={styles.form} onSubmit={siginfunct}>
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          required
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="xxxxxx"
          required
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="teacher@iitj.ac.in"
          required
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="Department">Department</label>
        <select
          id="Department"
          name="Department"
          required
          value={Department}
          onChange={(e) => setDepartment(e.target.value)}
        >
            <option value="">Select a Department</option>
            {departments.map((department, index) => (
                <option key={index} value={department}>
                {department}
                </option>
                 ))}
        </select>
        <br/>
        <button type="submit">Sigin</button>
      </form>
    </main>
  );
}
