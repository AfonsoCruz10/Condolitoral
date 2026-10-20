import React from "react";
import { useNavigate } from "react-router-dom";
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

function ServiceCard({ icon: Icon, title, description }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <div ref={ref} className={`service-card ${inView ? "visible" : "hidden"}`}>
      <Icon className="service-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <main>
      {/* HERO SECTION */}
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-overlay"></div>
        <div className="home-hero__content">
          <p className="eyebrow">Administração de condomínios</p>
          <h1 id="home-title">Experiência e proximidade para o seu condomínio.</h1>
          <p>
            Gestão profissional, transparente e próxima há mais de 20 anos.
          </p>
          <button
            className="hero-button"
            onClick={() => navigate("/orcamento")}
          >
            <FaFileInvoiceDollar aria-hidden="true" /> Pedir orçamento
          </button>
        </div>
      </section>

      {/* SEÇÃO APRESENTAÇÃO */}
      <section className="presentation" aria-labelledby="presentation-title">
        <div className="content-container">
        <p className="eyebrow">A nossa experiência</p>
        <h2 id="presentation-title">Estamos aqui para o servir</h2>
        <p>
          A Condolitoral é uma empresa especializada na administração de
          condomínios, atuando nos concelhos de Vila Nova de Gaia, Espinho e
          Santa Maria da Feira. Nossa equipa tem mais de 20 anos de experiência,
          garantindo um serviço de qualidade.
        </p>
        </div>
      </section>

      {/* SEÇÃO SERVIÇOS */}
      <section className="services" aria-labelledby="services-title">
        <div className="content-container">
        <p className="eyebrow">O que fazemos</p>
        <h2 id="services-title">Serviços para uma gestão tranquila</h2>
        <div className="service-container">
          <ServiceCard
            icon={FaBuilding}
            title="Administração Completa"
            description="Gerimos o seu condomínio de forma eficiente e transparente."
          />
          <ServiceCard
            icon={FaBalanceScale}
            title="Apoio Jurídico aos Condóminos"
            description="Suporte jurídico para os moradores do condomínio."
          />
          <ServiceCard
            icon={FaMoneyCheckAlt}
            title="Consultoria Financeira"
            description="Controlo financeiro e prestação de contas detalhada."
          />
          <ServiceCard
            icon={FaFileInvoiceDollar}
            title="Apresentação de Orçamento"
            description="Apresentação de orçamento detalhado para o seu condomínio."
          />
          <ServiceCard
            icon={FaClipboardCheck}
            title="Controlo e Acompanhamento dos Serviços"
            description="Monitoramento contínuo dos serviços prestados."
          />
          <ServiceCard
            icon={FaBroom}
            title="Limpezas Semanais"
            description="Serviços de limpeza semanal para manter o condomínio impecável."
          />
          <ServiceCard
            icon={FaTools}
            title="Pequenos Serviços de Manutenção / Conservação"
            description="Realização de pequenos reparos e manutenção."
          />
        </div>
        </div>
      </section>

      {/* SEÇÃO CONTATO */}
      <section className="hero contact-section" aria-labelledby="contact-title">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2 id="contact-title">Tem interesse nos nossos serviços?</h2>
          <button
            className="hero-button"
            onClick={() => navigate("/contactos")}
          >
            <FaPhone aria-hidden="true" /> CONTACTE-NOS
          </button>
          </div>
        </section>
      </main>
  );
}

export default Home;
