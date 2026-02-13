import React from 'react';

const SellerSidebar = () => {
  return (
    <div style={{ width: '200px', height: '100vh', background: '#2c3e50', color: 'white', padding: '20px' }}>
      <h3>Seller Panel</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ margin: '20px 0', cursor: 'pointer' }}>Dashboard</li>
        <li style={{ margin: '20px 0', cursor: 'pointer' }}>My Items</li>
        <li style={{ margin: '20px 0', cursor: 'pointer' }}>Orders</li>
      </ul>
    </div>
  );
};

export default SellerSidebar;