import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/admin/Sidebar.jsx';
import Dashboard from './pages/admin/AdminDashboard.jsx';
import Partners from './pages/admin/Partners.jsx'; // මේවා ඔයා සාදාගත් නමින් තිබිය යුතුයි
import Settings from './pages/admin/Settings.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        
        {/* වම්පස Sidebar එක */}
        <Sidebar /> 

        {/* දකුණුපස ප්‍රධාන පිටුව */}
        <div style={{ flex: 1, background: '#deebf7' }}>
          <Routes>
            {/* පද්ධතියේ ආරම්භය (Default Page) Dashboard ලෙස සැකසීම */}
            <Route path="/admin" element={<AdminDashboard />} />
            
            <Route path="/admin/partners" element={<Partners />} />
            <Route path="/admin/settings" element={<Settings />} />

            {/* යමෙක් / පමණක් ගැහුවොත් ඔහුව /admin (Dashboard) වෙත යොමු කරන්න */}
            <Route path="/" element={<Navigate to="/admin" />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;