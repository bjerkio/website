import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  schema?: unknown;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image,
  schema,
}) => {
  const { basePath, pathname } = useRouter();

  // TODO: add good defaults for title, description and image
  const seo = {
    title: title || 'Bjerk',
    description: description || 'Bjerk sin nettside',
    image: `${basePath}/${image || ''}`,
    url: `${basePath}${pathname}`,
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
    <Head>
      <title>{seo.title}</title>
      <link rel="icon" href="/favicon.ico" />
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

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;800&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};
