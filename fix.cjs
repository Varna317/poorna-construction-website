const fs = require('fs');
const path = 'e:/Poorna-Construction-Website/src/styles/custom.css';

let css = fs.readFileSync(path, 'utf8');

// Replace logo size
css = css.replace(/height: 52px;/g, 'height: 75px;\n  image-rendering: -webkit-optimize-contrast;');
css = css.replace(/height: 42px;/g, 'height: 55px;');

// Append high-contrast overrides
const overrides = `
/* --- UI Fixes for Dark Panels inside Light Backgrounds --- */
.bg-white .who-we-are-panel .text-white,
.bg-white .who-we-are-panel h1,
.bg-white .who-we-are-panel h2,
.bg-white .who-we-are-panel h3,
.bg-white .who-we-are-panel h4,
.bg-white .who-we-are-panel h5,
.bg-white .who-we-are-panel h6,
.bg-white .who-we-are-panel strong,
.bg-light-poorna .bg-dark-poorna .text-white,
.bg-light-poorna .bg-dark-poorna h1,
.bg-light-poorna .bg-dark-poorna h2,
.bg-light-poorna .bg-dark-poorna h3,
.bg-light-poorna .bg-dark-poorna h4,
.bg-light-poorna .bg-dark-poorna h5,
.bg-light-poorna .bg-dark-poorna h6 {
  color: #ffffff !important;
}

.bg-white .who-we-are-panel .text-light,
.bg-white .who-we-are-panel p,
.bg-light-poorna .bg-dark-poorna .text-light,
.bg-light-poorna .bg-dark-poorna p {
  color: var(--text-light-body, #f1f5f9) !important;
}

/* Specific fix for spans in features */
.who-feature-box span {
  color: #f1f5f9 !important;
}
`;

fs.writeFileSync(path, css + overrides, 'utf8');
console.log('CSS updated successfully');
