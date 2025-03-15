import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhone } from "react-icons/fa";
import "./ContactSection.css";

function ContactSection() {
  const navigate = useNavigate();

  return (
    <div className="hero contact-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2>Tem interesse nos nossos serviços?</h2>
        <button className="hero-button" onClick={() => navigate("/contactos")}>
          <FaPhone className="icon" /> CONTACTE-NOS
        </button>
      </div>
    </div>
  );
}

export default ContactSection;
