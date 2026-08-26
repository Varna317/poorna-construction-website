import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  UserCheck, 
  ShieldCheck, 
  FileCheck2, 
  CheckCircle2, 
  ArrowRight,
  Sun,
  Layers
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import SectionHeader from '../components/SectionHeader';
import ProjectGallery from '../components/ProjectGallery';
import CTASection from '../components/CTASection';
import { projectsData } from '../data/projectsData';

export default function ProjectsPage() {
  const project = projectsData[0];

  return (
    <>
      <SEOHead
        title="Verified Projects"
        description="NIRT Renewable Energy Yard Works & MCR Building Construction by Poorna Associates at Vijay Deepa & All watts sites in Poyyapatti, Harur."
      />

      {/* Page Header (Deep Navy) */}
      <section className="bg-dark-poorna text-white py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-8">
              <span className="eyebrow-badge eyebrow-light mb-2">Verified Case Study</span>
              <h1 className="display-5 fw-bold text-white mb-2">
                Project Portfolio
              </h1>
              <p className="lead text-light mb-0">
                Detailed documentation of certified infrastructure and renewable energy civil engineering projects executed by Poorna Associates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Case Study Main Body */}
      <section className="section-py bg-white">
        <div className="container">
          {/* Project Title Block */}
          <div className="mb-5 pb-4 border-bottom reveal-on-scroll">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-2">
              <span className="eyebrow-badge eyebrow-red mb-0">
                {project.category}
              </span>
              <span className="badge bg-success py-1.5 px-3 fw-semibold d-inline-flex align-items-center gap-1 small">
                <ShieldCheck size={15} />
                <span>Certified Operable & Complete</span>
              </span>
            </div>

            <h2 className="display-5 fw-bold text-primary mb-1">
              {project.title}
            </h2>
            <p className="h4 text-danger fw-semibold mb-3">
              {project.subtitle}
            </p>
            <p className="lead text-muted mb-0" style={{ maxWidth: '840px' }}>
              {project.overview}
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="row g-4 mb-5">
            <div className="col-md-3 col-sm-6 reveal-on-scroll reveal-delay-1">
              <div className="poorna-card p-3 h-100 bg-light-poorna">
                <div className="text-muted small mb-1 d-flex align-items-center gap-1">
                  <UserCheck size={16} className="text-danger" />
                  <span>Client</span>
                </div>
                <h3 className="h6 fw-bold text-primary mb-0">{project.client}</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 reveal-on-scroll reveal-delay-2">
              <div className="poorna-card p-3 h-100 bg-light-poorna">
                <div className="text-muted small mb-1 d-flex align-items-center gap-1">
                  <Calendar size={16} className="text-danger" />
                  <span>Construction Period</span>
                </div>
                <h3 className="h6 fw-bold text-primary mb-0">{project.dates.startDate} – {project.dates.completionDate}</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 reveal-on-scroll reveal-delay-3">
              <div className="poorna-card p-3 h-100 bg-light-poorna">
                <div className="text-muted small mb-1 d-flex align-items-center gap-1">
                  <MapPin size={16} className="text-danger" />
                  <span>Project Sites</span>
                </div>
                <h3 className="h6 fw-bold text-primary mb-0">{project.sites.join(', ')}</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 reveal-on-scroll reveal-delay-4">
              <div className="poorna-card p-3 h-100 bg-light-poorna">
                <div className="text-muted small mb-1 d-flex align-items-center gap-1">
                  <Building2 size={16} className="text-danger" />
                  <span>Scope of Work</span>
                </div>
                <h3 className="h6 fw-bold text-primary mb-0">{project.scope}</h3>
              </div>
            </div>
          </div>

          {/* Completion Certificate Statement */}
          <div className="p-4 p-md-5 rounded-3 bg-light-poorna border border-primary-subtle mb-5 reveal-on-scroll">
            <div className="d-flex align-items-start gap-3">
              <div className="p-3 rounded-circle bg-success-subtle text-success flex-shrink-0">
                <FileCheck2 size={28} />
              </div>
              <div>
                <h3 className="h5 fw-bold text-primary mb-2">
                  Project Completion & Permitting Verification
                </h3>
                <p className="text-dark mb-3" style={{ lineHeight: '1.7' }}>
                  {project.completionStatus}
                </p>
                <div className="row g-2">
                  {project.keyHighlights.map((hl, idx) => (
                    <div className="col-md-6" key={idx}>
                      <div className="d-flex align-items-center gap-2 small text-muted">
                        <CheckCircle2 size={15} className="text-success flex-shrink-0" />
                        <span>{hl}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Photographic Records / Gallery */}
          <div className="mb-5 reveal-on-scroll">
            <div className="mb-4">
              <h3 className="h3 fw-bold text-primary mb-1">
                Project Gallery
              </h3>
              <p className="text-muted small mb-0">
                Official photographic documentation showing yard progression, equipment foundations, structural roofing, and finished MCR control facility. Click any image to view in high resolution.
              </p>
            </div>

            <ProjectGallery images={project.images} />
          </div>

          {/* Planning a project CTA block */}
          <div className="p-4 p-md-5 rounded-3 bg-dark-poorna text-white text-center reveal-on-scroll">
            <span className="eyebrow-badge eyebrow-light mb-2">Next Steps</span>
            <h3 className="h3 fw-bold mb-3" style={{ color: '#ffffff' }}>
              Planning a Similar Utility-Scale Project?
            </h3>
            <p className="mb-4 max-w-700 mx-auto" style={{ color: '#f1f5f9' }}>
              Our engineering team specializes in unifying robust civil construction with high-yield solar infrastructure. Let's discuss your project blueprints, timelines, and technical requirements.
            </p>
            <Link to="/contact#quote" className="btn btn-poorna-red btn-lg">
              <span>Get a Quote</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </>
  );
}
