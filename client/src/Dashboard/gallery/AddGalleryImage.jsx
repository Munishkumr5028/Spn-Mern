// AddGallery.jsx
import React, { useState } from 'react';
import DashboardLayout from '../DashboardLayout';
import './AddGallery.css';

const AddGallery = () => {
  // Initial events data
  const [events, setEvents] = useState([
    { name: "New Year Party", date: "2024-01-01" },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventFile, setEventFile] = useState(null);

  // Open modal
  const openModal = () => setModalOpen(true);

  // Close modal and reset form
  const closeModal = () => {
    setModalOpen(false);
    setEventName("");
    setEventDate("");
    setEventFile(null);
  };

  // Save new event
 const saveEvent = () => {
  if (!eventName.trim() || !eventDate) {
    alert("Please fill in Event Name and Date");
    return;
  }
  if (!eventFile) {
    alert("Please select a file");
    return;
  }
  setEvents([...events, { name: eventName, date: eventDate, file: eventFile }]);
  closeModal();
};
  // Delete event by index
  const deleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  return (
    <DashboardLayout>
      <div className="addgallery">
        <div className="header">
          <h1>Event List</h1>
          <button className="btn-add" onClick={openModal}>
            Add Event
          </button>
        </div>

        <table id='gallerytable'>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.length === 0 ? (
              <tr>
                <td colSpan="3" style={{ textAlign: "center", color: "#9ca3af" }}>
                  No events found
                </td>
              </tr>
            ) : (
              events.map((event, index) => (
                <tr key={index}>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => deleteEvent(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <h2>Add New Event</h2>
            <input
              type="text"
              placeholder="Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              autoFocus
            />
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
            <input
              type="file"
              onChange={(e) => setEventFile(e.target.files[0])}
            />
            <div className="modal-footer">
              <button className="btn-save" onClick={saveEvent}>
                Save
              </button>
              <button className="btn-cancel" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AddGallery;
