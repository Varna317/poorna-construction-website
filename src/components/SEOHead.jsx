import { useEffect } from 'react';

export default function SEOHead({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Poorna Associates - Poorna Energy Construction`;
    } else {
      document.title = "Poorna Associates | Poorna Energy Construction - Civil & Commercial Construction, Solar & Renewable Energy";
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