import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouteProvider } from 'react-route-dom'

const router = createBrowserRouter([
  {
    path: '/',
    component: Home
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteProvider router={router} />
  </React.StrictMode>,
)
