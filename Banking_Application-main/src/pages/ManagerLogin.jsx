import React, { useState } from 'react';
import { ShieldCheck, Lock, User } from 'lucide-react';
import './ManagerLogin.css';

export default function ManagerLogin({ onNavigate, PAGES }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple hardcoded check for demonstration. 
    // In a real app, this would hit a backend endpoint like /api/admin/login
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      onNavigate(PAGES.MANAGER_DASHBOARD);
    } else {
      setError('Invalid Administrator Credentials');
    }
  };

  return (
    <div className="manager-login-container">
      <div className="manager-login-card">
        <div className="login-header">
          <div className="icon-bg">
            <ShieldCheck size={40} color="white" />
          </div>
          <h2>Admin Portal</h2>
          <p>Restricted Access</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <User size={18} className="field-icon" />
            <input 
              type="text" 
              placeholder="Admin Username"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
            />
          </div>
          
          <div className="input-group">
            <Lock size={18} className="field-icon" />
            <input 
              type="password" 
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
          </div>

          {error && <div className="error-msg">{error}</div>}

          <button type="submit" className="login-btn">
            Access Dashboard
          </button>
        </form>

        <button className="back-link" onClick={() => onNavigate(PAGES.HOME)}>
          Return to Banking Home
        </button>
      </div>
    </div>
  );
}