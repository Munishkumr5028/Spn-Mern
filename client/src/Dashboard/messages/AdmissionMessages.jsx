import React, { useState } from 'react';
import './AdmissionMessages.css';
import { FaEye } from 'react-icons/fa';
import DashboardLayout from '../DashboardLayout';
import { exportToExcel } from '../../utils/exportToExcel'; 

function AdmissionMessages() {
  const [admissions] = useState([
    { id: 1, name: 'Ravi Kumar', email: 'ravi@example.com', phone: '9876543210', course: 'BCA' },
    { id: 2, name: 'Anita Sharma', email: 'anita@example.com', phone: '9123456780', course: 'MBA' },
  ]);

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  const handleOpenViewModal = (student) => {
    setCurrentStudent(student);
    setIsViewModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsViewModalOpen(false);
    setCurrentStudent(null);
  };

  const handleExport = () => {
    exportToExcel(admissions, "admission_data.xlsx", "Admissions");
  };

  return (
    <DashboardLayout>
      <div className="admission-box">
        <div className="admission-header">
          <h1 className="admission-title">Admission Messages</h1>
          <button className="btn-export" onClick={handleExport}>Export as Excel</button>
        </div>

        <div className="admission-table-container">
          <table className="admission-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Email</th>
                <th>Mobile No</th>
                <th>Course</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {admissions.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.course}</td>
                  <td>
                    <button className="btn-icon" onClick={() => handleOpenViewModal(student)}>
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isViewModalOpen && currentStudent && (
          <div className="modal-backdrop">
            <div className="modal-box">
              <h3>Student Details</h3>
              <div className="view-field"><label>Name:</label><p>{currentStudent.name}</p></div>
              <div className="view-field"><label>Email:</label><p>{currentStudent.email}</p></div>
              <div className="view-field"><label>Phone:</label><p>{currentStudent.phone}</p></div>
              <div className="view-field"><label>Course:</label><p>{currentStudent.course}</p></div>
              <div className="modal-buttons">
                <button className="btn-cancel" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default AdmissionMessages;
