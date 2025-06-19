import React, { useState } from 'react';
import './AluminiEvents.css';
import DashboardLayout from '../DashboardLayout';

const AluminiEvents = () => {
  const insertData = [
    {
      id: 1,
      name: "Alumni Meetup",
      date: "2025-06-15",
      location: "Campus Hall",
      description: "This is a sample description that contains exactly fifteen words or less for testing.",
      image: null,
    },
  ];

  const [events, setEvents] = useState(insertData);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    description: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name.trim()) {
    alert("Event name is required.");
    return;
  }

  if (!formData.date) {
    alert("Event date is required.");
    return;
  }

  if (!formData.image) {
    alert("Event image is required.");
    return;
  }

  const words = formData.description.trim().split(/\s+/);
  if (words.length > 15) {
    alert("Description must not exceed 15 words.");
    return;
  }

  if (isEditing) {
    setEvents((prev) =>
      prev.map((item) =>
        item.id === editId ? { ...item, ...formData, id: editId } : item
      )
    );
    setIsEditing(false);
    setEditId(null);
  } else {
    setEvents((prev) => [
      ...prev,
      { id: Date.now(), ...formData },
    ]);
  }

  setModalOpen(false);
  setFormData({ name: "", date: "", location: "", description: "", image: null });
};


  const handleEdit = (event) => {
    setFormData(event);
    setEditId(event.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((e) => e.id !== id));
    }
  };

  return (
    <DashboardLayout>
      <div className="alumini-box">
        <div className="alumini-header">
          <h2 className="alumini-title">Add Alumni Events</h2>
          <button className="alumini-add-btn" onClick={() => setModalOpen(true)}>Add Event</button>
        </div>
        <table className="alumini-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Event Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", color: "#9ca3af" }}>
                  No Records found
                </td>
              </tr>
            ) : (
              events.map((event, index) => (
                <tr key={event.id}>
                  <td>{index + 1}</td>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>
                    <div className="button-action">
                      <button className=" btn-edit" onClick={() => handleEdit(event)}>Edit</button>
                      <button className=" btn-delete" onClick={() => handleDelete(event.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {modalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h3>{isEditing ? "Edit Event" : "Add New Event"}</h3>
              <input type="text" name="name" placeholder="Event Name" value={formData.name} onChange={handleChange} />
              <input type="date" name="date" value={formData.date} onChange={handleChange} />
              <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
              <textarea
                name="description"
                placeholder="Short Description (max 15 words)"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              <input type="file" name="image" onChange={handleChange} />
              <div className="modal-actions">
                <button className=" btn-cancel" onClick={() => setModalOpen(false)}>Cancel</button>
                <button className="btn-save" onClick={handleSubmit}>Save</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AluminiEvents;
