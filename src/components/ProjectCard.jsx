import '../styling/ProjectCard.css'
import { motion as Motion } from 'framer-motion';

export default function ProjectCard({ project, onReadMore }) {
    const { title, description, image, tech, github, link } = project

    return (
        <Motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="project-content">
                <h3>{title}</h3>
                <p className="made-with">
                    <strong>Made with:</strong>
                    {tech.map((t, i) => (
                        <span className="tech-pill" key={i}>{t}</span>
                    ))}
                </p>
                <p className="project-description">{description}</p>

                <div className="project-buttons">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn outline"
                        >
                            GitHub
                        </a>
                    )}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn outline"
                        >
                            Project
                        </a>
                    )}
                    <button className="btn primary" onClick={() => onReadMore(project)}>
                        Details
                    </button>
                </div>
            </div>
            <div className="project-image">
                <img src={image} alt={title} />
            </div>
        </Motion.div>
    )
}
