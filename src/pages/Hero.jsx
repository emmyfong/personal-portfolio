import '../styling/Hero.css';
import profilePic from '../assets/profile.png';
import { Typewriter } from 'react-simple-typewriter';
import { BsArrowDown } from 'react-icons/bs';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

function Hero({ scrollToAbout }) {
  return (
    <section className="hero">

      <motion.div
        className="hero-content glass-card"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-grid">
          <div className="hero-left">
            <img src={profilePic} alt="emmy fong" className="hero-img" />
            <h1>Emmy Fong</h1>
            <h2>
              <Typewriter
                words={portfolioData.titles}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
              />
            </h2>
          </div>

          <div className="hero-right">
            {portfolioData.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

      </motion.div>
    </section>
  );
}

export default Hero;
