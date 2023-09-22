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
  const fetchPostData = async () => {
    try {
      const config = getHeaderWithProjectIDAndBody();
      const res = await axios.get(
        `https://academics.newtonschool.co/api/v1/linkedin/post?page=${page}&limit=10`,
        config
      );

      const postData = res.data.data;
      setPostData([...postDataList, ...res.data.data]);
    } catch (err) {
      console.error(err);
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
  return (
    <main>
      <Navbar />
      <div className="app-body">
        <SideBar />
        <div className="feedPost">
          <Feed />

          {isLoading ? (
            <div className="spinner center">
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
              <div class="spinner-blade"></div>
            </div>
          ) : (
            postDataList.map((posts, index) => {
              // const { author, channel, id } = posts;
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
                    <img src={posts.channel.image}></img>
                  </div>
                  <PostBody />
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
