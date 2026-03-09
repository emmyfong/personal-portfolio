import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styling/Intro.css';

const Intro = ({ onComplete }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            if (onComplete) onComplete();
        }, 2500); // 2.5 seconds for the intro

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="intro-container"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                >
                    <div className="intro-content">
                        <motion.div
                            className="intro-logo"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <span className="intro-text-highlight">EF</span>
                        </motion.div>

                        <motion.div
                            className="intro-bar-container"
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                        >
                            <div className="intro-bar" />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            className="intro-tagline"
                        >
                            Building the future.
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Intro;
