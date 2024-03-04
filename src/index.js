import React from "react";
import ReactDOM from "react-dom/client";
// import RoutesPage from "./config/routes";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div className="app">
      <Header />
      <AboutMe />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  </>
);
