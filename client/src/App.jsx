import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import ScrollToTop from "./components/ScrollToTop";
import { publicRoutes } from "./routes/routesConfig";
import { adminRoutes } from "./routes/adminRoutes";
import AuthLogin from "./Dashboard/AuthLogin";
import ProtectedRoute from "./routes/ProtectedRoute"; 

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Routes with Layout */}
        <Route element={<Layout />}>
          {publicRoutes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
          {/* Add Login Route */}
        </Route>
          <Route path="/login" element={<AuthLogin />} />

        {/* Admin Routes with Protection */}
        {adminRoutes.map(({ path, element }, index) => (
          <Route
            key={index}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
