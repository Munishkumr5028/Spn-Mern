import React from 'react';
import DashboardLayout from './DashboardLayout';
import { FaEnvelope, FaNewspaper, FaCalendarAlt, FaBullhorn } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1>Welcome College</h1>
      <p>This is your dashboard of College.</p>

      <div className="card-container">
        <div className="dashboard-card email">
          <FaEnvelope className="card-icon" />
          <h3>New Emails</h3>
          <p>5 unread emails</p>
        </div>
        <div className="dashboard-card news">
          <FaNewspaper className="card-icon" />
          <h3>News Posts</h3>
          <p>2 new articles</p>
        </div>
        <div className="dashboard-card event">
          <FaCalendarAlt className="card-icon" />
          <h3>Upcoming Events</h3>
          <p>3 scheduled events</p>
        </div>
        <div className="dashboard-card announcement">
          <FaBullhorn className="card-icon" />
          <h3>Announcements</h3>
          <p>1 new announcement</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
