import React from "react";
import "./sidebar.css";
// import { ReactComponent as AvtarIcon } from "./assets/avtar.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
   navigate('/MainProfile');
  }
  const name = JSON.parse(sessionStorage.getItem("userInfo"));
  return (
    <div className="sidebar">
      <div className="sidebar_profile">
        <img
          src="./images/profileBackgroundImage.jpg"
          alt="image"
        />
        <div className="profile_details">
          <AccountCircleIcon className="forCirleIcon" onClick={()=>navigate('/mainprofile')}/>
          <h4 className="nameDynamic" onClick={handleClick}>{name.charAt(0).toUpperCase()+ name.slice(1)}</h4>
          <p>
            B.Tech Graduate || JAVA || HTML || CSS || Bootstrap || JavaScript ||
            Github || React || Redux
          </p>
        </div>

        <div className="profile_stats">
          <span>Who viewed your profile</span>
          <span className="stat-number">121</span>
        </div>
        <div className="profile_stats">
          <span>Impression on your post</span>
          <span className="imp-number">140</span>
        </div>
        <div className="profile_stats">
          <span>
            Connection
            <br />
            <b>Grow your Network</b>
          </span>
          <span className="stat-number">150</span>
        </div>
      </div>
      <div className="sidebar-recent">
        <p>Recent</p>
        <p className="hash">
          <span>#</span>Javascript
        </p>
        <p className="hash">
          <span>#</span>React Developers
        </p>
        <p className="hash">
          <span>#</span>Web Development
        </p>
        <p className="hash">
          <span>#</span>branding
        </p>
        <p className="hash">
          <span>#</span>Programming
        </p>
      </div>
    </div>
  );
};

export default SideBar;
