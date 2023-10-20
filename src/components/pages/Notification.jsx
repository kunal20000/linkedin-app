import React from "react";
import { Navbar } from "../navbar/Navbar";
import "./notification.css";
import { useNavigate } from "react-router-dom";
import user1 from "./home/images/user-1.png";
import user2 from "./home/images/user-2.png";
import user3 from "./home/images/user-3.png";
import user4 from "./home/images/user-4.png";
import user5 from "./home/images/user-5.png";

const Notification = () => {
  const navigate = useNavigate(null);

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
            <button className="allBtn">All Notification</button>
            {/* <button className="postBtn">My posts</button>
            <button className="mentionBtn">Mentions</button> */}
          </div>
          <div className="dataNoti">
            <a href="#" className="forNoti-1">
              <img className="user1" src={user1} alt="" />
              <p className="user1ParaMedia" style={{fontSize:"12px", margin:"15px 0px",fontWeight:"600"}}>
                View Work From Home Fresher & Experience Jobs Work From Home/
                Fresher & Experience Jobs posted: CGI Is hiring #Fresher and
                Experience- OCTOBER 2023 Post Name – Multiple Positions. #Apply
                
              </p>
            </a>
            <a href="#" className="forNoti-1">
              <img className="user1" src={user2} alt="" />
              <p style={{fontSize:"12px", margin:"15px 0px",fontWeight:"600"}}>
                View Work From Home Fresher & Experience Jobs Work From Home/
                Fresher & Experience Jobs posted: CGI Is hiring #Fresher and
                Experience- OCTOBER 2023 Post Name – Multiple Positions. #Apply
                
              </p>
            </a>
            <a href="#" className="forNoti-1">
              <img className="user1" src={user3} alt="" />
              <p style={{fontSize:"12px", margin:"15px 0px",fontWeight:"600"}}>
                View Work From Home Fresher & Experience Jobs Work From Home/
                Fresher & Experience Jobs posted: CGI Is hiring #Fresher and
                Experience- OCTOBER 2023 Post Name – Multiple Positions. #Apply
                
              </p>
            </a>
            <a href="#" className="forNoti-1">
              <img className="user1" src={user4} alt="" />
              <p style={{fontSize:"12px", margin:"15px 0px",fontWeight:"600"}}>
                View Work From Home Fresher & Experience Jobs Work From Home/
                Fresher & Experience Jobs posted: CGI Is hiring #Fresher and
                Experience- OCTOBER 2023 Post Name – Multiple Positions. #Apply
                
              </p>
            </a>
            <a href="#" className="forNoti-1">
              <img className="user1" src={user5} alt="" />
              <p style={{fontSize:"12px", margin:"15px 0px",fontWeight:"600"}}>
                View Work From Home Fresher & Experience Jobs Work From Home/
                Fresher & Experience Jobs posted: CGI Is hiring #Fresher and
                Experience- OCTOBER 2023 Post Name – Multiple Positions. #Apply
                
              </p>
            </a>
          </div>
        </div>
        <div className="noti-3">
          <p className="p1"> Kunal Boost your job search with Premium</p>
          <p className="p2">see whos viewed your in last 90 days</p>
          <div style={{ textAlign: "center" }}>
            <button
              className="btn-free"
              onClick={() => navigate("/trypremium")}
            >
              Try for free!
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Notification;
