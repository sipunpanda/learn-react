import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth.js'
// import {Header, Footer} from './components'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { login, logout } from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser()
    .then( (userData)=> {
     console.log(` userData : ${userData}`)
     if(userData) {
       dispatch(login({userData}))
     } else {
       dispatch(logout())
     }
    })
    .catch( err =>{ 
     console.log("failed to get current user data in app.jsx : ",err) 
     console.log("🍎 if err due to rejected response or other then calling logout in .catch:\n")
     dispatch(logout())
   })
    .finally(()=> setLoading(false))
  }, [])
  return !loading ? (
    <div className='3xl bg-gray-400 flex flex-wrap content-between min-h-screen'>
      <div className='w-full block text-center text-3xl'>
        <Header />
        <main>
          {/* {Outlet} */}
        </main>
        <Footer />
      </div>
    </div>) : null
}

export default App
