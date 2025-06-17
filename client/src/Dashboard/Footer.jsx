import React from "react";
import "./Dashboard.css";

function Footer() {
  return (
    <footer className="footer-container">
      <p>© {new Date().getFullYear()} SPN College. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
