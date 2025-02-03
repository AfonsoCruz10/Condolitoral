import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Container className="hero-container">
        <h1><strong>Estamos aqui para servi-lo</strong></h1>
        <p>
          A Condolitoral administração de condomínio é uma empresa de Administração de Condomínios com mais de 20 anos de actividade a actuar essencialmente nos concelhos de Vila Nova de Gaia, Espinho, Santa Maria da Feira.
        </p>
      </Container>
    </div>
  );
}

export default Home;