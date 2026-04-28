import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import GalaxyBG from "./components/GalaxyBG";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Archive from "./pages/Archive";
import { portfolioData } from "./data/portfolioData";
import profileImg from "./assets/profile.png";

const NAV = [
  { id: "home",       label: "Home" },
  { id: "skills",     label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education",  label: "Education" },
  { id: "projects",   label: "Projects" },
];

function GitHubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ display: "block" }}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ display: "block" }}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67h-3.55V9h3.41v1.56h.05c.48-.9 1.63-1.86 3.36-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

function ResumeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ display: "block" }}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8 13h8v1.5H8V13zm0 3h8v1.5H8V16zm0 3h5v1.5H8V19z" />
    </svg>
  );
}

function Portfolio() {
  const [active, setActive] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const rootRef = useRef(null);
  const mainRef = useRef(null);
  const navigatingRef = useRef(false);
  const navTimerRef = useRef(null);

  const sectionRefs = {
    home:       useRef(null),
    skills:     useRef(null),
    experience: useRef(null),
    education:  useRef(null),
    projects:   useRef(null),
  };

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setIsMobile(el.clientWidth < 720));
    ro.observe(el);
    setIsMobile(el.clientWidth < 720);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    const handleScroll = () => {
      if (navigatingRef.current) return;
      const scrollTop = main.scrollTop;
      let current = "home";
      for (const id of Object.keys(sectionRefs)) {
        const el = sectionRefs[id].current;
        if (el && el.offsetTop - 80 <= scrollTop + 1) current = id;
      }
      setActive(current);
    };
    main.addEventListener("scroll", handleScroll, { passive: true });
    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = sectionRefs[id].current;
    const main = mainRef.current;
    if (el && main) {
      navigatingRef.current = true;
      setActive(id);
      main.scrollTo({ top: el.offsetTop - 32, behavior: "smooth" });
      clearTimeout(navTimerRef.current);
      navTimerRef.current = setTimeout(() => { navigatingRef.current = false; }, 900);
    }
  };

  const { name, socials } = portfolioData;

  const socialLinks = [
    { icon: <GitHubIcon size={17} />, href: socials.github,   title: "GitHub" },
    { icon: <LinkedInIcon size={17} />, href: socials.linkedin, title: "LinkedIn" },
    { icon: <ResumeIcon size={17} />,   href: socials.resume,   title: "Resume" },
  ];

  return (
    <div
      ref={rootRef}
      style={{
        position: "relative", width: "100vw", height: "100vh", overflow: "hidden",
        background: "radial-gradient(ellipse at 20% 20%, #0e1530 0%, #060a18 60%, #03050e 100%)",
        color: "#e3e9f7", fontFamily: '"Inter", system-ui, sans-serif',
      }}
    >
      <GalaxyBG />

      <div style={{
        position: "absolute", inset: 0, zIndex: 3,
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "300px 1fr",
        gridTemplateRows: isMobile ? "auto 1fr" : "1fr",
      }}>
        {/* ── SIDEBAR ── */}
        <aside style={{
          padding: isMobile ? "20px 24px" : "44px 28px",
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          alignItems: isMobile ? "center" : "stretch",
          gap: isMobile ? 16 : 28,
          borderRight: isMobile ? "none" : "1px solid rgba(140, 170, 240, 0.1)",
          borderBottom: isMobile ? "1px solid rgba(140, 170, 240, 0.1)" : "none",
          background: "linear-gradient(180deg, rgba(10, 16, 34, 0.6), rgba(8, 12, 28, 0.85))",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          overflowX: isMobile ? "auto" : "visible",
          flexShrink: 0,
        }}>
          {/* Profile block */}
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            alignItems: isMobile ? "center" : "stretch",
            gap: isMobile ? 14 : 18,
            flex: isMobile ? "0 0 auto" : "none",
          }}>
            <img
              src={profileImg}
              alt={name}
              style={{
                width: isMobile ? 44 : 92,
                height: isMobile ? 44 : 92,
                borderRadius: "50%",
                border: "1px solid rgba(150, 180, 240, 0.25)",
                boxShadow: "0 0 36px rgba(80, 120, 200, 0.25)",
                objectFit: "cover",
                flex: "0 0 auto",
              }}
            />
            <div>
              <h1 style={{
                fontSize: isMobile ? 18 : 26, margin: "0 0 2px",
                fontWeight: 500, letterSpacing: -0.4, color: "#e3e9f7",
              }}>{name}</h1>
              <div style={{ fontSize: isMobile ? 11 : 13, color: "rgba(200, 215, 240, 0.7)" }}>
                Computer Science Student
              </div>
              {!isMobile && (
                <div style={{
                  fontSize: 11, color: "rgba(180, 200, 235, 0.5)", marginTop: 4,
                  fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                }}>
                  Vancouver, BC
                </div>
              )}
            </div>
          </div>

          {/* Nav */}
          <nav style={{
            display: isMobile ? "flex" : "grid",
            gap: isMobile ? 4 : 2,
            flex: isMobile ? 1 : "none",
            overflowX: isMobile ? "auto" : "visible",
            justifyContent: isMobile ? "flex-end" : "stretch",
          }}>
            {NAV.map(n => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: isMobile ? "8px 12px" : "10px 14px",
                  border: "none", borderRadius: 8,
                  background: active === n.id ? "rgba(140, 170, 240, 0.12)" : "transparent",
                  color: active === n.id ? "#fff" : "rgba(200, 215, 240, 0.65)",
                  fontSize: isMobile ? 12 : 14, cursor: "pointer", textAlign: "left",
                  transition: "all 0.15s", whiteSpace: "nowrap",
                  fontWeight: active === n.id ? 500 : 400,
                  fontFamily: '"Inter", system-ui, sans-serif',
                }}
              >
                <span style={{
                  width: 6, height: 6, borderRadius: "50%", flex: "0 0 auto",
                  background: active === n.id
                    ? "radial-gradient(circle, #fff, #a0c0ff 60%, transparent 80%)"
                    : "rgba(140, 170, 240, 0.3)",
                  boxShadow: active === n.id ? "0 0 8px rgba(180, 210, 255, 0.7)" : "none",
                  transition: "all 0.2s",
                }} />
                {n.label}
              </button>
            ))}
          </nav>

          {/* Social icons — desktop only */}
          {!isMobile && (
            <div style={{ marginTop: "auto", display: "flex", gap: 8 }}>
              {socialLinks.map(({ icon, href, title }) => (
                <a
                  key={title}
                  href={href}
                  title={title}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  style={{
                    width: 38, height: 38, borderRadius: 10,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(20, 30, 56, 0.55)",
                    border: "1px solid rgba(140, 170, 240, 0.18)",
                    color: "rgba(210, 225, 245, 0.85)",
                    transition: "all 0.18s",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          )}
        </aside>

        {/* ── CONTENT ── */}
        <main
          ref={mainRef}
          style={{
            overflowY: "auto",
            padding: isMobile ? "32px 24px 80px" : "56px 60px 120px",
          }}
        >
          <div ref={sectionRefs.home}>
            <Hero isMobile={isMobile} />
          </div>
          <div ref={sectionRefs.skills}>
            <Skills isMobile={isMobile} />
          </div>
          <div ref={sectionRefs.experience}>
            <Experiences isMobile={isMobile} />
          </div>
          <div ref={sectionRefs.education}>
            <Education isMobile={isMobile} />
          </div>
          <div ref={sectionRefs.projects}>
            <Projects isMobile={isMobile} />
          </div>
        </main>
      </div>
    </div>
  );
}

function AppWrapper() {
  const location = useLocation();
  if (location.pathname === "/archive") return <Archive />;
  return <Portfolio />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AppWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}
