import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/projectsPage/ProjectPage";
import Projects from "./pages/projectsPage/Projects";
import ServicesPage from "./pages/servicesPage/ServicesPage";
import ContactPage from "./pages/contactPage/ContactPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import LoaderPage from "./pages/LoaderPage";

function App() {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };


  return (
    <AnimatePresence mode="wait">
      {showLoader && (
        <LoaderPage key="loader" onComplete={handleLoaderComplete} />
      )}
      {!showLoader && (
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </AnimatePresence>
  );
}

export default App;
