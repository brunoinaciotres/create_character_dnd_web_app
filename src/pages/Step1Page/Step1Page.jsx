import React, { useEffect, useState } from 'react'
import Step1Home from './Step1Home/Step1Home'
import ChooseRacePage from '../ChooseRacePage/ChooseRacePage'
import ChooseClassPage from '../ChooseClassPage/ChooseClassPage'
import ChooseBackgroundPage from '../ChooseBackgroundPage/ChooseBackgroundPage'


export default function Step1Page({ 
    actualPage, 
    setActualPage,
    setRaceSelected, 
    raceSelected, 
    setBackgroundSelected, 
    setClassSelected, 
    classSelected, 
    backgroundSelected 
}) {

    const displayPage = () => { 

        if (actualPage === "step1") {
          return <Step1Home 
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
          return <ChooseBackgroundPage setBackgroundSelected={setBackgroundSelected} setActualPage={setActualPage}/>
        }
    
    }
    
    return (
      displayPage()
    )
}
