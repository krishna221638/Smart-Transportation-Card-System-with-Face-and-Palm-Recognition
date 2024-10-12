// Footer.jsx
import React from "react";
import "./Footerstyles.css"; // Ensure this file exists and the path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
      <p className="copyright">
        © 2024 Transport System. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
