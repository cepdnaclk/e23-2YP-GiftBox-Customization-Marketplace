import React, { useState, useEffect } from 'react';
import { 
  FaUser, FaEnvelope, FaMapMarkerAlt, FaSearch, FaEllipsisV 
} from 'react-icons/fa';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // --- Fetch Data from Backend ---
  useEffect(() => {
    // Make sure your backend endpoint is correct
    fetch('http://localhost:8080/api/users') 
      .then(res => res.json())
      .then(data => {
        // Filter only 'CUSTOMER' role
        const customerData = data.filter(user => user.role === 'CUSTOMER');
        setCustomers(customerData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching customers:", err);
        setLoading(false);
      });
  }, []);

  // Filter based on Search
  const filteredCustomers = customers.filter(customer =>
    customer.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.pageContainer}>
      
      {/* --- HEADER SECTION --- */}
      <div style={styles.headerSection}>
        <div>
          <h1 style={styles.mainTitle}>Customers</h1>
        </div>
        
        {/* Modern Search Bar */}
        <div style={styles.searchWrapper}>
          <FaSearch style={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search customers..." 
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      {loading ? (
        <p style={{textAlign: 'center', color: '#64748b'}}>Loading customers...</p>
      ) : (
        <div style={styles.gridContainer}>
          {filteredCustomers.length === 0 ? (
            <p style={{colSpan: 3, textAlign: 'center', color: '#94a3b8'}}>No customers found.</p>
          ) : (
            filteredCustomers.map((customer) => (
              <div key={customer.user_id} style={styles.card}>
                
                {/* Top: Avatar & Menu */}
                <div style={styles.cardHeader}>
                  <div style={styles.avatar}>
                    <FaUser size={20} color="#4f46e5" />
                  </div>
                  <button style={styles.menuBtn}>
                    <FaEllipsisV color="#94a3b8" />
                  </button>
                </div>

                {/* Middle: User Info */}
                <div style={styles.cardBody}>
                  <h3 style={styles.userName}>{customer.username}</h3>
                  <div style={styles.roleBadge}>Customer</div>
                  
                  <div style={styles.infoRow}>
                    <FaEnvelope size={12} color="#94a3b8" />
                    <span style={styles.infoText}>{customer.email}</span>
                  </div>
                  
                  {/* Address (If available in your backend join) */}
                  <div style={styles.infoRow}>
                    <FaMapMarkerAlt size={12} color="#94a3b8" />
                    <span style={styles.infoText}>
                      {customer.address || "No Address Provided"}
                    </span>
                  </div>
                </div>

                {/* Bottom: Action Button */}
                <div style={styles.cardFooter}>
                  <button style={styles.viewBtn}>View Profile</button>
                </div>

              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

// --- STYLES OBJECT (CSS-in-JS) ---
const styles = {
  pageContainer: { 
    padding: '40px', 
    fontFamily: "'Inter', sans-serif", 
    backgroundColor: '#f0f7ff', 
    minHeight: '100vh' 
  },
  headerSection: { 
    display: 'flex', 
    justifyContent: 'flex-start', 
    gap: '20px',
    alignItems: 'center', 
    marginBottom: '40px' 
  },
  mainTitle: { 
    fontSize: '32px', 
    fontWeight: '800', 
    color: '#1e293b', 
    margin: 0 
  },
  subTitle: { 
    fontSize: '14px', 
    color: '#64748b', 
    marginTop: '5px' 
  },
  searchWrapper: { 
    position: 'relative', 
    width: '30%' 
  },
  searchIcon: { 
    position: 'absolute', 
    left: '15px', 
    top: '50%', 
    transform: 'translateY(-50%)', 
    color: '#94a3b8' 
  },
  searchInput: { 
    width: '100%', 
    padding: '12px 12px 12px 45px', 
    borderRadius: '12px', 
    border: '1px solid #e2e8f0', 
    outline: 'none', 
    fontSize: '14px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.02)' 
  },
  
  // Grid Layout for Cards
  gridContainer: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
    gap: '25px' 
  },
  
  // Card Styles
  card: { 
    backgroundColor: '#ffffff', 
    borderRadius: '20px', 
    padding: '25px', 
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)', 
    border: '1px solid #f1f5f9',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s',
    cursor: 'default'
  },
  cardHeader: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start',
    marginBottom: '15px'
  },
  avatar: { 
    width: '50px', 
    height: '50px', 
    borderRadius: '16px', 
    backgroundColor: '#eef2ff', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  menuBtn: { 
    background: 'transparent', 
    border: 'none', 
    cursor: 'pointer' 
  },
  cardBody: { 
    marginBottom: '20px' 
  },
  userName: { 
    fontSize: '18px', 
    fontWeight: '700', 
    color: '#334155', 
    margin: '0 0 5px 0' 
  },
  roleBadge: { 
    display: 'inline-block', 
    padding: '4px 10px', 
    borderRadius: '20px', 
    backgroundColor: '#f0fdf4', 
    color: '#16a34a', 
    fontSize: '11px', 
    fontWeight: '600',
    marginBottom: '15px'
  },
  infoRow: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '10px', 
    marginBottom: '8px' 
  },
  infoText: { 
    fontSize: '13px', 
    color: '#64748b' 
  },
  cardFooter: { 
    marginTop: 'auto', 
    borderTop: '1px solid #f1f5f9', 
    paddingTop: '15px' 
  },
  viewBtn: { 
    width: '100%', 
    padding: '10px', 
    borderRadius: '10px', 
    border: '1px solid #e2e8f0', 
    backgroundColor: 'transparent', 
    color: '#475569', 
    fontWeight: '600', 
    fontSize: '13px', 
    cursor: 'pointer',
    transition: 'background 0.2s'
  }
};

export default Customers;