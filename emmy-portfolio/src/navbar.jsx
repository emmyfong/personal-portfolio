// src/components/Navbar.jsx
import './navbar.css';
import { useState, useRef, useEffect } from 'react';

const sections = [
  'home',
  'about',
  'skills',
  'projects',
  'experiences',
  'education',
  'contact',
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const indicatorRef = useRef(null);
  const linkRefs = sections.reduce((acc, id) => {
    acc[id] = useRef(null);
    return acc;
  }, {});

  // 1) Reposition the pill whenever activeSection changes
  useEffect(() => {
    const currentLink = linkRefs[activeSection]?.current;
    const indicator = indicatorRef.current;
    if (currentLink && indicator) {
      const { offsetLeft, offsetWidth } = currentLink;
      indicator.style.transform = `translateX(${offsetLeft}px)`;
      indicator.style.width = `${offsetWidth}px`;
    }
  }, [activeSection]);

  // 2) Scroll listener that picks the section whose top has passed
  //    30% down the viewport—works both on scroll-down and scroll-up
  useEffect(() => {
    const handleScroll = () => {
      const midY = window.innerHeight / 2;
      let current = sections[0];

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // if this section covers the vertical center…
          if (rect.top <= midY && rect.bottom >= midY) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <div className="indicator" ref={indicatorRef} />
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              ref={linkRefs[section]}
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
