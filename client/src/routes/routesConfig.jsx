import React from "react";
import HomePage from "../components/HomePage";
import About from "../components/About/About";
import ManagingCommittee from "../components/About/ManagingCommittee";
import PresidentMessage from "../components/About/PresidentMessage";
import PrincipalMessage from "../components/About/PrincipalMessage";
import VisionMission from "../components/About/VisionMission";
import Courses from "../components/Courses/Courses";
import CourseDetails from "../components/Courses/CourseDetails";
import AcademicCalendar from "../components/Courses/AcademicCalendar";
import AdmissionProcess from "../components/Courses/AdmissionProcess";
import FeeStructure from "../components/Courses/FeeStructure";
import Gallery from "../components/Gallery/Gallery";
import EventFestival from "../components/Gallery/EventFastival";
import SportsGallery from "../components/Gallery/SportsGallery";
import WorkshopSeminar from "../components/Gallery/WorkshopSeminar";
import News from "../components/News/News";
import NewsDetail from "../components/News/NewsDetials";
import ExamNotification from "../components/News/ExamNotification";
import LatestAnnouncement from "../components/News/LatestAnnouncement";
import PressRelease from "../components/News/PressRelease";
import Students from "../components/Students/Students";
import AcademicResources from "../components/Students/AcademicResources";
import Attendance from "../components/Students/Attendance";
import InternshipsPlacement from "../components/Students/InternshipsPlacement";
import Scholarships from "../components/Students/Scholarships";
import StudentLogin from "../components/Students/StudentLogin";
import Timetable from "../components/Students/Timetable";
import Alumni from "../components/Alumni/Alumni";
import AlumniEvents from "../components/Alumni/AlumniEvents";
import Donate from "../components/Alumni/Donate";
import RegisterAsAlumni from "../components/Alumni/RegisterAlumni";
import SuccessStories from "../components/Alumni/SuccessStories";
import Contact from "../components/Contact/Contact";
import Admission from "../components/Admission/Admission";

export const publicRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <About /> },
  { path: "/about/managing-committee", element: <ManagingCommittee /> },
  { path: "/about/president-message", element: <PresidentMessage /> },
  { path: "/about/principal-message", element: <PrincipalMessage /> },
  { path: "/about/vision-mission", element: <VisionMission /> },
  { path: "/courses/:level", element: <Courses /> },
  { path: "/courses/:level/:id", element: <CourseDetails /> },
  { path: "/courses/academic-calendar", element: <AcademicCalendar /> },
  { path: "/courses/admission-process", element: <AdmissionProcess /> },
  { path: "/courses/fee-structure", element: <FeeStructure /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/gallery/events", element: <EventFestival /> },
  { path: "/gallery/sports", element: <SportsGallery /> },
  { path: "/gallery/workshop", element: <WorkshopSeminar /> },
  { path: "/news", element: <News /> },
  { path: "/news/:id", element: <NewsDetail /> },
  { path: "/news/exam-notification", element: <ExamNotification /> },
  { path: "/news/latest-announcement", element: <LatestAnnouncement /> },
  { path: "/news/press-release", element: <PressRelease /> },
  { path: "/students", element: <Students /> },
  { path: "/students/resources", element: <AcademicResources /> },
  { path: "/students/attendance", element: <Attendance /> },
  { path: "/students/internships", element: <InternshipsPlacement /> },
  { path: "/students/scholarships", element: <Scholarships /> },
  { path: "/students/login", element: <StudentLogin /> },
  { path: "/students/timetable", element: <Timetable /> },
  { path: "/alumni", element: <Alumni /> },
  { path: "/alumni/events", element: <AlumniEvents /> },
  { path: "/alumni/donate", element: <Donate /> },
  { path: "/alumni/register", element: <RegisterAsAlumni /> },
  { path: "/alumni/stories", element: <SuccessStories /> },
  { path: "/contact", element: <Contact /> },
  { path: "/admission", element: <Admission /> },
];
