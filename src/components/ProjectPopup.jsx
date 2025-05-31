import React from "react";
import "../styling/ProjectPopup.css";

function ProjectPopup({ project, onClose }) {
  return (
    <div className="project-popup">
      <div className="popup-content">
        <button
          className="close-button"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <h2>{project.title}</h2>

        <div className="popup-details">
          <p>{project.details}</p>
        </div>

        <div className="popup-gallery">
          {project.moreImages?.map((img, i) => (
            <a key={i} href={img} target="_blank" rel="noopener noreferrer">
              <img
                src={img}
                alt={`Screenshot ${i + 1}`}
                className="thumbnail"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPopup;
