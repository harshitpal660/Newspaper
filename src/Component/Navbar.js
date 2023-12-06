// import toast from "react-hot-toast";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import logo from "../Images/logo.jpg"

import styles from "../Styles/Home.module.css"
const Navbar=()=> {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.loginStatus);
  return (
    <div className={styles.navContainer}>
      <div>
        <div className={styles.logo}>
          <img src={logo}></img>
        </div>
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

