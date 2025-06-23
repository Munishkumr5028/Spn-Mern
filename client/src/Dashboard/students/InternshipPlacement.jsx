import React, { useState } from "react";
import "./InternshipPlacement.css";
import DashboardLayout from "../DashboardLayout";

const InternshipPlacement = () => {
  const initialTestimonials = [
    {
      id: 1,
      name: "Rohit Sharma",
      company: "Google",
      description:
        "The placement cell provided excellent training and support, helping me secure a role at Google!",
      image: null,
    },
  ];

  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
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
    if (!formData.name || !formData.company || !formData.description) {
      alert("Name, Company, and Description are required.");
      return;
    }
    const wordCount = formData.description.trim().split(/\s+/).length;
    if (wordCount < 1 || wordCount > 20) {
      alert("Description must be between 1 and 20 words.");
      return;
    }

    const newTestimonial = {
      id: isEditing ? editId : testimonials.length + 1,
      ...formData,
    };

    if (isEditing) {
      const updatedTestimonials = testimonials.map((testimonial) =>
        testimonial.id === editId ? newTestimonial : testimonial
      );
      setTestimonials(updatedTestimonials);
      setIsEditing(false);
      setEditId(null);
    } else {
      setTestimonials([...testimonials, newTestimonial]);
    }

    setModalOpen(false);
    setFormData({
      name: "",
      company: "",
      description: "",
      image: null,
    });
  };

  const handleEdit = (testimonial) => {
    setFormData({
      name: testimonial.name,
      company: testimonial.company,
      description: testimonial.description,
      image: testimonial.image,
    });
    setEditId(testimonial.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    const filteredTestimonials = testimonials.filter(
      (testimonial) => testimonial.id !== id
    );
    setTestimonials(filteredTestimonials);
  };

  return (
    <DashboardLayout>
      <div className="internship-placement-container">
        <div className="internship-placement-header">
          <h2 className="internship-placement-title">Student Testimonials</h2>
          <button
            className="internship-placement-add-button"
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
              setFormData({
                name: "",
                company: "",
                description: "",
                image: null,
              });
            }}
          >
            Add Testimonial
          </button>
        </div>

        <table className="internship-placement-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Company</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  style={{ textAlign: "center", color: "#9ca3af" }}
                >
                  No Testimonials found
                </td>
              </tr>
            ) : (
              testimonials.map((testimonial, index) => (
                <tr key={testimonial.id}>
                  <td>{index + 1}</td>
                  <td>
                    {testimonial.image ? (
                      <img
                        src={URL.createObjectURL(testimonial.image)}
                        alt={testimonial.name}
                        className="internship-placement-image"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>{testimonial.name}</td>
                  <td>{testimonial.company}</td>
                  <td>{testimonial.description}</td>
                  <td>
                    <div className="internship-placement-action-buttons">
                      <button
                        className="internship-placement-edit-btn"
                        onClick={() => handleEdit(testimonial)}
                      >
                        Edit
                      </button>
                      <button
                        className="internship-placement-delete-btn"
                        onClick={() => handleDelete(testimonial.id)}
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
          <div className="internship-placement-modal-overlay">
            <div className="internship-placement-modal-content">
              <h3>{isEditing ? "Edit Testimonial" : "Add New Testimonial"}</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Student Name"
                  value={formData.name}
                  onChange={handleInput}
                  className="internship-placement-modal-input"
                />
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInput}
                  className="internship-placement-modal-input"
                />
                <textarea
                  name="description"
                  required
                  placeholder="Description (1-20 words)"
                  value={formData.description}
                  onChange={handleInput}
                  className="internship-placement-modal-textarea"
                />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleInput}
                  className="internship-placement-modal-input"
                />
                <div className="internship-placement-modal-actions">
                  <button
                    type="button"
                    className="internship-placement-cancel-btn"
                    onClick={() => {
                      setModalOpen(false);
                      setIsEditing(false);
                      setFormData({
                        name: "",
                        company: "",
                        description: "",
                        image: null,
                      });
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="internship-placement-save-btn"
                  >
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

export default InternshipPlacement;
