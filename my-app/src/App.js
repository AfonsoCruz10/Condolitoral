import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Componentes/Header/Header";
import Home from "./Componentes/Home/Home";
import Empresa from "./Componentes/Empresa/Empresa";
import Legislation from "./Componentes/Legislation/Legislation";
import PedidoOrcamento from "./Componentes/PedidoOrcamento/PedidoOrcamento";
import Contactos from "./Componentes/Contactos/Contactos";
import Footer from "./Componentes/Footer/Footer";
import NotFound from "./Componentes/NotFound/NotFound";
import ScrollToTopButton from "./Componentes/ScrollToTopButton/ScrollToTopButton";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  const location = useLocation();

  const isNotFound =
    location.pathname !== "/" &&
    location.pathname !== "/empresa" &&
    location.pathname !== "/legislacao" &&
    location.pathname !== "/orcamento" &&
    location.pathname !== "/contactos";

  return (
    <>
      <ScrollToTop />

      {!isNotFound && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/legislacao" element={<Legislation />} />
        <Route path="/orcamento" element={<PedidoOrcamento />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isNotFound && <Footer />}
      <ScrollToTopButton />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
