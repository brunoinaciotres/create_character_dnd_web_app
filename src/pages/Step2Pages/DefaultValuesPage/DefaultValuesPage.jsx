import React, { useContext, useEffect, useState } from 'react'
import "./DefaultValuesPage.css"
import { SheetContext } from '../../../contexts/SheetContextProvider'
import { StepContext } from '../../../contexts/StepContextProvider'

export default function DefaultValuesPage({ setActualPage }) {
    const [isStepCompleted, setIsStepCompleted] = useState(false)
    const [activeSkillItem, setActiveSkillItem] = useState(null)
    const [skillValuesAvailable, setSkillValuesAvailable] = useState([15, 14, 13, 12, 10, 8])
    const [resetSkillsValues, setResetSkillsValues] = useState(false)
    const sheet = useContext(SheetContext)
    const step = useContext(StepContext)

    useEffect(() => {
        if (sheet.getStrength() != null && sheet.getConstitution() != null && sheet.getDexterity() != null && sheet.getWisdom() != null && sheet.getIntelligence() != null && sheet.getCharisma() != null) {
            setIsStepCompleted(true)
        }

    })

    const nextStep = () => {
        step.setCompletedSteps([step.currentStep])
        step.setCurrentStep(3)
    }

    const selectSkillItem = (e) => {
        const elementClicked = e.target
        const hintText = document.querySelector("#hint")
        hintText.classList.add("hint")
        hintText.innerText = "Escolha um valor"
        const refreshSkillValuesButton = document.querySelector(".refresh-skills-button")
        refreshSkillValuesButton.classList.add("disabled")

        const skillValues = document.querySelectorAll(".value-item")
        skillValues.forEach(value => {
            value.classList.add("active")
            value.classList.remove("pointer-events-none")
        })


        const skillItems = document.querySelectorAll(".skill-item")

        skillItems.forEach(item => {
            if (item.getAttribute("value") != elementClicked.getAttribute("value")) {
                item.classList.add("disabled")
                item.classList.add("pointer-events-none")

            } else {
                item.classList.add("active")
                setActiveSkillItem(item.getAttribute("value"))
            }
        })

        elementClicked.classList.add("active")
    }

    const selectSkillValue = (e) => {

        const value = Number(e.target.getAttribute("value"))

        const isValueAvailable = skillValuesAvailable.includes(value)

        if (!isValueAvailable) return

        const newArray = skillValuesAvailable.filter(element => element !== value);
        setSkillValuesAvailable(newArray)

        switch (activeSkillItem) {
            case "con":
                sheet.setConstitution(value)
                break
            case "str":
                sheet.setStrength(value)
                break
            case "dex":
                sheet.setDexterity(value)
                break
            case "int":
                sheet.setIntelligence(value)
                break
            case "wis":
                sheet.setWisdom(value)
                break
            case "char":
                sheet.setCharisma(value)
            default:
                "Erro"
        }

        const skillItems = document.querySelectorAll(".skill-item")

        skillItems.forEach(item => {
            if (item.getAttribute("value") == activeSkillItem) {
                item.classList.add("is-set")
                item.children[1].classList.remove("d-none")
                item.children[2].classList.remove("d-none")
                e.target.classList.add("disabled")
            }
        })
        const hintText = document.querySelector("#hint")
        hintText.classList.remove("hint")
        hintText.innerText = "Seus valores disponíveis"

        const skillValues = document.querySelectorAll(".value-item")
        skillValues.forEach(value => {
            value.classList.remove("active")
            value.classList.add("pointer-events-none")
        })

        skillItems.forEach(item => {
            item.classList.remove("disabled", "pointer-events-none")
        })

        setActiveSkillItem(null)
        const refreshSkillValuesButton = document.querySelector(".refresh-skills-button")
        refreshSkillValuesButton.classList.remove("disabled")
    }

    const formatNumberWithSign = (number) => {
        return number >= 0 ? `+${number}` : `${number}`;
    }

    const resetSkills = () => {
        sheet.setStrength(null)
        sheet.setConstitution(null)
        sheet.setDexterity(null)
        sheet.setWisdom(null)
        sheet.setIntelligence(null)
        sheet.setCharisma(null)

        const skillModifiers = document.querySelectorAll(".skill-modifier")
        skillModifiers.forEach(skillModiifer => skillModiifer.classList.add("d-none"))

        const skillItems = document.querySelectorAll(".skill-item")
        skillItems.forEach(skillItem => skillItem.classList.remove("active", "is-set"))

        const skillValues = document.querySelectorAll(".value-item")
        skillValues.forEach(value => value.classList.remove("disabled", "pointer-events-none"))
        setSkillValuesAvailable([15, 14, 13, 12, 10, 8])
        setResetSkillsValues(true)
        setIsStepCompleted(false)
    }
    return (
        <>

            <div className="step-description">
                <div className="svg-container">
                    <span onClick={() => {
                        setActualPage("step2")
                        resetSkills()
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
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
                <div className="value-item pointer-events-none" value="15" onClick={selectSkillValue}>
                    15
                </div>
                <div className="value-item pointer-events-none" value="14" onClick={selectSkillValue}>
                    14
                </div>
                <div className="value-item pointer-events-none" value="13" onClick={selectSkillValue}>
                    13
                </div>
                <div className="value-item pointer-events-none" value="12" onClick={selectSkillValue}>
                    12
                </div>
                <div className="value-item pointer-events-none " value="10" onClick={selectSkillValue}>
                    10
                </div>
                <div className="value-item pointer-events-none" value="8" onClick={selectSkillValue}>
                    8
                </div>
            </div>
            <span className='d-flex align-items-center justify-content-between mb-2'>
                <div className="title ">
                    Habilidades
                </div>
                <span className="ms-2 refresh-skills-button" onClick={resetSkills} >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        fill="currentColor"
                        className="bi bi-arrow-clockwise"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 3a5 5 0 104.546 2.914.5.5 0 01.908-.417A6 6 0 118 2z"
                        ></path>
                        <path d="M8 4.466V.534a.25.25 0 01.41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 018 4.466"></path>
                    </svg>
                </span>
            </span>
            <div className="skills-group">
                <div className="skill-item " value="con">
                    <span className="skill-name">CON</span>
                    <span className="skill-modifier d-none">{formatNumberWithSign(sheet.getConstitutionModifier())}</span>
                    <span className="skill-value d-none">{sheet.getConstitution()}</span>
                    <span className="define-button" value="con" onClick={(e) => selectSkillItem(e)}>
                        <div className="define-button-text" >Definir</div>
                    </span>
                </div>
                <div className="skill-item " value="str">
                    <span className="skill-name">FOR</span>
                    <span className="skill-modifier d-none">{formatNumberWithSign(sheet.getStrengthModifier())}</span>
                    <span className="skill-value d-none">{sheet.getStrength()}</span>
                    <span className="define-button" value="str" onClick={(e) => selectSkillItem(e)} >
                        <div className="define-button-text">Definir</div>
                    </span>
                </div>
                <div className="skill-item" value="dex">
                    <span className="skill-name">DES</span>
                    <span className="skill-modifier d-none">{formatNumberWithSign(sheet.getDexterityModifier())}</span>
                    <span className="skill-value d-none">{sheet.getDexterity()}</span>
                    <span className="define-button" value="dex" onClick={(e) => selectSkillItem(e)}>
                        <div className="define-button-text">Definir</div>
                    </span>
                </div>
                <div className="skill-item" value="wis">
                    <span className="skill-name">SAB</span>
                    <span className="skill-modifier d-none">{formatNumberWithSign(sheet.getWisdomModifier())}</span>
                    <span className="skill-value d-none">{sheet.getWisdom()}</span>
                    <span className="define-button" value="wis" onClick={(e) => selectSkillItem(e)}>
                        <div className="define-button-text">Definir</div>
                    </span>
                </div>
                <div className="skill-item" value="int">
                    <span className="skill-name">INT</span>
                    <span className="skill-modifier d-none">{formatNumberWithSign(sheet.getIntelligenceModifier())}</span>
                    <span className="skill-value d-none">{sheet.getIntelligence()}</span>
                    <span className="define-button" value="int" onClick={(e) => selectSkillItem(e)}>
                        <div className="define-button-text">Definir</div>
                    </span>
                </div>
                <div className="skill-item" value="char">
                    <span className="skill-name">CAR</span>
                    <span className="skill-modifier d-none">{formatNumberWithSign(sheet.getCharismaModifier())}</span>
                    <span className="skill-value d-none">{sheet.getCharisma()}</span>
                    <span className="define-button" value="char" onClick={(e) => selectSkillItem(e)}>
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
