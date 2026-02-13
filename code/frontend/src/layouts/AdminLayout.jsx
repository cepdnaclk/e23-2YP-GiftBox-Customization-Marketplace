// AdminLayout.js
import React from 'react';
import Sidebar from '../components/admin/Sidebar.jsx';
import AdminFooter from '../components/admin/AdminFooter.jsx';

const AdminLayout = ({ children }) => {
  return (
    // මුළු පිටුවම ආවරණය වන පරිදි overflow-x: hidden එක් කරන්න
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      
      {/* Sidebar එක ස්ථාවර පළලකින් යුක්ත විය යුතුයි */}
      <Sidebar /> 

      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        backgroundColor: '#deebf7', // Nexus Giftbox Theme එකට ගැලපෙන වර්ණය
        minWidth: 0 // Flexbox පළල ඉක්මවා යාම වැළැක්වීමට
      }}>
        {/* Main content එකට පළල 100% ලබා දෙන්න */}
        <main style={{ flex: 1, width: '100%' }}>
          {children}
        </main>
        
        {/* Footer එක දැන් නිවැරදිව පතුලටම සහ මුළු පළලටම සැකසේ */}
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;