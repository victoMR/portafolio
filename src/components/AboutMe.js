// src/components/AboutMe.js
import React from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {
  // si la persona arrasta la imagen , bloquear la accion
  const preventDragHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="about-me">
      <h2>Hey, soy Victor Manuel Rangel Mejia</h2>
      <h4>Estudiente de TI</h4>
      <p>
        Soy un apasionado estudiante de Tecnologías de la Información con un enfoque integral en el desarrollo Full Stack. Mi experiencia se centra en tecnologías líderes que abarcan desde el desarrollo web hasta la gestión de bases de datos y la ciencia de datos.
      </p>
      <div className="skills-container">
        <div className="column">
          <div className="skill" >
            <h3>Desarrollo web</h3>
            <p>
              <img
                src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white"
                alt="React.js"
                onDragStart={preventDragHandler}
              />
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="HTML5"
                onDragStart={preventDragHandler}
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS3"
                onDragStart={preventDragHandler}
              />
              <img
                src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                alt="JavaScript"
                onDragStart={preventDragHandler}
              />
              <img
                src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
                alt="Node.js"
                onDragStart={preventDragHandler}
              />
              <img
                src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"
                alt="npm"
                onDragStart={preventDragHandler}
              />
            </p>
          </div>
          <div className="skill">
            <h3>Programación orientada a objetos</h3>
            <p>
              <img
                src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
                alt="C++"
                onDragStart={preventDragHandler}
              />
            </p>
          </div>
        </div>
        <div className="column">
          <div className="skill">
            <h3>Cloud y bases de datos</h3>
            <p>
              <img
                src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white"
                alt="SQL"
                onDragStart={preventDragHandler}
              />
              <img
                src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
                alt="MongoDB"
                onDragStart={preventDragHandler}
              />
              <img
                src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white"
                alt="Firebase"
                onDragStart={preventDragHandler}
              />
              <img
                src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"
                alt="AWS"
                onDragStart={preventDragHandler}
              />
            </p>
          </div>
        </div>
        <div className="column">
          <div className="skill">
            <h3>Ciencia de datos</h3>
            <p>
              <img
                src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
                alt="Python"
                onDragStart={preventDragHandler}
              />
            </p>
          </div>
          <div className="skill">
            <h3>Diseño</h3>
            <p>
              <img
                src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                alt="Bootstrap"
                onDragStart={preventDragHandler}
              />
              <img
                src="https://img.shields.io/badge/Canva-00C4CC?style=for-the-badge&logo=canva&logoColor=white"
                alt="Canva"
                onDragStart={preventDragHandler}
              />
              <img
                src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
                alt="Figma"
                onDragStart={preventDragHandler}
              />
            </p>
          </div>
        </div>
        <div className="column">
          <div className="skill">
            <h3>Aprendiendo</h3>
            <p>
              <img
                src="https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white"
                alt="Solidity"
                onDragStart={preventDragHandler}
              />
              <img
                src="https://img.shields.io/badge/Blockchain-121D33?style=for-the-badge&logo=blockchain.com&logoColor=white"
                alt="Blockchain"
                onDragStart={preventDragHandler}
              />
              <img
                src="https://img.shields.io/badge/Astro-000000?style=for-the-badge&logo=astro&logoColor=white"
                alt="Astro"
                onDragStart={preventDragHandler}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
