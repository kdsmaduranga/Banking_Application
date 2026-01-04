import React from 'react';
import { Globe } from 'lucide-react';
import Navbar from '../Navbar';

export default function OverseasPage({ onNavigate, PAGES }) {
  return (
    <div className="overseas-page middle-content-main">
      <Navbar onNavigate={onNavigate} PAGES={PAGES} />
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <h1 className="page-title">Overseas Operations</h1>
        <p className="page-subtitle">Global banking services</p>
      </div>
      <div className="content-wrapper" style={{ padding: '20px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ padding: '40px', background: '#f0f9ff', borderRadius: '20px', marginBottom: '40px' }}>
            <Globe size={64} color="#007bff" style={{ marginBottom: '20px' }} />
            <h2 style={{ marginBottom: '10px' }}>Global Presence</h2>
            <p style={{ color: '#4b5563', fontSize: '1.1rem' }}>GenZ Bank operates in key financial hubs around the world to serve you better.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {['Maldives', 'Bangladesh', 'Myanmar', 'United Kingdom', 'Singapore', 'UAE'].map(country => (
                <div key={country} style={{ padding: '25px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ margin: '0 0 5px 0', color: '#1f2937' }}>{country}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: 0 }}>Full Banking Services</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}