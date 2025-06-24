import React, { useEffect, useState } from "react";
import { getDashboardData } from "../../api/authApi"; // Import API function
import DashboardLayout from "./DashboardLayout";
import {
  FaEnvelope,
  FaNewspaper,
  FaCalendarAlt,
  FaBullhorn,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    emails: 0,
    news: 0,
    events: 0,
    announcements: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDashboardData();
        setDashboardData(res.data);
      } catch (err) {
        toast.error(
          err.response?.data?.message || "Failed to load dashboard data"
        );
      }
    };
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <h1>Welcome College</h1>
      <p>This is your dashboard of College.</p>

      <div className="card-container">
        <div className="dashboard-card email">
          <FaEnvelope className="card-icon" />
          <h3>New Emails</h3>
          <p>{dashboardData.emails} unread emails</p>
        </div>
        <div className="dashboard-card news">
          <FaNewspaper className="card-icon" />
          <h3>News Posts</h3>
          <p>{dashboardData.news} new articles</p>
        </div>
        <div className="dashboard-card event">
          <FaCalendarAlt className="card-icon" />
          <h3>Upcoming Events</h3>
          <p>{dashboardData.events} scheduled events</p>
        </div>
        <div className="dashboard-card announcement">
          <FaBullhorn className="card-icon" />
          <h3>Announcements</h3>
          <p>{dashboardData.announcements} new announcement</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
