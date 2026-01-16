import React from 'react';
import { ArrowLeft, Zap, Shield, Smartphone, Globe, Cpu, Layers } from 'lucide-react';

export default function UniqueFeaturesPage({ onNavigate }) {
  const features = [
    {
      icon: <Cpu size={40} />,
      title: "AI-Driven Financial Insights",
      desc: "Our advanced AI analyzes your spending habits to provide personalized budgeting tips and investment recommendations."
    },
    {
      icon: <Shield size={40} />,
      title: "Biometric & Quantum Security",
      desc: "State-of-the-art facial recognition and quantum-resistant encryption ensure your assets are safer than ever."
    },
    {
      icon: <Smartphone size={40} />,
      title: "Voice-Activated Banking",
      desc: "Perform transactions, check balances, and pay bills using just your voice with our integrated smart assistant."
    },
    {
      icon: <Globe size={40} />,
      title: "Global Multi-Currency Wallet",
      desc: "Hold, exchange, and spend in over 50 currencies with real-time interbank exchange rates and zero fees."
    },
    {
      icon: <Zap size={40} />,
      title: "Instant Cross-Border Payments",
      desc: "Send money anywhere in the world in seconds using our blockchain-powered settlement network."
    },
    {
      icon: <Layers size={40} />,
      title: "Augmented Reality Branch Locator",
      desc: "Find ATMs and branches and view offers in AR mode through your mobile camera."
    }
  ];

  return (
    <div className="page-container unique-features-page">
      <header className="page-header">
        <button className="back-btn" onClick={() => onNavigate('home')}>
          <ArrowLeft />
        </button>
        <h1>Our Unique Features</h1>
      </header>

      <div className="content-wrapper" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', background: 'linear-gradient(90deg, #4a00e0, #8e2de2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Banking Reimagined</h2>
          <p style={{ fontSize: '1.2rem', color: '#64748b' }}>Experience the next generation of financial technology with GenZ Bank.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {features.map((feature, index) => (
            <div key={index} style={{ 
              background: 'white', 
              padding: '30px', 
              borderRadius: '20px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
              transition: 'transform 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ 
                background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', 
                width: '70px', 
                height: '70px', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '20px',
                color: '#4a00e0'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#1e293b' }}>{feature.title}</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}