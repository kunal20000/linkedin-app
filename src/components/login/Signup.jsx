import { useContext, useState } from "react";
import { ReactComponent as LinkedingLogo } from "../assets/linkedinLogo.svg";
import "./Signup.css";
import axios from "axios";
import { getHeaderWithProjectIDAndBody } from "../utils/config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const navigate = useNavigate(null);

  const [errMessage, setErrMessage] = useState("");
  const [hasError, sethasError] = useState(false);

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    if (name === "name" && value.length < 4) {
      setNameErr("Name must be at least 4 characters long.");
    } else {
      setNameErr(false);
    }
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

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const signUp = async (userInfo) => {
    userInfo.appType = "linkedin";
    try {
      const headerConfig = getHeaderWithProjectIDAndBody();
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/signup",
        userInfo,
        headerConfig
      );

      console.log(res);
      if (res.data.token) {
        sethasError(false);
        setErrMessage("Account created succesffuly!");
        // setIsNotLoggedIn(true);
        sessionStorage.setItem("authToken", res.data.token);
        sessionStorage.setItem("userInfo", JSON.stringify(res.data.data.user));
        navigate("/login");
        toast("Account Created Successfully");
      }
    } catch (err) {
      sethasError(true);
      setErrMessage(err.response.data.message);
      // console.error(err.response.data.message);
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    signUp(userInfo);
  };

  return (
    <div className="signup-main">
      <div className="linkedinSignup">
        <LinkedingLogo />
      </div>
      <div className="form-login-container">
        <h1>Make the most of your professional life</h1>
        <form className="form-login" onSubmit={handleSignUp}>
          <label htmlFor="name">Name</label>

          <input
            id="name"
            className="nameInput"
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleUserInput}
            required
          />
          {nameErr && (
            <p
              style={{
                color: "red",
                fontSize: "15px",
                textAlign: "center",
                margin: "0px",
                padding: "0px",
              }}
            >
              {nameErr}
            </p>
          )}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleUserInput}
            required
          />
          {emailErr && (
            <p
              style={{
                color: "red",
                fontSize: "15px",
                textAlign: "center",
                margin: "0px",
              }}
            >
              {emailErr}
            </p>
          )}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleUserInput}
            required
          />
          {passwordErr && (
            <p
              style={{
                color: "red",
                fontSize: "15px",
                textAlign: "center",
                margin: "0px",
              }}
            >
              {passwordErr}
            </p>
          )}
          {hasError ? (
            <p className="errorMesage">{errMessage}</p>
          ) : (
            <p className="errorMesage">{errMessage}</p>
          )}
          <p>
            By clicking Agree & Join, you agree to the LinkedIn User Agreement,
            Privacy Policy, and Cookie Policy. Agree & Join
          </p>
          <button className="joinBtn">Agree & Join</button>
          <p className="login">
            Already on LinkedIn?
            <Link to="/login" className="login-Link">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Signup;
