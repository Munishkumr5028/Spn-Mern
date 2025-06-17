import React from "react";
import "./students.css";

function InternshipsPlacement() {
  const recruiters = [
    { id: 1, name: "Google" },
    { id: 2, name: "Amazon" },
    { id: 3, name: "Microsoft" },
    { id: 4, name: "TCS" },
    { id: 5, name: "Infosys" },
  ];

  const stats = {
    placementRate: "92%",
    averageSalary: "INR 8 LPA",
    highestSalary: "INR 25 LPA",
    totalOffers: "350+",
  };

  const testimonials = [
    {
      id: 1,
      name: "Rohit Sharma",
      company: "Google",
      quote:
        "The placement cell provided excellent training and support, helping me secure a role at Google!",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop&dpr=1",
    },
    {
      id: 2,
      name: "Neha Gupta",
      company: "Amazon",
      quote:
        "My internship at Amazon turned into a full-time offer, thanks to the college’s strong industry connections.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop&dpr=1",
    },
    {
      id: 3,
      name: "Vikram Singh",
      company: "Microsoft",
      quote:
        "The mock interviews and resume workshops were key to landing my dream job at Microsoft.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop&dpr=1",
    },
  ];

  const applicationSteps = [
    "Register with the Placement Cell via the student portal.",
    "Attend pre-placement training sessions (resume building, interviews).",
    "Apply for internships or placements through the portal.",
    "Participate in campus recruitment drives.",
  ];

  return (
    <section className="internships-section" id="internships-placement">
      <div className="internships-container">
        <h2>Internships & Placement</h2>

        {/* Top Recruiters Section */}
        <div className="internships-group">
          <h3>Top Recruiters</h3>
          <div className="recruiters-grid">
            {recruiters.map((recruiter) => (
              <div key={recruiter.id} className="recruiter-card">
                <h4>{recruiter.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Statistics Section */}
        <div className="internships-group">
          <h3>Placement Statistics</h3>
          <div className="stats-card">
            <div className="stat-item">
              <h4>{stats.placementRate}</h4>
              <p>Placement Rate</p>
            </div>
            <div className="stat-item">
              <h4>{stats.averageSalary}</h4>
              <p>Average Salary</p>
            </div>
            <div className="stat-item">
              <h4>{stats.highestSalary}</h4>
              <p>Highest Salary</p>
            </div>
            <div className="stat-item">
              <h4>{stats.totalOffers}</h4>
              <p>Total Offers</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="internships-group">
          <h3>Student Testimonials</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process Section */}
        <div className="internships-group">
          <h3>How to Apply</h3>
          <div className="apply-card">
            <p className="apply-intro">
              Join our placement program to kickstart your career!
            </p>
            <ul className="apply-steps">
              {applicationSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
            <a href="#contact-placement" className="apply-button">
              Contact Placement Cell
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InternshipsPlacement;
