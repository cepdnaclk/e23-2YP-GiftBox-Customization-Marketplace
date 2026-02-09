import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// --- COMPONENT IMPORTS ---
// Ensure these paths match your actual folder structure
import Sidebar from './components/admin/Sidebar.jsx';
import Partners from './pages/admin/Partners.jsx'; 
import Settings from './pages/admin/Settings.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';

/**
 * Main App Component
 * Uses React Router to manage navigation and a Flexbox layout 
 * to keep the Sidebar fixed on the left.
 */
function App() {
  return (
    <Router>
      {/* Main Layout Wrapper: 
        Using 'flex' ensures the Sidebar and Main Content sit side-by-side. 
      */}
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        
        {/* Sidebar stays visible across all routes */}
        <Sidebar /> 

        {/* Main Content Area: 
          'flex: 1' allows this div to take up the remaining width.
        */}
        <div style={{ flex: 1, background: '#deebf7' }}>
          <Routes>
            {/* Route for the main Admin Overview */}
            <Route path="/admin" element={<Dashboard />} />
            
            {/* Route for Partner/Seller management */}
            <Route path="/admin/partners" element={<Partners />} />
            
            {/* Route for System Settings */}
            <Route path="/admin/settings" element={<Settings />} />

            {/* Default Redirect: 
              If the user visits the base URL "/", they are automatically 
              sent to the "/admin" dashboard.
            */}
            <Route path="/" element={<Navigate to="/admin" />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;