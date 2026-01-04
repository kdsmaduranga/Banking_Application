import React, { useState } from 'react';
import { Zap, Droplet, Wifi, Phone, ArrowLeft } from 'lucide-react';
import './PayBills.css';

export default function PayBills({ onNavigate, PAGES }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 'elec', name: 'Electricity', icon: <Zap /> },
    { id: 'water', name: 'Water', icon: <Droplet /> },
    { id: 'internet', name: 'Internet', icon: <Wifi /> },
    { id: 'mobile', name: 'Mobile', icon: <Phone /> },
  ];

  return (
    <div className="pay-bills-page middle-content-main">
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <button className="back-btn" onClick={() => onNavigate(PAGES.DASHBOARD)}>
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="page-title">Pay Bills</h1>
        <p className="page-subtitle">Settle your utility payments instantly</p>
      </div>

      <div className="content-wrapper" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="bill-categories">
        {categories.map(cat => (
          <button 
            key={cat.id} 
            className={`cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.icon}
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {selectedCategory && (
        <form className="bill-form fade-in">
          <h3>Pay {categories.find(c => c.id === selectedCategory).name} Bill</h3>
          
          <div className="form-group">
            <label>Account / Reference Number</label>
            <input type="text" placeholder="Enter reference number" required />
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input type="number" placeholder="0.00" required />
          </div>

          <button type="button" className="action-btn-primary" onClick={() => {
             alert("Bill Payment Successful!");
             onNavigate(PAGES.DASHBOARD);
          }}>
            Pay Now
          </button>
        </form>
      )}
      </div>
    </div>
  );
}