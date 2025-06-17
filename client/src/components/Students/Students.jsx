import React from 'react';
import './Students.css';

const toppers = [
  {
    id: 1,
    name: 'Aarav Sharma',
    department: 'Computer Science',
    rank: 1,
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Meera Nair',
    department: 'Electronics',
    rank: 2,
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    name: 'Rahul Mehta',
    department: 'Mechanical',
    rank: 3,
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    department: 'Civil Engineering',
    rank: 4,
    image: 'https://randomuser.me/api/portraits/women/55.jpg'
  },
  {
    id: 5,
    name: 'Ankit Verma',
    department: 'BCA',
    rank: 5,
    image: 'https://randomuser.me/api/portraits/men/25.jpg'
  },
  {
    id: 6,
    name: 'Kriti Sharma',
    department: 'Mathematics',
    rank: 6,
    image: 'https://randomuser.me/api/portraits/women/30.jpg'
  },
  {
    id: 7,
    name: 'Vikram Raj',
    department: 'Physics',
    rank: 7,
    image: 'https://randomuser.me/api/portraits/men/28.jpg'
  },
  {
    id: 8,
    name: 'Sanya Kapoor',
    department: 'Chemistry',
    rank: 8,
    image: 'https://randomuser.me/api/portraits/women/25.jpg'
  },
  {
    id: 9,
    name: 'Dev Patel',
    department: 'History',
    rank: 9,
    image: 'https://randomuser.me/api/portraits/men/12.jpg'
  },
  {
    id: 10,
    name: 'Neha Bansal',
    department: 'Political Science',
    rank: 10,
    image: 'https://randomuser.me/api/portraits/women/60.jpg'
  },
  {
    id: 11,
    name: 'Rohan Iyer',
    department: 'Economics',
    rank: 11,
    image: 'https://randomuser.me/api/portraits/men/15.jpg'
  },
  {
    id: 12,
    name: 'Tina Desai',
    department: 'English',
    rank: 12,
    image: 'https://randomuser.me/api/portraits/women/19.jpg'
  },
  {
    id: 13,
    name: 'Arjun Khanna',
    department: 'BBA',
    rank: 13,
    image: 'https://randomuser.me/api/portraits/men/23.jpg'
  },
  {
    id: 14,
    name: 'Priya Singh',
    department: 'MBA',
    rank: 14,
    image: 'https://randomuser.me/api/portraits/women/22.jpg'
  },
  {
    id: 15,
    name: 'Karan Malhotra',
    department: 'Zoology',
    rank: 15,
    image: 'https://randomuser.me/api/portraits/men/39.jpg'
  },
  {
    id: 16,
    name: 'Divya Gupta',
    department: 'Botany',
    rank: 16,
    image: 'https://randomuser.me/api/portraits/women/39.jpg'
  },
  {
    id: 17,
    name: 'Manav Joshi',
    department: 'Statistics',
    rank: 17,
    image: 'https://randomuser.me/api/portraits/men/9.jpg'
  },
  {
    id: 18,
    name: 'Ritika Saini',
    department: 'Geography',
    rank: 18,
    image: 'https://randomuser.me/api/portraits/women/7.jpg'
  },
  {
    id: 19,
    name: 'Sahil Dubey',
    department: 'Philosophy',
    rank: 19,
    image: 'https://randomuser.me/api/portraits/men/60.jpg'
  },
  {
    id: 20,
    name: 'Nidhi Rawat',
    department: 'Sociology',
    rank: 20,
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  }
];

function Students() {
  return (
    <div className="students-section">
      <h2 className="students-heading">University Toppers</h2>
      <div className="students-grid">
        {toppers.map((student) => (
          <div key={student.id} className="student-card">
            <div className="student-img-wrapper">
              <img src={student.image} alt={student.name} className="student-img" />
            </div>
            <h3 className="student-name">{student.name}</h3>
            <p className="student-department">{student.department}</p>
            <span className="student-rank">Rank: {student.rank}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;