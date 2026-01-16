import React from 'react';
import { AlertTriangle, Info, ShieldAlert, Calendar, ArrowLeft } from 'lucide-react';
import './ImportantNotices.css';

export default function ImportantNotices({ onNavigate }) {
  const notices = [
    {
      id: 1,
      type: 'urgent',
      icon: <ShieldAlert />,
      title: 'Security Alert: Phishing Scams',
      date: 'Oct 25, 2023',
      content: 'We have received reports of suspicious SMS messages asking for OTPs. GenZ Bank will never ask for your OTP or Password via SMS or Call.'
    },
    {
      id: 2,
      type: 'warning',
      icon: <AlertTriangle />,
      title: 'Scheduled Maintenance',
      date: 'Oct 28, 2023',
      content: 'Online banking services will be unavailable on Sunday, Oct 29th from 2:00 AM to 4:00 AM due to scheduled system upgrades.'
    },
    {
      id: 3,
      type: 'info',
      icon: <Info />,
      title: 'New Branch Opening',
      date: 'Oct 20, 2023',
      content: 'We are excited to announce the opening of our new digital kiosk at Colombo City Center. Visit us for instant card printing.'
    }
  ];

  return (
    <div className="notices-page middle-content-main">
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <button className="back-btn" onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', marginBottom: '1rem', fontSize: '1rem' }}>
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="page-title">Important Notices</h1>
        <p className="page-subtitle">Stay updated with the latest alerts</p>
      </div>

      <div className="content-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="notices-list">
        {notices.map(notice => (
          <div key={notice.id} className={`notice-card ${notice.type}`}>
            <div className="notice-icon">{notice.icon}</div>
            <div className="notice-content">
              <div className="notice-header">
                <h3>{notice.title}</h3>
                <span className="notice-date"><Calendar size={12}/> {notice.date}</span>
              </div>
              <p>{notice.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}