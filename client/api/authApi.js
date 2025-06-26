import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Add token to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) { 
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Dashboard Login 
export const login = (data) => API.post("/college/login", data);
export const verifyOtp = (data) => API.post("/college/verify-otp", data);
export const forgotPassword = (data) => API.post("/college/forgot-password", data);
export const resetPassword = (data) => API.post("/college/reset-password", data);

export const getDashboardData = () => API.get("/college/dashboard");
// export const addCourse = (courseData) => API.post("/courses", courseData);

//  Course Basic
export const addCourse = (data) => API.post("/course/add-course", data);
export const getCourses = () => API.get("/course/get-courses");
export const getCourseById = (id) => API.get(`/course/get-course/${id}`);
export const updateCourse = (id, data) => API.put(`/course/update-course/${id}`, data);
export const deleteCourse = (id) => API.delete(`/course/delete-course/${id}`);

//  Course Details
export const addCourseDetails = (data) => API.post("/course/add-course-details", data);
export const getCourseDetails = () => API.get("/course/get-course-details");
export const getCourseDetailsById = (id) => API.get(`/course/get-course-details/${id}`);
export const updateCourseDetails = (id, data) => API.put(`/course/update-course-details/${id}`, data);
export const deleteCourseDetails = (id) => API.delete(`/course/delete-course-details/${id}`);

// Fee Structure
export const addFee = (data) => API.post("/course/add-fee", data);
export const getFees = () => API.get("/course/get-fees");
export const getFeeById = (id) => API.get(`/course/get-fee/${id}`);
export const updateFee = (id, data) => API.put(`/course/update-fee/${id}`, data);
export const deleteFee = (id) => API.delete(`/course/delete-fee/${id}`);

// Academic Calendar
export const addCalendarEvent = (data) => API.post("/course/add-calendar", data);
export const getCalendars = () => API.get("/course/get-calendars");
export const getCalendarById = (id) => API.get(`/course/get-calendar/${id}`);
export const updateCalendar = (id, data) => API.put(`/course/update-calendar/${id}`, data);
export const deleteCalendar = (id) => API.delete(`/course/delete-calendar/${id}`);
