import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import heroImage from "../../Assets/logo.png";
import "./Header.css";

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add scroll effect to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle menu open/close state
  const handleToggleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          {/* Mobile contact info */}
          <div className="header-contact-info-mobile">
            <span className="contact-item-mobile">
              <FaPhone /> <a href="tel:+351227441656">+351 227 441 656</a>
            </span>
            <span className="contact-item-mobile">
              <FaEnvelope />{" "}
              <a href="mailto:geral@condolitoral.pt">geral@condolitoral.pt</a>
            </span>
          </div>

          {/* Brand logo */}
          <Navbar.Brand href="/" className="navbar-brand-custom">
            <img src={heroImage} alt="Condolitoral logo" />
          </Navbar.Brand>

          {/* Desktop contact info */}
          <div className="contact-navbar-container">
            <div className="header-contact-info">
              <span className="contact-item">
                <FaPhone /> <a href="tel:+351227441656">+351 227 441 656</a>
              </span>
              <span className="contact-item">
                <FaEnvelope />{" "}
                <a href="mailto:geral@condolitoral.pt">geral@condolitoral.pt</a>
              </span>
            </div>

            {/* Navbar toggle button */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleToggleClick}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </Navbar.Toggle>

            {/* Navbar links */}
            <Navbar.Collapse id="basic-navbar-nav" in={menuOpen}>
              <Nav className="ms-auto">
                {[
                  { path: "/", name: "Início" },
                  { path: "/empresa", name: "Empresa" },
                  { path: "/legislacao", name: "Legislação" },
                  { path: "/orcamento", name: "Pedido de orçamento" },
                  { path: "/contactos", name: "Contactos" },
                ].map(({ path, name }) => (
                  <Nav.Link
                    as={NavLink}
                    to={path}
                    className={
                      location.pathname === path
                        ? "nav-link active-link"
                        : "nav-link"
                    }
                    key={path}
                  >
                    {name}
                  </Nav.Link>
                ))}
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
