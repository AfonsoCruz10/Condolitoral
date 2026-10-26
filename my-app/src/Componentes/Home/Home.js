import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFileInvoiceDollar,
  FaPhone,
  FaBuilding,
  FaBalanceScale,
  FaMoneyCheckAlt,
  FaTools,
  FaClipboardCheck,
  FaBroom,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "./Home.css";

function ServiceCard({ icon: Icon, title, description, isDuplicate = false }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={`service-card ${inView ? "visible" : "hidden"}`}
      tabIndex={isDuplicate ? -1 : 0}
      aria-hidden={isDuplicate}
      role="listitem"
    >
      <Icon className="service-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const services = [
    {
      icon: FaBuilding,
      title: t("home.services.administration.0"),
      description: t("home.services.administration.1"),
    },
    {
      icon: FaBalanceScale,
      title: t("home.services.legal.0"),
      description: t("home.services.legal.1"),
    },
    {
      icon: FaMoneyCheckAlt,
      title: t("home.services.finance.0"),
      description: t("home.services.finance.1"),
    },
    {
      icon: FaFileInvoiceDollar,
      title: t("home.services.budget.0"),
      description: t("home.services.budget.1"),
    },
    {
      icon: FaClipboardCheck,
      title: t("home.services.monitoring.0"),
      description: t("home.services.monitoring.1"),
    },
    {
      icon: FaBroom,
      title: t("home.services.cleaning.0"),
      description: t("home.services.cleaning.1"),
    },
    {
      icon: FaTools,
      title: t("home.services.maintenance.0"),
      description: t("home.services.maintenance.1"),
    },
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-overlay"></div>
        <div className="home-hero__content">
          <p className="eyebrow">{t("home.eyebrow")}</p>
          <h1 id="home-title">{t("home.title")}</h1>
          <p>{t("home.subtitle")}</p>
          <button
            className="hero-button"
            onClick={() => navigate("/orcamento")}
          >
            <FaFileInvoiceDollar aria-hidden="true" /> {t("home.quote")}
          </button>
        </div>
      </section>

      {/* SEÇÃO APRESENTAÇÃO */}
      <section className="presentation" aria-labelledby="presentation-title">
        <div className="content-container">
        <p className="eyebrow">{t("home.experience")}</p>
        <h2 id="presentation-title">{t("home.presentationTitle")}</h2>
        <p>{t("home.presentation")}</p>
        </div>
      </section>

      {/* SEÇÃO SERVIÇOS */}
      <section className="services" aria-labelledby="services-title">
        <div className="content-container">
        <p className="eyebrow">{t("home.whatWeDo")}</p>
        <h2 id="services-title">{t("home.servicesTitle")}</h2>
        <div className="service-container" role="list">
          <div className="service-track">
            {[false, true].map((isDuplicate) => (
              <div
                className="service-group"
                key={isDuplicate ? "duplicate" : "original"}
                aria-hidden={isDuplicate}
              >
                {services.map((service) => (
                  <ServiceCard
                    key={`${isDuplicate ? "duplicate-" : ""}${service.title}`}
                    {...service}
                    isDuplicate={isDuplicate}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* SEÇÃO CONTATO */}
      <section className="hero contact-section" aria-labelledby="contact-title">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 id="contact-title">{t("home.contactQuestion")}</h2>
          <button
            className="hero-button"
            onClick={() => navigate("/contactos")}
          >
            <FaPhone aria-hidden="true" /> {t("home.contactButton")}
          </button>
          </div>
        </section>
      </main>
  );
}

export default Home;
