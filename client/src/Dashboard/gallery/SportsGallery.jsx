import React, { useState } from "react";
import "./SportsGallery.css";
import DashboardLayout from "../DashboardLayout";
import { FaEdit, FaTrash } from "react-icons/fa";

function SportsGallery() {
  const initialData = [
    {
      id: 1,
      eventName: "Cricket Final Match",
      date: "November 7, 2024",
      category: "Cricket",
    },
    {
      id: 2,
      eventName: "Annual Sports Meet 2024",
      date: "November 7, 2024",
      category: "Athletics",
    },
  ];

  const categories = ["Cricket", "Basketball", "Athletics", "Football"];

  const [events, setEvents] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    eventName: "",
    date: "",
    category: categories[0],
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.eventName || !formData.date || !formData.category) {
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
    setFormData({ eventName: "", date: "", category: categories[0] });
  };

  const handleEdit = (item) => {
    setFormData({
      eventName: item.eventName,
      date: item.date,
      category: item.category,
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
      <div className="sports-box">
        <div className="sports-header">
          <h2 className="sports-title">Sports Gallery</h2>
          <button
            className="sports-add-btn"
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
              setFormData({ eventName: "", date: "", category: categories[0] });
            }}
          >
            Add Event
          </button>
        </div>

        <table className="sports-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Event Name</th>
              <th>Date</th>
              <th>Category</th>
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
                  <td>{item.eventName}</td>
                  <td>{item.date}</td>
                  <td>{item.category}</td>
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
                  name="eventName"
                  required
                  placeholder="Event Name (e.g., Cricket Final Match)"
                  value={formData.eventName}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="date"
                  required
                  placeholder="Date (e.g., November 7, 2024)"
                  value={formData.date}
                  onChange={handleInput}
                />
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleInput}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="modal-buttons">
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => {
                      setModalOpen(false);
                      setIsEditing(false);
                      setFormData({
                        eventName: "",
                        date: "",
                        category: categories[0],
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
}

export default SportsGallery;
