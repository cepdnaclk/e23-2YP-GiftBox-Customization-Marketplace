import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGift, FaUserLock, FaStore, FaSignOutAlt } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();
  
  // Retrieve the user data from localStorage that we saved during login
  const loggedInUser = JSON.parse(localStorage.getItem('user'));

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear the user data from the browser
    window.location.reload();        // Reload to update the UI back to the guest view
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <header style={{ padding: '80px 20px', textAlign: 'center', background: '#fff0f3' }}>
        <h1>Nexus Giftbox Marketplace 🎁</h1>
        
        {/* Conditional Content: Check if a user is logged in */}
        {loggedInUser ? (
          <div>
            <h2>Welcome back, {loggedInUser.name}!</h2>
            <p>You are logged in as a <strong>{loggedInUser.role}</strong>.</p>
            
            <div style={{ marginTop: '30px' }}>
              <button 
                onClick={handleLogout}
                style={{ padding: '10px 20px', background: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              >
                <FaSignOutAlt style={{ marginRight: '10px' }} /> Logout
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p>Discover unique gifts from local vendors.</p>
            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <Link to="/login">
                <button style={{ padding: '15px 30px', background: '#ff4d6d', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.1rem' }}>
                  <FaUserLock style={{ marginRight: '10px' }} /> Login to Create Your Box
                </button>
              </Link>
              
              {/* Added a Register button link as we discussed */}
              <Link to="/register">
                <button style={{ padding: '15px 30px', background: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.1rem' }}>
                  Register
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Featured Vendors Preview */}
      <section style={{ padding: '40px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <div className="preview-card" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px' }}>
          <FaStore size={40} color="#ff4d6d" />
          <h3>Explore Vendors</h3>
          <p>Browse through hundreds of creative gift shops.</p>
        </div>
        <div className="preview-card" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px' }}>
          <FaGift size={40} color="#ff4d6d" />
          <h3>Specialty Boxes</h3>
          <p>Birthday, Anniversary, and Corporate collections.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;