import React from 'react';
import { ArrowLeft, Briefcase, TrendingUp, Globe, ShieldCheck, PieChart, Users, ArrowRight } from 'lucide-react';
import './BusinessBanking.css';

export default function BusinessBanking({ onNavigate }) {
  const solutions = [
    { title: 'SME Loans', icon: <Briefcase />, desc: 'Capital to grow your business.' },
    { title: 'Trade Finance', icon: <Globe />, desc: 'Import/Export letters of credit.' },
    { title: 'Payroll Services', icon: <Users />, desc: 'Automated salary disbursements.' },
    { title: 'Merchant Services', icon: <ShieldCheck />, desc: 'POS and Payment Gateway solutions.' },
  ];

  return (
    <div className="page-container business-page">
      <header className="page-header">
        <button className="back-btn" onClick={() => onNavigate('home')}>
          <ArrowLeft />
        </button>
        <h1>Business Banking</h1>
      </header>

      <div className="business-hero">
        <div className="hero-content">
          <h2>Powering Your Enterprise</h2>
          <p>From startups to conglomerates, GenZ Business provides the financial infrastructure you need to scale.</p>
          <button className="cta-btn">Open Business Account</button>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <TrendingUp size={24} className="stat-icon" />
            <span className="stat-value">+12.5%</span>
            <span className="stat-label">Avg. Growth</span>
          </div>
          <div className="stat-card">
            <PieChart size={24} className="stat-icon" />
            <span className="stat-value">Analytics</span>
            <span className="stat-label">Real-time Insights</span>
          </div>
        </div>
      </div>

      <div className="business-content">
        <section className="solutions-section">
          <h3>Corporate Solutions</h3>
          <div className="solutions-grid">
            {solutions.map((sol, idx) => (
              <div key={idx} className="solution-card">
                <div className="solution-icon">{sol.icon}</div>
                <h4>{sol.title}</h4>
                <p>{sol.desc}</p>
                <span className="learn-more">Learn More <ArrowRight size={14} /></span>
              </div>
            ))}
          </div>
        </section>

        <section className="feature-highlight">
          <div className="highlight-text">
            <h3>GenZ BizConnect API</h3>
            <p>Integrate banking directly into your ERP. Automate reconciliation, payments, and liquidity management with our open APIs.</p>
            <button className="secondary-btn">View Documentation</button>
          </div>
        </section>
      </div>
    </div>
  );
}