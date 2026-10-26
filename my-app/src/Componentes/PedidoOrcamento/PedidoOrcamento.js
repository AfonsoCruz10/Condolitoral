import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HeroSection from "../HeroSection/HeroSection";
import ContactSection from "../ContactSection/ContactSection";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import "./PedidoOrcamento.css";

function PedidoOrcamento() {
  const { t } = useTranslation();
  const formStartedAt = useRef(Date.now());
  const cooldownTimer = useRef(null);
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
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(
    () => () => {
      window.clearTimeout(cooldownTimer.current);
    },
    [],
  );

  const handleChange = (e) => {
    const field = e.target.name || e.target.id;
    setFormData((current) => ({ ...current, [field]: e.target.value }));
  };

  const validateForm = () => {
    const newErrors = {};
    const name = formData.nome.trim();
    const phone = formData.telefone.trim();
    const email = formData.email.trim().toLowerCase();

    if (!name) newErrors.nome = t("contact.errors.nameRequired");
    else if (name.length < 2 || name.length > 80) {
      newErrors.nome = t("contact.errors.nameLength");
    } else if (!/^[\p{L}][\p{L}\s.'-]*$/u.test(name)) {
      newErrors.nome = t("contact.errors.nameInvalid");
    }

    if (!phone) newErrors.telefone = t("contact.errors.phoneRequired");
    else if (
      phone.length > 25 ||
      !/^[+]?[\d\s().-]+$/.test(phone) ||
      phone.replace(/\D/g, "").length < 7
    ) {
      newErrors.telefone = t("contact.errors.phoneInvalid");
    }

    if (!email) newErrors.email = t("contact.errors.emailRequired");
    else if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t("contact.errors.emailInvalid");
    }

    const maxLengths = {
      nomeCondominio: 120,
      morada: 180,
      localidade: 100,
      idadeEdificio: 4,
      numFracoes: 5,
      numPisos: 3,
      outrasInformacoes: 2000,
    };

    Object.entries(maxLengths).forEach(([field, maxLength]) => {
      if (formData[field].trim().length > maxLength) {
        newErrors[field] = t("contact.errors.maxLength");
      }
    });

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
      website: "",
    });
    formStartedAt.current = Date.now();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading || cooldown) return;

    if (formData.website.trim()) {
      toast.error(t("contact.invalidForm"), {
        position: "top-right",
      });
      return;
    }

    if (Date.now() - formStartedAt.current < 3000) {
      toast.info(t("contact.wait"), {
        position: "top-right",
      });
      return;
    }

    if (!validateForm()) {
      toast.info(t("contact.requiredFields"), {
        position: "top-right",
      });
      return;
    }

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID?.trim();
    const templateID =
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID_PEDIDO_ORCAMENTO?.trim();
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY?.trim();

    if (!serviceID || !templateID || !publicKey) {
      toast.error(t("contact.unavailable"), {
        position: "top-right",
      });
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: formData.nome.trim(),
      from_email: formData.email.trim().toLowerCase(),
      phone: formData.telefone.trim(),
      nomeCondominio: formData.nomeCondominio.trim(),
      morada: formData.morada.trim(),
      localidade: formData.localidade.trim(),
      idadeEdificio: formData.idadeEdificio.trim(),
      numFracoes: formData.numFracoes.trim(),
      numPisos: formData.numPisos.trim(),
      outrasInformacoes: formData.outrasInformacoes.trim(),
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success(t("quote.success"), {
          position: "top-right",
        });
        resetForm();
        setErrors({});
        setCooldown(true);
        cooldownTimer.current = window.setTimeout(
          () => setCooldown(false),
          60_000,
        );
      })
      .catch(() => {
        toast.error(t("quote.error"), {
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
      <HeroSection title={t("quote.hero")} />

      {/* PEDIDO DE ORÇAMENTO CONTAINER */}
      <Container className="pedido-orcamento-container">
        <h1>{t("quote.personal")}</h1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="nome">
                <Form.Label>
                  {t("contact.name")} <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.nome)}
                  aria-describedby={
                    errors.nome ? "budget-name-error" : undefined
                  }
                  className={errors.nome ? "input-error" : ""}
                  maxLength={80}
                />
                {errors.nome && (
                  <p id="budget-name-error" className="error-text" role="alert">
                    {errors.nome}
                  </p>
                )}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="telefone">
                <Form.Label>
                  {t("contact.phone")} <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.telefone)}
                  aria-describedby={
                    errors.telefone ? "budget-phone-error" : undefined
                  }
                  className={errors.telefone ? "input-error" : ""}
                  maxLength={25}
                />
                {errors.telefone && (
                  <p
                    id="budget-phone-error"
                    className="error-text"
                    role="alert"
                  >
                    {errors.telefone}
                  </p>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group controlId="email">
                <Form.Label>
                  {t("contact.email")} <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "budget-email-error" : undefined
                  }
                  className={errors.email ? "input-error" : ""}
                  maxLength={254}
                />
                {errors.email && (
                  <p
                    id="budget-email-error"
                    className="error-text"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </Form.Group>
            </Col>
          </Row>

          <h1>{t("quote.general")}</h1>
          <Row>
            <Col md={6}>
              <Form.Group controlId="nomeCondominio">
                <Form.Label>{t("quote.condoName")}</Form.Label>
                <Form.Control
                  type="text"
                  name="nomeCondominio"
                  value={formData.nomeCondominio}
                  onChange={handleChange}
                  maxLength={120}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="morada">
                <Form.Label>{t("quote.address")}</Form.Label>
                <Form.Control
                  type="text"
                  name="morada"
                  value={formData.morada}
                  onChange={handleChange}
                  maxLength={180}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="localidade">
                <Form.Label>{t("quote.locality")}</Form.Label>
                <Form.Control
                  type="text"
                  name="localidade"
                  value={formData.localidade}
                  onChange={handleChange}
                  maxLength={100}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="idadeEdificio">
                <Form.Label>{t("quote.buildingAge")}</Form.Label>
                <Form.Control
                  type="text"
                  name="idadeEdificio"
                  value={formData.idadeEdificio}
                  onChange={handleChange}
                  maxLength={4}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group controlId="numFracoes">
                <Form.Label>{t("quote.units")}</Form.Label>
                <Form.Control
                  type="text"
                  name="numFracoes"
                  value={formData.numFracoes}
                  onChange={handleChange}
                  maxLength={5}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="numPisos">
                <Form.Label>{t("quote.floors")}</Form.Label>
                <Form.Control
                  type="text"
                  name="numPisos"
                  value={formData.numPisos}
                  onChange={handleChange}
                  maxLength={3}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group controlId="outrasInformacoes">
                <Form.Label>{t("quote.otherInfo")}</Form.Label>
                <Form.Control
                  as="textarea"
                  name="outrasInformacoes"
                  rows={3}
                  value={formData.outrasInformacoes}
                  onChange={handleChange}
                  maxLength={2000}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Control
            className="budget-website-field"
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <Button
            variant="danger"
            type="submit"
            disabled={loading || cooldown}
            aria-busy={loading}
          >
            {loading ? t("contact.sending") : cooldown ? t("contact.sent") : t("contact.send")}
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
