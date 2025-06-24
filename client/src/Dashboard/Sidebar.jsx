import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaBookOpen,
  FaNewspaper,
  FaCalendarAlt,
  FaChevronDown,
  FaImages,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  const [openSection, setOpenSection] = useState(
    () => localStorage.getItem("openSection") || ""
  );

  useEffect(() => {
    localStorage.setItem("openSection", openSection);
  }, [openSection]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const renderDropdown = (section, icon, title, items) => (
    <>
      <li
        onClick={(e) => {
          e.stopPropagation();
          toggleSection(section);
        }}
        className="dropdown-toggle"
      >
        {icon}
        {title}
        <FaChevronDown
          className={`chevron ${openSection === section ? "rotate" : ""}`}
        />
      </li>
      {openSection === section && (
        <ul className="submenu">
          {items.map((item) => (
            <li key={item.path}>
              <Link to={item.path} onClick={() => setOpenSection(section)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );

  const dropdowns = [
    {
      section: "courses",
      icon: <FaBookOpen className="sidebar-icon" />,
      title: "Courses",
      items: [
        { path: "/addcourse", label: "Add Course" },
        { path: "/detailscourse", label: "Details Course" },
        { path: "/feestructure", label: "Fee Structure" },
        { path: "/academiccalendar", label: "Academic Calendar" },
      ],
    },
    {
      section: "gallery",
      icon: <FaImages className="sidebar-icon" />,
      title: "Gallery",
      items: [
        { path: "/addgallery", label: "Campus Images" },
        { path: "/eventgallery", label: "Events & Festivals" },
        { path: "/sportsgallery", label: "Sports Gallery" },
        { path: "/workshopgallery", label: "Workshop & Seminar" },
      ],
    },
    {
      section: "news",
      icon: <FaNewspaper className="sidebar-icon" />,
      title: "News",
      items: [
        { path: "/addnews", label: "Add News" },
        { path: "/newsdetails", label: "Details News" },
        { path: "/latestannouncement", label: "Latest Announcement" },
        { path: "/examnotification", label: "Exam Notification" },
        { path: "/pressrelease", label: "Press Release" },
      ],
    },
    {
      section: "students",
      icon: <FaUserGraduate className="sidebar-icon" />,
      title: "Students",
      items: [
        { path: "/universitytopper", label: "University Topper" },
        { path: "/academicresource", label: "Academic Resource" },
        { path: "/timetable", label: "Timetable" },
        { path: "/attendance", label: "Attendance" },
        { path: "/scholarship", label: "Scholarship" },
        { path: "/internshipplacement", label: "Internship & Placement" },
      ],
    },
    {
      section: "alumini",
      icon: <FaCalendarAlt className="sidebar-icon" />,
      title: "Alumini",
      items: [
        { path: "/addalumini", label: "Add Alumini" },
        { path: "/aluminisuccess", label: "Alumini Success" },
        { path: "/aluminievents", label: "Alumini Events" },
        { path: "/aluminiregister", label: "Alumini Register" },
        { path: "/aluminidonation", label: "Alumini Donation" },
      ],
    },
  ];

  return (
    <div className="sidebar">
      <h2>College Admin</h2>
      <ul>
        <li>
          <Link to="/dashboard">
            <FaTachometerAlt className="sidebar-icon" />
            Dashboard
          </Link>
        </li>
        {dropdowns.map((dropdown) => (
          <React.Fragment key={dropdown.section}>
            {renderDropdown(
              dropdown.section,
              dropdown.icon,
              dropdown.title,
              dropdown.items
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
