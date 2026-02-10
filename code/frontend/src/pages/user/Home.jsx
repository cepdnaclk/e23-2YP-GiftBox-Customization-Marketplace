import React from 'react';
import { Link } from 'react-router-dom';
import { FaGift, FaUserLock, FaStore } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="landing-container">
      {/* Hero Section - හැමෝටම පේන කොටස */}
      <header style={{ padding: '80px 20px', textAlign: 'center', background: '#fff0f3' }}>
        <h1>Nexus Giftbox Marketplace 🎁</h1>
        <p>Discover unique gifts from local vendors.</p>
        
        <div style={{ marginTop: '30px' }}>
          <Link to="/login">
            <button style={{ padding: '15px 30px', background: '#ff4d6d', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.1rem' }}>
              <FaUserLock style={{ marginRight: '10px' }} /> Login to Create Your Box
            </button>
          </Link>
        </div>
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