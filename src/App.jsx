import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Parallax from "./components/Parallax";
import Services from "./components/Services";
import Gallary from "./components/Gallary";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <section id="Homepage" className="snap-start">
        <Header />
        <Hero />
      </section>
      <section id="Services" className="snap-start h-[100vh]">
        <Parallax />
      </section>
      <section className="snap-start">
        <Services />
      </section>
      <section id="Gallary" className="snap-start h-[100vh]">
        <Gallary />
      </section>
      <section id="About" className="snap-start h-[100vh]">
        <About />
      </section>
      <section id="Contact" className="snap-start min-h-screen overflow-hidden">
        <Contact />
      </section>
    </div>
  );
};

export default App;
