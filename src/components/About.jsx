import { useEffect } from "react";
import { SKILLS } from "../utils/constants";
import { sr, srLeft, srRight } from "../utils/scrollReveal";

export default function About() {
  useEffect(() => {
    // Headings Animations
    sr.reveal(".top-header", {});

    // About & Contact Section Animations (Left)
    srLeft.reveal(".about-info", { delay: 100 });

    // Skills & Form Animations (Right)
    srRight.reveal(".skills-box", { delay: 100 });
  }, []);

  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              Hello world! I am well-versed in HTML, CSS, and JavaScript, as
              well as other cutting-edge frameworks and libraries. This
              expertise allows me to implement interactive features and create
              engaging, user-friendly web experiences.
            </p>
            <div className="about-btn">
              <a
                href="Jeric Javier.pdf"
                download="Jeric Javier.pdf"
                className="btn"
              >
                Download CV <i className="uil uil-import"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              {SKILLS.frontend.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              {SKILLS.backend.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Fullstack</h3>
            </div>
            <div className="skills-list">
              {SKILLS.fullstack.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
