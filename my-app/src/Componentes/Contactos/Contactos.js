import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaMobileAlt } from 'react-icons/fa';
import HeroSection from '../HeroSection/HeroSection';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import './Contactos.css';


function Contactos() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "default_service_id";
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT || "default_template_id";
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "default_public_key";

        console.log(serviceID, templateID);

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                toast.success("Mensagem enviada com sucesso!", { position: "top-right" });
                setFormData({ name: "", email: "", phone: "", message: "" });
            })
            .catch((error) => {
                console.error("Erro ao enviar mensagem:", error);
                toast.error("Erro ao enviar mensagem. Tente novamente.", { position: "top-right" });
            })
            .finally(() => {
                setIsSending(false);
            });
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
                                <Form.Control 
                                    type="text" 
                                    placeholder="Nome" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </Form.Group>
                            <Row>
                                <Col md={6}>
                                    <Form.Group controlId="formEmail">
                                        <Form.Control 
                                            type="email" 
                                            placeholder="Email" 
                                            name="email" 
                                            value={formData.email} 
                                            onChange={handleChange} 
                                            required 
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formTelefone">
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Telefone" 
                                            name="phone" 
                                            value={formData.phone} 
                                            onChange={handleChange} 
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="formMensagem">
                                <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    placeholder="Mensagem" 
                                    name="message" 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </Form.Group>
                            <Button 
                                variant="danger" 
                                type="submit" 
                                disabled={isSending} 
                            >
                                Enviar
                            </Button>
                            <Button 
                                variant="secondary" 
                                type="reset" 
                                onClick={() => setFormData({ name: "", email: "", phone: "", message: "" })}
                                disabled={isSending}
                            >
                                Limpar
                            </Button>
                        </Form>
                    </Col>
                    <Col md={4} className="contact-info">
                        <div>
                            <h2>Contactos</h2>
                            <p><FaPhone /> <a href="tel:+351227441656">+351 227 441 656</a></p>
                            <p><FaMobileAlt /> <a href="tel:+351969081700">+351 969 081 700</a></p>
                            <p><FaEnvelope /> <a href="mailto:geral@condolitoral.pt">geral@condolitoral.pt</a></p>
                            <p><FaMapMarkerAlt /> Rua Santa Maria nº 999 loja 3, 4535 - 401 Santa Maria de lamas</p>
                        </div>
                    </Col>
                </Row>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.9131133556616!2d-8.572248924016154!3d40.983383371353995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2478b55bd55b21%3A0xa6dee7ce8cb9c4b0!2sCondolitoral-administra%C3%A7%C3%A3o%20De%20Condom%C3%ADnios%20Lda!5e0!3m2!1spt-PT!2spt!4v1741625964880!5m2!1spt-PT!2spt"
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Maps"
                    ></iframe>
                </div>
            </Container>
            <HeroSection title=" " />
        </>
    );
}

export default Contactos;
