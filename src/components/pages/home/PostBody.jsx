import React from "react";
import "./PostBody.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SendIcon from '@mui/icons-material/Send';

const PostBody = () => {
  return (
    <div className="page-footer">
      <div className="page-footer-option">
        <ThumbUpOffAltIcon />
        <span>Like</span>
      </div>
      <div className="page-footer-option">
        <ChatBubbleOutlineIcon />
        <span>Comment</span>
      </div>
      <div className="page-footer-option">
        <PostAddIcon />
        <span>Repost</span>
      </div>
      <div className="page-footer-option">
        < SendIcon/>
        <span>Send</span>
      </div>
    </div>
  );
};

export default PostBody;
