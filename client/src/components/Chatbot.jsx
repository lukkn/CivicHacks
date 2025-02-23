import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chatbot-container">
      <div className={`chatbot-icon ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
        <img src="user.svg" alt="chatbot"/>
      </div>
      {isOpen && (
        <div className="chatbot-interface">
          <div className="chatbot-header">
            <h1>Project Assistant</h1>
          </div>
          <div className="chatbot-body">
            <p>How can I help you today?</p>
            <input type="text" placeholder="Type your message..." />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;