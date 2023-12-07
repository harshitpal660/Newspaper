import { Link,Navigate } from "react-router-dom";
// import firebase from "../FirebaseConfig";
import { useState } from "react";
import toast from "react-hot-toast";
import { app, createUserDocument } from "../FirebaseConfig";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Navbar from "../Component/Navbar";
import styles from "../Styles/Signup.module.css"

function Signup() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [displayName,setDisplayName] = useState("");
  const [password,setPassword] = useState("");
  const [signupSuccessfull, toggleSignup] = useState(false);

  const dispatch = useDispatch();

  // when we click submit button in Signup form
  const submit = async(e)=>{
    e.preventDefault();
    try {
      const userCredentials = await app.auth().createUserWithEmailAndPassword(email, password);

      // Check if the email is already in use
      if (userCredentials.additionalUserInfo.isNewUser) {
        // New user
        console.log("New user created:", userCredentials.user);
        toast.success("Account Created Successfully");
        toggleSignup(true);
        // createUserDocument(userCredentials.user,{displayName});
      } else {
        // Email is already in use
        console.log("Email is already in use");
        toast.error("Email is already in use");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error(error.message);
    }
  }

  if(signupSuccessfull){
    return <Navigate to="/interest" replace="true" />;
  }
  return (
    <>
    <Navbar/>
    <div className="signupContainer">
      <div className="header">
        <h1>Signup</h1>
      </div>
      <div className="box">
        <input type="text" value={displayName} placeholder="Full Name" onChange={(e)=>setDisplayName(e.target.value)}></input>
      </div>
      <div className="box">
        <input type="text" value={name} placeholder="User Name" onChange={(e)=>setName(e.target.value)}></input>
      </div>
      <div className="box">
        <input type="email" value={email} placeholder="john@gmail.com" onChange={(e)=>setEmail(e.target.value)}></input>
      </div>
      <div className="box">
        <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
      </div>
      <p>Already have an account? <Link to="/login">Login now</Link></p>
      <button onClick={submit}>Signup</button>
    </div></>
    
  );
}

export default Signup;
