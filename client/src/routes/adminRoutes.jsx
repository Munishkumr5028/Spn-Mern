import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import AddGallery from "../Dashboard/gallery/AddGallery";
import EventGallery from "../Dashboard/gallery/EventGallery";
import SportsGallery from "../Dashboard/gallery/SportsGallery";
import WorkshopGallery from "../Dashboard/gallery/WorkshopGallery";
import AddCourse from "../Dashboard/courses/AddCourse";
import DetailsCourse from "../Dashboard/courses/CourseDetails";
import FeeStructure from "../Dashboard/courses/FeeStructure";
import AcademicCalendar from "../Dashboard/courses/AcademicCalendar";
import AddNews from "../Dashboard/news/AddNews";
import NewsDetails from "../Dashboard/news/NewsDetails";
import ExamNotification from "../Dashboard/news/ExamNotification";
import LatestAnnouncement from "../Dashboard/news/LatestAnnouncement";
import PressRelease from "../Dashboard/news/PressRelease";
import AddAlumini from "../Dashboard/alumini/AddAlumni";
import AluminiSuccess from "../Dashboard/alumini/AlumniSuccess";
import AluminiEvents from "../Dashboard/alumini/AluminiEvents";
import AluminiRegister from "../Dashboard/alumini/AluminiRegister";
import AluminiDonation from "../Dashboard/alumini/AluminiDonation";
import EnquiryMessage from "../Dashboard/messages/EnquiryMessages";
import AdmissionMessages from "../Dashboard/messages/AdmissionMessages";
import Teacher from "../Dashboard/messages/Teacher";
import AcademicResource from "../Dashboard/students/AcademicResource";
import Attendance from "../Dashboard/students/Attendance";
import InternshipPlacement from "../Dashboard/students/InternshipPlacement";
import Scholarship from "../Dashboard/students/Scholarship";
import Timetable from "../Dashboard/students/Timetable";
import UniversityTopper from "../Dashboard/students/UniversityTopper";

export const adminRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/addgallery", element: <AddGallery /> },
  { path: "/eventgallery", element: <EventGallery /> },
  { path: "/sportsgallery", element: <SportsGallery /> },
  { path: "/workshopgallery", element: <WorkshopGallery /> },
  { path: "/addcourse", element: <AddCourse /> },
  { path: "/detailscourse", element: <DetailsCourse /> },
  { path: "/feestructure", element: <FeeStructure /> },
  { path: "/academiccalendar", element: <AcademicCalendar /> },
  { path: "/addnews", element: <AddNews /> },
  { path: "/newsdetails", element: <NewsDetails /> },
  { path: "/examnotification", element: <ExamNotification /> },
  { path: "/latestannouncement", element: <LatestAnnouncement /> },
  { path: "/pressrelease", element: <PressRelease /> },
  { path: "/addalumini", element: <AddAlumini /> },
  { path: "/aluminisuccess", element: <AluminiSuccess /> },
  { path: "/aluminievents", element: <AluminiEvents /> },
  { path: "/aluminiregister", element: <AluminiRegister /> },
  { path: "/aluminidonation", element: <AluminiDonation /> },
  { path: "/enquirymessage", element: <EnquiryMessage /> },
  { path: "/admissionmessages", element: <AdmissionMessages /> },
  { path: "/teacher", element: <Teacher /> },
  { path: "/academicresource", element: <AcademicResource /> },
  { path: "/attendance", element: <Attendance /> },
  { path: "/internshipplacement", element: <InternshipPlacement /> },
  { path: "/scholarship", element: <Scholarship /> },
  { path: "/timetable", element: <Timetable /> },
  { path: "/universitytopper", element: <UniversityTopper /> },
];
