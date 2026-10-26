import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa";
import "./ContactSection.css";

function ContactSection() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="hero contact-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2>{t("home.contactQuestion")}</h2>
        <button className="hero-button" onClick={() => navigate("/contactos")}>
          <FaPhone className="icon" /> {t("home.contactButton")}
        </button>
      </div>
    </div>
  );
}

export default ContactSection;
