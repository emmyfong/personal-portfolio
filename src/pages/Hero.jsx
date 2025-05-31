import Particle from '../components/Particle';
import '../styling/Hero.css';
import profilePic from '../assets/profile.png'
import { Typewriter } from 'react-simple-typewriter'
import { BsArrowDown } from 'react-icons/bs'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="particle-container">
        <Particle />
      </div>

      <div className="hero-content">
        <img src={profilePic} alt="emmy fong" className="hero-img" />
        <h1>Emmy Fong</h1>
        <h2><Typewriter
            words = {["Student", "Full-Stack Developer", "Game Developer", "Researcher"]}
            loop = {0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
             />
        </h2>

        <a href="#about" className="down-arrow">
            <BsArrowDown size={32}/>
        </a>
      </div>
    </section>
  );
}

export default Hero;
