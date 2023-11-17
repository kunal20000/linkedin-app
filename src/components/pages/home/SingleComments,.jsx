import React from "react";
import { Avatar } from "@mui/material";
import "./PostBody.css";
import { toast } from "react-toastify";
const SingleComments = ({ comment }) => {
  return (
    <>
      <div className="post-comment">
        <Avatar />
        <div>
          <div className="post-comment-content">
            <h2>{comment.name}</h2>
            <p>{comment.comment}</p>
          </div>
          <div style={{ marginTop: "-20px", padding: "0" }}>
            <span>
              <button
                style={{
                  fontSize: "12px",
                  color: "rgba(0,0,0,0.75)",
                  textDecoration: "none",
                }}
                onClick={() => toast("Comming soon")}
              >
                Like
              </button>
            </span>
            <span>
              <button
                style={{
                  fontSize: "12px",
                  color: "rgba(0,0,0,0.75)",
                  textDecoration: "none",
                }}
                onClick={() => toast("Comming soon")}
              >
                Reply
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleComments;
