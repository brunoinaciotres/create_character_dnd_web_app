import React, { useState } from 'react'
import "./DefaultValuesPage.css"

export default function DefaultValuesPage({ setActualPage }) {
    const [isStepCompleted, setIsStepCompleted] = useState(false)

    const selectSkillValue = (e) => {
        const elementClicked = e.target
        const hintText = document.querySelector("#hint")
        hintText.classList.add("hint")
        hintText.innerText = "Escolha um valor"
        const skillValues = document.querySelectorAll(".value-item")
        skillValues.forEach(value => {
            value.classList.add("active")
        })

        const skillItems = document.querySelectorAll(".skill-item")

        skillItems.forEach(item => {
            if(item.getAttribute("value") != elementClicked.getAttribute("value")){
                item.classList.toggle("disabled")
                item.classList.add("pointer-events-none")

            } else {
                item.classList.add("active")
            }

            
        })

        elementClicked.classList.add("active")
    }
    return (
        <>

            <div className="step-description">
                <div className="svg-container">
                    <span onClick={() => { setActualPage("step2") }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                        </svg>
                    </span>
                    <span className="breadcrumb">
                        <div className="title">Valores Padrão </div>
                    </span>
                </div>
                <div className="title ">Distribua os valores de habilidade</div>
            </div>
            <div className="title" id="hint">Seus valores disponíveis</div>
            <div className="values-group">
                <div className="value-item ">
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
                <div className="skill-item " value="con">
                    <span className="skill-name">CON</span>
                    <span className="define-button" value="con" onClick={(e) => selectSkillValue(e)}>
                        <div className="define-button-text" >Definir</div>
                    </span>
                </div>
                <div className="skill-item " value="for">
                    <span className="skill-name">FOR</span>
                    <span className="define-button" value="for" onClick={(e) => selectSkillValue(e)} >
                        <div className="define-button-text">Definir</div>
                    </span>
                </div>
                <div className="skill-item" value="des">
                    <span className="skill-name">DES</span>
                    <span className="define-button" value="des" onClick={(e) => selectSkillValue(e)}>
                        <div className="define-button-text">Definir</div>
                    </span>
                </div>
                <div className="skill-item" value="sab">
                    <span className="skill-name">SAB</span>
                    <span className="define-button" value="sab" onClick={(e) => selectSkillValue(e)}>
                        <div className="define-button-text">Definir</div>
                    </span>
                </div>
                <div className="skill-item" value="int">
                    <span className="skill-name">INT</span>
                    <span className="define-button" value="int" onClick={(e) => selectSkillValue(e)}>
                        <div className="define-button-text">Definir</div>
                    </span>
                </div>
                <div className="skill-item" value="car">
                    <span className="skill-name">CAR</span>
                    <span className="define-button" value="car" onClick={(e) => selectSkillValue(e)}>
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
