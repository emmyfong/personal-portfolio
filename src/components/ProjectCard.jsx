import '../styling/ProjectCard.css'
import { motion } from 'framer-motion';

export default function ProjectCard({ project, onReadMore, index }) {
    const { title, image } = project;

    return (
        <motion.div
            className="project-card-small glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => onReadMore(project)}
        >
            <div className="project-card-image">
                {image ? (
                    <img src={image} alt={title} />
                ) : (
                    <div className="placeholder-image">No Image</div>
                )}
                <div className="project-card-overlay">
                    <span>View Details</span>
                </div>
            </div>
            <div className="project-card-title">
                <h3>{title}</h3>
            </div>
        </motion.div>
    );
}
