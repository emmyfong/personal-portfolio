import "../styling/Experiences.css";
import wicsLogo from "../assets/Logos/WiCS.png";
import whitebox from "../assets/Logos/whitebox.jpeg"
import sfu from "../assets/Logos/SFU.jpg"
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
            <h2>Treasurer</h2>
            <h3>Women in Computer Science</h3>
            <h4>Simon Fraser University</h4>
            <small>May 2025 - Present</small>
            <p>
              Responsible for overseeing annual budget planning and maintaining accurate financial records in alignment with university funding policies. Developed and maintained a comprehensive Google spreadsheet to track income, reimbursements, and expenditures, significantly enhancing financial accuracy and transparency. Enforced organizational financial procedures, including motion approvals for spending and detailed documentation of receipts and transactions.{" "}
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <div className="logo-wrapper">
            <img src={whitebox} />
          </div>

          <div className="text-box">
            <h2>Freelance Web Developer</h2>
            <h3>Whitebox Coworking</h3>
            <small>May 2025 - Present</small>
            <p>
              Led the redevelopment of the Whitebox Coworking website to improve performance and user experience. Integrated a MongoDB database with a Next.js frontend using Motor to enable asynchronous data handling. Built a dedicated admin portal on a separate port to manage content securely, incorporating dynamic CRUD forms and image upload functionality using MongoDB GridFS.{" "}
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
          <div className="logo-wrapper">
            <img src={sfu} />
          </div>
          <div className="text-box">
            <h2>Research Assistant</h2>
            <h3>Simon Fraser University</h3>
            <small>Sep. 2024 - Dec. 2024</small>
            <p>
              Conducted research on the use of augmented reality in medical education, with a focus on enhancing student engagement through simulation-based learning. Evaluated academic literature and analyzed AR techniques for overlaying 3D anatomical visuals onto mannequins. Contributed to the development of performance benchmarks to support future AR tool design and usability assessment.{" "}
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>


      </div>
    </section>
  );
}
