import React from "react";
import { Link, useParams } from "react-router-dom"; // Import useParams
import "./CourseDetails.css";

const courseData = [
  {
    id: 1,
    title: "Bachelor of Computer Applications",
    description:
      "This course is designed to provide students with foundational knowledge and practical skills in programming, problem-solving, and software development. It includes topics like data structures, web development, and computer mathematics.",
    objectives: [
      "To provide a sound knowledge in key areas of Computer Applications.",
      "To provide practical-oriented learning.",
      "To provide knowledge skills in software industry, in Government Sector, banking sector, and E-commerce.",
    ],
    duration: {
      min: "3 Years",
      max: "6 Years",
    },
    fees: [
      { semester: 1, amount: 20000 },
      { semester: 2, amount: 20000 },
      { semester: 3, amount: 22000 },
      { semester: 4, amount: 20000 },
      { semester: 5, amount: 22000 },
      { semester: 6, amount: 20000 },
    ],
  },
  {
    id: 2,
    title: "Bachelor of Science in Computer Science",
    description:
      "This course provides a comprehensive understanding of IT systems, focusing on software engineering, network security, and data analysis.",
    objectives: [
      "To offer a strong foundation in IT systems.",
      "To focus on the practical application of IT concepts.",
      "To prepare students for careers in software engineering, data analysis, and cybersecurity.",
    ],
    duration: {
      min: "3 Years",
      max: "6 Years",
    },
    fees: [
      { semester: 1, amount: 25000 },
      { semester: 2, amount: 25000 },
      { semester: 3, amount: 26000 },
      { semester: 4, amount: 25000 },
      { semester: 5, amount: 26000 },
      { semester: 6, amount: 25000 },
    ],
  },
  {
    id: 3,
    title: "Bachelor of Arts in English",
    description:
      "This course covers literature, linguistics, and creative writing, helping students to become well-versed in language and literature.",
    objectives: [
      "To provide a solid foundation in English language and literature.",
      "To improve creative writing and communication skills.",
      "To prepare students for careers in teaching, journalism, and writing.",
    ],
    duration: {
      min: "3 Years",
      max: "6 Years",
    },
    fees: [
      { semester: 1, amount: 18000 },
      { semester: 2, amount: 18000 },
      { semester: 3, amount: 19000 },
      { semester: 4, amount: 18000 },
      { semester: 5, amount: 19000 },
      { semester: 6, amount: 18000 },
    ],
  },
  {
    id: 4,
    title: "Bachelor of Commerce",
    description:
      "Foundations of commerce, accounting & business law, focusing on the financial aspects of business and the functioning of the economy.",
    objectives: [
      "To develop a deep understanding of accounting principles and business laws.",
      "To equip students with practical skills for business and commerce.",
      "To prepare students for careers in finance, accounting, and business management.",
    ],
    duration: {
      min: "3 Years",
      max: "6 Years",
    },
    fees: [
      { semester: 1, amount: 19000 },
      { semester: 2, amount: 19000 },
      { semester: 3, amount: 20000 },
      { semester: 4, amount: 19000 },
      { semester: 5, amount: 20000 },
      { semester: 6, amount: 19000 },
    ],
  },
  {
    id: 5,
    title: "Master of Arts in History",
    description:
      "In-depth study of Indian and world history, exploring major events, people, and ideologies that shaped the world.",
    objectives: [
      "To gain a deep understanding of history and its impact on modern society.",
      "To analyze historical events, theories, and their influence on contemporary issues.",
      "To prepare students for careers in research, academia, and history-related fields.",
    ],
    duration: {
      min: "2 Years",
      max: "4 Years",
    },
    fees: [
      { semester: 1, amount: 25000 },
      { semester: 2, amount: 25000 },
      { semester: 3, amount: 26000 },
      { semester: 4, amount: 25000 },
    ],
  },
  {
    id: 6,
    title: "Master of Science in Chemistry",
    description:
      "Study advanced chemical reactions, molecular chemistry, and cutting-edge research in various branches of chemistry.",
    objectives: [
      "To gain in-depth knowledge of chemistry and its applications.",
      "To conduct advanced experiments and research in chemical sciences.",
      "To prepare students for careers in research, industry, and academia.",
    ],
    duration: {
      min: "2 Years",
      max: "4 Years",
    },
    fees: [
      { semester: 1, amount: 30000 },
      { semester: 2, amount: 30000 },
      { semester: 3, amount: 31000 },
      { semester: 4, amount: 30000 },
    ],
  },
  {
    id: 7,
    title: "Bachelor of Business Administration",
    description:
      "Management principles, entrepreneurship, and strategy are core focuses, providing foundational knowledge for careers in business.",
    objectives: [
      "To develop leadership and managerial skills in students.",
      "To offer knowledge on business operations and entrepreneurship.",
      "To prepare students for careers in management, entrepreneurship, and consulting.",
    ],
    duration: {
      min: "3 Years",
      max: "6 Years",
    },
    fees: [
      { semester: 1, amount: 23000 },
      { semester: 2, amount: 23000 },
      { semester: 3, amount: 24000 },
      { semester: 4, amount: 23000 },
      { semester: 5, amount: 24000 },
      { semester: 6, amount: 23000 },
    ],
  },
  {
    id: 8,
    title: "Master of Business Administration",
    description:
      "Master leadership, marketing, HR, and business operations to excel in global business environments.",
    objectives: [
      "To develop strategic management and leadership skills.",
      "To enhance marketing, HR, and operations management expertise.",
      "To prepare students for top-tier leadership roles in organizations.",
    ],
    duration: {
      min: "2 Years",
      max: "4 Years",
    },
    fees: [
      { semester: 1, amount: 35000 },
      { semester: 2, amount: 35000 },
      { semester: 3, amount: 36000 },
      { semester: 4, amount: 35000 },
    ],
  },
  {
    id: 9,
    title: "Master of Computer Applications",
    description:
      "Professional degree for software development, focusing on advanced computer applications and systems management.",
    objectives: [
      "To build a strong foundation in software development and systems management.",
      "To equip students with the skills needed for IT industry roles.",
      "To prepare students for careers in software engineering, application development, and systems management.",
    ],
    duration: {
      min: "2 Years",
      max: "4 Years",
    },
    fees: [
      { semester: 1, amount: 30000 },
      { semester: 2, amount: 30000 },
      { semester: 3, amount: 31000 },
      { semester: 4, amount: 30000 },
    ],
  },
  {
    id: 10,
    title: "Bachelor of Science in Agriculture",
    description:
      "Focuses on crop science, soil study, and sustainable farming techniques, preparing students for careers in agriculture.",
    objectives: [
      "To provide knowledge of sustainable farming practices.",
      "To develop expertise in crop science and soil management.",
      "To prepare students for careers in farming, agricultural technology, and agribusiness.",
    ],
    duration: {
      min: "3 Years",
      max: "6 Years",
    },
    fees: [
      { semester: 1, amount: 20000 },
      { semester: 2, amount: 20000 },
      { semester: 3, amount: 21000 },
      { semester: 4, amount: 20000 },
      { semester: 5, amount: 21000 },
      { semester: 6, amount: 20000 },
    ],
  },
  {
    id: 11,
    title: "Bachelor of Education",
    description:
      "Training future teachers in modern pedagogy, educational psychology, and instructional techniques.",
    objectives: [
      "To develop the skills necessary for effective teaching.",
      "To offer knowledge on educational theories and practices.",
      "To prepare students for careers in teaching and educational leadership.",
    ],
    duration: {
      min: "3 Years",
      max: "6 Years",
    },
    fees: [
      { semester: 1, amount: 22000 },
      { semester: 2, amount: 22000 },
      { semester: 3, amount: 23000 },
      { semester: 4, amount: 22000 },
      { semester: 5, amount: 23000 },
      { semester: 6, amount: 22000 },
    ],
  },
  {
    id: 12,
    title: "Master of Education",
    description:
      "Advanced educational practices and research with a focus on curriculum development and education leadership.",
    objectives: [
      "To provide in-depth knowledge of advanced educational practices.",
      "To develop leadership skills for educational institutions.",
      "To prepare students for roles in educational policy-making and research.",
    ],
    duration: {
      min: "2 Years",
      max: "4 Years",
    },
    fees: [
      { semester: 1, amount: 25000 },
      { semester: 2, amount: 25000 },
      { semester: 3, amount: 26000 },
      { semester: 4, amount: 25000 },
    ],
  },
  {
    id: 13,
    title: "Bachelor of Science in Nursing",
    description:
      "Focus on clinical care, human anatomy, and patient health, preparing students for a career in nursing and healthcare.",
    objectives: [
      "To provide a comprehensive understanding of nursing practices.",
      "To equip students with the skills needed for patient care and medical assistance.",
      "To prepare students for careers in hospitals, clinics, and other healthcare settings.",
    ],
    duration: {
      min: "3 Years",
      max: "6 Years",
    },
    fees: [
      { semester: 1, amount: 23000 },
      { semester: 2, amount: 23000 },
      { semester: 3, amount: 24000 },
      { semester: 4, amount: 23000 },
      { semester: 5, amount: 24000 },
      { semester: 6, amount: 23000 },
    ],
  },
  {
    id: 14,
    title: "Bachelor of Pharmacy",
    description:
      "Pharmaceutical chemistry, drug development, and patient care with a focus on preparing students for pharmaceutical careers.",
    objectives: [
      "To provide knowledge of pharmaceutical chemistry and drug design.",
      "To prepare students for roles in drug development and healthcare.",
      "To equip students for careers in the pharmaceutical and healthcare industries.",
    ],
    duration: {
      min: "3 Years",
      max: "6 Years",
    },
    fees: [
      { semester: 1, amount: 24000 },
      { semester: 2, amount: 24000 },
      { semester: 3, amount: 25000 },
      { semester: 4, amount: 24000 },
      { semester: 5, amount: 25000 },
      { semester: 6, amount: 24000 },
    ],
  },
  {
    id: 15,
    title: "Master of Science in Physics",
    description:
      "Study energy, matter, and quantum mechanics, with advanced research and practical applications in physics.",
    objectives: [
      "To provide a deep understanding of the principles of physics.",
      "To develop skills for conducting advanced scientific research.",
      "To prepare students for careers in physics research, academia, and industry.",
    ],
    duration: {
      min: "2 Years",
      max: "4 Years",
    },
    fees: [
      { semester: 1, amount: 28000 },
      { semester: 2, amount: 28000 },
      { semester: 3, amount: 29000 },
      { semester: 4, amount: 28000 },
    ],
  },
  {
    id: 16,
    title: "Bachelor of Arts in Psychology",
    description:
      "Understand human behavior, mental health, and psychological theories, preparing students for careers in mental health care and research.",
    objectives: [
      "To explore psychological theories and practices.",
      "To develop skills in understanding human behavior and mental health.",
      "To prepare students for careers in psychology, counseling, and research.",
    ],
    duration: {
      min: "3 Years",
      max: "6 Years",
    },
    fees: [
      { semester: 1, amount: 21000 },
      { semester: 2, amount: 21000 },
      { semester: 3, amount: 22000 },
      { semester: 4, amount: 21000 },
      { semester: 5, amount: 22000 },
      { semester: 6, amount: 21000 },
    ],
  },
  {
    id: 17,
    title: "Bachelor of Technology in Civil Eng.",
    description:
      "Structures, construction, and urban development, focusing on civil engineering principles and practices for building infrastructure.",
    objectives: [
      "To provide knowledge on civil engineering principles and practices.",
      "To equip students with skills in construction, design, and project management.",
      "To prepare students for careers in civil engineering and infrastructure development.",
    ],
    duration: {
      min: "4 Years",
      max: "6 Years",
    },
    fees: [
      { semester: 1, amount: 35000 },
      { semester: 2, amount: 35000 },
      { semester: 3, amount: 36000 },
      { semester: 4, amount: 35000 },
      { semester: 5, amount: 36000 },
      { semester: 6, amount: 35000 },
    ],
  },
  {
    id: 18,
    title: "Bachelor of Technology in Mechanical Eng.",
    description:
      "Study machines, thermodynamics, and manufacturing processes, preparing students for careers in mechanical engineering.",
    objectives: [
      "To provide a strong foundation in mechanical engineering principles.",
      "To develop practical skills in machine design, thermodynamics, and manufacturing.",
      "To prepare students for careers in mechanical engineering, manufacturing, and R&D.",
    ],
    duration: {
      min: "4 Years",
      max: "6 Years",
    },
    fees: [
      { semester: 1, amount: 35000 },
      { semester: 2, amount: 35000 },
      { semester: 3, amount: 36000 },
      { semester: 4, amount: 35000 },
      { semester: 5, amount: 36000 },
      { semester: 6, amount: 35000 },
    ],
  },
  {
    id: 19,
    title: "Bachelor of Technology in Electrical Eng.",
    description:
      "Focus on circuits, power systems, and electronics, preparing students for careers in electrical engineering and electronics.",
    objectives: [
      "To provide knowledge in electrical engineering principles, circuits, and power systems.",
      "To equip students with skills in electrical design, electronics, and power systems management.",
      "To prepare students for careers in electrical engineering, electronics, and power generation.",
    ],
    duration: {
      min: "4 Years",
      max: "6 Years",
    },
    fees: [
      { semester: 1, amount: 35000 },
      { semester: 2, amount: 35000 },
      { semester: 3, amount: 36000 },
      { semester: 4, amount: 35000 },
      { semester: 5, amount: 36000 },
      { semester: 6, amount: 35000 },
    ],
  },
  {
    id: 20,
    title: "Diploma in Web Development",
    description:
      "Build modern websites using HTML, CSS, JavaScript, and React, preparing students for entry-level web development roles.",
    objectives: [
      "To provide a foundation in web development technologies and practices.",
      "To teach students how to build responsive, dynamic websites using HTML, CSS, and JavaScript.",
      "To prepare students for careers in web development and front-end development using modern tools like React.",
    ],
    duration: {
      min: "1 Year",
      max: "2 Years",
    },
    fees: [
      { semester: 1, amount: 15000 },
      { semester: 2, amount: 15000 },
    ],
  },
  {
    id: 21,
    title: "Diploma in Web Development",
    description:
      "Build modern websites using HTML, CSS, JavaScript, and React, preparing students for entry-level web development roles.",
    objectives: [
      "To provide a foundation in web development technologies and practices.",
      "To teach students how to build responsive, dynamic websites using HTML, CSS, and JavaScript.",
      "To prepare students for careers in web development and front-end development using modern tools like React.",
    ],
    duration: {
      min: "1 Year",
      max: "2 Years",
    },
    fees: [
      { semester: 1, amount: 15000 },
      { semester: 2, amount: 15000 },
    ],
  },
  {
    id: 22,
    title: "Diploma in Web Development",
    description:
      "Build modern websites using HTML, CSS, JavaScript, and React, preparing students for entry-level web development roles.",
    objectives: [
      "To provide a foundation in web development technologies and practices.",
      "To teach students how to build responsive, dynamic websites using HTML, CSS, and JavaScript.",
      "To prepare students for careers in web development and front-end development using modern tools like React.",
    ],
    duration: {
      min: "1 Year",
      max: "2 Years",
    },
    fees: [
      { semester: 1, amount: 15000 },
      { semester: 2, amount: 15000 },
    ],
  },
  {
    id: 23,
    title: "Diploma in Web Development",
    description:
      "Build modern websites using HTML, CSS, JavaScript, and React, preparing students for entry-level web development roles.",
    objectives: [
      "To provide a foundation in web development technologies and practices.",
      "To teach students how to build responsive, dynamic websites using HTML, CSS, and JavaScript.",
      "To prepare students for careers in web development and front-end development using modern tools like React.",
    ],
    duration: {
      min: "1 Year",
      max: "2 Years",
    },
    fees: [
      { semester: 1, amount: 15000 },
      { semester: 2, amount: 15000 },
    ],
  },
  {
    id: 24,
    title: "Diploma in Web Development",
    description:
      "Build modern websites using HTML, CSS, JavaScript, and React, preparing students for entry-level web development roles.",
    objectives: [
      "To provide a foundation in web development technologies and practices.",
      "To teach students how to build responsive, dynamic websites using HTML, CSS, and JavaScript.",
      "To prepare students for careers in web development and front-end development using modern tools like React.",
    ],
    duration: {
      min: "1 Year",
      max: "2 Years",
    },
    fees: [
      { semester: 1, amount: 15000 },
      { semester: 2, amount: 15000 },
    ],
  },
  {
    id: 25,
    title: "Diploma in Web Development",
    description:
      "Build modern websites using HTML, CSS, JavaScript, and React, preparing students for entry-level web development roles.",
    objectives: [
      "To provide a foundation in web development technologies and practices.",
      "To teach students how to build responsive, dynamic websites using HTML, CSS, and JavaScript.",
      "To prepare students for careers in web development and front-end development using modern tools like React.",
    ],
    duration: {
      min: "1 Year",
      max: "2 Years",
    },
    fees: [
      { semester: 1, amount: 15000 },
      { semester: 2, amount: 15000 },
    ],
  },
  {
    id: 26,
    title: "Diploma in Web Development",
    description:
      "Build modern websites using HTML, CSS, JavaScript, and React, preparing students for entry-level web development roles.",
    objectives: [
      "To provide a foundation in web development technologies and practices.",
      "To teach students how to build responsive, dynamic websites using HTML, CSS, and JavaScript.",
      "To prepare students for careers in web development and front-end development using modern tools like React.",
    ],
    duration: {
      min: "1 Year",
      max: "2 Years",
    },
    fees: [
      { semester: 1, amount: 15000 },
      { semester: 2, amount: 15000 },
    ],
  },
  {
    id: 27,
    title: "Diploma in Web Development",
    description:
      "Build modern websites using HTML, CSS, JavaScript, and React, preparing students for entry-level web development roles.",
    objectives: [
      "To provide a foundation in web development technologies and practices.",
      "To teach students how to build responsive, dynamic websites using HTML, CSS, and JavaScript.",
      "To prepare students for careers in web development and front-end development using modern tools like React.",
    ],
    duration: {
      min: "1 Year",
      max: "2 Years",
    },
    fees: [
      { semester: 1, amount: 15000 },
      { semester: 2, amount: 15000 },
    ],
  },
  {
    id: 28,
    title: "Diploma in Web Development",
    description:
      "Build modern websites using HTML, CSS, JavaScript, and React, preparing students for entry-level web development roles.",
    objectives: [
      "To provide a foundation in web development technologies and practices.",
      "To teach students how to build responsive, dynamic websites using HTML, CSS, and JavaScript.",
      "To prepare students for careers in web development and front-end development using modern tools like React.",
    ],
    duration: {
      min: "1 Year",
      max: "2 Years",
    },
    fees: [
      { semester: 1, amount: 15000 },
      { semester: 2, amount: 15000 },
    ],
  },
  {
    id: 29,
    title: "Diploma in Web Development",
    description:
      "Build modern websites using HTML, CSS, JavaScript, and React, preparing students for entry-level web development roles.",
    objectives: [
      "To provide a foundation in web development technologies and practices.",
      "To teach students how to build responsive, dynamic websites using HTML, CSS, and JavaScript.",
      "To prepare students for careers in web development and front-end development using modern tools like React.",
    ],
    duration: {
      min: "1 Year",
      max: "2 Years",
    },
    fees: [
      { semester: 1, amount: 15000 },
      { semester: 2, amount: 15000 },
    ],
  },
  {
    id: 30,
    title: "Diploma in Web Development",
    description:
      "Build modern websites using HTML, CSS, JavaScript, and React, preparing students for entry-level web development roles.",
    objectives: [
      "To provide a foundation in web development technologies and practices.",
      "To teach students how to build responsive, dynamic websites using HTML, CSS, and JavaScript.",
      "To prepare students for careers in web development and front-end development using modern tools like React.",
    ],
    duration: {
      min: "1 Year",
      max: "2 Years",
    },
    fees: [
      { semester: 1, amount: 15000 },
      { semester: 2, amount: 15000 },
    ],
  },
];

function CourseDetails() {
  const { id } = useParams(); // Get the 'id' from URL parameters

  // Find the course with the matching id
  const course = courseData.find((course) => course.id === parseInt(id));

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div>
      <div className="course-info-container">
        {/* Left Side */}
        <div className="left-course-info">
          <h1>{course.title}</h1>
          <section>
            <h2>Programme Details</h2>
            <div className="section-block">
              <h3>Introduction</h3>
              <p>{course.description}</p>
            </div>
            <div className="section-block">
              <h3>Objectives</h3>
              <ul>
                {course.objectives.map((objective, idx) => (
                  <li key={idx}>{objective}</li>
                ))}
              </ul>
            </div>
            <div className="section-block">
              <h3>Programme Duration</h3>
              <p>
                Min. Duration: {course.duration.min} <br />
                Max. Duration: {course.duration.max}
              </p>
            </div>
            <Link to="/admission">
              <button className="apply-btn">Apply Now</button>
            </Link>
          </section>
        </div>
        {/* Right Side */}
        <div className="right-course-info">
          <h2>Fees Structure</h2>
          {course.fees.map((fee, idx) => (
            <div className="fees-box" key={idx}>
              <div className="fees-flex">
                <h3>Semester {fee.semester}:</h3>
                <p>₹{fee.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
