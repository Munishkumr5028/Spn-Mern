import React from "react";
import "./alumni.css";

function SuccessStories() {
  const successStories = [
    {
      id: 1,
      name: "Priya Sharma",
      designation: "Software Engineer",
      company: "Google",
      story:
        "Priya graduated with a BCA in 2018 and now leads a team at Google, contributing to AI-driven projects.",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop&dpr=1",
      link: "#priya-story",
    },
    {
      id: 2,
      name: "Rahul Verma",
      designation: "Data Scientist",
      company: "Amazon",
      story:
        "Rahul’s B.Sc in Mathematics (2017) paved the way for his role at Amazon, where he optimizes logistics.",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop&dpr=1",
      link: "#rahul-story",
    },
    {
      id: 3,
      name: "Anita Desai",
      designation: "Author & Historian",
      company: "Published Author",
      story:
        "Anita (BA History, 2015) published a bestselling book on Indian history, earning global acclaim.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop&dpr=1",
      link: "#anita-story",
    },
    {
      id: 4,
      name: "Vikram Singh",
      designation: "Entrepreneur",
      company: "Founder, TechStartup",
      story:
        "Vikram (BCA, 2016) founded a tech startup that secured $5M in funding within two years.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop&dpr=1",
      link: "#vikram-story",
    },
     {
      id: 5,
      name: "Anita Desai",
      designation: "Author & Historian",
      company: "Published Author",
      story:
        "Anita (BA History, 2015) published a bestselling book on Indian history, earning global acclaim.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop&dpr=1",
      link: "#anita-story",
    },
    {
      id: 6,
      name: "Vikram Singh",
      designation: "Entrepreneur",
      company: "Founder, TechStartup",
      story:
        "Vikram (BCA, 2016) founded a tech startup that secured $5M in funding within two years.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=120&h=120&fit=crop&dpr=1",
      link: "#vikram-story",
    },
  ];

  return (
    <section className="stories-section" id="success-stories">
      <div className="stories-container">
        <h2>Alumni Success Stories</h2>
        <div className="stories-grid">
          {successStories.map((story) => (
            <div key={story.id} className="story-card">
              <div className="story-image">
                <img src={story.image} alt={story.name} />
              </div>
              <div className="story-content">
                <h4>{story.name}</h4>
                <p className="story-designation">
                  {story.designation} at {story.company}
                </p>
                <p className="story-text">{story.story}</p>
                <a href={story.link} className="story-link">
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

export default SuccessStories;
