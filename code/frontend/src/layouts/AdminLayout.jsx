import React from 'react';
import Sidebar from '../components/admin/Sidebar';
import TopBar from '../components/admin/TopBar.jsx';

const AdminLayout = ({ children }) => {
  return (
    // 1. Main Container: Using 'display: flex' aligns the children (Sidebar & Content) side-by-side.
    <div style={{ 
      display: 'flex',        // <--- Essential for side-by-side layout
      flexDirection: 'row',   // <--- Aligns items horizontally (Left to Right)
      minHeight: '100vh', 
      backgroundColor: '#c7d5f0' 
    }}>
      
      {/* 2. Sidebar Wrapper: Keeps the sidebar fixed width on the left */}
      <div style={{ width: '300px', flexShrink: 0 }}>
        <Sidebar />
      </div>

      {/* 3. Main Content Area: Situated to the right of the Sidebar */}
      {/* 'flex: 1' ensures this area takes up all remaining width */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        overflowY: 'auto', // Enables vertical scrolling if content is too long
        height: '100vh'    // Forces this section to take the full viewport height
      }}>

        {/* Top Navigation Bar */}
      <div style={{ height: '60px', flexShrink: 0 }}>
        <TopBar />
      </div>

        {/* Dynamic Page Content (Dashboard, Settings, etc.) */}
        <main style={{}}>
          {children}
        </main>

      </div>
      
    </div>
  );
};

export default AdminLayout;