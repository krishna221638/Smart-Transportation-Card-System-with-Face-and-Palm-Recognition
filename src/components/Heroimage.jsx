import "./Heroimagestyles.css";
import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import IntroImg from "../assets/homebackground.png";
import PalmImage from "../assets/palm.png"; // Replace with the correct image path
import FaceImage from "../assets/face.png"; // Replace with the correct image path
import CardImage from "../assets/card.png"; // Replace with the correct image path

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="homebackground" src={IntroImg} alt="IntroImg" />
      </div>

      <div className="content">
        <h1>Welcome to Enhanced Transport System</h1>
        <p>Biometric and Card Recognition</p>

        <div className="image-row">
          <div className="image-container">
            <h2 className="image-title">Palm Recognition</h2>
            {/* Link to the Palm Recognition page or section */}
            <Link to="/palm-recognition">
              <img
                className="feature-image"
                src={PalmImage}
                alt="Palm Recognition"
              />
            </Link>
            <p className="image-description">
              Palm recognition technology provides secure and seamless identity
              verification by analyzing unique patterns on the surface of the
              hand. Ideal for contactless public transport systems.
            </p>
          </div>

          <div className="image-container">
            <h2 className="image-title">Face Recognition</h2>
            {/* Link to the Face Recognition page or section */}
            <Link to="/face-recognition">
              <img
                className="feature-image"
                src={FaceImage}
                alt="Face Recognition"
              />
            </Link>
            <p className="image-description">
              Face recognition offers a user-friendly way to verify identity
              using AI-powered image analysis, ensuring quick and safe access to
              transport services without the need for physical contact.
            </p>
          </div>

          <div className="image-container">
            <h2 className="image-title">Card Integration</h2>
            {/* Link to the Card Integration page or section */}
            <Link to="/card-integration">
              <img
                className="feature-image"
                src={CardImage}
                alt="Card Integration"
              />
            </Link>
            <p className="image-description">
              Card integration simplifies public transport payments through
              smart card technology, enabling fast and secure travel with stored
              balances and tap-and-go convenience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
