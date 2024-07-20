import React, { useContext } from 'react'
import { StepContext } from '../../../contexts/StepContextProvider'

export default function Step2Home({attributesValuesMethod, setAttributesValuesMethod, setActualPage}) {
    const step = useContext(StepContext)
    return (
       
        <>

            <div className="step-description">
            <div className="svg-container">
                    <span onClick={() => { step.setCurrentStep(1)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                        </svg>
                    </span>
                </div>
                <div className="title">Passo 2</div>
                <div className="subtitle">Defina os valores de habilidade</div>
            </div>
            <div className="list-item-group">
                <div className="list-item" >
                    <span>
                        Padrão
                        <span className="ms-2 blue-link">
                            (15, 14, 13, 12, 10, 8)
                        </span>
                    </span>
                    <span className='blue-link' onClick={()=>{setActualPage("default")}}>Escolher</span>
                </div>
                <div className="list-item">
                    Rolagem Aleatória
                </div>
                <div className="list-item">
                    Inserir Valores
                </div>
            </div>
        </>
    )
}
