import React, { useState } from "react";
import "./PressRelease.css";
import DashboardLayout from "../DashboardLayout";
import { FaEdit, FaTrash } from "react-icons/fa";

function PressRelease() {
  const initialData = [
    {
      id: 1,
      title: "Panjab University Partners with Tech Giant for AI Research",
      date: "June 15, 2025",
      description:
        "A new collaboration to advance AI research with industry leader.",
      category: "Research",
    },
    {
      id: 2,
      title: "Annual Innovation Awards 2025",
      date: "July 20, 2025",
      description:
        "Recognizing outstanding contributions in technology and research.",
      category: "Awards",
    },
  ];

  const categories = ["Research", "Events", "Awards", "Community"];

  const [pressReleases, setPressReleases] = useState(initialData);
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
      setPressReleases((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...formData } : item
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setPressReleases((prev) => [
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
    if (window.confirm("Are you sure you want to delete this press release?")) {
      setPressReleases((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <DashboardLayout>
      <div className="press-release-box">
        <div className="press-release-header">
          <h2 className="press-release-title">Press Releases</h2>
          <button
            className="press-release-add-btn"
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
            Add Press Release
          </button>
        </div>

        <table className="press-release-table">
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
            {pressReleases.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  style={{ textAlign: "center", color: "#9ca3af" }}
                >
                  No Press Releases found
                </td>
              </tr>
            ) : (
              pressReleases.map((item, index) => (
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
                {isEditing ? "Edit Press Release" : "Add New Press Release"}
              </h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="Title (e.g., Panjab University Partners with Tech Giant)"
                  value={formData.title}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="date"
                  required
                  placeholder="Date (e.g., June 15, 2025)"
                  value={formData.date}
                  onChange={handleInput}
                />
                <textarea
                  name="description"
                  required
                  placeholder="Description (e.g., A new collaboration to advance AI research)"
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

export default PressRelease;
