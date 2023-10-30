import React from "react";
import "./jobs.css";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Navbar } from "../navbar/Navbar";
import { ReactComponent as MYJOBS } from "../assets/myjobs.svg";
import { ReactComponent as JOBALERT } from "../assets/jobAlert.svg";
import { ReactComponent as SKILL } from "../assets/skill.svg";
import { ReactComponent as INTERVIEW } from "../assets/interviewPerp.svg";
import { ReactComponent as RESUME } from "../assets/resume.svg";
import { ReactComponent as JOBSEEKER } from "../assets/jobseeker.svg";
import { ReactComponent as SETTING } from "../assets/setting.svg";
import { ReactComponent as POSTFREEJOB } from "../assets/postfreejob.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Jobs = () => {
  return (
    <main>
      <Navbar />
      <div className="main-div">
        <div className="main-div-1">
          <ul>
            <li>
              <MYJOBS className="jobsContent" /> <span>My Jobs</span>
            </li>
            <li>
              <JOBALERT className="jobsContent" /> <span>Job alerts</span>
            </li>
            <li>
              <SKILL className="jobsContent" /> <span>Skill Assessments</span>
            </li>
            <li>
              <INTERVIEW className="jobsContent" /> <span>Interview prep</span>
            </li>
            <li>
              <RESUME className="jobsContent" /> <span>Resume Builder</span>
            </li>
            <li>
              <JOBSEEKER className="jobsContent" />{" "}
              <span>Job seeker guidance</span>
            </li>
            <li>
              <SETTING className="jobsContent" />{" "}
              <span>Application settings</span>
            </li>
          </ul>
          <button className="postJob" onClick={()=>toast("Comming Soon")}> Post a free a job</button>
        </div>

        <div className="main-div-2">
          <div className="suugestJobSearch">
            <h6>Suggested job searches</h6>
           
              {/* <input type="search" />
            
            
              <input type="search" /> */}
           
          </div>
          <div className="recommended">
            <h5>Recommended for you</h5>
            <p>Based on your profile and search history</p>
            <h4>Comming soon...</h4>
          </div>
        </div>
        <div className="main-div-3">
          <div className="jobSeeker">
            <h6>Job seeker guidance</h6>
            <p className="para1">Recommended based on your activity</p>
            <p style={{ textAlign: "center", marginLeft: "14px" }}>
              I want to improve my resume
            </p>
            <p className="para2">
              Explore our curated guide of expert-led courses, such as how to
              improve your resume and grow your network, to help you land your
              next opportunity.
            </p>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </main>
  );
};

export default Jobs;
