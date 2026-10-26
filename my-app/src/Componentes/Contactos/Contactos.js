import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const formStartedAt = useRef(Date.now());
  const cooldownTimer = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(
    () => () => {
      window.clearTimeout(cooldownTimer.current);
    },
    [],
  );

  const handleChange = (e) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name) newErrors.name = t("contact.errors.nameRequired");
    else if (name.length < 2 || name.length > 80) {
      newErrors.name = t("contact.errors.nameLength");
    } else if (!/^[\p{L}][\p{L}\s.'-]*$/u.test(name)) {
      newErrors.name = t("contact.errors.nameInvalid");
    }

    if (!email) newErrors.email = t("contact.errors.emailRequired");
    else if (
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = t("contact.errors.emailInvalid");
    }

    if (!phone) newErrors.phone = t("contact.errors.phoneRequired");
    else if (
      phone.length > 25 ||
      !/^[+]?[\d\s().-]+$/.test(phone) ||
      phone.replace(/\D/g, "").length < 7
    ) {
      newErrors.phone = t("contact.errors.phoneInvalid");
    }

    if (!message) newErrors.message = t("contact.errors.messageRequired");
    else if (message.length < 10 || message.length > 2000) {
      newErrors.message = t("contact.errors.messageLength");
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      website: "",
    });
    formStartedAt.current = Date.now();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSending || cooldown) return;

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
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT?.trim();
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY?.trim();

    if (!serviceID || !templateID || !publicKey) {
      toast.error(t("contact.unavailable"), {
        position: "top-right",
      });
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast.success(t("contact.success"), {
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
        toast.error(t("contact.error"), {
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
      <HeroSection title={t("contact.hero")} />
      <Container className="contactos-container">
        <Row className="contact-content">
          <Col md={8} className="contact-form">
            <h2>{t("contact.title")}</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formNome">
                <Form.Label>
                  {t("contact.name")} <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={80}
                  required
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <p id="contact-name-error" className="error-text" role="alert">{errors.name}</p>}
              </Form.Group>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>
                      {t("contact.email")} <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength={254}
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className={errors.email ? "input-error" : ""}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="error-text" role="alert">{errors.email}</p>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formTelefone">
                    <Form.Label>
                      {t("contact.phone")} <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={25}
                      required
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                      className={errors.phone ? "input-error" : ""}
                    />
                    {errors.phone && (
                      <p id="contact-phone-error" className="error-text" role="alert">{errors.phone}</p>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formMensagem">
                <Form.Label>
                  {t("contact.message")} <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={2000}
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={errors.message ? "input-error" : ""}
                />
                {errors.message && (
                  <p id="contact-message-error" className="error-text" role="alert">{errors.message}</p>
                )}
              </Form.Group>
              <Form.Control
                className="contact-website-field"
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
                disabled={isSending || cooldown}
                aria-busy={isSending}
              >
                {isSending ? t("contact.sending") : cooldown ? t("contact.sent") : t("contact.send")}
              </Button>

              <Button
                variant="secondary"
                type="reset"
                onClick={() => handleClear()}
                disabled={isSending}
              >
                {t("contact.clear")}
              </Button>
            </Form>
          </Col>
          <Col md={4} className="contact-info">
            <div>
              <h2>{t("contact.contacts")}</h2>
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
                <FaMapMarkerAlt /> {t("contact.address")}
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
