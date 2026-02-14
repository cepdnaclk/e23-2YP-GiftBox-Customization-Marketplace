import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    // 1. Container: Centered flex column with top margin
<div className='flex flex-col items-center text-center mt-20 px-4 text-white-800 gap-4'>
    <img 
        src={assets.header_img} 
        alt="" 
        className='w-52 h-52 square-full mb-6 border-4 border-white shadow-lg'
    />
    <h1 className='text-3xl sm:text-5xl font-semibold mb-2 flex items-center justify-center gap-2'>
        Giftora
        <img className='w-8 aspect-square' src={assets.hand_wave} alt=""/>
    </h1>
    <h2 className='text-xl sm:text-3xl font-medium'>
        Welcome to our app
    </h2>
    <p className='max-w-2xl mx-auto font-light text-white-600 text-sm sm:text-base mb-6'>
        Curted with care, delivered with joy
    </p>
    <button className='bg-gray-800 text-white px-8 py-3 rounded-full text-sm hover:bg-gray-900 hover:scale-105 transition-all shadow-md'>
        Get Started
    </button>

</div>
  )
}

export default Header