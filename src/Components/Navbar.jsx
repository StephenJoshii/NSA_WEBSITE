import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/home">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/events">Events</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
