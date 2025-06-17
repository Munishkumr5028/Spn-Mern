import React from "react";
import "./News.css";
import { Link } from "react-router-dom";


const newsList = [
  {
    id: 1,
    title: "AI Workshop Conducted Successfully",
    date: "April 10, 2025",
    summary:
      "A hands-on workshop on Artificial Intelligence was held with over 200 students participating actively.",
    image: "https://picsum.photos/400/250?random=1",
  },
  {
    id: 2,
    title: "National Level Hackathon Winners",
    date: "March 25, 2025",
    summary:
      "Our students secured 1st position at the National Hackathon 2025 hosted by NIT Delhi.",
    image: "https://picsum.photos/400/250?random=2",
  },
  {
    id: 3,
    title: "Seminar on Career Opportunities",
    date: "March 5, 2025",
    summary:
      "Experts from top tech companies shared insights on career paths and emerging technologies.",
    image: "https://picsum.photos/400/250?random=3",
  },
  {
    id: 4,
    title: "Annual Sports Meet Highlights",
    date: "February 20, 2025",
    summary:
      "The college hosted its annual sports meet with thrilling performances and enthusiastic participation.",
    image: "https://picsum.photos/400/250?random=4",
  },
  {
    id: 5,
    title: "Coding Bootcamp Concludes",
    date: "February 12, 2025",
    summary:
      "A week-long coding bootcamp concluded with a project exhibition by the participants.",
    image: "https://picsum.photos/400/250?random=5",
  },
  {
    id: 6,
    title: "Guest Lecture on Cybersecurity",
    date: "January 30, 2025",
    summary:
      "Renowned cybersecurity expert Ankit Fadia addressed students on ethical hacking and security trends.",
    image: "https://picsum.photos/400/250?random=6",
  },
  {
    id: 7,
    title: "Alumni Talk Series Launched",
    date: "January 18, 2025",
    summary:
      "Successful alumni shared their journeys in tech and entrepreneurship in the first of a monthly series.",
    image: "https://picsum.photos/400/250?random=7",
  },
  {
    id: 8,
    title: 'Cultural Fest "Udaan" a Grand Success',
    date: "December 22, 2024",
    summary:
      "The annual cultural fest witnessed vibrant performances, art exhibitions, and enthusiastic crowds.",
    image: "https://picsum.photos/400/250?random=8",
  },
  {
    id: 9,
    title: "Library Digitization Completed",
    date: "December 10, 2024",
    summary:
      "The college library is now fully digitized, enabling easier access to resources and journals.",
    image: "https://picsum.photos/400/250?random=9",
  },
  {
    id: 10,
    title: "Placement Drive 2024 Highlights",
    date: "November 28, 2024",
    summary:
      "Over 300 students received job offers from top companies including Infosys, TCS, and Wipro.",
    image: "https://picsum.photos/400/250?random=10",
  },
];

function News() {
  return (
    <div className="news-section">
      <h2 className="news-heading">Latest College News</h2>
      <div className="news-cards">
        {newsList.map((news) => (
          <div key={news.id} className="news-card">
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-date">{news.date}</div>
            <h3 className="news-title-main">{news.title}</h3>
            <p className="news-summary">{news.summary}</p>
            <Link to={`/news/${news.id}`} className="read-more">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
