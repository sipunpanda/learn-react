
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  
  let obj = {
    username: "sipun",
    age:22
  }

  let arr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-500 text-black p-4 rounded-xl mb-5'>
      Tailwind Test
     </h1>

     <Card username='sipun' someobj = {obj} arr = {arr} btnTxt = "Visit Me"/>
  


    </>
  )
}

export default App
