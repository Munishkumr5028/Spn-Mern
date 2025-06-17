import React from "react";
import "./gallery.css";

function WorkshopSeminar() {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI in Healthcare Workshop",
      date: "July 10, 2025",
      type: "Industry",
      speaker: "Dr. Rajesh Kumar, CTO, HealthTech Inc.",
      description: "Explore AI applications in healthcare with hands-on demos.",
      image:
        "https://images.pexels.com/photos/6147097/pexels-photo-6147097.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#register-ai-workshop",
    },
    {
      id: 2,
      title: "Research Seminar on Quantum Computing",
      date: "July 15, 2025",
      type: "Research",
      speaker: "Prof. Anita Sharma, IIT Delhi",
      description: "Learn about advancements in quantum computing research.",
      image:
        "https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#register-quantum-seminar",
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Data Science Bootcamp",
      date: "November 10–12, 2024",
      type: "Professional Development",
      speaker: "Ms. Priya Singh, Data Scientist, Google",
      description: "A 3-day bootcamp on data science techniques and tools.",
      image:
        "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#resources-datascience",
    },
    {
      id: 4,
      title: "Academic Writing Workshop",
      date: "October 5, 2024",
      type: "Academic",
      speaker: "Dr. Sanjay Patel, Panjab University",
      description: "Improve your academic writing skills for research papers.",
      image:
        "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#resources-academicwriting",
    },
    {
      id: 5,
      title: "Industry Trends in Cybersecurity Seminar",
      date: "September 20, 2024",
      type: "Industry",
      speaker: "Mr. Arjun Mehta, Cybersecurity Expert, IBM",
      description:
        "Insights into the latest cybersecurity challenges and solutions.",
      image:
        "https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#resources-cybersecurity",
    },
  ];

  return (
    <section className="events-section" id="workshop-seminar">
      <div className="events-container">
        <h2>Workshops & Seminars</h2>

        {/* Upcoming Events Section */}
        <div className="events-group">
          <h3>Upcoming Workshops & Seminars</h3>
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} loading="lazy" />
                </div>
                <div className="event-content">
                  <span
                    className={`event-type ${
                      event.type === "Academic"
                        ? "type-academic"
                        : event.type === "Industry"
                        ? "type-industry"
                        : event.type === "Research"
                        ? "type-research"
                        : "type-professional"
                    }`}
                  >
                    {event.type}
                  </span>
                  <h4>{event.title}</h4>
                  <p className="event-date">{event.date}</p>
                  <p className="event-speaker">{event.speaker}</p>
                  <p className="event-description">{event.description}</p>
                  <a href={event.link} className="event-link">
                    Register Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events Section */}
        <div className="events-group">
          <h3>Past Workshops & Seminars</h3>
          <div className="events-grid">
            {pastEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} loading="lazy" />
                </div>
                <div className="event-content">
                  <span
                    className={`event-type ${
                      event.type === "Academic"
                        ? "type-academic"
                        : event.type === "Industry"
                        ? "type-industry"
                        : event.type === "Research"
                        ? "type-research"
                        : "type-professional"
                    }`}
                  >
                    {event.type}
                  </span>
                  <h4>{event.title}</h4>
                  <p className="event-date">{event.date}</p>
                  <p className="event-speaker">{event.speaker}</p>
                  <p className="event-description">{event.description}</p>
                  <a href={event.link} className="event-link">
                    View Resources
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

export default WorkshopSeminar;
