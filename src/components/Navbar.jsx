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
          <li className="nav_list">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="nav-link active-link"
            >
              Home
            </Link>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <Link to="about" smooth={true} duration={500} className="nav-link">
              About
            </Link>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Projects
            </Link>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Contact
            </Link>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
      <div className="nav-menu-btn" onClick={toggleMenu}>
        <i className="uil uil-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
