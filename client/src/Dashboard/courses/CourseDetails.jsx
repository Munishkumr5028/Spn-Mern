import React, { useState } from "react";
import DashboardLayout from "../DashboardLayout";
import "./DetailsCourse.css";

function DetailsCourse() {
  const [courses, setCourses] = useState([{ id: 1, name: "MCA" }]);
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    objectives: "",
    duration: "",
    fees: ["", "", "", "", "", ""],
  });

  const handleInputChange = (e, i) => {
    const { name, value } = e.target;
    if (name === "fees") {
      const updatedFees = [...formData.fees];
      updatedFees[i] = value;
      setFormData({ ...formData, fees: updatedFees });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addOrUpdateCourse = () => {
    const newCourse = {
      id: editingIndex !== null ? courses[editingIndex].id : courses.length + 1,
      name: formData.title,
      title: formData.title,
      objectives: formData.objectives,
      duration: formData.duration,
      fees: formData.fees,
    };

    if (editingIndex !== null) {
      const updatedCourses = [...courses];
      updatedCourses[editingIndex] = newCourse;
      setCourses(updatedCourses);
    } else {
      setCourses([...courses, newCourse]);
    }

    setFormData({
      title: "",
      objectives: "",
      duration: "",
      fees: ["", "", "", "", "", ""],
    });
    setEditingIndex(null);
    setShowModal(false);
  };

  const editCourse = (index) => {
    const course = courses[index];
    setFormData({
      title: course.title || course.name,
      objectives: course.objectives || "",
      duration: course.duration || "",
      fees: course.fees || ["", "", "", "", "", ""],
    });
    setEditingIndex(index);
    setShowModal(true);
  };

  const deleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  return (
    <DashboardLayout>
      <div className="add-course">
        <div className="header">
          <h2>Course Details</h2>
          <button
            onClick={() => {
              setShowModal(true);
              setEditingIndex(null); // reset edit mode
              setFormData({
                title: "",
                objectives: "",
                duration: "",
                fees: ["", "", "", "", "", ""],
              });
            }}
          >
            Add Details
          </button>
        </div>

        <table id="courseTable">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.length === 0 ? (
              <tr>
                <td colSpan="3" style={{ textAlign: "center", color: "#9ca3af" }}>
                  No Courses found
                </td>
              </tr>
            ) : (
            courses.map((course, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{course.name}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="edit-btn"
                      onClick={() => editCourse(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteCourse(index)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              ))
              )}
          </tbody>
        </table>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>{editingIndex !== null ? "Edit Course" : "Add New Course"}</h3>
              <label>
                Title:
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Objectives:
                <textarea
                  name="objectives"
                  value={formData.objectives}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Programme Duration:
                <input
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>Fees Structure (6 Semesters):</label>
              {formData.fees.map((fee, i) => (
                <input
                  key={i}
                  name="fees"
                  type="number"
                  placeholder={`Semester ${i + 1}`}
                  value={fee}
                  onChange={(e) => handleInputChange(e, i)}
                />
              ))}
              <div className="modal-actions">
                <button
                  className="delete-btn"
                  onClick={() => {
                    setShowModal(false);
                    setEditingIndex(null);
                  }}
                >
                  Cancel
                </button>
                <button 
                className="save-btn"
                onClick={addOrUpdateCourse}>
                  {editingIndex !== null ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default DetailsCourse;
