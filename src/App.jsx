// src/App.jsx
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import Navbar from "./navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Archive from "./pages/Archive";
import Experiences from "./pages/Experiences";

function AppWrapper() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  // Hide navbar if on /archive
  useEffect(() => {
    setShowNavbar(location.pathname !== "/archive");
  }, [location.pathname]);

  // Create refs for each section
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);
  // (add other refs as needed)

  // Function to smoothly scroll to About
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {showNavbar && (
        <Navbar
          scrollRefs={{
            home: homeRef,
            about: aboutRef,
            skills: skillsRef,
            projects: projectsRef,
            experiences: experiencesRef,
          }}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div ref={homeRef}>
                <Hero scrollToAbout={scrollToAbout} />
              </div>

              <div ref={aboutRef}>
                <About />
              </div>

              <div ref={skillsRef}>
                <Skills />
              </div>

              <div ref={projectsRef}>
                <Projects />
              </div>

              <div ref={experiencesRef}>
                <Experiences />
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
