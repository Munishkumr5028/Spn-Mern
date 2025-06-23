import React, { useState } from "react";
import "./Timetable.css";
import DashboardLayout from "../DashboardLayout";

const Timetable = () => {
  const semesters = ["even", "odd"];
  const courses = [
    "Data Structures",
    "Database Systems",
    "Java Programming",
    "Web Development",
    "Operating Systems",
    "Networking",
    "Library",
    "Seminar",
    "Free",
  ];
  const timeSlots = [
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 1:00	",
    "1:00 - 2:00	",
    "2:00 - 3:00",
  ];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const initialTimetable = [
    {
      id: 1,
      semester: "even",
      time: "9:00 - 10:00",
      Monday: "Data Structures",
      Tuesday: "Database Systems",
      Wednesday: "Java Programming",
      Thursday: "Web Development",
      Friday: "Operating Systems",
      Saturday: "Library",
    },
    {
      id: 2,
      semester: "odd",
      time: "10:00 - 11:00",
      Monday: "Database Systems",
      Tuesday: "Java Programming",
      Wednesday: "Data Structures",
      Thursday: "Networking",
      Friday: "Web Development",
      Saturday: "Seminar",
    },
    {
      id: 3,
      semester: "odd",
      time: "11:00 - 12:00",
      Monday: "Java Programming",
      Tuesday: "Data Structures",
      Wednesday: "Networking",
      Thursday: "Operating Systems",
      Friday: "Database Systems",
      Saturday: "Free",
    },
  ];

  const [selectedSemester, setSelectedSemester] = useState(semesters[0]);
  const [timetable, setTimetable] = useState(initialTimetable);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    time: timeSlots[0],
    Monday: courses[0],
    Tuesday: courses[0],
    Wednesday: courses[0],
    Thursday: courses[0],
    Friday: courses[0],
    Saturday: courses[0],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.time) {
      alert("Time slot is required.");
      return;
    }

    const newEntry = {
      id: isEditing ? editId : timetable.length + 1,
      semester: selectedSemester,
      ...formData,
    };

    if (isEditing) {
      const updatedTimetable = timetable.map((entry) =>
        entry.id === editId ? newEntry : entry
      );
      setTimetable(updatedTimetable);
      setIsEditing(false);
      setEditId(null);
    } else {
      setTimetable([...timetable, newEntry]);
    }

    setModalOpen(false);
    setFormData({
      time: timeSlots[0],
      Monday: courses[0],
      Tuesday: courses[0],
      Wednesday: courses[0],
      Thursday: courses[0],
      Friday: courses[0],
      Saturday: courses[0],
    });
  };

  const handleEdit = (entry) => {
    setFormData({
      time: entry.time,
      Monday: entry.Monday,
      Tuesday: entry.Tuesday,
      Wednesday: entry.Wednesday,
      Thursday: entry.Thursday,
      Friday: entry.Friday,
      Saturday: entry.Saturday,
    });
    setEditId(entry.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    const filteredTimetable = timetable.filter((entry) => entry.id !== id);
    setTimetable(filteredTimetable);
  };

  const filteredTimetable = timetable.filter(
    (entry) => entry.semester === selectedSemester
  );

  return (
    <DashboardLayout>
      <div className="timetable-box">
        <div className="timetable-header">
          <h2 className="timetable-title">Timetable</h2>
          <div className="timetable-controls">
            <select
              className="semester-select"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
            >
              {semesters.map((semester) => (
                <option key={semester} value={semester}>
                  {semester}
                </option>
              ))}
            </select>
            <button
              className="timetable-add-btn"
              onClick={() => {
                setModalOpen(true);
                setIsEditing(false);
                setFormData({
                  time: timeSlots[0],
                  Monday: courses[0],
                  Tuesday: courses[0],
                  Wednesday: courses[0],
                  Thursday: courses[0],
                  Friday: courses[0],
                  Saturday: courses[0],
                });
              }}
            >
              Add Entry
            </button>
          </div>
        </div>

        <table className="timetable-table">
          <thead>
            <tr>
              <th>Time</th>
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTimetable.length === 0 ? (
              <tr>
                <td
                  colSpan={days.length + 2}
                  style={{ textAlign: "center", color: "#9ca3af" }}
                >
                  No Timetable entries found
                </td>
              </tr>
            ) : (
              filteredTimetable.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.time}</td>
                  {days.map((day) => (
                    <td key={day}>{entry[day]}</td>
                  ))}
                  <td>
                    <div className="button-action">
                      <button
                        className="btn-edit"
                        onClick={() => handleEdit(entry)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(entry.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {modalOpen && (
          <div className="modal-backdrop">
            <div className="modal-box">
              <h3>
                {isEditing ? "Edit Timetable Entry" : "Add New Timetable Entry"}
              </h3>
              <form onSubmit={handleSubmit}>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInput}
                  required
                  className="modal-input"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {days.map((day) => (
                  <select
                    key={day}
                    name={day}
                    value={formData[day]}
                    onChange={handleInput}
                    required
                    className="modal-input"
                  >
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                ))}
                <div className="modal-buttons">
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => {
                      setModalOpen(false);
                      setIsEditing(false);
                      setFormData({
                        time: timeSlots[0],
                        Monday: courses[0],
                        Tuesday: courses[0],
                        Wednesday: courses[0],
                        Thursday: courses[0],
                        Friday: courses[0],
                        Saturday: courses[0],
                      });
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-save">
                    {isEditing ? "Update" : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Timetable;
