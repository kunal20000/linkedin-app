import React from "react";
import "./messaging.css";
import { Navbar } from "../navbar/Navbar";
const Messaging = () => {
  return (
    <main>
      <Navbar />

      <h4 style={{ textAlign: "center", margin: "30px auto", }}>
        Feature comming soon...
      </h4>
      <img className="forMedia"
        style={{
          "display": "block",
          marginLeft:"auto",
          marginRight: "auto",
          width: "50%",
          height:"500px"
        }}
        src="https://styles.redditmedia.com/t5_2qioo/styles/communityIcon_qneofzw4kqk51.png"
        alt=""
      />
    </main>
  );
};

export default Messaging;
