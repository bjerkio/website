import { Box, Container, Divider, Heading, Text } from '@theme-ui/components';
import { graphql } from 'gatsby';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ProjectBox } from '../components/home-page/project-box';
import { Layout } from '../components/layouts';
import SEO from '../components/seo';
import { SkillBox } from '../components/skill-box';
import { HomePageQuery } from '../generated/graphql-types';

export const query = graphql`
  query HomePage {
    allMdx(
      sort: { fields: [frontmatter___id] }
      filter: {
        frontmatter: { language: { eq: "en" } }
        fileAbsolutePath: { glob: "**/content/projects/**/*" }
      }
    ) {
      nodes {
        frontmatter {
          ...ProjectBox
        }
      }
    }
    skillImage: file(
      relativePath: { eq: "heros/sigmund-QuusekRfTI8-unsplash.jpg" }
    ) {
      ...SkillImage
    }
  }
`;

const Homepage: React.FC<{ data: HomePageQuery }> = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <Container variant="centered">
        <Heading
          as="h1"
          sx={{
            fontSize: [6, 8],
            fontWeight: 700,
            lineHeight: ['', '5rem'],
            py: 6,
            mb: 5,
          }}
        >
          <FormattedMessage
            id="heading"
            defaultMessage="We’re developers, creators, strategists and activists"
          />
          <Text sx={{ color: 'primary' }}>.</Text>
          <Divider
            sx={{
              borderWidth: '0.5rem',
              mt: 5,
              width: '50%',
              color: 'text',
              borderRadius: '0.3125rem',
            }}
          />
        </Heading>
        <SkillBox
          image={data.skillImage.childImageSharp}
          name="software-development"
          title="Experts in Software Development"
          linkTo="/services"
        >
          <FormattedMessage
            id="software-skill-box"
            defaultMessage={[
              'Bjerk develops desktop and mobile applications.',
              'We deliver digital solutions based on modern technology',
              'and methodology.',
            ].join(' ')}
          />
        </SkillBox>
        <Box sx={{ mt: 6 }}>
          {data.allMdx.nodes.map((item, index) => (
            <ProjectBox key={index} data={item.frontmatter} />
          ))}
        </Box>
      </Container>
    </Layout>
  );
};

export default Homepage;
