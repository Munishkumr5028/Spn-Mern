import React, { useState } from "react";
import DashboardLayout from "../DashboardLayout";
import "./NewsDetails.css";

function NewsDetails() {
  const NewsdetailsData = [
    {
      id: 1,
      heading: "Diwali Celebration",
      date: "2025-06-01",
      description: "This is a sample description for Diwali event. Limited to a few words only.",
      image: null,
    },
  ];

  const [newsList, setNewsList] = useState(NewsdetailsData);
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    image: null,
    date: "",
    heading: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addOrUpdateNews = () => {
    if (!formData.image) {
      alert("Image is required.");
      return;
    }
    if (!formData.date) {
      alert("date is required.");
      return;
    }

    if (!formData.description || formData.description.trim().split(/\s+/).length < 5) {
      alert("Description must be at least 25 words.");
      return;
    }

    const newEntry = {
      id: editingIndex !== null ? newsList[editingIndex].id : Date.now(),
      image: formData.image,
      date: formData.date,
      heading: formData.heading,
      description: formData.description,
    };

    if (editingIndex !== null) {
      const updatedList = [...newsList];
      updatedList[editingIndex] = newEntry;
      setNewsList(updatedList);
    } else {
      setNewsList([...newsList, newEntry]);
    }

    setFormData({ image: null, date: "", heading: "", description: "" });
    setEditingIndex(null);
    setShowModal(false);
  };

  const editNews = (index) => {
    const news = newsList[index];
    setFormData({
      image: news.image,
      date: news.date,
      heading: news.heading,
      description: news.description,
    });
    setEditingIndex(index);
    setShowModal(true);
  };

  const deleteNews = (index) => {
    const updatedList = newsList.filter((_, i) => i !== index);
    setNewsList(updatedList);
  };

  return (
    <DashboardLayout>
      <div className="add-news">
        <div className="header">
          <h2>News Details</h2>
          <button
            onClick={() => {
              setShowModal(true);
              setEditingIndex(null);
              setFormData({ image: null, date: "", heading: "", description: "" });
            }}
          >
            Add Details
          </button>
        </div>

        <table id="newsTable">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newsList.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", color: "#9ca3af" }}>
                  No News found
                </td>
              </tr>
            ) : (
              newsList.map((news, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{news.heading}</td>
                  <td>{news.date}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="edit-btn" onClick={() => editNews(index)}>Edit</button>
                      <button className="delete-btn" onClick={() => deleteNews(index)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>{editingIndex !== null ? "Edit News" : "Add News"}</h3>
              <label>
                Image:
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Date:
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Heading (max 15 words):
                <input
                  type="text"
                  name="heading"
                  value={formData.heading}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
              </label>
              <div className="modal-actions">
                <button className="delete-btn" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="save-btn" onClick={addOrUpdateNews}>Save</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default NewsDetails;
