import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import AddGallery from "../Dashboard/gallery/AddGallery";
import DetailsCourse from "../Dashboard/courses/CourseDetails";
import AddCourse from "../Dashboard/courses/AddCourse";
import AddNews from "../Dashboard/news/AddNews";
import NewsDetails from "../Dashboard/news/NewsDetails";
import AddAlumini from "../Dashboard/alumini/AddAlumni";
import AluminiSuccess from "../Dashboard/alumini/AlumniSuccess";
import AluminiEvents from "../Dashboard/alumini/AluminiEvents";
import AdmissionMessage from '../Dashboard/messages/AdmissionMessages'
import EnquiryMessage from '../Dashboard/messages/EnquiryMessages'
import AdmissionMessages from "../Dashboard/messages/AdmissionMessages";

export const adminRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/addgallery", element: <AddGallery /> },
  { path: "/detailscourse", element: <DetailsCourse /> },
  { path: "/addcourse", element: <AddCourse /> },
  { path: "/addnews", element: <AddNews /> },
  { path: "/newsdetails", element: <NewsDetails /> },
  { path: "/addalumini", element: <AddAlumini /> },
  { path: "/aluminisuccess", element: <AluminiSuccess /> },
  { path: "/aluminievents", element: <AluminiEvents /> },
  { path: "/enquirymessage", element: <EnquiryMessage /> },
  { path: "/admissionmessages", element: <AdmissionMessages /> },
];
