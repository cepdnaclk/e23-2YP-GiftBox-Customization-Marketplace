import React from 'react';
import { Search, Bell, Menu } from 'lucide-react'; 

const Header = () => {
  return (
    <header className="h-16 bg-[#111827] flex items-center justify-between px-4 md:px-6 border-b border-gray-800 shadow-sm text-white relative z-20">

      {/* Right Section: Notifications & Profile */}
      <div className="flex items-center justify-end gap-4 w-48 shrink-0">
        <button className="relative p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-400">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#111827]"></span>
        </button>
        
        {/* Profile Avatar */}
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border border-gray-600 cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-offset-[#111827] hover:ring-indigo-500 transition-all"></div>
      </div>

    </header>
  );
};

export default Header;