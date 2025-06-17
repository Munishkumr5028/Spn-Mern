import React from 'react'
import './about.css'

function Visionmission() {
  return (
    <section className="visionmission-section" id="vision-mission">
      <div className="visionmission-container">
        <div className="visionmission-content">
          <h2>Vision & Mission</h2>
          <p>
            Our institution is dedicated to fostering academic excellence and holistic development. 
            Our vision is to empower students to become global leaders, while our mission is to deliver 
            innovative education that nurtures critical thinking, creativity, and ethical leadership for a brighter future.
          </p>
        </div>
        <div className="visionmission-cards">
          <div className="card">
            <h3>Vision</h3>
            <p>To inspire and empower students to lead with integrity and impact on a global stage.</p>
          </div>
          <div className="card">
            <h3>Mission</h3>
            <p>To provide cutting-edge education that fosters innovation, inclusivity, and lifelong learning.</p>
          </div>
          <div className="card">
            <h3>Values</h3>
            <p>Integrity, excellence, and collaboration drive our commitment to shaping future leaders.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Visionmission