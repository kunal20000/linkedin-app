import React, { useState, useRef, useEffect } from "react";
import "./Feed.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ArticleIcon from "@mui/icons-material/Article";

const Feed = () => {
  const name = JSON.parse(sessionStorage.getItem("userInfo"));
  const [showInput, setShowInput] = useState("false");
  const inputIconRef = useRef(null);
  useEffect(() => {
    const hideModal = (e) => {
      if (inputIconRef.current.contains(e.target)) {
        return;
      }
      setShowInput(false);
    };
    document.addEventListener("click", hideModal);
    return () => {
      document.removeEventListener("click", hideModal);
    };
  }, []);
  return (
    <div className="feed">
      <div className="feed-input">
        <div className="feed-form">
          <AccountCircleIcon />
          <form>
            <input
              type="text"
              ref={inputIconRef}
              placeholder="Start post"
              onClick={() => setShowInput(!showInput)}
            />
            <input type="submit" />
            {showInput && (
              <div className="auth-modal2">
                <div className="modal-content">
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <AccountCircleIcon />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "0",
                        padding: "0",
                      }}
                    >
                      <h5 style={{ margin: "0" }}>{name}</h5>
                      <p style={{ fontSize: "12px", lineHeight: "1.44" }}>
                        Post to Anyone
                      </p>
                    </div>
                    <span className="close">&times;</span>
                  </div>
                  <textarea
                    style={{ alignItems: "center", border: "none" }}
                    typeof="text"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="What do you want to talk About"
                  ></textarea>
                </div>
              </div>
            )}
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
