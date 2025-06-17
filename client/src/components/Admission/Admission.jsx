import React, { useState } from 'react';
import './Admission.css';

function Admission() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    mobile: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', mobile: '' };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
      valid = false;
    }

    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted:', formData);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        subject: '',
      });
    }
  };

  return (
    <>
    <div className="container">
    <div className="admission-login">
      <h2>Student Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            required
            placeholder="Student Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            required
            placeholder="Student Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <div className="mobile-wrapper">
            <select id="countryCode" className="country-code" disabled>
              <option value="+91" selected>+91</option>
            </select>
            <input
              type="tel"
              name="mobile"
              maxLength="10"
              required
              placeholder="Student Mobile Number *"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          {errors.mobile && <div className="error">{errors.mobile}</div>}
        </div>

        <div className="form-group">
          <select name="subject" required value={formData.subject} onChange={handleChange}>
            <option value="">--Select Subject--</option>
            <option value="BCA">BCA</option>
            <option value="B.Sc. Computer Science">B.Sc. Computer Science</option>
            <option value="B.A. English">B.A. English</option>
            <option value="B.Com">B.Com</option>
            <option value="BBA">BBA</option>
            <option value="B.Sc.">B.Sc.</option>
            <option value="B.A.">B.A.</option>
            <option value="B.Sc.Medical">B.Sc. Medical</option>
            <option value="M.A.History">M.A. History</option>
            <option value="M.A.English">M.A. English</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
            <option value="M.Com.">M.Com.</option>
            <option value="M.Sc.Mathematics">M.Sc. Mathematics</option>
            <option value="M.Sc.Physics">M.Sc. Physics</option>
            <option value="M.Sc.Chemistry">M.Sc. Chemistry</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default Admission;
