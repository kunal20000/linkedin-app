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
  const [openCommentSec, setOpenCommentSec] = useState(false);
  const [localLikeCount, setLocalLikeCount] = useState(0);
  const loginStatus = sessionStorage.getItem("logInStatus");
  const [comments, setComments] = useState([]);
  const loggedIn = sessionStorage.getItem("userInfo");
  const navigate = useNavigate(null);

  const handleLikeClick = () => {
     
      setLocalLikeCount(localLikeCount + 1);
      onLikeClick(localLikeCount + 1);
    
  };

  // const fetchingCommentPost = async (postId) => {
  //   const configs = getHeaderWithProjectIDAndBody();
  //   try {
  //     const res = await axios.get(
  //       `https://academics.newtonschool.co/api/v1/reddit/post/${postId}/comments`,
  //       configs,
  //       postId
  //     );
  //     const childrenData = res.data.data[0].children;
  //     console.log(childrenData);
  //     if (res.data.status === "success") {
  //       setComments([...childrenData, ...res.data.data]);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const handleCommentSection = ()=>{
  //   const postId = selectedPost._id;
  //   setOpenCommentSec((prevState)=> !prevState);
  //   if(!openCommentSec){
  //     fetchingCommentPost(postId);
  //   }
  // }
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
