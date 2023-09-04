import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <navbar className="navbar-container">
      <section className="navbar-container1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          className="linkdin_image"
          width="34"
          height="34"
          focusable="false"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
        <input type="search" id="search" placeholder="Search" />
        <i className="fa fa-search"></i>
       </section>

      <section className="navbar-container2">
        <div className="navbar-container2-home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-home"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <NavLink className="homeNav" to="/">
            Home
          </NavLink>
        </div>
        <div className="navbar-container2-mynetwork">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-network"
          >
            <rect x="16" y="16" width="6" height="6" rx="1"></rect>
            <rect x="2" y="16" width="6" height="6" rx="1"></rect>
            <rect x="9" y="2" width="6" height="6" rx="1"></rect>
            <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
            <path d="M12 12V8"></path>
          </svg>
          <NavLink className="mynetworknav" to="/mynetwork">
            My Network
          </NavLink>
        </div>
        <div className="navbar-container2-jobs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-baggage-claim"
          >
            <path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"></path>
            <path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"></path>
            <rect width="13" height="8" x="8" y="6" rx="1"></rect>
            <circle cx="18" cy="20" r="2"></circle>
            <circle cx="9" cy="20" r="2"></circle>
          </svg>
          <NavLink className="jobnav" to="/jobs">
            Jobs
          </NavLink>
        </div>
        <div className="navbar-container2-messaging">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-message-circle"
          >
            <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
          </svg>
          <NavLink className="messagenav" to="/messaging">
            Messaging
          </NavLink>
        </div>
        <div className="navbar-container2-notification">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-bell-ring"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
            <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
          </svg>
          <NavLink className="notificationnav" to="/notification">
            Notification
          </NavLink>
        </div>
        <div className="navbar-container2-me">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-user-circle2"
          >
            <path d="M18 20a6 6 0 0 0-12 0"></path>
            <circle cx="12" cy="10" r="4"></circle>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <NavLink className="menav" to="/me">
            Me
          </NavLink>
        </div>

        {/* <section className="navbar-container3"> */}
        <div style={{ display: "flex" }}>
          <div className="navbar-container3-forbusiness">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-grid"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
              <line x1="3" x2="21" y1="9" y2="9"></line>
              <line x1="3" x2="21" y1="15" y2="15"></line>
              <line x1="9" x2="9" y1="3" y2="21"></line>
              <line x1="15" x2="15" y1="3" y2="21"></line>
            </svg>
            <NavLink className="forbusinessnav" to="/forbusiness">
              For Business
            </NavLink>
          </div>

          <div>
            <NavLink className="trypremiumnav" to="/trypremiumforfree">
              Try Premium for
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "1rem",
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
