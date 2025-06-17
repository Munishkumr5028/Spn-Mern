// src/layouts/DashboardLayout.jsx
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Dashboard.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-section">
        <Navbar />
        <div className="dashboard-content">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
