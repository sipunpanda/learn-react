import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
<h1 className='text-9xl text-gray-200'>App</h1>
<AddTodo/>
<Todos/>
    </>
  )
}

export default App
