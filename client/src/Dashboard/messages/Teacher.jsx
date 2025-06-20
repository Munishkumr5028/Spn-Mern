import React, { useState } from "react";
import "./Teacher.css";
import DashboardLayout from "../DashboardLayout";
import { FaEdit, FaTrash } from "react-icons/fa";

function Teacher() {
  const initialData = [
    {
      id: 1,
      name: "Dr. Anita Sharma",
      department: "Computer Science",
    },
    {
      id: 2,
      name: "Prof. Rajesh Kumar",
      department: "Mathematics",
    },
  ];

  const [teachers, setTeachers] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.department) {
      alert("All fields are required.");
      return;
    }

    if (isEditing) {
      setTeachers((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...formData } : item
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setTeachers((prev) => [...prev, { id: prev.length + 1, ...formData }]);
    }

    setModalOpen(false);
    setFormData({ name: "", department: "" });
  };

  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      department: item.department,
    });
    setEditId(item.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      setTeachers((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <DashboardLayout>
      <div className="teacher-box">
        <div className="teacher-header">
          <h2 className="teacher-title">Teacher List</h2>
          <button
            className="teacher-add-btn"
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
              setFormData({ name: "", department: "" });
            }}
          >
            Add Teacher
          </button>
        </div>

        <table className="teacher-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Name</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {teachers.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  style={{ textAlign: "center", color: "#9ca3af" }}
                >
                  No Teachers found
                </td>
              </tr>
            ) : (
              teachers.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>
                    <div className="button-action">
                      <FaEdit
                        className="icon-edit"
                        onClick={() => handleEdit(item)}
                        title="Edit Teacher"
                      />
                      <FaTrash
                        className="icon-delete"
                        onClick={() => handleDelete(item.id)}
                        title="Delete Teacher"
                      />
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
              <h3>{isEditing ? "Edit Teacher" : "Add New Teacher"}</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Teacher Name (e.g., Dr. Anita Sharma)"
                  value={formData.name}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="department"
                  required
                  placeholder="Department (e.g., Computer Science)"
                  value={formData.department}
                  onChange={handleInput}
                />
                <div className="modal-buttons">
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => {
                      setModalOpen(false);
                      setIsEditing(false);
                      setFormData({ name: "", department: "" });
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

export default Teacher;
