import React from "react";
import "./Feed.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ArticleIcon from "@mui/icons-material/Article";

// import Home from "./Home";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-input">
        <div className="feed-form">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="AccountCircleIcon"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"></path>
          </svg>
          <form>
            <input type="text" placeholder="Start post" />
            <input type="submit" />
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
