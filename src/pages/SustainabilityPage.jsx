import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Sun, 
  Zap, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  Layers
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { companyData } from '../data/companyData';

export default function SustainabilityPage() {
  return (
    <>
      <SEOHead
        title="Commitment to Sustainability"
        description="Learn how POORNA ENERGY CONSTRUCTION integrates renewable energy and civil construction to reduce carbon footprint and advance sustainable infrastructure."
      />

      {/* Page Header (Deep Navy) */}
      <section className="bg-dark-poorna text-white py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-8">
              <span className="eyebrow-badge eyebrow-light mb-2">Sustainable Development</span>
              <h1 className="display-5 fw-bold text-white mb-2">
                Commitment to Sustainability
              </h1>
              <p className="lead text-light mb-0">
                "{companyData.positioning.solarReadyTag}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative (Option A: High-Contrast Dark Navy Feature Panel) */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="row align-items-center g-5 mb-5">
            <div className="col-lg-6 reveal-on-scroll">
              <span className="eyebrow-badge eyebrow-red">Our Core Belief</span>
              <h2 className="display-6 fw-bold text-primary mb-3">
                Development in Harmony with the Environment
              </h2>
              <blockquote className="p-3 bg-light-poorna border-start border-3 border-danger rounded mb-4">
                <p className="lead text-dark fw-bold mb-0" style={{ fontSize: '1.1rem' }}>
                  "At POORNA ENERGY CONSTRUCTION, we believe that development should not come at the cost of the environment."
                </p>
              </blockquote>
              <p className="text-muted mb-4" style={{ lineHeight: '1.75' }}>
                Civil infrastructure and energy generation have historically operated in isolation. By integrating structural engineering with on-site solar power generation, Poorna Associates helps clients build durable, energy-independent properties that actively mitigate carbon emissions over decades of operation.
              </p>

              <div className="d-flex flex-column gap-2.5">
                <div className="d-flex align-items-start gap-2">
                  <CheckCircle2 size={16} className="text-danger mt-1 flex-shrink-0" />
                  <span className="text-dark small"><strong>Zero-Carbon Daylight Power:</strong> Displacing peak utility demand with clean rooftop solar harvest.</span>
                </div>
                <div className="d-flex align-items-start gap-2">
                  <CheckCircle2 size={16} className="text-danger mt-1 flex-shrink-0" />
                  <span className="text-dark small"><strong>Resource-Efficient Blueprints:</strong> Designing structures to maximize natural daylight and thermal efficiency.</span>
                </div>
                <div className="d-flex align-items-start gap-2">
                  <CheckCircle2 size={16} className="text-danger mt-1 flex-shrink-0" />
                  <span className="text-dark small"><strong>Lifecycle Longevity:</strong> High-durability civil construction reducing rebuilding and maintenance waste.</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 reveal-on-scroll reveal-delay-1">
              <div className="who-we-are-panel shadow-sm">
                <span className="eyebrow-badge eyebrow-light mb-2">Environmental Metrics</span>
                <h3 className="h5 fw-bold text-white mb-3">
                  Sustainable Infrastructure Methodology
                </h3>
                <div className="d-flex flex-column gap-3">
                  <div className="who-feature-box">
                    <div className="feature-icon-wrapper">
                      <Leaf size={18} />
                    </div>
                    <div>
                      <strong className="d-block text-white mb-1">Emissions Reduction</strong>
                      <span>Direct offset of CO2 emissions via on-site solar photovoltaic generation.</span>
                    </div>
                  </div>

                  <div className="who-feature-box">
                    <div className="feature-icon-wrapper">
                      <Zap size={18} />
                    </div>
                    <div>
                      <strong className="d-block text-white mb-1">Grid Independence</strong>
                      <span>Reduced reliance on conventional fossil-fuel power through smart generation and storage.</span>
                    </div>
                  </div>

                  <div className="who-feature-box">
                    <div className="feature-icon-wrapper">
                      <Sun size={18} />
                    </div>
                    <div>
                      <strong className="d-block text-white mb-1">MNRE Standards Compliance</strong>
                      <span>Standardized engineering adhering strictly to national renewable benchmarks.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Key Sustainability Impacts */}
          <div className="reveal-on-scroll">
            <SectionHeader
              badge="Measurable Impact"
              title="How Choosing Poorna Contributes to a Greener Future"
              subtitle="Three direct ways our integrated engineering model drives environmental stewardship and energy independence."
            />
          </div>

          <div className="row g-4">
            <div className="col-lg-4 reveal-on-scroll reveal-delay-1">
              <div className="poorna-card h-100 p-4 bg-light-poorna">
                <div className="p-2.5 rounded bg-primary-subtle text-primary d-inline-flex mb-3">
                  <Leaf size={24} />
                </div>
                <h3 className="h5 fw-bold text-primary mb-2">
                  1. Reducing Carbon Footprint
                </h3>
                <p className="text-muted small mb-0">
                  Every kilowatt of solar capacity installed on residential slabs, commercial buildings, and industrial facilities directly displaces thermal and fossil-fuel electricity generation, offsetting metric tons of CO2 throughout the system's operational lifetime.
                </p>
              </div>
            </div>

            <div className="col-lg-4 reveal-on-scroll reveal-delay-2">
              <div className="poorna-card h-100 p-4 bg-light-poorna">
                <div className="p-2.5 rounded bg-primary-subtle text-primary d-inline-flex mb-3">
                  <Zap size={24} />
                </div>
                <h3 className="h5 fw-bold text-primary mb-2">
                  2. Reducing Grid Reliance
                </h3>
                <p className="text-muted small mb-0">
                  By pairing on-grid and battery energy storage systems (BESS) with pre-engineered solar-ready buildings, facilities generate their own clean power, drastically decreasing exposure to grid tariff inflation and grid disruptions.
                </p>
              </div>
            </div>

            <div className="col-lg-4 reveal-on-scroll reveal-delay-3">
              <div className="poorna-card h-100 p-4 bg-light-poorna">
                <div className="p-2.5 rounded bg-primary-subtle text-primary d-inline-flex mb-3">
                  <Sun size={24} />
                </div>
                <h3 className="h5 fw-bold text-primary mb-2">
                  3. Accelerating National Clean Energy Adoption
                </h3>
                <p className="text-muted small mb-0">
                  Adhering to Ministry of New and Renewable Energy (MNRE) guidelines and facilitating government subsidies makes clean solar infrastructure economically viable and readily accessible to property owners and enterprises across Tamil Nadu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </>
  );
}
