import React, { useState } from "react";
import "./LatestAnnouncement.css";
import DashboardLayout from "../DashboardLayout";
import { FaEdit, FaTrash } from "react-icons/fa";

function LatestAnnouncement() {
  const initialData = [
    {
      id: 1,
      title: "Mid-Semester Exam Schedule Released",
      date: "June 10, 2025",
      description:
        "The schedule for mid-semester exams for all departments is now available.",
      category: "Academic",
    },
    {
      id: 2,
      title: "Guest Lecture Series",
      date: "June 15, 2025",
      description: "Join our guest lecture series on emerging technologies.",
      category: "Academic",
    },
  ];

  const categories = ["Academic", "Events", "Administrative"];

  const [announcements, setAnnouncements] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
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
      !formData.description ||
      !formData.category
    ) {
      alert("All fields are required.");
      return;
    }

    if (isEditing) {
      setAnnouncements((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...formData } : item
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setAnnouncements((prev) => [
        ...prev,
        { id: prev.length + 1, ...formData },
      ]);
    }

    setModalOpen(false);
    setFormData({
      title: "",
      date: "",
      description: "",
      category: categories[0],
    });
  };

  const handleEdit = (item) => {
    setFormData({
      title: item.title,
      date: item.date,
      description: item.description,
      category: item.category,
    });
    setEditId(item.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this announcement?")) {
      setAnnouncements((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <DashboardLayout>
      <div className="announcement-box">
        <div className="announcement-header">
          <h2 className="announcement-title">Latest Announcements</h2>
          <button
            className="announcement-add-btn"
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
              setFormData({
                title: "",
                date: "",
                description: "",
                category: categories[0],
              });
            }}
          >
            Add Announcement
          </button>
        </div>

        <table className="announcement-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Title</th>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {announcements.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  style={{ textAlign: "center", color: "#9ca3af" }}
                >
                  No Announcements found
                </td>
              </tr>
            ) : (
              announcements.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
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
                {isEditing ? "Edit Announcement" : "Add New Announcement"}
              </h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="Announcement Title (e.g., Mid-Semester Exam Schedule)"
                  value={formData.title}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="date"
                  required
                  placeholder="Date (e.g., June 10, 2025)"
                  value={formData.date}
                  onChange={handleInput}
                />
                <textarea
                  name="description"
                  required
                  placeholder="Description (e.g., The schedule for mid-semester exams)"
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

export default LatestAnnouncement;
