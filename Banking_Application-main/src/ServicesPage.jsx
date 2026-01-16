import React, { useState } from 'react';
import { ArrowLeft, FileText, Lock, CreditCard, MapPin, Search, BookOpen, AlertCircle } from 'lucide-react';
import './ServicesPage.css';

export default function ServicesPage({ onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    { id: 1, title: 'Cheque Book Request', icon: <BookOpen />, desc: 'Order a new 25 or 50 leaf cheque book.' },
    { id: 2, title: 'Stop Payment', icon: <AlertCircle />, desc: 'Stop a cheque payment immediately.' },
    { id: 3, title: 'Statement Request', icon: <FileText />, desc: 'Download past 6 months statements.' },
    { id: 4, title: 'Safe Deposit Locker', icon: <Lock />, desc: 'Check availability and book a locker.' },
    { id: 5, title: 'Card Replacement', icon: <CreditCard />, desc: 'Report damage and request new card.' },
    { id: 6, title: 'Branch Locator', icon: <MapPin />, desc: 'Find the nearest GenZ branch or ATM.' },
  ];

  const filteredServices = services.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container services-page">
      <header className="page-header">
        <button className="back-btn" onClick={() => onNavigate('home')}>
          <ArrowLeft />
        </button>
        <h1>General Services</h1>
      </header>

      <div className="services-content">
        <div className="search-bar-wrapper">
          <Search className="search-icon" size={20} />
          <input 
            type="text" 
            placeholder="Search for a service..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="services-grid">
          {filteredServices.map(service => (
            <div key={service.id} className="service-card" onClick={() => alert(`Requesting: ${service.title}`)}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="no-results">
            <p>No services found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}