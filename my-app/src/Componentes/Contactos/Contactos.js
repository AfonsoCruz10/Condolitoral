import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaMobileAlt,
} from "react-icons/fa";
import HeroSection from "../HeroSection/HeroSection";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import "./Contactos.css";

function Contactos() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Preencha o nome!";
    if (!formData.email) newErrors.email = "Preencha o e-mail!";
    if (!formData.phone) newErrors.phone = "Preencha o telefone!";
    if (!formData.message) newErrors.message = "Digite sua mensagem!";
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.info("Por favor, preencha todos os campos obrigatórios.", {
        position: "top-right",
      });
      return;
    }

    setIsSending(true);

    const serviceID =
      process.env.REACT_APP_EMAILJS_SERVICE_ID || "default_service_id";
    const templateID =
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT ||
      "default_template_id";
    const publicKey =
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "default_public_key";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success("Mensagem enviada com sucesso!", {
          position: "top-right",
        });
        resetForm();
        setErrors({});
      })
      .catch(() => {
        toast.error("Erro ao enviar mensagem. Tente novamente.", {
          position: "top-right",
        });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleClear = () => {
    resetForm();
    setErrors({});
  };

  return (
    <>
      <HeroSection title="CONTACTOS" />
      <Container className="contactos-container">
        <Row className="contact-content">
          <Col md={8} className="contact-form">
            <h2>Entre em contacto</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formNome">
                <Form.Label>
                  Nome <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>
                      Email <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "input-error" : ""}
                    />
                    {errors.email && (
                      <p className="error-text">{errors.email}</p>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formTelefone">
                    <Form.Label>
                      Telefone <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? "input-error" : ""}
                    />
                    {errors.phone && (
                      <p className="error-text">{errors.phone}</p>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formMensagem">
                <Form.Label>
                  Mensagem <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "input-error" : ""}
                />
                {errors.message && (
                  <p className="error-text">{errors.message}</p>
                )}
              </Form.Group>
              <Button variant="danger" type="submit" disabled={isSending}>
                {isSending ? "Enviando..." : "Enviar"}
              </Button>

              <Button
                variant="secondary"
                type="reset"
                onClick={() => handleClear()}
                disabled={isSending}
              >
                Limpar
              </Button>
            </Form>
          </Col>
          <Col md={4} className="contact-info">
            <div>
              <h2>Contactos</h2>
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
              <p>
                <FaMapMarkerAlt /> Rua Santa Maria nº 999 loja 3, 4535 - 401
                Santa Maria de lamas
              </p>
            </div>
          </Col>
        </Row>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.9131133556616!2d-8.572248924016154!3d40.983383371353995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2478b55bd55b21%3A0xa6dee7ce8cb9c4b0!2sCondolitoral-administra%C3%A7%C3%A3o%20De%20Condom%C3%ADnios%20Lda!5e0!3m2!1spt-PT!2spt"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
            style={{ borderRadius: 10 }}
          ></iframe>
        </div>
      </Container>
      <HeroSection title=" " />
    </>
  );
}

export default Contactos;
