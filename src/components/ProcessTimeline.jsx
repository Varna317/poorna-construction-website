import React from 'react';
import { 
  MessageSquareText, 
  Compass, 
  DraftingCompass, 
  HardHat, 
  CheckCircle2, 
  ShieldCheck,
  Check
} from 'lucide-react';
import { processSteps } from '../data/processData';

const iconMap = {
  MessageSquareText,
  Compass,
  DraftingCompass,
  HardHat,
  CheckCircle2,
  ShieldCheck
};

export default function ProcessTimeline() {
  return (
    <div className="process-timeline">
      <div className="row g-4">
        {processSteps.map((step) => {
          const Icon = iconMap[step.iconName] || HardHat;
          return (
            <div className="col-lg-4 col-md-6" key={step.step}>
              <div className="process-step-card d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="process-step-number">{step.step}</div>
                  <div className="p-2 rounded-circle bg-primary-subtle text-primary">
                    <Icon size={22} />
                  </div>
                </div>

                <h3 className="h5 fw-bold text-primary mb-1">
                  {step.title}
                </h3>
                <div className="small text-danger fw-semibold mb-2">
                  {step.tagline}
                </div>

                <p className="small text-muted mb-4 flex-grow-1">
                  {step.description}
                </p>

                <div className="pt-3 border-top border-light-subtle">
                  <span className="d-block small fw-bold text-dark mb-2">Key Deliverables:</span>
                  <ul className="list-unstyled small mb-0">
                    {step.deliverables.map((item, idx) => (
                      <li key={idx} className="d-flex align-items-center gap-2 mb-1 text-muted">
                        <Check size={13} className="text-danger flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
