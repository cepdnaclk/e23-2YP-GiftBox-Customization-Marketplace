import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import EmailVerify from './pages/EmailVerify'
import Login from './pages/login'
import ResetPassword from './pages/ResetPassword'




const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/email-verify' element={<EmailVerify/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
      </Routes>
    </div>
  )
}

export default App