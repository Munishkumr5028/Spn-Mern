import React, { useState, useEffect } from "react";
import DashboardLayout from "../DashboardLayout";
import "./DetailsCourse.css";
import {
  getCourseDetails,
  addCourseDetails,
  updateCourseDetails,
  deleteCourseDetails,
  getCourseDetailsById,
} from "../../../api/authApi";

function DetailsCourse() {
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    objectives: "",
    duration: "",
    fees: ["", "", "", "", "", ""],
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await getCourseDetails();
      setCourses(res.data.data || []);
    } catch (err) {
      console.error("Fetch error", err);
    }
  };

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

  const addOrUpdateCourse = async () => {
    const payload = {
      courseTitle: formData.title,
      objectives: formData.objectives,
      programmeDuration: formData.duration,
      fees: formData.fees,
      type: "details",
    };

    try {
      if (editingId) {
        await updateCourseDetails(editingId, payload);
      } else {
        await addCourseDetails(payload);
      }
      fetchCourses();
      resetForm();
    } catch (err) {
      console.error("Save error", err);
    }
  };

  const editCourse = async (id) => {
    try {
      const res = await getCourseDetailsById(id);
      const data = res.data.data;
      setFormData({
        title: data.courseTitle || "",
        objectives: data.objectives || "",
        duration: data.programmeDuration || "",
        fees: data.fees || ["", "", "", "", "", ""],
      });
      setEditingId(id);
      setShowModal(true);
    } catch (err) {
      console.error("Edit fetch error", err);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await deleteCourseDetails(id);
      fetchCourses();
    } catch (err) {
      console.error("Delete error", err);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      objectives: "",
      duration: "",
      fees: ["", "", "", "", "", ""],
    });
    setEditingId(null);
    setShowModal(false);
  };

  return (
    <DashboardLayout>
      <div className="add-course">
        <div className="header">
          <h2>Course Details</h2>
          <button onClick={() => { resetForm(); setShowModal(true); }}>
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
                <tr key={course._id}>
                  <td>{index + 1}</td>
                  <td>{course.courseTitle}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="edit-btn" onClick={() => editCourse(course._id)}>
                        Edit
                      </button>
                      <button className="delete-btn" onClick={() => deleteCourse(course._id)}>
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
              <h3>{editingId ? "Edit Course" : "Add New Course"}</h3>
              <label>Title:</label>
              <input name="title" value={formData.title} onChange={handleInputChange} required />

              <label>Objectives:</label>
              <textarea name="objectives" value={formData.objectives} onChange={handleInputChange} required />

              <label>Programme Duration:</label>
              <input name="duration" value={formData.duration} onChange={handleInputChange} required />

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
                <button className="delete-btn" onClick={resetForm}>Cancel</button>
                <button className="save-btn" onClick={addOrUpdateCourse}>
                  {editingId ? "Update" : "Save"}
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
