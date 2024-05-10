import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(32)




  const addvalue =()=>{
    console.log("working",counter);
    counter = counter +1
    setCounter(counter)
  }


  const subvalue = ()=>{
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>its me </h1>
      <h2>Counter value is {counter}</h2>
      <button
      onClick={addvalue}
      >Add Value</button>
       <br/>
      <button
      onClick={subvalue}
      >remove value</button>
      
      </>
      )
}

      export default App
