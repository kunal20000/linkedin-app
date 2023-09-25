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
function App() {
  const user = null;

  const navigate = useNavigate(null);

  const [setLogin, setLoginComponent] = useState(false);
  const [isSignInPage, setIsSignInPage] = useState(false);
  const isLoggedIn = sessionStorage.getItem("logInStatus");
  const userName = JSON.parse(sessionStorage.getItem("userInfo"));
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return (
    <>
      <Routes>
        {!isLoggedIn && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/mynetwork" element={<MyNetwork />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/trypremium" element={<TryPremium />} />
          </>
        )}
        {/* <Route path="/me" element={<Me />} />
        <Route path="/forbusiness" element={<ForBusiness />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
