import React from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../HeroSection/HeroSection";
import ContactSection from "../ContactSection/ContactSection";
import "./Empresa.css";

function Empresa() {
  const { t } = useTranslation();
  return (
    <div>
      {/* HERO SECTION */}
      <HeroSection title={t("company.hero")} />

      {/* EMPRESA CONTAINER */}
      <div className="empresa-container">
        <h1>{t("company.title")}</h1>
        {t("company.paragraphs", { returnObjects: true }).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {/* SEÇÃO CONTATO */}
      <ContactSection />
    </div>
  );
}

export default Empresa;
