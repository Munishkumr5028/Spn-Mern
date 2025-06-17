import React from 'react';
import './courses.css';

function AdmissionProcess() {
  const steps = [
    { id: 1, title: 'Step 1: Registration', description: 'Students need to fill out the online registration form and submit required details.' },
    { id: 2, title: 'Step 2: Entrance Exam', description: 'Applicants must appear for an entrance exam to assess their eligibility.' },
    { id: 3, title: 'Step 3: Interview & Counseling', description: 'Shortlisted candidates go through an interview and counseling session.' },
    { id: 4, title: 'Step 4: Document Submission', description: 'Students submit all necessary documents for verification.' },
    { id: 5, title: 'Step 5: Fee Payment & Admission Confirmation', description: 'Once documents are verified, students complete the fee payment and receive admission confirmation.' }
  ];

  return (
    <section className="admission-section">
      <div className="admission-container">
        <h2>Admission Process</h2>
        <p>Follow these steps to successfully complete your admission.</p>
        <div className="admission-grid">
          {steps.map((step) => (
            <div key={step.id} className="admission-card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdmissionProcess;
