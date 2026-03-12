import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "../styling/ResumeViewer.css";
import { motion } from "framer-motion";

function ResumeViewer({ resumeUrl, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!resumeUrl) return null;

  return createPortal(
    <div className="resume-viewer-overlay" onClick={onClose}>
      <motion.div
        className="resume-viewer-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="resume-close-button"
          onClick={onClose}
          aria-label="Close resume viewer"
        >
          &times;
        </button>

        <div className="resume-iframe-container">
          <iframe 
            src={resumeUrl.startsWith('http') 
              ? `https://docs.google.com/viewer?url=${encodeURIComponent(resumeUrl)}&embedded=true`
              : `${resumeUrl}#toolbar=0`} 
            title="Resume"
            width="100%" 
            height="100%" 
            frameBorder="0"
          >
            <p>Your browser does not support PDFs. <a href={resumeUrl}>Download the PDF</a>.</p>
          </iframe>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}

export default ResumeViewer;
