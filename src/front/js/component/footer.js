import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <div className="icon-container">
      <a href="https://github.com/Betojr04">
        <i className="fa-brands fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/albertovaltierrajr">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a>
        <i className="fa-brands fa-youtube"></i>
      </a>
      <a>
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
  </footer>
);
