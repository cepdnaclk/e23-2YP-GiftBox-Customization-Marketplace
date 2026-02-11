import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBoxOpen, FaHeart, FaUserCog, FaSignOutAlt } from 'react-icons/fa';

const UserDashboard = () => {
    const navigate = useNavigate();
    // Retrieve the user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    // If no user is found, redirect them to login
    if (!user) {
        navigate('/login');
        return null;
    }

    const handleLogout = () => {
        localStorage.removeItem('user'); // Clear the session
        navigate('/');
        window.location.reload(); // Refresh to update UI
    };

    return (
        <div style={styles.container}>
            <aside style={styles.sidebar}>
                <h2 style={styles.logo}>My Gifttore</h2>
                <nav style={styles.nav}>
                    <div style={styles.navItem}><FaBoxOpen /> My Orders</div>
                    <div style={styles.navItem}><FaHeart /> Wishlist</div>
                    <div style={styles.navItem}><FaUserCog /> Settings</div>
                </nav>
                <button onClick={handleLogout} style={styles.logoutBtn}>
                    <FaSignOutAlt /> Logout
                </button>
            </aside>

            <main style={styles.mainContent}>
                <header style={styles.header}>
                    <h1>Hello, {user.name}! 👋</h1>
                    <p>Welcome to your personalized gift dashboard.</p>
                </header>

                <section style={styles.statsGrid}>
                    <div style={styles.statCard}>
                        <h3>Recent Orders</h3>
                        <p>You have 0 active orders.</p>
                    </div>
                    <div style={styles.statCard}>
                        <h3>Custom Boxes</h3>
                        <p>Start creating your unique gift box.</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

// CSS styles for a clean layout
const styles = {
    container: { display: 'flex', height: '100vh', background: '#f9f9f9' },
    sidebar: { width: '250px', background: '#333', color: '#fff', padding: '20px', display: 'flex', flexDirection: 'column' },
    logo: { color: '#ff4d6d', marginBottom: '40px', textAlign: 'center' },
    nav: { flex: 1 },
    navItem: { padding: '15px 0', borderBottom: '1px solid #444', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' },
    logoutBtn: { background: '#ff4d6d', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' },
    mainContent: { flex: 1, padding: '40px' },
    header: { marginBottom: '30px' },
    statsGrid: { display: 'flex', gap: '20px' },
    statCard: { flex: 1, background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }
};

export default UserDashboard;