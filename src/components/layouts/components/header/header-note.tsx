/** @jsx jsx */
import { darken } from '@theme-ui/color';
import { Link, graphql } from 'gatsby';
import React from 'react';
import { Box, Container, Text, jsx } from 'theme-ui';
import { HeaderNoteFragment } from '../../../../generated/graphql-types';

const HeaderNote: React.FC<{ data: HeaderNoteFragment }> = ({ data }) => {
  return (
    <Container variant="centered" sx={{ my: 4 }}>
      <Box
        sx={{
          backgroundColor: 'yelloooo',
          p: 3,
          pb: 2,
          lineHeight: '2rem',
          display: 'inline-block',
          fontWeight: 500,
        }}
      >
        <Text>{data.message}</Text>{' '}
        <Link sx={{ ml: 3, color: darken('yelloooo', 0.5) }} to={data.link.to}>
          {data.link.text}
        </Link>
      </Box>
    </Container>
  );
};

export const query = graphql`
  fragment HeaderNote on SiteSiteMetadataHeaderNote {
    link {
      text
      to
    }
    message
    show
  }
`;

export default HeaderNote;
