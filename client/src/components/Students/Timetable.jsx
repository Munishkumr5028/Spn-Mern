import React, { useState } from "react";
import "./students.css";

function Timetable() {
  const [semester, setSemester] = useState("Even");
  const [course, setCourse] = useState("BCA");

  const timetableData = {
    BCA: {
      Even: [
        {
          time: "9:00 - 10:00",
          mon: "Data Structures",
          tue: "Database Systems",
          wed: "Java Programming",
          thu: "Web Development",
          fri: "Operating Systems",
          sat: "Library",
        },
        {
          time: "10:00 - 11:00",
          mon: "Database Systems",
          tue: "Java Programming",
          wed: "Data Structures",
          thu: "Networking",
          fri: "Web Development",
          sat: "Seminar",
        },
        {
          time: "11:00 - 12:00",
          mon: "Java Programming",
          tue: "Data Structures",
          wed: "Networking",
          thu: "Operating Systems",
          fri: "Database Systems",
          sat: "Free",
        },
        {
          time: "12:00 - 1:00",
          mon: "Lunch",
          tue: "Lunch",
          wed: "Lunch",
          thu: "Lunch",
          fri: "Lunch",
          sat: "Lunch",
        },
        {
          time: "1:00 - 2:00",
          mon: "Networking",
          tue: "Web Development",
          wed: "Operating Systems",
          thu: "Data Structures",
          fri: "Java Programming",
          sat: "Club Activity",
        },
        {
          time: "2:00 - 3:00",
          mon: "Operating Systems",
          tue: "Networking",
          wed: "Web Development",
          thu: "Java Programming",
          fri: "Data Structures",
          sat: "Free",
        },
      ],
      Odd: [
        {
          time: "9:00 - 10:00",
          mon: "Algorithms",
          tue: "Software Engineering",
          wed: "Python Programming",
          thu: "Cloud Computing",
          fri: "AI Basics",
          sat: "Library",
        },
        {
          time: "10:00 - 11:00",
          mon: "Software Engineering",
          tue: "Python Programming",
          wed: "Algorithms",
          thu: "Data Science",
          fri: "Cloud Computing",
          sat: "Seminar",
        },
        {
          time: "11:00 - 12:00",
          mon: "Python Programming",
          tue: "Algorithms",
          wed: "Data Science",
          thu: "AI Basics",
          fri: "Software Engineering",
          sat: "Free",
        },
        {
          time: "12:00 - 1:00",
          mon: "Lunch",
          tue: "Lunch",
          wed: "Lunch",
          thu: "Lunch",
          fri: "Lunch",
          sat: "Lunch",
        },
        {
          time: "1:00 - 2:00",
          mon: "Data Science",
          tue: "Cloud Computing",
          wed: "AI Basics",
          thu: "Algorithms",
          fri: "Python Programming",
          sat: "Club Activity",
        },
        {
          time: "2:00 - 3:00",
          mon: "AI Basics",
          tue: "Data Science",
          wed: "Cloud Computing",
          thu: "Python Programming",
          fri: "Algorithms",
          sat: "Free",
        },
      ],
    },
    BSc: {
      Even: [
        {
          time: "9:00 - 10:00",
          mon: "Physics II",
          tue: "Chemistry II",
          wed: "Mathematics II",
          thu: "Biology II",
          fri: "Lab Session",
          sat: "Library",
        },
        {
          time: "10:00 - 11:00",
          mon: "Chemistry II",
          tue: "Mathematics II",
          wed: "Physics II",
          thu: "Environmental Science",
          fri: "Biology II",
          sat: "Seminar",
        },
        {
          time: "11:00 - 12:00",
          mon: "Mathematics II",
          tue: "Physics II",
          wed: "Environmental Science",
          thu: "Lab Session",
          fri: "Chemistry II",
          sat: "Free",
        },
        {
          time: "12:00 - 1:00",
          mon: "Lunch",
          tue: "Lunch",
          wed: "Lunch",
          thu: "Lunch",
          fri: "Lunch",
          sat: "Lunch",
        },
        {
          time: "1:00 - 2:00",
          mon: "Environmental Science",
          tue: "Biology II",
          wed: "Lab Session",
          thu: "Physics II",
          fri: "Mathematics II",
          sat: "Club Activity",
        },
        {
          time: "2:00 - 3:00",
          mon: "Lab Session",
          tue: "Environmental Science",
          wed: "Biology II",
          thu: "Chemistry II",
          fri: "Physics II",
          sat: "Free",
        },
      ],
      Odd: [
        {
          time: "9:00 - 10:00",
          mon: "Physics I",
          tue: "Chemistry I",
          wed: "Mathematics I",
          thu: "Biology I",
          fri: "Lab Session",
          sat: "Library",
        },
        {
          time: "10:00 - 11:00",
          mon: "Chemistry I",
          tue: "Mathematics I",
          wed: "Physics I",
          thu: "Botany",
          fri: "Biology I",
          sat: "Seminar",
        },
        {
          time: "11:00 - 12:00",
          mon: "Mathematics I",
          tue: "Physics I",
          wed: "Botany",
          thu: "Lab Session",
          fri: "Chemistry I",
          sat: "Free",
        },
        {
          time: "12:00 - 1:00",
          mon: "Lunch",
          tue: "Lunch",
          wed: "Lunch",
          thu: "Lunch",
          fri: "Lunch",
          sat: "Lunch",
        },
        {
          time: "1:00 - 2:00",
          mon: "Botany",
          tue: "Biology I",
          wed: "Lab Session",
          thu: "Physics I",
          fri: "Mathematics I",
          sat: "Club Activity",
        },
        {
          time: "2:00 - 3:00",
          mon: "Lab Session",
          tue: "Botany",
          wed: "Biology I",
          thu: "Chemistry I",
          fri: "Physics I",
          sat: "Free",
        },
      ],
    },
    BA: {
      Even: [
        {
          time: "9:00 - 10:00",
          mon: "English Literature",
          tue: "History II",
          wed: "Sociology",
          thu: "Political Science",
          fri: "Economics",
          sat: "Library",
        },
        {
          time: "10:00 - 11:00",
          mon: "History II",
          tue: "Sociology",
          wed: "English Literature",
          thu: "Philosophy",
          fri: "Political Science",
          sat: "Seminar",
        },
        {
          time: "11:00 - 12:00",
          mon: "Sociology",
          tue: "English Literature",
          wed: "Philosophy",
          thu: "Economics",
          fri: "History II",
          sat: "Free",
        },
        {
          time: "12:00 - 1:00",
          mon: "Lunch",
          tue: "Lunch",
          wed: "Lunch",
          thu: "Lunch",
          fri: "Lunch",
          sat: "Lunch",
        },
        {
          time: "1:00 - 2:00",
          mon: "Philosophy",
          tue: "Political Science",
          wed: "Economics",
          thu: "English Literature",
          fri: "Sociology",
          sat: "Club Activity",
        },
        {
          time: "2:00 - 3:00",
          mon: "Economics",
          tue: "Philosophy",
          wed: "Political Science",
          thu: "History II",
          fri: "English Literature",
          sat: "Free",
        },
      ],
      Odd: [
        {
          time: "9:00 - 10:00",
          mon: "English Language",
          tue: "History I",
          wed: "Psychology",
          thu: "Political Science",
          fri: "Economics",
          sat: "Library",
        },
        {
          time: "10:00 - 11:00",
          mon: "History I",
          tue: "Psychology",
          wed: "English Language",
          thu: "Philosophy",
          fri: "Political Science",
          sat: "Seminar",
        },
        {
          time: "11:00 - 12:00",
          mon: "Psychology",
          tue: "English Language",
          wed: "Philosophy",
          thu: "Economics",
          fri: "History I",
          sat: "Free",
        },
        {
          time: "12:00 - 1:00",
          mon: "Lunch",
          tue: "Lunch",
          wed: "Lunch",
          thu: "Lunch",
          fri: "Lunch",
          sat: "Lunch",
        },
        {
          time: "1:00 - 2:00",
          mon: "Philosophy",
          tue: "Political Science",
          wed: "Economics",
          thu: "English Language",
          fri: "Psychology",
          sat: "Club Activity",
        },
        {
          time: "2:00 - 3:00",
          mon: "Economics",
          tue: "Philosophy",
          wed: "Political Science",
          thu: "History I",
          fri: "English Language",
          sat: "Free",
        },
      ],
    },
  };

  const handleSemesterToggle = () => {
    setSemester(semester === "Even" ? "Odd" : "Even");
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  return (
    <section className="timetable-section" id="timetable">
      <div className="timetable-container">
        <div className="timetable-card">
          <h2>Weekly Timetable</h2>
          <div className="timetable-header">
            <div className="semester-toggle">
              <span>Semester: {semester}</span>
              <button onClick={handleSemesterToggle} className="toggle-button">
                Switch to {semester === "Even" ? "Odd" : "Even"} Semester
              </button>
            </div>
            <div className="course-selector">
              <label htmlFor="course-select">Course:</label>
              <select
                id="course-select"
                value={course}
                onChange={handleCourseChange}
              >
                <option value="BCA">BCA</option>
                <option value="BSc">B.Sc</option>
                <option value="BA">BA</option>
              </select>
            </div>
          </div>
          <div className="timetable-wrapper">
            <table className="timetable">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
              </thead>
              <tbody>
                {timetableData[course][semester].map((row, index) => (
                  <tr key={index}>
                    <td>{row.time}</td>
                    <td>{row.mon}</td>
                    <td>{row.tue}</td>
                    <td>{row.wed}</td>
                    <td>{row.thu}</td>
                    <td>{row.fri}</td>
                    <td>{row.sat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timetable;
