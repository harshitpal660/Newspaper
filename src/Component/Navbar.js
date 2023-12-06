// import toast from "react-hot-toast";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Navbar=()=> {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.loginStatus);
  return (
    <div className="navContainer">
      <div>
        <div className="logo"></div>
        <div>
          <div>
            <p>
              <Link to="/">Home</Link>
            </p>
          </div>
          <div>
            <p>
              <Link to="/login">Login</Link>
            </p>
          </div>
          <div>
            <p>
              <Link to="/signup">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;

