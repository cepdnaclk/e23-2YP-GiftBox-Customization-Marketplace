import React from 'react';
import { FaGift, FaRocket, FaStore } from 'react-icons/fa';

const Home = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <header style={{ backgroundColor: '#f8d7da', padding: '50px', borderRadius: '15px' }}>
                <h1>Welcome to GiftBox Marketplace 🎁</h1>
                <p>Customize your perfect gift box with ease.</p>
                <button style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Start Shopping <FaRocket />
                </button>
            </header>

            <section style={{ marginTop: '40px', display: 'flex', justifyContent: 'around', gap: '20px' }}>
                <div style={{ flex: 1, padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
                    <FaStore size={30} color="#dc3545" />
                    <h3>Top Vendors</h3>
                    <p>Find the best local gift shops.</p>
                </div>
                <div style={{ flex: 1, padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
                    <FaGift size={30} color="#dc3545" />
                    <h3>Customizable Boxes</h3>
                    <p>Pick items and design your box.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;