import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = ({ phoneNumber }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ensure the button is visible after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [phoneNumber]);

  const openWhatsApp = () => {
    try {
      // Remove any non-numeric characters and ensure proper format for WhatsApp API
      const cleanNumber = phoneNumber.replace(/\D/g, '');
      const url = `https://wa.me/${cleanNumber}`;
      window.open(url, "_blank");
    } catch (error) {
      // Error opening WhatsApp
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      style={{ 
        position: 'fixed', 
        bottom: '24px', 
        right: '24px', 
        zIndex: 9999,
        pointerEvents: 'auto',
        width: '64px',
        height: '64px'
      }}
    >
      <button
        onClick={openWhatsApp}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#10B981',
          border: 'none',
          borderRadius: '50%',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#059669';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#10B981';
          e.target.style.transform = 'scale(1)';
        }}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp style={{ width: '32px', height: '32px' }} />
      </button>
    </div>
  );
};

export default WhatsAppFloatingButton;
