import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Sun, 
  Zap, 
  PhoneCall, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck2,
  HardHat,
  DraftingCompass,
  Check
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeader from '../components/SectionHeader';
import WhyChooseCard from '../components/WhyChooseCard';
import ProjectCard from '../components/ProjectCard';
import ProjectGallery from '../components/ProjectGallery';
import ProcessTimeline from '../components/ProcessTimeline';
import SustainabilitySection from '../components/SustainabilitySection';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import { companyData } from '../data/companyData';
import { serviceCategories } from '../data/servicesData';
import { getFeaturedProject } from '../data/projectsData';

export default function HomePage() {
  const featuredProject = getFeaturedProject();

  return (
    <>
      <SEOHead
        title="Home"
        description="Poorna Associates - Engineers & Architects. Poorna Construction Solar delivers integrated civil construction, building works, and renewable solar energy solutions in Tiruchengode, Tamil Nadu."
      />

      {/* 1. HERO SECTION (Deep Navy, Logo Red Accent, Staggered Entrance) */}
      <section className="hero-section">
        <div className="hero-pattern-overlay"></div>
        <div className="container position-relative z-1">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="hero-anim-1 d-inline-flex align-items-center gap-2 px-3 py-1 rounded bg-white bg-opacity-10 border border-white border-opacity-15 mb-3">
                <span className="badge bg-danger rounded-sm px-2 py-0.5 small">Civil + Solar</span>
                <span className="small fw-medium" style={{ color: '#FFFFFF' }}>{companyData.name} • {companyData.designation}</span>
              </div>

              <h1 className="hero-title hero-anim-2">
                Building Today. <br />
                <span className="highlight-red">Powering Tomorrow.</span>
              </h1>

              <div className="hero-tagline-main hero-anim-3">
                "{companyData.primaryTagline}"
              </div>

              <p className="hero-desc hero-anim-3">
                {companyData.positioning.intro} We deliver a seamless dual-pronged approach: robust civil construction methodologies combined with cutting-edge renewable solar power engineering.
              </p>

              <div className="hero-anim-4 d-flex flex-wrap align-items-center gap-3 pt-2">
                <Link to="/contact#quote" className="btn btn-poorna-red">
                  <span>Get a Quote</span>
                  <ArrowRight size={16} />
                </Link>

                <Link to="/services" className="btn btn-poorna-outline-light">
                  <span>Explore Services</span>
                </Link>

                <a
                  href={`tel:${companyData.phones[0].raw}`}
                  className="btn btn-link text-white text-decoration-none d-inline-flex align-items-center gap-2 fw-semibold px-2"
                >
                  <div className="p-1.5 rounded-circle bg-white bg-opacity-15">
                    <PhoneCall size={14} className="text-white" />
                  </div>
                  <span>Call {companyData.phones[0].raw}</span>
                </a>
              </div>
            </div>

            {/* Hero Right Column: High-Contrast Dark Navy Architectural Card */}
            <div className="col-lg-5">
              <div className="hero-engineering-card hero-anim-5 shadow-lg">
                <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom border-white border-opacity-10">
                  <div className="d-flex align-items-center gap-2">
                    <ShieldCheck size={18} className="text-danger" />
                    <span className="small text-white fw-bold text-uppercase tracking-wider">Engineering Blueprint</span>
                  </div>
                  <span className="badge bg-white bg-opacity-10 text-light small">Integrated Model</span>
                </div>

                <div className="d-flex flex-column gap-2.5 mb-3">
                  <div className="hero-metric-box">
                    <div className="d-flex align-items-center gap-2.5 mb-1">
                      <Building2 size={18} className="text-light" />
                      <strong className="hero-metric-title">Civil & Structural Works</strong>
                    </div>
                    <p className="hero-metric-desc">
                      Residential, commercial, and industrial facilities engineered for longevity.
                    </p>
                  </div>

                  <div className="hero-metric-box">
                    <div className="d-flex align-items-center gap-2.5 mb-1">
                      <Sun size={18} className="text-light" />
                      <strong className="hero-metric-title">Renewable Solar Solutions</strong>
                    </div>
                    <p className="hero-metric-desc">
                      On-grid, rooftop PV installations and MNRE-compliant power systems.
                    </p>
                  </div>

                  <div className="hero-metric-box">
                    <div className="d-flex align-items-center gap-2.5 mb-1">
                      <Zap size={18} className="text-danger" />
                      <strong className="hero-metric-title">Solar-Ready Infrastructure</strong>
                    </div>
                    <p className="hero-metric-desc">
                      Pre-calculated load capacities and embedded electrical conduit raceways.
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-top border-white border-opacity-10 text-center">
                  <span className="small text-light">
                    Licensed Civil Engineers & Certified Solar Technicians
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / IDENTITY STRIP */}
      <section className="trust-strip">
        <div className="container">
          <div className="row g-3 text-center text-md-start align-items-center justify-content-between">
            <div className="col-md-3">
              <div className="trust-item">
                <div className="trust-icon-box">
                  <Building2 size={20} />
                </div>
                <div>
                  <div className="trust-title">Civil Works</div>
                  <p className="trust-subtitle">Structural Engineering</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="trust-item">
                <div className="trust-icon-box">
                  <Sun size={20} />
                </div>
                <div>
                  <div className="trust-title">Solar Energy</div>
                  <p className="trust-subtitle">On-Grid & Rooftop PV</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="trust-item">
                <div className="trust-icon-box">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="trust-title">Solar-Ready Build</div>
                  <p className="trust-subtitle">Pre-Engineered Integration</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="trust-item">
                <div className="trust-icon-box">
                  <FileCheck2 size={20} />
                </div>
                <div>
                  <div className="trust-title">Turnkey Delivery</div>
                  <p className="trust-subtitle">Feasibility to Commissioning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE (Option A: High-Contrast Dark Navy Architectural Panel) */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-2 order-lg-1 reveal-on-scroll">
              <div className="who-we-are-panel shadow-sm">
                <div className="d-flex align-items-center gap-2 text-danger small fw-bold text-uppercase mb-2">
                  <DraftingCompass size={18} />
                  <span>Dual-Pronged Approach</span>
                </div>
                <h3 className="h4 fw-bold text-white mb-3">
                  Structural Durability + Renewable Generation
                </h3>
                <p className="text-light opacity-90 small mb-4" style={{ lineHeight: '1.7' }}>
                  By combining structural engineering with renewable energy under one roof, we eliminate contractor friction and ensure buildings are designed to be energy-independent from the foundation up.
                </p>

                <div className="d-flex flex-column gap-3">
                  <div className="who-feature-box">
                    <div className="feature-icon-wrapper">
                      <HardHat size={20} />
                    </div>
                    <div>
                      <strong className="d-block text-white mb-1">Licensed Civil Engineers</strong>
                      <span>Comprehensive structural blueprints, soil analysis, and RCC frame execution.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2 reveal-on-scroll reveal-delay-1">
              <span className="eyebrow-badge">Who We Are</span>
              <h2 className="display-6 fw-bold text-primary mb-3">
                Operating at the Intersection of Civil Infrastructure & Renewable Energy
              </h2>
              <p className="lead text-dark fw-semibold mb-3">
                "We are not just builders; we are energy consultants and sustainability experts."
              </p>
              <p className="text-muted mb-4">
                {companyData.positioning.narrative}
              </p>

              <Link to="/about" className="btn btn-poorna-outline">
                <span>Learn More About Us</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE SERVICES SECTION (Clean Light Background + Scroll Reveal) */}
      <section className="section-py bg-light-poorna">
        <div className="container">
          <div className="reveal-on-scroll">
            <SectionHeader
              badge="Core Capabilities"
              title="Our Core Services"
              subtitle="Integrated civil construction, high-yield solar energy solutions, and pre-engineered solar-ready infrastructure."
            />
          </div>

          <div className="row g-4">
            {serviceCategories.map((category, idx) => (
              <div className={`col-lg-4 reveal-on-scroll reveal-delay-${idx + 1}`} key={category.id}>
                <div className="poorna-card d-flex flex-column h-100 bg-white">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="p-2.5 rounded bg-primary-subtle text-primary">
                      {category.id === 'civil-construction' && <Building2 size={24} />}
                      {category.id === 'solar-energy' && <Sun size={24} />}
                      {category.id === 'solar-ready' && <Zap size={24} />}
                    </div>
                    <div>
                      <span className="badge bg-light text-secondary border small mb-1">Service Category</span>
                      <h3 className="h5 fw-bold text-primary mb-0">{category.categoryTitle}</h3>
                    </div>
                  </div>

                  <p className="small text-muted mb-3">
                    {category.categorySubtitle}
                  </p>

                  <ul className="list-unstyled small mb-4 flex-grow-1">
                    {category.services.map((srv) => (
                      <li key={srv.id} className="mb-2 pb-2 border-bottom border-light-subtle">
                        <strong className="d-block text-dark mb-0.5">{srv.title}</strong>
                        <span className="text-muted" style={{ fontSize: '0.825rem' }}>{srv.shortDesc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Link to={`/services#${category.id}`} className="btn btn-sm btn-poorna-outline w-100">
                      <span>View Details & Capabilities</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4 reveal-on-scroll">
            <Link to="/services" className="btn btn-poorna-primary">
              <span>Explore All Detailed Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE POORNA CONSTRUCTION SOLAR (Clean White Background) */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="reveal-on-scroll">
            <SectionHeader
              badge="The Poorna Advantage"
              title="Why Choose Poorna Construction Solar"
              subtitle="Real engineering competence, turnkey responsibility, and certified execution across civil and renewable domains."
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

      {/* 6. FEATURED VERIFIED PROJECT: NIRT RENEWABLE ENERGY (Real Photos ONLY) */}
      <section className="section-py bg-light-poorna">
        <div className="container">
          <div className="reveal-on-scroll">
            <SectionHeader
              badge="Verified Track Record"
              title="Featured Project: NIRT Renewable Energy"
              subtitle="Yard Works & MCR Building Construction executed across two sites: Vijay Deepa Site & All watts Site @ Poyyapatti, Harur."
            />
          </div>

          <div className="reveal-on-scroll">
            <ProjectCard project={featuredProject} />
          </div>

          {/* Photographic preview from the 10 real images */}
          <div className="mt-5 pt-3 reveal-on-scroll">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="h5 fw-bold text-primary mb-0">Project Photographic Records</h3>
              <Link to="/projects" className="small fw-semibold text-danger d-inline-flex align-items-center gap-1">
                <span>View All 10 Images</span>
                <ArrowRight size={14} />
              </Link>
            </div>
            <ProjectGallery images={featuredProject.images} limit={6} />
          </div>
        </div>
      </section>

      {/* 7. OUR PROCESS (Clean White Background) */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="reveal-on-scroll">
            <SectionHeader
              badge="Methodology"
              title="Our Process: The Poorna Way"
              subtitle="A structured 6-stage lifecycle ensuring quality assurance, structural resilience, and seamless commissioning."
            />
          </div>

          <div className="reveal-on-scroll">
            <ProcessTimeline />
          </div>

          <div className="text-center mt-4 reveal-on-scroll">
            <Link to="/process" className="btn btn-poorna-outline">
              <span>Read Full Process Breakdown</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. SOLAR-READY INTEGRATED CONSTRUCTION HIGHLIGHT (Deep Navy Section) */}
      <section className="section-py bg-dark-poorna text-white">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 reveal-on-scroll">
              <span className="eyebrow-badge eyebrow-light mb-3">Signature Offering</span>
              <h2 className="display-6 fw-bold text-white mb-3">
                Integrated "Solar-Ready" Construction
              </h2>
              <p className="lead text-light opacity-90 mb-4">
                Designing structures specifically optimized for solar panel weight and wind load, with electrical pre-wiring integrated right into the civil blueprint.
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="p-3 rounded bg-white bg-opacity-05 border border-white border-opacity-10">
                  <h3 className="h6 fw-bold text-white mb-1">1. Structural Load Optimization</h3>
                  <p className="small text-light opacity-75 mb-0">
                    Engineered slabs, trusses, and columns designed to handle dead weight, dynamic forces, and wind uplift without later structural damage.
                  </p>
                </div>

                <div className="p-3 rounded bg-white bg-opacity-05 border border-white border-opacity-10">
                  <h3 className="h6 fw-bold text-white mb-1">2. Conduit & Electrical Pre-Wiring</h3>
                  <p className="small text-light opacity-75 mb-0">
                    Concealed heavy-gauge DC/AC conduit raceways, inverter bay provisions, and dedicated earthing pathways embedded during masonry.
                  </p>
                </div>
              </div>

              <Link to="/contact?service=Solar-Ready%20Construction#quote" className="btn btn-poorna-red">
                <span>Enquire About Solar-Ready Builds</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="col-lg-6 reveal-on-scroll reveal-delay-1">
              <div className="poorna-card-dark p-4 p-md-5">
                <div className="d-flex align-items-center gap-2 text-danger mb-3">
                  <DraftingCompass size={20} />
                  <span className="small fw-bold text-uppercase">Engineering Specifications</span>
                </div>

                <ul className="list-unstyled small mb-4">
                  <li className="d-flex align-items-start gap-2 mb-3 text-light">
                    <Check size={16} className="text-danger mt-1 flex-shrink-0" />
                    <div>
                      <strong className="d-block text-white">Dead & Dynamic Load Calculations</strong>
                      <span className="text-light opacity-75">Eliminates roof stress and waterproofing failure risks.</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-2 mb-3 text-light">
                    <Check size={16} className="text-danger mt-1 flex-shrink-0" />
                    <div>
                      <strong className="d-block text-white">Dedicated Inverter & Switchgear Bays</strong>
                      <span className="text-light opacity-75">Well-ventilated spaces pre-planned for inverters and battery storage.</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-2 mb-0 text-light">
                    <Check size={16} className="text-danger mt-1 flex-shrink-0" />
                    <div>
                      <strong className="d-block text-white">Concealed Chemical Earthing Pathways</strong>
                      <span className="text-light opacity-75">Zero exposed conduit clutter and complete electrical safety compliance.</span>
                    </div>
                  </li>
                </ul>

                <div className="p-3 bg-white bg-opacity-05 rounded border border-white border-opacity-10 small" style={{ color: '#172B3F' }}>
                  <em style={{ color: '#172B3F' }}>Future-proof your building for solar generation from day one.</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SUSTAINABILITY PREVIEW (Clean Light Background) */}
      <div className="reveal-on-scroll">
        <SustainabilitySection isStandalonePage={false} />
      </div>

      {/* 10. CLOSING HIGH-CONVERSION CTA (Deep Navy) */}
      <CTASection />

      {/* 11. CONTACT & QUOTE PREVIEW SECTION (Clean White Background) */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 reveal-on-scroll">
              <span className="eyebrow-badge">Connect With Us</span>
              <h2 className="display-6 fw-bold text-primary mb-3">
                Let's Build Something Great Together.
              </h2>
              <p className="text-muted mb-4">
                Whether you need a full turnkey civil construction project, rooftop solar energy installation, or specialized solar-ready architectural planning, our engineers are ready to assist.
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="p-2 rounded bg-primary-subtle text-primary">
                    <PhoneCall size={18} />
                  </div>
                  <div>
                    <strong className="d-block text-dark">Direct Engineering Lines:</strong>
                    <div className="d-flex align-items-center gap-2 mt-1">
                      <a href={`tel:${companyData.phones[0].raw}`} className="text-danger fw-bold text-decoration-none">
                        {companyData.phones[0].raw}
                      </a>
                      <span className="text-muted">·</span>
                      <a href={`tel:${companyData.phones[1].raw}`} className="text-dark fw-semibold text-decoration-none">
                        {companyData.phones[1].raw}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="p-2 rounded bg-primary-subtle text-primary">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <strong className="d-block text-dark">Office Address:</strong>
                    <span className="small text-muted">{companyData.address.full}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-light rounded border small text-muted">
                <strong>GST Registered Enterprise:</strong> {companyData.gst}
              </div>
            </div>

            <div className="col-lg-7 reveal-on-scroll reveal-delay-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
