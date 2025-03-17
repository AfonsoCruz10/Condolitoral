import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HeroSection from "../HeroSection/HeroSection";
import ContactSection from "../ContactSection/ContactSection";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import "./PedidoOrcamento.css";

function PedidoOrcamento() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    nomeCondominio: "",
    morada: "",
    localidade: "",
    idadeEdificio: "",
    numFracoes: "",
    numPisos: "",
    outrasInformacoes: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.nome) newErrors.nome = "Preencha o nome!";
    if (!formData.telefone) newErrors.telefone = "Preencha o telefone!";
    if (!formData.email) newErrors.email = "Preencha o e-mail!";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      nomeCondominio: "",
      morada: "",
      localidade: "",
      idadeEdificio: "",
      numFracoes: "",
      numPisos: "",
      outrasInformacoes: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.info("Por favor, preencha todos os campos obrigatórios.", {
        position: "top-right",
      });
      return;
    }

    setLoading(true);

    const serviceID =
      process.env.REACT_APP_EMAILJS_SERVICE_ID || "default_service_id";
    const templateID =
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID_PEDIDO_ORCAMENTO ||
      "default_template_id";
    const publicKey =
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "default_public_key";

    const templateParams = {
      from_name: formData.nome,
      from_email: formData.email,
      phone: formData.telefone,
      nomeCondominio: formData.nomeCondominio,
      morada: formData.morada,
      localidade: formData.localidade,
      idadeEdificio: formData.idadeEdificio,
      numFracoes: formData.numFracoes,
      numPisos: formData.numPisos,
      outrasInformacoes: formData.outrasInformacoes,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success("Pedido de Orçamento enviado com sucesso!", {
          position: "top-right",
        });
        resetForm();
        setErrors({});
      })
      .catch(() => {
        toast.error("Erro ao enviar pedido de orçamento. Tente novamente.", {
          position: "top-right",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClear = () => {
    resetForm();
    setErrors({});
  };

  return (
    <div>
      {/* HERO SECTION */}
      <HeroSection title="PEDIDO DE ORÇAMENTO" />

      {/* PEDIDO DE ORÇAMENTO CONTAINER */}
      <Container className="pedido-orcamento-container">
        <h1>Dados pessoais</h1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="nome">
                <Form.Label>
                  Nome <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={formData.nome}
                  onChange={handleChange}
                  className={errors.nome ? "input-error" : ""}
                />
                {errors.nome && <p className="error-text">{errors.nome}</p>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="telefone">
                <Form.Label>
                  Telefone <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  value={formData.telefone}
                  onChange={handleChange}
                  className={errors.telefone ? "input-error" : ""}
                />
                {errors.telefone && (
                  <p className="error-text">{errors.telefone}</p>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group controlId="email">
                <Form.Label>
                  Email <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </Form.Group>
            </Col>
          </Row>

          <h1>Informação geral do condomínio</h1>
          <Row>
            <Col md={6}>
              <Form.Group controlId="nomeCondominio">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.nomeCondominio}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="morada">
                <Form.Label>Morada</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.morada}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="localidade">
                <Form.Label>Localidade</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.localidade}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="idadeEdificio">
                <Form.Label>Idade do edifício</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.idadeEdificio}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="numFracoes">
                <Form.Label>Nº de Frações</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.numFracoes}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="numPisos">
                <Form.Label>Nº de pisos</Form.Label>
                <Form.Control
                  type="text"
                  value={formData.numPisos}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group controlId="outrasInformacoes">
                <Form.Label>Outras informações</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={formData.outrasInformacoes}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="danger" type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </Button>
          <Button
            variant="secondary"
            type="button"
            onClick={handleClear}
            disabled={loading}
            className="ml-2"
          >
            Limpar
          </Button>
        </Form>
      </Container>

      {/* SEÇÃO CONTATO */}
      <ContactSection />
    </div>
  );
}

export default PedidoOrcamento;
