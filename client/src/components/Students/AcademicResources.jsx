import React from "react";
import "./students.css";

function AcademicResources() {
  const resources = [
    {
      id: 1,
      title: "Lecture Notes",
      description:
        "Access course-specific lecture notes prepared by faculty for all semesters.",
      image:
        "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#lecture-notes",
    },
    {
      id: 2,
      title: "E-Books",
      description:
        "Download digital textbooks and reference materials for your courses.",
      image:
        "https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#e-books",
    },
    {
      id: 3,
      title: "Past Exam Papers",
      description:
        "Practice with previous years’ question papers to prepare for exams.",
      image:
        "https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#exam-papers",
    },
    {
      id: 4,
      title: "Online Learning Platforms",
      description:
        "Explore external platforms like Coursera, edX, and Khan Academy for additional learning.",
      image:
        "https://images.pexels.com/photos/6147097/pexels-photo-6147097.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#online-platforms",
    },
    {
      id: 5,
      title: "Study Guides",
      description:
        "Find concise revision notes and study guides for quick exam preparation.",
      image:
        "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#study-guides",
    },
  ];

  return (
    <section className="resources-section" id="academic-resources">
      <div className="resources-container">
        <h2>Academic Resources for Students</h2>
        <div className="resources-grid">
          {resources.map((resource) => (
            <div key={resource.id} className="resource-card">
              <div className="resource-image">
                <img src={resource.image} alt={resource.title} />
              </div>
              <div className="resource-content">
                <h4>{resource.title}</h4>
                <p className="resource-description">{resource.description}</p>
                <a href={resource.link} className="resource-button">
                  Access Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AcademicResources;
