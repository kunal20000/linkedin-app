import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Component }) => {
    const isLoggedIn = JSON.parse(sessionStorage.getItem("loginStatus"));
  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }
  return <div>{Component}</div>;
};

export default ProtectedRoute;
