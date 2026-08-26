const fs = require('fs');
const path = 'e:/Poorna-Construction-Website/src/styles/custom.css';

let css = fs.readFileSync(path, 'utf8');

const newOverrides = `

/* --- Photo Captions High Contrast Fix --- */
#root .project-img-overlay .text-white,
#root .project-img-overlay .text-white *,
#root .project-img-overlay p.project-overlay-caption {
  color: #ffffff !important;
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);
}
`;

css += newOverrides;

fs.writeFileSync(path, css, 'utf8');
console.log('CSS updated successfully for photo captions');
