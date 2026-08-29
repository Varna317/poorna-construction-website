import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Sun, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  DraftingCompass
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CTASection from '../components/CTASection';
import { serviceCategories } from '../data/servicesData';

export default function ServicesPage() {
  const civilCat = serviceCategories.find((c) => c.id === 'civil-construction');
  const solarCat = serviceCategories.find((c) => c.id === 'solar-energy');
  const solarReadyCat = serviceCategories.find((c) => c.id === 'solar-ready');

  return (
    <>
      <SEOHead
        title="Our Core Services"
        description="Comprehensive civil construction works, solar energy solutions, and integrated solar-ready construction by Poorna Associates & POORNA ENERGY CONSTRUCTION in Tiruchengode."
      />

      {/* Page Header (Deep Navy) */}
      <section className="bg-dark-poorna text-white py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-8">
              <span className="eyebrow-badge eyebrow-light mb-2">Integrated Solutions</span>
              <h1 className="display-5 fw-bold text-white mb-2">
                Our Core Services
              </h1>
              <p className="lead text-light mb-0">
                End-to-end engineering, robust civil infrastructure development, and high-efficiency solar energy systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY A: CONSTRUCTION & CIVIL WORKS (White Background) */}
      <section className="section-py bg-white" id="civil-construction">
        <div className="container">
          <div className="d-flex align-items-center gap-3 mb-4 reveal-on-scroll">
            <div className="p-2.5 rounded bg-primary text-white">
              <Building2 size={26} />
            </div>
            <div>
              <span className="badge bg-danger rounded-sm px-2.5 py-0.5 small">Category A</span>
              <h2 className="h3 fw-bold text-primary mb-0">{civilCat.categoryTitle}</h2>
              <p className="text-muted small mb-0">{civilCat.categorySubtitle}</p>
            </div>
          </div>

          <div className="row g-4 mt-1">
            {civilCat.services.map((srv, idx) => (
              <div className={`col-lg-6 reveal-on-scroll reveal-delay-${(idx % 2) + 1}`} key={srv.id}>
                <div className="poorna-card h-100 d-flex flex-column p-4 bg-light-poorna">
                  <h3 className="h5 fw-bold text-primary mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-muted small mb-3">
                    {srv.fullDesc}
                  </p>
                  <div className="mb-4 flex-grow-1">
                    <span className="d-block small fw-bold text-dark mb-2">Key Highlights:</span>
                    <ul className="list-unstyled small mb-0">
                      {srv.highlights.map((h, i) => (
                        <li key={i} className="d-flex align-items-center gap-2 mb-1 text-secondary">
                          <CheckCircle size={14} className="text-danger flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-top border-light-subtle">
                    <Link
                      to={`/contact?service=${encodeURIComponent(srv.title)}#quote`}
                      className="btn btn-sm btn-poorna-outline w-100"
                    >
                      <span>Enquire for {srv.title}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY B: SOLAR ENERGY SOLUTIONS (Light Neutral Background) */}
      <section className="section-py bg-light-poorna" id="solar-energy">
        <div className="container">
          <div className="d-flex align-items-center gap-3 mb-4 reveal-on-scroll">
            <div className="p-2.5 rounded bg-primary text-white">
              <Sun size={26} />
            </div>
            <div>
              <span className="badge bg-primary rounded-sm px-2.5 py-0.5 small">Category B</span>
              <h2 className="h3 fw-bold text-primary mb-0">{solarCat.categoryTitle}</h2>
              <p className="text-muted small mb-0">{solarCat.categorySubtitle}</p>
            </div>
          </div>

          <div className="row g-4 mt-1">
            {solarCat.services.map((srv, idx) => (
              <div className={`col-lg-6 reveal-on-scroll reveal-delay-${(idx % 2) + 1}`} key={srv.id}>
                <div className="poorna-card h-100 d-flex flex-column p-4 bg-white">
                  <h3 className="h5 fw-bold text-primary mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-muted small mb-3">
                    {srv.fullDesc}
                  </p>
                  <div className="mb-4 flex-grow-1">
                    <span className="d-block small fw-bold text-dark mb-2">Key Highlights:</span>
                    <ul className="list-unstyled small mb-0">
                      {srv.highlights.map((h, i) => (
                        <li key={i} className="d-flex align-items-center gap-2 mb-1 text-secondary">
                          <CheckCircle size={14} className="text-danger flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-top border-light-subtle">
                    <Link
                      to={`/contact?service=${encodeURIComponent(srv.title)}#quote`}
                      className="btn btn-sm btn-poorna-primary w-100"
                    >
                      <span>Enquire for {srv.title}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Execution Highlights as Points */}
          <div className="mt-5 p-4 bg-white rounded border border-light-subtle reveal-on-scroll">
            <h3 className="h6 fw-bold text-dark mb-3 text-uppercase tracking-wider">Project Execution Highlights</h3>
            <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
              <li className="d-flex align-items-start gap-3">
                <CheckCircle className="text-danger flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-primary d-block mb-1">Key Infrastructure:</strong>
                  <span className="text-muted small">MCR Building, Yard Development, HT & LT Panels, MMS & Piling Work, Plant WPC Road, Outer Fencing Work, Earth Ring.</span>
                </div>
              </li>
              <li className="d-flex align-items-start gap-3">
                <CheckCircle className="text-danger flex-shrink-0 mt-1" size={20} />
                <div>
                  <strong className="text-primary d-block mb-1">Project Milestone: 60 MW Commissioning Completed</strong>
                  <span className="text-muted small">The 60 MW plant has been installed, tested, and successfully brought into operational readiness.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CATEGORY C: INTEGRATED "SOLAR-READY" CONSTRUCTION (Architectural Navy Section) */}
      <section className="section-py bg-dark-poorna text-white" id="solar-ready">
        <div className="container">
          <div className="d-flex align-items-center gap-3 mb-4 reveal-on-scroll">
            <div className="p-2.5 rounded bg-danger text-white">
              <Zap size={26} />
            </div>
            <div>
              <span className="badge bg-white text-danger fw-bold rounded-sm px-2.5 py-0.5 small shadow-sm">Signature Offering</span>
              <h2 className="h3 fw-bold text-white mb-0">{solarReadyCat.categoryTitle}</h2>
              <p className="text-light opacity-75 small mb-0">{solarReadyCat.categorySubtitle}</p>
            </div>
          </div>

          <div className="row g-4 mt-1">
            {solarReadyCat.services.map((srv, idx) => (
              <div className={`col-lg-6 reveal-on-scroll reveal-delay-${idx + 1}`} key={srv.id}>
                <div className="poorna-card-dark h-100 d-flex flex-column p-4 p-md-5">
                  <div className="d-flex align-items-center gap-2 text-danger mb-2">
                    <DraftingCompass size={18} />
                    <span className="small fw-bold text-uppercase">Integrated Engineering</span>
                  </div>
                  <h3 className="h4 fw-bold text-white mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-light opacity-90 small mb-4">
                    {srv.fullDesc}
                  </p>
                  <div className="mb-4 flex-grow-1">
                    <span className="d-block small fw-bold text-white mb-2">Technical Execution:</span>
                    <ul className="list-unstyled small mb-0">
                      {srv.highlights.map((h, i) => (
                        <li key={i} className="d-flex align-items-center gap-2 mb-1.5 text-light opacity-90">
                          <CheckCircle size={14} className="text-danger flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-top border-secondary">
                    <Link
                      to={`/contact?service=${encodeURIComponent(srv.title)}#quote`}
                      className="btn btn-poorna-red w-100"
                    >
                      <span>Request Solar-Ready Consultation</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </>
  );
}
