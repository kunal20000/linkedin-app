import React, {useState} from "react";
import "./PostBody.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SendIcon from "@mui/icons-material/Send";


const PostBody = () => {
  const[count, setCount] = useState(0);
  
  const commentClick = async () => {
    try {
      const resData = await fetch(
        "https://academics.newtonschool.co/api/v1/linkedin/post/:postId/comments",
        {
          headers: {
            Authorization: "Bearer YOUR_JWT_TOKEN",
            projectId: "YOUR_PROJECT_ID",
          },
        }
      );
      const {data} = resData.json();
      console.log("dataComment", data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="page-footer">
      <div className="page-footer-option">
        <div className="forLike" onClick={()=>setCount(count+1)}>
        <ThumbUpOffAltIcon />
        <span>Like {count}</span>
        </div>
      </div>
      <div className="page-footer-option">
        <ChatBubbleOutlineIcon />
        <span onClick={commentClick}>Comment</span>
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
