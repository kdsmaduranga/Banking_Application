import React, { useState } from 'react';
import { ArrowLeft, Search, MessageCircle, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import './SupportPage.css';

export default function SupportPage({ onNavigate, PAGES }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { q: "How do I reset my password?", a: "Go to Settings > Security & Login > Change Password. If you are locked out, use the 'Forgot Password' link on the login screen." },
    { q: "What are the daily transfer limits?", a: "The default daily limit is LKR 100,000. You can request to increase this limit by visiting a branch or calling our hotline." },
    { q: "How do I report a lost card?", a: "Immediately go to the 'Cards' section in your dashboard and toggle 'Freeze Card'. Then contact support to request a replacement." },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="page-container support-page">
      <header className="page-header">
        <button className="back-btn" onClick={() => onNavigate(PAGES.DASHBOARD)}>
          <ArrowLeft />
        </button>
        <h1>Help & Support</h1>
      </header>

      <div className="support-content">
        <div className="search-box">
          <Search className="search-icon" size={20} />
          <input type="text" placeholder="How can we help you?" />
        </div>

        <section className="contact-options">
          <div className="contact-card">
            <MessageCircle className="contact-icon" />
            <h3>Live Chat</h3>
            <p>Chat with our AI or an agent.</p>
            <button className="contact-btn">Start Chat</button>
          </div>
          <div className="contact-card">
            <Phone className="contact-icon" />
            <h3>Call Us</h3>
            <p>24/7 Hotline: 1332</p>
            <button className="contact-btn">Call Now</button>
          </div>
          <div className="contact-card">
            <Mail className="contact-icon" />
            <h3>Email</h3>
            <p>support@genzbank.com</p>
            <button className="contact-btn">Send Email</button>
          </div>
        </section>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleFaq(index)}>
                <div className="faq-question">
                  <span>{item.q}</span>
                  {activeIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                {activeIndex === index && <div className="faq-answer">{item.a}</div>}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}