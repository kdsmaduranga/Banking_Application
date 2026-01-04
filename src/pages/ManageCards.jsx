import React, { useState } from 'react';
import { ArrowLeft, Lock, Unlock, Eye, EyeOff } from 'lucide-react';
import './ManageCards.css';

export default function ManageCards({ onNavigate, PAGES }) {
  const [isFrozen, setIsFrozen] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const [limit, setLimit] = useState(100000);

  return (
    <div className="page-container cards-page middle-content-main">
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <button className="back-btn" onClick={() => onNavigate(PAGES.DASHBOARD)}>
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="page-title">My Cards</h1>
        <p className="page-subtitle">Manage your debit and credit cards</p>
      </div>

      <div className="content-wrapper" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className={`credit-card ${isFrozen ? 'frozen' : ''}`}>
        <div className="card-chip"></div>
        <div className="card-number">
          {showNumber ? "4532 1234 5678 9012" : "**** **** **** 9012"}
          <button className="eye-btn" onClick={() => setShowNumber(!showNumber)}>
            {showNumber ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        <div className="card-details">
          <div>
            <span>Card Holder</span>
            <p>SAMITHA KAHAWITA</p>
          </div>
          <div>
            <span>Expires</span>
            <p>12/28</p>
          </div>
        </div>
        {isFrozen && <div className="frozen-overlay"><Lock /> FROZEN</div>}
      </div>

      <div className="card-controls">
        <div className="control-item">
          <div className="control-info">
            <h3>Freeze Card</h3>
            <p>Temporarily disable this card</p>
          </div>
          <button 
            className={`toggle-btn ${isFrozen ? 'active' : ''}`} 
            onClick={() => setIsFrozen(!isFrozen)}
          >
            {isFrozen ? <Lock size={18} /> : <Unlock size={18} />}
          </button>
        </div>

        <div className="control-item column">
          <div className="control-info">
            <h3>Spending Limit</h3>
            <p>LKR {limit.toLocaleString()}</p>
          </div>
          <input type="range" min="10000" max="500000" step="5000" value={limit} onChange={(e) => setLimit(Number(e.target.value))} className="slider" />
        </div>
      </div>
      </div>
    </div>
  );
}