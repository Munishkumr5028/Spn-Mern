import React, { useState } from "react";
import "./alumni.css";

function RegisterAlumni() {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    graduationYear: "",
    email: "",
    linkedIn: "",
    currentlyDoing: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., API call)
    console.log("Form submitted:", { ...formData, image });
  };

  const handleClear = () => {
    setFormData({
      name: "",
      department: "",
      graduationYear: "",
      email: "",
      linkedIn: "",
      currentlyDoing: "",
    });
    setImage(null);
  };

  return (
    <section className="alumni-section" id="register-alumni">
      <div className="alumni-container">
        <div className="alumni-card">
          <h2>Alumni Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="department">College Department</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Mathematics">Mathematics</option>
                <option value="English">English</option>
                <option value="History">History</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="graduationYear">Graduation Year</label>
              <select
                id="graduationYear"
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleChange}
                required
              >
                <option value="">Select Year</option>
                {[...Array(20)].map((_, i) => (
                  <option key={i} value={2025 - i}>
                    {2025 - i}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="linkedIn">LinkedIn Profile (Optional)</label>
              <input
                type="url"
                id="linkedIn"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                placeholder="Enter your LinkedIn URL"
              />
            </div>
            <div className="form-group">
              <label htmlFor="currentlyDoing">Currently Doing</label>
              <textarea
                id="currentlyDoing"
                name="currentlyDoing"
                value={formData.currentlyDoing}
                onChange={handleChange}
                placeholder="Describe your current occupation or studies"
                rows="4"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Profile Image</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              {image && (
                <div className="image-preview">
                  <img src={image} alt="Profile Preview" />
                </div>
              )}
            </div>
            <button type="submit" className="submit-button">
              Register
            </button>
            <a href="#clear-form" className="clear-form" onClick={handleClear}>
              Clear Form
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterAlumni;
