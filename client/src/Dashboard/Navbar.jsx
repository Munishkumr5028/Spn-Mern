import React, { useState } from 'react';
import { FaCog, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import './Dashboard.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">SPN_Panel</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Teachers</li>
          <li>Students</li>
          <li>Events</li>
        </ul>
      </div>

      <div className="navbar-right">
        <FaSearch className="nav-icon" />
        <FaBell className="nav-icon" />
        <FaCog className="nav-icon" />
        <div className="user-dropdown" onClick={toggleDropdown}>
          <FaUserCircle className="nav-icon user-icon" />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <p className="dropdown-item">Logout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
