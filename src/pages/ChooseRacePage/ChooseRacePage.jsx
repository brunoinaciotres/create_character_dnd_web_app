import React from 'react'
import './ChooseRacePage.css'
export default function ChooseRacePage({setActualPage, setRaceSelected}) {
    const setRace = (e) => {
        let nameRace = e.target.innerText

        setRaceSelected(nameRace)
        setActualPage("step1")
    }
    return (
        <>
            <div className="page-header">
                <h1 className='title '>Criar Personagem</h1>
                <div className="subtitle">
                    D&D 5E
                </div>
            </div>
            <div className="step-description">
                <div className="svg-container">
                    <span onClick={() => {setActualPage("step1")}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                        </svg>
                    </span>
                </div>
                <div className="title">Defina sua raça</div>
            </div>
            <div className="list-item-group">
                <div className="list-item" onClick={(e) => setRace(e)}>
                    Anão
                </div>
                <div className="list-item"  onClick={(e) => setRace(e)}>
                    Elfo
                </div>
                <div className="list-item"  onClick={(e) => setRace(e)}>
                    Halfling
                </div>
                <div className="list-item"  onClick={(e) => setRace(e)}>
                    Humano
                </div>
                <div className="list-item"  onClick={(e) => setRace(e)}>
                    Draconato
                </div>
                <div className="list-item"  onClick={(e) => setRace(e)}>
                    Gnomo
                </div>
                <div className="list-item"  onClick={(e) => setRace(e)}>
                    Meio-Elfo
                </div>
                <div className="list-item"  onClick={(e) => setRace(e)}>
                    Meio-Orc
                </div>
                <div className="list-item"  onClick={(e) => setRace(e)}>
                    Tiefling
                </div>

            </div>
        </>
    )
}
