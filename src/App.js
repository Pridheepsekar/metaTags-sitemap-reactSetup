import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PortfolioDetail from "./pages/PortfolioDetail";


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="portfolio/:blogPostFileName" element={<PortfolioDetail />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
  );
};

export default App;
