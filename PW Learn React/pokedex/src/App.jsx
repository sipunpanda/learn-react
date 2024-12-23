import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'

function App() {

  return (
    <>
    <Pokedex />
      <h1 className='text-red-800'>Pokedex</h1>
    </>
  )
}

export default App
