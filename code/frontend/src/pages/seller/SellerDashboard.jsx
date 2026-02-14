import React, { useState } from 'react';
import SellerSidebar from '../../components/seller/SellerSidebar';

const SellerDashboard = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Personalized Mug', price: 1500, status: 'Order Placed' },
  ]);

  const [newItem, setNewItem] = useState({ name: '', price: '' });

  const handleAddItem = (e) => {
    e.preventDefault();
    setItems([...items, { ...newItem, id: Date.now(), status: 'Order Placed' }]);
    setNewItem({ name: '', price: '' });
    alert("Item added successfully!");
  };

  const handleStatusUpdate = (orderId) => {
    alert("Status Updated: Item Dispatched by Vendor");
  };

  return (
    // Main background matching the light blue admin theme
    <div style={{ display: 'flex', background: '#f4f7fe', minHeight: '100vh' }}>
      <SellerSidebar />
      
      {/* Content offset by sidebar width */}
      <div style={{ flex: 1, padding: '30px', marginLeft: '260px' }}>
        <h1 style={{ color: '#1a1f2b', marginBottom: '25px', fontSize: '1.8rem' }}>Vendor Management Portal</h1>

        [cite_start]{/* Add New Item Section [cite: 16, 23] */}
        <div style={{ background: 'white', padding: '25px', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#1a1f2b', marginTop: 0, marginBottom: '20px' }}>Add New Item</h3>
          <form onSubmit={handleAddItem} style={{ display: 'flex', gap: '15px' }}>
            <input 
              type="text" 
              placeholder="Item Name" 
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e0e6ed', flex: 1 }}
              value={newItem.name}
              onChange={(e) => setNewItem({...newItem, name: e.target.value})}
              required 
            />
            <input 
              type="number" 
              placeholder="Price (LKR)" 
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e0e6ed', width: '180px' }}
              value={newItem.price}
              onChange={(e) => setNewItem({...newItem, price: e.target.value})}
              required 
            />
            <button type="submit" style={{ padding: '12px 25px', cursor: 'pointer', background: '#2ecc71', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
              Add Item
            </button>
          </form>
        </div>

        [cite_start]{/* Pending Orders Section [cite: 24, 47, 51] */}
        <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#1a1f2b', marginTop: 0, marginBottom: '20px' }}>Pending Orders & Inventory</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#1a1f2b', color: '#f0f7ff' }}> {/* Dark header matching sidebar */}
                <th style={{ padding: '15px', borderRadius: '8px 0 0 0' }}>Item Details</th>
                <th style={{ padding: '15px' }}>Status</th>
                <th style={{ padding: '15px', borderRadius: '0 8px 0 0' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id} style={{ borderBottom: '1px solid #f0f2f5' }}>
                  <td style={{ padding: '15px', color: '#4a5568' }}>{item.name} - LKR {item.price}</td>
                  <td style={{ padding: '15px' }}>
                    <span style={{ background: '#fff4e5', color: '#d48344', padding: '5px 12px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '500' }}>
                      {item.status}
                    </span>
                  </td>
                  <td style={{ padding: '15px' }}>
                    <button 
                      onClick={() => handleStatusUpdate(item.id)}
                      style={{ padding: '8px 16px', cursor: 'pointer', background: 'white', border: '1px solid #e0e6ed', borderRadius: '8px', fontSize: '0.85rem' }}
                    >
                      Mark as Dispatched
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;