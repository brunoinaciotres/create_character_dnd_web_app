import React, { useContext } from 'react'

export default function Header() {
    const steps = useContext(SheetContext)
    return (
        <div className="page-header">
            <h1 className='title '>Criar Personagem</h1>
            <div className="subtitle">
                D&D 5E
            </div>
        </div>
    )
}
