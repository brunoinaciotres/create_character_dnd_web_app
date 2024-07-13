import React from 'react'

export default function Step1Page() {
    return (
        <>
            <div className="page-header">
                <h1 className='title '>Criar Personagem</h1>
                <div className="subtitle">
                    D&D 5E
                </div>
            </div>
            <div className="step-description">
                <div className="title">Passo 1</div>
                <div className="subtitle">Defina raça, classe e background</div>
            </div>
            <div className="list-item-group">
                <div className="list-item">
                    <div className="wave"></div>
                    <span>Raça</span>
                    <a href="/choose-race" className="grey-link">Escolher</a>
                </div>
                <div className="list-item">
                    <div className="wave"></div>
                    <span>Classe</span>
                    <a className="grey-link">Escolher</a>
                </div>
                <div className="list-item">
                    <div className="wave"></div>
                    <span>Background</span>
                    <a className="grey-link">Escolher</a>
                </div>
            </div>
            <div className="footer">
                <div className="disabled-button">
                    Defina as opções
                </div>
            </div>
        </>
    )
}
