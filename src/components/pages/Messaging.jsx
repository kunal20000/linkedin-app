import React from "react";
import "./messaging.css";
import { Navbar } from "../navbar/Navbar";
import emptyMessage from "../pages/home/images/page-not-found.eaac395a788a6b5f0347 (1).png";

const Messaging = () => {
  return (
    <main>
      <Navbar />

      <h4 style={{ textAlign: "center", margin: "30px auto" }}>
        Feature comming soon...
      </h4>
      <img
        className="forMedia"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src={emptyMessage}
        alt=""
      />
    </main>
  );
};

export default Messaging;
