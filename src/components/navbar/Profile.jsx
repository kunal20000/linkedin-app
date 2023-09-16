import React, { useState, useRef, useEffect } from "react";
import "./Profile.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Navigate, useNavigate } from "react-router-dom";


const Profile = () => {
  const [showModal, setShowModal] = useState();
  const profileIconRef = useRef(null);
  const navigate = useNavigate(null);

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
      <section>
        <ArrowDropDownIcon />
      </section>
      {showModal && (
        <section className="auth-modal">
          <h4>kunal sapate</h4>
          <hr />
          <div className="upper-div">
            <h4>Account</h4>
            <p>Try Premium for free</p>
            <p>Setting & Privacy</p>
            <p>Help</p>
            <p>Language</p>
          </div>
          <hr />
          <div className="lower-div">
            <h4>Manage</h4>
            <p>Post & Activity</p>
            <p>Job Posting Account</p>
          </div>
          <hr />
          <button className="sign-out-btn" onClick={() => navigate("/Login")}>
            Sign Out
          </button>
        </section>
      )}
    </section>
  );
};

export default Profile;
