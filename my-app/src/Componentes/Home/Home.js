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
    <div>
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Venha conhecer a nossa experiência.</h1>
          <p>
            Especialistas em administração de condomínios há mais de 20 anos.
          </p>
          <button
            className="hero-button"
            onClick={() => navigate("/orcamento")}
          >
            <FaFileInvoiceDollar className="icon" /> Pedir orçamento
          </button>
        </div>
      </div>

      {/* SEÇÃO APRESENTAÇÃO */}
      <div className="presentation">
        <h2>Estamos aqui para o servir</h2>
        <p>
          A Condolitoral é uma empresa especializada na administração de
          condomínios, atuando nos concelhos de Vila Nova de Gaia, Espinho e
          Santa Maria da Feira. Nossa equipa tem mais de 20 anos de experiência,
          garantindo um serviço de qualidade.
        </p>
      </div>

      {/* SEÇÃO SERVIÇOS */}
      <div className="services">
        <h2>Nossos Serviços</h2>
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

      {/* SEÇÃO CONTATO */}
      <div className="hero contact-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Tem interesse nos nossos serviços?</h2>
          <button
            className="hero-button"
            onClick={() => navigate("/contactos")}
          >
            <FaPhone className="icon" /> CONTACTE-NOS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
