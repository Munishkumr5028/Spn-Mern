import React, { useState } from "react";
import DashboardLayout from "../DashboardLayout";
import "./NewsDetails.css";

function NewsDetails() {
   const NewsdetailsData = [
    {
     heading: "dewali",
      date: "01-06-2025",
      Description : "this is a sample",
      image: null,
    },
    {
      heading: "dewali",
      date: "02-06-2025",
      Description : "this is a sample",
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
    const newEntry = {
      id: editingIndex !== null ? newsList[editingIndex].id : newsList.length + 1,
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
                <input type="file" name="image" accept="image/*" required value={formData.topic} onChange={handleInputChange} />
              </label>
              <label>
                Date:
                <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
              </label>
              <label>
                Heading (0-15 words):
                <input type="text" name="heading" required value={formData.heading}onChange={handleInputChange} />
              </label>
              <label>
                Description (20–25 words):
                <textarea name="description" value={formData.description} onChange={handleInputChange}></textarea>
              </label>
              <div className="modal-actions">
                <button onClick={addOrUpdateNews}>{editingIndex !== null ? "Update" : "Save"}</button>
                <button className="delete-btn" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default NewsDetails;
