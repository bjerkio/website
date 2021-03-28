import { Box, Grid, Heading, Label } from '@theme-ui/components';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import BjerkVideo from '../assets/Bjerk.webm';
import Button from '../components/button';
import { Container } from '../components/container';
import CallToActionBox, {
  CallToActionBoxProps,
} from '../components/home-page/call-to-action-box';
import CallToActionImage, {
  CallToActionImageProps,
} from '../components/home-page/call-to-action-image';
import IntroVideo from '../components/home-page/intro-video';
import { Layout } from '../components/layouts';

const filterType = (obj, type) => {
  return obj.allMdx.edges
    .filter((edge) => edge.node?.frontmatter)
    .filter((edge) => edge.node.frontmatter.type === type)
    .map((edge) => edge.node.frontmatter.homePage);
};

const Homepage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query AllQuery {
      allMdx(sort: { fields: [frontmatter___id], order: ASC }) {
        edges {
          node {
            frontmatter {
              type
              homePage {
                title
                linkTo
                linkText
                image
                hoverImage
                description
                imageStyle {
                  ml
                }
              }
            }
          }
        }
      }
    }
  `);

  const actionBox: CallToActionBoxProps[] = filterType(
    data,
    'services-articles',
  );
  const projectsBox: CallToActionImageProps[] = filterType(data, 'projects');

  return (
    <Layout>
      <Box>
        <IntroVideo
          data={{
            videoUrl: BjerkVideo,
            videoTitle: null,
          }}
        >
          <Box sx={{ fontSize: 'clamp(16px, 8vw, 50px)' }}>
            <Label sx={{ fontWeight: '600' }}>
              Vi er produktutviklere, skapere, strateger og samfunnsaktivister.
            </Label>
            <Button href="/contact" sx={{ paddingTop: '15px', paddingBottom: '15px' }} >Start ditt prosjekt</Button>
          </Box>
        </IntroVideo>
        <Container sx={{ pt: [ 6, 6, 7 ], mb: 5 }}>
          <Heading
            sx={{
              mb: 3,
              fontWeight: '600',
              fontSize: 'clamp(16px, 8vw, 48px)',
            }}
          >
            Hvordan kan vi hjelpe deg?
          </Heading>
          <Box
            sx={{
              width: ['100%', '100%', '65%'],
              fontWeight: 'normal',
              fontSize: 'clamp(8px, 4vw, 22px)',
            }}
          >
            Vårt mål er å skape en arbeidsplass hvor folk drives av å skape
            opplevelser og forbedre hverdagen til folk – av folk, for folk. Vårt
            medium er teknologi, og lidenskapen er å skape.
          </Box>
          <Grid
            pt={5}
            sx={{
              gap: 5,
              gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr 1fr'],
            }}
          >
            {actionBox.map((ctabox, index) => (
              <CallToActionBox data={ctabox} key={index}>
                {ctabox.description}
              </CallToActionBox>
            ))}
          </Grid>
        </Container>
        <Container>
          <Box>
            <Label sx={{ fontWeight: '600', fontSize: '50px' }}>
              Sjekk ut noe av det vi har gjort
            </Label>
          </Box>
          {projectsBox.map((item, index) => (
            <CallToActionImage key={index} data={item} />
          ))}
        </Container>
      </Box>
    </Layout>
  );
};

export default Homepage;
