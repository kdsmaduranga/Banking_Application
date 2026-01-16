import React, { useState } from 'react';
import axios from 'axios';
import { ArrowLeft, Send, User, Clock } from 'lucide-react';
import './TransferMoney.css';

export default function TransferMoney({ onNavigate, PAGES }) {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTransfer = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Get current user data from local storage
      const storedData = JSON.parse(localStorage.getItem('genz_user'));
      const accountId = storedData?.account?.id;

      if (!accountId) {
        alert("Error: Could not identify your account. Please login again.");
        return;
      }

      await axios.post('http://127.0.0.1:8080/api/transactions/transfer', {
        fromAccountId: accountId,
        toAccountNumber: recipient,
        amount: Number(amount)
      });

      setLoading(false);
      alert(`Successfully transferred LKR ${amount} to ${recipient}`);
      onNavigate(PAGES.DASHBOARD);
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Transfer failed: " + (error.response?.data || "Server error"));
    }
  };

  const recentPayees = [
    { name: "Amal Perera", id: "1234" },
    { name: "Nimali Silva", id: "5678" },
    { name: "Kamal Dias", id: "9012" }
  ];

  return (
    <div className="page-container transfer-page middle-content-main">
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <button className="back-btn" onClick={() => onNavigate(PAGES.DASHBOARD)}>
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="page-title">Transfer Money</h1>
        <p className="page-subtitle">Send funds to any account instantly</p>
      </div>

      <div className="content-wrapper" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="recent-payees">
        <h3><Clock size={16} /> Recent</h3>
        <div className="payee-list">
          {recentPayees.map(p => (
            <div key={p.id} className="payee-item" onClick={() => setRecipient(p.name)}>
              <div className="payee-avatar"><User /></div>
              <span>{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleTransfer} className="transfer-form">
        <div className="form-group">
          <label>Recipient Name / Account</label>
          <input 
            type="text" 
            value={recipient} 
            onChange={(e) => setRecipient(e.target.value)} 
            placeholder="Enter name or account number"
            required 
          />
        </div>

        <div className="form-group">
          <label>Amount (LKR)</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="0.00"
            required 
          />
        </div>

        <button type="submit" className="action-btn-primary" disabled={loading}>
          {loading ? 'Processing...' : <><Send size={18} /> Send Money</>}
        </button>
      </form>
      </div>
    </div>
  );
}