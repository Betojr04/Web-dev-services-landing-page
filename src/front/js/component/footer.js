import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

export const Footer = () => (
  <footer className="footer mt-auto text-center custom-footer">
    <nav>
      <ul className="icon-container">
        <li>
          <a href="https://github.com/Betojr04">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/albertovaltierrajr">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCASNvNRwk2O32aUMjOoiVDA">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/betoslifee/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
    </nav>
  </footer>
);
