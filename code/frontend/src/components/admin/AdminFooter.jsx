// AdminFooter.jsx
import React from 'react';

const AdminFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Footer container with background color, border, padding, and margin-top to push it to the bottom
    <footer className="w-full bg-[#deebf7] border-t border-blue-200 py-4 px-6 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        
        {/* Left Side: Copyright Information */}
        <div>
          <p>© {currentYear} <span className="font-semibold text-blue-700">Nexus Giftbox Marketplace</span>. All rights reserved.</p>
        </div>

        {/* Version and Links Section: Aligned to the right on larger screens, stacked on smaller screens */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/help" className="hover:text-blue-800 transition-colors">Help Center</a>
          <span className="text-blue-300">|</span>
          <span className="italic font-medium">Version 1.0.0-beta</span>
        </div>

      </div>
    </footer>
  );
};

export default AdminFooter;