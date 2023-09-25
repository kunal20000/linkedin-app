import React, { useState, useRef, useEffect } from "react";
import "./Feed.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ArticleIcon from "@mui/icons-material/Article";
import { getHeaderWithProjectIDAndBody } from "../../utils/config";
import axios from "axios";

const Feed = () => {
  const[post, setPost] = useState({
    title:"",
    // content:"",
    // image:""
  });
  // const [userInfo, setUserInfo] = useState({
  //   title: "",
  //   content: "",
  //   images: "",
  // });
  const name = JSON.parse(sessionStorage.getItem("userInfo"));

  // const feedPost = async () => {
  //   const config = getHeaderWithProjectIDAndBody();
  //   try {
  //     const res = await axios.post(
  //       "https://academics.newtonschool.co/api/v1/linkedin/post/",
  //       {
  //         ...userInfo,
  //         appType: "linkedin",
  //       },
  //       config
  //     );
  //     const postData = res.data.data;
  //     setPostTitle([...postTitle, ...setPostTitle]);
  //     console.log(postData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleInput = (event)=> {
    setPost({...post, [event.target.name]: event.target.event})
  }
  function handleSubmit(event){
     event.preventDefault();
     post.appType = "linkedin";
     const config = getHeaderWithProjectIDAndBody();
    axios.post('https://academics.newtonschool.co/api/v1/linkedin/post/',
    {
     post,
     config
     
    })
    .then(response => console.log(response))
    .catch(err=>console.log(err))


  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // feedPost(userInfo);
  //   const title = e.target.title.value;
  //   const content = e.target.content.value;
  //   const images = e.target.images.value;
     
  //   axios.post("https://academics.newtonschool.co/api/v1/linkedin/post/",
  //   {
  //     title,
  //     content,
  //     images,
  //   })
  //   .then((response)=>{
  //     console.log(response);
  //   })
  //   .catch((error)=> {
  //     console.log(console.log(error));
  //   })

  // };
  return (
    <div className="feed">
      <div className="feed-input">
        <div className="feed-form">
          <AccountCircleIcon />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="title"
              placeholder="Start post"
              onChange={handleInput}
              name="title"
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
