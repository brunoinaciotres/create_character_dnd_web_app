import React from 'react'
import './App.css'

export default function App({ children }) {
  return (
    <main className='main-container'>
      {children}
      <div className="list-item-group">
        <div className="list-item">
          <div className="wave"></div>
          <span>Raça</span>
          <a className="grey-link">Escolher</a>
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
    </main>
  )
}

