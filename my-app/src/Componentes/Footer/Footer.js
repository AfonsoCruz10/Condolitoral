import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <Container className="footer-container">
                <Row className="justify-content-center footer-row">
                    <Col md={4} className="text-center footer-col">
                        <h5>Nossos Serviços</h5>
                        <ul className="list-unstyled">
                            <li>- Apresentação de orçamento</li>
                            <li>- Controle e acompanhamento dos serviços</li>
                            <li>- Limpezas semanais</li>
                            <li>- Apoio jurídico aos condôminos</li>
                            <li>- Pequenos serviços de manutenção/conservação</li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-center footer-col">
                        <h5>Funcionamento</h5>
                        <p>Seg - Sex: 9:00 - 12:00 e 14:00 - 19:00</p>
                    </Col>
                    <Col md={4} className="text-center footer-col">
                        <h5>Contacte-nos</h5>
                        <p>Telefone: 227 441 656</p>
                        <p>Telemóvel: 969 081 700</p>
                        <p>Email: geral@condolitoral.pt</p>
                    </Col>
                </Row>
                <hr className="bg-light" />
                <p className="text-center">© 2025 por Afonso Cruz</p>
            </Container>
        </footer>
    );
}

export default Footer;