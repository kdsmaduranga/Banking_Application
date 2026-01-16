import React from 'react';
import { ArrowLeft, Award, History, Users } from 'lucide-react';

export default function AboutUsPage({ onNavigate }) {
  return (
    <div className="page-container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button className="back-btn" onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a' }}>About GenZ Bank</h1>
      </header>

      <div className="content-grid" style={{ display: 'grid', gap: '2rem' }}>
        <section style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2563eb' }}><History /> Our Story</h2>
          <p style={{ lineHeight: '1.6', color: '#4b5563', marginTop: '1rem' }}>
            Founded in 2024, GenZ Bank was built with a singular mission: to revolutionize banking for the digital native generation. 
            We believe in transparency, speed, and technology-driven financial freedom.
          </p>
        </section>

        <section style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2563eb' }}><Award /> Our Mission</h2>
          <p style={{ lineHeight: '1.6', color: '#4b5563', marginTop: '1rem' }}>
            To empower individuals and businesses with intuitive, secure, and intelligent financial tools that adapt to their lifestyle.
          </p>
        </section>

        <section style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2563eb' }}><Users /> Leadership</h2>
          <p style={{ lineHeight: '1.6', color: '#4b5563', marginTop: '1rem' }}>
            Led by a diverse team of fintech veterans and young innovators, we bridge the gap between traditional banking security and modern agility.
          </p>
        </section>
      </div>
    </div>
  );
}