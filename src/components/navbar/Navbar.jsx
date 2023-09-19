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
export const Navbar = () => {
  const navigate = useNavigate(null);

  return (
    <navbar className="navbar-container">
      <section className="navbar-container1">
        <LinkedinIcon />
        <div className="header_search">
          <SearchIcon />
          <input type="search" id="search" placeholder="Search" />
        </div>
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
          <div
            style={{
              display: "flex",
              gap: "0px",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            Me
            <Profile />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="vl">
            <div className="navbar-container3-forbusiness">
              <BusinessIcon />
              <NavLink className="forbusinessnav">
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
