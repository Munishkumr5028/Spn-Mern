import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./components/HomePage";
import About from "./components/About/About";
import ManagingCommittee from "./components/About/ManagingCommittee";
import PresidentMessage from "./components/About/PresidentMessage";
import PrincipalMessage from "./components/About/PrincipalMessage";
import VisionMission from "./components/About/VisionMission";
import Alumni from "./components/Alumni/Alumni";
import AlumniEvents from "./components/Alumni/AlumniEvents";
import Donate from "./components/Alumni/Donate";
import RegisterAsAlumni from "./components/Alumni/RegisterAlumni";
import SuccessStories from "./components/Alumni/SuccessStories";
import Courses from "./components/Courses/Courses";
import AcademicCalendar from "./components/Courses/AcademicCalendar";
import AdmissionProcess from "./components/Courses/AdmissionProcess";
import FeeStructure from "./components/Courses/FeeStructure";
import Gallery from "./components/Gallery/Gallery";
import EventFestival from "./components/Gallery/EventFastival";
import SportsGallery from "./components/Gallery/SportsGallery";
import WorkshopSeminar from "./components/Gallery/WorkshopSeminar";
import News from "./components/News/News";
import ExamNotification from "./components/News/ExamNotification";
import LatestAnnouncement from "./components/News/LatestAnnouncement";
import PressRelease from "./components/News/PressRelease";
import NewsDetail from "./components/News/NewsDetials";
import Students from "./components/Students/Students";
import AcademicResources from "./components/Students/AcademicResources";
import Attendance from "./components/Students/Attendance";
import InternshipsPlacement from "./components/Students/InternshipsPlacement";
import Scholarships from "./components/Students/Scholarships";
import StudentLogin from "./components/Students/StudentLogin";
import Timetable from "./components/Students/Timetable";
import Contact from "./components/Contact/Contact";
import Admission from "./components/Admission/Admission";
import CourseDetails from "./components/Courses/CourseDetails";
import Dashboard from "./Dashboard/Dashboard";
import AddGallery from "./Dashboard/gallery/AddGalleryImage";
import DetailsCourse from "./Dashboard/courses/CourseDetails";
import AddCourse from "./Dashboard/courses/AddCourse";
import AddNews from "./Dashboard/news/AddNews";
import NewsDetails from "./Dashboard/news/NewsDetails";
import AddAlumini from "./Dashboard/alumni/AddAlumni";
import AluminiSuccess from "./Dashboard/alumni/AlumniSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/managing-committee" element={<ManagingCommittee />} />
          <Route path="/about/president-message" element={<PresidentMessage />} />
          <Route path="/about/principal-message" element={<PrincipalMessage />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/courses/:level" element={<Courses />} />
          <Route path="/courses/:level/:id" element={<CourseDetails />} />
          <Route path="/courses/academic-calendar" element={<AcademicCalendar />} />
          <Route path="/courses/admission-process" element={<AdmissionProcess />} />
          <Route path="/courses/fee-structure" element={<FeeStructure />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/events" element={<EventFestival />} />
          <Route path="/gallery/sports" element={<SportsGallery />} />
          <Route path="/gallery/workshop" element={<WorkshopSeminar />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/news/exam-notification" element={<ExamNotification />} />
          <Route path="/news/latest-announcement" element={<LatestAnnouncement />} />
          <Route path="/news/press-release" element={<PressRelease />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/resources" element={<AcademicResources />} />
          <Route path="/students/attendance" element={<Attendance />} />
          <Route path="/students/internships" element={<InternshipsPlacement />} />
          <Route path="/students/scholarships" element={<Scholarships />} />
          <Route path="/students/login" element={<StudentLogin />} />
          <Route path="/students/timetable" element={<Timetable />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/alumni/events" element={<AlumniEvents />} />
          <Route path="/alumni/donate" element={<Donate />} />
          <Route path="/alumni/register" element={<RegisterAsAlumni />} />
          <Route path="/alumni/stories" element={<SuccessStories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addgallery" element={<AddGallery />} />
        <Route path="/detailscourse" element={<DetailsCourse />} />
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/addnews" element={<AddNews />} />
        <Route path="/newsdetails" element={<NewsDetails />} />
        <Route path="/addalumini" element={<AddAlumini />} />
        <Route path="/aluminisuccess" element={<AluminiSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;