/** @jsx */
import React from 'react';
import { Box, Flex, Link } from 'theme-ui';
import SocialFacebookSvg from '../../../../assets/Social-Facebook.svg';
import SocialGithubSvg from '../../../../assets/Social-Github.svg';
import SocialLinkedinSvg from '../../../../assets/Social-Linkedin.svg';

export const NetworksLinks: React.FC = (props) => (
  <Box {...props}>
    <Flex sx={{ justifyContent: ['flex-start', 'flex-start', 'flex-end'] }}>
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
            width: '1.7rem',
            maxWidth: '35px',
            mr: [2, 0, 0],
            ml: [0, 3, 3],
            cursor: 'pointer',
          }}
        >
          {icon}
        </Link>
      ))}
    </Flex>
  </Box>
);
