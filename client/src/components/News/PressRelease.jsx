import React from "react";
import "./news.css";

function PressRelease() {
  const pressReleases = [
    {
      id: 1,
      title: "Panjab University Partners with Tech Giant for AI Research",
      date: "June 15, 2025",
      category: "Research",
      summary:
        "A new collaboration to advance AI research with industry leader.",
      image:
        "https://images.pexels.com/photos/6147097/pexels-photo-6147097.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#ai-research",
    },
    {
      id: 2,
      title: "Annual Convocation 2025 Celebrates 500+ Graduates",
      date: "June 12, 2025",
      category: "Events",
      summary: "Panjab University’s convocation honors outstanding students.",
      image:
        "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#convocation-2025",
    },
    {
      id: 3,
      title: "Faculty Member Receives National Award for Excellence",
      date: "June 10, 2025",
      category: "Awards",
      summary: "Dr. Anita Sharma honored for contributions to education.",
      image:
        "https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#faculty-award",
    },
    {
      id: 4,
      title: "University Launches Community Outreach Program",
      date: "June 8, 2025",
      category: "Community",
      summary:
        "New initiative to support local schools with educational resources.",
      image:
        "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#community-outreach",
    },
    {
      id: 5,
      title: "New Research Center for Sustainable Energy Opens",
      date: "June 5, 2025",
      category: "Research",
      summary:
        "State-of-the-art facility to drive sustainable energy innovation.",
      image:
        "https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#research-center",
    },
  ];

  return (
    <section className="press-releases-section" id="press-releases">
      <div className="press-releases-container">
        <h2>Press Releases</h2>
        <div className="press-releases-grid">
          {pressReleases.map((pressRelease) => (
            <div key={pressRelease.id} className="press-release-card">
              <div className="press-release-image">
                <img src={pressRelease.image} alt={pressRelease.title} />
              </div>
              <div className="press-release-content">
                <span
                  className={`press-release-category ${
                    pressRelease.category === "Research"
                      ? "category-research"
                      : pressRelease.category === "Events"
                      ? "category-events"
                      : pressRelease.category === "Awards"
                      ? "category-awards"
                      : "category-community"
                  }`}
                >
                  {pressRelease.category}
                </span>
                <h4>{pressRelease.title}</h4>
                <p className="press-release-date">{pressRelease.date}</p>
                <p className="press-release-summary">{pressRelease.summary}</p>
                <a href={pressRelease.link} className="press-release-link">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PressRelease;
