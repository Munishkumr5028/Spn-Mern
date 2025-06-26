import React, { useState } from "react";
import "./WorkshopGallery.css";
import DashboardLayout from "../DashboardLayout";
import { FaEdit, FaTrash } from "react-icons/fa";

function WorkshopGallery() {
  const initialData = [
    {
      id: 1,
      workshopName: "AI in Healthcare Workshop",
      date: "July 10, 2025",
      presenter: "Dr. Rajesh Kumar, CTO, HealthTech Inc.",
      description: "Explore AI applications in healthcare with hands-on demos.",
      category: "Industry",
    },
    {
      id: 2,
      workshopName: "Data Science Bootcamp",
      date: "August 5, 2025",
      presenter: "Prof. Anita Sharma, DataTech University",
      description: "Intensive training on data science techniques and tools.",
      category: "Academic",
    },
  ];

  const categories = [
    "Industry",
    "Research",
    "Professional Development",
    "Academic",
  ];

  const [workshops, setWorkshops] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    workshopName: "",
    date: "",
    presenter: "",
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
      !formData.workshopName ||
      !formData.date ||
      !formData.presenter ||
      !formData.description ||
      !formData.category
    ) {
      alert("All fields are required.");
      return;
    }

    if (isEditing) {
      setWorkshops((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...formData } : item
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setWorkshops((prev) => [...prev, { id: prev.length + 1, ...formData }]);
    }

    setModalOpen(false);
    setFormData({
      workshopName: "",
      date: "",
      presenter: "",
      description: "",
      category: categories[0],
    });
  };

  const handleEdit = (item) => {
    setFormData({
      workshopName: item.workshopName,
      date: item.date,
      presenter: item.presenter,
      description: item.description,
      category: item.category,
    });
    setEditId(item.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this workshop?")) {
      setWorkshops((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <DashboardLayout>
      <div className="workshop-box">
        <div className="workshop-header">
          <h2 className="workshop-title">Workshop Gallery</h2>
          <button
            className="workshop-add-btn"
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
              setFormData({
                workshopName: "",
                date: "",
                presenter: "",
                description: "",
                category: categories[0],
              });
            }}
          >
            Add Workshop
          </button>
        </div>

        <table className="workshop-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Workshop Name</th>
              <th>Date</th>
              <th>Presenter</th>
              <th>Description</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {workshops.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  style={{ textAlign: "center", color: "#9ca3af" }}
                >
                  No Workshops found
                </td>
              </tr>
            ) : (
              workshops.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.workshopName}</td>
                  <td>{item.date}</td>
                  <td>{item.presenter}</td>
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
              <h3>{isEditing ? "Edit Workshop" : "Add New Workshop"}</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="workshopName"
                  required
                  placeholder="Workshop Name (e.g., AI in Healthcare Workshop)"
                  value={formData.workshopName}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="date"
                  required
                  placeholder="Date (e.g., July 10, 2025)"
                  value={formData.date}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="presenter"
                  required
                  placeholder="Presenter (e.g., Dr. Rajesh Kumar)"
                  value={formData.presenter}
                  onChange={handleInput}
                />
                <textarea
                  name="description"
                  required
                  placeholder="Description (e.g., Explore AI applications)"
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
                        workshopName: "",
                        date: "",
                        presenter: "",
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

export default WorkshopGallery;
