import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/91${companyData.whatsapp.phone}?text=${encodeURIComponent(
    companyData.whatsapp.defaultMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Contact Poorna Associates on WhatsApp"
      title="Chat with Poorna Associates on WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
}
