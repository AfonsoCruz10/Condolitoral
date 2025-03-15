import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import ContactSection from "../ContactSection/ContactSection";
import "./Empresa.css";

function Empresa() {
  return (
    <div>
      {/* HERO SECTION */}
      <HeroSection title="EMPRESA" />

      {/* EMPRESA CONTAINER */}
      <div className="empresa-container">
        <h1>Quem somos</h1>
        <p>
          A Condolitoral administração de condomínio é uma empresa de
          Administração de Condomínios com mais de 20 anos de actividade a
          actuar essencialmente nos concelhos de Vila Nova de Gaia, Espinho,
          Santa Maria da Feira. Temos 5 colaboradores divididos em serviços
          externos e internos. Nas nossas relações comerciais privilegiamos
          sempre o contacto pessoal e de proximidade. Temos acordos
          preferenciais com prestadores de serviços em todas as áreas
          permitem-nos também oferecer aos condóminos um atendimento rápido e
          eficiente.
        </p>
        <p>Forte experiência em reabilitação de edifícios.</p>
        <p>
          A qualidade dos nossos serviços e a nossa experiência são reconhecidos
          pelos nossos condóminos.
        </p>
        <p>Agradecemos o seu contato para a administração do seu edifício.</p>
      </div>

      {/* SEÇÃO CONTATO */}
      <ContactSection />
    </div>
  );
}

export default Empresa;
