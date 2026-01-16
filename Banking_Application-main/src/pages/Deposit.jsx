import React, { useState } from 'react';
import axios from 'axios';
import { ArrowLeft, Camera, UploadCloud } from 'lucide-react';
import './Deposit.css';

export default function Deposit({ onNavigate, PAGES }) {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDeposit = async () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    setLoading(true);
    
    try {
      const storedData = JSON.parse(localStorage.getItem('genz_user'));
      const accountId = storedData?.account?.id;

      await axios.post('http://127.0.0.1:8080/api/transactions/deposit', {
        accountId: accountId,
        amount: Number(amount)
      });

      setLoading(false);
      alert(`Successfully deposited LKR ${Number(amount).toLocaleString()} to your account.`);
      onNavigate(PAGES.DASHBOARD);
    } catch (error) {
      setLoading(false);
      alert("Deposit failed: " + (error.response?.data || "Server error"));
      let errorMessage = error.response?.data || "Server error";
      if (!error.response && error.request) {
        errorMessage = "Cannot connect to server. Is Spring Boot running on port 8080?";
      }
      alert("Deposit failed: " + errorMessage);
    }
  };

  return (
    <div className="page-container deposit-page middle-content-main">
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <button className="back-btn" onClick={() => onNavigate(PAGES.DASHBOARD)}>
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="page-title">Deposit Funds</h1>
        <p className="page-subtitle">Add funds to your account instantly</p>
      </div>

      <div className="content-wrapper" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="deposit-options">
        <div className="option-card">
          <Camera size={32} />
          <h3>Mobile Check Deposit</h3>
          <p>Take a photo of your check to deposit instantly.</p>
          
          <div className="upload-zone">
            <UploadCloud />
            <span>Tap to upload front of check</span>
          </div>
          
          <div className="form-group">
            <label>Check Amount</label>
            <input 
              type="number" 
              placeholder="0.00" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <button className="action-btn-primary" onClick={handleDeposit} disabled={loading}>
            {loading ? 'Processing...' : 'Submit Deposit'}
          </button>
        </div>

        <div className="info-text">
          <p>Or visit a local branch to deposit cash.</p>
        </div>
      </div>
      </div>
    </div>
  );
}