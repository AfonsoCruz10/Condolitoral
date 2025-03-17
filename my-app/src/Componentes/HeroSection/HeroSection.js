import React from "react";
import "./HeroSection.css";

const HeroSection = ({ title }) => (
  <div className="hero top">
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <h1>{title}</h1>
    </div>
  </div>
);

export default HeroSection;
