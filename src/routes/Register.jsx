import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./LoginStyles.css"; // You can use the same styles or create new ones for Register

const Register = () => {
  return (
    <div className="login-page">
      {/* Background Image */}
      <div className="background-image"></div>

      <Navbar />

      <div className="login-container">
        <h1>Register</h1>
        <form>
          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter Username" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter Password" />
          </div>
          <button type="button" className="google-sign">
            Register
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
