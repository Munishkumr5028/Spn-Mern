import React, { useState } from "react";
import "./about.css";

function Managingcommittee() {
  const members = [
    {
      id: 1,
      name: "Dr. Alice Brown",
      designation: "Vice-President",
      message:
        "As Chairperson, I am committed to steering our institution toward excellence, fostering innovation, and ensuring holistic development for all students.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&dpr=1",
    },
    {
      id: 2,
      name: "Mr. Bob Wilson",
      designation: "Secretary",
      message:
        "Our goal is to create an inclusive environment that empowers students to achieve their full potential and contribute to society.",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&dpr=1",
    },
    {
      id: 3,
      name: "Ms. Clara",
      designation: "Treasurer",
      message:
        "We prioritize financial transparency and strategic planning to support academic and infrastructural growth.",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&dpr=1",
    },
    {
      id: 4,
      name: "Dr. David Lee",
      designation: "Member",
      message:
        "I am dedicated to promoting research and innovation, ensuring our institution remains at the forefront of education.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&dpr=1",
    },
    {
      id: 5,
      name: "Mrs. Emma ",
      designation: "Member",
      message:
        "Our focus is on nurturing leadership and ethical values to prepare students for global challenges.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&dpr=1",
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  const toggleDetails = (id) => {
    setSelectedMember(selectedMember === id ? null : id);
  };

  return (
    <section className="committee-section" id="managing-committee">
      <div className="committee-container">
        <h2>Managing Committee</h2>
        <div className="committee-grid">
          {members.map((member) => (
            <div key={member.id} className="committee-card">
              <div
                className="member-image"
                onClick={() => toggleDetails(member.id)}
              >
                <img src={member.image} alt={member.name} />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-designation">{member.designation}</p>
              {/* <p className="detail-message">{member.message}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Managingcommittee;
