import React from "react";
import "../styles/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({
  title,
  imageSrc,
  description,
  technologies,
  githubLink,
}) => {
  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="project card">
      <img src={imageSrc} alt={title} onDragStart={preventDragHandler} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <img
              key={index}
              src={`https://img.shields.io/badge/${tech.label}-${tech.color}?style=${tech.style}&logo=${tech.logo}&logoColor=${tech.logoColor}`}
              alt={tech.label}
              className="technology-badge"
              onDragStart={preventDragHandler}
              style={{ margin: "1.2rem" }}
            />
          ))}
        </div>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="goToGit">
          <FontAwesomeIcon icon={faGithub} /> View on GitHub
        </a>
      </div>
    </div>
  );
};


const Projects = () => {
  const projectsData = [
    {
      title: "Reconocimiento Facial con Raspberry PI 5",
      imageSrc: process.env.PUBLIC_URL + "/img/proyect1.png",
      description: "Reconocimiento biométrico para ingreso universitario.",
      technologies: [
        {
          label: "Python",
          color: "3776AB",
          style: "for-the-badge",
          logo: "python",
          logoColor: "white",
        },
        {
          label: "OpenCV",
          color: "5C3EE8",
          style: "for-the-badge",
          logo: "opencv",
          logoColor: "white",
        },
        {
          label: "Raspberry Pi",
          color: "A22846",
          style: "for-the-badge",
          logo: "raspberry-pi",
          logoColor: "white",
        },
      ],
      githubLink: "https://github.com/victoMR/proyect-facerecon",
    },
    {
      title: "Oryumon",
      imageSrc: process.env.PUBLIC_URL + "/img/proyect2.png",
      description: "Punto de venta.",
      technologies: [
        {
          label: "Firebase",
          color: "FFCA28",
          style: "for-the-badge",
          logo: "firebase",
          logoColor: "white",
        },
        {
          label: "EJS",
          color: "2B2D2E",
          style: "for-the-badge",
          logo: "ejs",
          logoColor: "white",
        },
        {
          label: "JavaScript",
          color: "F7DF1E",
          style: "for-the-badge",
          logo: "javascript",
          logoColor: "black",
        },
      ],
      githubLink: "https://github.com/victoMR/Oryumon",
    },
    {
      title: "Qronecta",
      imageSrc: process.env.PUBLIC_URL + "/img/proyect3.png",
      description: "Reducción brecha digital en Querétaro.",
      technologies: [
        {
          label: "Firebase",
          color: "FFCA28",
          style: "for-the-badge",
          logo: "firebase",
          logoColor: "white",
        },
        {
          label: "EJS",
          color: "2B2D2E",
          style: "for-the-badge",
          logo: "ejs",
          logoColor: "white",
        },
        {
          label: "JavaScript",
          color: "F7DF1E",
          style: "for-the-badge",
          logo: "javascript",
          logoColor: "black",
        },
        {
          label: "SQL",
          color: "4479A1",
          style: "for-the-badge",
          logo: "postgresql",
          logoColor: "white",
        },
      ],
      githubLink: "https://github.com/victoMR/Qronecta-Hackhaton",
    },
  ];

  return (
    <div className="card">
      <h2>Proyectos</h2>
      <div className="projects">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
