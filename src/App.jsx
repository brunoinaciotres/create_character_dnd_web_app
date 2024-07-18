import React, { useEffect, useState } from 'react'
import './App.css'
import Step1Page from './pages/Step1Pages/Step1Page'
import Header from './components/Header/Header'
import Step2Page from './pages/Step2Pages/Step2Page'


export default function App({ step }) {

  // ---- STATES ---- 
  const [actualPage, setActualPage] = useState("step1")
  const [raceSelected, setRaceSelected] = useState(null)
  const [classSelected, setClassSelected] = useState(null)
  const [backgroundSelected, setBackgroundSelected] = useState(null)
  const [isAllOptionsChosen, setIsAllOptionsChosen] = useState(false)
  const [attributesValuesMethod, setAttributesValuesMethod] = useState(null)

    useEffect(() => {
        if (raceSelected != null && classSelected != null && backgroundSelected != null) {
            setIsAllOptionsChosen(true)
        }
        
    })
 const displayStep = () => {
  if (step === "1") {
    return <Step1Page 
    classSelected={classSelected} 
    raceSelected={raceSelected} 
    backgroundSelected={backgroundSelected}
    setBackgroundSelected={setBackgroundSelected}
    setRaceSelected={setRaceSelected}
    setClassSelected={setClassSelected}
    actualPage={actualPage}
    setActualPage={setActualPage}
    isAllOptionsChosen={isAllOptionsChosen}
    setIsAllOptionsChosen={setIsAllOptionsChosen}
    ></Step1Page>
  } 
  else if (step === "2"){
    return <Step2Page 
    isAllOptionsChosen={isAllOptionsChosen}
    actualPage={actualPage}
    setActualPage={setActualPage}
    attributesValuesMethod={attributesValuesMethod}
    setAttributesValuesMethod={setAttributesValuesMethod}
    ></Step2Page>
  }
 }
  return (
    <main className='main-container'>
      <Header/>
      {displayStep()}
    </main>
  )
}

