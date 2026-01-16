import React from 'react';
import { FilePlus, Clock, CheckCircle, ChevronRight, ArrowLeft } from 'lucide-react';
import './ApplicationsPage.css';

export default function ApplicationsPage({ onNavigate }) {
  const myApplications = [
    { id: 101, type: 'Personal Loan', date: 'Oct 24, 2023', status: 'Pending', color: 'orange' },
    { id: 102, type: 'Credit Card', date: 'Sep 10, 2023', status: 'Approved', color: 'green' },
  ];

  const newApps = [
    { title: 'Open Savings Account', desc: 'Digital account in 5 mins', icon: <CheckCircle /> },
    { title: 'Apply for Loan', desc: 'Personal, Home, or Auto', icon: <FilePlus /> },
    { title: 'Request Credit Card', desc: 'Find the card that suits you', icon: <FilePlus /> },
  ];

  return (
    <div className="apps-page middle-content-main">
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <button className="back-btn" onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', marginBottom: '1rem', fontSize: '1rem' }}>
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="page-title">Applications</h1>
        <p className="page-subtitle">Track and manage your requests</p>
      </div>

      <div className="content-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="apps-content">
        <section className="apps-section">
          <h2>Start New Application</h2>
          <div className="new-apps-list">
            {newApps.map((app, idx) => (
              <div key={idx} className="new-app-card" onClick={() => onNavigate('createAccount')}>
                <div className="app-icon-box">{app.icon}</div>
                <div className="app-info">
                  <h3>{app.title}</h3>
                  <p>{app.desc}</p>
                </div>
                <ChevronRight className="arrow-icon" />
              </div>
            ))}
          </div>
        </section>

        <section className="apps-section">
          <h2>My Applications</h2>
          <div className="my-apps-list">
            {myApplications.length > 0 ? (
              myApplications.map(app => (
                <div key={app.id} className="status-card">
                  <div className="status-header">
                    <span className="app-id">ID: #{app.id}</span>
                    <span className={`status-badge ${app.status.toLowerCase()}`}>{app.status}</span>
                  </div>
                  <h3>{app.type}</h3>
                  <div className="status-footer">
                    <Clock size={14} />
                    <span>Submitted on {app.date}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <p>No active applications found.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}