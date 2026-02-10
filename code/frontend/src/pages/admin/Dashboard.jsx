import React from 'react';

/**
 * AdminDashboard Component
 * This is the overview page. The header style matches the "Orders" page look.
 */
const Dashboard = () => {
  return (
    // Main container with enough padding to match the clean layout
    <div style={{ padding: '40px', fontFamily: "'Inter', sans-serif", backgroundColor: '#f0f7ff', minHeight: '100vh' }}>
      
      <h1 style={{ 
        fontSize: '36px', 
        fontWeight: '700', 
        color: '#000000', 
        marginBottom: '32px' 
      }}>
        Dashboard
      </h1>

    </div>
  );
};

export default Dashboard;