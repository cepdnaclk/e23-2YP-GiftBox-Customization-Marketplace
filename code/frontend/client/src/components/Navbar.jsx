import React from 'react'
import { assets } from '../assets/assets'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const Navigate = useNavigate()
  return (
    <div className='w-full flex justify-between items-center p-4 sm:p6 sm:px-24 absolute top-0 left-0 z-10 '>
        <img src={assets.logo} alt="logo" className='w-28 sm:w-32'/>
        <button onClick={()=>Navigate('/login')}
        className='flex items-center gap-2 border border-gray-800 rounded-full px-8 py-3 text-gray-800 hover:bg-gray-800 hover:text-white hover:scale-105 transition-all shadow-md'>
            Login <img src={assets.arrow_icon} alt="" /></button>
    </div>
  )
}

export default Navbar