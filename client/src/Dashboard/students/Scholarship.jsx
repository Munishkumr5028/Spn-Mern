import React, { useState } from "react";
import "./Scholarship.css";
import DashboardLayout from "../DashboardLayout";

const Scholarship = () => {
  const initialScholarships = [
    {
      id: 1,
      name: "Academic Excellence Scholarship",
      eligibility: "Minimum 90% marks, all departments",
      award: "INR 50,000 per year",
      deadline: "August 15, 2025",
      description:
        "Awarded to top-performing students across all departments for academic excellence.",
      image: null,
    },
    {
      id: 2,
      name: "Merit-Cum-Means Scholarship",
      eligibility: "Minimum 85% marks, family income < INR 5LPA",
      award: "Full tuition waiver",
      deadline: "September 10, 2025",
      description:
        "Supports academically strong students from low-income families.",
      image: null,
    },
  ];

  const [scholarships, setScholarships] = useState(initialScholarships);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    eligibility: "",
    award: "",
    deadline: "",
    description: "",
    image: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleInput = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.eligibility ||
      !formData.award ||
      !formData.deadline ||
      !formData.description
    ) {
      alert("All fields except image are required.");
      return;
    }
    const wordCount = formData.description.trim().split(/\s+/).length;
    if (wordCount < 1 || wordCount > 20) {
      alert("Description must be between 1 and 20 words.");
      return;
    }

    const newScholarship = {
      id: isEditing ? editId : scholarships.length + 1,
      ...formData,
    };

    if (isEditing) {
      const updatedScholarships = scholarships.map((scholarship) =>
        scholarship.id === editId ? newScholarship : scholarship
      );
      setScholarships(updatedScholarships);
      setIsEditing(false);
      setEditId(null);
    } else {
      setScholarships([...scholarships, newScholarship]);
    }

    setModalOpen(false);
    setFormData({
      name: "",
      eligibility: "",
      award: "",
      deadline: "",
      description: "",
      image: null,
    });
  };

  const handleEdit = (scholarship) => {
    setFormData({
      name: scholarship.name,
      eligibility: scholarship.eligibility,
      award: scholarship.award,
      deadline: scholarship.deadline,
      description: scholarship.description,
      image: scholarship.image,
    });
    setEditId(scholarship.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    const filteredScholarships = scholarships.filter(
      (scholarship) => scholarship.id !== id
    );
    setScholarships(filteredScholarships);
  };

  return (
    <DashboardLayout>
      <div className="scholarship-container">
        <div className="scholarship-header-section">
          <h2 className="scholarship-heading">Scholarships</h2>
          <button
            className="scholarship-add-button"
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
              setFormData({
                name: "",
                eligibility: "",
                award: "",
                deadline: "",
                description: "",
                image: null,
              });
            }}
          >
            Add Scholarship
          </button>
        </div>

        <table className="scholarship-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Eligibility</th>
              <th>Award</th>
              <th>Deadline</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {scholarships.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  style={{ textAlign: "center", color: "#9ca3af" }}
                >
                  No Scholarships found
                </td>
              </tr>
            ) : (
              scholarships.map((scholarship, index) => (
                <tr key={scholarship.id}>
                  <td>{index + 1}</td>
                  <td>
                    {scholarship.image ? (
                      <img
                        src={URL.createObjectURL(scholarship.image)}
                        alt={scholarship.name}
                        className="scholarship-image"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>{scholarship.name}</td>
                  <td>{scholarship.eligibility}</td>
                  <td>{scholarship.award}</td>
                  <td>{scholarship.deadline}</td>
                  <td>{scholarship.description}</td>
                  <td>
                    <div className="scholarship-action-buttons">
                      <button
                        className="scholarship-edit-btn"
                        onClick={() => handleEdit(scholarship)}
                      >
                        Edit
                      </button>
                      <button
                        className="scholarship-delete-btn"
                        onClick={() => handleDelete(scholarship.id)}
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
          <div className="scholarship-modal-overlay">
            <div className="scholarship-modal-content">
              <h3>{isEditing ? "Edit Scholarship" : "Add New Scholarship"}</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Scholarship Name"
                  value={formData.name}
                  onChange={handleInput}
                  className="scholarship-modal-input"
                />
                <input
                  type="text"
                  name="eligibility"
                  required
                  placeholder="Eligibility Criteria"
                  value={formData.eligibility}
                  onChange={handleInput}
                  className="scholarship-modal-input"
                />
                <input
                  type="text"
                  name="award"
                  required
                  placeholder="Award Details"
                  value={formData.award}
                  onChange={handleInput}
                  className="scholarship-modal-input"
                />
                <input
                  type="text"
                  name="deadline"
                  required
                  placeholder="Deadline (e.g., August 15, 2025)"
                  value={formData.deadline}
                  onChange={handleInput}
                  className="scholarship-modal-input"
                />
                <textarea
                  name="description"
                  required
                  placeholder="Description (1-20 words)"
                  value={formData.description}
                  onChange={handleInput}
                  className="scholarship-modal-textarea"
                />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleInput}
                  className="scholarship-modal-input"
                />
                <div className="scholarship-modal-actions">
                  <button
                    type="button"
                    className="scholarship-cancel-btn"
                    onClick={() => {
                      setModalOpen(false);
                      setIsEditing(false);
                      setFormData({
                        name: "",
                        eligibility: "",
                        award: "",
                        deadline: "",
                        description: "",
                        image: null,
                      });
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="scholarship-save-btn">
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

export default Scholarship;
