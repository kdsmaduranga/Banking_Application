import React from 'react';
import { Home, Car, GraduationCap, DollarSign, ArrowLeft } from 'lucide-react';

export default function LoansPage({ onNavigate }) {
  const loans = [
    { title: 'Personal Loans', icon: <DollarSign />, desc: 'Unsecured loans for your personal needs.', rate: '14.5% p.a.' },
    { title: 'Home Loans', icon: <Home />, desc: 'Build or buy your dream home.', rate: '12.0% p.a.' },
    { title: 'Auto Loans', icon: <Car />, desc: 'Get on the road with your dream vehicle.', rate: '13.5% p.a.' },
    { title: 'Education Loans', icon: <GraduationCap />, desc: 'Invest in your future.', rate: '11.0% p.a.' },
  ];

  return (
    <div className="middle-content-main">
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <button className="back-btn" onClick={() => onNavigate('home')} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', marginBottom: '1rem', fontSize: '1rem' }}>
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="page-title">Loans & Mortgages</h1>
        <p className="page-subtitle">Financing solutions for your needs</p>
      </div>
      <div className="content-wrapper" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {loans.map((loan, idx) => (
            <div key={idx} style={{ padding: '25px', border: '1px solid #e5e7eb', borderRadius: '12px', background: 'white', textAlign: 'center' }}>
              <div style={{ color: '#007bff', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>
                {React.cloneElement(loan.icon, { size: 40 })}
              </div>
              <h3 style={{ margin: '0 0 10px 0' }}>{loan.title}</h3>
              <p style={{ color: '#6b7280', marginBottom: '15px' }}>{loan.desc}</p>
              <div style={{ background: '#eff6ff', color: '#1d4ed8', padding: '5px 10px', borderRadius: '20px', display: 'inline-block', fontWeight: 'bold', fontSize: '0.9rem' }}>
                From {loan.rate}
              </div>
              <button style={{ display: 'block', width: '100%', marginTop: '20px', padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }} onClick={() => onNavigate('applications')}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}