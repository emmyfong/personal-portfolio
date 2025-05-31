/* Connects the Projects section to the homepage */

import projects from '../data/projects'
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectPopup from "../components/ProjectPopup.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../styling/Projects.css'

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className='projects'>
      <h1>Featured Projects</h1>
      {projects
        .filter((p) => p.featured)
        .map((p) => (
          <ProjectCard
            key={p.slug}
            project={p}
            onReadMore={(proj) => setSelected(proj)}
          />
        ))}

      {selected && (
        <ProjectPopup project={selected} onClose={() => setSelected(null)} />
      )}

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <Link to="/archive" className="btn">
          See all projects →
        </Link>
      </div>
    </section>
  );
}
