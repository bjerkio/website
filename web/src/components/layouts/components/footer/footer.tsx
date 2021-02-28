/** @jsx */
import React, { useEffect, useState } from 'react';
import { Box, Text } from 'theme-ui';
import { Container } from '../../../container';
import { Logo } from '../logo';
import { NetworskLinks } from './networks-links';
import localizedText from '../../../../config/localized-text';
import { Link } from "gatsby-plugin-intl"

const footerLocalizedText = localizedText.footer

  
export const Footer: React.FC = (props) => {
  
  const [loc, setLoc] = useState('no')
  useEffect(() => {
    setLoc(window.location.href.split('/')[3])
  }, []);

  return (<Container
    sx={{ mt: 0, pt: [5, 6, 6], bg: 'dark', color: 'white' }}
    {...props}
  >
    <Box>
      <Logo sx={{ color: 'white', width: '4em' }} />
    </Box>
    <Box
      sx={{
        display: 'grid',
        gridGap: 3,
        gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 0.5fr 1fr 1fr'],
        alignItems: 'start',
        pt: 0,
      }}
    >
      <Box>
        <strong>
          <Text sx={{ fontSize: 4, my: 4, lineHeight: '22px' }}>
            {footerLocalizedText.left[loc].map((text, index) =>
              <React.Fragment key={index}>
                {text}
                <br />
              </React.Fragment>)}
          </Text>
        </strong>
      </Box>
      <Box sx={{ lineHeight: '20px' }}>
        {footerLocalizedText.contacts[loc].map((text, index) =>
          <React.Fragment key={index}>
            <Link to="#">{text}</Link>
            <br />
          </React.Fragment>)}
      </Box>
      <Box>
        <Text sx={{ fontSize: 3, lineHeight: '22px' }}>
          {footerLocalizedText.address[loc].map((text, index) =>
            <React.Fragment key={index}>
              {text}
              <br />
            </React.Fragment>)}
        </Text>
      </Box>
      <NetworskLinks
        sx={{ display: ['block', 'block', 'none'], mt: 3, mb: 5 }}
      />
      <Box sx={{ fontSize: 3, textAlign: ['start', 'start', 'end'] }}>
        <Text sx={{ fontSize: 3, lineHeight: '22px' }}>
          {footerLocalizedText.right[loc][0]}
          <br />
          {footerLocalizedText.right[loc][1]}
        </Text>
        <Text sx={{ fontSize: 2, color: 'primary', mt: 3, lineHeight: '22px' }}>
          {footerLocalizedText.right[loc][2]}
          <br />
          {footerLocalizedText.right[loc][3]}
        </Text>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'grid',
        gridGap: 3,
        alignItems: 'start',
        gridTemplateColumns: ['1fr', '1fr 1fr'],
        pt: '4rem',
        pb: '4rem',
      }}
    >
      <Box>
        <Text sx={{ fontSize: 2 }}>
          {footerLocalizedText.copyright[loc]}
        </Text>
      </Box>
      <NetworskLinks sx={{ display: ['none', 'none', 'block'] }} />
    </Box>
  </Container>)
};
