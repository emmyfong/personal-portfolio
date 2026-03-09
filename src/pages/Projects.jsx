import '../styling/Projects.css'
import { portfolioData } from '../data/portfolioData';
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectPopup from "../components/ProjectPopup.jsx";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  // Display all projects as requested
  const displayProjects = portfolioData.projects;

  return (
    <section id="projects" className='projects'>
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Featured Projects
      </motion.h1>

      <div className="projects-grid">
        {displayProjects.map((p, i) => (
          <ProjectCard
            key={i}
            index={i}
            project={p}
            onReadMore={(proj) => setSelected(proj)}
          />
        ))}
      </div>

      {selected && (
        <ProjectPopup project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
