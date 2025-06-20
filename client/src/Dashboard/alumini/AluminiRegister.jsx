import React, { useState } from 'react';
import './AluminiRegister.css';
import DashboardLayout from '../DashboardLayout';
import { FaEye } from 'react-icons/fa';

function AluminiRegister() {
  const initialData = [
    {
      id: 1,
      name: 'Rohit Sharma',
      department: 'Computer Science',
      graduationYear: 2018,
      email: 'rohit@example.com',
      linkedin: null,
      currentlyDoing: 'Software Engineer at TechCorp',
      image: null,
    },
    {
      id: 2,
      name: 'Jyoti Singh',
      department: 'Electronics',
      graduationYear: 2020,
      email: 'jyoti@example.com',
      linkedin: null,
      currentlyDoing: 'Pursuing M.Tech',
      image: null,
    },
  ];

  const [alumni, setAlumni] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  const handleView = (alumni) => {
    setSelectedAlumni(alumni);
    setModalOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="register-box">
        <div className="register-header">
          <h2 className="register-title">Alumni Register</h2>
        </div>

        <table className="register-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Name</th>
              <th>Department</th>
              <th>Graduation Year</th>
              <th>Email</th>
              <th>LinkedIn</th>
              <th>Currently Doing</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alumni.length === 0 ? (
              <tr>
                <td colSpan="9" style={{ textAlign: 'center', color: '#9ca3af' }}>
                  No Records found
                </td>
              </tr>
            ) : (
              alumni.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.department}</td>
                  <td>{item.graduationYear}</td>
                  <td>{item.email}</td>
                  <td>{item.linkedin || 'N/A'}</td>
                  <td>{item.currentlyDoing}</td>
                  <td>{item.image ? 'Image Uploaded' : 'No Image'}</td>
                  <td>
                    <div className="button-action">
                      <FaEye
                        className="icon-view"
                        onClick={() => handleView(item)}
                        title="View Details"
                      />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {modalOpen && selectedAlumni && (
          <div className="modal-backdrop">
            <div className="modal-box">
              <h3>Alumni Details</h3>
              <div className="register-details">
                <p><strong>Name:</strong> {selectedAlumni.name}</p>
                <p><strong>Department:</strong> {selectedAlumni.department}</p>
                <p><strong>Graduation Year:</strong> {selectedAlumni.graduationYear}</p>
                <p><strong>Email:</strong> {selectedAlumni.email}</p>
                <p><strong>LinkedIn:</strong> {selectedAlumni.linkedin ? <a href={selectedAlumni.linkedin} target="_blank" rel="noopener noreferrer">Profile</a> : 'N/A'}</p>
                <p><strong>Currently Doing:</strong> {selectedAlumni.currentlyDoing}</p>
                <p><strong>Image:</strong> {selectedAlumni.image ? 'Image Uploaded' : 'No Image'}</p>
              </div>
              <div className="modal-buttons">
                <button
                  className="btn-close"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default AluminiRegister;