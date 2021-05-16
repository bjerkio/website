import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { useIntl } from 'react-intl';

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  schema?: unknown;
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
      }
    }
  }
`;

const SEO: React.FC<SEOProps> = ({ title, description, image, schema }) => {
  const { pathname } = useLocation();
  const intl = useIntl();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  const orgSchema = schema || {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: 'https://bjerk.io',
    name: 'Bjerk',
    logo: 'https://bjerk.io/images/logo.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+4722120512',
      contactType: 'Main phone number',
    },
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang: intl.locale,
      }}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
    </Helmet>
  );
};

export default SEO;
