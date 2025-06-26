import React, { useState, useEffect } from "react";
import "./AddCourses.css";
import DashboardLayout from "../DashboardLayout";
import {
  addCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../../../api/authApi";

const AddCourse = () => {
  const [courses, setCourses] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    courseTitle: "",
    shortDescription: "",
    image: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Load courses on mount
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await getCourses();
      setCourses(res.data.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleInput = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const wordCount = formData.shortDescription.trim().split(/\s+/).length;
    if (wordCount < 0 || wordCount > 20) {
      alert("Description must be between 0 to 20 words.");
      return;
    }

    const payload = new FormData();
    payload.append("courseTitle", formData.courseTitle);
    payload.append("shortDescription", formData.shortDescription);
    payload.append("type", "basic");
    if (formData.image) payload.append("image", formData.image);

    try {
      if (isEditing) {
        await updateCourse(editId, payload);
      } else {
        await addCourse(payload);
      }
      fetchCourses();
      resetForm();
    } catch (error) {
      console.error("Error saving course:", error);
    }
  };

  const handleEdit = async (course) => {
    try {
      const res = await getCourseById(course._id);
      const data = res.data.data;
      setFormData({
        courseTitle: data.courseTitle,
        shortDescription: data.shortDescription,
        image: null, // do not load image into input field
      });
      setEditId(course._id);
      setIsEditing(true);
      setModalOpen(true);
    } catch (error) {
      console.error("Error loading course for edit:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteCourse(id);
      fetchCourses();
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const resetForm = () => {
    setModalOpen(false);
    setIsEditing(false);
    setEditId(null);
    setFormData({
      courseTitle: "",
      shortDescription: "",
      image: null,
    });
  };

  return (
    <DashboardLayout>
      <div className="course-box">
        <div className="course-header">
          <h2 className="course-title">Add Course</h2>
          <button
            className="course-add-btn"
            onClick={() => {
              resetForm();
              setModalOpen(true);
            }}
          >
            Add Course
          </button>
        </div>

        <table className="course-table">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Course Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.length === 0 ? (
              <tr>
                <td
                  colSpan="3"
                  style={{ textAlign: "center", color: "#9ca3af" }}
                >
                  No Courses found
                </td>
              </tr>
            ) : (
              courses.map((course, index) => (
                <tr key={course._id}>
                  <td>{index + 1}</td>
                  <td>{course.courseTitle}</td>
                  <td>
                    <div className="button-action">
                      <button
                        className="btn-edit"
                        onClick={() => handleEdit(course)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => handleDelete(course._id)}
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

        {modalOpen && (
          <div className="modal-backdrop">
            <div className="modal-box">
              <h3>{isEditing ? "Edit Course" : "Add New Course"}</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="courseTitle"
                  required
                  placeholder="Course Name"
                  value={formData.courseTitle}
                  onChange={handleInput}
                />
                <textarea
                  name="shortDescription"
                  required
                  placeholder="Short Description (max 20 words)"
                  value={formData.shortDescription}
                  onChange={handleInput}
                ></textarea>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleInput}
                  required={!isEditing}
                />
                <div className="modal-buttons">
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={resetForm}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-save">
                    {isEditing ? "Update" : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default AddCourse;
