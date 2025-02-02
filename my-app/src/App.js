import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from './Imagens/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
        <div className="contact-info">
          <span className="contact-item">Contato: 227 441 656</span>
          <span className="contact-item">Email: geral@condolitoral.pt</span>
        </div>
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand-custom">
            <img
              src={heroImage}
              width="200"
              className="d-inline-block align-top"
              alt="Condolitoral logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Início</Nav.Link>
              <Nav.Link href="#empresa">Empresa</Nav.Link>
              <Nav.Link href="#legislacao">Legislação</Nav.Link>
              <Nav.Link href="#orcamento">Pedido de orçamento</Nav.Link>
              <Nav.Link href="#contactos">Contactos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="hero-container">
        <h1>Bem-vindo à Condolitoral</h1>
        <p>
          Esta é uma unidade de herói simples, um componente de estilo jumbotron simples para chamar atenção extra para conteúdo ou informações em destaque.
        </p>

      </Container>
    </div>
  );
}

export default App;