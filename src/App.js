import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import './assets/sass/style.css'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import Login from './Pages/login.component'
import SignUp from './Pages/signup.component'
import Contact from './Pages/Contact'
import Plan from './Pages/Plan'
import Services from './Pages/Services'
import Booking from './Pages/Booking'
import Dashboard from './Pages/Dashboard'




function App() {
  return (
    <Routes>   
              <Route path='/' element={<MainLayout/>}>
                  <Route path="" element={<Home />} />
                  <Route path="sign-in" element={<Login />} />
                  <Route path="sign-up" element={<SignUp />} />
                  <Route path="plan" element={<Plan />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="services" element={<Services />} />
                  <Route path="booking" element={<Booking />} />
              </Route>

              {/* <Route exact path="/" element={<Login />} /> */}
              
              <Route path="/dashboard" element={<Dashboard />} />
              
      </Routes>
  )
}
export default App