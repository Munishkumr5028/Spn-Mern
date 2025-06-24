import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Check if token exists
  if (!token) {
    toast.error("Please log in to access the dashboard");
    return <Navigate to="/login" replace />;
  }

  // Optionally, add token validation (e.g., decode JWT to check expiration)
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    if (payload.exp < currentTime) {
      toast.error("Session expired. Please log in again.");
      localStorage.removeItem("token");
      return <Navigate to="/login" replace />;
    }
  } catch (err) {
    toast.error("Invalid token. Please log in again.");
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;