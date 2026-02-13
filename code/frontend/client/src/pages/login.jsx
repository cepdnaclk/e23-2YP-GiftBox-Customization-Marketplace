import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState('Login');
  const navigate = useNavigate();

  const toggleState = () => {
    setState(state === 'Sign Up' ? 'Login' : 'Sign Up');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-amber-100 via-yellow-200 to-amber-500'>
      
      <img src={assets.logo} alt="" className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer'/>

      <div className='w-full sm:w-96 h-[450px] [perspective:1000px]'>
        <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${state === 'Sign Up' ? '[transform:rotateY(180deg)]' : ''}`}>

          {/* ================= LOGIN SIDE ================= */}
          <div className='absolute inset-0 bg-neutral-900 border border-amber-500/30 p-10 rounded-xl shadow-[0_20px_50px_rgba(217,119,6,0.3)] flex flex-col justify-center [backface-visibility:hidden]'>
            
            <h2 className='text-3xl font-semibold text-white text-center mb-3'>Welcome Back</h2>
            <p className='text-center text-amber-200/70 text-sm mb-6'>Login to your account</p>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-neutral-800 mb-4 focus-within:ring-1 focus-within:ring-amber-500 transition-all'>
                <img src={assets.mail_icon} className="w-5" alt="" />
                <input className='bg-transparent outline-none w-full text-white' type="email" placeholder='Email' required/>
              </div>

              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-neutral-800 mb-4 focus-within:ring-1 focus-within:ring-amber-500 transition-all'>
                <img src={assets.lock_icon} className="w-5" alt="" />
                <input className='bg-transparent outline-none w-full text-white' type="password" placeholder='Password' required/>
              </div>
              
              {/* Navigate to EmailVerify page */}
              <p onClick={() => navigate('/email-verify')} className='text-sm text-amber-500 cursor-pointer hover:text-amber-300 mb-4 ml-2 w-fit transition-colors'>
                Forgot Password?
              </p>

              <button className='w-full py-2.5 rounded-full bg-gradient-to-r from-amber-700 to-yellow-600 text-white font-medium hover:from-amber-600 hover:to-yellow-500 hover:scale-105 transition-all shadow-md'>
                Login
              </button>
            </form>

            <p className='text-center mt-4 text-neutral-400 text-sm'>
              Don't have an account?{' '}
              <span onClick={toggleState} className='text-amber-400 cursor-pointer underline hover:text-amber-200 transition-colors'>
                Sign Up
              </span>
            </p>
          </div>

          {/* ================= SIGN UP SIDE ================= */}
          <div className='absolute inset-0 bg-neutral-900 border border-amber-500/30 p-10 rounded-xl shadow-[0_20px_50px_rgba(217,119,6,0.3)] flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            
            <h2 className='text-3xl font-semibold text-white text-center mb-3'>Create Account</h2>
            <p className='text-center text-amber-200/70 text-sm mb-6'>Join us to book appointments</p>
            
            <form>
              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-neutral-800 mb-3 focus-within:ring-1 focus-within:ring-amber-500 transition-all'>
                <img src={assets.person_icon} className="w-5" alt="" />
                <input className='bg-transparent outline-none w-full text-white' type="text" placeholder='Full Name' required/>
              </div>

              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-neutral-800 mb-3 focus-within:ring-1 focus-within:ring-amber-500 transition-all'>
                <img src={assets.mail_icon} className="w-5" alt="" />
                <input className='bg-transparent outline-none w-full text-white' type="email" placeholder='Email' required/>
              </div>

              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-neutral-800 mb-3 focus-within:ring-1 focus-within:ring-amber-500 transition-all'>
                <img src={assets.lock_icon} className="w-5" alt="" />
                <input className='bg-transparent outline-none w-full text-white' type="password" placeholder='Password' required/>
              </div>

              <button className='w-full py-2.5 rounded-full bg-gradient-to-r from-amber-700 to-yellow-600 text-white font-medium hover:from-amber-600 hover:to-yellow-500 hover:scale-105 transition-all shadow-md'>
                Sign Up
              </button>
            </form>

            <p className='text-center mt-4 text-neutral-400 text-sm'>
              Already have an account?{' '}
              <span onClick={toggleState} className='text-amber-400 cursor-pointer underline hover:text-amber-200 transition-colors'>
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