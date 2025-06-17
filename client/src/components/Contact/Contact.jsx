import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  // Initialize state for form fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Show alert with form data (you can customize this message)
    alert("Form submitted successfully!");

    // Clear form data
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    });
  };

  return (
    <>
    <section className="contact-page">
    <div className="contact-container">
      {/* <!-- Contact Form (Left) --> */}
      <div className="form-container">
        <form id="contactForm">
          <h2>Contact Us</h2>
          
          <div className="contact-group">
          <input type="text" id="name" name="name" placeholder="Enter your full name" required />
          </div>
  
          <div className="contact-group">
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
  
          <div className="contact-group">
          <div className="phone-group">
            <span className="country-code">+91</span>
            <input type="tel" id="phone" name="phone" maxlength="10" pattern="[0-9]{10}" placeholder="10-digit phone number" required />
          </div>
          </div>
  
          <div className="contact-group">
          <select id="inquiry" name="inquiry" required>
            <option className="contact-color" value="">Select Inquiry Type</option>
            <option value="general">General</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          </div>
  
          <div className="contact-group">
          <textarea id="message" name="message" rows="5" placeholder="Type your message here..." required></textarea>
          </div>
  
          <button className="contact-btn" type="submit">Submit</button>
          <div id="responseMessage" className="hidden"></div>
        </form>
      </div>
  
      {/* <!-- Contact Info (Right) --> */}
      <div className="info-container">
        <h3>Postal Address:</h3>
        <p>
          For Enquiry<br />
          Punjab University,<br />
          Mukerian - G.T. Road,<br />
          Hosiharpur, Punjab (India), 144522
        </p>
  
        <h3>For General/ Admission Related Enquiry:</h3>
        <p><strong>Phone:</strong> +91-1824-521360 (General Enquiry)</p>
        <p><strong>Phone:</strong> +91-1824-521350 (Admission Enquiry)</p>
        <p><strong>Toll Free:</strong> 1800 3001 1600</p>
      </div>
    </div>
  </section>
    </>
  );
}

export default Contact;
