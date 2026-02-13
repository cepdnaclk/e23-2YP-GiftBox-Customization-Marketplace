import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// --- ADMIN IMPORTS ---
import Sidebar from './components/admin/Sidebar.jsx';
import Partners from './pages/admin/Partners.jsx'; 
import Settings from './pages/admin/Settings.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';

// --- SELLER IMPORTS ---

import SellerDashboard from './pages/seller/SellerDashboard.jsx';

/**
 * Main App Component
  * This component sets up the routing for both the Admin and Seller sections of the application.
 */
function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh' }}>
        
        <Routes>
          {/* --- ADMIN SECTION --- */}
          {/* / */}
          <Route 
            path="/admin/*" 
            element={
              <div style={{ display: 'flex' }}>
                <Sidebar /> 
                <div style={{ flex: 1, background: '#deebf7' }}>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="partners" element={<Partners />} />
                    <Route path="settings" element={<Settings />} />
                  </Routes>
                </div>
              </div>
            } 
          />

          {/* --- SELLER SECTION --- */}
          <Route path="/seller" element={<SellerDashboard />} />

          {/* --- DEFAULT REDIRECT --- */}

          <Route path="/" element={<Navigate to="/admin" />} />
          
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;