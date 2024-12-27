"use client";
import { useState } from "react";
import styles from "../../style/Form.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function sigIn(){
    const router = useRouter();
    const [Username,setUsername] = useState("");
    const [Password,setPassword] = useState("");
    const [Email,setEmail] = useState("");

    async function siginfunct(e){
        e.preventDefault();
        const data = {
            Username:Username,
            Password:Password,
            Email:Email
        }
        const response = await fetch(`/api/teacherSigin`,{
            method:"POST",
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        if(response.ok){
            router.push('/teacher/logIn');
        }
        else{
            const message = (await response.json()).message;
            alert(message);
            setUsername("");
            setPassword("");
            setEmail("");
        }
    }
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
                <button type="submit">Sigin</button>
            </form>
        </main>
    )
}