import React, { useState } from 'react';
import './AluminiDonation.css';
import DashboardLayout from '../DashboardLayout';
import { FaEye } from 'react-icons/fa'; // Using react-icons for the eye icon

function AluminiDonation() {
  const initialData = [
    {
      id: 1,
      name: 'Rohit Sharma',
      email: 'rohit@example.com',
      donationAmount: 5000,
      message: 'Happy to contribute to my alma mater!',
    },
    {
      id: 2,
      name: 'Jyoti Singh',
      email: 'jyoti@example.com',
      donationAmount: 3000,
      message: 'Supporting future students.',
    },
  ];

  const [donations, setDonations] = useState(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);

  const handleView = (donation) => {
    setSelectedDonation(donation);
    setModalOpen(true);
  };

  return (
    <DashboardLayout>
      <div className="donation-box">
        <div className="donation-header">
          <h2 className="donation-title">Alumni Donations</h2>
        </div>

        <table className="donation-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Donation Amount</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {donations.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', color: '#9ca3af' }}>
                  No Records found
                </td>
              </tr>
            ) : (
              donations.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>₹{item.donationAmount.toLocaleString()}</td>
                  <td>{item.message}</td>
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

        {modalOpen && selectedDonation && (
          <div className="modal-backdrop">
            <div className="modal-box">
              <h3>Donation Details</h3>
              <div className="donation-details">
                <p><strong>Name:</strong> {selectedDonation.name}</p>
                <p><strong>Email:</strong> {selectedDonation.email}</p>
                <p><strong>Donation Amount:</strong> ₹{selectedDonation.donationAmount.toLocaleString()}</p>
                <p><strong>Message:</strong> {selectedDonation.message}</p>
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

export default AluminiDonation;