// Footer.js
import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const name = "Victor Manuel Rangel Mejia";
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();

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
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            href="https://github.com/victorrangelm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="mailto:vmrmtoweb@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
          {/* Icono de React */}
          <FontAwesomeIcon icon={faReact} className="icon" title="Hecho con React" style={{
            color: "#4ad5fe"
          }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
