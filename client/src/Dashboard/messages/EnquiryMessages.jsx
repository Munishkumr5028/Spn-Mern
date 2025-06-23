// src/pages/EnquiryMessages.jsx
import React, { useState } from "react";
import "./EnquiryMessages.css";
import { FaEye } from "react-icons/fa";
import DashboardLayout from "../DashboardLayout";
import { exportToExcel } from "../../utils/exportToExcel";

function EnquiryMessages() {
  const [enquiries] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      type: "General",
      message: "Interested in your services.",
    },
    {
      id: 2,
      name: "Alice Brown",
      email: "alice@example.com",
      phone: "2345678901",
      type: "Support",
      message: "Need assistance with setup.",
    },
    {
      id: 3,
      name: "Mark Lee",
      email: "mark@example.com",
      phone: "3456789012",
      type: "Feedback",
      message: "Great experience so far.",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      phone: "4567890123",
      type: "Complaint",
      message: "Issue with login page.",
    },
    {
      id: 5,
      name: "Michael Clark",
      email: "michael@example.com",
      phone: "5678901234",
      type: "Query",
      message: "Do you offer free trials?",
    },
    {
      id: 6,
      name: "Sophia Wilson",
      email: "sophia@example.com",
      phone: "6789012345",
      type: "General",
      message: "Looking for more info.",
    },
    {
      id: 7,
      name: "Daniel White",
      email: "daniel@example.com",
      phone: "7890123456",
      type: "Support",
      message: "I forgot my password.",
    },
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
          <button className="btn-export" onClick={handleExport}>
            Export as Excel
          </button>
        </div>

        <div className="enquiry-table-wrapper">
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
                    <button
                      className="btn-icon"
                      onClick={() => handleOpenViewModal(enquiry)}
                    >
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
              <div className="view-field">
                <label>Name:</label>
                <p>{currentEnquiry.name}</p>
              </div>
              <div className="view-field">
                <label>Email:</label>
                <p>{currentEnquiry.email}</p>
              </div>
              <div className="view-field">
                <label>Phone:</label>
                <p>{currentEnquiry.phone}</p>
              </div>
              <div className="view-field">
                <label>Enquiry Type:</label>
                <p>{currentEnquiry.type}</p>
              </div>
              <div className="view-field">
                <label>Message:</label>
                <p>{currentEnquiry.message}</p>
              </div>
              <div className="modal-buttons">
                <button className="btn-cancel" onClick={handleCloseModal}>
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

export default EnquiryMessages;
