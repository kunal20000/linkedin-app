import React, { useState } from "react";
import { ReactComponent as LinkedingLogo } from "../assets/linkedinLogo.svg";
import "./forgotPass.css";
import { getHeaderWithProjectId } from "../utils/config";
import axios from "axios";

const ForgotPass = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    passwordCurrent: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState("");
  const [hasError, sethasError] = useState(false);
  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const forgotPassData = async (userInfo) => {
    userInfo.appType = "linkedin";
    try {
      const headerConfig = getHeaderWithProjectId();
      const res = await axios.patch(
        "https://academics.newtonschool.co/api/v1/user/updateMyPassword",
        userInfo,
        headerConfig
      );
      if (res.data.token) {
        sethasError(false);
        sessionStorage.setItem("authToken", res.data.token);
        sessionStorage.setItem("userInfo", JSON.stringify(res.data.data.user));
      }
    } catch (err) {
      sethasError(true);
      setErrMessage(err.response.data.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    forgotPassData(userInfo);
  };

  return (
    <div className="forgotPass">
      <div className="forgotPass1">
        <LinkedingLogo  />
      </div>
      <div className="forgotPass2">
        <div className="headerContent">
          <h1 className="forgot">Forgot password?</h1>
          <p>Reset password in two quick steps</p>
        </div>
        <form className="formReset" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="name"
            value={userInfo.name}
            onChange={handleUserInput}
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={userInfo.email}
            onChange={handleUserInput}
          />
          <input
            type="password"
            name="passwordCurrent"
            placeholder="Password Current"
            value={userInfo.passwordCurrent}
            onChange={handleUserInput}
          />
          <input
            type="password"
            placeholder="Password New"
            name="password"
            value={userInfo.password}
            onChange={handleUserInput}
          />
          {hasError && <p className="errMessage">{errMessage}</p>}
          <button className="btnReset">Reset</button>
        </form>
        <a className="loginLink" href="./Login">Back</a>
      </div>
    </div>
  );
};

export default ForgotPass;
