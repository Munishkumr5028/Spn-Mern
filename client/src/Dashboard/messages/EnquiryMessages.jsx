import React, { useState } from 'react';
import './EnquiryMessages.css';
import { FaEye } from 'react-icons/fa';
import DashboardLayout from '../DashboardLayout';
import { exportToExcel } from '../../utils/exportToExcel';

function EnquiryMessages() {
  const [enquiries] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', type: 'General', message: 'Interested in services' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', type: 'Support', message: 'Need help with product' },
  ]);

  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [currentEnquiry, setCurrentEnquiry] = useState(null);

  const handleOpenViewModal = (enquiry) => {
    setCurrentEnquiry(enquiry);
    setIsViewModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsViewModalOpen(false);
    setCurrentEnquiry(null);
  };

  const handleExport = () => {
    exportToExcel(enquiries, "enquiries.xlsx");
  };

  return (
    <DashboardLayout>
      <div className="enquiry-box">
        <div className="enquiry-header">
          <h1 className="enquiry-title">Enquiry Messages</h1>
          <button className="btn-export" onClick={handleExport}>Export as Excel</button> {/* ✅ Export Button */}
        </div>

        <div className="enquiry-table-container">
          <table className="enquiry-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Enquiry Type</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry) => (
                <tr key={enquiry.id}>
                  <td>{enquiry.name}</td>
                  <td>{enquiry.email}</td>
                  <td>{enquiry.phone}</td>
                  <td>{enquiry.type}</td>
                  <td>{enquiry.message}</td>
                  <td>
                    <button className="btn-icon" onClick={() => handleOpenViewModal(enquiry)}>
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isViewModalOpen && currentEnquiry && (
          <div className="modal-backdrop">
            <div className="modal-box">
              <h3>View Enquiry</h3>
              <div className="view-field"><label>Name:</label><p>{currentEnquiry.name}</p></div>
              <div className="view-field"><label>Email:</label><p>{currentEnquiry.email}</p></div>
              <div className="view-field"><label>Phone:</label><p>{currentEnquiry.phone}</p></div>
              <div className="view-field"><label>Enquiry Type:</label><p>{currentEnquiry.type}</p></div>
              <div className="view-field"><label>Message:</label><p>{currentEnquiry.message}</p></div>
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

export default EnquiryMessages;
