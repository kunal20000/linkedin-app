import React, { useState } from "react";
import "./PostBody.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getHeaderWithProjectIDAndBody } from "../../utils/config";
import { usePost } from "../../Provider/PostInfoProvider";

const PostBody = ({ likeCount, onLikeClick }) => {
  // const { setSelectedPost, selectedPost } = usePost();
  const [isLiked, setIsLiked] = useState(false); // Track whether the post is liked
  const [openCommentSec, setOpenCommentSec] = useState(false);
  const [localLikeCount, setLocalLikeCount] = useState(0);
  const loginStatus = sessionStorage.getItem("logInStatus");
  const [comments, setComments] = useState([]);
  const loggedIn = sessionStorage.getItem("userInfo");
  const navigate = useNavigate(null);

  const handleLikeClick = () => {
 
      if (isLiked) {
        // If already liked, decrease like count
        setLocalLikeCount(localLikeCount - 1);
      } else {
        // If not liked, increase like count
        setLocalLikeCount(localLikeCount + 1);
      }
      // Toggle the liked state
      setIsLiked(!isLiked);
      // Callback to update the like count in the parent component
      onLikeClick(localLikeCount);
  };

  return (
    <div className="page-footer">
      <div className="page-footer-option">
        <div className="forLike" onClick={handleLikeClick}>
          <ThumbUpOffAltIcon />
          <span>Like</span>
        </div>
      </div>
      <div className="page-footer-option">
        <div className="forComment">
          <ChatBubbleOutlineIcon />
          <span>Comment</span>
        </div>
      </div>
      <div className="page-footer-option">
        <PostAddIcon />
        <span>Repost</span>
      </div>
      <div className="page-footer-option">
        <SendIcon />
        <span>Send</span>
      </div>
    </div>
  );
};

export default PostBody;
