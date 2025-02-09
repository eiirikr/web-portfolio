import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shadowedRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (shadowedRef.current) {
        if (window.scrollY > 50) {
          shadowedRef.current.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
          shadowedRef.current.style.height = "70px";
          shadowedRef.current.style.lineHeight = "70px";
        } else {
          shadowedRef.current.style.boxShadow = "none";
          shadowedRef.current.style.height = "90px";
          shadowedRef.current.style.lineHeight = "90px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="header" ref={shadowedRef}>
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
                spy={true}
                offset={-70}
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
}
