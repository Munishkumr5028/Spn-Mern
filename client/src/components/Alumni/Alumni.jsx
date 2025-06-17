import React from "react";
import "./Alumni.css";

const toppers = [
  {
    id: 1,
    name: "Aarav Sharma",
    department: "Computer Science",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    details: "Graduated in 2020. Currently working at Google.",
  },
  {
    id: 2,
    name: "Meera Nair",
    department: "Electronics",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    details: "Graduated in 2021. Working at Intel.",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    department: "Mechanical",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    details: "Graduated in 2019. Mechanical Engineer at Mahindra.",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    department: "Civil Engineering",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    details: "Graduated in 2020. Structural Designer at L&T.",
  },
  {
    id: 5,
    name: "Ankit Verma",
    department: "BCA",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    details: "Graduated in 2021. Working as Software Developer at Infosys.",
  },
  {
    id: 6,
    name: "Kriti Sharma",
    department: "Mathematics",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    details: "Graduated in 2019. Data Analyst at TCS.",
  },
  {
    id: 7,
    name: "Vikram Raj",
    department: "Physics",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    details: "Graduated in 2022. Research Assistant at CERN.",
  },
  {
    id: 8,
    name: "Sanya Kapoor",
    department: "Chemistry",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
    details: "Graduated in 2020. Chemist at Dr. Reddy’s Labs.",
  },
  {
    id: 9,
    name: "Dev Patel",
    department: "History",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    details: "Graduated in 2021. Museum Curator at National Museum.",
  },
  {
    id: 10,
    name: "Neha Bansal",
    department: "Political Science",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    details: "Graduated in 2019. Policy Analyst at UNDP.",
  },
  {
    id: 11,
    name: "Rohan Iyer",
    department: "Economics",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    details: "Graduated in 2020. Economist at World Bank.",
  },
  {
    id: 12,
    name: "Tina Desai",
    department: "English",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    details: "Graduated in 2022. Content Editor at Penguin Publishing.",
  },
  {
    id: 13,
    name: "Arjun Khanna",
    department: "BBA",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    details: "Graduated in 2018. Business Analyst at Deloitte.",
  },
  {
    id: 14,
    name: "Priya Singh",
    department: "MBA",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    details: "Graduated in 2019. Product Manager at Amazon.",
  },
  {
    id: 15,
    name: "Karan Malhotra",
    department: "Zoology",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
    details: "Graduated in 2020. Wildlife Biologist at WWF.",
  },
  {
    id: 16,
    name: "Divya Gupta",
    department: "Botany",
    image: "https://randomuser.me/api/portraits/women/39.jpg",
    details: "Graduated in 2021. Researcher at Botanical Survey of India.",
  },
  {
    id: 17,
    name: "Manav Joshi",
    department: "Statistics",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    details: "Graduated in 2022. Data Scientist at IBM.",
  },
  {
    id: 18,
    name: "Ritika Saini",
    department: "Geography",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    details: "Graduated in 2020. GIS Analyst at ESRI.",
  },
  {
    id: 19,
    name: "Sahil Dubey",
    department: "Philosophy",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    details: "Graduated in 2019. Ethics Consultant at ThoughtWorks.",
  },
  {
    id: 20,
    name: "Nidhi Rawat",
    department: "Sociology",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    details: "Graduated in 2021. Social Researcher at NITI Aayog.",
  },
];

function Alumni() {
  return (
    <div className="students-section">
      <h2 className="students-heading">Our Alumni</h2>
      <div className="students-grid">
        {toppers.map((student) => (
          <div key={student.id} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="student-img-wrapper">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="student-img"
                  />
                </div>
                <h3 className="student-name">{student.name}</h3>
                <p className="student-department">{student.department}</p>
              </div>
              <div className="flip-card-back">
                <h3>{student.name}</h3>
                <p>{student.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alumni;
