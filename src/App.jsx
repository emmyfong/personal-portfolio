// src/App.jsx
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import Navbar from "./navbar";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Archive from "./pages/Archive";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Sidebar from "./components/Sidebar";
import Particle from "./components/Particle";
import Intro from "./components/Intro";

function AppWrapper() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  // Hide navbar if on /archive
  useEffect(() => {
    setShowNavbar(location.pathname !== "/archive");
  }, [location.pathname]);

  // Create refs for each section
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const experiencesRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  // (add other refs as needed)

  // Function to smoothly scroll to Skills
  const scrollToNext = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Intro />
      <div className="global-particles">
        <Particle />
      </div>
      <Sidebar />
      {showNavbar && (
        <Navbar
          scrollRefs={{
            home: homeRef,
            skills: skillsRef,
            experiences: experiencesRef,
            education: educationRef,
            projects: projectsRef,
          }}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div ref={homeRef}>
                <Hero scrollToAbout={scrollToNext} />
              </div>

              <div ref={skillsRef}>
                <Skills />
              </div>

              <div ref={experiencesRef}>
                <Experiences />
              </div>

              <div ref={educationRef}>
                <Education />
              </div>

              <div ref={projectsRef}>
                <Projects />
              </div>
            </>
          }
        />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
