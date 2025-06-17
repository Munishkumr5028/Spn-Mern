import React from 'react'
import './alumni.css'

function AlumniEvents() {
  const upcomingEvents = [
    {
      id: 1,
      name: 'Annual Alumni Reunion 2025',
      date: 'July 15, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'College Auditorium',
      description: 'Join us for an evening of networking, reminiscing, and celebrating our alumni community. Guest speakers and dinner included.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
      buttonText: 'Register',
      buttonLink: '#register'
    },
    {
      id: 2,
      name: 'Career Mentorship Workshop',
      date: 'August 10, 2025',
      time: '10:00 AM - 1:00 PM',
      location: 'Virtual (Zoom)',
      description: 'Connect with successful alumni mentors to gain insights into career paths and professional growth.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300',
      buttonText: 'Register',
      buttonLink: '#register'
    }
  ]

  const pastEvents = [
    {
      id: 3,
      name: 'Alumni Tech Summit 2024',
      date: 'October 20, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'Tech Park, City',
      description: 'A day of tech talks and innovation showcases by our alumni in the tech industry.',
      image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=300',
      buttonText: 'Learn More',
      buttonLink: '#details'
    },
    {
      id: 4,
      name: 'Alumni Charity Gala 2024',
      date: 'December 5, 2024',
      time: '7:00 PM - 11:00 PM',
      location: 'Grand Hotel',
      description: 'A night of fundraising and celebration to support our scholarship programs.',
      image: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=300',
      buttonText: 'Learn More',
      buttonLink: '#details'
    }
  ]

  return (
    <section className="events-section" id="alumni-events">
      <div className="events-container">
        <h2>Alumni Events</h2>
        <div className="events-group">
          <h3>Upcoming Events</h3>
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.name} />
                </div>
                <div className="event-content">
                  <h4>{event.name}</h4>
                  <p className="event-date">{event.date} | {event.time}</p>
                  <p className="event-location">{event.location}</p>
                  <p className="event-description">{event.description}</p>
                  <a href={event.buttonLink} className="event-button">{event.buttonText}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="events-group">
          <h3>Past Events</h3>
          <div className="events-grid">
            {pastEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.name} />
                </div>
                <div className="event-content">
                  <h4>{event.name}</h4>
                  <p className="event-date">{event.date} | {event.time}</p>
                  <p className="event-location">{event.location}</p>
                  <p className="event-description">{event.description}</p>
                  <a href={event.buttonLink} className="event-button">{event.buttonText}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlumniEvents