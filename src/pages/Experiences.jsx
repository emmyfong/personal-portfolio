import "../styling/Experiences.css";
import wicsLogo from "../assets/Logos/WiCS.png";
//import experiences from "../data/experience";

export default function Experiences() {
  //const { title, company, description, date } = experiences;
  return (
    <section id="experiences" className="experiences">
      <h1>Experiences</h1>

      <div className="timeline">
        <div className="container left-container">
          <div className="logo-wrapper">
            <img src={wicsLogo} />
          </div>
          <div className="text-box">
            <h2>Test</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.{" "}
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <div className="logo-wrapper">
            <img src={wicsLogo} />
          </div>
          <div className="text-box">
            <h2>Test</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.{" "}
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
          <div className="logo-wrapper">
            <img src={wicsLogo} />
          </div>
          <div className="text-box">
            <h2>Test</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.{" "}
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <div className="logo-wrapper">
            <img src={wicsLogo} />
          </div>
          <div className="text-box">
            <h2>Test</h2>
            <small>2018 - 2019</small>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.{" "}
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
