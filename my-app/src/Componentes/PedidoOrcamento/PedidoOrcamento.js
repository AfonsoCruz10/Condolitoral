import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import ContactSection from '../ContactSection/ContactSection';
import './PedidoOrcamento.css';

function PedidoOrcamento() {
    return (
        <div>
            {/* HERO SECTION */}
            <HeroSection title="PEDIDO DE ORÇAMENTO" />

            {/* PEDIDO DE ORÇAMENTO CONTAINER */}
            <div className="pedido-orcamento-container">
                <h1>Dados pessoais</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" name="nome" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefone">Telefone</label>
                        <input type="text" id="telefone" name="telefone" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className="form-control" />
                    </div>

                    <h1>Informação geral do condomínio</h1>
                    <div className="form-group">
                        <label htmlFor="nome-condominio">Nome</label>
                        <input type="text" id="nome-condominio" name="nome-condominio" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="morada">Morada</label>
                        <input type="text" id="morada" name="morada" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="localidade">Localidade</label>
                        <input type="text" id="localidade" name="localidade" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="idade-edificio">Idade do edifício</label>
                        <input type="text" id="idade-edificio" name="idade-edificio" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="num-fracoes">Nº de Frações</label>
                        <input type="text" id="num-fracoes" name="num-fracoes" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="num-pisos">Nº de pisos</label>
                        <input type="text" id="num-pisos" name="num-pisos" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="outras-informacoes">Outras informações</label>
                        <textarea id="outras-informacoes" name="outras-informacoes" className="form-control"></textarea>
                    </div>
                    <button type="submit" className="btn btn-danger">Enviar</button>
                </form>
            </div>

            {/* SEÇÃO CONTATO */}
            <ContactSection />
        </div>
    );
}

export default PedidoOrcamento;