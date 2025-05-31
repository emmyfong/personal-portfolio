import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import projects from '../data/projects'
import ProjectPopup from '../components/ProjectPopup'
import '../styling/Archive.css'

export default function Archive() {
  const navigate = useNavigate()
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="archive-page">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Go Back
      </button>

      <h1 className="archive-title">All Projects</h1>

      <div className="table-container">
        <table className="projects-table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Built With</th>
              <th>GitHub</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, i) => (
              <tr
                key={i}
                onClick={() => setSelectedProject(project)}
                className="project-row"
              >
                <td className="project-name">{project.title}</td>
                <td className="project-tech">
                  {project.tech?.map((tech, j) => (
                    <span key={j} className="tech-pill">{tech}</span>
                  ))}
                </td>
                <td>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="project-github">Link</a>
                  )}
                </td>
                <td>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="project-link"
                    >
                      Link
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedProject && (
        <ProjectPopup
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}
