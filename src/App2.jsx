import React, { createContext, useEffect, useState } from 'react'
import './App.css'
import Step1Page from './pages/Step1Pages/Step1Page'
import Header from './components/Header/Header'
import Step2Page from './pages/Step2Pages/Step2Page'


export default function App2({ step }) {

    // ---- STATES ---- 
    

    const [currentStep, setCurrentStep] = useState("step1")

    const steps = {
        a: "hello world"
    }

    useEffect(() => {

    }, currentStep)
    return (
        <SheetContext.Provider value={steps}>
            <main className='main-container'>
                <Header />

            </main>
        </SheetContext.Provider>
    )
}

