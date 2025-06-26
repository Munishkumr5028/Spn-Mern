import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="form-container">
          <form id="contactForm" onSubmit={handleSubmit}>
            <h2>Contact Us</h2>

            <div className="contact-group">
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="contact-group">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="contact-group">
              <div className="phone-group">
                <span className="country-code">+91</span>
                <input
                  type="tel"
                  name="phone"
                  maxLength="10"
                  pattern="[0-9]{10}"
                  placeholder="10-digit phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="contact-group">
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Inquiry Type</option>
                <option value="general">General</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="contact-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <button className="contact-btn" type="submit">
              Submit
            </button>
          </form>
        </div>

        <div className="info-container">
          <div className="info-address">
            <h3>Postal Address:</h3>
          <p>
            For Enquiry
            <br />
            Punjab University,
            <br />
            Mukerian - G.T. Road,
            <br />
            Hoshiarpur, Punjab (India), 144522
          </p>

          <h3>For General/ Admission Related Enquiry:</h3>
          <p>
            <strong>Phone:</strong> +91-1824-521360 (General Enquiry)
          </p>
          <p>
            <strong>Phone:</strong> +91-1824-521350 (Admission Enquiry)
          </p>
          <p>
            <strong>Toll Free:</strong> 1800 3001 1600
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
