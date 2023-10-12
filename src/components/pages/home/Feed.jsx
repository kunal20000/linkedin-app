import React, { useState, useRef, useEffect } from "react";
import "./Feed.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ArticleIcon from "@mui/icons-material/Article";
import { getHeaderWithProjectIDAndBody } from "../../utils/config";
import axios from "axios";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import MmsIcon from "@mui/icons-material/Mms";
import { json } from "react-router-dom";
const Feed = ({ setPostData }) => {
  const fileInputRef = useRef(null);
  const [post, setPost] = useState("");

  const [userInputs, setuserInputs] = useState({
    imageSrc: "",
    content: "",
  });
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "450px",
      height: "400px",
      borderRadius: "12px",
      overflowX: "hidden",
    },
  };
  const name = JSON.parse(sessionStorage.getItem("userInfo"));

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "rgba(0,0,0,0.9)";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
  }

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.event });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleMessage = () => {
    const postid = uuidv4();
    if (userInputs.content) {
      const newPost = {
        author: {
          name: name,
        },
        content: userInputs.content,
        channel: { image: userInputs.imageSrc },
        likeCount: 3,
        _id: postid,
      };
      // const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];

      // // Add the new post to the existing posts
      // existingPosts.unshift(newPost);

      // // Save the updated posts back to local storage
      // localStorage.setItem('posts', JSON.stringify(existingPosts));

      // setPostData(existingPosts);
      setPostData((prevFeedPost) => [newPost, ...prevFeedPost]);
      setuserInputs({
        imageSrc: "",
        content: "",
      });

      document.body.style.overflowY = "auto";
    }
    setIsOpen(false);
  };

  const saveUserContent = (e) => {
    const { value } = e.target;
    setuserInputs((prevData) => ({
      ...prevData,
      content: value,
    }));
  };
  const triggerImageUpload = () => {
    fileInputRef.current.click(); // Trigger the file input svg
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setuserInputs((prevData) => ({
        ...prevData,
        imageSrc: imageUrl,
      }));
    }
    console.log(userInputs);
  };

  return (
    <div className="feed">
      <div className="feed-input">
        <div className="feed-form">
          <AccountCircleIcon />
          <form className="for-creating-post" onSubmit={handleSubmit}>
            <input
              type="text"
              name="text"
              id="newPost"
              placeholder="Start post"
              onClick={openModal}
            />
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <AccountCircleIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "rgba(0,0,0,0.6)",
                    marginLeft: "-10px",
                  }}
                />
                <h2
                  style={{ color: "black", fontSize: "25px", whiteSpace:"nowrap" }}
                  ref={(_subtitle) => (subtitle = _subtitle)}
                >
                  {name}
                </h2>

                <button
                  style={{
                    marginTop: "-5px",
                    marginLeft: "280px",
                    border: "none",
                    fontSize: "18px",
                  }}
                  onClick={closeModal}
                >
                  X
                </button>
              </div>
              <div className="forTextArea">
                <textarea
                  onChange={saveUserContent}
                  name=""
                  placeholder="What do you want to talk about?"
                  id="input-textarea"
                  cols="52"
                  rows="11"
                ></textarea>
              </div>
              <button
                className="btn-for-gallery"
                style={{ left: "-20px", top: "-6px", background: "#00000000" }}
              >
                <MmsIcon onClick={triggerImageUpload} />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                />
              </button>
              <button
                onClick={handleMessage}
                style={{
                  right: "10px",
                  border: "1px solid blue",
                  backgroundColor: "#0a66c2",
                  position: "absolute",
                  margin: "10px 10px",
                  color: "#fff",
                  padding: "11px 11px",
                }}
              >
                Post
              </button>
            </Modal>
          </form>
        </div>

        <div className="feed-option">
          <div className="option" onClick={openModal}>
            <InsertPhotoIcon
              style={{ color: "#70b5f9", height: "25px", width: "25px" }}
            />
            <span>Media</span>
          </div>
          <div className="option" onClick={openModal}>
            <DesignServicesIcon
              style={{ color: "#a872e8", height: "25px", width: "25px" }}
            />
            <span>Design</span>
          </div>
          <div className="option" onClick={openModal}>
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
