import React, { useState } from "react";
import "./AcademicCalendar.css";
import DashboardLayout from "../DashboardLayout";
import { FaEdit, FaTrash } from "react-icons/fa";

function AcademicCalendar() {
  const initialData = [
    {
      id: 1,
      date: "07/15/2025",
      time: "09:00",
      message: "Semester 1 Begins",
    },
    {
      id: 2,
      date: "08/01/2025",
      time: "10:00",
      message: "Orientation Day",
    },
  ];

  const [events, setEvents] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.time || !formData.message) {
      alert("All fields are required.");
      return;
    }

    if (isEditing) {
      setEvents((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...formData } : item
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setEvents((prev) => [...prev, { id: prev.length + 1, ...formData }]);
    }

    setModalOpen(false);
    setFormData({ date: "", time: "", message: "" });
  };

  const handleEdit = (item) => {
    setFormData({
      date: item.date,
      time: item.time,
      message: item.message,
    });
    setEditId(item.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <DashboardLayout>
      <div className="calendar-box">
        <div className="calendar-header">
          <h2 className="calendar-title">Academic Calendar</h2>
          <button
            className="calendar-add-btn"
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
              setFormData({ date: "", time: "", message: "" });
            }}
          >
            Add Event
          </button>
        </div>

        <table className="calendar-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Date</th>
              <th>Time</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  style={{ textAlign: "center", color: "#9ca3af" }}
                >
                  No Events found
                </td>
              </tr>
            ) : (
              events.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.message}</td>
                  <td>
                    <div className="button-action">
                      <button  onClick={() => handleEdit(item)} className="btn-edit">Edit</button>
                      <button className="btn-delete" onClick={() => handleDelete(item.id)}>Delete</button>
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
              <h3>{isEditing ? "Edit Event" : "Add New Event"}</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="date"
                  required
                  placeholder="Date (MM/DD/YYYY)"
                  value={formData.date}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="time"
                  required
                  placeholder="Time (HH:MM)"
                  value={formData.time}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="message"
                  required
                  placeholder="Event Message"
                  value={formData.message}
                  onChange={handleInput}
                />
                <div className="modal-buttons">
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => {
                      setModalOpen(false);
                      setIsEditing(false);
                      setFormData({ date: "", time: "", message: "" });
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
}

export default AcademicCalendar;
