import { useContext, useState } from "react";
import { ReactComponent as LinkedingLogo } from "../assets/linkedinLogo.svg";
import "./Signup.css";
import axios from "axios";
import { getHeaderWithProjectIDAndBody } from "../utils/config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate(null);
  const [errMessage, setErrMessage] = useState("");
  const [hasError, sethasError] = useState(false);
  // const { setIsNotLoggedIn } = useContext(CheckLogInStat);
  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
    // console.log(userInfo);
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
        navigate("/home");
        sessionStorage.setItem("authToken", res.data.token);
        sessionStorage.setItem("userInfo", JSON.stringify(res.data.data.user));
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
    <div className="login-main">
      <div className="linkedinSignup">
        <LinkedingLogo />
      </div>
      <div className="form-login-container">
        <h1>Make the most of your professional life</h1>
        <form className="form-login" onSubmit={handleSignUp}>
          <label htmlFor="name">Name</label>

          <input
            className="nameInput"
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleUserInput}
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleUserInput}
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleUserInput}
            required
          />
          {hasError ? <p>{errMessage}</p> : <p>{errMessage}</p>}
          <p>
            By clicking Agree & Join, you agree to the LinkedIn User Agreement,
            Privacy Policy, and Cookie Policy. Agree & Join
          </p>
          <button className="joinBtn">Agree & Join</button>
          <p className="login">
            Already on LinkedIn?
            <Link to="/login">
              <a href="" className="login-Link">
                Sign in
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Signup;

// import React, { useState } from "react";
// import "./Signup.css";
// import axios from "react";
// import { Link, json, useNavigate } from "react-router-dom";
// import { getHeaderWithProjectIDAndBody } from "../utils/config";
// import { ReactComponent as LinkedingLogo } from "../assets/linkedinLogo.svg";
// import { Navigate } from "react-router-dom";

// const Signup = () => {
//   const [userInfo, setUserInfo] = useState({
//     name: "",
//     email: "",
//     password: "",
//     appType: "linkedin",
//   });
//   const [errMessage, setErrMessage] = useState("");
//   const [hasError, sethasError] = useState(false);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // console.log(userInfo);
//     setUserInfo({ ...userInfo, [name]: value });

//   };

//   const signUp = async (userInfo) => {
//     userInfo.appType = "linkedin";
//     try {
//       const headerConfig = getHeaderWithProjectIDAndBody();
//       const res = await axios.post(
//         "https://academics.newtonschool.co/api/v1/user/signup",
//         userInfo,
//         headerConfig
//       );

//       console.log(res);
//       if (res.data.token) {
//         sethasError(false);
//         setErrMessage("Account created succesffuly!");
//         // setIsNotLoggedIn(true);
//         sessionStorage.setItem("authToken", res.data.token);
//         sessionStorage.setItem("userInfo", JSON.stringify(res.data.data.user));
//       }
//     } catch (err) {
//       sethasError(true);
//       setErrMessage(err.response.data.message);
//       // console.error(err.response.data.message);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     signUp(userInfo);
//   };

//   return (
//     <div className="login-main">
//       <div className="linkedinSignup">
//         <LinkedingLogo />
//       </div>
//       <div className="form-login-container">
//         <h1>Make the most of your professional life</h1>

//         <form className="form-login" onSubmit={handleSubmit}>
//           <label htmlFor="name">Name</label>

//           <input
//             type="text"
//             className="nameInput"
//             id="name"
//             name="name"
//             required
//             value={userInfo.name}
//             onChange={handleChange}
//           />

//           <label htmlFor="email">Email</label>

//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             value={userInfo.email}
//             onChange={handleChange}
//             autoComplete="off"
//           />

//           <label htmlFor="password">Password</label>

//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={userInfo.password}
//             onChange={handleChange}
//             autoComplete="off"
//           />

//           <p>
//             By clicking Agree & Join, you agree to the LinkedIn User Agreement,
//             Privacy Policy, and Cookie Policy. Agree & Join
//           </p>
//           <button className="joinBtn">
//             Agree & Join
//           </button>

//           <p className="login">
//             Already on LinkedIn?
//             <Link to="/login">
//               <a href="" className="login-Link">
//                 Sign in
//               </a>
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
