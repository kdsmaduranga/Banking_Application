import React, { useState } from 'react';
import { MessageSquare, Bot, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

import Home from "./pages/home";
import GenZCreateAccountPage from './pages/createaccount'; // For creating new accounts
import LoginPage from './pages/login'; // The new login page
import Dashboard from './pages/dashboard'; // The new online banking dashboard
import TransferMoney from './pages/TransferMoney';
import PayBills from './pages/PayBills';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import ManageCards from './pages/ManageCards';
import Security from './pages/Security';
import CurrencyConverter from './pages/CurrencyConverter';
import RewardsPromotions from './pages/RewardsPromotions';
import RatesTariffs from './pages/RatesTariffs';
import ApplicationsPage from './pages/ApplicationsPage';
import ImportantNotices from './pages/ImportantNotices';
import AboutUsPage from './pages/AboutUsPage';
import BranchesPage from './pages/BranchesPage';
import InvestorsPage from './pages/InvestorsPage';
import NewsPage from './pages/NewsPage';
import CareersPage from './pages/CareersPage';
import ContactUsPage from './pages/ContactUsPage';
import OverseasPage from './pages/OverseasPage';
import QuickLinksPage from './pages/QuickLinksPage';
import ManagerLogin from './pages/ManagerLogin';
import ManagerDashboard from './pages/ManagerDashboard';
import SavingsAccounts from './pages/SavingsAccounts';
import LoansPage from './pages/LoansPage';
import CardsProductsPage from './pages/CardsProductsPage';
import TermDepositsPage from './pages/TermDepositsPage';
import CurrentAccountsPage from './pages/CurrentAccountsPage';
import UniqueFeaturesPage from './UniqueFeaturesPage';
import AdvancedBankingPage from './AdvancedBankingPage';

import BusinessBanking from './BusinessBanking';
import NonResidentBanking from './NonResidentBanking';
import ServicesPage from './ServicesPage';
import SupportPage from './SupportPage';
import SettingsPage from './SettingsPage';
import ChatBot from './ChatBot';
import Navbar from './Navbar';

// Define PAGE constants for clearer state management
const PAGES = {
  HOME: 'home',
  CREATE_ACCOUNT: 'createAccount',
  LOGIN: 'login',
  DASHBOARD: 'dashboard',
  BUSINESS: 'business',
  NRB: 'nrb',
  SERVICES: 'services',
  SUPPORT: 'support',
  SETTINGS: 'settings',
  ABOUT: 'about',
  BRANCHES: 'branches',
  INVESTORS: 'investors',
  NEWS: 'news',
  CAREERS: 'careers',
  CONTACT: 'contact',
  OVERSEAS: 'overseas',
  QUICK_LINKS: 'quickLinks',
  SAVINGS: 'savings',
  LOANS: 'loans',
  CARDS_PRODUCTS: 'cardsProducts',
  DEPOSITS: 'deposits',
  CURRENT: 'current',
  UNIQUE_FEATURES: 'uniqueFeatures',
  ADVANCED_BANKING: 'advancedBanking',
  PAY_BILLS: 'payBills',
  TRANSFER: 'transfer',
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
  CARDS: 'cards',
  SECURITY: 'security',
  MANAGER_LOGIN: 'managerLogin',
  MANAGER_DASHBOARD: 'managerDashboard',
};

// --- Footer Component (No changes needed) ---
const Footer = ({ onNavigate, onOpenChat }) => {
  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Correspondent Banks', page: PAGES.QUICK_LINKS },
        { name: 'CBSL - Customer Charter', page: PAGES.QUICK_LINKS },
        { name: 'Complaints and Grievances', page: PAGES.QUICK_LINKS },
        { name: 'Registering US Persons', page: PAGES.QUICK_LINKS },
        { name: 'Policies & Procedures', page: PAGES.QUICK_LINKS },
        { name: 'Properties for Sale', page: PAGES.QUICK_LINKS },
        { name: 'General Terms and Conditions', page: PAGES.QUICK_LINKS },
      ],
    },
    {
      title: 'About Us',
      links: [
        { name: 'Our History', page: PAGES.ABOUT },
        { name: 'Achievements', page: PAGES.ABOUT },
        { name: 'Social Responsibility', page: PAGES.ABOUT },
        { name: 'Board of Directors', page: PAGES.ABOUT },
        { name: 'Corporate Management', page: PAGES.ABOUT },
        { name: 'Careers', page: PAGES.CAREERS },
        { name: 'Latest Market Watch Report', page: PAGES.NEWS },
      ],
    },
    {
      title: 'Personal Banking',
      links: [
        { name: 'Savings Accounts', page: PAGES.SAVINGS },
        { name: 'Deposits', page: PAGES.DEPOSITS },
        { name: 'Current Accounts', page: PAGES.CURRENT },
        { name: 'Cards', page: PAGES.CARDS_PRODUCTS },
        { name: 'Loans', page: PAGES.LOANS }
      ],
    },
    {
      title: 'Business Banking',
      links: [
        { name: 'Corporate Banking', page: PAGES.BUSINESS },
        { name: 'Trade Finance', page: PAGES.BUSINESS },
        { name: 'Treasury', page: PAGES.BUSINESS },
        { name: 'SME', page: PAGES.BUSINESS },
        { name: 'Investment Banking', page: PAGES.BUSINESS }
      ],
    },
    {
      title: 'Non Resident Banking',
      links: [
        { name: 'Savings Accounts', page: PAGES.NRB },
        { name: 'Deposits', page: PAGES.NRB },
        { name: 'Loans', page: PAGES.NRB },
        { name: 'Investments', page: PAGES.NRB },
        { name: 'Sending Money', page: PAGES.NRB }
      ],
    },
  ];

  const socialIcons = [
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com' },
    { icon: <Twitter size={20} />, href: 'https://www.twitter.com' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com' },
    { icon: <Youtube size={20} />, href: 'https://www.youtube.com' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com' },
  ];

  return (
    <footer className="footer-container">
      <div className="navbar-content-wrapper content-wrapper">
        {/* Social Links */}
        <div className="footer-social-links">
          <span className="footer-social-title">Follow us:</span>
          {socialIcons.map((item, index) => (
            <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="footer-social-icon-link">
              {item.icon}
            </a>
          ))}
        </div>

        {/* Footer Links Grid */}
        <div className="footer-links-grid">
          {footerLinks.map((section, index) => (
            <div key={index} className="footer-links-column">
              <h4 className="footer-links-title">{section.title}</h4>
              <ul className="footer-links-list">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button onClick={() => onNavigate(link.page)} className="footer-link-item" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', color: '#cbd5e1' }}>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* AI Assistant Image Placeholder in Footer */}
          <div 
            className="footer-ai-placeholder" 
            onClick={onOpenChat} 
            style={{ 
              cursor: 'pointer',
              background: '#4a00e0',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '30px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(74, 0, 224, 0.4)',
              transition: 'all 0.3s ease',
              marginTop: '10px',
              width: 'fit-content'
            }}
          >
            <Bot size={24} />
            <span>GenZBank Chatbot</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} BankConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


// --- Main App Component (Now manages page state) ---
const App = () => {
  // State to manage which 'page' is currently displayed (replacing React Router)
  const [currentPage, setCurrentPage] = useState(PAGES.HOME); 
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleNavigate = (page, userData) => {
    setCurrentPage(page);
    if (userData) {
      setUser(userData);
    }
    window.scrollTo(0, 0);
  };

  // Function to determine which component to render
  const renderPage = () => {
    switch (currentPage) {
      case PAGES.CREATE_ACCOUNT:
        return <GenZCreateAccountPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.LOGIN:
        return <LoginPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.DASHBOARD:
        return <Dashboard user={user} onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.TRANSFER:
        return <TransferMoney onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.PAY_BILLS:
        return <PayBills onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.DEPOSIT:
        return <Deposit user={user} onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.WITHDRAW:
        return <Withdraw onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.CARDS:
        return <ManageCards onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.SECURITY:
        return <Security onNavigate={handleNavigate} PAGES={PAGES} />;
      case 'currencyConverter':
        return <CurrencyConverter onNavigate={handleNavigate} PAGES={PAGES} />;
      case 'rewards':
        return <RewardsPromotions onNavigate={handleNavigate} PAGES={PAGES} />;
      case 'rates':
        return <RatesTariffs onNavigate={handleNavigate} PAGES={PAGES} />;
      case 'applications':
        return <ApplicationsPage onNavigate={handleNavigate} />;
      case 'notices':
        return <ImportantNotices onNavigate={handleNavigate} />;
      case PAGES.BUSINESS:
        return <BusinessBanking onNavigate={handleNavigate} />;
      case PAGES.NRB:
        return <NonResidentBanking onNavigate={handleNavigate} />;
      case PAGES.SERVICES:
        return <ServicesPage onNavigate={handleNavigate} />;
      case PAGES.SUPPORT:
        return <SupportPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.SETTINGS:
        return <SettingsPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.ABOUT:
        return <AboutUsPage onNavigate={handleNavigate} />;
      case PAGES.BRANCHES:
        return <BranchesPage onNavigate={handleNavigate} />;
      case PAGES.INVESTORS:
        return <InvestorsPage onNavigate={handleNavigate} />;
      case PAGES.NEWS:
        return <NewsPage onNavigate={handleNavigate} />;
      case PAGES.CAREERS:
        return <CareersPage onNavigate={handleNavigate} />;
      case PAGES.CONTACT:
        return <ContactUsPage onNavigate={handleNavigate} />;
      case PAGES.OVERSEAS:
        return <OverseasPage onNavigate={handleNavigate} />;
      case PAGES.QUICK_LINKS:
        return <QuickLinksPage onNavigate={handleNavigate} />;
      case PAGES.SAVINGS:
        return <SavingsAccounts onNavigate={handleNavigate} />;
      case PAGES.LOANS:
        return <LoansPage onNavigate={handleNavigate} />;
      case PAGES.CARDS_PRODUCTS:
        return <CardsProductsPage onNavigate={handleNavigate} />;
      case PAGES.DEPOSITS:
        return <TermDepositsPage onNavigate={handleNavigate} />;
      case PAGES.CURRENT:
        return <CurrentAccountsPage onNavigate={handleNavigate} />;
      case PAGES.UNIQUE_FEATURES:
        return <UniqueFeaturesPage onNavigate={handleNavigate} />;
      case PAGES.ADVANCED_BANKING:
        return <AdvancedBankingPage onNavigate={handleNavigate} />;
      case PAGES.MANAGER_LOGIN:
        return <ManagerLogin onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.MANAGER_DASHBOARD:
        return <ManagerDashboard onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.HOME:
      default:
        return <Home onNavigate={handleNavigate} PAGES={PAGES} />;
    }
  };

  return (
    <div className="app-container">
      {/* Pass the navigation function down to Navbar */}
      <Navbar onNavigate={handleNavigate} PAGES={PAGES} /> 

      {/* Conditionally render the selected page */}
      {renderPage()}

      <Footer onNavigate={handleNavigate} onOpenChat={() => setIsChatOpen(true)} />

      {/* Floating AI Assistant Button/Widget */}
      <ChatBot onNavigate={handleNavigate} isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
    </div>
  );
};

export default App; // Export the main App component