import React, { useState } from "react";
import "./courses.css";

function FeeStructure() {
  const fees = [
    {
      id: 1,
      program: "Undergraduate",
      tuition: "$5000 per semester",
      otherFees: "$300 (Library, Sports, Lab)",
    },
    {
      id: 2,
      program: "Postgraduate",
      tuition: "$7000 per semester",
      otherFees: "$500 (Library, Research, Facilities)",
    },
    {
      id: 3,
      program: "Diploma",
      tuition: "$3500 per semester",
      otherFees: "$200 (Materials, Lab)",
    },
    {
      id: 4,
      program: "PhD",
      tuition: "$9000 per year",
      otherFees: "$600 (Research, Journals, Conferences)",
    },
    {
      id: 5,
      program: "Certificate Courses",
      tuition: "$2000 total",
      otherFees: "$100 (Study Material, Workshops)",
    },
  ];

  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="fee-section">
      <div className="fee-container">
        <h2>Fee Structure</h2>
        <p>Click on a program to view the fee details.</p>
        <div className="fee-grid">
          {fees.map((fee) => (
            <div
              key={fee.id}
              className={`fee-card ${expandedId === fee.id ? "expanded" : ""}`}
            >
              <div
                className="fee-header"
                onClick={() => toggleAccordion(fee.id)}
              >
                <span>{fee.program}</span>
                <span className="toggle-icon">
                  {expandedId === fee.id ? "▲" : "▼"}
                </span>
              </div>
              <div
                className={`fee-details ${expandedId === fee.id ? "show" : ""}`}
              >
                <p>
                  <strong>Tuition:</strong> {fee.tuition}
                </p>
                <p>
                  <strong>Additional Fees:</strong> {fee.otherFees}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeeStructure;
