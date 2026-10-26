import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaPhone, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <Container className="footer-container">
        <Row className="footer-row">
          <Col md={4} className="footer-col">
            <h5>{t("footer.services")}</h5>
            <ul className="list-unstyled">
              <li>{t("footer.budget")}</li>
              <li>{t("footer.monitoring")}</li>
              <li>{t("footer.cleaning")}</li>
              <li>{t("footer.legal")}</li>
              <li>{t("footer.maintenance")}</li>
            </ul>
          </Col>
          <Col md={4} className="footer-col">
            <h5>{t("footer.hours")}</h5>
            <p>{t("footer.weekdays")}</p>
            <p>{t("footer.schedule")}</p>
          </Col>
          <Col md={4} className="footer-col">
            <h5>{t("footer.contact")}</h5>
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
          © {new Date().getFullYear()} Condolitoral - {t("footer.rights")}{" "}
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
