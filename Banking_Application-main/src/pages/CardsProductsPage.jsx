import React from 'react';
import { CreditCard, Globe, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CardsProductsPage({ onNavigate }) {
  const cards = [
    { title: 'GenZ Platinum Credit', icon: <CreditCard />, desc: 'Exclusive rewards and travel benefits.', fee: 'LKR 2,500 / yr' },
    { title: 'Global Travel Card', icon: <Globe />, desc: 'Multi-currency support with zero FX fees.', fee: 'LKR 1,000 / yr' },
    { title: 'Shopper Debit', icon: <ShoppingBag />, desc: 'Cashback on daily essentials and groceries.', fee: 'Free' },
  ];

  return (
    <div className="middle-content-main">
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <button className="back-btn" onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', marginBottom: '1rem', fontSize: '1rem' }}>
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="page-title">Credit & Debit Cards</h1>
        <p className="page-subtitle">Choose the card that fits your lifestyle</p>
      </div>
      <div className="content-wrapper" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {cards.map((card, idx) => (
            <div key={idx} style={{ padding: '25px', border: '1px solid #e5e7eb', borderRadius: '12px', background: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
                <div style={{ color: '#007bff' }}>{React.cloneElement(card.icon, { size: 32 })}</div>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#6b7280', background: '#f3f4f6', padding: '4px 8px', borderRadius: '4px' }}>{card.fee}</span>
              </div>
              <h3 style={{ margin: '0 0 10px 0' }}>{card.title}</h3>
              <p style={{ color: '#6b7280', marginBottom: '20px' }}>{card.desc}</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ flex: 1, padding: '8px', background: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }} onClick={() => onNavigate('applications')}>Apply</button>
                <button style={{ flex: 1, padding: '8px', background: 'white', color: '#007bff', border: '1px solid #007bff', borderRadius: '6px', cursor: 'pointer' }}>Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}