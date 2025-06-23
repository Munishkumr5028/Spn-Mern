import React, { useState } from "react";
import "./Attendance.css";
import DashboardLayout from "../DashboardLayout";

const Attendance = () => {
  const initialAttendance = [
    {
      id: 1,
      department: "Computer Science",
      month: "June",
      rollNo: "CS001",
      name: "Amit Sharma",
      attendance: 85,
    },
    {
      id: 2,
      department: "Computer Science",
      month: "June",
      rollNo: "CS002",
      name: "Priya Gupta",
      attendance: 92,
    },
    {
      id: 3,
      department: "Computer Science",
      month: "June",
      rollNo: "CS003",
      name: "Rahul Verma",
      attendance: 78,
    },
    {
      id: 4,
      department: "Computer Science",
      month: "June",
      rollNo: "CS004",
      name: "Sneha Patel",
      attendance: 95,
    },
  ];

  const departments = [
    "Computer Science",
    "Mathematics",
    "Physics",
    "Electronics",
  ];
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

  const [attendanceData, setAttendanceData] = useState(initialAttendance);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    department: departments[0],
    month: months[0],
    rollNo: "",
    name: "",
    attendance: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.rollNo || !formData.name || !formData.attendance) {
      alert("Roll No, Name, and Attendance are required.");
      return;
    }
    const attendanceValue = parseFloat(formData.attendance);
    if (
      isNaN(attendanceValue) ||
      attendanceValue < 0 ||
      attendanceValue > 100
    ) {
      alert("Attendance must be a number between 0 and 100.");
      return;
    }

    const newEntry = {
      id: isEditing ? editId : attendanceData.length + 1,
      department: formData.department,
      month: formData.month,
      rollNo: formData.rollNo,
      name: formData.name,
      attendance: attendanceValue,
    };

    if (isEditing) {
      const updatedAttendance = attendanceData.map((entry) =>
        entry.id === editId ? newEntry : entry
      );
      setAttendanceData(updatedAttendance);
      setIsEditing(false);
      setEditId(null);
    } else {
      setAttendanceData([...attendanceData, newEntry]);
    }

    setModalOpen(false);
    setFormData({
      department: departments[0],
      month: months[0],
      rollNo: "",
      name: "",
      attendance: "",
    });
  };

  const handleEdit = (entry) => {
    setFormData({
      department: entry.department,
      month: entry.month,
      rollNo: entry.rollNo,
      name: entry.name,
      attendance: entry.attendance,
    });
    setEditId(entry.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    const filteredAttendance = attendanceData.filter(
      (entry) => entry.id !== id
    );
    setAttendanceData(filteredAttendance);
  };

  return (
    <DashboardLayout>
      <div className="attendance-box">
        <div className="attendance-header">
          <h2 className="attendance-title">Attendance Records</h2>
          <button
            className="attendance-add-btn"
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
              setFormData({
                department: departments[0],
                month: months[0],
                rollNo: "",
                name: "",
                attendance: "",
              });
            }}
          >
            Add Attendance
          </button>
        </div>

        <table className="attendance-table-d">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Department</th>
              <th>Month</th>
              <th>Roll No</th>
              <th>Name</th>
              <th>Attendance (%)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  style={{ textAlign: "center", color: "#9ca3af" }}
                >
                  No Attendance records found
                </td>
              </tr>
            ) : (
              attendanceData.map((entry, index) => (
                <tr key={entry.id}>
                  <td>{index + 1}</td>
                  <td>{entry.department}</td>
                  <td>{entry.month}</td>
                  <td>{entry.rollNo}</td>
                  <td>{entry.name}</td>
                  <td>{entry.attendance}%</td>
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
              <h3>{isEditing ? "Edit Attendance" : "Add New Attendance"}</h3>
              <form onSubmit={handleSubmit}>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInput}
                  required
                  className="modal-input"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                <select
                  name="month"
                  value={formData.month}
                  onChange={handleInput}
                  required
                  className="modal-input"
                >
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="rollNo"
                  required
                  placeholder="Roll No (e.g., CS001)"
                  value={formData.rollNo}
                  onChange={handleInput}
                  className="modal-input"
                />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Student Name"
                  value={formData.name}
                  onChange={handleInput}
                  className="modal-input"
                />
                <input
                  type="number"
                  name="attendance"
                  required
                  placeholder="Attendance (%)"
                  value={formData.attendance}
                  onChange={handleInput}
                  min="0"
                  max="100"
                  step="0.1"
                  className="modal-input"
                />
                <div className="modal-buttons">
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => {
                      setModalOpen(false);
                      setIsEditing(false);
                      setFormData({
                        department: departments[0],
                        month: months[0],
                        rollNo: "",
                        name: "",
                        attendance: "",
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

export default Attendance;
