import React from 'react';
import { Home } from 'lucide-react';

export default function Navbar({ onNavigate, PAGES }) {
  return (
    <nav style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '16px 24px', 
      backgroundColor: '#ffffff', 
      borderBottom: '1px solid #e5e7eb' 
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#1e40af' }}>GenZBank</div>
      <button 
        onClick={() => onNavigate(PAGES.HOME)} 
        style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#4b5563', fontSize: '16px' }}
      >
        <Home size={20} /> Home
      </button>
    </nav>
  );
}