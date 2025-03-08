import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Legislation.css';
import { FaPhone } from 'react-icons/fa';

const Section = ({ title, articles }) => (
    <div className="section-container">
        <h3>{title}</h3>
        <ul>
            {articles.map((article, index) => (
                <li key={index}>{article}</li>
            ))}
        </ul>
    </div>
);

function Legislation() {
    const navigate = useNavigate();

    return (
        <div>
            {/* HERO SECTION */}
            <div className="hero_legislation">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>LEGISLAÇÃO</h1>
                </div>
            </div>

            <div className="legislation-container">
                <h1>Capítulo VI - Propriedade horizontal</h1>
                <h2>Direitos e deveres dos condóminos (Artigos 1414.º a 1438.º-A do Código Civil)</h2>

                <Section
                    title="Secção I - Disposições Gerais (Art. 1414º a 1416º)"
                    articles={[
                        "Artigo 1414º – Principio Geral",
                        "Artigo 1415º – Objecto",
                        "Artigo 1416º – Falta de Requisitos Legais"
                    ]}
                />

                <Section
                    title="Secção II - Constituição (Art. 1417º a 1419º)"
                    articles={[
                        "Artigo 1417º - Principio Geral",
                        "Artigo 1418º – Conteúdo do Título Constitutivo",
                        "Artigo 1419º – Modificação do Titulo"
                    ]}
                />

                <Section
                    title="Secção III - Direitos e encargos dos Condóminos (Art. 1420º A 1429º-A)"
                    articles={[
                        "Artigo 1420º – Direitos dos Condóminos",
                        "Artigo 1421º – Partes Comuns do Prédio",
                        "Artigo 1422º – Limitações ao Exercício dos Direitos",
                        "Artigo 1422º-A – Junção e Divisão de Fracções Autónomas",
                        "Artigo 1423º – Direitos de Preferência e de Divisão",
                        "Artigo 1424º – Encargos de Conservação e Fruição",
                        "Artigo 1425º - Inovações",
                        "Artigo 1426º – Encargos Com Inovações",
                        "Artigo 1427º – Reparações Indispensáveis e Urgentes",
                        "Artigo 1428º – Destruição do Edifício",
                        "Artigo 1429º – Seguro Obrigatório",
                        "Artigo 1429º-A – Regulamento do Condomínio"
                    ]}
                />

                <Section
                    title="Secção IV - Administração das partes comuns do edifício (Art. 1430º a 1438º-A)"
                    articles={[
                        "Artigo 1430º – Orgãos Administrativos",
                        "Artigo 1431º – Assembleia dos condóminos",
                        "Artigo 1432º – Convocação e Funcionamento da Assembleia",
                        "Artigo 1433º – Impugnação das Deliberações",
                        "Artigo 1434º – Compromisso Arbitral",
                        "Artigo 1435º – Administrador",
                        "Artigo 1435º-A – Administrador Provisório",
                        "Artigo 1436º – Funções do Administrador",
                        "Artigo 1437º – Legalidade do Administrador",
                        "Artigo 1438º – Recurso dos Actos do Administrador",
                        "Artigo 1438º-A – Propriedade Horizontal de conjuntos de Edifícios"
                    ]}
                />
            </div>

            {/* SEÇÃO CONTATO */}
            <div className="hero contact-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h2>Tem interesse nos nossos serviços?</h2>
                    <button className="hero-button" onClick={() => navigate('/contactos')}>
                        <FaPhone className="icon" /> CONTACTE-NOS
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Legislation;