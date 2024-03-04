// Header.js
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../styles/Header.css";

const Header = () => {
  const openToWorkHandler = () => {
    window.open("https://www.linkedin.com/in/victorrangelm/", "_blank");
  };

  const sendEmailHandler = () => {
    window.location.href = "mailto:vmrmtoweb@gmail.com";
  };

  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <header className="header">
      <div className="profile-container">
        <img
          src={process.env.PUBLIC_URL + "/img/yom2.jpg"}
          alt="Victor Manuel Rangel Mejia"
          className="profile-img"
          onDragStart={preventDragHandler}
        />
      </div>
      <div className="open-to-work">
        <button className="openWorkButton" onClick={openToWorkHandler} onDragStart={preventDragHandler}>
          Open to work
        </button>
        <a href="mailto:vmrmtoweb@gmail.com" className="email-icon" onClick={sendEmailHandler}>
          <FontAwesomeIcon icon={faEnvelope} className="icon" style={{
            color: "black",
            fontSize: "1.5rem",
          }} />
        </a>
      </div>
    </header>
  );
};

export default Header;
