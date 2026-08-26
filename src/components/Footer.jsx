import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  ArrowUpRight,
  Sun,
  Building2,
  Zap,
  Clock
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { companyData } from '../data/companyData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="poorna-footer">
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Column 1: Brand & Positioning */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="d-inline-block">
              <img
                src={companyData.logoUrl}
                alt="Poorna Associates - Engineers & Architects"
                className="footer-logo"
              />
            </Link>
            <h3 className="h6 text-white text-uppercase fw-bold tracking-wide mt-2 mb-1">
              {companyData.brand}
            </h3>
            <p className="small text-secondary mb-3">
              <em>"{companyData.primaryTagline}"</em>
              <br />
              <strong className="text-light">{companyData.secondaryTagline}</strong>
            </p>
            <p className="small text-muted mb-4" style={{ lineHeight: '1.6' }}>
              Operating at the intersection of civil infrastructure and renewable energy. Licensed civil engineers and certified solar technicians.
            </p>
            <div className="d-flex align-items-center gap-2 small text-light">
              <ShieldCheck size={16} className="text-danger" />
              <span>GSTIN: <strong>{companyData.gst}</strong></span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Core Services</Link></li>
              <li><Link to="/projects">Verified Projects</Link></li>
              <li><Link to="/process">The Poorna Way</Link></li>
              <li><Link to="/sustainability">Sustainability</Link></li>
              <li><Link to="/contact">Contact & Quote</Link></li>
            </ul>
          </div>

          {/* Column 3: Core Capabilities */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/services#civil-construction" className="d-flex align-items-center gap-2">
                  <Building2 size={14} className="text-danger flex-shrink-0" />
                  <span>Construction & Civil Works</span>
                </Link>
              </li>
              <li>
                <Link to="/services#solar-energy" className="d-flex align-items-center gap-2">
                  <Sun size={14} className="text-danger flex-shrink-0" />
                  <span>Solar Energy Solutions</span>
                </Link>
              </li>
              <li>
                <Link to="/services#solar-ready" className="d-flex align-items-center gap-2">
                  <Zap size={14} className="text-danger flex-shrink-0" />
                  <span>Solar-Ready Construction</span>
                </Link>
              </li>
              <li>
                <Link to="/services#project-management" className="d-flex align-items-center gap-2">
                  <Clock size={14} className="text-danger flex-shrink-0" />
                  <span>Project Management & Consulting</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="d-flex align-items-center gap-2">
                  <ArrowUpRight size={14} className="text-danger flex-shrink-0" />
                  <span>NIRT Renewable Energy Case</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="col-lg-3 col-md-6">
            <h4 className="footer-heading">Contact Office</h4>
            
            <div className="footer-contact-item">
              <MapPin size={18} />
              <div>
                <span>{companyData.address.line1}, {companyData.address.line2}, {companyData.address.city}-{companyData.address.pincode}, {companyData.address.state}</span>
                <div className="mt-1">
                  <a
                    href={companyData.social.googleMaps.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small text-danger fw-semibold d-inline-flex align-items-center gap-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                {companyData.phones.map((p) => (
                  <div key={p.raw}>
                    <a href={`tel:${p.raw}`} className="text-light text-decoration-none">
                      {p.display}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} />
              <div>
                <a href={`mailto:${companyData.email}`} className="text-light text-decoration-none text-break">
                  {companyData.email}
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <InstagramIcon size={18} className="text-danger" />
              <div>
                <a
                  href={companyData.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none d-inline-flex align-items-center gap-1"
                >
                  <span>{companyData.social.instagram.handle}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div>
            © {currentYear} <strong>POORNA ASSOCIATES</strong> (Engineers & Architects). All rights reserved.
          </div>
          <div className="text-secondary small">
            Civil Infrastructure & Renewable Energy Enterprise • Tiruchengode, Tamil Nadu
          </div>
        </div>
      </div>
    </footer>
  );
}
