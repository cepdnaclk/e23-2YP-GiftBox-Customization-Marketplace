import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaUserPlus } from 'react-icons/fa';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // ඉදිරියේදී මෙය Dineth හදන Java Backend එකේ /api/auth/register endpoint එකට සම්බන්ධ වේ
        console.log("Registering User:", formData);
        
        // සාර්ථකව register වුණාම ලොගින් පිටුවට යවමු
        alert("Registration Successful! Please login.");
        navigate('/login');
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <h2 style={styles.title}>Create Account</h2>
                <form onSubmit={handleRegister}>
                    <div style={styles.inputGroup}>
                        <FaUser style={styles.icon} />
                        <input type="text" name="name" placeholder="Full Name" style={styles.input} onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <FaEnvelope style={styles.icon} />
                        <input type="email" name="email" placeholder="Email Address" style={styles.input} onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <FaLock style={styles.icon} />
                        <input type="password" name="password" placeholder="Password" style={styles.input} onChange={handleChange} required />
                    </div>
                    <div style={styles.inputGroup}>
                        <FaLock style={styles.icon} />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" style={styles.input} onChange={handleChange} required />
                    </div>
                    <button type="submit" style={styles.button}>
                        <FaUserPlus style={{ marginRight: '10px' }} /> Register
                    </button>
                </form>
                <p style={{ textAlign: 'center', marginTop: '15px' }}>
                    Already have an account? <Link to="/login" style={{ color: '#ff4d6d' }}>Login here</Link>
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: { display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', background: '#f5f5f5' },
    box: { padding: '40px', background: '#fff', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', width: '380px' },
    title: { textAlign: 'center', marginBottom: '25px', color: '#333' },
    inputGroup: { display: 'flex', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid #ddd', paddingBottom: '5px' },
    icon: { color: '#888', marginRight: '10px' },
    input: { border: 'none', outline: 'none', width: '100%', fontSize: '16px' },
    button: { width: '100%', padding: '12px', background: '#ff4d6d', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }
};

export default Register;