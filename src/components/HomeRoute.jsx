import React from "react";
import MyNetwork from "./pages/MyNetwork";
import { Link, Route, Routes } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Messaging from "./pages/Messaging";
import Home from "./pages/home/Home";
import ForBusiness from "./pages/ForBusiness";
import TryPremium from "./pages/TryPremium";
import ProtectedRoute from "../ProtectedRoute";
import Notification from "./pages/Notification";
import MainProfile from "./pages/home/MainProfile";
import UserProfile from "./pages/home/UserProfile";
import { ToastContainer } from "react-toastify";

const HomeRoute = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<ProtectedRoute Component={<Home />} />} />
        <Route
          path="/mynetwork"
          element={<ProtectedRoute Component={<MyNetwork />} />}
        />
        <Route path="/jobs" element={<ProtectedRoute Component={<Jobs />} />} />
        <Route
          path="/messaging"
          element={<ProtectedRoute Component={<Messaging />} />}
        />
        <Route
          path="/notification"
          element={<ProtectedRoute Component={<Notification />} />}
        />
        <Route
          path="/forbusiness"
          element={<ProtectedRoute Component={<ForBusiness />} />}
        />
        <Route
          path="/trypremium"
          element={<ProtectedRoute Component={<TryPremium />} />}
        />
        <Route
          path="/mainprofile"
          element={<ProtectedRoute Component={<MainProfile />} />}
        />
        <Route
          path="/user/:id"
          element={<ProtectedRoute Component={<UserProfile/>} />}
        />
        
      </Routes>
      <ToastContainer/>
    </div>
  );
};

export default HomeRoute;
