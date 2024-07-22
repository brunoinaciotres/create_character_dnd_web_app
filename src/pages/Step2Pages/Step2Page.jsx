import React, { useContext, useState } from 'react'
import Step1Page from '../Step1Pages/Step1Page'
import { Link } from 'react-router-dom'
import Step2Home from './Step2Home.jsx/Step2Home'
import DefaultValuesPage from './DefaultValuesPage/DefaultValuesPage'
import { StepContext } from '../../contexts/StepContextProvider'

export default function Step2Page({ }) {
  const { completedSteps } = useContext(StepContext)
  const [actualPage, setActualPage] = useState("step2")

  const pages = {
    step2: <Step2Home
      setActualPage={setActualPage}
    />,
    default: <DefaultValuesPage setActualPage={setActualPage} />
  }
  return (
    <>
      <div className="sub-header">
      <span className="title">Passo 2</span>
      </div>
      {completedSteps.find(step => step === 1)
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
