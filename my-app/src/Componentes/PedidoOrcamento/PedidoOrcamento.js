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
    const field = e.target.name || e.target.id;
    setFormData({ ...formData, [field]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.nome) newErrors.nome = "Preencha o nome!";
    if (!formData.telefone) newErrors.telefone = "Preencha o telefone!";
    if (!formData.email) newErrors.email = "Preencha o e-mail!";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Indique um e-mail válido!";
    }
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
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.nome)}
                  aria-describedby={errors.nome ? "budget-name-error" : undefined}
                  className={errors.nome ? "input-error" : ""}
                />
                {errors.nome && <p id="budget-name-error" className="error-text" role="alert">{errors.nome}</p>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="telefone">
                <Form.Label>
                  Telefone <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.telefone)}
                  aria-describedby={errors.telefone ? "budget-phone-error" : undefined}
                  className={errors.telefone ? "input-error" : ""}
                />
                {errors.telefone && (
                  <p id="budget-phone-error" className="error-text" role="alert">{errors.telefone}</p>
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "budget-email-error" : undefined}
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <p id="budget-email-error" className="error-text" role="alert">{errors.email}</p>}
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
                  name="nomeCondominio"
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
                  name="morada"
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
                  name="localidade"
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
                  name="idadeEdificio"
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
                  name="numFracoes"
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
                  name="numPisos"
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
                  name="outrasInformacoes"
                  rows={3}
                  value={formData.outrasInformacoes}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="danger" type="submit" disabled={loading} aria-busy={loading}>
            {loading ? "A enviar..." : "Enviar"}
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
