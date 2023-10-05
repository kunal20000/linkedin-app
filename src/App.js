import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/pages/home/Home";
import MyNetwork from "./components/pages/MyNetwork";
import Messaging from "./components/pages/Messaging";
import Notification from "./components/pages/Notification";
import Jobs from "./components/pages/Jobs";
import TryPremium from "./components/pages/TryPremium";
import Me from "./components/pages/Me";
import ForBusiness from "./components/pages/ForBusiness";
import Login from "./components/login/Login";
import SideBar from "./components/pages/home/SideBar";
import Feed from "./components/pages/home/Feed";
import Widget from "./components/pages/home/Widget";
import Signup from "./components/login/Signup";
import { Navigate } from "react-router-dom";
import ForgotPass from "./components/login/ForgotPass";
import MainProfile from "./components/pages/home/MainProfile";

function App() {
  const navigate = useNavigate();
  const [setLogin, setLoginComponent] = useState(false);
  const [isSignInPage, setIsSignInPage] = useState(false);
  const name = JSON.parse(sessionStorage.getItem("userInfo"));
  // const isLoggedIn = sessionStorage.getItem("logInStatus");
  // const email = sessionStorage.getItem("email");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  
  //   if (!isLoggedIn) {
  //     navigate("/login");
    
  //   } else if (name === "") {
  //     navigate("/login");
    
  //   } else if (isLoggedIn === "true" && name !== "") {
  //     navigate("/");
     
  //   }
  // }, []);
 
  return (
    <>
     
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/mainprofile" element={<MainProfile />} />
          <Route path="/mynetwork" element={<MyNetwork />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/trypremium" element={<TryPremium />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
        </>
      </Routes>
    </>
  );
}

export default App;
