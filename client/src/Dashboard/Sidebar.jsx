import React, { useState } from "react";
import "./Dashboard.css";

import {
  FaTachometerAlt,
  FaUserGraduate,
  FaBookOpen,
  FaChalkboardTeacher,
  FaNewspaper,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  const [openSection, setOpenSection] = useState("");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <div className="sidebar">
      <h2>College Admin </h2>
      <ul>
        <li>
          <Link to= "/dashboard">
          <FaTachometerAlt className="sidebar-icon" />
          Dashboard
          </Link>
        </li>

        <li onClick={() => toggleSection("students")}>
          <FaUserGraduate className="sidebar-icon" />
          Students <FaChevronDown className="chevron" />
        </li>
        {openSection === "students" && (
          <ul className="submenu">
            <li>Add Students</li>
            <li>Delete Students</li>
          </ul>
        )}

        <li onClick={() => toggleSection("courses")}>
          <FaBookOpen className="sidebar-icon" />
          Courses <FaChevronDown className="chevron" />
        </li>
        {openSection === "courses" && (
          <ul className="submenu">
            <li>
              <Link to= "/addcourse">
              Add Course
              </Link>
              </li>
            <li>
              <Link to="/detailscourse">
              Details Course
              </Link>
              </li>
          </ul>
        )}

        <li onClick={() => toggleSection("faculty")}>
          <FaChalkboardTeacher className="sidebar-icon" />
          Faculty <FaChevronDown className="chevron" />
        </li>
        {openSection === "faculty" && (
          <ul className="submenu">
            <li>All Faculty</li>
            <li>Assign Courses</li>
          </ul>
        )}

        <li onClick={() => toggleSection("news")}>
          <FaNewspaper className="sidebar-icon" />
          News <FaChevronDown className="chevron" />
        </li>
        {openSection === "news" && (
          <ul className="submenu">
            <li>
              <Link to= "/addnews">
              Add News</Link>
            </li>
            <li><Link to="/newsdetails">
            Details News</Link>
            </li>
          </ul>
        )}

        <li onClick={() => toggleSection("Alumini")}>
          <FaCalendarAlt className="sidebar-icon" />
          Alumini <FaChevronDown className="chevron" />
        </li>
        {openSection === "Alumini" && (
          <ul className="submenu">
            <li>
              <Link to="/addalumini">
              Add Alumini</Link>
            </li>
            <li>
              <Link to="/aluminisuccess">
              Alumini Success</Link>
            </li>
            <li>Alumini Events</li>
            <li>Alumini Register</li>
            <li>Alumini Donation</li>
          </ul>
        )}
        <li>
          <Link to="/addgallery">
            <FaTachometerAlt className="sidebar-icon" />
            Gallery
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
