import React from 'react';
import { Search, Bell, User } from 'lucide-react';

/**
 * TopBar Component
 * Designed for the Nexus Giftbox Marketplace Admin Panel.
 */
const TopBar = () => {
  return (
    /* 1. 'flex' and 'items-center' on the header ensure all direct 
          children (Search area and Action area) are vertically centered.
       2. 'h-16' sets a consistent height for the bar.
    */
    <header className="h-16 bg-[#111827] flex items-center justify-between px-6 border-b border-gray-800 shadow-sm text-white">
      
      {/* Search Section Container: Vertically centered using 'items-center' */}
      <div className="flex items-center space-x-6 flex-1 h-full">
        
        {/* Search Input Wrapper */}
        <div className="relative w-full max-w-md hidden md:block">
          {/* 'flex' and 'items-center' here ensure the search icon is 
              perfectly centered inside the input height.
          */}
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </span>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-full leading-5 bg-[#1f2937] text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-gray-700 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-all"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Actions Section: Notification and Profile centered vertically */}
      <div className="flex items-center space-x-5 h-full">
        
        {/* Notification Icon with Badge: Centered within its own flex container */}
        <div className="relative cursor-pointer group flex items-center h-full">
          <Bell size={18} className="text-gray-400 group-hover:text-white" />

        </div>

        {/* Profile Avatar Section: Perfectly centered vertically */}
        <div className="flex items-center pl-2 h-full">
          <div className="h-9 w-9 rounded-full border-2 border-gray-600 overflow-hidden cursor-pointer hover:border-blue-500 transition-all flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80" 
              alt="User profile" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </header>
  );
};

export default TopBar;