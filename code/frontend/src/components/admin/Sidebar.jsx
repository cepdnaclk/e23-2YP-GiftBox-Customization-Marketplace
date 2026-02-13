import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaThLarge, FaStore, FaCog } from 'react-icons/fa';

/**
 * Sidebar Component
 * Provides vertical navigation for the Admin Panel.
 * Uses NavLink for automatic "active" state detection based on the URL.
 */
const Sidebar = () => {
  
  // Base styling for all navigation links
  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 20px',
    color: '#aeb6f2',        // Muted light purple/blue text
    textDecoration: 'none',  // Removes the default underline
    gap: '12px',             // Space between the icon and the text
    borderRadius: '0px',
    marginBottom: '8px',
    transition: '0.3s'       // Smooth transition for hover/active states
  };

  // Styling applied specifically to the active link
  const activeLinkStyle = {
    ...linkStyle,            // Inherit all base styles
    backgroundColor: '#293546', // Darker blue-gray background for focus
    color: '#e4e5e6',        // Brighter text color for contrast
  };

  return (
    // Main Sidebar Container
    <div style={{ 
      width: '300px', 
      height: '100vh', 
      background: '#111827', // Dark slate background
      color: 'white', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      
      {/* Sidebar Branding/Header Section */}
      <div style={{ 
        padding: '25px', 
        fontSize: '20px', 
        fontWeight: 'bold', 
        borderBottom: '1px solid #1f2937' 
      }}>
         Admin Panel
      </div>
      
      {/* Navigation Menu */}
      <nav style={{ 
        marginTop: '20px', 
        padding: '0 10px', 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        
        {/* NavLink "style" prop provides an 'isActive' boolean.
          We use this to toggle between activeLinkStyle and linkStyle.
        */}

        {/* Dashboard Link */}
        <NavLink 
          to="/admin" 
          end // 'end' ensures it only highlights when the path is exactly "/admin"
          style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
        >
          <FaThLarge size={18} /> Dashboard
        </NavLink>
        
        {/* Partners Link */}
        <NavLink 
          to="/admin/partners" 
          style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
        >
          <FaStore size={18} /> Partners
        </NavLink>
        
        {/* Settings Link */}
        <NavLink 
          to="/admin/settings" 
          style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
        >
          <FaCog size={18} /> Settings
        </NavLink>

      </nav>
    </div>
  );
};

export default Sidebar;