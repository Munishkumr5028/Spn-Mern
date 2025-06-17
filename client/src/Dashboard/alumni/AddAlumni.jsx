import React, { useState } from "react";
import "./AddAlumini.css";
import DashboardLayout from "../DashboardLayout";

const AddAlumini = () => {
  const initialData = [
    {
      id: 1,
      name: "Rohit Sharma",
      course: "MCA",
      description: "This is a sample description that contains exactly fifteen words or less for testing.",
      image: null,
    },
    {
      id: 2,
      name: "Jyoti Singh",
      course: "BCA",
      description: "Another alumni sample description with fewer than fifteen words to show.",
      image: null,
    },
  ];

  const [alumini, setAlumini] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    course: "",
    description: "",
    image: null,
  });

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

    const words = formData.description.trim().split(/\s+/);
    if (words.length > 15) {
      alert("Description must not exceed 15 words.");
      return;
    }

    if (isEditing) {
      setAlumini((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...formData } : item
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setAlumini((prev) => [
        ...prev,
        { id: prev.length + 1, ...formData },
      ]);
    }

    setModalOpen(false);
    setFormData({ name: "", course: "", description: "", image: null });
  };

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      course: item.course,
      description: item.description,
      image: item.image,
    });
    setEditId(item.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setAlumini((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <DashboardLayout>
      <div className="course-box">
        <div className="course-header">
          <h2 className="course-title">Add Alumni</h2>
          <button
            className="course-add-btn"
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
              setFormData({ name: "", course: "", description: "", image: null });
            }}
          >
            Add Alumni
          </button>
        </div>

        <table className="course-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alumini.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", color: "#9ca3af" }}>
                  No Records found
                </td>
              </tr>
            ) : (
              alumini.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.course}</td>
                  <td>
                    <div className="button-action">
                      <button className="btn-edit" onClick={() => handleEdit(item)}>
                        Edit
                      </button>
                      <button className="btn-delete" onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Modal Form */}
        {modalOpen && (
          <div className="modal-backdrop">
            <div className="modal-box">
              <h3>{isEditing ? "Edit Alumni" : "Add New Alumni"}</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="course"
                  required
                  placeholder="Course (e.g., MCA)"
                  value={formData.course}
                  onChange={handleInput}
                />
                <textarea
                  name="description"
                  required
                  placeholder="Short Description (max 15 words)"
                  value={formData.description}
                  onChange={handleInput}
                ></textarea>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  required
                  onChange={handleInput}
                />
                <div className="modal-buttons">
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => {
                      setModalOpen(false);
                      setIsEditing(false);
                      setFormData({ name: "", course: "", description: "", image: null });
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

export default AddAlumini;
