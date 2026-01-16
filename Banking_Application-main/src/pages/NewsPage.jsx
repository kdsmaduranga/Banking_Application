import React from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';

export default function NewsPage({ onNavigate }) {
  const news = [
    { title: 'GenZ Bank Launches AI-Powered Savings Assistant', date: 'Oct 15, 2024', summary: 'Our new feature helps customers save up to 20% more annually through intelligent budgeting.' },
    { title: 'Expansion into Southeast Asia', date: 'Sep 22, 2024', summary: 'We are proud to announce new operational hubs in Singapore and Jakarta.' },
    { title: 'Sustainability Goals 2030', date: 'Aug 10, 2024', summary: 'Committing to net-zero carbon emissions across all our data centers and branches.' },
  ];

  return (
    <div className="page-container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button className="back-btn" onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a' }}>Latest News</h1>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {news.map((item, index) => (
          <div key={index} style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
              <Calendar size={14} />
              <span>{item.date}</span>
            </div>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#111827' }}>{item.title}</h3>
            <p style={{ color: '#4b5563', lineHeight: '1.5' }}>{item.summary}</p>
            <button style={{ marginTop: '1rem', background: 'none', border: 'none', color: '#2563eb', fontWeight: '600', cursor: 'pointer', padding: 0 }}>Read Full Story &rarr;</button>
          </div>
        ))}
      </div>
    </div>
  );
}