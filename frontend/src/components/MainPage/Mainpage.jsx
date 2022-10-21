import React from 'react'
import Navbar from './Navbar'
import Novelties from './Novelties'
import Quizz from './Quizz/Quizz'
import Ourlikes from './Ourlikes'

function Mainpage() {
  return (
    <>
    <Navbar />
    <Novelties />
    <Quizz />
    <Ourlikes />
    </>
  )
}

export default Mainpage