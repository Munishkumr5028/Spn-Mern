import React, { useState } from "react";
import "./AcademicResource.css";
import DashboardLayout from "../DashboardLayout";

const AcademicResource = () => {
  const initialResources = [
    {
      id: 1,
      heading: "Lecture Notes - Data Structures",
      description:
        "Access course-specific lecture notes prepared by faculty for all semesters.",
      image: null,
    },
    {
      id: 2,
      heading: "Lecture Notes - Calculus",
      description:
        "Comprehensive notes covering calculus topics for first-year students.",
      image: null,
    },
  ];

  const [resources, setResources] = useState(initialResources);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    heading: "",
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
    const wordCount = formData.description.trim().split(/\s+/).length;
    if (wordCount < 1 || wordCount > 20) {
      alert("Description must be between 1 and 20 words.");
      return;
    }

    if (isEditing) {
      const updatedResources = resources.map((resource) =>
        resource.id === editId ? { ...resource, ...formData } : resource
      );
      setResources(updatedResources);
      setIsEditing(false);
      setEditId(null);
    } else {
      const newResource = {
        id: resources.length + 1,
        ...formData,
      };
      setResources([...resources, newResource]);
    }

    setModalOpen(false);
    setFormData({ heading: "", description: "", image: null });
  };

  const handleEdit = (resource) => {
    setFormData({
      heading: resource.heading,
      description: resource.description,
      image: resource.image,
    });
    setEditId(resource.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    const filteredResources = resources.filter(
      (resource) => resource.id !== id
    );
    setResources(filteredResources);
  };

  return (
    <DashboardLayout>
      <div className="resource-box">
        <div className="resource-header">
          <h2 className="resource-title">Academic Resources</h2>
          <button
            className="resource-add-btn"
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
              setFormData({ heading: "", description: "", image: null });
            }}
          >
            Add Resource
          </button>
        </div>

        <table className="resource-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Image</th>
              <th>Heading</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {resources.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  style={{ textAlign: "center", color: "#9ca3af" }}
                >
                  No Resources found
                </td>
              </tr>
            ) : (
              resources.map((resource, index) => (
                <tr key={resource.id}>
                  <td>{index + 1}</td>
                  <td>
                    {resource.image ? (
                      <img
                        src={URL.createObjectURL(resource.image)}
                        alt={resource.heading}
                        className="resource-image-2"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>{resource.heading}</td>
                  <td>{resource.description}</td>
                  <td>
                    <div className="button-action">
                      <button
                        className="btn-edit"
                        onClick={() => handleEdit(resource)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(resource.id)}
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
              <h3>{isEditing ? "Edit Resource" : "Add New Resource"}</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="heading"
                  required
                  placeholder="Resource Heading (e.g., Lecture Notes)"
                  value={formData.heading}
                  onChange={handleInput}
                />
                <textarea
                  name="description"
                  required
                  placeholder="Description (1-20 words)"
                  value={formData.description}
                  onChange={handleInput}
                />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleInput}
                />
                <div className="modal-buttons">
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => {
                      setModalOpen(false);
                      setIsEditing(false);
                      setFormData({
                        heading: "",
                        description: "",
                        image: null,
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

export default AcademicResource;
