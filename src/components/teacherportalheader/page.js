"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TeacherPortalHeader = () => {
  const router = useRouter();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [Username,setUsername] = useState("");
  const [Email,setEmail] = useState("");
  const toggleDropdown = async() => {
    const response = await fetch(`/api/cookiedata/teachertoken`, {
      method: "GET",
      credentials: "same-origin",
    });
    let result = await response.json();
    setEmail(result.Email);
    setUsername(result.Username);
    setShowProfileDropdown((prev) => !prev);
  };

  async function logoutfunct(){
    const data = {
      tokenname:"teachertoken",
    }
    const response = await fetch(`/api/logoutApi`,{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify(data)
    });
    if(response.ok){
      router.push('/teacher/logIn');
    }
  }
  
  return (
    <header style={styles.header}>
      {/* Profile Image */}
      <div style={styles.profileContainer} onClick={toggleDropdown}>
        <Image
          src="/image/profile.png" // Replace with your profile image URL
          alt="Profile"
          width={70}
          height={70}
          style={styles.profileImage}
        />
        {/* Profile Dropdown */}
        {showProfileDropdown && (
          <div style={styles.profileDropdown}>
            <h1>Profile</h1>
            <p>{Username}</p>
            <p>{Email}</p>
          </div>
        )}
      </div>
      <div>
        <h1><i>Teacher Portal</i></h1>
      </div>

      {/* Logout Button */}
      <button style={styles.logoutButton} onClick={logoutfunct}>Logout</button>
    </header>
  );
};

const styles = {
  header: {
    position: "fixed",
    top: 120,
    left: 0,
    width: "100%",
    height: "100px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    zIndex: 1000,
  },
  profileContainer: {
    position: "relative",
    cursor: "pointer",
  },
  profileImage: {
    borderRadius: "50%",
    border: "3px solid #007bff",
  },
  profileDropdown: {
    position: "absolute",
    top: "92px",
    left: "0",
    width: "300px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "9px",
    padding: "10px",
    textAlign: "left",
    zIndex: 1000,
  },
  viewProfileButton: {
    marginTop: "10px",
    width: "100%",
    padding: "20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  logoutButton: {
    backgroundColor: "blue",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin:'30px'
  },
};

export default TeacherPortalHeader;
