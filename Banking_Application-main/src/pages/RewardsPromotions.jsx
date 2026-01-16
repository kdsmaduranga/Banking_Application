import React from 'react';
import { Gift, ShoppingBag, Plane, Coffee, ArrowLeft } from 'lucide-react';
import './RewardsPromotions.css';

export default function RewardsPromotions({ onNavigate, PAGES }) {
  const offers = [
    {
      id: 1,
      category: 'Dining',
      icon: <Coffee size={24} />,
      title: '20% Off at Starbucks',
      desc: 'Get 20% off on all beverages when you pay with your GenZ Debit Card.',
      validity: 'Valid until Dec 31',
      color: '#e0f2fe',
      textColor: '#0369a1'
    },
    {
      id: 2,
      category: 'Shopping',
      icon: <ShoppingBag size={24} />,
      title: '15% Cashback on Amazon',
      desc: 'Shop your favorites and get instant cashback credited to your account.',
      validity: 'Valid until Nov 30',
      color: '#fce7f3',
      textColor: '#be185d'
    },
    {
      id: 3,
      category: 'Travel',
      icon: <Plane size={24} />,
      title: 'Flight Upgrades',
      desc: 'Complimentary business class upgrade on partner airlines.',
      validity: 'Valid until Jan 15',
      color: '#dcfce7',
      textColor: '#15803d'
    }
  ];

  return (
    <div className="rewards-page middle-content-main">
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <button className="back-btn" onClick={() => onNavigate(PAGES.DASHBOARD)}>
          <ArrowLeft size={20} /> Back
        </button>
        <h1 className="page-title">Rewards & Promotions</h1>
        <p className="page-subtitle">Exclusive deals just for you</p>
      </div>

      <div className="content-wrapper" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="rewards-content">
        {/* Hero Banner */}
        <div className="rewards-hero">
          <div className="hero-text">
            <h2>Platinum Loyalty</h2>
            <p>You have <strong>2,450</strong> points available to redeem.</p>
            <button className="redeem-btn">Redeem Now</button>
          </div>
          <Gift size={80} className="hero-icon" />
        </div>

        <h3>Exclusive Offers for You</h3>
        <div className="offers-grid">
          {offers.map(offer => (
            <div key={offer.id} className="offer-card">
              <div className="offer-header" style={{ backgroundColor: offer.color, color: offer.textColor }}>
                {offer.icon}
                <span>{offer.category}</span>
              </div>
              <div className="offer-body">
                <h4>{offer.title}</h4>
                <p>{offer.desc}</p>
                <span className="validity">{offer.validity}</span>
                <button className="claim-btn">View Details</button>
              </div>
            </div>
          ))}
        </div>

        <div className="promo-banner">
          <div className="promo-content">
            <h3>Refer a Friend</h3>
            <p>Earn LKR 1,000 for every friend who opens a GenZ account.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}