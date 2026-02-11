import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
    // Prevent the default form submission behavior (stops the page from refreshing immediately)
    e.preventDefault();

    // 1. Check if the user is an Admin
    if (email === "admin@gift.com") {
        // Save Admin data in the browser's storage (localStorage) so the app remembers who is logged in
        localStorage.setItem('user', JSON.stringify({ name: "Admin", role: "admin" }));
        
        // Redirect the admin to the Admin Dashboard (Dineth's part)
        navigate('/admin');
    } else {
        // 2. If a Customer logs in (e.g., seni@gift.com)
        // Extract a name from the email (everything before the '@' sign)
        const customerName = email.split('@')[0];

        // Save Customer data in the browser's storage
        localStorage.setItem('user', JSON.stringify({ name: customerName, role: "customer" }));
        
        // Redirect the customer back to the main Home page
        navigate('/user-dashboard');
    }

    // 3. Force a page reload so that other components (like your Home page) 
    // can detect the new user data from localStorage immediately
    window.location.reload(); 
};

    return (
        <div style={styles.container}>
            <div style={styles.loginBox}>
                <h2 style={styles.title}>Login to Gifttore</h2>
                <form onSubmit={handleLogin}>
                    <div style={styles.inputGroup}>
                        <FaEnvelope style={styles.icon} />
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            style={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <FaLock style={styles.icon} />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            style={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    <button type="submit" style={styles.button}>
                        <FaSignInAlt style={{ marginRight: '10px' }} /> Login
                    </button>
                </form>
            </div>
        </div>
    );
};

// Simple inline styles for now
const styles = {
    container: { display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', background: '#f5f5f5' },
    loginBox: { padding: '40px', background: '#fff', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', width: '350px' },
    title: { textAlign: 'center', marginBottom: '30px', color: '#333' },
    inputGroup: { display: 'flex', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '5px' },
    icon: { color: '#888', marginRight: '10px' },
    input: { border: 'none', outline: 'none', width: '100%', fontSize: '16px' },
    button: { width: '100%', padding: '12px', background: '#ff4d6d', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }
};

export default Login;