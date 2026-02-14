import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // Add logic to save new password here
    alert("Password Reset Successful!");
    navigate('/login');
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-amber-100 via-yellow-200 to-amber-500'>
      <img src={assets.logo} alt="" className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer' onClick={()=> navigate('/login')}/>

      <div className='w-full sm:w-96 p-10 rounded-xl bg-neutral-900 border border-amber-500/30 shadow-[0_20px_50px_rgba(217,119,6,0.3)]'>
        
        <h2 className='text-3xl font-semibold text-white text-center mb-3'>Reset Password</h2>
        <p className='text-center text-amber-200/70 text-sm mb-6'>Enter your new password below.</p>
        
        <form onSubmit={onSubmit}>
          <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-neutral-800 mb-4 focus-within:ring-1 focus-within:ring-amber-500 transition-all'>
            <img src={assets.lock_icon} className="w-5" alt="" />
            <input 
                className='bg-transparent outline-none w-full text-white' 
                type="password" 
                placeholder='New Password' 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
            />
          </div>

          <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-neutral-800 mb-4 focus-within:ring-1 focus-within:ring-amber-500 transition-all'>
            <img src={assets.lock_icon} className="w-5" alt="" />
            <input 
                className='bg-transparent outline-none w-full text-white' 
                type="password" 
                placeholder='Confirm Password' 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
          </div>

          <button className='w-full py-2.5 rounded-full bg-gradient-to-r from-amber-700 to-yellow-600 text-white font-medium hover:from-amber-600 hover:to-yellow-500 hover:scale-105 transition-all shadow-md mt-2'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword