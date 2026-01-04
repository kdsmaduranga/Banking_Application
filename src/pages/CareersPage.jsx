import React from 'react';
import { Users } from 'lucide-react';
import Navbar from '../Navbar';

export default function CareersPage({ onNavigate, PAGES }) {
  return (
    <div className="careers-page middle-content-main">
      <Navbar onNavigate={onNavigate} PAGES={PAGES} />
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <h1 className="page-title">Careers at GenZ</h1>
        <p className="page-subtitle">Join our growing team</p>
      </div>
      <div className="content-wrapper" style={{ padding: '20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ padding: '40px 20px', background: 'linear-gradient(to right, #eff6ff, #ffffff)', borderRadius: '20px', marginBottom: '40px' }}>
            <Users size={64} color="#007bff" style={{ marginBottom: '20px' }} />
            <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Join Our Team</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: '#4b5563', fontSize: '1.1rem' }}>We are looking for innovators, thinkers, and doers to help us shape the future of banking.</p>
        </div>
        
        <div style={{ textAlign: 'left' }}>
            <h3 style={{ borderBottom: '2px solid #e5e7eb', paddingBottom: '15px', marginBottom: '20px' }}>Open Positions</h3>
            <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '12px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white' }}>
                <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Senior React Developer</h4>
                    <p style={{ margin: '5px 0', color: '#6b7280' }}>Remote / Colombo</p>
                </div>
                <button style={{ background: '#007bff', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>Apply Now</button>
            </div>
            <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '12px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white' }}>
                <div>
                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Financial Analyst</h4>
                    <p style={{ margin: '5px 0', color: '#6b7280' }}>Colombo HQ</p>
                </div>
                <button style={{ background: '#007bff', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>Apply Now</button>
            </div>
        </div>
      </div>
    </div>
  );
}