const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const controller = require("../controllers/course.controller");

// ---------------------- ADD COURSE (basic) ----------------------
router.post("/add-course", upload.single("image"), controller.addCourse);
router.get("/get-courses", controller.getCourses);
router.get("/get-course/:id", controller.getCourseById);
router.put("/update-course/:id",  upload.single("image"), controller.updateCourse);
router.delete("/delete-course/:id", controller.deleteCourse);

// ---------------------- COURSE DETAILS ----------------------
router.post("/add-course-details", controller.addCourseDetails);
router.get("/get-course-details", controller.getCourseDetails);
router.get("/get-course-details/:id", controller.getCourseDetailsById);
router.put("/update-course-details/:id", controller.updateCourseDetails);
router.delete("/delete-course-details/:id", controller.deleteCourseDetails);

// ---------------------- FEE STRUCTURE ----------------------
router.post("/add-fee", controller.addFeeStructure);
router.get("/get-fees", controller.getFeeStructures);
router.get("/get-fee/:id", controller.getFeeStructureById);
router.put("/update-fee/:id", controller.updateFeeStructure);
router.delete("/delete-fee/:id", controller.deleteFeeStructure);

// ---------------------- ACADEMIC CALENDAR ----------------------
router.post("/add-calendar", controller.addCalendar);
router.get("/get-calendars", controller.getCalendars);
router.get("/get-calendar/:id", controller.getCalendarById);
router.put("/update-calendar/:id", controller.updateCalendar);
router.delete("/delete-calendar/:id", controller.deleteCalendar);

module.exports = router;
