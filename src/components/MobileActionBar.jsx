import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, MessageCircle, FileText } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function MobileActionBar() {
  const whatsappUrl = `https://wa.me/91${companyData.whatsapp.phone}?text=${encodeURIComponent(
    companyData.whatsapp.defaultMessage
  )}`;

  return (
    <aside className="mobile-action-bar" aria-label="Quick contact mobile bar">
      <a
        href={`tel:${companyData.phones[0].raw}`}
        className="mobile-action-btn mobile-action-call"
        aria-label="Call Poorna Associates directly"
      >
        <PhoneCall size={16} />
        <span>Call</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-action-btn mobile-action-whatsapp"
        aria-label="Chat on WhatsApp with Poorna Associates"
      >
        <MessageCircle size={16} />
        <span>WhatsApp</span>
      </a>

      <Link
        to="/contact#quote"
        className="mobile-action-btn mobile-action-quote"
        aria-label="Request a quotation"
      >
        <FileText size={16} />
        <span>Get Quote</span>
      </Link>
    </aside>
  );
}
