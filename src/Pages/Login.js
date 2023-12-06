import { Link,Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import React, { useState } from "react";
import {app} from "../FirebaseConfig";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserData,toggleLogin } from "../Reducer/UserActivityReducer";
import Interest from "./Interest";
import Navbar from "../Component/Navbar";
function Login() {

  // state for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   
  // to check for successfull login so that we render to our dashboard
  const [loginSuccessfull, toggleLogin2] = useState(false);

  // we are creating a state for out userId as well so that we may direct out link to its profile
  const [userId, setUserId] = useState("");

  const dispatch = useDispatch();


  // getting loginStatus and user data from store
  // const userData = useSelector((state)=>state.userData);
  // const isLoggedin = useSelector((state)=>state.loginStatus);
  // const interest = useSelector((state)=>state.Interest);
  // console.log(interest);
  // when we click login button in Signup form
  const submit = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await app
        .auth()
        .signInWithEmailAndPassword(email, password);
        const uniqId = userCredentials.user.multiFactor.user.uid
      setUserId(uniqId);
      console.log(email,password,uniqId);
      toast.success("Login Successful");
      toggleLogin2(true)
      dispatch(toggleLogin(true))
      dispatch(setUserData({email,password,uniqId}))

    } catch (error) {
      console.error("Error logging in:", error);
      toast.error(error.message);
    }
  };

  if(loginSuccessfull){
    return <Navigate to={`/dashboard/:${userId}`} replace="true" />;
  }
  return (
    <>
    <Navbar/>
        <div className="loginContainer">
          <div className="header">
            <h1>Login</h1>
          </div>
          <div className="box">
            <input
              type="text"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="box">
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <p>
            Didn't have an account? <Link to="/signup">Signup now</Link>
          </p>
          <button onClick={submit}>Login</button>
        </div> 
    </>
  );
}

export default Login;
