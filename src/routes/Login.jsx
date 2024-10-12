import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./LoginStyles.css";

const Login = () => {
  const navigate = useNavigate(); // Create a navigate instance

  return (
    <div className="login-page">
      {/* Background Image */}
      <div className="background-image"></div>

      <Navbar />

      <div className="login-container">
        <h1>Login</h1>
        <form>
          <div className="input-group">
            <label>Enter Email</label>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button" className="google-sign">
              Login
            </button>
          </div>
          <p>or</p>
          <button
            type="button"
            className="google-signup"
            onClick={() => navigate("/register")} // Use navigate to switch routes
          >
            Register
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
