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
          layout: FULL_WIDTH
          height: 700
          placeholder: DOMINANT_COLOR
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
        mb: [3, 5],
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
        {image && (
          <GatsbyImage
            image={img}
            alt={title}
            sx={{ transition: '.4s', borderRadius: '0.3125rem' }}
          />
        )}
        <Box sx={{ mt: 1, fontSize: '22px', fontWeight: '600', my: 3 }}>
          <span className="linkText">{title}</span>
        </Box>
      </Link>
    </Box>
  );
};
