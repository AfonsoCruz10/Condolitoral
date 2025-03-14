import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="hero-overlay"></div>
      <div className="not-found-content">
        <img src={require('../../Assets/logo_edited.png')} alt="Página Não Encontrada" className="not-found-image" />
        <h1>404 - Página Não Encontrada</h1>
        <p>A página que você está à procura não existe.</p>
        <button className="not-found-button" onClick={() => navigate('/')}>
          Voltar para a Página Inicial
        </button>
      </div>
    </div>
  );
}

export default NotFound;