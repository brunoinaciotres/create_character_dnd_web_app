import React, { useContext } from 'react'
import { SheetContext } from '../../../contexts/SheetContextProvider'

export default function ChooseBackgroundPage({setBackgroundSelected, setActualPage}) {
    const sheet = useContext(SheetContext)

    const selectThisBackground = (e) => {
        sheet.setBackground(e.target.innerText)
        setActualPage("step1")
    } 
    return (
        <>
            
            <div className="step-description">
                <div className="svg-container">
                    <span onClick={() => {setActualPage("step1")}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                        </svg>
                    </span>
                </div>
                <div className="title">Defina seu background</div>
            </div>
            <div className="list-item-group">
                <div className="list-item" onClick={(e) => selectThisBackground(e)}>
                    Acólito
                </div>
                <div className="list-item"  onClick={(e) => selectThisBackground(e)}>
                    Artesão de Guildas
                </div>
                <div className="list-item"  onClick={(e) => selectThisBackground(e)}>
                    Artista
                </div>
                <div className="list-item"  onClick={(e) => selectThisBackground(e)}>
                    Charlatão
                </div>
                <div className="list-item"  onClick={(e) => selectThisBackground(e)}>
                    Criminoso
                </div>
                <div className="list-item"  onClick={(e) => selectThisBackground(e)}>
                    Eremita
                </div>
                <div className="list-item"  onClick={(e) => selectThisBackground(e)}>
                    Forasteiro
                </div>
                <div className="list-item"  onClick={(e) => selectThisBackground(e)}>
                    Herói do Povo
                </div>
                <div className="list-item"  onClick={(e) => selectThisBackground(e)}>
                    Marinheiro
                </div>
                <div className="list-item"  onClick={(e) => selectThisBackground(e)}>
                    Nobre
                </div>
                <div className="list-item"  onClick={(e) => selectThisBackground(e)}>
                    Órfão
                </div>
                <div className="list-item"  onClick={(e) => selectThisBackground(e)}>
                    Sábio
                </div>
                <div className="list-item"  onClick={(e) => selectThisBackground(e)}>
                    Soldado
                </div>

            </div>
        </>
    )
}
