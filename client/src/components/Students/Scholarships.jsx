import React from "react";
import "./students.css";

function Scholarships() {
  const meritScholarships = [
    {
      id: 1,
      name: "Academic Excellence Scholarship",
      eligibility: "Minimum 90% marks, all departments",
      award: "INR 50,000 per year",
      deadline: "August 15, 2025",
      description:
        "Awarded to top-performing students across all departments for academic excellence.",
      image:
        "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#apply-academic",
    },
    {
      id: 2,
      name: "Merit-Cum-Means Scholarship",
      eligibility: "Minimum 85% marks, family income < INR 5LPA",
      award: "Full tuition waiver",
      deadline: "September 10, 2025",
      description:
        "Supports academically strong students from low-income families.",
      image:
        "https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#apply-merit-means",
    },
  ];

  const needDepartmentalScholarships = [
    {
      id: 3,
      name: "Computer Science Innovation Scholarship",
      eligibility: "BCA students, project proposal required",
      award: "INR 30,000 + mentorship",
      deadline: "October 5, 2025",
      description: "Funds innovative projects by Computer Science students.",
      image:
        "https://images.pexels.com/photos/6147097/pexels-photo-6147097.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#apply-cs-innovation",
    },
    {
      id: 4,
      name: "Physics Research Grant",
      eligibility: "B.Sc Physics students, research interest",
      award: "INR 25,000 for research expenses",
      deadline: "November 1, 2025",
      description: "Supports undergraduate research in Physics.",
      image:
        "https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#apply-physics",
    },
    {
      id: 5,
      name: "Alumni-Funded Need-Based Aid",
      eligibility: "Family income < INR 3LPA, all departments",
      award: "INR 40,000 per year",
      deadline: "September 20, 2025",
      description: "Financial aid funded by alumni for students in need.",
      image:
        "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#apply-alumni-aid",
    },
  ];

  return (
    <section className="scholarships-section" id="scholarships">
      <div className="scholarships-container">
        <h2>Scholarships for Students</h2>
        <div className="scholarships-group">
          <h3>Merit-Based Scholarships</h3>
          <div className="scholarships-grid">
            {meritScholarships.map((scholarship) => (
              <div key={scholarship.id} className="scholarship-card">
                <div className="scholarship-image">
                  <img src={scholarship.image} alt={scholarship.name} />
                </div>
                <div className="scholarship-content">
                  <h4>{scholarship.name}</h4>
                  <p className="scholarship-eligibility">
                    <strong>Eligibility:</strong> {scholarship.eligibility}
                  </p>
                  <p className="scholarship-award">
                    <strong>Award:</strong> {scholarship.award}
                  </p>
                  <p className="scholarship-deadline">
                    <strong>Deadline:</strong> {scholarship.deadline}
                  </p>
                  <p className="scholarship-description">
                    {scholarship.description}
                  </p>
                  <a href={scholarship.link} className="scholarship-button">
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="scholarships-group">
          <h3>Need-Based & Departmental Scholarships</h3>
          <div className="scholarships-grid">
            {needDepartmentalScholarships.map((scholarship) => (
              <div key={scholarship.id} className="scholarship-card">
                <div className="scholarship-image">
                  <img src={scholarship.image} alt={scholarship.name} />
                </div>
                <div className="scholarship-content">
                  <h4>{scholarship.name}</h4>
                  <p className="scholarship-eligibility">
                    <strong>Eligibility:</strong> {scholarship.eligibility}
                  </p>
                  <p className="scholarship-award">
                    <strong>Award:</strong> {scholarship.award}
                  </p>
                  <p className="scholarship-deadline">
                    <strong>Deadline:</strong> {scholarship.deadline}
                  </p>
                  <p className="scholarship-description">
                    {scholarship.description}
                  </p>
                  <a href={scholarship.link} className="scholarship-button">
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scholarships;
