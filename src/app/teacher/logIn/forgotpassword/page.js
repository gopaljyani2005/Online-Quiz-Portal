"use client";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "../../../style/Form.module.css";
import { useState } from "react";

export default function forgotpassword(){
    const router = useRouter();
    const [Username,setUsername] = useState("");
    const [section1,setsection1] = useState(true);
    const [section2,setsection2] = useState(false);
    const [otp,setotp] = useState("");
    const [sendotp,setsendotp] = useState("");
    const [registeredEmail,setregisteredEmail] = useState("");


    async function sendotpfunct(e){
        e.preventDefault();
        const encodedUsername = encodeURIComponent(Username);
        const response1 = await fetch(`/api/getStudentData/${encodedUsername}`);
        if(response1.ok){
            const teacherdetail = await response1.json();
            const Username = teacherdetail.Username;
            const Email = teacherdetail.Email;
            setregisteredEmail(Email);
            const data = {
                Email:Email,
                Username:Username
            }
            const response2 = await fetch(`/api/sendOtp`,{
                method : "POST",
                headers:{
                    'content-type':"application/json",
                },
                body:JSON.stringify(data),
            });
            if(response2.ok){
                const send = await response2.json();
                setsendotp(send.sendotp);
                setsection1(false);
                setsection2(true);
            }
            else{
                alert("failed to sent otp");
            }
        }
        else{
            alert("Username is not found");
        }
        } 
        
    async function otpverification(e){
        e.preventDefault();
        if(otp===sendotp){
            const encodedUsername = encodeURIComponent(Username);
            router.push(`/teacher/logIn/forgotpassword/resetpassword?Username=${encodedUsername}`);
        }
        else{
            console.log("hiii",sendotp);
            alert("incorrect otp! Please enter correct otp");
            setotp("");
        }
    }
    
    return (
        <main className={styles.page}>
            {
                section1 && (
                    <div>
                        <h1>Forgot Password</h1>
            <form className={styles.form} onSubmit={sendotpfunct}>
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
                <button type="submit">Next</button>
            </form>
                    </div>
                )
            }

            {
                section2 && (
                    <div>
                        <h1>OTP Verificaion</h1>
            <form className={styles.form} onSubmit={otpverification}>
                <label htmlFor="otp">Enter the Otp that is send on the registered Email id : {registeredEmail}</label>
                <input
                    type="text"
                    id="otp"
                    name="otp"
                    placeholder="otp"
                    required
                    value={otp}
                    onChange={(e) => setotp(e.target.value)}
                />
                <button type="submit">Next</button>
            </form>
                    </div>
                )
            }
        </main>
    )
}