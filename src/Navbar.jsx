import React, { useState } from 'react';
import { Menu, X, ChevronDown, Briefcase } from 'lucide-react';

const Navbar = ({ onNavigate, PAGES }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Personal Banking');

  const navItems = [
    'Personal Banking',
    'Business Banking',
    'Non Resident Banking',
    'Services',
    'Unique Features',
  ];

  const topLinks = [
    { name: 'About us', page: PAGES.ABOUT },
    { name: 'Branches/ATMs', page: PAGES.BRANCHES },
    { name: 'Investors', page: PAGES.INVESTORS },
    { name: 'News', page: PAGES.NEWS },
    { name: 'Careers', page: PAGES.CAREERS },
    { name: 'Contact us', page: PAGES.CONTACT },
    { name: 'Overseas Operations', page: PAGES.OVERSEAS },
  ];

  const handleNavClick = (item) => {
    setActiveTab(item);
    if (item === 'Personal Banking') {
      onNavigate(PAGES.HOME);
    } else if (item === 'Business Banking') {
      onNavigate(PAGES.BUSINESS);
    } else if (item === 'Non Resident Banking') {
      onNavigate(PAGES.NRB);
    } else if (item === 'Services') {
      onNavigate(PAGES.SERVICES);
    } else if (item === 'Unique Features') {
      onNavigate(PAGES.UNIQUE_FEATURES);
    }
  };

  return (
    <nav className="navbar-container">
      {/* Top Bar */}
      <div className="navbar-topbar-wrapper">
        <div className="navbar-content-wrapper navbar-topbar">
          <div className="navbar-topbar-links">
            {topLinks.map((item) => (
              <button 
                key={item.name} 
                onClick={() => onNavigate(item.page)} 
                className="navbar-topbar-link"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 'inherit', color: 'inherit', padding: '0 10px' }}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="navbar-topbar-actions">
            <a href="#" className="navbar-topbar-link lang-select">
              <span className="mr-1">🏳️</span> EN <ChevronDown size={12} className="ml-05" />
            </a>
            <a href="#" className="navbar-topbar-link accessibility-link">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon-4 icon-w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0v4m-4 5h4m-4 0v4m-4-4v4m-4-4h4m-4 0v4m-4-4h4m-4 0v4m-4-4h4m-4 0v4" />
              </svg>
              Accessibility Options
            </a>
            <button 
              onClick={() => onNavigate(PAGES.CREATE_ACCOUNT)} 
              className="navbar-online-banking-btn"
              style={{ marginRight: '10px', background: 'linear-gradient(135deg, #007bff 0%, #00d2ff 100%)', border: 'none' }}
            >
              Open Account
            </button>
            <button onClick={() => onNavigate(PAGES.LOGIN)} className="navbar-online-banking-btn">
              Online Banking
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="navbar-content-wrapper navbar-main">
        <div className="navbar-flex-container">
          {/* Logo and Main Links */}
          <div className="navbar-logo-links">
            <div onClick={() => onNavigate(PAGES.HOME)} className="navbar-logo clickable">
              <span className="logo-color-accent">GenZ</span>Bank
            </div>
            <div className="navbar-links-desktop">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`nav-item ${
                    activeTab === item
                      ? 'active'
                      : ''
                  }`}
                >
                  {item}
                  {activeTab === item && (
                    <span className="nav-item-underline"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="navbar-actions-desktop">
            <button 
              className="navbar-digital-banking-btn"
              onClick={() => onNavigate(PAGES.UNIQUE_FEATURES)}
            >
              Unique Features
            </button>
            <button 
              className="navbar-commercial-btn"
              onClick={() => onNavigate(PAGES.ADVANCED_BANKING)}
            >
              <Briefcase size={16} className="mr-1" /> Advanced Banking
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="navbar-mobile-menu-btn-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-mobile-menu-btn"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="navbar-mobile-menu-panel">
          <div className="navbar-mobile-links">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => { handleNavClick(item); setIsOpen(false); }}
                className="navbar-mobile-link"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="navbar-mobile-actions">
            <div className="navbar-mobile-actions-group">
              <button 
                onClick={() => { onNavigate(PAGES.CREATE_ACCOUNT); setIsOpen(false); }} 
                className="navbar-mobile-digital-btn"
                style={{ background: 'linear-gradient(135deg, #007bff 0%, #00d2ff 100%)', border: 'none', color: 'white', marginBottom: '10px' }}
              >
                Open Account
              </button>
              <button 
                className="navbar-mobile-digital-btn"
                onClick={() => { onNavigate(PAGES.UNIQUE_FEATURES); setIsOpen(false); }}
              >
                Unique Features
              </button>
              <button 
                className="navbar-mobile-commercial-btn"
                onClick={() => { onNavigate(PAGES.ADVANCED_BANKING); setIsOpen(false); }}
              >
                Advanced Banking
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;