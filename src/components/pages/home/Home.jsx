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

const Home = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const fetchDataFromApi = async () => {
    try {
      const resData = await fetch(
        "https://academics.newtonschool.co/api/v1/linkedin/post",
        {
          method: "GET",
          headers: {
            projectId: "YOUR_PROJECT_ID",
          },
        }
      );
      if (!resData.ok) {
        throw new Error("Request failed");
      }
      const { data } = await resData.json();
      setPost(data);
      // setPost(data.slice(0, 10));
      console.log("data", data);
    } catch (err) {
      // handle error during the fetching request
      console.error();
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);
  return (
    <main>
      <Navbar />
      <div className="app-body">
        <SideBar />
        <div className="feedPost">
          <Feed />

          {isLoading ? (
            <div class="spinner center">
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
            post.map((posts) => {
              const { author, channel, id } = posts;
              return (
                <div key={id} className="posts">
                  <div className="post-header">
                    <div className="post-header-left">
                      <Avatar src={author.profileImage} />
                      <div className="post-profile-details">
                        <h3>{author.name}</h3>
                        <p>{channel.name}</p>
                      </div>
                    </div>
                    <MoreHorizIcon />
                  </div>
                  <div className="post-body">
                    <p>This is test post, we are learning react</p>
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
