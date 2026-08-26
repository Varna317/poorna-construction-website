import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageSquareText, 
  Compass, 
  DraftingCompass, 
  HardHat, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Check
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeader from '../components/SectionHeader';
import CTASection from '../components/CTASection';
import { processSteps } from '../data/processData';

const iconMap = {
  MessageSquareText,
  Compass,
  DraftingCompass,
  HardHat,
  CheckCircle2,
  ShieldCheck
};

export default function ProcessPage() {
  return (
    <>
      <SEOHead
        title="Our Process - The Poorna Way"
        description="The Poorna Way: Our structured 6-stage engineering and construction methodology from consultation to handover and long-term support."
      />

      {/* Page Header (Deep Navy) */}
      <section className="bg-dark-poorna text-white py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-8">
              <span className="eyebrow-badge eyebrow-light mb-2">Engineering Methodology</span>
              <h1 className="display-5 fw-bold text-white mb-2">
                Our Process
              </h1>
              <p className="h4 text-danger fw-semibold mb-3">
                The Poorna Way
              </p>
              <p className="lead text-light mb-0">
                A disciplined six-phase workflow engineered to guarantee structural durability, solar generation performance, and timely project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive 6 Stages */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="reveal-on-scroll">
            <SectionHeader
              badge="Stage-by-Stage Workflow"
              title="How We Execute Your Project"
              subtitle="From the very first technical conversation through to long-term preventive maintenance, here is what you can expect when working with Poorna Associates."
            />
          </div>

          <div className="d-flex flex-column gap-4">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.iconName] || HardHat;
              const isEven = index % 2 === 1;

              return (
                <div 
                  key={step.step} 
                  className="p-4 p-lg-5 rounded-3 border bg-light-poorna reveal-on-scroll"
                >
                  <div className="row align-items-center g-4">
                    <div className={`col-lg-2 text-center text-lg-start ${isEven ? 'order-lg-2' : 'order-lg-1'}`}>
                      <div className="d-inline-flex flex-column align-items-center justify-content-center p-3 rounded bg-primary text-white" style={{ width: '70px', height: '70px' }}>
                        <span className="h4 fw-bold mb-0">{step.step}</span>
                      </div>
                    </div>

                    <div className={`col-lg-7 ${isEven ? 'order-lg-1' : 'order-lg-2'}`}>
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span className="badge bg-danger rounded-sm px-2.5 py-0.5 small">Stage {step.step}</span>
                        <span className="small text-muted fw-semibold">{step.tagline}</span>
                      </div>
                      <h2 className="h4 fw-bold text-primary mb-2">
                        {step.title}
                      </h2>
                      <p className="text-muted small mb-0" style={{ lineHeight: '1.7' }}>
                        {step.description}
                      </p>
                    </div>

                    <div className="col-lg-3 order-lg-3">
                      <div className="p-3 bg-white rounded border shadow-sm">
                        <div className="small fw-bold text-dark mb-2 d-flex align-items-center gap-1">
                          <Icon size={16} className="text-danger" />
                          <span>Deliverables</span>
                        </div>
                        <ul className="list-unstyled small mb-0">
                          {step.deliverables.map((item, idx) => (
                            <li key={idx} className="d-flex align-items-start gap-1.5 mb-1.5 text-muted">
                              <Check size={14} className="text-danger mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </>
  );
}
