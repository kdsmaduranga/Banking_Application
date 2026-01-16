import React, { useState } from 'react';
import { ArrowLeft, Smartphone, MapPin } from 'lucide-react';
import './Withdraw.css';

export default function Withdraw({ onNavigate, PAGES }) {
  const [code, setCode] = useState(null);

  const generateCode = () => {
    const randomCode = Math.floor(100000 + Math.random() * 900000);
    setCode(randomCode);
  };

  return (
    <div className="page-container withdraw-page middle-content-main">
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <button className="back-btn" onClick={() => onNavigate(PAGES.DASHBOARD)}>
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="page-title">Withdraw Cash</h1>
        <p className="page-subtitle">Generate a secure code for cardless ATM access</p>
      </div>

      <div className="content-wrapper" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="cardless-atm">
        <div className="icon-wrapper"><Smartphone size={40} /></div>
        <h2>Cardless ATM Access</h2>
        <p>Generate a secure code to withdraw cash at any GenZ ATM without your card.</p>

        {!code ? (
          <div className="amount-selector">
            <label>Select Amount</label>
            <select className="form-select">
              <option>LKR 1,000</option>
              <option>LKR 5,000</option>
              <option>LKR 10,000</option>
              <option>LKR 20,000</option>
            </select>
            <button className="action-btn-primary" onClick={generateCode}>Generate Code</button>
          </div>
        ) : (
          <div className="code-display">
            <p>Your One-Time Code:</p>
            <div className="otp">{code}</div>
            <p className="expiry">Expires in 15:00 minutes</p>
            <button className="btn-secondary" onClick={() => setCode(null)}>Cancel</button>
          </div>
        )}
      </div>
      
      </div>
      <button className="find-atm-btn"><MapPin size={16} /> Find Nearest ATM</button>
    </div>
  );
}