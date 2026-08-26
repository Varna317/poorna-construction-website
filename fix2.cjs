const fs = require('fs');
const path = 'e:/Poorna-Construction-Website/src/styles/custom.css';

let css = fs.readFileSync(path, 'utf8');

// Replace the previous low-specificity overrides with high-specificity ones using #root
const oldOverrides = `/* --- UI Fixes for Dark Panels inside Light Backgrounds --- */
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
}`;

const newOverrides = `/* --- UI Fixes for Dark Panels inside Light Backgrounds (High Specificity) --- */
#root .bg-white .who-we-are-panel .text-white,
#root .bg-white .who-we-are-panel h1,
#root .bg-white .who-we-are-panel h2,
#root .bg-white .who-we-are-panel h3,
#root .bg-white .who-we-are-panel h4,
#root .bg-white .who-we-are-panel h5,
#root .bg-white .who-we-are-panel h6,
#root .bg-white .who-we-are-panel strong,
#root .bg-light-poorna .bg-dark-poorna .text-white,
#root .bg-light-poorna .bg-dark-poorna h1,
#root .bg-light-poorna .bg-dark-poorna h2,
#root .bg-light-poorna .bg-dark-poorna h3,
#root .bg-light-poorna .bg-dark-poorna h4,
#root .bg-light-poorna .bg-dark-poorna h5,
#root .bg-light-poorna .bg-dark-poorna h6 {
  color: #ffffff !important;
}

#root .bg-white .who-we-are-panel .text-light,
#root .bg-white .who-we-are-panel p,
#root .bg-light-poorna .bg-dark-poorna .text-light,
#root .bg-light-poorna .bg-dark-poorna p {
  color: var(--text-light-body, #f1f5f9) !important;
}`;

if (css.includes(oldOverrides)) {
  css = css.replace(oldOverrides, newOverrides);
} else {
  // If for some reason it's slightly different, just append the new one
  css += '\n' + newOverrides;
}

fs.writeFileSync(path, css, 'utf8');
console.log('CSS updated successfully with high specificity');
