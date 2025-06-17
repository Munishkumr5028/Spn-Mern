import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg"
            alt="College Campus"
          />
        </div>
        <div className="about-content">
          <h2>About Our College</h2>
          <p>
            We are a leading institution committed to academic excellence and holistic development. 
            Our campus fosters innovation, creativity, and leadership to shape the future.
          </p>
          <div className="about-tags">
            <span><strong>🎯 Vision:</strong> Empower students to become global leaders.</span>
            <span><strong>💡 Mission:</strong> Provide quality education through cutting-edge teaching.</span>
          </div>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </section>
  )
}

export default About
