import React from 'react'
import { Helmet } from 'react-helmet';

export interface SEOProps {
  title: string;

}

const SEO: React.FC<SEOProps> = ({ title }) => (
  <Helmet>
    <title>Bjerk{title ? `- ${title}` : ''}</title>
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://bjerk.io",
          "name": "Bjerk As",
          "logo": "https://bjerk.io/images/logo.svg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+4722120512",
            "contactType": "Main phone number"
          }
        }
      `}
    </script>
  </Helmet>
);

export default SEO
