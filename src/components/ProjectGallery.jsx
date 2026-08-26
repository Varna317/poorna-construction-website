import React, { useState } from 'react';
import { Eye, ZoomIn } from 'lucide-react';
import LightboxModal from './LightboxModal';

export default function ProjectGallery({ images, limit }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayImages = limit ? images.slice(0, limit) : images;

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div className="project-gallery-grid">
        {displayImages.map((img, idx) => (
          <div
            key={img.id || idx}
            className="project-img-wrapper"
            onClick={() => openLightbox(idx)}
            role="button"
            tabIndex={0}
            aria-label={`View full-size photo ${idx + 1}: ${img.caption}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(idx);
              }
            }}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="project-thumb-img"
              loading="lazy"
            />
            <div className="project-img-overlay">
              <div>
                <div className="d-flex align-items-center gap-1 text-white small mb-1 fw-semibold">
                  <ZoomIn size={14} className="text-danger" />
                  <span>Click to Expand</span>
                </div>
                <p className="project-overlay-caption">
                  {img.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <LightboxModal
        isOpen={lightboxOpen}
        images={images}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
