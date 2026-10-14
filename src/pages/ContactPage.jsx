import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  MessageCircle, 
  PhoneCall, 
  ShieldCheck, 
  Compass
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';
import { companyData } from '../data/companyData';

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/91${companyData.whatsapp.phone}?text=${encodeURIComponent(
    companyData.whatsapp.defaultMessage
  )}`;

  return (
    <>
      <SEOHead
        title="Contact Us & Get a Quote"
        description="Contact Poorna Associates & Poorna Construction Solar in Tiruchengode, Tamil Nadu. Call 9952465692 or 9952765692 for civil construction and solar enquiries."
      />

      {/* Page Header (Deep Navy) */}
      <section className="bg-dark-poorna text-white py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-8">
              <span className="eyebrow-badge eyebrow-light mb-2">Direct Communications</span>
              <h1 className="display-5 fw-bold text-white mb-2">
                Let's Build Something Great Together.
              </h1>
              <p className="lead text-light mb-0">
                Get in touch with our civil engineers and solar consultants for estimates, structural reviews, and turnkey execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="row g-5">
            {/* Contact Details & Direct Actions */}
            <div className="col-lg-5 reveal-on-scroll">
              <span className="eyebrow-badge">Official Contact Information</span>
              <h2 className="h2 fw-bold text-primary mb-3">
                Poorna Associates
              </h2>
              <p className="text-danger fw-semibold mb-4">
                {companyData.designation} • {companyData.brand}
              </p>

              {/* Quick Action Buttons */}
              <div className="d-grid gap-2 mb-4">
                <a
                  href={`tel:${companyData.phones[0].raw}`}
                  className="btn btn-poorna-primary d-flex align-items-center justify-content-center gap-2 py-3"
                >
                  <PhoneCall size={18} />
                  <span>Call Primary: {companyData.phones[0].display}</span>
                </a>

                <a
                  href={`tel:${companyData.phones[1].raw}`}
                  className="btn btn-poorna-outline d-flex align-items-center justify-content-center gap-2 py-2.5"
                >
                  <Phone size={16} />
                  <span>Call Secondary: {companyData.phones[1].display}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success d-flex align-items-center justify-content-center gap-2 py-2.5 fw-semibold"
                  style={{ backgroundColor: '#25d366', borderColor: '#25d366' }}
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Detailed Contact Cards */}
              <div className="d-flex flex-column gap-3 mb-4">
                {/* Address */}
                <div className="poorna-card p-3 bg-light-poorna">
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 rounded bg-primary-subtle text-primary flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <strong className="d-block text-dark small mb-1">Office Address</strong>
                      <p className="small text-muted mb-2">
                        {companyData.address.line1},<br />
                        {companyData.address.line2},<br />
                        {companyData.address.city}-{companyData.address.pincode},<br />
                        {companyData.address.state}
                      </p>
                      <a
                        href={companyData.social.googleMaps.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-danger d-inline-flex align-items-center gap-1"
                      >
                        <Compass size={14} />
                        <span>Get Directions (Google Maps)</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="poorna-card p-3 bg-light-poorna">
                  <div className="d-flex align-items-center gap-3">
                    <div className="p-2 rounded bg-primary-subtle text-primary flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <strong className="d-block text-dark small">Email Address</strong>
                      <a
                        href={`mailto:${companyData.email}`}
                        className="text-danger fw-semibold small text-decoration-none"
                      >
                        {companyData.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div className="poorna-card p-3 bg-light-poorna">
                  <div className="d-flex align-items-center gap-3">
                    <div className="p-2 rounded bg-primary-subtle text-primary flex-shrink-0">
                      <InstagramIcon size={20} className="text-danger" />
                    </div>
                    <div>
                      <strong className="d-block text-dark small">Official Instagram</strong>
                      <a
                        href={companyData.social.instagram.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-danger fw-semibold small text-decoration-none d-inline-flex align-items-center gap-1"
                      >
                        <span>{companyData.social.instagram.handle}</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* GST */}
                <div className="poorna-card p-3 bg-light-poorna">
                  <div className="d-flex align-items-center gap-3">
                    <div className="p-2 rounded bg-success-subtle text-success flex-shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <strong className="d-block text-dark small">GST Registration Number</strong>
                      <span className="small text-muted font-monospace fw-bold">{companyData.gst}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote & Enquiry Form */}
            <div className="col-lg-7 reveal-on-scroll reveal-delay-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed / Location Section */}
      <section className="py-5 bg-light-poorna border-top">
        <div className="container">
          <div className="row align-items-center justify-content-between g-4 reveal-on-scroll">
            <div className="col-md-6">
              <h3 className="h4 fw-bold text-primary mb-2">
                Visit Our Office in Tiruchengode
              </h3>
              <p className="text-muted small mb-0">
                Centrally located on Old Salem Road, Tiruchengode West, servicing clients across Namakkal, Salem, Harur, and throughout Tamil Nadu.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <a
                href={companyData.social.googleMaps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-poorna-primary btn-lg"
              >
                <Compass size={18} />
                <span>Open Google Maps Navigation</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
