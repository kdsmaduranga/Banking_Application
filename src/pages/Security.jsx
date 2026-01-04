import React, { useState } from 'react';
import { ArrowLeft, Shield, Key } from 'lucide-react';
import './Security.css';

export default function Security({ onNavigate, PAGES }) {
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <div className="page-container security-page middle-content-main">
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <button className="back-btn" onClick={() => onNavigate(PAGES.DASHBOARD)}>
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="page-title">Security Settings</h1>
        <p className="page-subtitle">Manage your account security preferences</p>
      </div>

      <div className="content-wrapper" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="security-section">
        <div className="section-header">
          <Shield className="text-primary" />
          <h2>Login Security</h2>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h3>Two-Factor Authentication</h3>
            <p>Require a code when logging in from new devices.</p>
          </div>
          <label className="switch">
            <input type="checkbox" checked={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
            <span className="slider-round"></span>
          </label>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <h3>Biometric Login</h3>
            <p>Use FaceID or Fingerprint to login.</p>
          </div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider-round"></span>
          </label>
        </div>
      </div>

      <div className="security-section">
        <div className="section-header">
          <Key className="text-primary" />
          <h2>Password</h2>
        </div>
        <form className="password-form">
          <input type="password" placeholder="Current Password" />
          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm New Password" />
          <button className="action-btn-primary">Update Password</button>
        </form>
      </div>
      </div>
    </div>
  );
}