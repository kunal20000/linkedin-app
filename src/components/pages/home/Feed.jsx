import React, { useState, useRef, useEffect } from "react";
import "./Feed.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ArticleIcon from "@mui/icons-material/Article";

const Feed = () => {
  const name = JSON.parse(sessionStorage.getItem("userInfo"));

  
  return (
    <div className="feed">
      <div className="feed-input">
        <div className="feed-form">
          <AccountCircleIcon />
          <form>
            <input
              type="text"
              
              placeholder="Start post"

             
            />
           
            
          </form>
        </div>

        <div className="feed-option">
          <div className="option">
            <InsertPhotoIcon
              style={{ color: "#70b5f9", height: "25px", width: "25px" }}
            />
            <span>Media</span>
          </div>
          <div className="option">
            <DesignServicesIcon
              style={{ color: "#a872e8", height: "25px", width: "25px" }}
            />
            <span>Design</span>
          </div>
          <div className="option">
            <ArticleIcon
              style={{ color: "#e16745", height: "25px", width: "25px" }}
            />
            <span>Write Article</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
