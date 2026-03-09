import "../styling/Education.css";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Education() {
    return (
        <section id="education" className="education">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Education
            </motion.h1>

            <div className="education-grid">
                {portfolioData.education.map((edu, i) => (
                    <motion.div
                        key={i}
                        className="edu-card glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <div className="edu-header">
                            <h2>{edu.school}</h2>
                            <span className="edu-date">{edu.date}</span>
                        </div>
                        <h3 className="edu-degree">{edu.degree}</h3>
                        <p className="edu-desc">{edu.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}