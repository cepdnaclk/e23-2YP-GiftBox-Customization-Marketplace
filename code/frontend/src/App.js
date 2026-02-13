import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AdminLayout from './layouts/AdminLayout.jsx'; 
import Partners from './pages/admin/Partners.jsx'; 
import Settings from './pages/admin/Settings.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import PendingPartners from './pages/admin/PendingPartners.jsx';
import Customers from './pages/admin/Customers.jsx';

function App() {
  return (
    <Router>
      <Routes>

        {/* Admin Routes with AdminLayout */}
        <Route path="/admin/*" element={
          <AdminLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="partners" element={<Partners />} />
              <Route path="partners/pending" element={<PendingPartners />} />
              <Route path="settings" element={<Settings />} />
              <Route path="customers" element={<Customers />} />
            </Routes>
          </AdminLayout>
        } />

        {/* Default Redirect */}
        <Route path="/" element={<Navigate to="/admin" />} />
      </Routes>
    </Router>
  );
}

export default App;