import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Sun, 
  Zap, 
  Target, 
  Eye, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight,
  HardHat,
  DraftingCompass
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeader from '../components/SectionHeader';
import WhyChooseCard from '../components/WhyChooseCard';
import CTASection from '../components/CTASection';
import { companyData } from '../data/companyData';

export default function AboutPage() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="About Poorna Associates - Engineers & Architects. POORNA ENERGY CONSTRUCTION operates at the intersection of civil infrastructure and renewable energy in Tiruchengode, Tamil Nadu."
      />

      {/* Page Header (Deep Navy) */}
      <section className="bg-dark-poorna text-white py-5">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="eyebrow-badge eyebrow-light mb-2">Corporate Profile</span>
              <h1 className="display-5 fw-bold text-white mb-2">
                About Poorna Associates
              </h1>
              <p className="text-danger fw-semibold h5 mb-3">
                {companyData.designation} • {companyData.brand}
              </p>
              <p className="lead text-light mb-4">
                "{companyData.primaryTagline}" — {companyData.secondaryTagline}
              </p>
              <div className="p-3 rounded border border-white border-opacity-10 d-inline-block" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }}>
                <p className="mb-0 text-white fw-medium small">
                  <span className="text-danger fw-bold">Since 2019</span> solar projects construction & <span className="text-danger fw-bold">45 years</span> experience in commercial building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Positioning & Narrative (Option A: High-Contrast Dark Navy Feature Panel) */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 reveal-on-scroll">
              <div className="who-we-are-panel shadow-sm">
                <span className="eyebrow-badge eyebrow-red mb-2">Integrated Capability</span>
                <h3 className="h4 fw-bold text-white mb-3">
                  Dual Civil & Solar Engineering Competence
                </h3>
                <p className="text-light small mb-4" style={{ lineHeight: '1.7' }}>
                  Poorna Associates was founded on the principle that structural stability and clean power generation are two sides of modern infrastructure. We execute both with unified engineering responsibility.
                </p>

                <div className="d-flex flex-column gap-3">
                  <div className="who-feature-box">
                    <div className="feature-icon-wrapper">
                      <HardHat size={20} />
                    </div>
                    <div>
                      <strong className="d-block text-white mb-1">Licensed Civil Engineering</strong>
                      <span>Durability, foundation design, and RCC construction adherence.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 reveal-on-scroll reveal-delay-1">
              <span className="eyebrow-badge">Our Identity</span>
              <h2 className="h2 fw-bold text-primary mb-3">
                The Intersection of Civil Infrastructure & Renewable Energy
              </h2>
              <p className="lead text-dark fw-semibold mb-3">
                {companyData.positioning.intro}
              </p>
              <p className="text-muted mb-4">
                {companyData.positioning.narrative}
              </p>

              <div className="d-flex gap-3">
                <Link to="/services" className="btn btn-poorna-primary">
                  <span>Our Services</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact#quote" className="btn btn-poorna-outline">
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Sections (Clean Light Neutral Background) */}
      <section className="section-py bg-light-poorna">
        <div className="container">
          {/* Vision */}
          <div className="row justify-content-center mb-5 reveal-on-scroll">
            <div className="col-lg-10">
              <div className="p-4 p-md-5 rounded-3 bg-dark-poorna text-white shadow-sm position-relative overflow-hidden">
                <div className="position-relative z-1">
                  <div className="d-flex align-items-center gap-2 text-danger small fw-bold text-uppercase mb-2">
                    <Eye size={18} />
                    <span>Our Vision</span>
                  </div>
                  <h3 className="h3 fw-bold text-white mb-3" style={{ lineHeight: '1.4' }}>
                    "{companyData.vision}"
                  </h3>
                  <p className="small text-light mb-0">
                    POORNA ENERGY CONSTRUCTION — {companyData.positioning.solarReadyTag}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="reveal-on-scroll">
            <SectionHeader
              badge="Core Objectives"
              title="Our Mission"
              subtitle="Three foundational commitments driving every blueprint, construction milestone, and solar installation."
            />
          </div>

          <div className="row g-4">
            {companyData.mission.map((item, idx) => (
              <div className={`col-lg-4 reveal-on-scroll reveal-delay-${idx + 1}`} key={item.id}>
                <div className="poorna-card h-100 p-4 bg-white">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-danger rounded px-2.5 py-1 fw-bold small">
                      Mission {item.number}
                    </span>
                    <Target size={20} className="text-primary" />
                  </div>
                  <h3 className="h5 fw-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted small mb-0">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Poorna (Clean White Background) */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="reveal-on-scroll">
            <SectionHeader
              badge="Engineering Integrity"
              title="Why Choose Poorna Associates"
              subtitle="The six concrete advantages that differentiate our integrated civil and renewable engineering model."
            />
          </div>

          <div className="row g-4">
            {companyData.advantages.map((adv, idx) => (
              <div className={`col-lg-4 col-md-6 reveal-on-scroll reveal-delay-${(idx % 3) + 1}`} key={adv.id}>
                <WhyChooseCard item={adv} />
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
