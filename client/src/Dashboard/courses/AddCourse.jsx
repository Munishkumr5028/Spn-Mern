import React, { useState } from "react";
import "./AddCourses.css";
import DashboardLayout from "../DashboardLayout";

const AddCourse = () => {
  const CourseData = [
    {
      id: 1,
      name: "MCA",
      description:
        "This is a sample course description with exactly fifteen words.",
      image: null,
    },
    {
      id: 2,
      name: "MCA",
      description:
        "This is a sample course description with exactly fifteen words.",
      image: null,
    },
  ];
  const [courses, setCourses] = useState(CourseData);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleInput = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const wordCount = formData.description.trim().split(/\s+/).length;
    if (wordCount < 0 || wordCount > 20) {
      alert("Description must be between 0 to 20 words.");
      return;
    }

    if (isEditing) {
      const updatedCourses = courses.map((course) =>
        course.id === editId ? { ...course, ...formData } : course
      );
      setCourses(updatedCourses);
      setIsEditing(false);
      setEditId(null);
    } else {
      const newCourse = {
        id: courses.length + 1,
        ...formData,
      };
      setCourses([...courses, newCourse]);
    }

    setModalOpen(false);
    setFormData({ name: "", description: "", image: null });
  };

  const handleEdit = (course) => {
    setFormData({
      name: course.name,
      description: course.description,
      image: course.image,
    });
    setEditId(course.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    const filteredCourses = courses.filter((course) => course.id !== id);
    setCourses(filteredCourses);
  };

  return (
    <DashboardLayout>
      <div className="course-box">
        <div className="course-header">
          <h2 className="course-title">Add Course</h2>
          <button
            className="course-add-btn"
            onClick={() => {
              setModalOpen(true);
              setIsEditing(false);
              setFormData({ name: "", description: "", image: null });
            }}
          >
            Add Courses
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
                <td colSpan="3" style={{ textAlign: "center", color: "#9ca3af" }}>
                  No Courses found
                </td>
              </tr>
            ) : (
            courses.map((course, index) => (
              <tr key={course.id}>
                <td>{index + 1}</td>
                <td>{course.name}</td>
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
                      onClick={() => handleDelete(course.id)}
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
                  name="name"
                  required
                  placeholder="Course Name"
                  value={formData.name}
                  onChange={handleInput}
                />
                <textarea
                  name="description"
                  required
                  placeholder="Short Description (15–20 words)"
                  value={formData.description}
                  onChange={handleInput}
                ></textarea>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  required
                  value={formData.topic}
                  onChange={handleInput}
                />
                <div className="modal-buttons">
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => {
                      setModalOpen(false);
                      setIsEditing(false);
                      setFormData({ name: "", description: "", image: null });
                    }}
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
