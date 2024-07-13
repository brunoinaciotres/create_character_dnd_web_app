import React from 'react'
import Header from '../../components/Header/Header'

export default function ChooseClassPage({ setClassSelected, setActualPage }) {
    const setClass = (e) => {
        let nameClass = e.target.innerText

        setClassSelected(nameClass)
        setActualPage("step1")
    }
    return (
        <>
            
            <div className="step-description">
                <div className="svg-container">
                    <span onClick={() => { setActualPage("step1") }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                        </svg>
                    </span>
                </div>
                <div className="title">Defina sua classe</div>
            </div>
            <div className="list-item-group">
                <div className="list-item" onClick={(e) => setClass(e)}>
                    Bárbaro
                </div>
                <div className="list-item" onClick={(e) => setClass(e)}>
                    Bardo
                </div>
                <div className="list-item" onClick={(e) => setClass(e)}>
                    Bruxo
                </div>
                <div className="list-item" onClick={(e) => setClass(e)}>
                    Clérigo
                </div>
                <div className="list-item" onClick={(e) => setClass(e)}>
                    Druída
                </div>
                <div className="list-item" onClick={(e) => setClass(e)}>
                    Feiticeiro
                </div>
                <div className="list-item" onClick={(e) => setClass(e)}>
                    Guerreiro
                </div>
                <div className="list-item" onClick={(e) => setClass(e)}>
                    Ladino
                </div>
                <div className="list-item" onClick={(e) => setClass(e)}>
                    Mago
                </div>
                <div className="list-item" onClick={(e) => setClass(e)}>
                    Monge
                </div>
                <div className="list-item" onClick={(e) => setClass(e)}>
                    Paladino
                </div>
                <div className="list-item" onClick={(e) => setClass(e)}>
                    Patrulheiro
                </div>

            </div>
        </>
    )
}
