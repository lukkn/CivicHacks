import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
 <div className="container">
    <div className="header">
        <Link to="/login" className="auth-btn">Login</Link>
        <Link to="/signup" className="auth-btn">Sign Up</Link>
      </div>
      <div className="image-container"></div>
      <div className="form-container">
      <div className="content">
        <h1>Welcome to Science Minions</h1>
        <p>Your one-stop platform for all science-related activities.</p>
        <div className="additional-content">
        <h1>Explore Our Features</h1>
        <p>Join our community of science enthusiasts and contribute to real-world research projects.</p>
        <p>Access a wide range of resources and tools to enhance your scientific knowledge and skills.</p>
        <p>Collaborate with experts and other members to make a meaningful impact.</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Main;