import React from 'react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    // Dashboard container with padding, font, background color, and minimum height to ensure it fills the viewport
    <div style={{ 
      padding: '40px', 
      fontFamily: "'Inter', sans-serif", 
      backgroundColor: '#d2e2f5', 
      minHeight: '100vh' 
    }}>
      
      {/* Title */}
      <h1 style={{ 
        fontSize: '36px', 
        fontWeight: '700', 
        color: '#010911', 
        marginBottom: '32px' 
      }}>
        Dashboard
      </h1>

      {/* Grid container for the square cards with gap and responsive wrapping */}
      <div className={styles.squareCard}>
          <div className={styles.cardStats}>
              <h2>Welcome back Mathew Anderson...!</h2>
          </div>
      </div>

    </div>
  );
};

export default Dashboard;