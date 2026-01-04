import React, { useState } from 'react';
import { ArrowLeft, Globe, Plane, Home, DollarSign, Phone, Calculator } from 'lucide-react';
import './NonResidentBanking.css';

export default function NonResidentBanking({ onNavigate }) {
  const [remitAmount, setRemitAmount] = useState(1000);
  const rate = 305.50; // Mock USD rate

  return (
    <div className="page-container nrb-page">
      <header className="page-header">
        <button className="back-btn" onClick={() => onNavigate('home')}>
          <ArrowLeft />
        </button>
        <h1>Non Resident Banking</h1>
      </header>

      <div className="nrb-content">
        <div className="world-connect-banner">
          <Globe size={64} className="globe-icon" />
          <div className="banner-text">
            <h2>Banking Beyond Borders</h2>
            <p>Seamless financial solutions for Sri Lankans living abroad.</p>
          </div>
        </div>

        <div className="nrb-grid">
          {/* Remittance Calculator */}
          <div className="nrb-card calculator-card">
            <div className="card-header">
              <Calculator size={20} />
              <h3>Remittance Calculator</h3>
            </div>
            <div className="calc-body">
              <div className="input-row">
                <label>You Send (USD)</label>
                <input type="number" value={remitAmount} onChange={(e) => setRemitAmount(e.target.value)} />
              </div>
              <div className="rate-display">
                <span>Exchange Rate</span>
                <strong>1 USD = {rate.toFixed(2)} LKR</strong>
              </div>
              <div className="result-row">
                <label>They Receive (LKR)</label>
                <div className="result-value">{(remitAmount * rate).toLocaleString()}</div>
              </div>
              <button className="remit-btn">Send Money Now</button>
            </div>
          </div>

          {/* Services List */}
          <div className="services-column">
            <div className="nrb-service-item">
              <div className="icon-box"><DollarSign /></div>
              <div className="service-info">
                <h4>PFCA / NRFC Accounts</h4>
                <p>High interest rates in foreign currency.</p>
              </div>
            </div>
            <div className="nrb-service-item">
              <div className="icon-box"><Home /></div>
              <div className="service-info">
                <h4>Housing Loans</h4>
                <p>Build your dream home back in Sri Lanka.</p>
              </div>
            </div>
            <div className="nrb-service-item">
              <div className="icon-box"><Plane /></div>
              <div className="service-info">
                <h4>Travel Insurance</h4>
                <p>Comprehensive coverage for your visits.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-agent">
          <Phone size={20} />
          <span>Need help? Our 24/7 Global Support Team is here. <strong>+94 11 234 5678</strong></span>
        </div>
      </div>
    </div>
  );
}