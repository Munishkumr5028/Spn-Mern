import React from "react";
import "./Courses.css";
import { Link, useParams } from "react-router-dom";

// Test data: one sample course from each level
const courseList = [
  // Undergraduate (UG)
  {
    id: 1,
    name: "BCA",
    level: "ug",
    image: "https://picsum.photos/seed/bca/300/200",
    description: "Learn computer science, software dev & IT fundamentals.",
  },
  {
    id: 2,
    name: "B.Sc. Computer Science",
    level: "ug",
    image: "https://picsum.photos/seed/bsc/300/200",
    description: "Dive deep into algorithms, networks & programming.",
  },
  {
    id: 3,
    name: "B.A. English",
    level: "ug",
    image: "https://picsum.photos/seed/baeng/300/200",
    description: "Explore literature, linguistics, and creative writing.",
  },
  {
    id: 4,
    name: "B.Com",
    level: "ug",
    image: "https://picsum.photos/seed/bcom/300/200",
    description: "Foundations of commerce, accounting & business law.",
  },
  {
    id: 5,
    name: "BBA",
    level: "ug",
    image: "https://picsum.photos/seed/bba/300/200",
    description: "Management principles, entrepreneurship & strategy.",
  },
  {
    id: 6,
    name: "B.Sc. Agriculture",
    level: "ug",
    image: "https://picsum.photos/seed/agriculture/300/200",
    description: "Crop science, soil study, and sustainable farming.",
  },
  {
    id: 7,
    name: "B.Ed.",
    level: "ug",
    image: "https://picsum.photos/seed/bed/300/200",
    description: "Training future teachers with modern pedagogy.",
  },
  {
    id: 8,
    name: "B.Sc. Nursing",
    level: "ug",
    image: "https://picsum.photos/seed/nursing/300/200",
    description: "Clinical care, human anatomy, and patient health.",
  },
  {
    id: 9,
    name: "B.Pharm",
    level: "ug",
    image: "https://picsum.photos/seed/pharma/300/200",
    description: "Pharmaceutical chemistry and drug development.",
  },
  {
    id: 10,
    name: "B.Tech. Mechanical",
    level: "ug",
    image: "https://picsum.photos/seed/mech/300/200",
    description: "Machines, thermodynamics & manufacturing.",
  },

  // Postgraduate (PG)
  {
    id: 11,
    name: "MBA",
    level: "pg",
    image: "https://picsum.photos/seed/mba/300/200",
    description: "Master leadership, marketing, HR & business ops.",
  },
  {
    id: 12,
    name: "MCA",
    level: "pg",
    image: "https://picsum.photos/seed/mca/300/200",
    description: "Professional degree for software dev & systems.",
  },
  {
    id: 13,
    name: "M.Sc. Chemistry",
    level: "pg",
    image: "https://picsum.photos/seed/chem/300/200",
    description: "Study advanced chemical reactions and research.",
  },
  {
    id: 14,
    name: "M.A. History",
    level: "pg",
    image: "https://picsum.photos/seed/history/300/200",
    description: "In-depth study of Indian and world history.",
  },
  {
    id: 15,
    name: "M.Ed.",
    level: "pg",
    image: "https://picsum.photos/seed/med/300/200",
    description: "Advanced educational practices & research.",
  },
  {
    id: 16,
    name: "M.Sc. Physics",
    level: "pg",
    image: "https://picsum.photos/seed/physics/300/200",
    description: "Study energy, matter, and quantum mechanics.",
  },
  {
    id: 17,
    name: "M.A. English Literature",
    level: "pg",
    image: "https://picsum.photos/seed/maeng/300/200",
    description: "Explore literary theory, criticism, and classics.",
  },
  {
    id: 18,
    name: "M.Com",
    level: "pg",
    image: "https://picsum.photos/seed/mcom/300/200",
    description: "Advanced concepts in commerce and finance.",
  },
  {
    id: 19,
    name: "M.Sc. Mathematics",
    level: "pg",
    image: "https://picsum.photos/seed/math/300/200",
    description: "Dive into abstract algebra and real analysis.",
  },
  {
    id: 20,
    name: "M.Tech. Civil Engineering",
    level: "pg",
    image: "https://picsum.photos/seed/mtcivil/300/200",
    description: "Advanced structural design and construction.",
  },

  // Diploma
  {
    id: 21,
    name: "Diploma in Web Development",
    level: "diploma",
    image: "https://picsum.photos/seed/webdev/300/200",
    description: "HTML, CSS, JavaScript, and React essentials.",
  },
  {
    id: 22,
    name: "Diploma in Graphic Design",
    level: "diploma",
    image: "https://picsum.photos/seed/graphic/300/200",
    description: "Photoshop, Illustrator, and digital design skills.",
  },
  {
    id: 23,
    name: "Diploma in Digital Marketing",
    level: "diploma",
    image: "https://picsum.photos/seed/marketing/300/200",
    description: "SEO, SEM, social media, and analytics.",
  },
  {
    id: 24,
    name: "Diploma in Data Science",
    level: "diploma",
    image: "https://picsum.photos/seed/data/300/200",
    description: "Python, data analysis, and machine learning.",
  },
  {
    id: 25,
    name: "Diploma in Cybersecurity",
    level: "diploma",
    image: "https://picsum.photos/seed/cyber/300/200",
    description: "Network security, encryption, and ethical hacking.",
  },
  {
    id: 26,
    name: "Diploma in Video Editing",
    level: "diploma",
    image: "https://picsum.photos/seed/video/300/200",
    description: "Editing tools, effects, and storytelling techniques.",
  },
  {
    id: 27,
    name: "Diploma in AI & ML",
    level: "diploma",
    image: "https://picsum.photos/seed/aiml/300/200",
    description: "Fundamentals of AI, neural networks, and ML.",
  },
  {
    id: 28,
    name: "Diploma in Animation",
    level: "diploma",
    image: "https://picsum.photos/seed/animation/300/200",
    description: "2D, 3D animation and character rigging basics.",
  },
  {
    id: 29,
    name: "Diploma in Hospitality",
    level: "diploma",
    image: "https://picsum.photos/seed/hotel/300/200",
    description: "Hotel management, etiquette, and guest service.",
  },
  {
    id: 30,
    name: "Diploma in Finance & Accounting",
    level: "diploma",
    image: "https://picsum.photos/seed/finance/300/200",
    description: "Bookkeeping, GST, payroll, and Tally.",
  },
];

function Courses() {
  const { level } = useParams(); // gets 'ug', 'pg', or 'diploma'

  const filteredCourses = level
    ? courseList.filter((course) => course.level === level)
    : courseList;

  return (
    <div className="courses-section">
      <h2 className="courses-heading">
        {level
          ? level === "ug"
            ? "Undergraduate Courses"
            : level === "pg"
            ? "Postgraduate Courses"
            : "Diploma Courses"
          : "Courses Offered"}
      </h2>
      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img
              src={course.image}
              alt={course.name}
              className="course-image"
            />
            <div className="course-info">
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <Link to={`/courses/:level/${course.id}`} className="read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
