import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaFileInvoiceDollar, FaPhone, FaGavel } from 'react-icons/fa';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const navigateToOrcamento = () => {
    navigate('/orcamento');
  };

  const navigateToContactos = () => {
    navigate('/contactos');
  };

  const navigateToLegislacao = () => {
    navigate('/legislacao');
  };

  return (
    <>
      <div className="hero-image">
        <div className="overlay"></div>
      </div>
      <div className="home-content">
        <Container className="text-container">
          <h1><strong>Bem-vindo à Condolitoral</strong></h1>
          <p>
            Com mais de 20 anos de experiência, oferecemos serviços de administração de condomínios nos concelhos de Vila Nova de Gaia, Espinho, Santa Maria da Feira.
          </p>
          <div className="hero-buttons">
            <Button variant="primary" onClick={navigateToOrcamento}>
              <FaFileInvoiceDollar className="icon" /> Pedido de Orçamento
            </Button>
            <Button variant="secondary" onClick={navigateToContactos}>
              <FaPhone className="icon" /> Contactos
            </Button>
            <Button variant="info" onClick={navigateToLegislacao}>
              <FaGavel className="icon" /> Legislação
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;