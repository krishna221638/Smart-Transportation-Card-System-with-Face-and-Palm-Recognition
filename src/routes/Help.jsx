import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./HelpStyles.css"; // Add a CSS file for the Help route

const Help = () => {
  return (
    <div className="help-page">
      <Navbar />

      <div className="help-content">
        <h1>Help Center</h1>
        <p>
          Welcome to the Enhanced Transport System help center. This guide will
          assist you in navigating and using our system's biometric and
          card-based recognition features.
        </p>

        <h2>1. Palm Recognition</h2>
        <p>
          Palm recognition technology allows users to authenticate by scanning
          the unique patterns on the surface of their hands. To use this
          feature, simply place your hand over the scanning device at the
          transport entry point. Our AI-powered system will quickly verify your
          identity and grant access to the transport.
        </p>

        <h2>2. Face Recognition</h2>
        <p>
          Face recognition uses cutting-edge AI algorithms to identify users
          based on facial features. This contactless technology ensures that you
          can swiftly pass through the entry points without needing physical
          cards. Simply look into the camera, and the system will authenticate
          you in seconds.
        </p>

        <h2>3. Card Integration</h2>
        <p>
          For those who prefer using smart cards, our system integrates
          seamlessly with a variety of card types. Tap your card at the
          transport entry and enjoy a hassle-free experience. You can recharge
          your card balance online or at designated kiosks.
        </p>

        <h2>4. Common Issues</h2>
        <p>
          - If your palm or face recognition fails, ensure the scanning devices
          are clean, and your hands/face are clearly visible. Try removing any
          obstructions like gloves or sunglasses. - If your card doesn’t work,
          check the balance and try again. If the issue persists, contact our
          support team.
        </p>

        <h2>5. Contact Support</h2>
        <p>
          If you experience any issues, you can contact our support team at any
          time. We are here to assist you and ensure your journey is smooth and
          secure.
        </p>

        <p>
          Thank you for choosing our Enhanced Transport System! We hope you have
          a safe and pleasant journey.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Help;
