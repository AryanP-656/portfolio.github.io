// src/components/Layout.jsx
import React, { useEffect } from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  // Add smooth scrolling with JavaScript
  useEffect(() => {
    // Get all links that have hash (#) in them
    const navLinks = document.querySelectorAll('a[href^="#"]');

    // Add click event listeners to each nav link
    navLinks.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        // Get the target element
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Scroll to target with smooth behavior
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }, []);

  return (
    <div className="layout">
      <nav className="navigation">
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#domain">Domain</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
