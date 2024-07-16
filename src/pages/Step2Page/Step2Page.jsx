import React from 'react'
import Step1Page from '../Step1Page/Step1Page'
import { Link } from 'react-router-dom'
import Step2Home from './Step2Home.jsx/Step2Home'

export default function Step2Page({ isAllOptionsChosen }) {
  return (
    <>
      {isAllOptionsChosen
        ? <Step2Home/>
        : (
          <div className="step-description">
            <div className="subtitle mb-3">Passo 2</div>
            <div className="title">É necessário preencher raça, classe e background antes.</div>
            <div className="footer">
              <Link className="primary-button" to="/">Ir para passo 1</Link>

            </div>
          </div>
        )}


    </>
  )
}
