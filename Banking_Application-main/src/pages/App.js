import React, { useState } from 'react';

// Import Pages
import Home from './pages/home';
import GenZLoginPage from './pages/login';
import GenZCreateAccountPage from './pages/createaccount';
import Dashboard from './pages/dashboard';
import ManagerLogin from './pages/ManagerLogin';
import ManagerDashboard from './pages/ManagerDashboard';

// Import Feature Pages
import TransferMoney from './pages/TransferMoney';
import PayBills from './pages/PayBills';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import ManageCards from './pages/ManageCards';
import Security from './pages/Security';
import RatesTariffs from './pages/RatesTariffs';
import CurrencyConverter from './pages/CurrencyConverter';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';
import NewsPage from './pages/NewsPage';
import BranchesPage from './pages/BranchesPage';
import TermDepositsPage from './pages/TermDepositsPage';
import CareersPage from './pages/CareersPage';
import InvestorsPage from './pages/InvestorsPage';
import QuickLinksPage from './pages/QuickLinksPage';
import ApplicationsPage from './pages/ApplicationsPage';
import RewardsPromotions from './pages/RewardsPromotions';
import SavingsAccounts from './pages/SavingsAccounts';
import LoansPage from './pages/LoansPage';
import CardsProductsPage from './pages/CardsProductsPage';
import CurrentAccountsPage from './pages/CurrentAccountsPage';
import OverseasPage from './pages/OverseasPage';
import ImportantNotices from './pages/ImportantNotices';

// Define Page Keys
const PAGES = {
  HOME: 'home',
  LOGIN: 'login',
  CREATE_ACCOUNT: 'createAccount',
  DASHBOARD: 'dashboard',
  
  // Manager Portal Keys
  MANAGER_LOGIN: 'managerLogin',
  MANAGER_DASHBOARD: 'managerDashboard',
  
  // Dashboard Features
  TRANSFER: 'transfer',
  PAY_BILLS: 'payBills',
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
  CARDS: 'cards',
  SECURITY: 'security',
  SETTINGS: 'settings',
  SUPPORT: 'support',
  
  // Public Pages
  RATES: 'rates',
  CURRENCY_CONVERTER: 'currencyConverter',
  CONTACT: 'contact',
  ABOUT: 'about',
  NEWS: 'news',
  BRANCHES: 'branches',
  TERM_DEPOSITS: 'deposits',
  CAREERS: 'careers',
  INVESTORS: 'investors',
  QUICK_LINKS: 'quickLinks',
  APPLICATIONS: 'applications',
  REWARDS: 'rewards',
  SAVINGS: 'savings',
  LOANS: 'loans',
  CURRENT_ACCOUNTS: 'current',
  CARDS_PRODUCTS: 'cards-products',
  OVERSEAS: 'overseas',
  NOTICES: 'notices'
};

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);
  const [user, setUser] = useState(null);

  const handleNavigate = (page, userData) => {
    setCurrentPage(page);
    if (userData) setUser(userData);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      // Main Flows
      case PAGES.HOME: return <Home onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.LOGIN: return <GenZLoginPage onNavigate={handleNavigate} />;
      case PAGES.CREATE_ACCOUNT: return <GenZCreateAccountPage onNavigate={handleNavigate} />;
      case PAGES.DASHBOARD: return <Dashboard user={user} onNavigate={handleNavigate} PAGES={PAGES} />;
      
      // Manager Portal Flow
      case PAGES.MANAGER_LOGIN: return <ManagerLogin onNavigate={handleNavigate} />;
      case PAGES.MANAGER_DASHBOARD: return <ManagerDashboard onNavigate={handleNavigate} />;
      
      // Dashboard Features
      case PAGES.TRANSFER: return <TransferMoney onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.PAY_BILLS: return <PayBills onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.DEPOSIT: return <Deposit onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.WITHDRAW: return <Withdraw onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.CARDS: return <ManageCards onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.SECURITY: return <Security onNavigate={handleNavigate} PAGES={PAGES} />;
      
      // Public Pages
      case PAGES.RATES: return <RatesTariffs onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.CURRENCY_CONVERTER: return <CurrencyConverter onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.CONTACT: return <ContactUsPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.ABOUT: return <AboutUsPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.NEWS: return <NewsPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.BRANCHES: return <BranchesPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.TERM_DEPOSITS: return <TermDepositsPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.CAREERS: return <CareersPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.INVESTORS: return <InvestorsPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.QUICK_LINKS: return <QuickLinksPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.APPLICATIONS: return <ApplicationsPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.REWARDS: return <RewardsPromotions onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.SAVINGS: return <SavingsAccounts onNavigate={handleNavigate} />;
      case PAGES.LOANS: return <LoansPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.CURRENT_ACCOUNTS: return <CurrentAccountsPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.CARDS_PRODUCTS: return <CardsProductsPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.OVERSEAS: return <OverseasPage onNavigate={handleNavigate} PAGES={PAGES} />;
      case PAGES.NOTICES: return <ImportantNotices onNavigate={handleNavigate} PAGES={PAGES} />;
      
      default: return <Home onNavigate={handleNavigate} PAGES={PAGES} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;