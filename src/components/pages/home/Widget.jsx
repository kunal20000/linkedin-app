import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import { toast } from "react-toastify";
import imageFile from "./images/user-1.png";
import imageFile12 from "./images/keyPremium.jpg";
import imageFile16 from "./images/logo.png";
import imageFile17 from "./images/47josflhxdz9o3v227aa72l1p (1).svg";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
const Widget = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div className="widget">
      <div className="widget-top">
        <div className="widget-header">
          <h4>Linkedin News</h4>

          <Box sx={{ width: 0, height:50 }}>
            <Popper
              open={open}
              anchorEl={anchorEl}
              placement={placement}
              transition
            >
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <Typography sx={{ fontSize: '13px',p: 1.3}}>
                      These are the day’s top professional news stories and
                      conversations.
                    </Typography>
                  </Paper>
                </Fade>
              )}
            </Popper>

            <Grid container>
              <Grid item xs={6}>
                <InfoIcon
                  style={{ margin: "0px" }}
                  onClick={handleClick("left-end")}
                />
              </Grid>
            </Grid>
          </Box>
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
      <div className="widegtBottom">
        <div className="sidebar-ad">
          <small className="small">Ad &middot; &middot; &middot; </small>
          <p style={{ textAlign: "center", fontSize: "17px" }}>
            Master the 5 principles of web design
          </p>
          <div className="container-image">
            <img src={imageFile} alt="" />
            <img src={imageFile12} alt="" />
          </div>
          <div className="container-image2">
            <p
              style={{
                textAlign: "center",
                fontSize: "15px",
                marginTop: "15px",
                marginBottom: "0px",
              }}
            >
              See who viewed your profile in the last 90 days
            </p>
            <a
              href="#"
              className="learn-more-link"
              onClick={() => toast("Comming Soon")}
            >
              Try for free
            </a>
          </div>
          
        </div>
        <div className="footer">
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
          <div className="copyright-msg">
            <p>
              <img
                style={{ width: "55px", marginRight: "2px" }}
                src={imageFile17}
                alt=""
              />
              LinkedIn Corporation &#169; 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
