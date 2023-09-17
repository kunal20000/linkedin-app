import React from "react";
import "./login.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as LinkedingLogo } from "../assets/linkedinLogo.svg";
import { getHeaderWithProjectIDAndBody } from "../utils/config";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate(null);
  const [errMessage, setErrMessage] = useState("");
  const [hasError, sethasError] = useState(false);
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
        navigate("/home");
        sessionStorage.setItem("loginStatus", true);
        sessionStorage.setItem("authToken", res.data.token);
        sessionStorage.setItem("userInfo", JSON.stringify(res.data.data.name));
      }
    } catch (err) {
      sethasError(true);
      setErrMessage(err.response.data.message);
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
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
                type="text"
                name="email"
                required
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
            </div>
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
            <br />
            <a href="">Forgot password?</a>
            <br />
            <button className="signIn-button" onClick={() => navigate("/home")}>
              Sign In
            </button>
            <hr style={{ width: "30%" }} />
          </form>

          <button
            className="joinNow-button"
            onClick={() => navigate("/signup")}
          >
            New to Linedin
          </button>
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
