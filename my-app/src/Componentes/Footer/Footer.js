import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container className="footer-container">
        <Row className="footer-row">
          <Col md={4} className="footer-col">
            <h5>Nossos Serviços</h5>
            <ul className="list-unstyled">
              <li>Apresentação de orçamento</li>
              <li>Controlo e acompanhamento dos serviços</li>
              <li>Limpezas semanais</li>
              <li>Apoio jurídico aos condôminos</li>
              <li>Pequenos serviços de manutenção</li>
            </ul>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Horário de Funcionamento</h5>
            <p>Segunda a Sexta:</p>
            <p>9:00h às 12:00h e 14:00h às 19:00h</p>
          </Col>
          <Col md={4} className="footer-col">
            <h5>Contacte-nos</h5>
            <p>
              <FaPhone /> <a href="tel:+351227441656">+351 227 441 656</a>
            </p>
            <p>
              <FaMobileAlt /> <a href="tel:+351969081700">+351 969 081 700</a>
            </p>
            <p>
              <FaEnvelope />{" "}
              <a href="mailto:geral@condolitoral.pt">geral@condolitoral.pt</a>
            </p>
          </Col>
        </Row>
        <hr />
        <p className="text-center">
          © {new Date().getFullYear()} Condolitoral - Todos os direitos
          reservados. Desenvolvido por{" "}
          <a
            href="https://github.com/AfonsoCruz10"
            target="_blank"
            rel="noopener noreferrer"
          >
            Afonso Cruz
          </a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
