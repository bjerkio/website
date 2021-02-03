import {
  Box,
  Link,
  Button as ThemeUIButton,
  ButtonProps as ThemeUIButtonProps,
} from '@theme-ui/components';
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { SystemStyleObject } from 'theme-ui';

interface ButtonProps extends ThemeUIButtonProps {
  href: string;
}

const styles: SystemStyleObject = {
  width: 'auto',
  displayContent: 'center',
  'button:hover': {
    '.animation-arrow': {
      fontSize: 4,
      ml: 2,
    },
  },
  button: {
    color: 'black',
    fontWeight: 'normal',
    cursor: 'pointer',
  },
  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: 'black',
  },
  '.animation-arrow': {
    ml: 1,
    fontSize: 3,
  },
};

const Button: React.FC<ButtonProps> = ({ href, children, ...props }) => (
  <Box sx={styles}>
    <ThemeUIButton {...props}>
      <Link href={href}>
        {children}
        <HiArrowNarrowRight className="animation-arrow" />
      </Link>
    </ThemeUIButton>
  </Box>
);

export default Button;
