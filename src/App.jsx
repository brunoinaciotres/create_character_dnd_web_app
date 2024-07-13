import React, { useState } from 'react'
import './App.css'
import Step1Page from './pages/Step1Page/Step1Page'
import ChooseRacePage from './pages/ChooseRacePage/ChooseRacePage'
import ChooseClassPage from './pages/ChooseClassPage/ChooseClassPage'
import ChooseBackgroundPage from './pages/ChooseBackgroundPage/ChooseBackgroundPage'

export default function App({ children }) {

  // ---- STATES ---- 
  const [actualPage, setActualPage] = useState("step1")
  const [raceSelected, setRaceSelected] = useState(null)
  const [classSelected, setClassSelected] = useState(null)
  const [backgroundSelected, setBackgroundSelected] = useState(null)
  const displayPage = () => { 

    if (actualPage === "step1") {
      return <Step1Page 
                classSelected={classSelected} 
                raceSelected={raceSelected} 
                backgroundSelected={backgroundSelected}
                setActualPage={setActualPage}
              />
    } 
    else if (actualPage === "chooseRace") {
      return <ChooseRacePage setRaceSelected={setRaceSelected} setActualPage={setActualPage}/>
    } 
    else if (actualPage === "chooseClass"){
      return <ChooseClassPage setClassSelected={setClassSelected} setActualPage={setActualPage}/>
    }
    else if (actualPage === "chooseBackground"){
      return <ChooseBackgroundPage setActualPage={setActualPage}/>
    }


  }
  return (
    <main className='main-container'>
      {/* {children} */}
      {displayPage()}
    </main>
  )
}

