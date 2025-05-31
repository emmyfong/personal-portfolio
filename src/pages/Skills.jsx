import '../styling/Skills.css';
import { useState } from 'react';
import {
  FaPython, FaJava, FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaLinux,
  FaPalette, FaUnity, FaGithub, FaMicrosoft, FaCode
} from 'react-icons/fa';
import {
  SiCplusplus, SiNextdotjs, SiFastapi, SiPytorch, SiJupyter, SiSqlite, SiBlender,
  SiMongodb, SiTailwindcss,
} from 'react-icons/si';

const skillsByDomain = {
  'Software': [
    { name: 'Python', icon: FaPython },
    { name: 'C++', icon: SiCplusplus },
    { name: 'SQL', icon: SiSqlite },
    { name: 'C', icon: FaCode },
    { name: 'C# (Unity)', icon: FaCode },
  ],
  'Web Development': [
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'MongoDB', icon: SiMongodb },
  ],
  'AI / Data': [
    { name: 'Python', icon: FaPython },
    { name: 'PyTorch', icon: SiPytorch },
    { name: 'Jupyter', icon: SiJupyter },
    { name: 'SQL', icon: SiSqlite },
  ],
  'Creative & Tools': [
    { name: 'Git', icon: FaGitAlt },
    { name: 'GitHub', icon: FaGithub },
    { name: 'Linux', icon: FaLinux },
    { name: 'VS Code', icon: FaCode },
    { name: 'Visual Studio', icon: FaCode },
    { name: 'Blender', icon: SiBlender },
    { name: 'Adobe CC', icon: FaPalette },
    { name: 'Microsoft Office', icon: FaMicrosoft },
    { name: 'Unity', icon: FaUnity },
  ]
};

function Skills() {
  const [activeTab, setActiveTab] = useState('Software');

  return (
    <section id="skills" className="skills-section">
      <h1>Skills</h1>
      <div className="tabs">
        {Object.keys(skillsByDomain).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={activeTab === category ? 'tab active' : 'tab'}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {skillsByDomain[activeTab]?.map(({ name, icon: Icon }) => (
        <div className="skill-item" key={name}>
            {Icon && <Icon className="skill-icon" />}
            <span>{name}</span>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;