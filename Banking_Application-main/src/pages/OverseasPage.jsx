import React from 'react';
import { ArrowLeft, Globe, Plane } from 'lucide-react';

export default function OverseasPage({ onNavigate }) {
  return (
    <div className="page-container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button className="back-btn" onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a' }}>Overseas Operations</h1>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white', padding: '3rem', borderRadius: '20px', textAlign: 'center', marginBottom: '2rem' }}>
        <Globe size={64} style={{ marginBottom: '1rem', color: '#38bdf8' }} />
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Global Reach, Local Presence</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: '#94a3b8', fontSize: '1.1rem' }}>
          GenZ Bank operates in 12 countries, providing seamless cross-border financial services for expatriates and global businesses.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {['United Kingdom', 'Australia', 'UAE', 'Singapore', 'Canada', 'USA'].map((country, index) => (
          <div key={index} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ background: '#f0f9ff', padding: '10px', borderRadius: '50%', color: '#0284c7' }}>
              <Plane size={20} />
            </div>
            <span style={{ fontWeight: '600', color: '#334155' }}>{country}</span>
          </div>
        ))}
      </div>
    </div>
  );
}