import React from "react";
import ReactDOM from "react-dom/client";
// import RoutesPage from "./config/routes";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./global.css";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <div className="app">
      <Header />
      <AboutMe />
      <Projects />

      <Footer />
    </div>
  </>
);
