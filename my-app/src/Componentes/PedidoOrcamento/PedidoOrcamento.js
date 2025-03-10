import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HeroSection from '../HeroSection/HeroSection';
import ContactSection from '../ContactSection/ContactSection';
import './PedidoOrcamento.css';

function PedidoOrcamento() {
    return (
        <div>
            {/* HERO SECTION */}
            <HeroSection title="PEDIDO DE ORÇAMENTO" />

            {/* PEDIDO DE ORÇAMENTO CONTAINER */}
            <Container className="pedido-orcamento-container">
                <h1>Dados pessoais</h1>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Nome" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="telefone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control type="text" placeholder="Telefone" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <h1>Informação geral do condomínio</h1>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="nome-condominio">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Nome do condomínio" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="morada">
                                <Form.Label>Morada</Form.Label>
                                <Form.Control type="text" placeholder="Morada" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="localidade">
                                <Form.Label>Localidade</Form.Label>
                                <Form.Control type="text" placeholder="Localidade" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="idade-edificio">
                                <Form.Label>Idade do edifício</Form.Label>
                                <Form.Control type="text" placeholder="Idade do edifício" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="num-fracoes">
                                <Form.Label>Nº de Frações</Form.Label>
                                <Form.Control type="text" placeholder="Nº de Frações" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="num-pisos">
                                <Form.Label>Nº de pisos</Form.Label>
                                <Form.Control type="text" placeholder="Nº de pisos" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Group controlId="outras-informacoes">
                                <Form.Label>Outras informações</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Outras informações" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="danger" type="submit">Enviar</Button>
                </Form>
            </Container>

            {/* SEÇÃO CONTATO */}
            <ContactSection />
        </div>
    );
}

export default PedidoOrcamento;