import React from "react";
import { SOCIAL_LINKS } from "../utils/constants";

const Hero = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Jeric Javier</span>
        </div>
        <div className="featured-name">
          <p>I want to be a </p>
          <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            A passionate web developer enthusiastic about building functional,
            user-friendly, and visually appealing websites.
          </p>
        </div>
        <div className="featured-text-btn">
          <a href="mailto:javierjericm@gmail.com" className="btn blue-btn">
            Hire Me
          </a>
          <a href="src\assets\Jeric Javier.pdf" className="btn">
            Download CV <i className="uil uil-file-alt"></i>
          </a>
        </div>
        <div className="social_icons">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <i className={link.icon}></i>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src="src\assets\avatar.jpg" alt="avatar" loading="lazy" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default Hero;
