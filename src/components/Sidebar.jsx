import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaRegFileAlt } from 'react-icons/fa';
import '../styling/Sidebar.css';
import { motion, AnimatePresence } from 'framer-motion';
import ResumeViewer from './ResumeViewer';

export default function Sidebar() {
    const { github, linkedin, resume } = portfolioData.socials;
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <>
            <motion.div
                className="sticky-sidebar"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <div className="sidebar-icons">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub />
                        </a>
                    )}
                    {linkedin && (
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin />
                        </a>
                    )}
                    {resume && (
                        <a 
                            aria-label="Resume" 
                            style={{ cursor: 'pointer' }}
                            onClick={() => setIsResumeOpen(true)}
                        >
                            <FaRegFileAlt />
                        </a>
                    )}
                </div>
                <div className="sidebar-line"></div>
            </motion.div>

            <AnimatePresence>
                {isResumeOpen && (
                    <ResumeViewer 
                        resumeUrl={resume} 
                        onClose={() => setIsResumeOpen(false)} 
                    />
                )}
            </AnimatePresence>
        </>
    );
}
