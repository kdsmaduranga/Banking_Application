import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./dashboard.css";
import {
  CreditCard, ArrowUpRight, ArrowDownLeft, FileText, Send,
  Bell, Settings, LogOut, User, Shield, HelpCircle
} from "lucide-react";

function Action({ icon, label, onClick }) {
  return (
    <button className="action-btn" onClick={onClick}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default function Dashboard({ user, onNavigate, PAGES }) {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get the base user info from prop (on initial login) or localStorage (on refresh)
  const currentUser = user || JSON.parse(localStorage.getItem('genz_user') || 'null');
  const accountId = currentUser?.account?.id;

  useEffect(() => {
    if (accountId) {
      axios.get(`http://127.0.0.1:8080/api/dashboard/${accountId}`)
        .then(response => {
          setDashboardData(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching dashboard data:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [accountId]);

  // Use the state for display, with a robust fallback to the initial currentUser data
  const displayAccount = {
    fullName: currentUser?.fullName || "Guest User",
    accountNumber: "----",
    accountType: "N/A",
    balance: 0,
    currency: "LKR",
    lastLogin: currentUser?.lastLogin || new Date(),
    status: "Active",
    ...(currentUser?.account || {}), // Auto-fill from login user
    ...(dashboardData?.account || {}) // Update from API
  };

  const transactions = dashboardData?.transactions || [];

  if (loading && !currentUser && !dashboardData) return <div className="dashboard-loading">Loading Dashboard...</div>;

  return (
    <div className="dashboard advanced">
      <style>{`
        .advanced-sidebar {
          background: linear-gradient(180deg, #007bff 0%, #0056b3 100%) !important;
          color: white !important;
        }
        .advanced-sidebar .logo {
          color: white !important;
        }
        .advanced-sidebar button {
          color: rgba(255, 255, 255, 0.9) !important;
        }
        .advanced-sidebar button:hover {
          background: rgba(255, 255, 255, 0.2) !important;
        }
      `}</style>
      {/* Sidebar */}
      <aside className="sidebar advanced-sidebar">
        <h2 className="logo">GenZ Bank</h2>
        <nav>
          <button onClick={() => onNavigate(PAGES.DASHBOARD)}><User /> Dashboard</button>
          <button onClick={() => onNavigate(PAGES.TRANSFER)}><Send /> Fund Transfer</button>
          <button onClick={() => onNavigate(PAGES.PAY_BILLS)}><FileText /> Pay Bills</button>
          <button onClick={() => onNavigate(PAGES.CARDS)}><CreditCard /> Cards</button>
          <button onClick={() => onNavigate(PAGES.SECURITY)}><Shield /> Security</button>
          <button onClick={() => onNavigate(PAGES.SETTINGS)}><Settings /> Settings</button>
          <button onClick={() => onNavigate(PAGES.SUPPORT)}><HelpCircle /> Support</button>
        </nav>
        <button className="logout" onClick={() => { 
          localStorage.removeItem('genz_user'); 
          onNavigate('home'); 
        }}><LogOut /> Logout</button>
      </aside>

      {/* Main Content */}
      <main className="main advanced-main">
        <header className="header">
          <h1>Welcome, {displayAccount.fullName}</h1>
          <Bell className="icon" />
        </header>

        {/* Account Overview Cards */}
        <section className="cards-overview">
          <div className="account-card gradient-card">
            <div className="account-top">
              <div>
                <h3>{displayAccount.fullName}</h3>
                <p>{displayAccount.accountType}</p>
                <p>{displayAccount.accountNumber}</p>
                <span className={`status ${(displayAccount.status || 'active').toLowerCase()}`}>{displayAccount.status || 'Active'}</span>
              </div>
              <CreditCard size={50} />
            </div>
            <div className="balance">
              <p>Available Balance</p>
              <h2>{displayAccount.currency} {(displayAccount.balance || 0).toLocaleString(undefined, { minimumFractionDigits: 2 })}</h2>
              <span>Last Login: {new Date(displayAccount.lastLogin).toLocaleString()}</span>
            </div>
          </div>

          <div className="quick-stats">
            <div className="stat-card">
              <h4>Total Transactions</h4>
              <p>{transactions.length}</p>
            </div>
            <div className="stat-card">
              <h4>Last Transaction</h4>
              <p>{transactions[0] ? (transactions[0].desc || transactions[0].description || transactions[0].type) : 'N/A'}</p>
            </div>
            <div className="stat-card">
              <h4>Deposit Total</h4>
              <p>{displayAccount.currency} {transactions.filter(t => t.type === 'CREDIT').reduce((a,b)=>a+b.amount,0).toLocaleString()}</p>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="actions">
          <Action icon={<Send />} label="Fund Transfer" onClick={() => onNavigate(PAGES.TRANSFER)} />
          <Action icon={<FileText />} label="Pay Bills" onClick={() => onNavigate(PAGES.PAY_BILLS)} />
          <Action icon={<ArrowUpRight />} label="Deposit" onClick={() => onNavigate(PAGES.DEPOSIT)} />
          <Action icon={<ArrowDownLeft />} label="Withdraw" onClick={() => onNavigate(PAGES.WITHDRAW)} />
          <Action icon={<CreditCard />} label="Manage Cards" onClick={() => onNavigate(PAGES.CARDS)} />
          <Action icon={<Shield />} label="Security" onClick={() => onNavigate(PAGES.SECURITY)} />
        </section>

        {/* Recent Transactions */}
        <section className="transactions-card card">
          <h3>Recent Transactions</h3>
          <ul className="transactions">
            {transactions.map(t => (
              <li key={t.id} className="transaction-item">
                <div>
                  <strong>{t.desc || t.description || t.type}</strong>
                  <span>{(t.desc && t.description) ? t.description : t.type}</span>
                  <span className="tx-date">{new Date(t.transactionDate).toLocaleDateString()}</span>
                </div>
                <span className={`tx-amount ${t.type === 'DEBIT' ? 'debit' : 'credit'}`}>
                  {t.type === 'DEBIT' ? '-' : '+'}{displayAccount.currency} {Math.abs(t.amount).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
          <button className="view-btn" onClick={() => onNavigate('transactions')}>View All Transactions</button>
        </section>
      </main>
    </div>
  );
}
