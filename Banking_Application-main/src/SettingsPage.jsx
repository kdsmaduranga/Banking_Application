import React, { useState } from 'react';
import { ArrowLeft, User, Bell, Moon, Globe, Shield, ChevronRight } from 'lucide-react';
import './SettingsPage.css';

export default function SettingsPage({ onNavigate, PAGES }) {
  const [notifications, setNotifications] = useState({
    push: true,
    email: true,
    marketing: false
  });

  const [darkMode, setDarkMode] = useState(false);

  const toggleNotif = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="page-container settings-page">
      <header className="page-header">
        <button className="back-btn" onClick={() => onNavigate(PAGES.DASHBOARD)}>
          <ArrowLeft />
        </button>
        <h1>Settings & Preferences</h1>
      </header>

      <div className="settings-content">
        {/* Account Section */}
        <section className="settings-section">
          <h2>Account</h2>
          <div className="setting-item clickable">
            <div className="setting-icon-wrapper"><User size={20} /></div>
            <div className="setting-info">
              <h3>Personal Information</h3>
              <p>Update your name, email, and address</p>
            </div>
            <ChevronRight size={20} className="chevron" />
          </div>
          <div className="setting-item clickable" onClick={() => onNavigate(PAGES.SECURITY)}>
            <div className="setting-icon-wrapper"><Shield size={20} /></div>
            <div className="setting-info">
              <h3>Security & Login</h3>
              <p>Change password, 2FA, and biometrics</p>
            </div>
            <ChevronRight size={20} className="chevron" />
          </div>
        </section>

        {/* Preferences Section */}
        <section className="settings-section">
          <h2>Preferences</h2>
          <div className="setting-item">
            <div className="setting-icon-wrapper"><Bell size={20} /></div>
            <div className="setting-info">
              <h3>Push Notifications</h3>
              <p>Receive alerts for transactions</p>
            </div>
            <label className="switch">
              <input type="checkbox" checked={notifications.push} onChange={() => toggleNotif('push')} />
              <span className="slider-round"></span>
            </label>
          </div>
          
          <div className="setting-item">
            <div className="setting-icon-wrapper"><Moon size={20} /></div>
            <div className="setting-info">
              <h3>Dark Mode</h3>
              <p>Switch between light and dark themes</p>
            </div>
            <label className="switch">
              <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
              <span className="slider-round"></span>
            </label>
          </div>

          <div className="setting-item clickable">
            <div className="setting-icon-wrapper"><Globe size={20} /></div>
            <div className="setting-info">
              <h3>Language</h3>
              <p>English (US)</p>
            </div>
            <ChevronRight size={20} className="chevron" />
          </div>
        </section>
      </div>
    </div>
  );
}