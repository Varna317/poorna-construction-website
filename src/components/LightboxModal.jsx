import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  const modalContent = (
    <div
      className="position-fixed"
      style={{ 
        inset: 0, 
        zIndex: 999999, 
        backgroundColor: 'rgba(6, 14, 24, 0.95)', 
        backdropFilter: 'blur(5px)' 
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Close Button - Fixed to Top Right */}
      <button
        onClick={onClose}
        className="position-absolute d-flex align-items-center justify-content-center"
        style={{ 
          top: '15px', 
          right: '15px', 
          zIndex: 1000000, 
          background: 'rgba(220, 53, 69, 0.9)', 
          border: '2px solid rgba(255, 255, 255, 0.8)', 
          borderRadius: '50%', 
          width: '44px',
          height: '44px',
          color: 'white',
          cursor: 'pointer',
          padding: 0
        }}
        aria-label="Close image lightbox"
      >
        <X size={24} />
      </button>

      {/* Navigation - Fixed to Left/Right Centers */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="position-absolute start-0 top-50 translate-middle-y ms-2 ms-md-4 d-flex align-items-center justify-content-center"
            style={{ 
              zIndex: 1000000, 
              background: 'rgba(0, 0, 0, 0.7)', 
              border: '1px solid rgba(255, 255, 255, 0.3)', 
              borderRadius: '50%', 
              width: '50px',
              height: '50px',
              color: 'white',
              cursor: 'pointer',
              padding: 0
            }}
            aria-label="Previous photograph"
          >
            <ChevronLeft size={30} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="position-absolute end-0 top-50 translate-middle-y me-2 me-md-4 d-flex align-items-center justify-content-center"
            style={{ 
              zIndex: 1000000, 
              background: 'rgba(0, 0, 0, 0.7)', 
              border: '1px solid rgba(255, 255, 255, 0.3)', 
              borderRadius: '50%', 
              width: '50px',
              height: '50px',
              color: 'white',
              cursor: 'pointer',
              padding: 0
            }}
            aria-label="Next photograph"
          >
            <ChevronRight size={30} />
          </button>
        </>
      )}

      {/* Scrollable Content Area */}
      <div 
        className="w-100 h-100 overflow-auto d-flex flex-column"
        style={{ padding: '15px' }} 
        onClick={onClose}
      >
        {/* Fit-content container tightly wraps the image */}
        <div 
          className="m-auto d-flex flex-column align-items-center position-relative"
          style={{ width: 'fit-content', maxWidth: '100%' }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentImage.url}
            alt={currentImage.alt || "Project photograph"}
            className="shadow-lg rounded"
            style={{ 
              maxWidth: '100%',
              maxHeight: '80vh', 
              width: 'auto',
              height: 'auto',
              display: 'block',
              border: '1px solid rgba(255,255,255,0.15)'
            }}
          />

          <div 
            className="mt-3 p-3 rounded text-center w-100"
            style={{ 
              background: 'rgba(0, 0, 0, 0.85)', 
              border: '1px solid rgba(255, 255, 255, 0.15)', 
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)' 
            }}
          >
            <div className="d-flex justify-content-center mb-1">
              <span className="badge bg-danger">
                {currentIndex + 1} of {images.length}
              </span>
            </div>
            <p className="mb-0 mt-1 fw-medium" style={{ color: '#ffffff', fontSize: '0.95rem', lineHeight: '1.5' }}>
              {currentImage.caption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
