import React from 'react';
import Sidebar from '../components/admin/Sidebar';
import AdminFooter from '../components/admin/AdminFooter';
import TopBar from '../components/admin/TopBar.jsx';

const AdminLayout = ({ children }) => {
  return (
    /* Main container: Organized as a vertical column */
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Top Part: Sidebar + Main Content Side-by-Side */}
      <div style={{ display: 'flex', flex: 1 }}>
        
        {/* Sidebar: Persistent on the left */}
        <Sidebar />

        {/* Content Area: TopBar + Dynamic Page Content */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          background: '#96dfe9' 
        }}>

          {/* Top Navigation Bar */}
          <TopBar />

          {/* Main dynamic content where Dashboard/Partners will load */}
          <main style={{ flex: 1, padding: '0px' }}>
            {children}
          </main>
        </div>
      </div>

      {/* Bottom Part: Full Width Footer (Spans across Sidebar and Content) */}
      <div style={{ backgroundColor: '#3fadd5', width: '100%' }}>
        <AdminFooter />
      </div>
      
    </div>
  );
};

export default AdminLayout;