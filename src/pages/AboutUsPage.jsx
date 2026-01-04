import React from 'react';
import { Award, Users, History, TrendingUp, Target, Globe } from 'lucide-react';
import Navbar from '../Navbar';
import './AboutUsPage.css'; 

export default function AboutUsPage({ onNavigate, PAGES }) {
  const stats = [
    { label: 'Years of Service', value: '25+', icon: <History /> },
    { label: 'Happy Customers', value: '2M+', icon: <Users /> },
    { label: 'Branches', value: '150+', icon: <Globe /> },
    { label: 'Awards Won', value: '45', icon: <Award /> },
  ];

  const leadership = [
    { name: 'Sarah Jenkins', role: 'CEO', img: '👩‍💼' },
    { name: 'David Chen', role: 'CTO', img: '👨‍💻' },
    { name: 'Amara Perera', role: 'Head of Banking', img: '👩‍⚖️' },
  ];

  return (
    <div className="about-page middle-content-main">
      <Navbar onNavigate={onNavigate} PAGES={PAGES} />
      <div className="navbar-content-wrapper content-wrapper page-header-wrapper">
        <h1 className="page-title">About GenZ Bank</h1>
        <p className="page-subtitle">Our story and vision</p>
      </div>

      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '40px 20px', background: 'linear-gradient(135deg, #007bff 0%, #00d2ff 100%)', color: 'white', borderRadius: '0 0 20px 20px', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Banking for the Next Generation</h2>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto' }}>
          We are redefining the financial landscape with technology, transparency, and trust.
        </p>
      </div>

      <div className="content-wrapper" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '50px' }}>
          {stats.map((stat, idx) => (
            <div key={idx} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <div style={{ color: '#007bff', marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
              <h3 style={{ fontSize: '2rem', margin: '0', color: '#1f2937' }}>{stat.value}</h3>
              <p style={{ color: '#6b7280', margin: '0' }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '50px' }}>
          <div style={{ background: '#f0f9ff', padding: '30px', borderRadius: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', color: '#0369a1' }}>
              <Target size={24} />
              <h3 style={{ margin: 0 }}>Our Mission</h3>
            </div>
            <p style={{ lineHeight: '1.6', color: '#334155' }}>
              To empower individuals and businesses with accessible, secure, and innovative financial solutions that foster growth and prosperity in a digital-first world.
            </p>
          </div>
          <div style={{ background: '#fdf2f8', padding: '30px', borderRadius: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', color: '#be185d' }}>
              <TrendingUp size={24} />
              <h3 style={{ margin: 0 }}>Our Vision</h3>
            </div>
            <p style={{ lineHeight: '1.6', color: '#334155' }}>
              To be the most trusted and technologically advanced banking partner in the region, setting the standard for customer-centric financial services.
            </p>
          </div>
        </div>

        {/* Corporate Management */}
        <section style={{ marginBottom: '50px' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '25px', textAlign: 'center', color: '#1f2937' }}>Corporate Management</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            {leadership.map((leader, idx) => (
              <div key={idx} style={{ width: '250px', background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <div style={{ height: '150px', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                  {leader.img}
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 style={{ fontSize: '1.2rem', margin: '0 0 5px 0', color: '#1f2937' }}>{leader.name}</h4>
                  <p style={{ color: '#007bff', fontWeight: '600', margin: '0' }}>{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* History Timeline (Simplified) */}
        <section>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '25px', textAlign: 'center', color: '#1f2937' }}>Our Journey</h3>
          <div style={{ position: 'relative', paddingLeft: '20px', borderLeft: '2px solid #e5e7eb' }}>
            {[
              { year: '2023', title: 'Launched GenZ Digital', desc: 'Complete overhaul of online banking system.' },
              { year: '2020', title: 'Best SME Bank Award', desc: 'Recognized for supporting local businesses.' },
              { year: '2015', title: 'Global Expansion', desc: 'Opened operations in 3 new countries.' },
              { year: '1998', title: 'Foundation', desc: 'Established with a vision to serve the community.' }
            ].map((item, idx) => (
              <div key={idx} style={{ marginBottom: '30px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-26px', top: '0', width: '10px', height: '10px', background: '#007bff', borderRadius: '50%', border: '2px solid white', boxShadow: '0 0 0 2px #007bff' }}></div>
                <span style={{ background: '#dbeafe', color: '#1e40af', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>{item.year}</span>
                <h4 style={{ margin: '10px 0 5px 0', fontSize: '1.1rem' }}>{item.title}</h4>
                <p style={{ margin: '0', color: '#6b7280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}