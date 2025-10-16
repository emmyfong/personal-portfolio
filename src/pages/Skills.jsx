import '../styling/Skills.css';
import { useState } from 'react';
import {
  FaPython, FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaLinux,
  FaPalette, FaUnity, FaGithub, FaMicrosoft, FaCode, FaNodeJs, FaGlobe, FaJava 
} from 'react-icons/fa';
import {
  SiCplusplus, SiNextdotjs, SiFastapi, SiPytorch, SiJupyter, SiSqlite, SiBlender,
  SiMongodb, SiTailwindcss, SiFirebase, SiGooglecloud, SiFlask, SiExpress, 
  SiSocketdotio, SiFigma, SiPycharm, SiAndroidstudio 
} from 'react-icons/si';

const skillsByDomain = {
  'Programming Languages': [
    { name: 'Python', icon: FaPython },
    { name: 'C/C++', icon: SiCplusplus },
    { name: 'C#', icon: FaCode },
    { name: 'Kotlin', icon: FaCode },
    { name: 'SQL', icon: SiSqlite },
    { name: 'JavaScript', icon: FaJs },
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
  ],
  'Web Frameworks & Runtime': [
    { name: 'React', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Flask', icon: SiFlask },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'Express.js', icon: SiExpress },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
  ],
  'Databases & Cloud': [
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'SQLite', icon: SiSqlite },
    { name: 'Google Cloud Platform', icon: SiGooglecloud },
    { name: 'Firebase', icon: SiFirebase },
  ],
  'AI / Data & Libraries': [
    { name: 'PyTorch', icon: SiPytorch },
    { name: 'Jupyter Notebooks', icon: SiJupyter },
    { name: 'Pydantic', icon: FaCode },
    { name: 'Socket.IO', icon: SiSocketdotio },
  ],
  'Tools & Other Software': [
    { name: 'Git', icon: FaGitAlt },
    { name: 'GitHub', icon: FaGithub },
    { name: 'GitLab', icon: FaGithub },
    { name: 'Linux', icon: FaLinux },
    { name: 'Android Studio', icon: SiAndroidstudio },
    { name: 'Unity', icon: FaUnity },
    { name: 'VS Code', icon: FaCode },
    { name: 'Visual Studio', icon: FaCode },
    { name: 'PyCharm', icon: SiPycharm },
    { name: 'Blender', icon: SiBlender },
    { name: 'Figma', icon: SiFigma },
    { name: 'Adobe CC', icon: FaPalette },
    { name: 'Microsoft Office Suite', icon: FaMicrosoft },
  ]
};

function Skills() {
  const [activeTab, setActiveTab] = useState('Programming Languages');

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