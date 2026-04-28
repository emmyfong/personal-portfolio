import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ProjectPopupV3({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!project) return null;

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(3, 5, 14, 0.85)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px 16px",
        animation: "fadeIn 0.2s ease",
      }}
    >
      <style>{`@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%", maxWidth: 680,
          maxHeight: "90vh",
          overflowY: "auto",
          borderRadius: 18,
          background: "linear-gradient(160deg, rgba(14, 21, 40, 0.97), rgba(8, 12, 28, 0.98))",
          border: "1px solid rgba(140, 170, 240, 0.2)",
          boxShadow: "0 32px 80px rgba(0, 0, 20, 0.7)",
          animation: "slideUp 0.22s ease",
          fontFamily: '"Inter", system-ui, sans-serif',
          color: "#e3e9f7",
        }}
      >
        <style>{`@keyframes slideUp { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }`}</style>

        {/* Cover image or gradient */}
        <div style={{
          aspectRatio: "16 / 9", width: "100%",
          borderRadius: "18px 18px 0 0", overflow: "hidden",
          background: project.image
            ? undefined
            : "linear-gradient(135deg, hsla(220, 55%, 30%, 0.9), hsla(260, 55%, 18%, 0.95))",
          position: "relative",
          flexShrink: 0,
        }}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          ) : (
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{
                position: "absolute", inset: 0, opacity: 0.6,
                background: `
                  radial-gradient(1px 1px at 15% 25%, rgba(255,255,255,0.9), transparent),
                  radial-gradient(1.5px 1.5px at 70% 20%, rgba(255,255,255,0.8), transparent),
                  radial-gradient(1px 1px at 42% 65%, rgba(255,255,255,0.85), transparent),
                  radial-gradient(1px 1px at 85% 75%, rgba(255,255,255,0.6), transparent),
                  radial-gradient(1px 1px at 25% 80%, rgba(255,255,255,0.55), transparent),
                  radial-gradient(1px 1px at 60% 40%, rgba(255,255,255,0.5), transparent)`,
              }} />
              <span style={{
                fontSize: 11, letterSpacing: 3,
                color: "rgba(255, 255, 255, 0.4)",
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                position: "relative", zIndex: 1,
              }}>
                {project.title.toUpperCase()}
              </span>
            </div>
          )}

          {/* Additional images as bento below main if present */}
        </div>

        {/* Body */}
        <div style={{ padding: "28px 32px 32px" }}>
          {/* Header row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 4 }}>
            <h2 style={{ fontSize: 24, fontWeight: 500, margin: 0, color: "#e3e9f7", letterSpacing: -0.3 }}>
              {project.title}
            </h2>
            {project.date && (
              <span style={{
                fontSize: 10, color: "rgba(150, 180, 240, 0.7)",
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                letterSpacing: 1, whiteSpace: "nowrap", flex: "0 0 auto", paddingTop: 4,
              }}>
                {project.date}
              </span>
            )}
          </div>

          {/* Tech tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
            {project.tech.map(t => (
              <span
                key={t}
                style={{
                  fontSize: 10, padding: "3px 9px", borderRadius: 4,
                  border: "1px solid rgba(140, 170, 240, 0.22)",
                  color: "rgba(180, 205, 255, 0.8)",
                  fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                  letterSpacing: 0.4,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Description */}
          <div style={{
            fontSize: 14, lineHeight: 1.7, marginTop: 20,
            color: "rgba(215, 225, 245, 0.85)",
          }}>
            {project.details || project.description}
          </div>

          {/* Links */}
          {(project.github || project.link) && (
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    padding: "9px 18px", borderRadius: 9,
                    background: "rgba(30, 45, 85, 0.5)",
                    border: "1px solid rgba(140, 170, 240, 0.25)",
                    color: "rgba(210, 225, 250, 0.9)",
                    fontSize: 13, fontWeight: 500,
                    transition: "all 0.18s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(180, 210, 255, 0.5)";
                    e.currentTarget.style.background = "rgba(40, 60, 110, 0.6)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(140, 170, 240, 0.25)";
                    e.currentTarget.style.background = "rgba(30, 45, 85, 0.5)";
                  }}
                >
                  <GitHubIcon size={14} /> GitHub
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    padding: "9px 18px", borderRadius: 9,
                    background: "rgba(80, 110, 200, 0.18)",
                    border: "1px solid rgba(140, 170, 240, 0.3)",
                    color: "rgba(200, 220, 255, 0.9)",
                    fontSize: 13, fontWeight: 500,
                    transition: "all 0.18s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(180, 210, 255, 0.5)";
                    e.currentTarget.style.background = "rgba(80, 110, 200, 0.3)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(140, 170, 240, 0.3)";
                    e.currentTarget.style.background = "rgba(80, 110, 200, 0.18)";
                  }}
                >
                  ↗ Live Demo
                </a>
              )}
            </div>
          )}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 14, right: 14,
            width: 32, height: 32, borderRadius: "50%",
            border: "1px solid rgba(140, 170, 240, 0.25)",
            background: "rgba(10, 16, 34, 0.7)",
            color: "rgba(200, 215, 245, 0.8)",
            fontSize: 16, lineHeight: 1,
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.15s",
            zIndex: 1,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(30, 45, 85, 0.9)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(10, 16, 34, 0.7)";
            e.currentTarget.style.color = "rgba(200, 215, 245, 0.8)";
          }}
        >
          ×
        </button>
      </div>
    </div>,
    document.body
  );
}

function GitHubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ display: "block", flexShrink: 0 }}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.94 10.94 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}
