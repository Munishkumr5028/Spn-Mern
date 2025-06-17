import React from "react";
import "./news.css";

function LatestAnnouncement() {
  const announcements = [
    {
      id: 1,
      title: "Mid-Semester Exam Schedule Released",
      date: "June 10, 2025",
      category: "Academic",
      description:
        "The schedule for mid-semester exams for all departments is now available.",
      image:
        "https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#exam-schedule",
    },
    {
      id: 2,
      title: "Annual Cultural Fest 2025 Announced",
      date: "June 8, 2025",
      category: "Events",
      description:
        "Join us for the Annual Cultural Fest on July 15–17, 2025. Register now!",
      image:
        "https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#cultural-fest",
    },
    {
      id: 3,
      title: "Library Hours Extended",
      date: "June 5, 2025",
      category: "Administrative",
      description: "Library hours extended to 10 PM starting June 10, 2025.",
      image:
        "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#library-hours",
    },
    {
      id: 4,
      title: "Guest Lecture on AI by Industry Expert",
      date: "June 3, 2025",
      category: "Events",
      description:
        "Attend a guest lecture on AI advancements on June 12, 2025.",
      image:
        "https://images.pexels.com/photos/6147097/pexels-photo-6147097.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#guest-lecture",
    },
    {
      id: 5,
      title: "Scholarship Application Deadline",
      date: "May 30, 2025",
      category: "Academic",
      description: "Apply for merit-based scholarships by June 15, 2025.",
      image:
        "https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#scholarship-deadline",
    },
  ];

  return (
    <section className="announcements-section" id="latest-announcements">
      <div className="announcements-container">
        <h2>Latest Announcements</h2>
        <div className="announcements-grid">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="announcement-card">
              <div className="announcement-image">
                <img src={announcement.image} alt={announcement.title} />
              </div>
              <div className="announcement-content">
                <span
                  className={`announcement-category ${
                    announcement.category === "Academic"
                      ? "category-academic"
                      : announcement.category === "Events"
                      ? "category-events"
                      : "category-admin"
                  }`}
                >
                  {announcement.category}
                </span>
                <h4>{announcement.title}</h4>
                <p className="announcement-date">{announcement.date}</p>
                <p className="announcement-description">
                  {announcement.description}
                </p>
                <a href={announcement.link} className="announcement-link">
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

export default LatestAnnouncement;
