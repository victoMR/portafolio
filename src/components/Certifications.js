// Certifications.js
import React, { useState } from "react";
import "../styles/Certifications.css";

const Certification = ({ title, organization, date, link }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleContent = () => {
    setIsActive(!isActive);
  };

  return (
    <li
      className={`certification ${isActive ? "active" : ""}`}
      onClick={toggleContent}
    >
      <a
        href={link} // Agregar el enlace correspondiente al certificado
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{title}</h3>
        <p className="organization">{organization}</p>
        <p className="date">{date}</p>
        <div className="certification-content">
          {/* Contenido adicional si es necesario */}
        </div>
      </a>
    </li>
  );
};
const Certifications = () => {
  const certificationsData = [
    {
      title: "Curso de Introducción a Inteligencia Artificial",
      organization: "Platzi",
      date: "Certificado",
      link: "https://platzi.com/p/ratonrangelmejia/curso/7963-ai/diploma/detalle/",
    },
    {
      title: "Certificado de Yellow Belt",
      organization: "INTERNATIONAL LEAN SIX SIGMA",
      date: "Certificado",
      link: "https://lean-certificates.s3.us-east-2.amazonaws.com/2023-10-19/certificado-Victor_Manuel_Rangel_Mejia_370.pdf"
    },
    {
      title: "Introduction to Data Science",
      organization: "Cisco",
      date: "Certificado",
      link: "https://lean-certificates.s3.us-east-2.amazonaws.com/certificados_estudiantes/cursos_online/Yellow_Belt_Sabatino/Yellow_Belt_G31/certificados/V%C3%8DCTOR_MANUEL_RANGEL_MEJ%C3%8DA.pdf"
    },
    {
      title: "Introduction to IoT",
      organization: "Cisco",
      date: "Certificado",
      link: "https://www.credly.com/badges/cdd29e76-f2c2-4379-83bd-4d0f5ad2a212/linked_in_profile"
    },
    {
      title: "NDG Linux Essentials course",
      organization: "NDG",
      date: "Certificado",
      link: "https://drive.google.com/file/d/199jTWgr5huyQu0w_OcpTE11H1_w5XhjT/view?usp=sharing"
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      organization: "Cisco",
      date: "Certificado",
      link: "https://www.credly.com/badges/f26d6615-9b28-4d44-88f6-74f0f745ea64/linked_in_profile"
    },
    {
      title: "Scrum Foundation Professional Certification - SFPC™",
      organization: "CertiProf",
      date: "Certificado",
      link: "https://www.credly.com/badges/8d745a1e-6baa-4e00-93b7-80f314addcc8/linked_in_profile"
    },
  ];

  return (
    <section className="certifications">
      <h2>Certificaciones</h2>
      <ul className="certification-list">
        {certificationsData.map((certification, index) => (
          <Certification key={index} {...certification} />
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
