import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import SectionHeader from "../components/SectionHeader";
import ProjectPopupV3 from "../components/ProjectPopupV3";

const { projects } = portfolioData;

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function ProjectCard({ project, index, onClick }) {
  const { title, description, tech, date, image } = project;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariant}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 14, overflow: "hidden",
        background: "linear-gradient(180deg, rgba(20, 30, 56, 0.6), rgba(12, 18, 36, 0.7))",
        border: hovered
          ? "1px solid rgba(180, 210, 255, 0.35)"
          : "1px solid rgba(140, 170, 240, 0.15)",
        display: "flex", flexDirection: "column",
        cursor: "pointer",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 40px rgba(0, 0, 20, 0.4)" : "none",
        transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s",
      }}
    >
      {/* Cover */}
      <div style={{
        aspectRatio: "16 / 9", position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
        borderBottom: "1px solid rgba(140, 170, 240, 0.15)",
        background: image
          ? undefined
          : `linear-gradient(135deg,
              hsla(${210 + index * 18}, 55%, 35%, 0.85),
              hsla(${250 + index * 12}, 60%, 22%, 0.95))`,
      }}>
        {image ? (
          <img
            src={image}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          <>
            <div style={{
              position: "absolute", inset: 0, opacity: 0.7,
              background: `
                radial-gradient(1px 1px at 18% 28%, rgba(255,255,255,0.85), transparent),
                radial-gradient(1px 1px at 72% 22%, rgba(255,255,255,0.7), transparent),
                radial-gradient(1.5px 1.5px at 44% 62%, rgba(255,255,255,0.9), transparent),
                radial-gradient(1px 1px at 86% 78%, rgba(255,255,255,0.6), transparent),
                radial-gradient(1px 1px at 28% 82%, rgba(255,255,255,0.55), transparent)`,
            }} />
            <div style={{
              fontSize: 11, letterSpacing: 3,
              color: "rgba(255, 255, 255, 0.45)",
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              position: "relative", zIndex: 1,
            }}>
              COVER · {String(index + 1).padStart(2, "0")}
            </div>
          </>
        )}

        {/* Hover overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(10, 16, 34, 0.55)",
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.2s",
        }}>
          <span style={{
            fontSize: 12, letterSpacing: 2,
            color: "rgba(210, 225, 255, 0.9)",
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            border: "1px solid rgba(180, 210, 255, 0.4)",
            padding: "7px 16px", borderRadius: 8,
          }}>
            VIEW DETAILS
          </span>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "baseline", gap: 12, marginBottom: 6,
        }}>
          <div style={{ fontSize: 19, fontWeight: 500, color: "#e3e9f7" }}>{title}</div>
          {date && (
            <div style={{
              fontSize: 10, color: "rgba(160, 190, 240, 0.75)",
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              letterSpacing: 1, whiteSpace: "nowrap", flex: "0 0 auto",
            }}>
              {date}
            </div>
          )}
        </div>

        <div style={{
          fontSize: 13, color: "rgba(210, 220, 245, 0.78)", lineHeight: 1.55, flex: 1,
        }}>
          {description}
        </div>

        <div style={{ marginTop: 14, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {tech.map(s => (
            <span
              key={s}
              style={{
                fontSize: 10, letterSpacing: 0.5, padding: "3px 8px",
                color: "rgba(180, 200, 235, 0.75)",
                fontFamily: '"JetBrains Mono", ui-monospace, monospace',
                border: "1px solid rgba(140, 170, 240, 0.18)", borderRadius: 4,
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ isMobile }) {
  const [selected, setSelected] = useState(null);

  return (
    <section style={{ marginTop: isMobile ? 60 : 100 }}>
      <SectionHeader label="05" title="Projects" mobile={isMobile} />

      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        style={{
          marginTop: 32,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 18,
        }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} onClick={() => setSelected(p)} />
        ))}
      </motion.div>

      {selected && (
        <ProjectPopupV3 project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
