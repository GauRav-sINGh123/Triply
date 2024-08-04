import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/nav/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/AuthContext.jsx'
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
   <AuthProvider>
  <BrowserRouter>
   <Navbar/>
   <App/>
   <Toaster/>
   <Footer/>
  </BrowserRouter>
  </AuthProvider>
    
  </>
)
