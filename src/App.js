import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Link, Route, Routes } from "react-router-dom";

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
import HomeRoute from "./components/HomeRoute";
import { SearchProvider } from "./components/SearchContext";
import { ToastContainer } from "react-toastify";
function App() {
  const name = JSON.parse(sessionStorage.getItem("userInfo"));
  const isLoggedIn = sessionStorage.getItem("logInStatus");

  return (
    <>
      <SearchProvider>
        <Routes>
          <Route path="*" element={<HomeRoute />} />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to={"/"} /> : <Login />}
          />
          <Route
            path="/signup"
            element={isLoggedIn ? <Navigate to={"/"} /> : <Signup />}
          />
          <Route
            path="/forgotpass"
            element={isLoggedIn ? <Navigate to={"/"} /> : <ForgotPass />}
          />
        </Routes>
      </SearchProvider>
      
    </>
  );
}

export default App;
