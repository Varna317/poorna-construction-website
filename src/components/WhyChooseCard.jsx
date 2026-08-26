import React from 'react';

export default function WhyChooseCard({ item }) {
  return (
    <div className="advantage-card">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="advantage-number">{item.number}</span>
      </div>
      <h3 className="h5 fw-bold text-primary mb-2">
        {item.title}
      </h3>
      <h4 className="h6 fw-semibold text-secondary mb-2" style={{ fontSize: '0.9rem' }}>
        {item.summary}
      </h4>
      <p className="small text-muted mb-0">
        {item.description}
      </p>
    </div>
  );
}
