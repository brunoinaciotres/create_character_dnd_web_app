import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Step1Home({ isAllOptionsChosen, setActualPage, raceSelected, classSelected, backgroundSelected }) {
   

    return (
        <>
            
            <div className="step-description">
                <div className="title">Passo 1</div>
                <div className="subtitle">Defina raça, classe e background</div>
            </div>
            <div className="list-item-group">
                <div className={`list-item ${raceSelected != null ? "border-white" : null}`}>
                    <div className="wave"></div>
                    <span className='d-flex align-items-center'>
                        {raceSelected != null ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg> : null}

                        <span className="ms-2">{raceSelected == null ? "Raça" : raceSelected}</span>
                    </span>

                    <a onClick={() => { setActualPage("chooseRace") }} className="grey-link">
                        {raceSelected != null ? "Alterar" : "Escolher"}
                    </a>
                </div>
                <div className={`list-item ${classSelected != null ? "border-white" : null}`}>
                    <div className="wave"></div>
                    <span className='d-flex align-items-center'>
                        {classSelected != null ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg> : null}

                        <span className="ms-2">{classSelected == null ? "Classe" : classSelected}</span>
                    </span>
                    <a onClick={() => { setActualPage("chooseClass") }} className="grey-link">
                        {classSelected != null ? "Alterar" : "Escolher"}
                    </a>
                </div>
                <div className={`list-item ${backgroundSelected != null ? "border-white" : null}`}>
                    <div className="wave"></div>
                    <span className='d-flex align-items-center'>
                        {backgroundSelected != null ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg> : null}
                        <span className="ms-2">{backgroundSelected == null ? "Background" : backgroundSelected}</span>

                    </span>
                    <a onClick={() => { setActualPage("chooseBackground") }} className="grey-link">
                        {backgroundSelected != null ? "Alterar" : "Escolher"}
                    </a>
                </div>
            </div>
            <div className="footer">
                {isAllOptionsChosen ? (
                    <Link to="/step2" onClick={()=>{ setActualPage("step2")}} className="primary-button">
                        Avançar
                    </Link>

                ) : (
                    <div className="disabled-button">
                        Defina as opções
                    </div>
                )}

            </div>
        </>
    )
}
