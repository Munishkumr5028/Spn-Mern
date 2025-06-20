import React, { useState } from 'react';
import './EventGallery.css';
import DashboardLayout from '../DashboardLayout';
import { FaEdit, FaTrash } from 'react-icons/fa';

function EventGallery() {
  const initialData = [
    {
      id: 1,
      eventName: 'TechFest 2025',
      date: 'July 15–17, 2025',
      description: 'A national-level technical symposium with workshops and competitions.',
      category: 'Technical',
    },
    {
      id: 2,
      eventName: 'CodeSprint 2025',
      date: 'August 10, 2025',
      description: 'A coding competition for students across all departments.',
      category: 'Technical',
    },
  ];

  const categories = ['Technical', 'Sports', 'Community'];

  const [events, setEvents] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    description: '',
    category: categories[0], // Default to first category
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.eventName || !formData.date || !formData.description || !formData.category) {
      alert('All fields are required.');
      return;
    }

    if (isEditing) {
      setEvents((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, ...formData } : item
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      setEvents((prev) => [
        ...prev,
        { id: prev.length + 1, ...formData },
      ]);
    }

    setModalOpen(false);
    setFormData({ eventName: '', date: '', description: '', category: categories[0] });
  };

  const handleEdit = (item) => {
    setFormData({
      eventName: item.eventName,
      date: item.date,
      description: item.description,
      category: item.category,
    });
    setEditId(item.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      setEvents((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <DashboardLayout>
      <div className="event-box">
        <div className="event-header">
          <h2 className="event-title">Event Gallery</h2>
          <button
            className="event-add-btn"
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
              setFormData({ eventName: '', date: '', description: '', category: categories[0] });
            }}
          >
            Add Event
          </button>
        </div>

        <table className="event-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Event Name</th>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', color: '#9ca3af' }}>
                  No Events found
                </td>
              </tr>
            ) : (
              events.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.eventName}</td>
                  <td>{item.date}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>
                    <div className="button-action">
                      <FaEdit
                        className="icon-edit"
                        onClick={() => handleEdit(item)}
                        title="Edit Event"
                      />
                      <FaTrash
                        className="icon-delete"
                        onClick={() => handleDelete(item.id)}
                        title="Delete Event"
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
              <h3>{isEditing ? 'Edit Event' : 'Add New Event'}</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="eventName"
                  required
                  placeholder="Event Name (e.g., TechFest 2025)"
                  value={formData.eventName}
                  onChange={handleInput}
                />
                <input
                  type="text"
                  name="date"
                  required
                  placeholder="Date (e.g., July 15–17, 2025)"
                  value={formData.date}
                  onChange={handleInput}
                />
                <textarea
                  name="description"
                  required
                  placeholder="Description (e.g., A national-level technical symposium)"
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
                      setFormData({ eventName: '', date: '', description: '', category: categories[0] });
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-save">
                    {isEditing ? 'Update' : 'Save'}
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

export default EventGallery;