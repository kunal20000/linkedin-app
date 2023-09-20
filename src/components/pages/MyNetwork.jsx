import React from "react";
import "./mynetwork.css";

import { ReactComponent as MyNetworkIcon } from "../assets/mynetwork.svg";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PeopleIcon from "@mui/icons-material/People";
import GroupsIcon from "@mui/icons-material/Groups";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import PagesIcon from "@mui/icons-material/Pages";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import TagIcon from "@mui/icons-material/Tag";
import { Navbar } from "../navbar/Navbar";
const MyNetwork = () => {
  return (
    <main>
      <Navbar />
      <div className="maindiv">
        <div className="network-div">
          <div className="manage-div">
            <h6 style={{color:"rgba(0,0,0,0.7)"}}>Manage my network</h6>
            <div className="div1">
              <MyNetworkIcon />
              <span style={{color:"rgba(0,0,0,0.6)"}}>Connections</span>
              <span  style={{marginLeft:"120px", color:"rgba(0,0,0,0.6)"}}>599</span>
            </div>
            <div className="div2">
              <PermContactCalendarIcon className="forIconColor" />
              <span style={{color:"rgba(0,0,0,0.6)"}}>Contacts</span>
              <span style={{marginLeft:"145px", color:"rgba(0,0,0,0.6)"}}>873</span>
            </div>
            <div className="div3">
              <PeopleIcon className="forIconColor" />
              <span style={{color:"rgba(0,0,0,0.6)"}}>Following & Followers</span>
            </div>
            <div className="div4">
              <GroupsIcon className="forIconColor" />
              <span style={{color:"rgba(0,0,0,0.6)"}}>Groups</span>
              <span  style={{marginLeft:"165px", color:"rgba(0,0,0,0.6)"}}>2</span>
            </div>
            <div className="div5">
              <EventSeatIcon className="forIconColor" />
              <span style={{color:"rgba(0,0,0,0.6)"}}>Events</span>
            </div>
            <div className="div6">
              <PagesIcon className="forIconColor" />
              <span style={{color:"rgba(0,0,0,0.6)"}}>Pages</span>
              <span style={{marginLeft:"170px", color:"rgba(0,0,0,0.6)"}}>42</span>
            </div>
            <div className="div7">
              <UnsubscribeIcon className="forIconColor" />

              <span style={{color:"rgba(0,0,0,0.6)"}}>Newsletter</span>
              <span>1</span>
            </div>
            <div className="div8">
              <TagIcon className="forIconColor" />
              <span style={{color:"rgba(0,0,0,0.6)"}}>Hashtag</span>
            </div>
          </div>
        </div>
        <div className="invitaionDiv">
          <h6>Invitations</h6>
          <hr />
          <div className="invitationDivMain">
            <h5>No invitations...</h5>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyNetwork;
