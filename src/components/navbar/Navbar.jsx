import "./Navbar.css";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import TryPremium from "../pages/TryPremium";
import { ReactComponent as LinkedinIcon } from "../assets/linkedin.svg";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as MyNetworkIcon } from "../assets/mynetwork.svg";
import { ReactComponent as JobsIcon } from "../assets/jobs.svg";
import { ReactComponent as MessagingIcon } from "../assets/messaging.svg";
import { ReactComponent as NotificationIcon } from "../assets/notification.svg";
import { ReactComponent as MeIcon } from "../assets/me.svg";
import { ReactComponent as BusinessIcon } from "../assets/business.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import Profile from "./Profile";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate(null);

  return (
    <header className="navbar-container">
      <section className="navbar-container1">
        <Link to={'/'}><LinkedinIcon /></Link>
        <div className="header_search">
          <SearchIcon />
          <input type="search" id="search" placeholder="Search" />
        </div>
      </section>

      <section className="navbar-container2">
        <div className="navbar-container2-home">
          <NavLink className="homeNav" to="/">
            <HomeIcon />
            <span>Home</span>
          </NavLink>
        </div>
        <div className="navbar-container2-mynetwork">
          <NavLink className="mynetworknav" to="/mynetwork">
            <MyNetworkIcon />
            <span>My Network</span>
          </NavLink>
        </div>
        <div className="navbar-container2-jobs">
          <NavLink className="jobnav" to="/jobs">
            <JobsIcon />
            <span>Jobs</span>
          </NavLink>
        </div>
        <div className="navbar-container2-messaging">
          <NavLink className="messagenav" to="/messaging">
            <MessagingIcon />
            <span>Messaging</span>
          </NavLink>
        </div>
        <div className="navbar-container2-notification">
          
          <NavLink className="notificationnav" to="/notification">
          <NotificationIcon />
            <span>Notification</span>
          </NavLink>
        </div>
        <div className="navbar-container2-me">
          
          <div
            style={{
              display: "flex",
              flexDirection:"column",
              gap: "0px",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <MeIcon />
            <div style={{display:"flex",alignItems:'center'}}><span style={{color:"rgba(0,0,0,0.6)"}}>Me</span>
            <Profile />
            </div>
          </div>
        </div>

        <div className="forMediaQuery" style={{ display: "flex", alignItems: "center" }}>
          <div className="vl">
            <div className="navbar-container3-forbusiness">
              <BusinessIcon />
              <span className="forbusinessnav">For Business</span>
            </div>
          </div>

          <div
            style={{
              paddingTop: "1rem",
              textAlign: "center",
              
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
    </header>
  );
};
