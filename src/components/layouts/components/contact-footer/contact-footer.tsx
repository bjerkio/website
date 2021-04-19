import { Container, Flex } from '@theme-ui/components';
import React from 'react';
// import { useIntl } from 'react-intl';
import { Box, ThemeUIStyleObject } from 'theme-ui';
// import Link from '../../../link';

const styles: ThemeUIStyleObject = {
  mb: 0,
  mx: 'auto',
  px: [4, 4, 6],
  backgroundColor: '#393E46',
  '.container': {
    height: '100%',
    margin: '0 auto',
    mt: 5,
    px: [5, 5, 6],
    py: [5, 5, 6],
    maxWidth: '1920px',
    '.header': {
      color: 'white',
      fontSize: 60,
      fontWeight: '500',
    },
    '.label': {
      mb: 4,
      mt: 1,
      color: 'white',
      fontSize: 24,
    },
    '.input': {
      mb: 3,
      background: '#232931',
      color: 'white',
      border: 'none',
      px: 4,
      py: 3,
      borderRadius: '10px',
    },
    '.button': {
      mt: 4,
      py: '15px',
    },
  },
};

const ContactFooter: React.FC = () => {
  // const intl = useIntl();

  return (
    <Box sx={styles}>
      <Container className="container">
        <Flex>
          <Box>
            {/* <Heading className="header">
              {intl.formatMessage({
                defaultMessage: ''
              })}
            </Heading>
            <Label className="label">{t('contact-footer:description')}</Label>
            <Input
              className="input"
              placeholder={t('contact-footer:fullname')}
            />
            <Input className="input" placeholder={t('contact-footer:email')} />
            <Input
              className="input"
              placeholder={t('contact-footer:project-description')}
            />
            <Input className="input" placeholder={t('contact-footer:budget')} />
            <Link to="/contact" className="button">
              {t('contact-footer:button-text')}
            </Link> */}
          </Box>
          {/* <Box className="video"></Box> */}
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactFooter;
