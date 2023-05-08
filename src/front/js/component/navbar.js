import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <nav className="navbar-menu">
          <Link to="/home" className="navbar-link">
            Home
          </Link>
          <Link to="/aboutme" className="navbar-link">
            About
          </Link>
          <Link to="/projectspage" className="navbar-link">
            Projects
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};
