import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Venha conhecer a nossa experiência.</h1>
          <p>Especialistas em administração de condomínios há mais de 20 anos.</p>
          <button className="hero-button" onClick={() => navigate('/orcamento')}>
            Pedir orçamento
          </button>
        </div>
      </div>

      {/* SEÇÃO APRESENTAÇÃO */}
      <div className="presentation">
        <h2>Estamos aqui para servi-lo</h2>
        <p>
          A Condolitoral é uma empresa especializada na administração de condomínios, atuando
          nos concelhos de Vila Nova de Gaia, Espinho e Santa Maria da Feira. Nossa equipe
          tem mais de 20 anos de experiência, garantindo um serviço de qualidade.
        </p>
      </div>

      {/* SEÇÃO SERVIÇOS */}
      <div className="services">
        <h2>Nossos Serviços</h2>
        <div className="service-container">
          <div className="service-card">
            <h3>Administração Completa</h3>
            <p>Gerimos o seu condomínio de forma eficiente e transparente.</p>
          </div>
          <div className="service-card">
            <h3>Assistência Jurídica</h3>
            <p>Acompanhamento jurídico para questões condominiais.</p>
          </div>
          <div className="service-card">
            <h3>Consultoria Financeira</h3>
            <p>Controle financeiro e prestação de contas detalhada.</p>
          </div>
        </div>
      </div>

      {/* SEÇÃO CONTATO */}
      <div className="hero contact-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Tem interesse nos nossos serviços?</h2>
          <button className="hero-button" onClick={() => navigate('/contactos')}>
            CONTATE-NOS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;