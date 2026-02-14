import React from 'react';

const SellerSidebar = () => {
  // Sidebar container style matching the dark admin theme
  const sidebarStyle = {
    width: '260px',
    height: '100vh',
    background: '#041020', 
    color: 'white',
    padding: '25px 15px',
    position: 'fixed',
    left: 0,
    top: 0
  };

  const menuItemStyle = {
    padding: '12px 15px',
    margin: '8px 0',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background 0.3s'
  };

  // Active menu item highlight matching the admin panel
  const activeItemStyle = {
    ...menuItemStyle,
    background: '#293546',   // Darker background for active item
    fontWeight: '500'
  };

  return (
    <div style={sidebarStyle}>
      <h2 style={{ fontSize: '1.4rem', marginBottom: '40px', paddingLeft: '15px', fontWeight: 'bold' }}>
        Seller Panel
      </h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={activeItemStyle}>Dashboard</li>
        <li style={menuItemStyle}>My Items</li>
        <li style={menuItemStyle}>Orders</li>
        <li style={menuItemStyle}>Settings</li>
      </ul>
    </div>
  );
};

export default SellerSidebar;