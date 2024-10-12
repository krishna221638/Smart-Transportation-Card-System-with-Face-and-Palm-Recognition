import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Help from "./routes/Help";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
};

export default App;
