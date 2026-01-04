import React from 'react';
import { Newspaper } from 'lucide-react';
import Navbar from '../Navbar';

export default function NewsPage({ onNavigate, PAGES }) {
  const news = [
    { id: 1, title: 'GenZ Bank Launches AI Assistant', date: 'Oct 25, 2023', summary: 'Revolutionizing customer service with our new AI chatbot, GenZBank Chatbot.' },
    { id: 2, title: 'Q3 Financial Results Announced', date: 'Oct 15, 2023', summary: 'Record-breaking profits driven by digital adoption.' },
    { id: 3, title: 'Sustainability Initiative 2024', date: 'Sep 30, 2023', summary: 'Committing to zero-carbon operations by 2030.' },
  ];

  return (
    <div className="news-page middle-content-main">
      <Navbar onNavigate={onNavigate} PAGES={PAGES} />
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <h1 className="page-title">News & Media</h1>
        <p className="page-subtitle">Latest updates and press releases</p>
      </div>
      <div className="content-wrapper" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {news.map(item => (
            <div key={item.id} style={{ marginBottom: '20px', padding: '25px', background: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#007bff', fontWeight: '600' }}><Newspaper size={18} /> Press Release</div>
                    <span style={{ fontSize: '0.9rem', color: '#9ca3af' }}>{item.date}</span>
                </div>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1.25rem' }}>{item.title}</h3>
                <p style={{ color: '#4b5563', lineHeight: '1.5' }}>{item.summary}</p>
            </div>
        ))}
      </div>
    </div>
  );
}