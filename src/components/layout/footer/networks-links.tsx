import { theme } from '@bjerk/brand';
import React, { useMemo } from 'react';
import { Box, Flex, Link } from 'theme-ui';
import SocialFacebook from '../../illustrations/social-facebook';
import SocialGithub from '../../illustrations/social-github';
import SocialLinkedin from '../../illustrations/social-linkedin';
export interface NetworksLinksProps {
  githubUrl?: string;
  linkedInUrl?: string;
  facebookUrl?: string;
  color?: string;
}

export const NetworksLinks: React.FC<NetworksLinksProps> = props => {
  // check if any url is specified

  const links = useMemo(() => {
    if (props.githubUrl || props.linkedInUrl || props.facebookUrl) {
      const result = [];

      if (props.githubUrl) {
        result.push({
          href: props.githubUrl,
          label: 'Github Profile',
          icon: <SocialGithub width="100%" height="100%" color={props.color} />,
        });
      }
      if (props.linkedInUrl) {
        result.push({
          href: props.linkedInUrl,
          label: 'Github Profile',
          icon: (
            <SocialLinkedin width="100%" height="100%" color={props.color} />
          ),
        });
      }

      if (props.facebookUrl) {
        result.push({
          href: props.facebookUrl,
          label: 'Github Profile',
          icon: (
            <SocialFacebook width="100%" height="100%" color={props.color} />
          ),
        });
      }
      return result;
    } else {
      return [
        {
          href: 'https://github.com/bjerkio',
          label: 'Github Profile',
          icon: <SocialGithub width="100%" height="100%" color={props.color} />,
        },
        {
          href: 'https://www.linkedin.com/company/bjerk/',
          label: 'LinkedIn Profile',
          icon: (
            <SocialLinkedin width="100%" height="100%" color={props.color} />
          ),
        },
        {
          href: 'https://www.facebook.com/WeAreDigitalization',
          label: 'Facebook Profile',
          icon: (
            <SocialFacebook width="100%" height="100%" color={props.color} />
          ),
        },
      ];
    }
  }, [props.githubUrl, props.linkedInUrl, props.facebookUrl, props.color]);

  return (
    <Box {...props}>
      <Flex sx={{ gap: 3 }}>
        {links.map(({ href, icon, label }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            sx={{
              width: '1.7rem',
              maxWidth: '35px',
              cursor: 'pointer',
            }}
          >
            {icon}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};
