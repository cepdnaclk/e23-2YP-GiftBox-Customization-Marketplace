import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaTimes, FaMapMarkerAlt, FaUser, FaPhone } from 'react-icons/fa';

const PendingPartners = () => {
  const navigate = useNavigate();
  const [pendingSellers, setPendingSellers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/partners')
      .then(res => res.json())
      .then(data => {
        // PENDING අය විතරක් තෝරාගැනීම
        const pending = data
          .filter(p => p.status === 'PENDING')
          .map(p => ({
            id: p.partner_id,
            shop: p.shop_name,
            name: p.full_name,
            address: p.shop_address,
            phone: p.phone_number,
            br_no: p.verification_id
          }));
        setPendingSellers(pending);
      })
      .catch(err => console.log("Error:", err));
  }, []);

  return (
    <div style={pageContainer}>
      {/* HEADER with Back Button */}
      <div style={headerSection}>
        <button onClick={() => navigate(-1)} style={backBtn}>
          <FaArrowLeft /> Back to Partners
        </button>
        <h1 style={mainTitle}>Pending Requests</h1>
      </div>

      <div style={cardListWrapper}>
        {pendingSellers.length === 0 ? (
          <p style={{textAlign:'center', color:'#666'}}>No pending requests.</p>
        ) : (
          pendingSellers.map((seller) => (
            <div key={seller.id} style={cardWrapper}>
              <div style={cardContent}>
                <div>
                  <h2 style={shopName}>{seller.shop}</h2>
                  <div style={metaGrid}>
                    <span><FaUser /> {seller.name}</span>
                    <span><FaPhone /> {seller.phone}</span>
                    <span><FaMapMarkerAlt /> {seller.address}</span>
                    <span style={{fontWeight:'bold'}}>BR: {seller.br_no}</span>
                  </div>
                </div>
                {/* Approve / Reject Buttons */}
                <div style={actionButtons}>
                  <button style={approveBtn}><FaCheck /> Approve</button>
                  <button style={rejectBtn}><FaTimes /> Reject</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// --- Styles ---
const pageContainer = { padding: '60px 40px', backgroundColor: '#f0f7ff', minHeight: '100vh', fontFamily: "'Inter', sans-serif" };
const headerSection = { marginBottom: '30px' };
const backBtn = { display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: '#4f46e5', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px' };
const mainTitle = { fontSize: '32px', fontWeight: '800', color: '#1e293b' };
const cardListWrapper = { display: 'flex', flexDirection: 'column', gap: '20px' };
const cardWrapper = { background: '#fff', borderRadius: '16px', padding: '25px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' };
const cardContent = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const shopName = { margin: '0 0 10px 0', fontSize: '20px', fontWeight: 'bold' };
const metaGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', color: '#64748b', fontSize: '14px' };
const actionButtons = { display: 'flex', gap: '10px' };
const approveBtn = { display: 'flex', gap: '5px', alignItems: 'center', padding: '10px 20px', backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' };
const rejectBtn = { display: 'flex', gap: '5px', alignItems: 'center', padding: '10px 20px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' };

export default PendingPartners;