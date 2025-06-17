import React from "react";
import "./news.css";

function ExamNotification() {
  const notifications = [
    {
      id: 1,
      title: "Semester End Exam Schedule 2025",
      date: "June 12, 2025",
      department: "All Departments",
      description:
        "The final exam schedule for Semester 2, 2025 is now available for all departments.",
      image:
        "https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#exam-schedule",
    },
    {
      id: 2,
      title: "Admit Cards Released for Mid-Term Exams",
      date: "June 10, 2025",
      department: "Computer Science, Physics",
      description: "Download your admit cards for the upcoming mid-term exams.",
      image:
        "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#admit-cards",
    },
    {
      id: 3,
      title: "Exam Guidelines for Semester 2",
      date: "June 8, 2025",
      department: "All Departments",
      description:
        "Read the updated exam guidelines and rules for Semester 2, 2025.",
      image:
        "https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#exam-guidelines",
    },
    {
      id: 4,
      title: "Supplementary Exam Registration Open",
      date: "June 5, 2025",
      department: "English, Mathematics",
      description: "Register for supplementary exams by June 20, 2025.",
      image:
        "https://images.pexels.com/photos/6147097/pexels-photo-6147097.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#supplementary-exam",
    },
    {
      id: 5,
      title: "Semester 1 Results Announced",
      date: "June 3, 2025",
      department: "All Departments",
      description: "Check your Semester 1 results on the student portal.",
      image:
        "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#semester-results",
    },
  ];

  return (
    <section className="notifications-section" id="exam-notifications">
      <div className="notifications-container">
        <h2>Exam Notifications</h2>
        <div className="notifications-grid">
          {notifications.map((notification) => (
            <div key={notification.id} className="notification-card">
              <div className="notification-image">
                <img src={notification.image} alt={notification.title} />
              </div>
              <div className="notification-content">
                <h4>{notification.title}</h4>
                <p className="notification-date">{notification.date}</p>
                <p className="notification-department">
                  {notification.department}
                </p>
                <p className="notification-description">
                  {notification.description}
                </p>
                <a href={notification.link} className="notification-link">
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExamNotification;
