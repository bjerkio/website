/** @jsx jsx */
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import React from 'react';
import { jsx } from 'theme-ui';

export const Link: React.FC<GatsbyLinkProps<unknown>> = ({ ref: _, ...props }) => (
  <GatsbyLink
    {...props}
    activeClassName="active"
    sx={{
      variant: 'button',
      color: 'inherit',
      '&.active': {
        color: 'primary',
      },
    }}
  />
);

Link.displayName = 'Link';

export default Link;
