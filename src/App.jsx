import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </React.Fragment>
  );
};

export default App;
