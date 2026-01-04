import React from 'react';
import { ArrowLeft, Cpu, Server, Database, Lock, Activity, Layers, Code } from 'lucide-react';

export default function AdvancedBankingPage({ onNavigate }) {
  const features = [
    {
      icon: <Activity size={32} />,
      title: "Real-Time Analytics Engine",
      desc: "Monitor cash flow, liquidity positions, and transaction volumes with millisecond latency dashboards."
    },
    {
      icon: <Code size={32} />,
      title: "Open API Banking",
      desc: "Directly integrate our banking services into your ERP or custom software using our secure RESTful APIs."
    },
    {
      icon: <Database size={32} />,
      title: "Blockchain Ledger",
      desc: "Immutable transaction recording for supply chain finance and cross-border settlements."
    },
    {
      icon: <Lock size={32} />,
      title: "Quantum-Safe Encryption",
      desc: "Next-generation cryptographic protocols protecting your high-value transfers."
    },
    {
      icon: <Server size={32} />,
      title: "Dedicated Cloud Infrastructure",
      desc: "Private cloud instances ensuring 99.999% uptime for mission-critical financial operations."
    },
    {
      icon: <Layers size={32} />,
      title: "Automated Reconciliation",
      desc: "AI-powered matching of invoices and payments to reduce manual accounting work by 90%."
    }
  ];

  return (
    <div className="page-container advanced-banking-page">
      <header className="page-header">
        <button className="back-btn" onClick={() => onNavigate('home')}>
          <ArrowLeft />
        </button>
        <h1>Advanced Banking Application</h1>
      </header>

      <div className="content-wrapper" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', 
          borderRadius: '20px', 
          padding: '50px', 
          color: 'white', 
          textAlign: 'center',
          marginBottom: '50px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}>
          <Cpu size={64} color="#38bdf8" style={{ marginBottom: '20px' }} />
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Enterprise-Grade Financial Tech</h2>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto 30px auto' }}>
            Empower your organization with the most sophisticated banking tools available in the market today.
          </p>
          <button style={{ 
            padding: '12px 30px', 
            background: '#38bdf8', 
            color: '#0f172a', 
            border: 'none', 
            borderRadius: '30px', 
            fontSize: '1rem', 
            fontWeight: 'bold', 
            cursor: 'pointer' 
          }}>
            Request Demo Access
          </button>
        </div>

        {/* Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {features.map((feature, index) => (
            <div key={index} style={{ padding: '30px', background: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#0284c7', marginBottom: '20px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: '#1e293b' }}>{feature.title}</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}