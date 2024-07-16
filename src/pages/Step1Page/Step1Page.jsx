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
  backgroundSelected,
  isAllOptionsChosen
}) {



  const pages = {
    step1: <Step1Home
      classSelected={classSelected}
      raceSelected={raceSelected}
      backgroundSelected={backgroundSelected}
      setActualPage={setActualPage}
      isAllOptionsChosen={isAllOptionsChosen}
    />,
    chooseRace: <ChooseRacePage
      setRaceSelected={setRaceSelected}
      setActualPage={setActualPage}
    />,
    chooseClass: <ChooseClassPage
      setClassSelected={setClassSelected}
      setActualPage={setActualPage}
    />,
    chooseBackground: <ChooseBackgroundPage
      setBackgroundSelected={setBackgroundSelected}
      setActualPage={setActualPage}
    />
  };



  return pages[actualPage]
}
