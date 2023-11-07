import { useState } from "react";
import { isValidateEmail } from "utils";
import LeftContent from "./LeftContent";
import Signup from "./Signup";
import style from "./assets/style.module.scss";

const LandingPageContainer = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleGetStarted = () => {
    const emailV = isValidateEmail(email);
    setEmailValid(emailV);
    if (emailV) {
      window.location.href = "https://app.loch.one/welcome"
    }
  };
  return (
    <div className={style.landing}>
      <LeftContent />
      <Signup
        handleChange={handleChange}
        handleGetStarted={handleGetStarted}
        emailValid={emailValid}
      />
    </div>
  );
};

export default LandingPageContainer;
