import React from "react";
import style from "../assets/style.module.scss";

const Signup = ({handleChange, handleGetStarted, emailValid}) => {
  return (
    <div className={style.signup}>
      <div className={style.signup_wrapper}>
        <h1>Sign up for exclusive access.</h1>
        <input type="email" placeholder="Your email address" onChange={handleChange}/>
        {emailValid === false && <label>Please enter a valid email</label>}
        <button onClick={handleGetStarted}>Get started</button>
        <p>You’ll receive an email with an invite link to join.</p>
      </div>
    </div>
  );
};

export default Signup;
