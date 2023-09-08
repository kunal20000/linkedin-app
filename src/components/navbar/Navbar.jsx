import "./Navbar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TryPremium from "../pages/TryPremium";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as MyNetworkIcon } from "../assets/mynetwork.svg";
import { ReactComponent as JobsIcon } from "../assets/jobs.svg";
import { ReactComponent as MessagingIcon } from "../assets/messaging.svg";
import { ReactComponent as NotificationIcon } from "../assets/notification.svg";
import { ReactComponent as MeIcon } from "../assets/me.svg";
import { ReactComponent as BusinessIcon } from "../assets/business.svg";

export const Navbar = () => {
 const [showModal, setShowModal] = useState("");
  const handleClick= ()=>{
      showModal(true);
  }
  return (
    <navbar className="navbar-container">
      <section className="navbar-container1">
        <LinkedinIcon />
        <input type="search" id="search" placeholder="Search" />
      </section>

      <section className="navbar-container2">
        <div className="navbar-container2-home">
          <HomeIcon />
          <NavLink className="homeNav" to="/">
            Home
          </NavLink>
        </div>
        <div className="navbar-container2-mynetwork">
          <MyNetworkIcon />
          <NavLink className="mynetworknav" to="/mynetwork">
            My Network
          </NavLink>
        </div>
        <div className="navbar-container2-jobs">
          <JobsIcon />
          <NavLink className="jobnav" to="/jobs">
            Jobs
          </NavLink>
        </div>
        <div className="navbar-container2-messaging">
          <MessagingIcon />
          <NavLink className="messagenav" to="/messaging">
            Messaging
          </NavLink>
        </div>
        <div className="navbar-container2-notification">
          <NotificationIcon />
          <NavLink className="notificationnav" to="/notification">
            Notification
          </NavLink>
        </div>
        <div className="navbar-container2-me">
          <MeIcon />
          <div>
          <NavLink className="menav" to="/me">
            Me
          </NavLink>
          <select name="" id="logout" onClick={handleClick}>
             <option value=""></option>
          </select>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="vl">
            <div className="navbar-container3-forbusiness">
              <BusinessIcon />
              <NavLink className="forbusinessnav" to="/forbusiness">
                For Business
              </NavLink>
            </div>
          </div>

          <div
            style={{
              paddingTop: "1rem",
              textAlign: "center",
              position: "relative",
            }}
          >
            <NavLink className="trypremiumnav" to="/trypremium">
              Try Premium for
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "0.8rem",
                }}
              >
                Free
              </span>
            </NavLink>
          </div>
        </div>
      </section>
    </navbar>
  );
};
