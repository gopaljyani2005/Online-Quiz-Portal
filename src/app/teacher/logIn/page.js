"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

import styles from "../../style/Form.module.css";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    async function loginfunct(e) {
        e.preventDefault();
        const userdata = {
            Username:Username,
            Password:Password
            
        }
        try {
            const response = await fetch(`/api/teacherLogin` ,{
                method:"POST",
                headers:{
                    "content-type": "application/json",
                },
                body:JSON.stringify(userdata)
            });
            if (response.status === 200) {
                router.push(`/teacher/logIn/portal`);
            }
            else if(response.status===404){
                alert("Incorrect username or password.Please Enter correct username and password");
                setUsername("");
                setPassword("");
            } 
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    return (
        <main className={styles.page}>
            <h1>Login</h1>
            <form className={styles.form} onSubmit={loginfunct}>
                <label htmlFor="Username">Username</label>
                <input
                    type="text"
                    id="Username"
                    name="Username"
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
                <button type="submit">Login</button>
            </form>
            <div className="forgot-password">
                <Link href="/teacher/logIn/forgotpassword">Forgot Password</Link>
            </div>
        </main>
    );
}
