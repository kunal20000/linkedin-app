import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyNetwork from "./components/MyNetwork";
import Messaging from "./components/Messaging";
import Notification from "./components/Notification";
import Jobs from "./components/Jobs";
import TryPremiumForFree from "./components/TryPremiumForFree";
import Me from "./components/Me";
import ForBusiness from "./components/ForBusiness";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <section className="main-section">
         <Home/>
        </section>
        <Routes>
          <Route to="/" element={<Home/>}/>
          <Route to="/mynetwork" element={<MyNetwork/>}/>
          <Route to="/jobs" element={<Jobs/>}/>
          <Route to="/messaging" element={<Messaging/>}/>
          <Route to="/notification" element={<Notification/>}/>
          <Route to="/me" element={<Me/>}/>
          <Route to="/forbusiness" element={<ForBusiness/>}/>
          <Route to="/trypremiumforfree" element={<TryPremiumForFree/>}/>
          
        </Routes>
      </main>
    </>
  );
}

export default App;
