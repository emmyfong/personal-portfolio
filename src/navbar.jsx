// src/components/Navbar.jsx
import "./navbar.css";
import { useState, useRef, useEffect } from "react";

export default function Navbar({ scrollRefs = {} }) {
  const [activeSection, setActiveSection] = useState("home");
  const indicatorRef = useRef(null);

  // Guarantee we always have an array of keys (e.g. ["home","about","skills", ...])
  const sections = Object.keys(scrollRefs);

  // On each activeSection change, move the "pill" under that link
  useEffect(() => {
    const currentLinkEl = document.getElementById(`nav-${activeSection}`);
    const indicator = indicatorRef.current;
    if (currentLinkEl && indicator) {
      const { offsetLeft, offsetWidth } = currentLinkEl;
      indicator.style.transform = `translateX(${offsetLeft}px)`;
      indicator.style.width = `${offsetWidth}px`;
    }
  }, [activeSection]);

  // On scroll, detect which section is roughly mid-screen and setActiveSection
  useEffect(() => {
    const handleScroll = () => {
      const midY = window.innerHeight / 2;
      let current = sections[0];

      sections.forEach((sectionId) => {
        const el = scrollRefs[sectionId]?.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= midY && rect.bottom >= midY) {
            current = sectionId;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollRefs]);

  // Clicking a nav button scrolls to that section smoothly
  const handleClick = (sectionId) => {
    const el = scrollRefs[sectionId]?.current;
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <div className="indicator" ref={indicatorRef} />

        {/* One <li> + <button> per section (home, about, skills, etc.) */}
        {sections.map((sectionId) => (
          <li key={sectionId}>
            <button
              id={`nav-${sectionId}`}
              className={activeSection === sectionId ? "active" : ""}
              onClick={() => handleClick(sectionId)}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
