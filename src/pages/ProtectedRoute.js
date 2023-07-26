import React from "react";
import { Navigate } from "react-router-dom";
import { useCustomAuth } from "../authContextStore/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const {user}=useCustomAuth();
  if (!user) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default ProtectedRoute;
