import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatButton = ({ phoneNumber }: { phoneNumber: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="mr-4 bg-white text-green-600 px-4 py-2 rounded-lg shadow-lg animate-fadeIn">
          Contact Us
        </div>
      )}
      <button
        onClick={handleClick}
        className="p-4 bg-green-500 rounded-full shadow-lg transition-all duration-300 hover:shadow-green-500/50 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </button>
    </div>
  );
};

export default WhatsAppFloatButton;