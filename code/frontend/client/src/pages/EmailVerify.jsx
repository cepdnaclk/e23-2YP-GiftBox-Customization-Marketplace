import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const EmailVerify = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(120);
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  // Timer Countdown
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Handle Input
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }

    // Auto-submit on 4th digit
    const combinedOtp = newOtp.join('');
    if (combinedOtp.length === 4 && index === 3 && value !== '') {
        if(combinedOtp === '1234') {
            navigate('/reset-password'); // Go to Reset Password Page
        } else {
            alert("Invalid Code (Try 1234)");
            setOtp(['','','','']);
            inputRefs.current[0].focus();
        }
    }
  };

  // Handle Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-amber-100 via-yellow-200 to-amber-500'>
      <img src={assets.logo} alt="" className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer' onClick={()=> navigate('/login')}/>

      <div className='w-full sm:w-96 p-10 rounded-xl bg-neutral-900 border border-amber-500/30 shadow-[0_20px_50px_rgba(217,119,6,0.3)]'>
        
        <h2 className='text-3xl font-semibold text-white text-center mb-3'>Verify Email</h2>
        <p className='text-center text-amber-200/70 text-sm mb-6'>Enter the 4-digit code sent to your email.</p>
        
        <div className='flex justify-between mb-8 px-2'>
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className='w-14 h-14 bg-neutral-800 border border-neutral-700 rounded-lg text-white text-2xl text-center focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all'
            />
          ))}
        </div>

        <div className='text-center mb-6'>
            <p className='text-neutral-400 text-sm'>
               Time remaining: <span className='text-amber-500 font-mono text-lg'>{timer}s</span>
            </p>
        </div>

        <button 
          onClick={() => navigate('/login')}
          className='w-full py-2.5 rounded-full border border-amber-600/50 text-amber-500 font-medium hover:bg-neutral-800 transition-all'>
          Back to Login
        </button>
      </div>
    </div>
  )
}

export default EmailVerify