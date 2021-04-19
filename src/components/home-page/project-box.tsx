/** @jsx jsx */
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Box, jsx } from 'theme-ui';
import { ProjectBoxFragment } from '../../generated/graphql-types';

export const query = graphql`
  fragment ProjectBox on MdxFrontmatter {
    title
    slug
    language
    image {
      childImageSharp {
        gatsbyImageData(
          width: 1540
          height: 700
          jpgOptions: { quality: 100 }
          pngOptions: { quality: 100 }
          transformOptions: { cropFocus: CENTER, fit: COVER }
          quality: 100
        )
      }
    }
  }
`;

export const ProjectBox: React.FC<{ data: ProjectBoxFragment }> = ({
  data: { title, slug, language, image },
}) => {
  const img = getImage(image as any);
  return (
    <Box
      sx={{
        mb: 5,
        overflow: 'hidden',
        ':hover': {
          cursor: 'pointer',
          '.linkText': { borderBottom: '2px solid' },
          '.img': {
            opacity: '.7',
            transition: '.5s',
          },
        },
      }}
    >
      <Link
        to={`projects/${language}/${slug}`}
        sx={{ color: 'text', textDecoration: 'none', overflow: 'hidden' }}
      >
        <Box
          sx={{
            mt: 4,
            ml: ['-20vw', 0, 0],
            height: ['37vh', '100%', '100%'],
            width: ['140vw', '100%', '100%'],
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <GatsbyImage
            image={img}
            alt={title}
            sx={{ width: '100%', transition: '.4s' }}
          />
        </Box>
        <Box sx={{ mt: 1, fontSize: '22px', fontWeight: '600', mx: [4, 4, 0] }}>
          <span className="linkText">{title}</span>
        </Box>
      </Link>
    </Box>
  );
};
