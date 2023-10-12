import React, { useEffect, useState } from "react";
import "./Home.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SideBar from "./SideBar";
import Feed from "./Feed";
import PostBody from "./PostBody";
import Widget from "./Widget";
import "./app.css";
import { Navbar } from "../../navbar/Navbar";
import axios from "axios";
import { getHeaderWithProjectIDAndBody } from "../../utils/config";

const Home = () => {
  const [postDataList, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let [page, setPage] = useState(1);
  const isLoggedIn = sessionStorage.getItem("logInStatus");

  const fetchPostData = async () => {
    try {
      setIsLoading(true);
      const config = getHeaderWithProjectIDAndBody();
      const res = await axios.get(
        `https://academics.newtonschool.co/api/v1/linkedin/post?page=${page}&limit=10`,
        config
      );

      const postData = res.data.data;
      console.log(postData);
      setPostData([...postDataList, ...res.data.data]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleLikeClick = (postId)=>{
    const updatedPostDataList = postDataList.map((post)=>{
      if(post.id === postId){
          // Toggle the liked state
          const newLikeCount = post.liked ? post.likeCount-1: post.likeCount+1;
          return{...post, likeCount: newLikeCount, liked: !post.liked};
      }
      return post;
    })
    setPostData(updatedPostDataList);
  }
  return (
    <main>
      <Navbar />
      <div className="app-body">
        <SideBar />
        <div className="feedPost">
          <Feed setPostData={setPostData}/>

          {isLoading ? (
            <span class="loader"></span>
          ) : (
            postDataList.map((posts, index) => {
              return (
                <div key={index} className="posts">
                  <div className="post-header">
                    <div className="post-header-left">
                      <Avatar src={posts.author.profileImage} />
                      <div className="post-profile-details">
                        <h3>{posts.author.name}</h3>
                        <p>{posts.channel.name}</p>
                      </div>
                    </div>
                    <MoreHorizIcon />
                  </div>
                  <div className="post-body">
                    <p
                      style={{
                        fontSize: "13px",
                        fontFamily: "Arial",
                        color: "rgba(0,0,0,0.9)",
                      }}
                    >
                      {posts.content}
                    </p>
                    <img
                      className="mainImage"
                      src={posts.channel.image}
                      alt="image"
                    /><br/>
                    <img
                      className="imageLiker"
                      src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                      alt="likerImage"
                    />
                    <span
                      style={{
                        marginLeft: "2px",
                        fontSize: "14px",
                        color: "rgba(0,0,0,.6)",
                      }}
                    >
                      {posts.likeCount}
                    </span>
                  </div>
                  <PostBody
                    likeCount={posts.likeCount}
                    onLikeClick={() => handleLikeClick(posts.id)}
                    liked={posts.liked}
                  />
                </div>
              );
            })
          )}
        </div>
        <Widget />
      </div>
    </main>
  );
};

export default Home;
