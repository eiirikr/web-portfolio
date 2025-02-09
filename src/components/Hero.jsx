import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { SOCIAL_LINKS } from "../utils/constants";
import { sr } from "../utils/scrollReveal";
export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Software Engineer", "Web Developer", "Full Stack Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });

    // Home Section Animations
    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 300 });

    // Cleanup to prevent memory leaks
    return () => typed.destroy();
  }, []);

  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Jeric Javier</span>
        </div>
        <div className="featured-name">
          <p>I want to be a </p>
          <span className="typedText" ref={typedRef}></span>
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
          <a
            href="Jeric Javier.pdf"
            download="Jeric Javier.pdf"
            className="btn"
          >
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
          <img src="src/assets/avatar.jpg" alt="avatar" loading="lazy" />
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
}
