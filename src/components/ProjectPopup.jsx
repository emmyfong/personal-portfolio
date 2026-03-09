import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "../styling/ProjectPopup.css";
import { motion } from "framer-motion";

function ProjectPopup({ project, onClose }) {
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
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close project details"
        >
          &times;
        </button>

        <h2>{project.title}</h2>

        <div className="project-popup-buttons">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-popup btn-code">
              View Code
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-popup btn-demo">
              Live Demo
            </a>
          )}
        </div>

        <div className="popup-details">
          <p>{project.details}</p>
        </div>

        {(project.image || project.moreImages) && (
          <div className="popup-gallery bento-grid">
            {project.image && (
              <div className="bento-item main-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}
            {project.moreImages?.map((img, i) => (
              <div key={i} className={`bento-item sub-image-${i % 4}`}>
                <img src={img} alt={`Screenshot ${i + 1}`} />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>,
    document.body
  );
}

export default ProjectPopup;
