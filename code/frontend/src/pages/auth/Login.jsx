import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Placeholder logic for your 2nd year project
        // Later, this will connect to Dineth's Spring Boot backend
        if (email === "admin@gift.com") {
            // If admin logs in, send to the Admin Dashboard
            navigate('/admin');
        } else {
            // If a customer logs in, keep them on the Home page or User Dashboard
            navigate('/');
        }
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