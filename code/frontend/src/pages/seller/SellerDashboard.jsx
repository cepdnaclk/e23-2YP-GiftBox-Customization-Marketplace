import React, { useState } from 'react';

const SellerDashboard = () => {
 // Sample data for items listed by the seller
  const [items] = useState([
    { id: 1, name: 'Gift Ribbon Set', price: 450, category: 'Decoration' },
    { id: 2, name: 'Wooden Box Small', price: 1200, category: 'Packaging' }
  ]);

  // Function to handle status update for an order
  const handleStatusUpdate = (orderId) => {
    console.log(`Order ${orderId} marked as Dispatched`);
    alert("Item status updated to: Item Dispatched by Vendor");
  };

  return (
    <div className="seller-container" style={{ padding: '20px' }}>
      <h2>Vendor Management Portal</h2>
      
      <section>
        <h3>Your Listed Items</h3>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} - LKR {item.price} ({item.category})
            </li>
          ))}
        </ul>
      </section>

      <hr />

      <section>
        <h3>Pending Orders</h3>
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
          <p>Order ID: #7890</p>
          <p>Status: Order Placed</p>
          
          <button onClick={() => handleStatusUpdate(7890)}>
            Mark as Dispatched
          </button>
        </div>
      </section>
    </div>
  );
};

export default SellerDashboard;