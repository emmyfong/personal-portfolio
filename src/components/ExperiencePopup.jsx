import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "../styling/ProjectPopup.css";
import { motion } from "framer-motion";
import { BsCalendar } from "react-icons/bs";

function ExperiencePopup({ project, onClose }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    if (!project) return null;

    return createPortal(
        <div className="project-popup" onClick={onClose}>
            <motion.div
                className="popup-content"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
            >
                <button className="close-button" onClick={onClose} aria-label="Close details">
                    &times;
                </button>

                <h2>{project.role}</h2>
                <h3 style={{ color: "var(--color-text-primary)", marginBottom: "0.5rem" }}>
                    {project.organization}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
                    <BsCalendar /> <span>{project.date}</span>
                </div>

                <div className="popup-details">
                    <p>{project.description}</p>
                </div>

                <div className="exp-tags" style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
                    {project.tags?.map((tag, j) => (
                        <span key={j} className="tag-pill" style={{
                            fontSize: "0.8rem",
                            padding: "0.3rem 0.8rem",
                            backgroundColor: "var(--color-bg-secondary)",
                            color: "var(--color-text-secondary)",
                            border: "1px solid var(--color-card-border)",
                            borderRadius: "999px",
                            fontWeight: 500
                        }}>{tag}</span>
                    ))}
                </div>
            </motion.div>
        </div>,
        document.body
    );
}

export default ExperiencePopup;
