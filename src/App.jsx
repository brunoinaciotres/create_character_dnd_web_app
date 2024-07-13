import React from 'react'
import './App.css'

export default function App() {
  return (
    <main className='main-container'>
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
          <span>Raça</span>
          <a class="grey-link">Escolher</a>
        </div>
        <div className="list-item">
          <span>Classe</span>
          <a class="grey-link">Escolher</a>
        </div>
        <div className="list-item">
          <span>Background</span>
          <a class="grey-link">Escolher</a>
        </div>
      </div>
      <div className="footer">
        <div className="disabled-button">
          Defina as opções
        </div>
      </div>
    </main>
  )
}

