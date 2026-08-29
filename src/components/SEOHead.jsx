import { useEffect } from 'react';

export default function SEOHead({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Poorna Associates - Engineers & Architects`;
    } else {
      document.title = "Poorna Associates | POORNA ENERGY CONSTRUCTION - Civil Works & Renewable Energy";
    }

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }
  }, [title, description]);

  return null;
}
