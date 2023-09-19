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
      <Navbar/>
    <div className="maindiv">
    <div className="network-div">
      <div className="manage-div">
        <h6>Manage my network</h6>
        <div className="div1">
          <MyNetworkIcon />
          <span>Connections</span>
        </div>
        <div className="div2">
          <PermContactCalendarIcon />
          <span>Contacts</span>
        </div>
        <div className="div3">
          <PeopleIcon />
          <span>Following & Followers</span>
        </div>
        <div className="div4">
          <GroupsIcon />
          <span>Groups</span>
        </div>
        <div className="div5">
          <EventSeatIcon />
          <span>Events</span>
        </div>
        <div>
          <PagesIcon /><span>Pages</span>
        </div>
          <div className="div7">
            <UnsubscribeIcon />
            <span>Newsletter</span>
          </div>
          <div className="div8">
            <TagIcon />
            <span>Hashtag</span>
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
