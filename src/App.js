import React from "react";
import Hero from "./pages/intro/Hero";
import Header from "./components/header/Header";
import About from "./pages/about-page/About";
import Projects from "./pages/projects-page/Projects";
import Skills from "./pages/skills-page/Skills";
import Contact from "./pages/contact-page/Contact";
// import { Routes, Route } from "react-router-dom";
// import Homepage from "./pages/Homepage";
// import Aboutpage from "./pages/Aboutpage";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import PortfolioDetail from "./pages/PortfolioDetail";


const App = () => {
  return (
      // <Routes>
      //   <Route path="/" element={<Homepage />} />
      //   <Route path="about" element={<Aboutpage />} />
      //   <Route path="portfolio" element={<Portfolio />} />
      //   <Route path="portfolio/:blogPostFileName" element={<PortfolioDetail />} />
      //   <Route path="contact" element={<Contact />} />
      // </Routes>
      <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
