import React, { useContext } from 'react'
import {SheetContext}  from '../../contexts/SheetContextProvider'

export default function Header() {
    const sheet = useContext(SheetContext)
    return (
        <div className="page-header">
            <h1 className='title '>Criar Personagem {sheet.race}</h1>
            <div className="subtitle">
                D&D 5E
            </div>
        </div>
    )
}
