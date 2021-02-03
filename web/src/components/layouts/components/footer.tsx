/** @jsx */
import React from 'react';
import { Box, Flex, Link, Text } from 'theme-ui';
import SocialFacebookSvg from '../../../assets/Social-Facebook.svg';
import SocialGithubSvg from '../../../assets/Social-Github.svg';
import SocialLinkedinSvg from '../../../assets/Social-Linkedin.svg';
import { Container } from '../../container';
import { Logo } from './logo';

export const Footer: React.FC = (props) => (
  <Box sx={{ p: 5, mt: 6, pt: 6, bg: 'dark', color: 'white' }} {...props}>
    <Box sx={{ px: 6 }}>
      <Logo sx={{ color: 'white', width: '70px' }} />
    </Box>
    <Container
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
            Vi vil gjerne jobbe
            <br />
            med deg!
          </Text>
        </strong>
      </Box>
      <Box sx={{ lineHeight: '20px' }}>
        <Link href="#">+47 22 12 05 12</Link>
        <br />
        <Link href="#">kontoret@bjerk.io</Link>
      </Box>
      <Box>
        <Text sx={{ fontSize: 3, lineHeight: '22px' }}>
          Dronningens gate 8B
          <br />
          0151 Oslo
        </Text>
      </Box>
      <Box sx={{ fontSize: 3, textAlign: 'end' }}>
        <Text sx={{ fontSize: 3, lineHeight: '22px' }}>
          Vi er alltid på utkikk etter
          <br />
          nye talenter – si hei!
        </Text>
        <Text sx={{ fontSize: 2, color: 'primary', mt: 3, lineHeight: '22px' }}>
          Se ledige stillinger
          <br />
          Personvern
        </Text>
      </Box>
    </Container>
    <Container
      sx={{
        display: 'grid',
        gridGap: 3,
        alignItems: 'start',
        gridTemplateColumns: ['1fr 1fr'],
        pt: '63px',
      }}
    >
      <Box>
        <Text sx={{ fontSize: 2 }}>© 2019 Bjerk. Alle rettigheter.</Text>
      </Box>
      <Box>
        <Flex sx={{ justifyContent: 'flex-end' }}>
          {[
            { href: 'https://github.com/bjerkio', icon: <SocialGithubSvg /> },
            {
              href: 'https://www.linkedin.com/company/bjerk/',
              icon: <SocialLinkedinSvg />,
            },
            {
              href: 'https://www.facebook.com/WeAreDigitalization',
              icon: <SocialFacebookSvg />,
            },
          ].map(({ href, icon }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: '21px',
                ml: 2,
                cursor: 'pointer',
              }}
            >
              {icon}
            </Link>
          ))}
        </Flex>
      </Box>
    </Container>
  </Box>
);
