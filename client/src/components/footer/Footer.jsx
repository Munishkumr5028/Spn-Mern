import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-info">
          <h3>Our Campus</h3>
          <p>
          Panjab University<br />
            Providing quality education since 1882.<br />
            Chandigrah, India
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <div className="links-grid">
            <a href="#">About Us</a>
            <a href="#">Admissions</a>
            <a href="#">Courses</a>
            <a href="#">Placements</a>
            <a href="#">Events</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
            <a href="#">FAQs</a>
          </div>
        </div>

        <div className="footer-map">
          <h3>Find Us</h3>
          <iframe
            src="https://maps.google.com/maps?q=punjab%20university&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
            title="Campus Map"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
       
        <span>© {new Date().getFullYear()} ABC Institute. All rights reserved. </span>
        <span>Made with ❤️ by <strong>Learn_CodeX</strong></span>
      </div>
    </footer>
  );
}

export default Footer;
