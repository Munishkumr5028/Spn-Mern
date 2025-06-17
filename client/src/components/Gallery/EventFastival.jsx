import React from "react";
import "./gallery.css";

function EventFestival() {
  const upcomingEvents = [
    {
      id: 1,
      title: "TechFest 2025",
      date: "July 15–17, 2025",
      type: "Technical",
      description:
        "A national-level technical symposium with workshops and competitions.",
      image:
        "https://images.pexels.com/photos/6147097/pexels-photo-6147097.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#register-techfest",
    },
    {
      id: 2,
      title: "Cultural Fest 2025",
      date: "August 10–12, 2025",
      type: "Cultural",
      description:
        "Celebrate diversity with music, dance, and art performances.",
      image:
        "https://images.pexels.com/photos/6147097/pexels-photo-6147097.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#register-culturalfest",
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Sports Meet 2024",
      date: "November 5–7, 2024",
      type: "Sports",
      description: "Annual sports meet with inter-departmental competitions.",
      image:
        "https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#gallery-sportsmeet",
    },
    {
      id: 4,
      title: "Community Service Day 2024",
      date: "October 15, 2024",
      type: "Community",
      description:
        "Students and faculty volunteered for local community projects.",
      image:
        "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#gallery-communityday",
    },
    {
      id: 5,
      title: "TechFest 2024",
      date: "July 20–22, 2024",
      type: "Technical",
      description: "A successful technical fest with over 1000 participants.",
      image:
        "https://images.pexels.com/photos/6325984/pexels-photo-6325984.jpeg?auto=compress&cs=tinysrgb&w=300",
      link: "#gallery-techfest2024",
    },
  ];

  return (
    <section className="events-section" id="event-festival">
      <div className="events-container">
        <h2>Events & Festivals</h2>

        {/* Upcoming Events Section */}
        <div className="events-group">
          <h3>Upcoming Events</h3>
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-content">
                  <span
                    className={`event-type ${
                      event.type === "Cultural"
                        ? "type-cultural"
                        : event.type === "Technical"
                        ? "type-technical"
                        : event.type === "Sports"
                        ? "type-sports"
                        : "type-community"
                    }`}
                  >
                    {event.type}
                  </span>
                  <h4>{event.title}</h4>
                  <p className="event-date">{event.date}</p>
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
          <h3>Past Events</h3>
          <div className="events-grid">
            {pastEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-content">
                  <span
                    className={`event-type ${
                      event.type === "Cultural"
                        ? "type-cultural"
                        : event.type === "Technical"
                        ? "type-technical"
                        : event.type === "Sports"
                        ? "type-sports"
                        : "type-community"
                    }`}
                  >
                    {event.type}
                  </span>
                  <h4>{event.title}</h4>
                  <p className="event-date">{event.date}</p>
                  <p className="event-description">{event.description}</p>
                  <a href={event.link} className="event-link">
                    View Gallery
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

export default EventFestival;
