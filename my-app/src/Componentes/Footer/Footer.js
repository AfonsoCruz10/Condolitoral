import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className="footer-container">
        <Row className="justify-content-center footer-row">
          <Col md={4} className="text-center footer-col">
            <h5>Nossos Serviços</h5>
            <ul className="list-unstyled">
              <li>- Apresentação de orçamento</li>
              <li>- Controlo e acompanhamento dos serviços</li>
              <li>- Limpezas semanais</li>
              <li>- Apoio jurídico aos condôminos</li>
              <li>- Pequenos serviços de manutenção/conservação</li>
            </ul>
          </Col>
          <Col md={4} className="text-center footer-col">
            <h5>Horário de Funcionamento</h5>
            <p>Segunda a Sexta:</p>
            <p>9:00h às 12:00h e 14:00h às 19:00h</p>
          </Col>
          <Col md={4} className="text-center footer-col">
            <h5>Contacte-nos</h5>
            <p>
              <FaPhone />{" "}
              <a href="tel:+351227441656" className="text-white">
                +351 227 441 656
              </a>
            </p>
            <p>
              <FaMobileAlt />{" "}
              <a href="tel:+351969081700" className="text-white">
                +351 969 081 700
              </a>
            </p>
            <p>
              <FaEnvelope />{" "}
              <a href="mailto:geral@condolitoral.pt" className="text-white">
                geral@condolitoral.pt
              </a>
            </p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <p className="text-center">
          © 2025 por{" "}
          <a
            href="https://github.com/AfonsoCruz10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Afonso Cruz
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
