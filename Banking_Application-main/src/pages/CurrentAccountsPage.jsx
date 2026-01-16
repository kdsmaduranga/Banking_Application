import React from 'react';
import { Briefcase, CheckCircle, ArrowLeft } from 'lucide-react';

export default function CurrentAccountsPage({ onNavigate }) {
  return (
    <div className="middle-content-main">
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <button className="back-btn" onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', marginBottom: '1rem', fontSize: '1rem' }}>
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="page-title">Current Accounts</h1>
        <p className="page-subtitle">Manage your daily finances</p>
      </div>
      <div className="content-wrapper" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ padding: '30px', background: 'white', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <div style={{ padding: '12px', background: '#dbeafe', borderRadius: '12px', color: '#1e40af' }}><Briefcase size={32} /></div>
            <div>
              <h2 style={{ margin: 0 }}>GenZ Business Current</h2>
              <p style={{ margin: '5px 0 0 0', color: '#6b7280' }}>The perfect partner for your daily transactions.</p>
            </div>
          </div>
          
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 25px 0' }}>
            {['Unlimited transactions', 'Free cheque book (first 50 leaves)', 'Overdraft facility available', 'Real-time internet banking'].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#374151' }}><CheckCircle size={16} color="#10b981" /> {item}</li>
            ))}
          </ul>
          <button style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }} onClick={() => onNavigate('createAccount')}>Open Account</button>
        </div>
      </div>
    </div>
  );
}