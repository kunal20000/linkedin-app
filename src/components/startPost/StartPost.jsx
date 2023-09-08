import React from "react";
import "./StartPost.css";
const StartPost = () => {
  return (
    <>
      <div className="create-post-container">
        <div style={{ display: " flex", alignItems: "center" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-user-circle3"
          >
            <path d="M18 20a6 6 0 0 0-12 0"></path>
            <circle cx="12" cy="10" r="4"></circle>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <input type="text" id="createPost" placeholder="Start a post" />
        </div>
      </div>
    </>
  );
};

export default StartPost;
