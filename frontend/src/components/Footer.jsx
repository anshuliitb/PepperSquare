import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo and School Info */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/school_logo.png" alt="DBTR Logo" />
          </div>
          <div className="footer-info">
            <h2>DBTR National Higher Secondary School</h2>
            <p className="tagline">
              <strong>Virtuousness is Life</strong>
            </p>
            <br />

            <p>
              Established in 1901, DBTR is situated in the temple town of
              Mayiladuthurai.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <a href="#">Admissions</a>
            </li>
            <li>
              <a href="#">Alumni Association</a>
            </li>
            <li>
              <a href="#">Donate</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>CONTACT</h3>
          <p>
            <strong>DBTR NHSS,</strong>
          </p>
          <p>
            Mahadhana Street,
            <br />
            Kamarajar Salai,
            <br />
            Mayiladuthurai,
            <br />
            Tamilnadu – 609001
          </p>
          <p>+91.436.422.3272</p>
          <a href="mailto:contact@nationalhighschool.in">
            contact@nationalhighschool.in
          </a>
        </div>

        {/* Donate Section */}
        <div className="footer-donate">
          <h3>Big or small, you can make an impact.</h3>
          <button className="donate-btn">Donate 🤍</button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>
            © DBTR 2023, All Rights Reserved &nbsp;&nbsp;| &nbsp;&nbsp;
            <a href="#">Sitemap</a>
          </p>
          <br />
          <div>
            <p>Designed by </p>
            <span className="pepper-square">
              <img src="../../Pepper_Square_Logo.png" />
            </span>
          </div>
        </div>
        <div className="footer-bottom-right">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
