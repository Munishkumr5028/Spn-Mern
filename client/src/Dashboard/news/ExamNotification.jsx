import React, { useState } from "react";
import "./ExamNotification.css";
import DashboardLayout from "../DashboardLayout";
import { FaEdit, FaTrash } from "react-icons/fa";

function ExamNotification() {
  const initialData = [
    {
      id: 1,
      title: "Semester End Exam Schedule 2025",
      date: "June 12, 2025",
      department: "All Departments",
      description:
        "The final exam schedule for Semester 2, 2025 is now available for all departments.",
      category: "Academic",
    },
    {
      id: 2,
      title: "Mid-Term Exam Dates",
      date: "April 15, 2025",
      department: "Computer Science",
      description: "Mid-term exams for Semester 2, 2025 have been scheduled.",
      category: "Academic",
    },
  ];

  const categories = ["Academic"];

  const [notifications, setNotifications] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    department: "",
    description: "",
    category: categories[0],
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.date ||
      !formData.department ||
      !formData.description ||
      !formData.category
    ) {
      alert("All fields are required.");
      return;
    }

    if (isEditing) {
      setNotifications((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...formData } : item
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setNotifications((prev) => [
        ...prev,
        { id: prev.length + 1, ...formData },
      ]);
    }

    setModalOpen(false);
    setFormData({
      title: "",
      date: "",
      department: "",
      description: "",
      category: categories[0],
    });
  };

  const handleEdit = (item) => {
    setFormData({
      title: item.title,
      date: item.date,
      department: item.department,
      description: item.description,
      category: item.category,
    });
    setEditId(item.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this notification?")) {
      setNotifications((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <DashboardLayout>
      <div className="notification-box">
        <div className="notification-header">
          <h2 className="notification-title">Exam Notifications</h2>
          <button
            className="notification-add-btn"
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
              setFormData({
                title: "",
                date: "",
                department: "",
                description: "",
                category: categories[0],
              });
            }}
          >
            Add Notification
          </button>
        </div>

        <table className="notification-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Title</th>
              <th>Date</th>
              <th>Department</th>
              <th>Description</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {notifications.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  style={{ textAlign: "center", color: "#9ca3af" }}
                >
                  No Notifications found
                </td>
              </tr>
            ) : (
              notifications.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td>{item.department}</td>
                  <td>{item.description}</td>
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
              <h3>
                {isEditing ? "Edit Notification" : "Add New Notification"}
              </h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="Notification Title (e.g., Semester End Exam Schedule)"
                  value={formData.title}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="date"
                  required
                  placeholder="Date (e.g., June 12, 2025)"
                  value={formData.date}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="department"
                  required
                  placeholder="Department (e.g., All Departments)"
                  value={formData.department}
                  onChange={handleInput}
                />
                <textarea
                  name="description"
                  required
                  placeholder="Description (e.g., The final exam schedule)"
                  value={formData.description}
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
                        title: "",
                        date: "",
                        department: "",
                        description: "",
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

export default ExamNotification;
