/** @jsx */
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { Box, Grid, Link, Text } from 'theme-ui';
import { Container } from '../../../container';
import { Logo } from '../logo';
import { NetworksLinks } from './networks-links';

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

const Footer: React.FC = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ bg: 'dark' }}>
      <Container
        sx={{
          maxWidth: '1920px',
          pt: [5, 6, 6],
          color: 'white',
          px: [5, 5, 6],
        }}
        {...props}
      >
        <Box>
          <Logo color="white" sx={{ width: '4em' }} />
        </Box>
        <Grid
          gap={[1, 1, 6]}
          columns={['1fr', '1fr', '1fr', '1fr 0.5fr 1fr 1fr']}
          pt={0}
        >
          <Box>
            <Text
              sx={{ fontSize: 40, my: 4, lineHeight: '40px', fontWeight: 700 }}
            >
              {t('footer:left-greeting')[0]}
              <br />
              {t('footer:left-greeting')[1]}
            </Text>
          </Box>
          <Box sx={{ fontSize: 28, my: 4, marginLeft: [0, '40%', '40%'] }}>
            <Link href="#" sx={{ whiteSpace: 'nowrap' }}>
              {t('company-info:phone-number')}
            </Link>
            <br />
            <Link href="#">{t('company-info:email')}</Link>
          </Box>
          <Box>
            <Text sx={{ fontSize: 28, my: [0, 4, 4], mb: [4, 0, 0] }}>
              {t('company-info:address')}
              <br />
              {t('company-info:postalcode')}
            </Text>
          </Box>
          <NetworksLinks
            sx={{ display: ['block', 'block', 'none'], mt: 3, mb: 5 }}
          />
          <Box sx={{ textAlign: ['start', 'start', 'end'], my: 4 }}>
            <Text sx={{ fontSize: 28 }}>
              {t('footer:right-greeting')[0]}
              <br />
              {t('footer:right-greeting')[1]}
            </Text>
            <Text sx={{ fontSize: 20, color: 'primary', mt: 3, display: 'none' }}>
              Se ledige stillinger
              <br />
              Personvern
            </Text>
          </Box>
        </Grid>
        <Grid
          sx={{
            display: 'grid',
            gridGap: 3,
            alignItems: 'start',
            gridTemplateColumns: ['1fr', '1fr 1fr'],
            pt: '4rem',
            pb: '4rem',
          }}
        >
          <Box sx={{ display: ['block', 'block', 'none'] }}>
            <Text sx={{ flex: 1, fontSize: 20 }}>{t('footer:copyright')}</Text>
            <Text sx={{ flex: 1, fontSize: 20 }}>
              {t('company-info:organization-number')}
            </Text>
          </Box>
          <Box sx={{ display: ['none', 'none', 'block'] }}>
            <Text sx={{ flex: 1, fontSize: 20, whiteSpace: 'pre' }}>
              {t('footer:copyright')} {t('company-info:organization-number')}
            </Text>
          </Box>
          <NetworksLinks sx={{ display: ['none', 'none', 'block'] }} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
