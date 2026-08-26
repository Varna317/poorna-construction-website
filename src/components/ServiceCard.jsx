import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Sun, 
  Zap, 
  Wrench, 
  DraftingCompass, 
  Check, 
  ArrowRight,
  ShieldAlert,
  BatteryCharging,
  Layers
} from 'lucide-react';

const iconMap = {
  Building2,
  Sun,
  Zap,
  Wrench,
  DraftingCompass,
  ShieldAlert,
  BatteryCharging,
  Layers
};

export default function ServiceCard({ service, isFeatured = false }) {
  const IconComponent = iconMap[service.iconName] || Building2;

  return (
    <div className={`service-box ${isFeatured ? 'service-box-featured' : ''}`}>
      <div className="icon-wrapper">
        <IconComponent size={26} />
      </div>

      <h3 className="h5 fw-bold mb-2 text-dark">
        {service.title}
      </h3>

      <p className="small mb-3 flex-grow-1 text-muted">
        {service.shortDesc}
      </p>

      {service.highlights && service.highlights.length > 0 && (
        <ul className="list-unstyled small mb-4">
          {service.highlights.map((item, idx) => (
            <li key={idx} className="d-flex align-items-start gap-2 mb-1.5 text-secondary">
              <Check size={14} className="text-danger mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-3 border-top border-light-subtle">
        <Link
          to={`/contact?service=${encodeURIComponent(service.title)}#quote`}
          className="d-inline-flex align-items-center gap-1 fw-bold small text-primary"
        >
          <span>Enquire About This Service</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
