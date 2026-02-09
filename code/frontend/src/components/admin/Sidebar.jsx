import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaThLarge, FaStore, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 20px',
    color: '#cbd5e1',
    textDecoration: 'none',
    gap: '10px'
  };

  return (
    <div style={{ width: '260px', height: '100vh', background: '#1e293b', color: 'white' }}>
      <div style={{ padding: '25px', fontSize: '20px', fontWeight: 'bold', borderBottom: '1px solid #334155' }}>
         Admin Panel
      </div>
      <nav style={{ marginTop: '20px' }}>
        {/* Dashboard Link - මෙහි 'end' භාවිතා කරන්නේ මෙය පද්ධතියේ මුල නිසාය */}
        <NavLink to="/admin" end style={linkStyle} className={({ isActive }) => isActive ? 'active' : ''}>
          <FaThLarge /> Dashboard
        </NavLink>
        
        <NavLink to="/admin/partners" style={linkStyle} className={({ isActive }) => isActive ? 'active' : ''}>
          <FaStore /> Partners
        </NavLink>
        
        <NavLink to="/admin/settings" style={linkStyle} className={({ isActive }) => isActive ? 'active' : ''}>
          <FaCog /> Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;