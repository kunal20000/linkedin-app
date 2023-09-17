import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
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

function App() {
  const user = "ABC";
  return (
    <>
      {!user ? (
        <Login /> || <Signup/>
      ) : (
        <main>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mynetwork" element={<MyNetwork />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/forbusiness" element={<ForBusiness />} />
            <Route path="/trypremium" element={<TryPremium />} />
          </Routes>
        </main>
       )} 
    </>
  );
}

export default App;
