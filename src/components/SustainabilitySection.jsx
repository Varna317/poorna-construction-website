import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Sun, Zap, Shield, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function SustainabilitySection({ isStandalonePage = false }) {
  const pillars = [
    {
      icon: Leaf,
      title: "Carbon Footprint Reduction",
      description: "Integrating clean solar power generation into civil structures helps clients directly offset carbon emissions from daily operations."
    },
    {
      icon: Zap,
      title: "Grid Independence & Resilience",
      description: "By pairing rooftop solar PV systems with energy storage, buildings significantly reduce dependency on conventional fossil-fuel-powered grid electricity."
    },
    {
      icon: Sun,
      title: "National Renewable Mission",
      description: "Actively accelerating the adoption of distributed solar energy systems in compliance with national green energy targets and MNRE guidelines."
    }
  ];

  return (
    <section className={`section-py ${isStandalonePage ? '' : 'bg-light-poorna'}`}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="eyebrow-badge eyebrow-red">Environmental Commitment</span>
            <h2 className="display-6 fw-bold text-primary mb-3">
              Engineering a Greener Future, Today.
            </h2>
            <p className="lead text-dark fw-semibold mb-3">
              "At POORNA ENERGY CONSTRUCTION, we believe that development should not come at the cost of the environment."
            </p>
            <p className="text-muted mb-4">
              As both civil builders and renewable energy practitioners, we design structures from the ground up that are optimized for energy efficiency, longevity, and sustainable energy capture. Choosing Poorna Associates ensures your infrastructure supports long-term ecological balance.
            </p>

            {!isStandalonePage && (
              <Link to="/sustainability" className="btn btn-poorna-outline">
                <span>Explore Our Sustainability Approach</span>
                <ArrowRight size={16} />
              </Link>
            )}
          </div>

          <div className="col-lg-6">
            <div className="d-flex flex-column gap-3">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="poorna-card p-4">
                    <div className="d-flex align-items-start gap-3">
                      <div className="p-2 rounded bg-primary-subtle text-primary flex-shrink-0">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="h6 fw-bold text-primary mb-1">
                          {pillar.title}
                        </h3>
                        <p className="small text-muted mb-0">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
