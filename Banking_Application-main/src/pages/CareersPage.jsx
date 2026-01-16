import React from 'react';
import { ArrowLeft, Briefcase, MapPin } from 'lucide-react';

export default function CareersPage({ onNavigate }) {
  const jobs = [
    { title: 'Senior Full Stack Developer', dept: 'Engineering', location: 'Remote / Colombo' },
    { title: 'Product Manager - Mobile', dept: 'Product', location: 'Colombo' },
    { title: 'Customer Success Specialist', dept: 'Support', location: 'Kandy' },
    { title: 'Data Scientist', dept: 'Analytics', location: 'Remote' },
  ];

  return (
    <div className="page-container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button className="back-btn" onClick={() => onNavigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1e3a8a' }}>Join Our Team</h1>
      </header>

      <div style={{ display: 'grid', gap: '1rem' }}>
        {jobs.map((job, index) => (
          <div key={index} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#1f2937' }}>{job.title}</h3>
              <div style={{ display: 'flex', gap: '1rem', color: '#6b7280', fontSize: '0.9rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Briefcase size={14} /> {job.dept}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {job.location}</span>
              </div>
            </div>
            <button style={{ background: '#2563eb', color: 'white', border: 'none', padding: '0.5rem 1.5rem', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}