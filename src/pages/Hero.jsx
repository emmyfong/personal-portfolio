import Particle from '../components/Particle';
import '../styling/Hero.css';
import profilePic from '../assets/profile.png';
import { Typewriter } from 'react-simple-typewriter';
import { BsArrowDown } from 'react-icons/bs';

function Hero({ scrollToAbout }) {
  return (
    <section className="hero">
      <div className="particle-container">
        <Particle />
      </div>

      <div className="hero-content">
        <img src={profilePic} alt="emmy fong" className="hero-img" />
        <h1>Emmy Fong</h1>
        <h2>
          <Typewriter
            words={["Student", "Full-Stack Developer", "Game Developer", "Researcher"]}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
          />
        </h2>

        {/* When clicked, this calls scrollToAbout() (passed from App) */}
        <div className="down-arrow" onClick={scrollToAbout}>
          <BsArrowDown size={32} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
