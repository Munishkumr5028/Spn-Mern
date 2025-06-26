const Course = require("../models/Course");

// ---------------------- ADD COURSE (basic) ----------------------
exports.addCourse = async (req, res) => {
  try {
    const data = await Course.create({ ...req.body, type: "basic" });
    res.status(201).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const list = await Course.find({ type: "basic" });
    res.status(200).json({ success: true, data: list });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const item = await Course.findOne({ _id: req.params.id, type: "basic" });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ---------------------- COURSE DETAILS ----------------------
exports.addCourseDetails = async (req, res) => {
  try {
    const data = await Course.create({ ...req.body, type: "details" });
    res.status(201).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getCourseDetails = async (req, res) => {
  try {
    const list = await Course.find({ type: "details" });
    res.status(200).json({ success: true, data: list });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getCourseDetailsById = async (req, res) => {
  try {
    const item = await Course.findOne({ _id: req.params.id, type: "details" });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateCourseDetails = async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteCourseDetails = async (req, res) => {
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Course details deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ---------------------- FEE STRUCTURE ----------------------
exports.addFeeStructure = async (req, res) => {
  try {
    const data = await Course.create({ ...req.body, type: "fee" });
    res.status(201).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getFeeStructures = async (req, res) => {
  try {
    const list = await Course.find({ type: "fee" });
    res.status(200).json({ success: true, data: list });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getFeeStructureById = async (req, res) => {
  try {
    const item = await Course.findOne({ _id: req.params.id, type: "fee" });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateFeeStructure = async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteFeeStructure = async (req, res) => {
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Fee structure deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// ---------------------- ACADEMIC CALENDAR ----------------------
exports.addCalendar = async (req, res) => {
  try {
    const data = await Course.create({ ...req.body, type: "calendar" });
    res.status(201).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getCalendars = async (req, res) => {
  try {
    const list = await Course.find({ type: "calendar" });
    res.status(200).json({ success: true, data: list });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getCalendarById = async (req, res) => {
  try {
    const item = await Course.findOne({ _id: req.params.id, type: "calendar" });
    res.status(200).json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateCalendar = async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteCalendar = async (req, res) => {
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({
        success: true,
        message: "Academic calendar deleted successfully",
      });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
