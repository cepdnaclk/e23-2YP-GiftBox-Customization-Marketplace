import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to import axios!

const Login = () => {
  const [state, setState] = useState('Login');
  const navigate = useNavigate();

  // 1. Add state variables to store what the user types
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleState = () => {
    setState(state === 'Sign Up' ? 'Login' : 'Sign Up');
    // Clear inputs when flipping the card
    setName('');
    setUsername('');
    setEmail('');
    setPassword('');
  };

  // 2. Create the function to send data to Spring Boot
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (state === 'Sign Up') {
        // --- REGISTER API CALL ---
        const response = await axios.post('http://localhost:8080/api/auth/register', {
          name,
          username,
          email,
          password
        });

        if (response.data.success === "true") {
          alert("Registration Successful! Please login.");
          setState('Login'); // Flip card to login side
        } else {
          alert(response.data.message); // e.g., "Username already exists"
        }

      } else {
        // --- LOGIN API CALL ---
        const response = await axios.post('http://localhost:8080/login', {
          username,
          password
        });

        // Our Spring Boot LoginController returns a raw String, so we check the text
        if (typeof response.data === 'string' && response.data.includes("Login Successful")) {
          alert(response.data); // "Login Successful! Welcome [Name]"
          navigate('/'); // Send user to the dashboard/home page!
        } else {
          alert(response.data); // "Login Failed..."
        }
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Something went wrong connecting to the server.");
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-amber-100 via-yellow-200 to-amber-500'>
      
      <img src={assets.logo} alt="" className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer'/>

      <div className='w-full sm:w-96 h-[500px] [perspective:1000px]'>
        <div className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${state === 'Sign Up' ? '[transform:rotateY(180deg)]' : ''}`}>

          {/* ================= LOGIN SIDE ================= */}
          <div className='absolute inset-0 bg-neutral-900 border border-amber-500/30 p-10 rounded-xl shadow-[0_20px_50px_rgba(217,119,6,0.3)] flex flex-col justify-center [backface-visibility:hidden]'>
            
            <h2 className='text-3xl font-semibold text-white text-center mb-3'>Welcome Back</h2>
            <p className='text-center text-amber-200/70 text-sm mb-6'>Login to your account</p>
            
            {/* Added onSubmitHandler here */}
            <form onSubmit={onSubmitHandler}>
              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-neutral-800 mb-4 focus-within:ring-1 focus-within:ring-amber-500 transition-all'>
                <img src={assets.person_icon} className="w-5" alt="" />
                {/* Changed to Username instead of Email */}
                <input 
                  onChange={(e) => setUsername(e.target.value)} 
                  value={username} 
                  className='bg-transparent outline-none w-full text-white' 
                  type="text" 
                  placeholder='Username' 
                  required
                />
              </div>

              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-neutral-800 mb-4 focus-within:ring-1 focus-within:ring-amber-500 transition-all'>
                <img src={assets.lock_icon} className="w-5" alt="" />
                <input 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password} 
                  className='bg-transparent outline-none w-full text-white' 
                  type="password" 
                  placeholder='Password' 
                  required
                />
              </div>
              
              <p onClick={() => navigate('/email-verify')} className='text-sm text-amber-500 cursor-pointer hover:text-amber-300 mb-4 ml-2 w-fit transition-colors'>
                Forgot Password?
              </p>

              <button type="submit" className='w-full py-2.5 rounded-full bg-gradient-to-r from-amber-700 to-yellow-600 text-white font-medium hover:from-amber-600 hover:to-yellow-500 hover:scale-105 transition-all shadow-md'>
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
            
            {/* Added onSubmitHandler here */}
            <form onSubmit={onSubmitHandler}>
              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-neutral-800 mb-3 focus-within:ring-1 focus-within:ring-amber-500 transition-all'>
                <img src={assets.person_icon} className="w-5" alt="" />
                <input 
                  onChange={(e) => setName(e.target.value)} 
                  value={name} 
                  className='bg-transparent outline-none w-full text-white' 
                  type="text" 
                  placeholder='Full Name' 
                  required
                />
              </div>

              {/* Added Username Field to Sign Up */}
              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-neutral-800 mb-3 focus-within:ring-1 focus-within:ring-amber-500 transition-all'>
                <img src={assets.person_icon} className="w-5" alt="" />
                <input 
                  onChange={(e) => setUsername(e.target.value)} 
                  value={username} 
                  className='bg-transparent outline-none w-full text-white' 
                  type="text" 
                  placeholder='Choose a Username' 
                  required
                />
              </div>

              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-neutral-800 mb-3 focus-within:ring-1 focus-within:ring-amber-500 transition-all'>
                <img src={assets.mail_icon} className="w-5" alt="" />
                <input 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email} 
                  className='bg-transparent outline-none w-full text-white' 
                  type="email" 
                  placeholder='Email' 
                  required
                />
              </div>

              <div className='flex items-center gap-3 w-full px-5 py-3 rounded-full bg-neutral-800 mb-3 focus-within:ring-1 focus-within:ring-amber-500 transition-all'>
                <img src={assets.lock_icon} className="w-5" alt="" />
                <input 
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password} 
                  className='bg-transparent outline-none w-full text-white' 
                  type="password" 
                  placeholder='Password' 
                  required
                />
              </div>

              <button type="submit" className='w-full py-2.5 rounded-full bg-gradient-to-r from-amber-700 to-yellow-600 text-white font-medium hover:from-amber-600 hover:to-yellow-500 hover:scale-105 transition-all shadow-md'>
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

export default Login;