/** @jsx jsx */
import { Link } from 'gatsby';
import React from 'react';
import { Box, Heading, jsx } from 'theme-ui';

export interface CallToActionBoxProps {
  title: string;
  linkTo?: string;
  linkText?: string;
  image?: any;
}

const CallToActionBox: React.FC<CallToActionBoxProps> = ({
  children,
  title,
  linkTo,
  linkText,
  image,
}) => {
  return (
    <Box>
      <Box sx={{ width: 100, height: 30, marginBottom: 40 }}>{image}</Box>
      <Heading
        sx={{ mb: 3, fontWeight: '700', fontSize: 'clamp(11px, 5vw, 30px)' }}
      >
        {title}
      </Heading>
      <Box sx={{ fontSize: 'clamp(8px, 4vw, 22px)' }}>{children}</Box>
      <Box mt={4}>
        {linkTo && (
          <Link
            className="link"
            to={linkTo}
            sx={{ fontSize: 'clamp(8px, 4vw, 20px)' }}
          >
            {linkText}
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default CallToActionBox;
