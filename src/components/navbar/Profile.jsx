import React, { useState, useRef, useEffect } from "react";
import "./Profile.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Navigate, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Profile = () => {
  const name = JSON.parse(sessionStorage.getItem("userInfo"));
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
        <div className="auth-modal">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <AccountCircleIcon className="forSvg" />
            <div style={{display:"flex", flexDirection:"column"}}>
            <h6>{name}</h6>
            {/* <p>
              B.Tech Graduate || JAVA || HTML || CSS || Bootstrap || JavaScript
              || Github || React || Redux
            </p> */}
            </div>
          </div>
          <hr />
          <div className="upper-div-main">
            <div className="upper-div">
              <h4>Account</h4>
              <p onClick={()=>navigate("/trypremium")}>Try Premium for free</p>
              <p>Setting & Privacy</p>
              <p>Help</p>
              <p>Language</p>
            </div>
            <hr />
            <div className="lower-div">
              <h4>Manage</h4>
              <p onClick={()=>navigate("/")}>Post & Activity</p>
              <p>Job Posting Account</p>
            </div>
            <hr />
            <button className="sign-out-btn" onClick={() => navigate("/Login")}>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;

// import React, { useState, useRef, useEffect } from "react";
// import "./Profile.css";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { Navigate, useNavigate } from "react-router-dom";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// const Profile = () => {
//   const name = JSON.parse(sessionStorage.getItem("userInfo"));
//   const [showModal, setShowModal] = useState();
//   const profileIconRef = useRef(null);
//   const navigate = useNavigate(null);

//   useEffect(() => {
//     const hideModal = (e) => {
//       if (profileIconRef.current.contains(e.target)) {
//         return;
//       }
//       setShowModal(false);
//     };
//     document.addEventListener("click", hideModal);
//     return () => {
//       document.removeEventListener("click", hideModal);
//     };
//   }, []);

//   return (
//     <section
//       className="profile"
//       onClick={() => setShowModal(!showModal)}
//       ref={profileIconRef}
//     >
//       <section>
//         <ArrowDropDownIcon />
//       </section>
//       {showModal && (
//         <div className="auth-modal">
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               marginLeft: "10px",
//               gap: "0.5rem",
//               marginTop: "1rem",
//             }}
//           >
//             <AccountCircleIcon className="forSvg" />
//             <div style={{ display: "flex", flexDirection: "column" }}>
//               <h6>{name}</h6>
//             </div>
//           </div>
//           <hr />
//           <div className="upper-div-main">
//             <div className="upper-div">
//               <h4>Account</h4>
//               <p>Try Premium for free</p>
//               <p>Setting & Privacy</p>
//               <p>Help</p>
//               <p>Language</p>
//             </div>
//             <hr />
//             <div className="lower-div">
//               <h4>Manage</h4>
//               <p>Post & Activity</p>
//               <p>Job Posting Account</p>
//             </div>
//             <hr />
//             <button className="sign-out-btn" onClick={() => navigate("/Login")}>
//               Sign Out
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Profile;
