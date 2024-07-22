import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import Step1Page from './pages/Step1Pages/Step1Page'
import Header from './components/Header/Header'
import Step2Page from './pages/Step2Pages/Step2Page'
import { SheetContextProvider } from './contexts/SheetContextProvider'

import {StepContextProvider} from './contexts/StepContextProvider'

export default function App2({sheet}) {

    // ---- STATES ---- 

    const [currentStep, setCurrentStep] = useState(1)
    const [completedSteps, setCompletedSteps] = useState([])


    const stepsPages = [
        <Step1Page />,
        <Step2Page />
    ]

    const step = {
        currentStep,
        setCurrentStep,
        completedSteps,
        setCompletedSteps
    }

    

    return (
        <SheetContextProvider sheet={sheet} >
            <StepContextProvider steps={step}>
                <main className='main-container'>
                    <Header />
                  
                    {stepsPages[currentStep - 1] || `Não há componente Step para \n índice = ${currentStep-1} e currentStep = ${currentStep} no Array stepsPages em <App/>`}
                   
                </main>
            </StepContextProvider>
        </SheetContextProvider>
    )
}



