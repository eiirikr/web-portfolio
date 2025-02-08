import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Jer</p>
        <span>.</span>
      </div>

      <div
        className={`nav-menu ${isMenuOpen ? "responsive" : ""}`}
        id="myNavMenu"
      >
        <ul className="nav_menu_list">
          {["home", "about", "projects", "contact"].map((section, index) => (
            <li className="nav_list" key={index}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                spy={true} // Makes the active link dynamic
                offset={-70} // Adjusts for fixed navbar height if needed
                activeClass="active-link"
                className="nav-link"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
              <div className="circle"></div>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-button">
        <a
          href="Jeric Javier.pdf"
          download="Jeric Javier.pdf"
          className="btn"
          aria-label="Download CV"
        >
          Download CV <i className="uil uil-file-alt"></i>
        </a>
      </div>

      <div
        className="nav-menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <i className="uil uil-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
