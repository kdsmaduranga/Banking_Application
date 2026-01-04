import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ChevronRight, Bot } from 'lucide-react';
// Styles are defined in src/index.css under "AI Assistant Component Styles"

const ChatBot = ({ onNavigate, isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hello! I'm the GenZBank Chatbot, your AI banking assistant. How can I help you today?", 
      sender: 'assistant' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const simulateAIResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('loan') || lowerQuery.includes('apply')) {
      return {
        text: "You can apply for loans directly through our Applications page. Would you like to go there?",
        action: 'applications',
        actionText: "Go to Applications"
      };
    } else if (lowerQuery.includes('rate') || lowerQuery.includes('interest')) {
      return {
        text: "Our current interest rates are quite competitive! You can view the full list on our Rates & Tariffs page.",
        action: 'rates',
        actionText: "View Rates"
      };
    } else if (lowerQuery.includes('contact') || lowerQuery.includes('support') || lowerQuery.includes('help')) {
      return {
        text: "Our support team is available 24/7. You can contact them via the Support page.",
        action: 'support',
        actionText: "Contact Support"
      };
    } else if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('genz')) {
      return { text: "Hi there! I'm the GenZBank Chatbot. Ask me about loans, rates, or your account." };
    }
    return { text: "I'm processing your request... I can help you navigate the app or answer basic banking questions." };
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user'
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate "Chat with Chai" AI processing and response
    // In a real implementation, you would link with the Chai API here
    try {
      // Example: const response = await fetch('https://api.chatwithchai.com/v1/chat', { ... });
      
      setTimeout(() => {
        const response = simulateAIResponse(userMessage.text);
        const aiMessage = {
          id: Date.now() + 1,
          text: response.text,
          sender: 'assistant',
          action: response.action,
          actionText: response.actionText
        };
        setMessages((prev) => [...prev, aiMessage]);
      }, 1000);
    } catch (error) {
      console.error("Failed to link with Chat with Chai:", error);
    }
  };

  const handleActionClick = (action) => {
    if (onNavigate) {
      onNavigate(action);
      // setIsOpen(false); // Optional: close chat on navigation
    }
  };

  return (
    <div className="ai-float-widget-wrapper">
      {isOpen ? (
        <div className="ai-chat-open">
          <div className="ai-assistant">
            {/* Header */}
            <div className="ai-assistant-header">
              <div className="ai-assistant-title-group">
                {/* GenZ Bot Icon */}
                <Bot size={24} style={{ marginRight: '8px' }} />
                <h3 className="ai-assistant-title">GenZBank Chatbot</h3>
              </div>
              <button 
                className="ai-assistant-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="ai-assistant-messages custom-scrollbar">
              {messages.map((msg) => (
                <div key={msg.id} className={`message-container ${msg.sender}`}>
                  <div className={`message-bubble ${msg.sender === 'user' ? 'user-bubble' : 'assistant-bubble'}`}>
                    {msg.text}
                    {msg.action && (
                      <button 
                        className="ai-action-btn"
                        style={{ marginTop: '0.5rem', backgroundColor: '#2563eb', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: '0.75rem' }}
                        onClick={() => handleActionClick(msg.action)}
                      >
                        {msg.actionText} <ChevronRight size={12} style={{ marginLeft: '4px' }} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form className="ai-assistant-input-area" onSubmit={handleSendMessage}>
              <input
                type="text"
                className="ai-assistant-input"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit" className="ai-assistant-send-btn">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button 
          className="ai-chat-button-redesigned" 
          onClick={() => setIsOpen(true)}
          aria-label="Open GenZBank Chatbot"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            background: '#4a00e0',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(74, 0, 224, 0.4)',
            cursor: 'pointer',
            zIndex: 1000,
            transition: 'all 0.3s ease'
          }}
        >
          <Bot size={24} />
          <span>GenZBank Chatbot</span>
        </button>
      )}
    </div>
  );
};

export default ChatBot;