import React from 'react';
import { TrendingUp, Clock, ShieldCheck, ArrowLeft } from 'lucide-react';

export default function TermDepositsPage({ onNavigate }) {
  return (
    <div className="middle-content-main">
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <button className="back-btn" onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', marginBottom: '1rem', fontSize: '1rem' }}>
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="page-title">Fixed Deposits</h1>
        <p className="page-subtitle">Secure your future with high returns</p>
      </div>
      <div className="content-wrapper" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)', color: 'white', padding: '40px', borderRadius: '16px', marginBottom: '30px', textAlign: 'center' }}>
          <TrendingUp size={48} style={{ marginBottom: '15px' }} />
          <h2 style={{ margin: '0 0 10px 0', fontSize: '2rem' }}>Up to 14% p.a.</h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Secure your future with our high-yield fixed deposits.</p>
          <button style={{ marginTop: '20px', padding: '10px 24px', background: 'white', color: '#0056b3', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => onNavigate('rates')}>View All Rates</button>
        </div>

        <div style={{ display: 'grid', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '15px', padding: '20px', background: 'white', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <Clock className="text-primary" size={24} color="#007bff" />
            <div>
              <h3 style={{ margin: '0 0 5px 0' }}>Flexible Tenures</h3>
              <p style={{ margin: 0, color: '#6b7280' }}>Choose from 1 month to 5 years investment plans.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '15px', padding: '20px', background: 'white', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
            <ShieldCheck className="text-primary" size={24} color="#007bff" />
            <div>
              <h3 style={{ margin: '0 0 5px 0' }}>Guaranteed Returns</h3>
              <p style={{ margin: 0, color: '#6b7280' }}>Lock in your interest rate for the entire duration.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}