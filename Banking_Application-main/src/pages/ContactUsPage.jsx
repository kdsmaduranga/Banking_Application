import React from 'react';
import { ArrowLeft, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function ContactUsPage({ onNavigate }) {
  return (
    <div className="page-container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button className="back-btn" onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a' }}>Contact Us</h1>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Get in Touch</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: '#eff6ff', padding: '10px', borderRadius: '50%', color: '#2563eb' }}><Phone /></div>
              <div><p style={{ margin: 0, fontWeight: '600' }}>Hotline</p><p style={{ margin: 0, color: '#6b7280' }}>+94 11 234 5678</p></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: '#eff6ff', padding: '10px', borderRadius: '50%', color: '#2563eb' }}><Mail /></div>
              <div><p style={{ margin: 0, fontWeight: '600' }}>Email</p><p style={{ margin: 0, color: '#6b7280' }}>support@genzbank.com</p></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: '#eff6ff', padding: '10px', borderRadius: '50%', color: '#2563eb' }}><MapPin /></div>
              <div><p style={{ margin: 0, fontWeight: '600' }}>Head Office</p><p style={{ margin: 0, color: '#6b7280' }}>123 Financial District, Colombo</p></div>
            </div>
          </div>
        </div>

        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ marginBottom: '1rem' }}>Send a Message</h2>
          <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '12px', marginBottom: '1rem', border: '1px solid #d1d5db', borderRadius: '8px' }} />
          <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '12px', marginBottom: '1rem', border: '1px solid #d1d5db', borderRadius: '8px' }} />
          <textarea placeholder="How can we help?" rows="4" style={{ width: '100%', padding: '12px', marginBottom: '1rem', border: '1px solid #d1d5db', borderRadius: '8px' }}></textarea>
          <button style={{ width: '100%', padding: '12px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Send Message</button>
        </div>
      </div>
    </div>
  );
}