import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404 - Página Não Encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <button className="not-found-button" onClick={() => navigate('/')}>
        Voltar para a Página Inicial
      </button>
    </div>
  );
}

export default NotFound;