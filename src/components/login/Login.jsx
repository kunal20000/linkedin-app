import React from "react";
import "./login.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as LinkedingLogo } from "../assets/linkedinLogo.svg";
import { getHeaderWithProjectIDAndBody } from "../utils/config";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate(null);
  const [errMessage, setErrMessage] = useState("");
  const [hasError, sethasError] = useState(false);

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const signIn = async (userInfo) => {
    userInfo.appType = "linkedin";
    try {
      const headerConfig = getHeaderWithProjectIDAndBody();
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/login",

        userInfo,
        headerConfig
      );
      console.log("res", res);

      if (res.data.token) {
        sethasError(false);
        setErrMessage("logged succesfully");
        sessionStorage.setItem("loginStatus", true);
        sessionStorage.setItem("authToken", res.data.token);
        sessionStorage.setItem("userInfo", JSON.stringify(res.data.data.name));
        navigate("/");
        toast("Log in successfully");
      }
    } catch (err) {
      sethasError(true);
      toast.error("Login Failed: Invalid Username or Password");
      setErrMessage(err.response.data.message);
      console.log(err);
    }
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email" && !isValidEmail(value)) {
      setEmailErr("Please enter a valid email address.");
    } else {
      setEmailErr(false);
    }
    if (name === "password") {
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasDigit = /\d/.test(value);
      if (!hasSpecialChar || !hasUpperCase || !hasLowerCase || !hasDigit) {
        setPasswordErr(
          "Password must 8 characters,uppercase letter, one lowercase, one digit,one special character."
        );
      } else {
        setPasswordErr(false);
      }
    }
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(userInfo);
  };

  return (
    <div className="login-main">
      <div className="linkedinLogin">
        <LinkedingLogo />
      </div>
      <div className="second-div">
        <div className="loginForm">
          <h1>
            Find jobs through your <br /> community
          </h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <br />
            <div className="text-input-flex">
              <input
                className="text-color"
                type="email"
                name="email"
                required
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
            </div>
            {emailErr && (
              <p
                style={{
                  color: "red",
                  fontSize: "15px",
                }}
              >
                {emailErr}
              </p>
            )}
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <div className="text-input-flex">
              <input
                id="password"
                className="text-color"
                name="password"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={handleChange}
              />
            </div>
            {passwordErr && (
              <p
                style={{
                  width: "400px",
                  color: "red",
                  fontSize: "15px",
                  textAlign: "center",
                }}
              >
                {passwordErr}
              </p>
            )}
            <br />
            {hasError && <p>{hasError}</p>}

            <Link className="forgotLink" to="/ForgotPass">
              Forgot Password?
            </Link>
            <br />
            <button className="signIn-button">Sign In</button>
            {/* <hr className="forHr" style={{ width: "75%" }} /> */}
          </form>

          <Link to="/Signup">
            <button className="joinNow-button">New to Linedin</button>
          </Link>
        </div>

        <img
          src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Login;
