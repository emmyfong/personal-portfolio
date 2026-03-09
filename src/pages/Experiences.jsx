import "../styling/Experiences.css";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";
import { useState } from "react";
import ExperiencePopup from "../components/ExperiencePopup";
import { BsCalendar } from "react-icons/bs";

export default function Experiences() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="experiences" className="experiences">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Work Experience
      </motion.h1>

      <div className="experiences-grid">
        {portfolioData.experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="exp-card glass-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            onClick={() => setSelected(exp)}
          >
            <div className="exp-content">
              <h2>{exp.role}</h2>
              <h3 className="exp-org">{exp.organization}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <BsCalendar /> <span>{exp.date}</span>
              </div>
              <div className="exp-tags">
                {exp.tags.map((tag, j) => (
                  <span key={j} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
            <div className="exp-overlay">
              <span>View Details</span>
            </div>
          </motion.div>
        ))}
      </div>

      {selected && (
        <ExperiencePopup project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
