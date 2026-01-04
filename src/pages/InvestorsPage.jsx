import React from 'react';
import { TrendingUp, FileText, PieChart } from 'lucide-react';
import Navbar from '../Navbar';

export default function InvestorsPage({ onNavigate, PAGES }) {
  return (
    <div className="investors-page middle-content-main">
      <Navbar onNavigate={onNavigate} PAGES={PAGES} />
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <h1 className="page-title">Investor Relations</h1>
        <p className="page-subtitle">Financial performance and reports</p>
      </div>
      <div className="content-wrapper" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', padding: '40px', background: '#f8fafc', borderRadius: '16px' }}>
          <TrendingUp size={48} color="#007bff" style={{ marginBottom: '15px' }} />
          <h2 style={{ margin: '0 0 10px 0' }}>Financial Performance</h2>
          <p style={{ color: '#64748b' }}>Consistent growth and value creation for our shareholders.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '12px', background: 'white', textAlign: 'center' }}>
                <FileText size={32} color="#475569" style={{ marginBottom: '10px' }} />
                <h3>Annual Report 2023</h3>
                <button style={{ marginTop: '10px', color: '#007bff', background: 'none', border: '1px solid #007bff', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer' }}>Download PDF</button>
            </div>
            <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '12px', background: 'white', textAlign: 'center' }}>
                <PieChart size={32} color="#475569" style={{ marginBottom: '10px' }} />
                <h3>Quarterly Earnings</h3>
                <button style={{ marginTop: '10px', color: '#007bff', background: 'none', border: '1px solid #007bff', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer' }}>View Results</button>
            </div>
        </div>
      </div>
    </div>
  );
}