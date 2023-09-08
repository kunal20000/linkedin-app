import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";

import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import MyNetwork from "./components/pages/MyNetwork";
import Messaging from "./components/pages/Messaging";
import Notification from "./components/pages/Notification";
import Jobs from "./components/pages/Jobs";
import TryPremium from "./components/pages/TryPremium";
import Me from "./components/pages/Me";
import ForBusiness from "./components/pages/ForBusiness";
import StartPost from "./components/startPost/StartPost";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <section className="main-section">
          

          
        </section>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route to="/home" element={<Home />} /> */}
          <Route path="/mynetwork" element={<MyNetwork />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/me" element={<Me />} />
          <Route path="/forbusiness" element={<ForBusiness />} />
          <Route path="/trypremium" element={<TryPremium />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
