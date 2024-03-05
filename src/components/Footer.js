// Footer.js
import React, { useState, useEffect } from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowUp, faFileAlt, } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const name = "Victor Manuel Rangel Mejia";
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="left-section">
        <p className="testFooter">
          &copy; {añoActual} {name}. Casi todos los derechos reservados 😊.
        </p>
      </div>
      <div className="right-section">
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/victorrangelm/"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            href="https://github.com/victoMR"
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="mailto:vmrmtoweb@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
          <a
            href= { process.env.PUBLIC_URL + "/docs/Curriculum Vitae VMRM.pdf" }
            target="_blank"
            rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faFileAlt}
              className="icon"
              title="Currículum"
            />
          </a>
          {/* Icono de React */}
          <FontAwesomeIcon
            icon={faReact}
            className="icon"
            title="Hecho con React"
            style={{
              color: "#4ad5fe",
            }}
          />
          {/* Botón de Scroll to Top */}
          {showScroll && (
            <FontAwesomeIcon
              icon={faArrowUp}
              className="icon"
              title="Scroll to Top"
              onClick={scrollToTop}
            />
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
