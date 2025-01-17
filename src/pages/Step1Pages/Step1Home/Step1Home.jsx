import React, { useContext, useEffect,  useState } from 'react'
import { SheetContext } from '../../../contexts/SheetContextProvider'
import { StepContext } from '../../../contexts/StepContextProvider'
import "./Step1Home.css"
export default function Step1Home({ setActualPage }) {
    const sheet = useContext(SheetContext)
    const step = useContext(StepContext)
    const [lastRace, setLastRace] = useState(null)
    const [isStepCompleted, setIsStepCompleted] = useState(false)
    
    
    useEffect(() => {
        if (sheet.getRace() != null && sheet.getClass() != null && sheet.getBackground() != null) {
            setIsStepCompleted(true)
        }
      
    })


    const nextStep = () => {
        step.setCompletedSteps([step.currentStep])
        step.setCurrentStep(2)
    }




    return (
        <>

            <div className="step-description ">
                <div className="title">Defina raça, classe e background</div>
            </div>
            <div className="list-item-group">
                <div className={`list-item ${sheet.getRace() != null ? "active" : null}`}>
                    <div className="wave"></div>
                    <span className='d-flex align-items-center'>
                        {sheet.getRace() != null ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg> : null}

                        <span className="ms-2">{sheet.getRace() == null ? "Raça" : sheet.getRace()}</span>
                    </span>

                    <a onClick={() => { setActualPage("chooseRace") }} className="blue-link">
                        {sheet.getRace() != null ? "Alterar" : "Escolher"}
                    </a>
                </div>
                <div className={`list-item ${sheet.getClass() != null ? "active" : null}`}>
                    <div className="wave"></div>
                    <span className='d-flex align-items-center'>
                        {sheet.getClass() != null ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg> : null}

                        <span className="ms-2">{sheet.getClass() == null ? "Classe" : sheet.getClass()}</span>
                    </span>
                    <a onClick={() => { setActualPage("chooseClass") }} className="blue-link">
                        {sheet.getClass() != null ? "Alterar" : "Escolher"}
                    </a>
                </div>
                <div className={`list-item ${sheet.getBackground() != null ? "active" : null}`}>
                    <div className="wave"></div>
                    <span className='d-flex align-items-center'>
                        {sheet.getBackground() != null ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg> : null}
                        <span className="ms-2">{sheet.getBackground() == null ? "Background" : sheet.getBackground()}</span>

                    </span>
                    <a onClick={() => { setActualPage("chooseBackground") }} className="blue-link">
                        {sheet.getBackground() != null ? "Alterar" : "Escolher"}
                    </a>
                </div>
            </div>
            <div className="footer">
                {isStepCompleted ? (
                    <div onClick={nextStep} className="action-text">
                        Avançar
                    </div>

                ) : (
                    <div className="action-text disabled">
                        Defina as opções
                    </div>
                )}

            </div>
        </>
    )
}
