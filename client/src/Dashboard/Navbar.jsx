import React, { useState } from "react";
import { FaCog, FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">SPN_Panel</div>
        <ul className="nav-links">
          <li>
            <Link to="/dashboard" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/teacher" className="nav-link">
              Teachers
            </Link>
          </li>
          <li>
            <Link to="/enquirymessage" className="nav-link">
              Contact Inquire
            </Link>
          </li>
          <li>
            <Link to="/admissionmessages" className="nav-link">
              Admission Inquire
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="icon-wrapper">
          <FaSearch className="nav-icon" />
        </div>
        <div className="icon-wrapper">
          <FaBell className="nav-icon" />
        </div>
        <div className="icon-wrapper">
          <FaCog className="nav-icon" />
        </div>
        <div className="user-dropdown" onClick={toggleDropdown}>
          <div className="icon-wrapper">
            <FaUserCircle className="nav-icon user-icon" />
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <p className="dropdown-item" onClick={handleLogout}>
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
