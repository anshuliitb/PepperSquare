import React from "react";
import "./Navbar.css";

const logoUrl = "../../../school_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoUrl} alt="School Logo" />
      </div>
      <ul className="navbar-menu">
        <li>The School</li>
        <li>Academics</li>
        <li>Life @ DBTR</li>
        <li>Contact Us</li>
      </ul>
      <div className="navbar-buttons">
        <button className="csr-btn">CSR</button>
        <button className="donate-btn">Donate 🤍</button>
      </div>
    </nav>
  );
};

export default Navbar;
