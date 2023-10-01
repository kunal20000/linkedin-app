import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget-top">
        <div className="widget-header">
          <h4>Linkedin News</h4>
          <InfoIcon />
        </div>
        <div className="widget-body">
          <ul className="widget-options">
            <li>
              <h4>Fast food chains eye smaller cities </h4>
              <p>2d ago • 102 readers</p>
            </li>
            <li>
              <h4>Starting a career amid a slowdown</h4>
              <p>3d ago • 468 readers</p>
            </li>
            <li>
              <h4>India's space tech sector lifts off</h4>
              <p>3d ago • 480 readers</p>
            </li>
            <li>
              <h4>It’s crunch time for edtech</h4>
              <p>2d ago • 138 readers</p>
            </li>
            <li>
              <h4>Access Healthcare to hire 1,500</h4>
              <p>4d ago • 4,586 readers</p>
            </li>
          </ul>
        </div>
      </div>
      <footer className="widegtBottom">

      </footer>
      
    </div>
  );
};

export default Widget;
