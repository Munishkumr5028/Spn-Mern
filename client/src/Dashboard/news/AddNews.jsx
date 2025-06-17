import React, { useState } from "react";
import "./AddNews.css";
import DashboardLayout from "../DashboardLayout";

const AddNews = () => {

  const NewsData = [
    {
      id: 1,
      topic: "events",
      date: "01-06-2025",
      image: null,
    },
    {
      id: 2,
      topic: "dewali",
      date: "02-06-2025",
      image: null,
    },
  ];
  const [newsList, setNewsList] = useState(NewsData);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    topic: "",
    date: "",
    image: null,
    description: "",
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

    const topicWordCount = formData.topic.trim().split(/\s+/).length;
    const descWordCount = formData.description.trim().split(/\s+/).length;

    if (topicWordCount > 15) {
      alert("Heading should be 0-15 words only.");
      return;
    }

    if (descWordCount < 1 || descWordCount > 25) {
      alert("Description must be 0–25 words.");
      return;
    }

    const newNews = {
      id: newsList.length + 1,
      ...formData,
    };

    setNewsList([...newsList, newNews]);
    setFormData({ topic: "", date: "", image: null, description: "" });
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    const updated = newsList.filter((item) => item.id !== id);
    setNewsList(updated);
  };

  return (
    <DashboardLayout>
    <div className="news-box">
      <div className="news-header">
        <h2 className="news-title">Add News</h2>
        <button className="news-add-btn" onClick={() => setModalOpen(true)}>
          Add News
        </button>
      </div>

      <table className="news-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Topic</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
           {AddNews.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", color: "#9ca3af" }}>
                  No News found
                </td>
              </tr>
            ) : (
          newsList.map((news, index) => (
            <tr key={news.id}>
              <td>{index + 1}</td>
              <td>{news.topic}</td>
              <td>{news.date}</td>
              <td>
                <div className="button-action">
                  <button className="btn-edit">Edit</button>
                  <button className="btn-delete" onClick={() => handleDelete(news.id)}>Delete</button>
                </div>
              </td>
            </tr>
          )))}
        </tbody>
      </table>

      {modalOpen && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h3>Add News</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                name="image"
                accept="image/*"
                required
                onChange={handleInput}
              />
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleInput}
              />
              <input
                type="text"
                name="topic"
                placeholder="Heading (0–15 words)"
                required
                value={formData.topic}
                onChange={handleInput}
              />
              <textarea
                name="description"
                placeholder="Description (20–25 words)"
                required
                value={formData.description}
                onChange={handleInput}
              />
              <div className="modal-buttons">
                <button type="button" className="btn-cancel" onClick={() => setModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-save">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </DashboardLayout>
  );
};

export default AddNews;
