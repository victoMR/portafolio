// Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contacto</h2>
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/victorrangelm/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/victorrangelm/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="mailto:tucorreo@vmrmtoweb@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
