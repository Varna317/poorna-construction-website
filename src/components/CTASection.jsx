import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, MessageCircle, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function CTASection() {
  const whatsappUrl = `https://wa.me/91${companyData.whatsapp.phone}?text=${encodeURIComponent(
    companyData.whatsapp.defaultMessage
  )}`;

  return (
    <section className="py-5 bg-dark-poorna position-relative overflow-hidden">
      <div className="container py-4 position-relative z-1">
        <div className="row align-items-center justify-content-between g-4">
          <div className="col-lg-7 text-center text-lg-start">
            <span className="eyebrow-badge eyebrow-light mb-2">Get In Touch</span>
            <h2 className="display-6 fw-bold text-white mb-2">
              Ready to Build Smarter?
            </h2>
            <p className="lead text-light mb-0" style={{ fontSize: '1.1rem' }}>
              Talk to Poorna Associates about your construction, solar or integrated infrastructure requirements.
            </p>
          </div>

          <div className="col-lg-5">
            <div className="d-flex flex-column flex-sm-row justify-content-lg-end align-items-center gap-3">
              <Link to="/contact#quote" className="btn btn-poorna-red w-100 w-sm-auto">
                <span>Get a Quote</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${companyData.phones[0].raw}`}
                className="btn btn-poorna-outline-light w-100 w-sm-auto"
              >
                <PhoneCall size={16} />
                <span>Call Now</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success text-white w-100 w-sm-auto d-inline-flex align-items-center justify-content-center gap-2 fw-semibold"
                style={{ backgroundColor: '#25d366', borderColor: '#25d366' }}
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
