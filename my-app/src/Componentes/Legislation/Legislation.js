import React from "react";
import { useTranslation } from "react-i18next";
import ContactSection from "../ContactSection/ContactSection";
import HeroSection from "../HeroSection/HeroSection";
import "./Legislation.css";

const Section = ({ title, articles }) => (
  <div className="section-container">
    <h3>{title}</h3>
    <ul>
      {articles.map((article, index) => (
        <li key={index}>{article}</li>
      ))}
    </ul>
  </div>
);

function Legislation() {
  const { t } = useTranslation();
  const sections = t("legislation.sections", { returnObjects: true });

  return (
    <div>
      {/* HERO SECTION */}
      <HeroSection title={t("legislation.hero")} />

      {/*  LEGISLATION CONTAINER */}
      <div className="legislation-container">
        <h1>{t("legislation.title")}</h1>
        <h2>{t("legislation.subtitle")}</h2>
        {sections.map(([title, articles]) => (
          <Section key={title} title={title} articles={articles} />
        ))}
      </div>

      {/* SEÇÃO CONTATO */}
      <ContactSection />
    </div>
  );
}

export default Legislation;
