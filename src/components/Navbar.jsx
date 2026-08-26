import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Process', path: '/process' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`sticky-top poorna-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light py-0">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center me-3" aria-label="Poorna Associates Home">
            <img
              src="/assets/logo/poorna-logo.jpg"
              alt="Poorna Associates - Engineers & Architects Logo"
              style={{
                height: '75px',
                width: 'auto',
                maxWidth: '220px',
                objectFit: 'contain',
                mixBlendMode: 'multiply',
                filter: 'contrast(1.1) saturate(1.1)',
                imageRendering: '-webkit-optimize-contrast'
              }}
              className="navbar-brand-logo"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="navbar-toggler border-0 shadow-none p-2"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="poornaNavMenu"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} className="text-dark" /> : <Menu size={24} className="text-dark" />}
          </button>

          {/* Nav Links & Actions */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show mt-3 mt-lg-0 py-3 py-lg-0' : ''}`} id="poornaNavMenu">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
              {navItems.map((item) => (
                <li className="nav-item" key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link nav-link-poorna ${isActive ? 'active' : ''}`
                    }
                    end={item.path === '/'}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Right Action: Clean Phone Display + Get A Quote Button */}
            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
              {/* Desktop Compact Phone Contact Area */}
              <div className="d-none d-xl-flex align-items-center gap-2 text-nowrap header-phone-block">
                <div className="header-phone-icon">
                  <PhoneCall size={14} />
                </div>
                <div className="d-flex flex-column text-start">
                  <span className="header-phone-label">CALL US</span>
                  <div className="header-phone-numbers">
                    <a
                      href={`tel:${companyData.phones[0].raw}`}
                      className="header-phone-link"
                      title="Call primary line"
                    >
                      {companyData.phones[0].raw}
                    </a>
                    <span className="header-phone-divider">·</span>
                    <a
                      href={`tel:${companyData.phones[1].raw}`}
                      className="header-phone-link"
                      title="Call secondary line"
                    >
                      {companyData.phones[1].raw}
                    </a>
                  </div>
                </div>
              </div>

              {/* Get a Quote CTA Button */}
              <Link
                to="/contact#quote"
                className="btn btn-poorna-red text-nowrap w-100 w-lg-auto"
              >
                <span>Get a Quote</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Mobile Contact Quick Actions inside Hamburger */}
            <div className="d-lg-none mt-3 pt-3 border-top border-light-subtle d-flex flex-column gap-2">
              <div className="small text-muted fw-semibold">Direct Enquiries:</div>
              <div className="d-flex gap-2">
                <a href={`tel:${companyData.phones[0].raw}`} className="btn btn-sm btn-outline-secondary w-50 py-2">
                  <PhoneCall size={13} className="me-1 text-danger" /> {companyData.phones[0].raw}
                </a>
                <a href={`tel:${companyData.phones[1].raw}`} className="btn btn-sm btn-outline-secondary w-50 py-2">
                  <PhoneCall size={13} className="me-1 text-danger" /> {companyData.phones[1].raw}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
