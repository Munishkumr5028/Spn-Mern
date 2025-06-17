import React, { useState } from "react";
import "./students.css";

function Attendance() {
  const [department, setDepartment] = useState("Computer Science");
  const [month, setMonth] = useState("January");

  const attendanceData = {
    "Computer Science": {
      January: [
        { rollNo: "CS001", name: "Amit Sharma", attendance: 85 },
        { rollNo: "CS002", name: "Priya Gupta", attendance: 92 },
        { rollNo: "CS003", name: "Rahul Verma", attendance: 78 },
        { rollNo: "CS004", name: "Sneha Patel", attendance: 95 },
      ],
      February: [
        { rollNo: "CS001", name: "Amit Sharma", attendance: 88 },
        { rollNo: "CS002", name: "Priya Gupta", attendance: 90 },
        { rollNo: "CS003", name: "Rahul Verma", attendance: 80 },
        { rollNo: "CS004", name: "Sneha Patel", attendance: 93 },
      ],
      // Add more months as needed
      March: [
        { rollNo: "CS001", name: "Amit Sharma", attendance: 87 },
        { rollNo: "CS002", name: "Priya Gupta", attendance: 91 },
        { rollNo: "CS003", name: "Rahul Verma", attendance: 82 },
        { rollNo: "CS004", name: "Sneha Patel", attendance: 94 },
      ],
    },
    Physics: {
      January: [
        { rollNo: "PH001", name: "Anita Desai", attendance: 90 },
        { rollNo: "PH002", name: "Vikram Singh", attendance: 85 },
        { rollNo: "PH003", name: "Rohit Kumar", attendance: 88 },
        { rollNo: "PH004", name: "Neha Reddy", attendance: 92 },
      ],
      February: [
        { rollNo: "PH001", name: "Anita Desai", attendance: 89 },
        { rollNo: "PH002", name: "Vikram Singh", attendance: 87 },
        { rollNo: "PH003", name: "Rohit Kumar", attendance: 86 },
        { rollNo: "PH004", name: "Neha Reddy", attendance: 90 },
      ],
      March: [
        { rollNo: "PH001", name: "Anita Desai", attendance: 91 },
        { rollNo: "PH002", name: "Vikram Singh", attendance: 88 },
        { rollNo: "PH003", name: "Rohit Kumar", attendance: 85 },
        { rollNo: "PH004", name: "Neha Reddy", attendance: 93 },
      ],
    },
    English: {
      January: [
        { rollNo: "EN001", name: "Sofia Khan", attendance: 87 },
        { rollNo: "EN002", name: "Arjun Mehta", attendance: 90 },
        { rollNo: "EN003", name: "Lila Bose", attendance: 85 },
        { rollNo: "EN004", name: "Karan Joshi", attendance: 88 },
      ],
      February: [
        { rollNo: "EN001", name: "Sofia Khan", attendance: 88 },
        { rollNo: "EN002", name: "Arjun Mehta", attendance: 91 },
        { rollNo: "EN003", name: "Lila Bose", attendance: 86 },
        { rollNo: "EN004", name: "Karan Joshi", attendance: 89 },
      ],
      March: [
        { rollNo: "EN001", name: "Sofia Khan", attendance: 89 },
        { rollNo: "EN002", name: "Arjun Mehta", attendance: 92 },
        { rollNo: "EN003", name: "Lila Bose", attendance: 87 },
        { rollNo: "EN004", name: "Karan Joshi", attendance: 90 },
      ],
    },
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <section className="attendance-section" id="attendance">
      <div className="attendance-container">
        <div className="attendance-card">
          <h2>Student Attendance</h2>
          <div className="attendance-header">
            <div className="department-selector">
              <label htmlFor="department-select">Department:</label>
              <select
                id="department-select"
                value={department}
                onChange={handleDepartmentChange}
              >
                <option value="Computer Science">Computer Science</option>
                <option value="Physics">Physics</option>
                <option value="English">English</option>
              </select>
            </div>
            <div className="month-selector">
              <label htmlFor="month-select">Month:</label>
              <select
                id="month-select"
                value={month}
                onChange={handleMonthChange}
              >
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="attendance-wrapper">
            <table className="attendance-table">
              <thead>
                <tr>
                  <th>Roll No</th>
                  <th>Name</th>
                  <th>Attendance (%)</th>
                </tr>
              </thead>
              <tbody>
                {(attendanceData[department]?.[month] || []).map(
                  (student, index) => (
                    <tr key={index}>
                      <td>{student.rollNo}</td>
                      <td>{student.name}</td>
                      <td>{student.attendance}%</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Attendance;
