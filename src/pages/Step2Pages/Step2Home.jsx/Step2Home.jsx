import React from 'react'

export default function Step2Home({attributesValuesMethod, setAttributesValuesMethod, setActualPage}) {
    return (
        <>

            <div className="step-description">
                <div className="title">Passo 2</div>
                <div className="subtitle">Defina os valores de atributos</div>
            </div>
            <div className="list-item-group">
                <div className="list-item" >
                    <span>
                        Padrão
                        <span className="ms-1 grey-link">
                            (15, 14, 12, 12, 10, 8)
                        </span>
                    </span>
                    <span className='grey-link' onClick={()=>{setActualPage("default")}}>Escolher</span>
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
