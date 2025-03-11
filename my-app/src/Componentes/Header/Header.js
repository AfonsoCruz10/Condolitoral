import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import heroImage from '../../Assets/logo.png';
import './Header.css';

function Header() {
    const location = useLocation();
    return (
        <>
            <Navbar bg="white" variant="white" expand="lg" className="px-4">
                <Container className='navbar-container'>
                    <Navbar.Brand href="/" className="navbar-brand-custom">
                        <img
                            src={heroImage}
                            width="250"
                            className="d-inline-block align-top"
                            alt="Condolitoral logo"
                        />
                    </Navbar.Brand>
                    <div className="contact-navbar-container">
                        <div className="header-contact-info">
                            <span className="contact-item"><FaPhone /> <a href="tel:+351227441656"> +351 227 441 656</a></span>
                            <span className="contact-item"><FaEnvelope /> <a href="mailto:geral@condolitoral.pt" > geral@condolitoral.pt</a></span>
                        </div>
                        <div className="navbar-toggle-custom">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={NavLink} to="/" className={location.pathname === '/' ? "nav-link active-link" : "nav-link"}>Início</Nav.Link>
                                <Nav.Link as={NavLink} to="/empresa" className={location.pathname === '/empresa' ? "nav-link active-link" : "nav-link"}>Empresa</Nav.Link>
                                <Nav.Link as={NavLink} to="/legislacao" className={location.pathname === '/legislacao' ? "nav-link active-link" : "nav-link"}>Legislação</Nav.Link>
                                <Nav.Link as={NavLink} to="/orcamento" className={location.pathname === '/orcamento' ? "nav-link active-link" : "nav-link"}>Pedido de orçamento</Nav.Link>
                                <Nav.Link as={NavLink} to="/contactos" className={location.pathname === '/contactos' ? "nav-link active-link" : "nav-link"}>Contactos</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
            <div className="navbar-underline"></div>
        </>
    );
}

export default Header;