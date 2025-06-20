import React, { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaChevronDown,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [showMini, setShowMini] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const location = useLocation();
  const pathname = location.pathname;

  const hideMiniNavbar =
    pathname.startsWith("/courses/") || pathname.startsWith("/news/");

  // Handle scroll for mini navbar visibility
  useEffect(() => {
    if (hideMiniNavbar) {
      setShowMini(false);
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowMini(scrollTop <= lastScrollTop || scrollTop < 100);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, hideMiniNavbar]);

  // ✅ NEW: Handle scroll restore after route change
  useEffect(() => {
    const handleScrollRestore = () => {
      if (!hideMiniNavbar) {
        const scrollTop = window.scrollY;
        setShowMini(scrollTop < 100);
        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
      }
    };

    window.addEventListener("scroll-restored-top", handleScrollRestore);
    return () => {
      window.removeEventListener("scroll-restored-top", handleScrollRestore);
    };
  }, [hideMiniNavbar]);

  // Disable body scrolling when mobile menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const handleMouseEnter = (key) => {
    if (!isMobile) {
      setOpenDropdown(key);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpenDropdown(null);
    }
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
    if (showMenu) setOpenDropdown(null);
  };

  const closeMenu = () => {
    setShowMenu(false);
    setOpenDropdown(null);
  };

  const renderDropdown = (label, key, links) => (
    <div
      className={`dropdown ${openDropdown === key ? "active" : ""}`}
      onMouseEnter={() => handleMouseEnter(key)}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className="dropdown-label"
        onClick={() => isMobile && toggleDropdown(key)}
      >
        {label}
        <FaChevronDown
          className={`dropdown-arrow ${openDropdown === key ? "rotate" : ""}`}
        />
      </span>
      <div className={`dropdown-content ${openDropdown === key ? "show" : ""}`}>
        {links.map(([to, name]) => (
          <Link key={to} to={to} onClick={closeMenu}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {!hideMiniNavbar && (
        <div className={`mini-navbar ${showMini ? "visible" : "hidden"}`}>
          <div className="mini-left">
            <span>
              <FaEnvelope className="icon" /> example@gmail.com
            </span>
            <span>
              <FaMapMarkerAlt className="icon" /> Punjab, India
            </span>
            <span>
              <FaPhoneAlt className="icon" /> +91 98765 43210
            </span>
          </div>
          <div className="mini-right">
            <Link to="#" aria-label="Facebook">
              <FaFacebookF className="icon" />
            </Link>
            <Link to="#" aria-label="Instagram">
              <FaInstagram className="icon" />
            </Link>
            <Link to="#" aria-label="Twitter">
              <FaTwitter className="icon" />
            </Link>
          </div>
        </div>
      )}

      <div className="main-navbar">
        <div className="logo">Panjab University</div>

        <nav className={`nav-links ${showMenu ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          {renderDropdown("About", "about", [
            ["/about/vision-mission", "Vision & Mission"],
            ["/about", "College History"],
            ["/about/president-message", "President Message"],
            ["/about/principal-message", "Principal Message"],
            ["/about/managing-committee", "Managing Committee"],
            ["/contact", "Contact Us"],
          ])}

          {renderDropdown("Courses", "courses", [
            ["/courses/ug", "Undergraduate"],
            ["/courses/pg", "Postgraduate"],
            ["/courses/diploma", "Diploma Courses"],
            ["/courses/admission-process", "Admission Process"],
            ["/courses/fee-structure", "Fee Structure"],
            ["/courses/academic-calendar", "Academic Calendar"],
          ])}

          {renderDropdown("Gallery", "gallery", [
            ["/gallery", "Campus Gallery"],
            ["/gallery/events", "Event & Festival"],
            ["/gallery/sports", "Sports Gallery"],
            ["/gallery/workshop", "Workshop & Seminar"],
          ])}

          {renderDropdown("News", "news", [
            ["/news/latest-announcement", "Latest Announcement"],
            ["/news/exam-notification", "Exam Notification"],
            ["/news/press-release", "Press Release"],
            ["/news", "Event & Happenings"],
          ])}

          {renderDropdown("Students", "students", [
            ["/students/login", "Student Login"],
            ["/students", "University Toppers"],
            ["/students/resources", "Academic Resources"],
            ["/students/timetable", "Timetable"],
            ["/students/attendance", "Attendance"],
            ["/students/scholarships", "Scholarships"],
            ["/students/internships", "Internships & Placement"],
          ])}

          {renderDropdown("Alumni", "alumni", [
            ["/alumni", "Alumni Directory"],
            ["/alumni/stories", "Success Stories"],
            ["/alumni/events", "Alumni Events"],
            ["/alumni/register", "Register as Alumni"],
            ["/alumni/donate", "Donate"],
          ])}

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        <div className="nav-actions">
          <Link to="/admission">
            <button className="admission-btn">Admission</button>
          </Link>
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label={showMenu ? "Close menu" : "Open menu"}
          >
            {showMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
