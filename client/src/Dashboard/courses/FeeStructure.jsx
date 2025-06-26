import React, { useState } from "react";
import "./FeeStructure.css";
import DashboardLayout from "../DashboardLayout";
import { FaEdit, FaTrash } from "react-icons/fa";

function FeeStructure() {
  const initialData = [
    {
      id: 1,
      courseName: "BCA",
      tuition: "$5000 per semester",
      additionalFees: "$300 (Library, Sports, Lab)",
    },
    {
      id: 2,
      courseName: "MCA",
      tuition: "$6000 per semester",
      additionalFees: "$400 (Library, Lab)",
    },
  ];

  const [fees, setFees] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    courseName: "",
    tuition: "",
    additionalFees: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.courseName || !formData.tuition || !formData.additionalFees) {
      alert("All fields are required.");
      return;
    }

    if (isEditing) {
      setFees((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...formData } : item
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setFees((prev) => [...prev, { id: prev.length + 1, ...formData }]);
    }

    setModalOpen(false);
    setFormData({ courseName: "", tuition: "", additionalFees: "" });
  };

  const handleEdit = (item) => {
    setFormData({
      courseName: item.courseName,
      tuition: item.tuition,
      additionalFees: item.additionalFees,
    });
    setEditId(item.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this fee structure?")) {
      setFees((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <DashboardLayout>
      <div className="fee-box">
        <div className="fee-header">
          <h2 className="fee-title">Fee Structure</h2>
          <button
            className="fee-add-btn"
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
              setFormData({ courseName: "", tuition: "", additionalFees: "" });
            }}
          >
            Add Fee
          </button>
        </div>

        <table className="fee-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Course Name</th>
              <th>Tuition</th>
              <th>Additional Fees</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {fees.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  style={{ textAlign: "center", color: "#9ca3af" }}
                >
                  No Fee Structures found
                </td>
              </tr>
            ) : (
              fees.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.courseName}</td>
                  <td>{item.tuition}</td>
                  <td>{item.additionalFees}</td>
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
                {isEditing ? "Edit Fee Structure" : "Add New Fee Structure"}
              </h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="courseName"
                  required
                  placeholder="Course Name (e.g., BCA)"
                  value={formData.courseName}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="tuition"
                  required
                  placeholder="Tuition (e.g., $5000 per semester)"
                  value={formData.tuition}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="additionalFees"
                  required
                  placeholder="Additional Fees (e.g., $300)"
                  value={formData.additionalFees}
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
                        courseName: "",
                        tuition: "",
                        additionalFees: "",
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

export default FeeStructure;
