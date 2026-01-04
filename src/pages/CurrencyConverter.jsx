import React, { useState, useEffect, useMemo } from 'react';
import { ArrowLeft, RefreshCw, Coins } from 'lucide-react';
import './CurrencyConverter.css';

// Mock exchange rates relative to LKR - defined outside component
const exchangeRates = {
  USD: 305.00, // US Dollar
  EUR: 331.50, // Euro
  GBP: 388.20, // British Pound
  AUD: 201.10, // Australian Dollar
  CAD: 224.80, // Canadian Dollar
  SGD: 227.90, // Singapore Dollar
  JPY: 2.02,   // Japanese Yen
  CNY: 42.15,  // Chinese Yuan
  INR: 3.66,   // Indian Rupee
  AED: 83.05,  // UAE Dirham
  SAR: 81.30,  // Saudi Riyal
  QAR: 83.75,  // Qatari Riyal
  KWD: 992.50, // Kuwaiti Dinar
  CHF: 345.10, // Swiss Franc
  NZD: 185.40, // New Zealand Dollar
};

export default function CurrencyConverter({ onNavigate, PAGES }) {
  const [amount, setAmount] = useState('1');
  const [currency, setCurrency] = useState('USD');

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calculate converted amount based on amount and currency
  const convertedAmount = useMemo(() => {
    const rate = exchangeRates[currency] || 0;
    const val = parseFloat(amount);
    if (!isNaN(val) && val >= 0) {
      return val * rate;
    }
    return 0;
  }, [amount, currency]);

  return (
    <div className="page-container converter-page middle-content-main">
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <button className="back-btn" onClick={() => onNavigate(PAGES.HOME)}>
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="page-title">Currency Converter</h1>
        <p className="page-subtitle">Convert international currencies to Sri Lankan Rupees</p>
      </div>

      <div className="content-wrapper" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="converter-content">
        <div className="converter-card">
          <div className="icon-wrapper">
            <Coins size={48} className="feature-icon" />
          </div>
          <h2>World to LKR</h2>
          <p className="subtitle">Convert international currencies to Sri Lankan Rupees</p>

          <div className="input-group">
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              min="0"
            />
          </div>

          <div className="input-group">
            <label>Select Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {Object.keys(exchangeRates).map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>

          <div className="divider">
            <RefreshCw size={20} />
          </div>

          <div className="result-box">
            <span className="currency-label">LKR (Sri Lankan Rupee)</span>
            <span className="result-value">
              {convertedAmount.toLocaleString('en-LK', {
                style: 'currency',
                currency: 'LKR'
              })}
            </span>
            <div className="rate-hint">
              1 {currency} = {exchangeRates[currency].toFixed(2)} LKR
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}