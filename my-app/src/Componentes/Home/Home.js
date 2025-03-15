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
import "./Home.css";

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
          <div className="service-card">
            <FaBuilding className="service-icon" />
            <h3>Administração Completa</h3>
            <p>Gerimos o seu condomínio de forma eficiente e transparente.</p>
          </div>
          <div className="service-card">
            <FaBalanceScale className="service-icon" />
            <h3>Apoio Jurídico aos Condôminos</h3>
            <p>Suporte jurídico para os moradores do condomínio.</p>
          </div>
          <div className="service-card">
            <FaMoneyCheckAlt className="service-icon" />
            <h3>Consultoria Financeira</h3>
            <p>Controlo financeiro e prestação de contas detalhada.</p>
          </div>
          <div className="service-card">
            <FaFileInvoiceDollar className="service-icon" />
            <h3>Apresentação de Orçamento</h3>
            <p>Apresentação de orçamento detalhado para o seu condomínio.</p>
          </div>
          <div className="service-card">
            <FaClipboardCheck className="service-icon" />
            <h3>Controlo e Acompanhamento dos Serviços</h3>
            <p>Monitoramento contínuo dos serviços prestados.</p>
          </div>
          <div className="service-card">
            <FaBroom className="service-icon" />
            <h3>Limpezas Semanais</h3>
            <p>
              Serviços de limpeza semanal para manter o condomínio impecável.
            </p>
          </div>
          <div className="service-card">
            <FaTools className="service-icon" />
            <h3>Pequenos Serviços de Manutenção / Conservação</h3>
            <p>Realização de pequenos reparos e manutenção.</p>
          </div>
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
