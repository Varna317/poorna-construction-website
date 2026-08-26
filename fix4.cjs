const fs = require('fs');
const path = 'e:/Poorna-Construction-Website/src/styles/custom.css';

let css = fs.readFileSync(path, 'utf8');

const newOverrides = `

/* --- Lightbox Modal Enhancements --- */
.poorna-lightbox-backdrop {
  align-items: flex-start !important;
  overflow-y: auto !important;
}

.lightbox-content {
  margin: auto !important;
  max-height: none !important;
  padding: 2rem 0 !important;
}

.lightbox-img-container {
  max-height: none !important;
}

.lightbox-img {
  max-height: 85vh !important;
}

/* Ensure close button is fixed to screen top right */
.lightbox-btn-close {
  position: fixed !important;
  top: 20px !important;
  right: 20px !important;
  background: rgba(220, 53, 69, 0.9) !important;
  border: 2px solid rgba(255, 255, 255, 0.8) !important;
  border-radius: 50% !important;
  padding: 8px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  z-index: 2050 !important;
  color: white !important;
  transition: all 0.2s ease;
}

.lightbox-btn-close:hover {
  background: rgba(220, 53, 69, 1) !important;
  transform: scale(1.1);
}

/* Navigation buttons styling to make them clearer */
.lightbox-nav-btn {
  background: rgba(0, 0, 0, 0.6) !important;
  border-radius: 50% !important;
  padding: 10px !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
}

.lightbox-nav-btn:hover {
  background: rgba(0, 0, 0, 0.9) !important;
  border: 1px solid rgba(255, 255, 255, 0.8) !important;
}

/* Make text below image highly visible */
.lightbox-caption-box {
  background: rgba(0, 0, 0, 0.8) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5) !important;
  padding: 1rem 1.5rem !important;
  margin-top: 1rem !important;
}

.lightbox-caption-box p {
  color: #ffffff !important;
  font-size: 0.95rem !important;
  font-weight: 500 !important;
}

/* Ensure caption text isn't overridden by global */
#root .lightbox-caption-box p,
#root .lightbox-caption-box span {
  color: #ffffff !important;
}

`;

css += newOverrides;

fs.writeFileSync(path, css, 'utf8');
console.log('CSS updated successfully for lightbox fixes');
