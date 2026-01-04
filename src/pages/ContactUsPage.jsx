import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '../Navbar';

export default function ContactUsPage({ onNavigate, PAGES }) {
  return (
    <div className="contact-page middle-content-main">
      <Navbar onNavigate={onNavigate} PAGES={PAGES} />
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">We are here to help</p>
      </div>
      <div className="content-wrapper" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '30px', background: '#eff6ff', borderRadius: '16px', textAlign: 'center', border: '1px solid #dbeafe' }}>
                <div style={{ background: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                    <Phone size={28} color="#2563eb" />
                </div>
                <h3 style={{ marginBottom: '10px' }}>Call Us</h3>
                <p style={{ margin: '5px 0', fontSize: '1.1rem' }}>24/7 Hotline: <strong>1332</strong></p>
                <p style={{ margin: '5px 0', color: '#64748b' }}>General: +94 11 234 5678</p>
            </div>
            <div style={{ padding: '30px', background: '#f0fdf4', borderRadius: '16px', textAlign: 'center', border: '1px solid #dcfce7' }}>
                <div style={{ background: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                    <Mail size={28} color="#16a34a" />
                </div>
                <h3 style={{ marginBottom: '10px' }}>Email Us</h3>
                <p style={{ margin: '5px 0', color: '#64748b' }}>support@genzbank.com</p>
                <p style={{ margin: '5px 0', color: '#64748b' }}>info@genzbank.com</p>
            </div>
            <div style={{ padding: '30px', background: '#fff1f2', borderRadius: '16px', textAlign: 'center', border: '1px solid #ffe4e6' }}>
                <div style={{ background: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                    <MapPin size={28} color="#e11d48" />
                </div>
                <h3 style={{ marginBottom: '10px' }}>Visit Us</h3>
                <p style={{ margin: '5px 0', color: '#64748b' }}>GenZ Tower,</p>
                <p style={{ margin: '5px 0', color: '#64748b' }}>No. 10, Finance Road, Colombo 01</p>
            </div>
        </div>
      </div>
    </div>
  );
}