import React from 'react';
import { MapPin } from 'lucide-react';
import Navbar from '../Navbar';

export default function BranchesPage({ onNavigate, PAGES }) {
  const branches = [
    { id: 1, name: 'Head Office', address: '123 Finance Drive, Colombo 01', type: 'Branch & ATM' },
    { id: 2, name: 'Kandy City Center', address: '45 Hill Street, Kandy', type: 'Branch' },
    { id: 3, name: 'Galle Fort', address: '88 Church Street, Galle', type: 'ATM Only' },
    { id: 4, name: 'Negombo Main', address: '12 Beach Road, Negombo', type: 'Branch & ATM' },
  ];

  return (
    <div className="branches-page middle-content-main">
      <Navbar onNavigate={onNavigate} PAGES={PAGES} />
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <h1 className="page-title">Branches & ATMs</h1>
        <p className="page-subtitle">Find a location near you</p>
      </div>
      <div className="content-wrapper" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: '20px' }}>
          {branches.map(branch => (
            <div key={branch.id} style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '12px', background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <MapPin color="#007bff" />
                <h3 style={{ margin: 0 }}>{branch.name}</h3>
              </div>
              <p style={{ color: '#6b7280', margin: '0 0 10px 0' }}>{branch.address}</p>
              <span style={{ background: '#dbeafe', color: '#1e40af', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>{branch.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}