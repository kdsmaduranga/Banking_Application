import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, Target, Shield, PieChart } from 'lucide-react';
import './SavingsAccounts.css';

export default function SavingsAccounts({ onNavigate }) {
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const [years, setYears] = useState(5);
  const interestRate = 0.045; // 4.5%

  const calculateReturns = () => {
    // Simple compound interest approximation for monthly contributions
    const months = years * 12;
    const ratePerMonth = interestRate / 12;
    const futureValue = monthlyDeposit * ((Math.pow(1 + ratePerMonth, months) - 1) / ratePerMonth) * (1 + ratePerMonth);
    return futureValue;
  };

  return (
    <div className="page-container savings-page">
      <header className="page-header">
        <button className="back-btn" onClick={() => onNavigate('home')}>
          <ArrowLeft />
        </button>
        <h1>Savings Accounts</h1>
      </header>

      <div className="savings-content">
        <div className="savings-hero">
          <h2>Grow Your Wealth Securely</h2>
          <p>High interest rates, zero maintenance fees, and 24/7 digital access.</p>
          <button className="cta-btn" onClick={() => onNavigate('createAccount')}>Open Account</button>
        </div>

        <div className="calculator-section">
          <h3><TrendingUp size={20}/> Savings Projector</h3>
          <div className="calc-grid">
            <div className="inputs">
              <label>Monthly Contribution (LKR)</label>
              <input type="range" min="1000" max="100000" step="1000" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(Number(e.target.value))} />
              <div className="val-display">LKR {monthlyDeposit.toLocaleString()}</div>
              
              <label>Duration (Years)</label>
              <input type="range" min="1" max="30" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} />
              <div className="val-display">{years} Years</div>
            </div>
            <div className="results">
              <span className="label">Projected Total</span>
              <span className="amount">LKR {calculateReturns().toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
              <span className="sub-label">@ 4.5% p.a.</span>
            </div>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <Target className="f-icon" />
            <h4>Goal Based Savings</h4>
            <p>Set targets for cars, homes, or vacations and track progress.</p>
          </div>
          <div className="feature-card">
            <Shield className="f-icon" />
            <h4>100% Secure</h4>
            <p>Regulated by the Central Bank with deposit insurance.</p>
          </div>
          <div className="feature-card">
            <PieChart className="f-icon" />
            <h4>Auto-Invest</h4>
            <p>Automatically sweep excess funds into high-yield FDs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}