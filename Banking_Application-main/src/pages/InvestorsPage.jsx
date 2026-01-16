import React from 'react';
import { ArrowLeft, TrendingUp, FileText, PieChart } from 'lucide-react';

export default function InvestorsPage({ onNavigate }) {
  return (
    <div className="page-container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button className="back-btn" onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a' }}>Investor Relations</h1>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)', color: 'white', padding: '2rem', borderRadius: '16px' }}>
          <TrendingUp size={40} style={{ marginBottom: '1rem' }} />
          <h2 style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0' }}>+24%</h2>
          <p style={{ opacity: 0.9 }}>Year-over-Year Growth</p>
        </div>

        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FileText /> Financial Reports</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #f3f4f6', cursor: 'pointer', color: '#2563eb' }}>Annual Report 2023</li>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #f3f4f6', cursor: 'pointer', color: '#2563eb' }}>Q3 2024 Interim Financials</li>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #f3f4f6', cursor: 'pointer', color: '#2563eb' }}>Sustainability Report</li>
          </ul>
        </div>
      </div>
    </div>
  );
}