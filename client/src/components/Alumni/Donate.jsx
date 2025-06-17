import React, { useState } from 'react';
import './alumni.css';

function Donate() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    amount: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.amount) {
      alert('Please fill all required fields');
      return;
    }
    // Submit logic goes here (API call or Firebase)
    console.log('Donation submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', amount: '', message: '' });
  };

  return (
    <div className="donate-section">
      <div className="donate-container">
        <h2>Support Our College</h2>
        <p>Your donation helps improve education, infrastructure, and student life.</p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="donate-form">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="amount"
              placeholder="Donation Amount (₹)"
              value={form.amount}
              onChange={handleChange}
              required
              min="1"
            />
            <textarea
              name="message"
              placeholder="Message or Purpose (optional)"
              value={form.message}
              onChange={handleChange}
            />
            <button type="submit">Donate Now</button>
          </form>
        ) : (
          <div className="thank-you">
            <h3>Thank You!</h3>
            <p>Your support means a lot to us. 💖</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Donate;
