import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./navbar";
import Home from "./pages/Hero";
import About from "./pages/About";
import Skills from "./components/Skills";
import Projects from "./pages/Projects";
import Archive from "./pages/Archive";

function AppWrapper() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    // Hide Navbar on /archive, show on everything else
    setShowNavbar(location.pathname !== "/archive");
  }, [location.pathname]);

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Projects />
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
