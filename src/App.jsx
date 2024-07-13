import React from 'react'
import './App.css'

export default function App() {
  return (
    <main className='main-container'>
      <div className="page-header">
        <h1 className='main-card-title mb-1'>Criar Personagem</h1>
        <div className="main-card-subtitle">
          Escolha uma raça
        </div>
      </div>
      <div className="list-item-group">
        <div className="list-item">
          <div className="wave"></div>
          <div className="list-item-text">
            Anão
          </div>

        </div>
        <div className="list-item">
        <div className="wave"></div>
          <div className="list-item-text">
          Elfo
        </div>

          </div>
        <div className="list-item">
        <div className="wave"></div>
          <div className="list-item-text">
          Halfling

          </div>
        </div>
        <div className="list-item">
        <div className="wave"></div>
          <div className="list-item-text">
          Humano
        </div>

          </div>
        <div className="list-item">
        <div className="wave"></div>
          <div className="list-item-text">
          Draconato

          </div>
        </div>
        <div className="list-item">
        <div className="wave"></div>
          <div className="list-item-text">
          Gnomo
        </div>

          </div>
        <div className="list-item">
        <div className="wave"></div>
          <div className="list-item-text">
          Meio-Elfo

          </div>
        </div>
        <div className="list-item">
        <div className="wave"></div>
          <div className="list-item-text">
          Meio-Orc

          </div>
        </div>
        <div className="list-item">
        <div className="wave"></div>
          <div className="list-item-text">
          Tiefling

          </div>
        </div>
      </div>
    </main>
  )
}

