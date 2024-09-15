
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {

  let obj = {
    username: "sipun",
    age: 22
  }

  let arr = [1, 2, 3]

  return (
    <>
      <div className='w-screen flex justify-center'>
        <div>
          <h1 className='bg-green-500 text-black text-[40px] p-4 rounded-xl mb-5 text-center'>
            Tailwind Test
          </h1>
          <div className='inline-flex gap-10'>


            <Card username='Sipun' src='https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
              someobj={obj} arr={arr} btnTxt="Visit Me" />
            <Card username='kiran' someobj={obj} arr={arr} />
            <Card username='kiran' someobj={obj} arr={arr} />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
