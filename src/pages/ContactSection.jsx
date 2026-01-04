import React, { useState } from 'react';
import axios from 'axios';
import { Send, Mail, MessageSquare, User, CheckCircle, AlertCircle } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // null, 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await axios.post('http://127.0.0.1:8080/api/contact/send', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset status after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus('error');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Have questions or need assistance? Send us a message and our team will get back to you shortly.</p>
          
          <div className="info-item">
            <Mail className="icon" />
            <span>support@genzbank.com</span>
          </div>
          <div className="info-item">
            <MessageSquare className="icon" />
            <span>Live Chat: Available 8am - 8pm</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send a Message</h3>
          
          <div className="form-group">
            <label>Name</label>
            <div className="input-wrapper">
              <User size={18} className="input-icon" />
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Your Name" 
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <div className="input-wrapper">
              <Mail size={18} className="input-icon" />
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="your@email.com" 
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Subject</label>
            <div className="input-wrapper">
              <MessageSquare size={18} className="input-icon" />
              <input 
                type="text" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder="Topic" 
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="How can we help you?" 
              rows="4" 
              required 
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : <><Send size={18} /> Send Message</>}
          </button>

          {status === 'success' && (
            <div className="status-msg success">
              <CheckCircle size={18} /> Message sent successfully!
            </div>
          )}
          
          {status === 'error' && (
            <div className="status-msg error">
              <AlertCircle size={18} /> Failed to send. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}