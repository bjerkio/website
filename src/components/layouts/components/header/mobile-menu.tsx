import { Box, BoxProps, Flex } from '@theme-ui/components';
import { graphql } from 'gatsby';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { SystemStyleObject } from 'theme-ui';
import { Logo } from '../logo';

const styles: SystemStyleObject = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  zIndex: 1000,
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  bg: 'primary',
  pb: 4,
  a: {
    color: 'black',
    ml: 5,
    mr: 0,
    mb: 3,
    width: 'auto',
    fontSize: 4,
    lineHeight: 1,
    textDecorationLine: 'underline',
    textDecorationThickness: '3px',
  },
};

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

const MobileMenu: React.FC<BoxProps> = ({ ...props }) => {
  const { t } = useTranslation();

  return (
    <Box sx={styles} {...props}>
      <Flex sx={{ flexDirection: 'column' }}>
        <Logo
          dotColor="white"
          sx={{ color: 'black', width: '5em', mb: 4, ml: 5 }}
        />
        <Link to="/services">{t('header:services')}</Link>
        <Link to="/about">{t('header:about-us')}</Link>
        <Link to="/contact">{t('header:contact')}</Link>
      </Flex>
    </Box>
  );
};

export default MobileMenu;
