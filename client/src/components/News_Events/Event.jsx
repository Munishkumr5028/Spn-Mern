import React from 'react';
import './Event.css';

const events = [
  {
    id: 1,
    title: "TechFest 2025",
    date: "Apr 15, 2025",
    description: "Experience innovation with workshops, competitions, and exhibitions."
  },
  {
    id: 2,
    title: "Annual Convocation",
    date: "May 5, 2025",
    description: "Celebrate the achievements of our graduates with pride and joy."
  },
  {
    id: 3,
    title: "Campus Placement Drive",
    date: "Jun 1, 2025",
    description: "Top MNCs hiring students. Don’t miss your dream job!"
  },
];

function Event() {
  return (
    <div className="event-section">
      <div className="event-left">
        <div className="event-overlay">
          <h2>Latest Events & News</h2>
          <p>Stay updated with the latest happenings in our institution.</p>
        </div>
      </div>

      <div className="event-right">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <span>{event.date}</span>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
