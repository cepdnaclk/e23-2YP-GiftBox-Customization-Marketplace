import React, { useState } from 'react'
import { assets } from '../assets/assets';

const Login = () => {
  const [state, setState] = useState('Login');

  const toggleState = () => {
    setState(state === 'Sign Up' ? 'Login' : 'Sign Up');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-blue-200 to-purple-400'>
      
      <img src={assets.logo} alt="" className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer'/>

      {/* 1. Perspective Container */}
      <div className='w-full sm:w-96 h-[450px] [perspective:1000px]'>
        
        {/* 2. Inner Flapping Container */}
        <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${state === 'Sign Up' ? '[transform:rotateY(180deg)]' : ''}`}>

          {/* ================= FRONT SIDE (LOGIN) ================= */}
          <div className='absolute inset-0 bg-slate-900 p-10 rounded-xl shadow-2xl flex flex-col justify-center [backface-visibility:hidden]'>
            
            <h2 className='text-3xl font-semibold text-white text-center mb-3'>Welcome Back</h2>
            <p className='text-center text-indigo-300 text-sm mb-6'>Login to your account</p>
            
            <form>
              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-[#333A5C] mb-4'>
                <img src={assets.mail_icon} className="w-5" alt="" />
                <input className='bg-transparent outline-none w-full text-white' type="email" placeholder='Email' required/>
              </div>

              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-[#333A5C] mb-4'>
                <img src={assets.lock_icon} className="w-5" alt="" />
                <input className='bg-transparent outline-none w-full text-white' type="password" placeholder='Password' required/>
              </div>
              <p className='text-sm text-indigo-400 cursor-pointer hover:text-indigo-200 mb-4 ml-2 w-fit'>
                Forgot Password?
              </p>


              <button className='w-full py-2.5 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 hover:scale-105 transition-all'>
                Login
              </button>
            </form>

            <p className='text-center mt-4 text-indigo-300 text-sm'>
              Don't have an account?{' '}
              <span onClick={toggleState} className='text-white cursor-pointer underline hover:text-indigo-400'>
                Sign Up
              </span>
            </p>
          </div>

          {/* ================= BACK SIDE (SIGN UP) ================= */}
          <div className='absolute inset-0 bg-slate-900 p-10 rounded-xl shadow-2xl flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            
            <h2 className='text-3xl font-semibold text-white text-center mb-3'>Create Account</h2>
            <p className='text-center text-indigo-300 text-sm mb-6'>Join us to book appointments</p>
            
            <form>
              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-[#333A5C] mb-3'>
                <img src={assets.person_icon} className="w-5" alt="" />
                <input className='bg-transparent outline-none w-full text-white' type="text" placeholder='Full Name' required/>
              </div>

              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-[#333A5C] mb-3'>
                <img src={assets.mail_icon} className="w-5" alt="" />
                <input className='bg-transparent outline-none w-full text-white' type="email" placeholder='Email' required/>
              </div>

              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-[#333A5C] mb-3'>
                <img src={assets.lock_icon} className="w-5" alt="" />
                <input className='bg-transparent outline-none w-full text-white' type="password" placeholder='Password' required/>
              </div>

              <button className='w-full py-2.5 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 hover:scale-105 transition-all'>
                Sign Up
              </button>
            </form>

            <p className='text-center mt-4 text-indigo-300 text-sm'>
              Already have an account?{' '}
              <span onClick={toggleState} className='text-white cursor-pointer underline hover:text-indigo-400'>
                Login
              </span>
            </p>
          </div>

        </div>
      </div> 
    </div>
  )
}

export default Login