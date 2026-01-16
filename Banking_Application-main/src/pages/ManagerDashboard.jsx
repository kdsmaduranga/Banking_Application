import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  LayoutDashboard, Mail, TrendingUp, LogOut, 
  Save, RefreshCw, User, Search 
} from 'lucide-react';
import './ManagerDashboard.css';

export default function ManagerDashboard({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('inbox');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // State for Rates Management
  const [rates, setRates] = useState({
    savings: 4.50,
    personalLoan: 14.50,
    fixedDeposit: 8.00
  });

  // Fetch Messages from Backend
  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://127.0.0.1:8080/api/contact/all');
      setMessages(res.data);
    } catch (error) {
      console.error("Failed to fetch messages", error);
    } finally {
      setLoading(false);
    }
  };

  // Load Rates from LocalStorage on mount
  useEffect(() => {
    fetchMessages();
    const storedRates = localStorage.getItem('genz_rates');
    if (storedRates) {
      setRates(JSON.parse(storedRates));
    }
  }, []);

  // Save Rates to LocalStorage (Simulating Backend Update)
  const handleSaveRates = () => {
    localStorage.setItem('genz_rates', JSON.stringify(rates));
    alert("Rates updated successfully! These will now be visible on the Rates & Tariffs page.");
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <h2>GenZ Admin</h2>
        </div>
        <nav className="admin-nav">
          <button 
            className={activeTab === 'inbox' ? 'active' : ''} 
            onClick={() => setActiveTab('inbox')}
          >
            <Mail size={20} /> Inbox
          </button>
          <button 
            className={activeTab === 'rates' ? 'active' : ''} 
            onClick={() => setActiveTab('rates')}
          >
            <TrendingUp size={20} /> Manage Rates
          </button>
        </nav>
        <div className="admin-logout">
          <button onClick={() => onNavigate('home')}>
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-content">
        <header className="admin-header">
          <h1>{activeTab === 'inbox' ? 'Customer Messages' : 'Rate Configuration'}</h1>
          <div className="admin-profile">
            <span>Administrator</span>
            <div className="avatar"><User size={20} /></div>
          </div>
        </header>

        {/* INBOX TAB */}
        {activeTab === 'inbox' && (
          <div className="admin-panel fade-in">
            <div className="panel-actions">
              <button className="refresh-btn" onClick={fetchMessages}>
                <RefreshCw size={18} /> Refresh
              </button>
              <div className="msg-count">{messages.length} Messages</div>
            </div>

            <div className="messages-list">
              {loading ? <p>Loading...</p> : messages.length === 0 ? <p>No messages found.</p> : (
                messages.map((msg) => (
                  <div key={msg.id} className="admin-msg-card">
                    <div className="msg-top">
                      <h4>{msg.subject}</h4>
                      <span className="msg-time">{new Date(msg.sentAt).toLocaleDateString()}</span>
                    </div>
                    <div className="msg-from">
                      From: <strong>{msg.name}</strong> ({msg.email})
                    </div>
                    <p className="msg-text">{msg.message}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* RATES TAB */}
        {activeTab === 'rates' && (
          <div className="admin-panel fade-in">
            <div className="rates-form-container">
              <h3>Update Bank Rates</h3>
              <p className="subtitle">Changes here will reflect on the public Rates & Tariffs page.</p>
              
              <div className="rate-input-group">
                <label>Savings Interest Rate (%)</label>
                <input 
                  type="number" 
                  step="0.01" 
                  value={rates.savings} 
                  onChange={(e) => setRates({...rates, savings: e.target.value})} 
                />
              </div>

              <div className="rate-input-group">
                <label>Personal Loan Rate (%)</label>
                <input 
                  type="number" 
                  step="0.01" 
                  value={rates.personalLoan} 
                  onChange={(e) => setRates({...rates, personalLoan: e.target.value})} 
                />
              </div>

              <div className="rate-input-group">
                <label>Fixed Deposit Rate (1 Year) (%)</label>
                <input 
                  type="number" 
                  step="0.01" 
                  value={rates.fixedDeposit} 
                  onChange={(e) => setRates({...rates, fixedDeposit: e.target.value})} 
                />
              </div>

              <button className="save-btn" onClick={handleSaveRates}>
                <Save size={18} /> Save Changes
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}