import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaClock, FaArrowRight, FaMapMarkerAlt, FaUser, 
  FaEnvelope, FaPhone, FaCalendarCheck, FaChevronDown, FaChevronUp 
} from 'react-icons/fa';

/**
 * Partners Component
 * Mock Data Removed. Ready for Backend Integration.
 */
const Partners = () => {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState(null);

  // --- වෙනස්කම 1: Mock Data මැකුවා, හිස් State එකක් හැදුවා ---
  const [activeSellers, setActiveSellers] = useState([]); 
  
  // --- වෙනස්කම 2: Pending Count එකටත් State එකක් හැදුවා ---
  const [pendingCount, setPendingCount] = useState(0);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div style={pageContainer}>
      
      {/* --- HEADER SECTION --- */}
      <div style={headerSection}>
        <h1 style={mainTitle}>Partners</h1>

        <button onClick={() => navigate('/admin/partners/pending')} style={pendingActionBtn}>
          {/* --- වෙනස්කම 3: ස්ථිර අංකය (2) වෙනුවට variable එක දැම්මා --- */}
          <div style={notificationBadge}>{pendingCount}</div>
          
          <FaClock size={16} style={{ color: '#94a3b8' }} />
          <div style={btnTextWrapper}>
             <span style={btnLabel}>View Pending</span>
             <span style={btnLabel}>Requests</span>
          </div>
          <FaArrowRight size={12} style={{ color: '#ffffff', opacity: 0.8 }} />
        </button>
      </div>

      <h3 style={subTitle}>Active Partners</h3>

      {/* --- PARTNERS LIST SECTION --- */}
      <div style={cardListWrapper}>
        
        {/* --- වෙනස්කම 4: Data නැති වෙලාවට පොඩි මැසේජ් එකක් පෙන්වමු --- */}
        {activeSellers.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#94a3b8', marginTop: '20px' }}>
                No active partners found.
            </p>
        ) : (
            activeSellers.map((seller) => (
            <div key={seller.id} style={cardWrapperStyle(expandedId === seller.id)}>
                
                {/* Header portion */}
                <div onClick={() => toggleExpand(seller.id)} style={cardHeader}>
                <div style={{ flex: 1 }}>
                    <div style={shopNameText}>{seller.shop}</div>
                    <div style={cardMeta}>
                    <span style={metaItem}><FaUser size={12}/> {seller.name}</span>
                    <span style={metaItem}><FaMapMarkerAlt size={12}/> {seller.address}</span>
                    </div>
                </div>
                <div>
                    {expandedId === seller.id ? <FaChevronUp color="#94a3b8"/> : <FaChevronDown color="#94a3b8"/>}
                </div>
                </div>

                {/* Hidden details */}
                {expandedId === seller.id && (
                <div style={detailsSection}>
                    <div style={detailsGrid}>
                    <div style={infoBlock}>
                        <label style={infoLabel}>Email Address</label>
                        <div style={infoValue}><FaEnvelope style={{marginRight: '8px'}}/> {seller.email}</div>
                    </div>
                    <div style={infoBlock}>
                        <label style={infoLabel}>Phone Number</label>
                        <div style={infoValue}><FaPhone style={{marginRight: '8px'}}/> {seller.phone}</div>
                    </div>
                    <div style={infoBlock}>
                        <label style={infoLabel}>BR Number</label>
                        <div style={infoValue}>{seller.br_no}</div>
                    </div>
                    <div style={infoBlock}>
                        <label style={infoLabel}>Joined Date</label>
                        <div style={infoValue}><FaCalendarCheck style={{marginRight: '8px'}}/> {seller.joined}</div>
                    </div>
                    </div>
                    <div style={{ marginTop: '20px', textAlign: 'right' }}>
                    <button style={manageBtn}>Manage Shop</button>
                    </div>
                </div>
                )}
            </div>
            ))
        )}
      </div>
    </div>
  );
};

// --- STYLES (මේ ටිකේ වෙනසක් නෑ) ---
const pageContainer = { padding: '60px 40px', fontFamily: "'Inter', sans-serif", backgroundColor: '#f0f7ff', minHeight: '100vh' };
const headerSection = { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '15px', marginBottom: '40px' };
const mainTitle = { fontSize: '36px', fontWeight: '800', color: '#000000', margin: 0 };
const pendingActionBtn = { display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 24px', backgroundColor: '#1e293b', color: 'white', border: 'none', borderRadius: '16px', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' };
const notificationBadge = { background: '#ef4444', color: 'white', width: '24px', height: '24px', borderRadius: '50%', fontSize: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const btnTextWrapper = { display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: '1.1' };
const btnLabel = { fontSize: '13px', fontWeight: '600' };
const subTitle = { fontSize: '22px', fontWeight: '700', color: '#1e293b', marginBottom: '25px' };
const cardListWrapper = { display: 'flex', flexDirection: 'column', gap: '20px' };
const cardWrapperStyle = (isOpen) => ({ background: '#ffffff', borderRadius: '24px', border: isOpen ? '2px solid #4f46e5' : '1px solid transparent', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)', overflow: 'hidden', transition: '0.3s ease' });
const cardHeader = { padding: '30px', display: 'flex', alignItems: 'center', cursor: 'pointer' };
const shopNameText = { fontSize: '26px', fontWeight: '800', color: '#111827' };
const cardMeta = { display: 'flex', gap: '20px', marginTop: '10px', color: '#6b7280', fontSize: '15px' };
const metaItem = { display: 'flex', alignItems: 'center', gap: '8px' };
const detailsSection = { padding: '0 30px 30px 30px', borderTop: '1px solid #f3f4f6', backgroundColor: '#f9fafb' };
const detailsGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' };
const infoBlock = { display: 'flex', flexDirection: 'column', gap: '6px' };
const infoLabel = { fontSize: '11px', color: '#9ca3af', fontWeight: '800', textTransform: 'uppercase' };
const infoValue = { fontSize: '15px', color: '#374151', display: 'flex', alignItems: 'center' };
const manageBtn = { padding: '12px 24px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '10px', fontWeight: '700', cursor: 'pointer' };

export default Partners;