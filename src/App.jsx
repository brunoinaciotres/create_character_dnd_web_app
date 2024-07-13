import React, { useEffect, useState } from 'react'
import './App.css'
import Step1Page from './pages/Step1Page/Step1Page'
import Header from './components/Header/Header'
import Step2Page from './pages/Step2Page/Step2Page'


export default function App({ step }) {

  // ---- STATES ---- 
  const [actualPage, setActualPage] = useState("step1")
  const [raceSelected, setRaceSelected] = useState(null)
  const [classSelected, setClassSelected] = useState(null)
  const [backgroundSelected, setBackgroundSelected] = useState(null)
 
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
    ></Step1Page>
  } 
  else if (step === "2"){
    return <Step2Page></Step2Page>
  }
 }
  return (
    <main className='main-container'>
      <Header/>
      {displayStep()}
    </main>
  )
}

