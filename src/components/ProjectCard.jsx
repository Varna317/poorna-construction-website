import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  UserCheck, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { getFeaturedProject } from '../data/projectsData';

export default function ProjectCard({ project = getFeaturedProject(), isDetailed = false }) {
  return (
    <div className="card poorna-card border shadow-sm overflow-hidden p-0">
      <div className="row g-0 align-items-stretch">
        <div className="col-lg-6">
          <div className="position-relative h-100 min-vh-25" style={{ minHeight: '340px' }}>
            <img
              src={project.featuredImage}
              alt="NIRT Renewable Energy yard and MCR building construction project"
              className="w-100 h-100 object-fit-cover"
              style={{ minHeight: '340px' }}
            />
            <div className="position-absolute top-0 start-0 m-3">
              <span className="badge bg-primary text-white py-1.5 px-3 fw-semibold small">
                Verified Completion
              </span>
            </div>
            <div className="position-absolute bottom-0 start-0 end-0 p-3 bg-dark bg-opacity-80 text-white">
              <div className="small d-flex align-items-center gap-1 mb-1" style={{ color: '#ffffff' }}>
                <ShieldCheck size={16} className="text-danger" />
                <span className="fw-semibold">Operable & Certified Facility</span>
              </div>
              <p className="small mb-0" style={{ color: '#f1f5f9' }}>
                10 Photographic Records Available
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 d-flex flex-column p-4 p-lg-5 justify-content-between bg-white">
          <div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="eyebrow-badge mb-0">Featured Infrastructure Project</span>
            </div>

            <h3 className="h4 fw-bold text-primary mb-1">
              {project.title}
            </h3>
            <p className="text-danger fw-semibold small mb-3">
              {project.subtitle}
            </p>

            <div className="mb-3 bg-light rounded p-3 border border-light-subtle">
              <div className="row g-2 small">
                <div className="col-sm-6">
                  <div className="text-muted">Client:</div>
                  <div className="fw-bold text-dark">{project.client}</div>
                </div>
                <div className="col-sm-6">
                  <div className="text-muted">Construction Period:</div>
                  <div className="fw-bold text-dark">{project.dates.startDate} – {project.dates.completionDate}</div>
                </div>
                <div className="col-12 mt-1 pt-2 border-top border-light-subtle">
                  <div className="text-muted">Project Sites:</div>
                  <div className="fw-semibold text-dark">
                    {project.sites.join(' & ')}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted small mb-3">
              {project.overview}
            </p>

            <ul className="list-unstyled small mb-3">
              {project.keyHighlights.map((hl, i) => (
                <li key={i} className="d-flex align-items-start gap-2 mb-1.5">
                  <CheckCircle size={14} className="text-danger mt-1 flex-shrink-0" />
                  <span className="text-secondary">{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-top border-light-subtle d-flex flex-wrap align-items-center justify-content-between gap-2">
            <Link to="/projects" className="btn btn-poorna-primary btn-sm">
              <span>View Case Study & Gallery</span>
              <ArrowRight size={14} />
            </Link>

            <Link to="/contact#quote" className="btn btn-poorna-outline btn-sm">
              Enquire for Similar Scope
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
