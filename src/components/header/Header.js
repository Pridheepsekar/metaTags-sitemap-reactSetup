import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // Function to handle navigation with onClick
  const handleNavigation = (path) => {
    navigate(path);  // Programmatically navigate using `useNavigate`
  };

  return (
    <header style={{ padding: "10px", background: "#111", color: "#fff" }}>
      <nav>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior (page reload)
            handleNavigation("/"); // Programmatically navigate to Home
          }}
          style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}
        >
          Home
        </a>
        <a
          href="/about/"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            handleNavigation("/about/"); // Navigate to About page
          }}
          style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}
        >
          About
        </a>
        <a
          href="/portfolio/"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            handleNavigation("/portfolio/"); // Navigate to Portfolio page
          }}
          style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}
        >
          Portfolio
        </a>
        <a
          href="/contact/"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            handleNavigation("/contact/"); // Navigate to Contact page
          }}
          style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
