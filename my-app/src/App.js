import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Componentes/Header/Header';
import Home from './Componentes/Home/Home';
import Legislation from './Componentes/Legislation/Legislation';
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legislacao" element={<Legislation />} />
          
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;