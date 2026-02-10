import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaTimes, FaMapMarkerAlt, FaUser, FaPhone } from 'react-icons/fa';

const PendingPartners = () => {
  const navigate = useNavigate();
  const [pendingSellers, setPendingSellers] = useState([]);

  useEffect(() => {
    // 1. Fetch all partners
    fetch('http://localhost:8080/api/partners')
      .then(res => res.json())
      .then(data => {
        // 2. Filter for PENDING status
        const pending = data
          .filter(p => p.status === 'PENDING')
          .map(p => ({
            id: p.partnerId,        
            shop: p.shopName,       
            name: p.fullName,       
            address: p.shopAddress, 
            phone: p.phoneNumber,   
            br_no: p.brNo           
          }));
        setPendingSellers(pending);
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  // 3. Handle Status Update (Approve/Reject)
  const handleStatusUpdate = (id, newStatus) => {
    // Send PUT request to Backend
    fetch(`http://localhost:8080/api/partners/${id}/status?status=${newStatus}`, {
      method: 'PUT',
    })
    .then(response => {
      if (response.ok) {
        // Remove from UI if successful
        setPendingSellers(pendingSellers.filter(seller => seller.id !== id));
        console.log("Database updated successfully!");
      } else {
        alert("Failed to update status.");
      }
    })
    .catch(error => {
      console.error("Error connecting to backend:", error);
      alert("Error connecting to server.");
    });
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.headerSection}>
        <button onClick={() => navigate(-1)} style={styles.backBtn}>
          <FaArrowLeft /> Back to Partners
        </button>
        <h1 style={styles.mainTitle}>Pending Requests</h1>
      </div>

      <div style={styles.cardListWrapper}>
        {pendingSellers.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666' }}>No pending requests found.</p>
        ) : (
          pendingSellers.map((seller) => (
            <div key={seller.id} style={styles.cardWrapper}>
              <div style={styles.cardContent}>
                <div>
                  <h2 style={styles.shopName}>{seller.shop}</h2>
                  <div style={styles.metaGrid}>
                    <span><FaUser /> {seller.name}</span>
                    <span><FaPhone /> {seller.phone}</span>
                    <span><FaMapMarkerAlt /> {seller.address}</span>
                    <span style={{ fontWeight: 'bold' }}>BR No: {seller.br_no}</span>
                  </div>
                </div>
                
                <div style={styles.actionButtons}>
                  <button 
                    style={styles.approveBtn} 
                    onClick={() => handleStatusUpdate(seller.id, 'ACTIVE')}
                  >
                    <FaCheck /> Approve
                  </button>
                  
                  <button 
                    style={styles.rejectBtn} 
                    onClick={() => handleStatusUpdate(seller.id, 'REJECTED')}
                  >
                    <FaTimes /> Reject
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Styles
const styles = {
  pageContainer: { padding: '60px 40px', backgroundColor: '#f0f7ff', minHeight: '100vh', fontFamily: "'Inter', sans-serif" },
  headerSection: { marginBottom: '30px' },
  backBtn: { display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: '#4f46e5', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px' },
  mainTitle: { fontSize: '32px', fontWeight: '800', color: '#1e293b' },
  cardListWrapper: { display: 'flex', flexDirection: 'column', gap: '20px' },
  cardWrapper: { background: '#fff', borderRadius: '16px', padding: '25px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' },
  cardContent: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  shopName: { margin: '0 0 10px 0', fontSize: '20px', fontWeight: 'bold' },
  metaGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', color: '#64748b', fontSize: '14px' },
  actionButtons: { display: 'flex', gap: '10px' },
  approveBtn: { display: 'flex', gap: '5px', alignItems: 'center', padding: '10px 20px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' },
  rejectBtn: { display: 'flex', gap: '5px', alignItems: 'center', padding: '10px 20px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }
};

export default PendingPartners;