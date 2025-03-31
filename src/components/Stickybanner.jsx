// src/components/Banner/Banner.jsx
import React from 'react';
const Banner = ({ 
  showBanner, 
  onClose,
  message = "Ready to start your learning journey?",
  actionButton = {
    text: "Download Now",
    onClick: () => {}
  },
  className = "sticky-banner"
}) => {
  return showBanner ? (
    <div className={className}>
      <button 
        className="close-banner" 
        onClick={onClose}
        aria-label="Close banner"
      >
        ×
      </button>
      <div className="banner-content">
        <p className="banner-text">{message}</p>
        <button 
          className="download-btn" 
          onClick={actionButton.onClick}
        >
          {actionButton.text}
        </button>
      </div>
    </div>
  ) : null;
};

export default Banner