import React, { useContext, useEffect, useState } from 'react'
import Step1Home from './Step1Home/Step1Home'
import ChooseRacePage from './ChooseRacePage/ChooseRacePage'
import ChooseClassPage from './ChooseClassPage/ChooseClassPage'
import ChooseBackgroundPage from './ChooseBackgroundPage/ChooseBackgroundPage'


export default function Step1Page() {
  
  const [actualPage, setActualPage] = useState("step1")
  
 
  const pages = {
    step1: <Step1Home
      setActualPage={setActualPage}
    />,
    chooseRace: <ChooseRacePage
      setActualPage={setActualPage}
    />,
    chooseClass: <ChooseClassPage
      setActualPage={setActualPage}
    />,
    chooseBackground: <ChooseBackgroundPage
      setActualPage={setActualPage}
    />
  };

  return pages[actualPage]
}
