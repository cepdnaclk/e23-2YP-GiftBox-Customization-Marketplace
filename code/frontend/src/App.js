import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- COMPONENT IMPORTS ---
import Login from './pages/auth/Login.jsx'; 
import Register from './pages/auth/Register.jsx';
import Sidebar from './components/admin/Sidebar.jsx';
import Partners from './pages/admin/Partners.jsx'; 
import Settings from './pages/admin/Settings.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import Home from './pages/user/Home.jsx';
import UserDashboard from './pages/user/UserDashboard.jsx';

const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  // This will print the current path in your Browser Console (F12)
  useEffect(() => {
    console.log("Current Path:", location.pathname);
    console.log("Is Admin View:", isAdminPath);
  }, [location]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* If this doesn't show, check if Sidebar.jsx has errors */}
      {isAdminPath && <Sidebar />} 

      <div style={{ 
        flex: 1, 
        background: isAdminPath ? '#deebf7' : '#ffffff' 
      }}>
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/partners" element={<Partners />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;