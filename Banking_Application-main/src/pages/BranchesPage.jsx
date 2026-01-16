import React from 'react';
import { ArrowLeft, MapPin, Phone } from 'lucide-react';

export default function BranchesPage({ onNavigate }) {
  const branches = [
    { name: 'Head Office - Colombo', address: '123 Financial District, Colombo 01', phone: '+94 11 234 5678' },
    { name: 'Kandy Branch', address: '45 Dalada Veediya, Kandy', phone: '+94 81 234 5678' },
    { name: 'Galle Branch', address: '89 Galle Road, Galle', phone: '+94 91 234 5678' },
    { name: 'Jaffna Branch', address: '12 Hospital Road, Jaffna', phone: '+94 21 234 5678' },
  ];

  return (
    <div className="page-container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button className="back-btn" onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a' }}>Branches & ATMs</h1>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {branches.map((branch, index) => (
          <div key={index} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ background: '#eff6ff', padding: '8px', borderRadius: '50%', color: '#2563eb' }}>
                <MapPin size={20} />
              </div>
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#1f2937' }}>{branch.name}</h3>
            </div>
            <p style={{ color: '#6b7280', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{branch.address}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4b5563', fontSize: '0.9rem' }}>
              <Phone size={16} />
              <span>{branch.phone}</span>
            </div>
            <button style={{ marginTop: '1rem', width: '100%', padding: '0.5rem', background: 'none', border: '1px solid #2563eb', color: '#2563eb', borderRadius: '6px', cursor: 'pointer' }}>Get Directions</button>
          </div>
        ))}
      </div>
    </div>
  );
}