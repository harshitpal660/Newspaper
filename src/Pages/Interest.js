import toast from "react-hot-toast";
import React, { useState } from "react";
import { Link,Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUserInterest } from "../Reducer/UserActivityReducer";
import Navbar from "../Component/Navbar";
function Interest() {
  const [done,setDone] = useState(false);

  const dispatch = useDispatch();
    const submit=()=>{
      
      setDone(true)
    }

    if(done){
      return <Navigate to='/login' replace="true" />;
    }
    return (
      <>
      <Navbar/>
      <div className="interestContainer">
        <div><h1>Chose your Interest</h1></div>
        <div>
          <div className="interestItems" onClick={()=>setUserInterest()}>business</div>
          <div className="interestItems">entertainment</div>
          <div className="interestItems">general</div>
          <div className="interestItems">health</div>
          <div className="interestItems">science</div>
          <div className="interestItems">sports</div>
          <div className="interestItems">technology</div>
        </div>
        <div><input type="button" onClick={submit}></input></div>
        

      </div></>
      
    );
  }
  
  export default Interest;