import React from "react";
import { Navbar } from "../navbar/Navbar";
import "./notification.css";
const Notification = () => {
  return (
    <main>
      <Navbar />
      <div className="notifications-main-div">
        <div className="noti-1">
          <h5>
            Manage your <br /> Notifications
          </h5>
          <p>View Settings</p>
        </div>
        <div className="noti-2">
          <div className="content">
            <button className="allBtn">All</button>
            <button className="postBtn">My posts</button>
            <button className="mentionBtn">Mentions</button>
          </div>
          <div></div>
        </div>
        <div className="noti-3"></div>
      </div>
    </main>
  );
};

export default Notification;
