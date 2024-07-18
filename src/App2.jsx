import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import Step1Page from './pages/Step1Pages/Step1Page'
import Header from './components/Header/Header'
import Step2Page from './pages/Step2Pages/Step2Page'
import { SheetContextProvider } from './contexts/SheetContextProvider'
import Sheet from './class/Sheet'
import {StepContextProvider} from './contexts/StepContextProvider'

export default function App2() {

    // ---- STATES ---- 

    const [currentStep, setCurrentStep] = useState(1)


    const steps = [
        <Step1Page />,
        <Step2Page />
    ]

    const step = {
        step:currentStep,
        setCurrentStep(newStep){
            setCurrentStep(newStep)
        }
    }


    const Sheet1 = new Sheet({})

    return (
        <SheetContextProvider sheet={Sheet1} >
            <StepContextProvider step={step}>
                <main className='main-container'>
                    <Header />
                    {steps[currentStep - 1] || `Não há componente Step para \n índice = ${currentStep-1} e currentStep = ${currentStep} no Array steps em <App/>`}
                    {console.log(currentStep)}
                </main>
            </StepContextProvider>
        </SheetContextProvider>
    )
}



