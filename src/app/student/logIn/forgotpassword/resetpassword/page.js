"use client";
import { useState } from "react";
import styles from "../../../../style/Form.module.css";
import { useRouter } from "next/navigation";

export default function resetpassword({ params }) {
  const router = useRouter();
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");
  async function reset(e) {
    e.preventDefault();
    if (password1 === password2) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const username = urlParams.get("Username");
      const decodedUsername = decodeURIComponent(username);
      const data = {
        update: "student",
        Username: decodedUsername,
        Password: password1,
      };
      const response = await fetch(`/api/passwordUpdate`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("password updated successfully");
        router.push("/student/logIn");
      } else {
        alert("failed to update password.Please try again!");
        router.push("/student/logIn");
      }
    } else {
      alert("Password in not match");
      setpassword1("");
      setpassword2("");
    }
  }
  return (
    <main className={styles.page}>
      <h1>Reset Password</h1>
      <form className={styles.form} onSubmit={reset}>
        <label htmlFor="password1">New Password</label>
        <input
          type="text"
          id="password1"
          name="password1"
          placeholder="new password"
          required
          value={password1}
          onChange={(e) => setpassword1(e.target.value)}
        />

        <label htmlFor="password2">Confirm Password</label>
        <input
          type="text"
          id="password2"
          name="password2"
          placeholder="confirm password"
          required
          value={password2}
          onChange={(e) => setpassword2(e.target.value)}
        />
        <button type="submit">Reset</button>
      </form>
    </main>
  );
}
