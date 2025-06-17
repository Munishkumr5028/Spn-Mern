import React from 'react';
import './courses.css';

function AcademicCalendar() {
  const events = [
    { date: 'July 15, 2025', title: 'Semester 1 Begins' },
    { date: 'August 10, 2025', title: 'Mid-Semester Exams' },
    { date: 'November 25, 2025', title: 'Semester 1 Ends' },
    { date: 'January 10, 2026', title: 'Semester 2 Begins' },
    { date: 'March 15, 2026', title: 'Annual Cultural Fest' },
    { date: 'May 20, 2026', title: 'Final Exams' }
  ];

  return (
    <section className="academic-calendar-section">
      <div className="calendar-container">
        <h2>Academic Calendar</h2>
        <p>Stay updated with key academic dates and events.</p>
        <div className="calendar-grid">
          {events.map((event, index) => (
            <div key={index} className="calendar-card">
              <h3>{event.date}</h3>
              <p>{event.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AcademicCalendar;
