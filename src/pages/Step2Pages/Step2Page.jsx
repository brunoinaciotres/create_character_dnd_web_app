import React from 'react'
import Step1Page from '../Step1Pages/Step1Page'
import { Link } from 'react-router-dom'
import Step2Home from './Step2Home.jsx/Step2Home'
import DefaultValuesPage from './DefaultValuesPage/DefaultValuesPage'

export default function Step2Page({ setActualPage, actualPage, setAttributesValuesMethod, attributesValuesMethod, isAllOptionsChosen }) {
  
  const pages = {
    step2: <Step2Home
    setActualPage={setActualPage}
      setAttributesValuesMethod={setAttributesValuesMethod}
      attributesValuesMethod={attributesValuesMethod}
    />,
    default: <DefaultValuesPage />
  }
  return (
    <>
      {isAllOptionsChosen
        ? pages[actualPage]
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
