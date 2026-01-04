import React, { useState } from 'react';
import { Search, FileText, Download, ExternalLink } from 'lucide-react';
import Navbar from '../Navbar';
import './QuickLinksPage.css'; 

export default function QuickLinksPage({ onNavigate, PAGES }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const links = [
    { id: 1, title: 'Correspondent Banks', category: 'General', type: 'link', desc: 'List of our global banking partners.' },
    { id: 2, title: 'CBSL - Customer Charter', category: 'Compliance', type: 'pdf', desc: 'Rights and responsibilities of customers.' },
    { id: 3, title: 'Complaints and Grievances', category: 'Support', type: 'link', desc: 'Submit a formal complaint.' },
    { id: 4, title: 'Registering US Persons', category: 'Compliance', type: 'pdf', desc: 'FATCA compliance requirements.' },
    { id: 5, title: 'Policies & Procedures', category: 'General', type: 'pdf', desc: 'Bank operational policies.' },
    { id: 6, title: 'Properties for Sale', category: 'General', type: 'link', desc: 'Real estate owned by the bank.' },
    { id: 7, title: 'General Terms and Conditions', category: 'Compliance', type: 'pdf', desc: 'Updated T&C for all accounts.' },
  ];

  const categories = ['All', 'General', 'Compliance', 'Support'];

  const filteredLinks = links.filter(link => 
    (activeCategory === 'All' || link.category === activeCategory) &&
    link.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="quick-links-page middle-content-main">
      <Navbar onNavigate={onNavigate} PAGES={PAGES} />
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <h1 className="page-title">Quick Links & Resources</h1>
        <p className="page-subtitle">Access important documents and information</p>
      </div>

      <div className="content-wrapper">
        {/* Search and Filter Section */}
        <div className="search-filter-container">
          <div className="search-box">
            <Search size={20} color="#6b7280" />
            <input 
              type="text" 
              placeholder="Search documents and links..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="category-tabs">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="links-grid">
          {filteredLinks.map(link => (
            <div key={link.id} className="resource-card">
              <div className="card-header">
                <div className={`icon-box ${link.type === 'pdf' ? 'pdf' : 'link'}`}>
                  {link.type === 'pdf' ? <FileText size={24} /> : <ExternalLink size={24} />}
                </div>
                <span className="category-badge">{link.category}</span>
              </div>
              
              <h3 className="resource-title">{link.title}</h3>
              <p className="resource-desc">{link.desc}</p>
              
              <button className="action-btn">
                {link.type === 'pdf' ? <><Download size={16} /> Download PDF</> : <><ExternalLink size={16} /> Visit Page</>}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}