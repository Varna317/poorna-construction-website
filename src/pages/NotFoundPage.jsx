import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead title="Page Not Found" />
      <section className="section-py bg-light-poorna min-vh-50 d-flex align-items-center">
        <div className="container text-center py-5">
          <span className="badge bg-danger rounded-pill px-3 py-1 mb-3">404 Error</span>
          <h1 className="display-4 fw-bold text-primary mb-3">Page Not Found</h1>
          <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: '500px' }}>
            The requested page does not exist or has been moved. Return to Poorna Associates home page or explore our services.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/" className="btn btn-poorna-primary">
              <Home size={16} />
              <span>Back to Home</span>
            </Link>
            <Link to="/services" className="btn btn-poorna-outline">
              <span>View Services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
