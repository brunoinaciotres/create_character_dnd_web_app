import React, { useState } from 'react'
import "./DefaultValuesPage.css"

export default function DefaultValuesPage() {
    const [isStepCompleted, setIsStepCompleted] = useState(false)
    return (
        <>
            <div className="step-description">
                <div className="title">Passo 2</div>
                <div className="subtitle">Defina os valores de habilidade</div>
            </div>
            <div className="title">Seus valores</div>
            <div className="values-group">
                <div className="value-item">
                    15
                </div>
                <div className="value-item">
                    14
                </div>
                <div className="value-item">
                    13
                </div>
                <div className="value-item">
                    12
                </div>
                <div className="value-item disabled">
                    10
                </div>
                <div className="value-item">
                    8
                </div>
            </div>
            <div className="title">Habilidades</div>
            <div className="skills-group">
                <div className="skill-item">
                    <span className="skill-name">Constituição</span>
                    <span className="define-button">
                        <div className="define-button-text">Definir</div>
                    </span>
                </div>
                <div className="skill-item">
                    <span className="skill-name">Força</span>
                    <span className="define-button">
                        <div className="define-button-text">Definir</div>
                    </span>
                </div>
                <div className="skill-item">
                    <span className="skill-name">Destreza</span>
                    <span className="define-button">
                        <div className="define-button-text">Definir</div>
                    </span>
                </div>
                <div className="skill-item">
                    <span className="skill-name">Sabedoria</span>
                    <span className="define-button">
                        <div className="define-button-text">Definir</div>
                    </span>
                </div>
                <div className="skill-item">
                    <span className="skill-name">Inteligência</span>
                    <span className="define-button">
                        <div className="define-button-text">Definir</div>
                    </span>
                </div>
                <div className="skill-item">
                    <span className="skill-name">Carisma</span>
                    <span className="define-button">
                        <div className="define-button-text">Definir</div>
                    </span>
                </div>
            </div>
            {isStepCompleted ? (
                    <div onClick={nextStep} className="primary-button">
                        Avançar
                    </div>

                ) : (
                    <div className="disabled-button">
                        Defina as habilidades
                    </div>
                )}

        </>
    )
}
