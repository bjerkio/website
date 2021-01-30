/* eslint import/no-default-export: off */
import React from 'react';
import { Heading } from 'theme-ui';
import { BlockContent } from '../block-content/block-content';
import { Container } from '../block-content/container';
import { Layout } from '../layouts';

interface PageProps {
  pageContext: {
    title: string;
    _rawContent: unknown;
  };
}

export const Page: React.FC<PageProps> = ({
  pageContext: { title, _rawContent },
}) => (
  <Layout>
    <Container sx={{ pt: 5, width: '2/3' }}>
      <Heading sx={{ fontSize: 6, pb: 5 }}>{title}</Heading>
      <BlockContent blocks={_rawContent} />
    </Container>
  </Layout>
);

export default Page;
