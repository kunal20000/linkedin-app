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
          <div className="dataNoti">
            <h6 style={{textAlign:"center", alignItems:"center"}}>no notification</h6>
          </div>
        </div>
        <div className="noti-3">
          <p className="p1"> Kunal Boost your job search with Premium</p>
          <p className="p2">see whos viewed your in last  90 days</p>
          <div style={{textAlign:"center"}}>
          <button className="btn-free">Try for free!</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Notification;
