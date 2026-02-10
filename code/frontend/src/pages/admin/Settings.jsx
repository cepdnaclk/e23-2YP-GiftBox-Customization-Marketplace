import React from 'react';

/**
 * Settings Component
 * This page allows the admin to configure system-wide preferences,
 * such as profile details, marketplace fees, or security settings.
 */
const Settings = () => {
  return (
    // Main container with enough padding to match the clean layout
    <div style={{ padding: '40px', fontFamily: "'Inter', sans-serif", backgroundColor: '#f0f7ff', minHeight: '100vh' }}>
      
      <h1 style={{ 
        fontSize: '36px', 
        fontWeight: '700', 
        color: '#000000', 
        marginBottom: '32px' 
      }}>
        Settings  
      </h1>

    </div>
  );
};

export default Settings;