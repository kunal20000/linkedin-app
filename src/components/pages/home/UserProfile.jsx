import "./UserProfile.css";
import { Navbar } from "../../navbar/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import imageFile from "./images/user-1.png";
import imageFile2 from "./images/user-2.png";
import imageFile3 from "./images/connect.png";
import imageFile4 from "./images/chat.png";
import imageFile5 from "./images/microsoft.png";
import imageFile6 from "./images/slack.png";
import imageFile7 from "./images/google.png";
import imageFile8 from "./images/right-arrow.png";
import imageFile9 from "./images/stanford.png";
import imageFile10 from "./images/north.png";
import imageFile11 from "./images/mit.png";
import imageFile12 from "./images/mi-logo.png";
import imageFile13 from "./images/user-3.png";
import imageFile14 from "./images/user-4.png";
import imageFile15 from "./images/user-5.png";
import imageFile16 from "./images/logo.png";
import imageFile17 from "./images/otherProfileback.webp";
import { ReactComponent as AdditionIcon } from "../../assets/addition.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  getAuthHeaderConfig,
  getHeaderWithProjectIDAndBody,
  getProfileById,
} from "../../utils/config";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [profile, setProfile] = useState([]);
  const { id } = useParams();

  const fetchById = async () => {
    try {
      const res = await getProfileById(id);
      setProfile(res);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchById();
  }, [id]);

  const name = JSON.parse(sessionStorage.getItem("userInfo"));
  const [isFollowing, setIsFollowing] = useState(false);
  const [isFollowing1, setIsFollowing1] = useState(false);
  const [isFollowing2, setIsFollowing2] = useState(false);
  const [isFollowing3, setIsFollowing3] = useState(false);
  const [isFollowing4, setIsFollowing4] = useState(false);
 
  const toggleFollow1 = () => {
    setIsFollowing((prevIsFollowing) => !prevIsFollowing);
  };

  const toggleFollow2 = () => {
    setIsFollowing1((prevIsFollowing) => !prevIsFollowing);
  };
  const toggleFollow3 = () => {
    setIsFollowing2((prevIsFollowing) => !prevIsFollowing);
  };
  const toggleFollow4 = () => {
    setIsFollowing3((prevIsFollowing) => !prevIsFollowing);
  };
  const toggleFollow5 = () => {
    setIsFollowing4((prevIsFollowing) => !prevIsFollowing);
  };
  return (
    
    <div className="profile-container">
      <Navbar />
  
         <div className="profile-main-background">
         <div className="profile-main">
           <div className="profile-container1">
             <img
               src="https://media.licdn.com/dms/image/D5616AQFBP6BFA3N_9g/profile-displaybackgroundimage-shrink_200_800/0/1682500067234?e=1700697600&v=beta&t=Z1KIGzn_hiVd55Ugs8ItaMfDbkQ-FV5VoBqBYeA7SUM"
               className="main-background-image"
               alt="backgroundImage"
             />
             <div className="profile-container-user">
               <img
                 src={profile.profileImage}
                 className="profile-pic-user"
                 alt="userProfile"
               />
               <h1>{profile.name}</h1>
               <b>
                 B.Tech Graduate || JAVA || HTML || CSS || Bootstrap ||
                 JavaScript || Github || React || Redux
               </b>
               <p>
                
                 <a style={{ listStyle: "none" }}>
                   Contact info {profile.phone}
                 </a>
               </p>
               <div className="mutual-connection">
                 <img src={imageFile2} alt="" />
                 <span>1 mutual connection: Adrash Gupta</span>
               </div>
               <div className="profile-btn" style={{borderRadius:"13px"}}>
                  <a  className="primary-btn" onClick={toggleFollow5}>
                   <AdditionIcon  style={{marginRight:'4px', width:"19px"}}/>
                   {isFollowing4 ? "Following" : "Follow"}
                 </a>
               </div>
             </div>
           </div>
           <div className="profile-description">
             <h2>About</h2>
             <p>
               Eager to learn new tech skills. Seeking a position in a dynamic
               organization to do technical and practical project and to enhance
               and apply skills.
             </p>
          
           </div>
           <div className="profile-description">
             <h2>Experience</h2>
             <div className="profile-dec-row">
               <img src={imageFile5} alt="" />
               <div>
                 <h3>Lead Front-End Developer</h3>
                 <b>Microsoft &middot; full-time</b>
                 <b>Feb 2021 - Present &middot; 1.5 years</b>
                 <p>
                   Computer programming is the process of performing a particular
                   computation, usually by designing and building an executable
                   computer program.
                 </p>
                 <hr />
               </div>
             </div>
             <div className="profile-dec-row">
               <img src={imageFile6} alt="" />
               <div>
                 <h3>Full Stack Developer</h3>
                 <b>Slack &middot; full-time</b>
                 <b>June 2018 - Jan 2021 &middot; 2.5 years</b>
                 <p>
                   Computer programming is the process of performing a particular
                   computation, usually by designing and building an executable
                   computer program.
                 </p>
                 <hr />
               </div>
             </div>
             <div className="profile-dec-row">
               <img src={imageFile7} alt="" />
               <div>
                 <h3>Web Developer</h3>
                 <b>Google Inc &middot; full-time</b>
                 <b>Sep 2015 - May 2018 &middot; 2.8 years</b>
                 <p>
                   Computer programming is the process of performing a particular
                   computation, usually by designing and building an executable
                   computer program.
                 </p>
               </div>
             </div>
             <hr />
             {/* <a
               href="#"
               className="experience-link"
               onClick={() => toast("Comming Soon")}
             >
               Show all 7 experiences <img src={imageFile8} alt="" />
             </a> */}
           </div>
           <div className="profile-description">
             <h2>Education</h2>
             <div className="profile-dec-row">
               <img src={imageFile9} alt="" />
               <div>
                 <h3>Stanford University</h3>
                 <b>BSEE, Electrical Enginerring</b>
                 <b>2018 - 2022</b>
                 <hr />
               </div>
             </div>
             <div className="profile-dec-row">
               <img src={imageFile10} alt="" />
               <div>
                 <h3>Northwestern University</h3>
                 <b>Computer Science</b>
                 <b>2015 - 2018</b>
                 <hr />
               </div>
             </div>
             <div className="profile-dec-row">
               <img src={imageFile11} alt="" />
               <div>
                 <h3>Harvard University</h3>
                 <b>Senior High School</b>
                 <b>2005 - 2015</b>
               </div>
             </div>
           </div>
           <div className="profile-description">
             <h2>Skills</h2>
             <a href="#" className="skills-btn">
              Leadership
            </a>
            <a href="#" className="skills-btn">
              Web Design
            </a>
            <a href="#" className="skills-btn">
              Development
            </a>
            <a href="#" className="skills-btn">
              Communication
            </a>
            <a href="#" className="skills-btn">
              UI/UX
            </a>
            <a href="#" className="skills-btn">
              Planning
            </a>
            <a href="#" className="skills-btn">
              Javascriptp
            </a>
            <a href="#" className="skills-btn">
              HTML
            </a>
            <a href="#" className="skills-btn">
              CSS
            </a>
            <a href="#" className="skills-btn">
              React
            </a>
            <a href="#" className="skills-btn">
              MangoDB
            </a>
            
             
           </div>
           <div className="profile-description">
             <h2>Languages</h2>
             <a href="#" className="language-btn">
               English
             </a>
             <a href="#" className="language-btn">
               Hindi
             </a>
             <a href="#" className="language-btn">
               Marathi
             </a>
           </div>
         </div>
 
         {/* profilesidbar */}
 
         <div className="profile-sidebar">
           <div className="sidebar-ad">
             <small className="small">Ad &middot; &middot; &middot; </small>
             <p>Master the 5 principles of web design</p>
             <div className="container-image">
               <img src={imageFile} alt="" />
               <img src={imageFile12} alt="" />
             </div>
             <div className="container-image2">
               <b>Brand and Demand in Xiaomi</b>
               <a
                 href="#"
                 className="learn-more-link"
                 onClick={() => toast("Comming Soon")}
               >
                 Learn More
               </a>
             </div>
           </div>
           <div className="sidebar-people">
             <h3>People you may know</h3>
             <div className="sidebar-people-row">
               <img src={imageFile13} alt="" />
               <div>
                 <h2>Samuel Tony</h2>
                 <p>Head of Marketing at Alibaba</p>
                 <button href="#" onClick={toggleFollow1}>
                   {isFollowing ? "Following" : "Follow"}
                 </button>
               </div>
             </div>
             <div className="sidebar-people-row">
               <img src={imageFile14} alt="" />
               <div>
                 <h2>Kajal Gupta</h2>
                 <p>Studied from University of Allahabad</p>
                 <button href="#" onClick={toggleFollow2}>
                   {" "}
                   {isFollowing1 ? "Following" : "Follow"}
                 </button>
               </div>
             </div>
             <div className="sidebar-people-row">
               <img src={imageFile15} alt="" />
               <div>
                 <h2>Adrash Gupta</h2>
                 <p>Studied from Engineering Satara</p>
                 <button href="#" onClick={toggleFollow3}>
                   {isFollowing2 ? "Following" : "Follow"}
                 </button>
               </div>
             </div>
             <div className="sidebar-people-row">
               <img src={imageFile2} alt="" />
               <div>
                 <h2>Ujjwal Kumar</h2>
                 <p>Head of BusinessManger at Alibaba</p>
                 <button href="#" onClick={toggleFollow4}>
                   {isFollowing3 ? "Following" : "Follow"}
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
   
      <div className="profile-footer">
        <div className="sidebar-useful-links">
          <a href="#" className="footer-links">
            About
          </a>
          <a href="#" className="footer-links">
            Accessibility
          </a>
          <a href="#" className="footer-links">
            Talent Solutions
          </a>
          <a href="#" className="footer-links">
            Community Guidelines
          </a>
          <a href="#" className="footer-links">
            Careers
          </a>
          <a href="#" className="footer-links">
            Marketing Solutions
          </a>
          <a href="#" className="footer-links">
            Privacy & Terms{" "}
          </a>
          <a href="#" className="footer-links">
            Ad Choices
          </a>
          <a href="#" className="footer-links">
            Advertising
          </a>
          <a href="#" className="footer-links">
            Sales Solutions
          </a>
          <a href="#" className="footer-links">
            Mobile
          </a>
          <a href="#" className="footer-links">
            Small Business
          </a>
          <a href="#" className="footer-links">
            Safety Center
          </a>

          <div className="copyright-msg">
            <img src={imageFile16} alt="" />
            <p>Linkedin &#169; 2022. All right reserved</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
