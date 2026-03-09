import '../styling/Skills.css';
import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

function Skills() {
  const [activeTab, setActiveTab] = useState(Object.keys(portfolioData.skills)[0]);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container glass-card">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Skills
        </motion.h1>

        <motion.div
          className="tabs"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {Object.keys(portfolioData.skills).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={activeTab === category ? 'tab active' : 'tab'}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="skills-grid"
          key={activeTab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {portfolioData.skills[activeTab]?.map((skill, index) => (
            <motion.div
              className="skill-item"
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <span>{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;