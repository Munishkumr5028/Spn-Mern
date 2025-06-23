import React, { useState } from "react";
import "./UniversityTopper.css";
import DashboardLayout from "../DashboardLayout";

const UniversityTopper = () => {
  const initialToppers = [
    {
      id: 1,
      name: "John Doe",
      department: "Computer Science",
      rank: 1,
      image: null,
    },
    {
      id: 2,
      name: "Jane Smith",
      department: "Mathematics",
      rank: 2,
      image: null,
    },
  ];

  const [toppers, setToppers] = useState(initialToppers);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    rank: "",
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
    if (!formData.name || !formData.department || !formData.rank) {
      alert("All fields are required.");
      return;
    }
    if (isNaN(formData.rank) || formData.rank < 1) {
      alert("Rank must be a positive number.");
      return;
    }

    if (isEditing) {
      const updatedToppers = toppers.map((topper) =>
        topper.id === editId ? { ...topper, ...formData } : topper
      );
      setToppers(updatedToppers);
      setIsEditing(false);
      setEditId(null);
    } else {
      const newTopper = {
        id: toppers.length + 1,
        ...formData,
      };
      setToppers([...toppers, newTopper]);
    }

    setModalOpen(false);
    setFormData({ name: "", department: "", rank: "", image: null });
  };

  const handleEdit = (topper) => {
    setFormData({
      name: topper.name,
      department: topper.department,
      rank: topper.rank,
      image: topper.image,
    });
    setEditId(topper.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    const filteredToppers = toppers.filter((topper) => topper.id !== id);
    setToppers(filteredToppers);
  };

  return (
    <DashboardLayout>
      <div className="topper-box">
        <div className="topper-header">
          <h2 className="topper-title">University Toppers</h2>
          <button
            className="topper-add-btn"
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
              setFormData({ name: "", department: "", rank: "", image: null });
            }}
          >
            Add Topper
          </button>
        </div>

        <table className="topper-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Department</th>
              <th>Rank</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toppers.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  style={{ textAlign: "center", color: "#9ca3af" }}
                >
                  No Toppers found
                </td>
              </tr>
            ) : (
              toppers.map((topper, index) => (
                <tr key={topper.id}>
                  <td>{index + 1}</td>
                  <td>
                    {topper.image ? (
                      <img
                        src={URL.createObjectURL(topper.image)}
                        alt={topper.name}
                        className="topper-image"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td>{topper.name}</td>
                  <td>{topper.department}</td>
                  <td>{topper.rank}</td>
                  <td>
                    <div className="button-action">
                      <button
                        className="btn-edit"
                        onClick={() => handleEdit(topper)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(topper.id)}
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
              <h3>{isEditing ? "Edit Topper" : "Add New Topper"}</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Topper Name"
                  value={formData.name}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="department"
                  required
                  placeholder="Department"
                  value={formData.department}
                  onChange={handleInput}
                />
                <input
                  type="number"
                  name="rank"
                  required
                  placeholder="Rank"
                  value={formData.rank}
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
                        name: "",
                        department: "",
                        rank: "",
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

export default UniversityTopper;
