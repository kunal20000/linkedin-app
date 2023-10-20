import React, { useState, useRef, useEffect } from "react";
import "./Profile.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Navigate, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const userName = JSON.parse(sessionStorage.getItem("userInfo"));
  const [showModal, setShowModal] = useState();
  const profileIconRef = useRef(null);
  const navigate = useNavigate(null);

  const handleLogout = () => {
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("logInStatus");
    sessionStorage.removeItem("authToken");
    sessionStorage.setItem("loginStatus", JSON.stringify(false));
    navigate("/login");
    setTimeout(() => {
      toast.success("Logged Out Succesfully");
    }, 1000);
  };

  useEffect(() => {
    const hideModal = (e) => {
      if (profileIconRef.current.contains(e.target)) {
        return;
      }
      setShowModal(false);
    };
    document.addEventListener("click", hideModal);
    return () => {
      document.removeEventListener("click", hideModal);
    };
  }, []);

  return (
    <section
      className="profile"
      onClick={() => setShowModal(!showModal)}
      ref={profileIconRef}
    >
      <section className="arrowIconForDropDown">
        <ArrowDropDownIcon style={{ color: "rgba(0,0,0,0.6)" }} />
      </section>
      {showModal && (
        <div className="auth-modal">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",

              marginLeft: "10px",
              gap: "0.5rem",
            }}
          >
            <div className="for-svg-for-name">
              <AccountCircleIcon className="forSvg" />
              <h6 style={{ whiteSpace: "nowrap" }}>{userName}</h6>
            </div>

            {/* <div className="btn-for-name">
              <button
                onClick={() => navigate("/MainProfile")}
                className="view-profile"
              >
                Profile
              </button>
            </div> */}
          </div>
          <hr />
          <div className="upper-div-main">
            <div className="upper-div">
              <h4>Account</h4>
              <p onClick={() => navigate("/trypremium")}>
                Try Premium for free
              </p>
              <p onClick={() => toast.success("Comming Soon")}>
                Setting & Privacy
              </p>
              <p onClick={() => toast.success("Comming Soon")}>Help</p>
              <p onClick={() => toast.success("Comming Soon")}>Language</p>
            </div>
            <hr />
            <div className="lower-div">
              <h4>Manage</h4>
              <p onClick={() => navigate("/")}>Post & Activity</p>
              <p onClick={() => navigate("/")}>Job Posting Account</p>
            </div>
            <hr />
            <button className="sign-out-btn" onClick={handleLogout}>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
