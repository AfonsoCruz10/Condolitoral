import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import logo from "../../Assets/logo.png";
import "./Header.css";

const PHONE = { label: "+351 227 441 656", href: "tel:+351227441656" };
const EMAIL = {
  label: "geral@condolitoral.pt",
  href: "mailto:geral@condolitoral.pt",
};

// Mesmas rotas definidas em App.js
const NAV_LINKS = [
  { path: "/", name: "Início" },
  { path: "/empresa", name: "Empresa" },
  { path: "/legislacao", name: "Legislação" },
  { path: "/contactos", name: "Contactos" },
];
const CTA = { path: "/orcamento", name: "Pedido de orçamento" };

// Tem de coincidir com o breakpoint em Header.css
const DESKTOP_QUERY = "(min-width: 992px)";

const FOCUSABLE = "a[href], button:not([disabled])";

function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  // Estilo do header ao fazer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu ao mudar de página
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Fecha o menu se o ecrã passar para a vista desktop
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = (e) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Bloqueia o scroll do fundo enquanto o menu mobile está aberto
  useEffect(() => {
    if (!menuOpen) return undefined;

    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    // Evita o "salto" de layout quando a barra de scroll desaparece
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [menuOpen]);

  // Teclado com o menu aberto: Esc fecha, Tab fica dentro do header
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (e.key !== "Tab" || !headerRef.current) return;

      const items = Array.from(
        headerRef.current.querySelectorAll(FOCUSABLE),
      ).filter((el) => el.getClientRects().length > 0);
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (!headerRef.current.contains(active)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `site-header__link${isActive ? " is-active" : ""}`;

  return (
    <>
      {/* Barra de contactos (apenas desktop). Faz scroll com a página. */}
      <div className="site-topbar">
        <div className="site-topbar__inner">
          <a href={PHONE.href}>
            <FaPhone aria-hidden="true" /> {PHONE.label}
          </a>
          <a href={EMAIL.href}>
            <FaEnvelope aria-hidden="true" /> {EMAIL.label}
          </a>
        </div>
      </div>

      <header
        ref={headerRef}
        className={`site-header${scrolled ? " is-scrolled" : ""}${
          menuOpen ? " is-open" : ""
        }`}
      >
        <div className="site-header__inner">
          <Link to="/" className="site-header__brand" onClick={closeMenu}>
            <img
              className="site-header__logo"
              src={logo}
              alt="Condolitoral – Administração de Condomínios"
              width="594"
              height="180"
            />
          </Link>

          <button
            ref={toggleRef}
            type="button"
            className="site-header__toggle"
            aria-label="Menu principal"
            aria-expanded={menuOpen}
            aria-controls="menu-principal"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="site-header__toggle-bar" aria-hidden="true" />
            <span className="site-header__toggle-bar" aria-hidden="true" />
            <span className="site-header__toggle-bar" aria-hidden="true" />
          </button>

          <nav
            id="menu-principal"
            className="site-header__nav"
            aria-label="Navegação principal"
          >
            <ul className="site-header__list">
              {NAV_LINKS.map(({ path, name }, index) => (
                <li
                  className="site-header__item"
                  key={path}
                  style={{ "--i": index }}
                >
                  <NavLink
                    to={path}
                    end={path === "/"}
                    className={linkClass}
                    onClick={closeMenu}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <NavLink
              to={CTA.path}
              className={({ isActive }) =>
                `site-header__cta${isActive ? " is-active" : ""}`
              }
              onClick={closeMenu}
            >
              {CTA.name}
            </NavLink>

            {/* Contactos dentro do menu mobile */}
            <div className="site-header__contact">
              <a href={PHONE.href}>
                <FaPhone aria-hidden="true" /> {PHONE.label}
              </a>
              <a href={EMAIL.href}>
                <FaEnvelope aria-hidden="true" /> {EMAIL.label}
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
