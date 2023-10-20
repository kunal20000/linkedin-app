import React from "react";
import "./tryPremium.css";
import { Navbar } from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TryPremium = () => {
  const navigate = useNavigate(null);
  const handlePremium = ()=>{
     toast.success("Comming Soon")
  }
  return (
    <main>
      <Navbar/>
      <div className="header trypremiumPage">
        <h4 className="t-24 t-bold header1">
          Achieve your goals faster with Premium.
        </h4>
        <p>Kunal and millions of other members use Premium</p>
        <p>
          Start your free 1-month trial today. Cancel anytime. We’ll send you a
          reminder 7 days before your trial ends.
        </p>
        <input type="range" /><span>0%</span>
       
      </div>

      <main className="premiumBox">
        <h5>Kunal, are you interested in Premium for work or personal use? </h5>
        <p>We’ll recommend the right plan for you.</p>
        <div className="premiumBox1">
          <input type="checkbox" />
          <span>I’d use Premium for my personal goals</span>
        </div>
        <div className="premiumBox2">
          <input type="checkbox" />
          <span>I’d use Premium as part of my job</span>
        </div>
        <div className="premiumBox3">
          <input type="checkbox" />
          <span>Other</span>
        </div>
        <hr />
        <div className="premiumBox4">
          <button className="btn-next" onClick={handlePremium}>Next</button>
        </div>
      </main>
      <ToastContainer/>
    </main>
  );
};

export default TryPremium;
