import React, { useState, useEffect } from 'react';
import { Percent, CreditCard, Briefcase, ArrowLeft } from 'lucide-react';
import './RatesTariffs.css';

export default function RatesTariffs({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('savings');
  const [rates, setRates] = useState({
    savings: 4.50,
    personalLoan: 14.50,
    fixedDeposit: 8.00
  });

  useEffect(() => {
    const storedRates = localStorage.getItem('genz_rates');
    if (storedRates) {
      setRates(JSON.parse(storedRates));
    }
  }, []);

  const renderContent = () => {
    switch(activeTab) {
      case 'savings':
        return (
          <div className="rates-table-container">
            <h3>Savings Account Rates</h3>
            <table className="rates-table">
              <thead>
                <tr><th>Account Type</th><th>Annual Interest Rate (AER)</th></tr>
              </thead>
              <tbody>
                <tr><td>GenZ Digital Savings</td><td>{rates.savings}%</td></tr>
                <tr><td>Super Saver</td><td>5.25%</td></tr>
                <tr><td>Regular Savings</td><td>3.50%</td></tr>
                <tr><td>Senior Citizens</td><td>6.00%</td></tr>
              </tbody>
            </table>
          </div>
        );
      case 'loans':
        return (
          <div className="rates-table-container">
            <h3>Loan Interest Rates</h3>
            <table className="rates-table">
              <thead>
                <tr><th>Loan Type</th><th>Interest Rate (p.a.)</th></tr>
              </thead>
              <tbody>
                <tr><td>Personal Loan</td><td>{rates.personalLoan}% - 18.00%</td></tr>
                <tr><td>Home Loan (Fixed 5Y)</td><td>12.00%</td></tr>
                <tr><td>Vehicle Loan</td><td>13.50%</td></tr>
                <tr><td>Education Loan</td><td>11.00%</td></tr>
              </tbody>
            </table>
          </div>
        );
      case 'deposits':
        return (
          <div className="rates-table-container">
            <h3>Fixed Deposit Rates</h3>
            <table className="rates-table">
              <thead>
                <tr><th>Tenure</th><th>Interest Rate (p.a.)</th></tr>
              </thead>
              <tbody>
                <tr><td>3 Months</td><td>{rates.fixedDeposit}%</td></tr>
                <tr><td>6 Months</td><td>9.50%</td></tr>
                <tr><td>1 Year</td><td>10.50%</td></tr>
                <tr><td>2 Years</td><td>11.00%</td></tr>
              </tbody>
            </table>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="rates-page middle-content-main">
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <button className="back-btn" onClick={() => onNavigate(PAGES.DASHBOARD)}>
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="page-title">Rates & Tariffs</h1>
        <p className="page-subtitle">Transparent pricing for all services</p>
      </div>

      <div className="content-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="rates-content">
        <div className="tabs-header">
          <button className={`tab-btn ${activeTab === 'savings' ? 'active' : ''}`} onClick={() => setActiveTab('savings')}><Percent size={18}/> Savings</button>
          <button className={`tab-btn ${activeTab === 'deposits' ? 'active' : ''}`} onClick={() => setActiveTab('deposits')}><Briefcase size={18}/> Deposits</button>
          <button className={`tab-btn ${activeTab === 'loans' ? 'active' : ''}`} onClick={() => setActiveTab('loans')}><CreditCard size={18}/> Loans</button>
        </div>

        <div className="tab-content">
          {renderContent()}
          <p className="disclaimer">* Rates are subject to change without prior notice. Terms and conditions apply.</p>
        </div>
      </div>
    </div>
    </div>
  );
}